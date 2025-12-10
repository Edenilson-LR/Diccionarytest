/* global api */
/*
  enes_PhrasalVerbs.js
  Diccionario para AnkiMine que devuelve phrasal verbs desde una base de datos local.
  - Clase: enes_PhrasalVerbs  (en = English source, es = Spanish target — prefijo recomendado)
  - Métodos: displayName(), setOptions(options), findTerm(word)
  - findTerm devuelve una Promise que resuelve a:
      - una string HTML con el resultado (preferible), o
      - un array vacío si no hay resultado
  Uso: subir a GitHub y pegar la URL raw en AnkiMine (Opc. Diccionarios -> Diccionario del usuario).
*/

class enes_PhrasalVerbs {
  constructor(options) {
    this.options = options || {};
    this.maxResults = this.options.maxResults || 20;
    this.word = '';
    // Base de datos local (puedes ampliar/modificar)
    this.db = [
      { verb: "ask out", meaning: "invitar a alguien a una cita", example: "He asked her out to dinner.", level: "B1" },
      { verb: "bring up", meaning: "mencionar o sacar un tema; criar a un hijo", example: "She brought up an interesting point in the meeting.", level: "B2" },
      { verb: "call off", meaning: "cancelar (un evento)", example: "They called off the match because of rain.", level: "B1" },
      { verb: "carry on", meaning: "continuar", example: "Please carry on with your work.", level: "A2" },
      { verb: "come across", meaning: "encontrar por casualidad; parecer (impresión)", example: "I came across an old photo. / He came across as shy.", level: "B1" },
      { verb: "come up with", meaning: "idear (una solución)", example: "She came up with a great solution.", level: "B2" },
      { verb: "get over", meaning: "superar (una enfermedad o choque)", example: "It took her months to get over the illness.", level: "B1" },
      { verb: "give up", meaning: "dejar de hacer algo (hábito); rendirse", example: "I gave up smoking last year.", level: "A2" },
      { verb: "look after", meaning: "cuidar", example: "Can you look after my cat?", level: "A1" },
      { verb: "look up", meaning: "buscar información / mejorar", example: "Look up the word in the dictionary. / Things are looking up.", level: "A2" },
      { verb: "pick up", meaning: "recoger; aprender de forma informal; dar un aventón", example: "I'll pick you up at 7. / He picked up Spanish quickly.", level: "A2" },
      { verb: "put off", meaning: "posponer", example: "They put off the meeting until next week.", level: "B1" },
      { verb: "put up with", meaning: "tolerar", example: "I won't put up with rude behaviour.", level: "B2" },
      { verb: "set up", meaning: "establecer; organizar", example: "They set up a new company.", level: "B1" },
      { verb: "turn down", meaning: "rechazar; bajar el volumen", example: "She turned down the job offer.", level: "B1" },
      { verb: "work out", meaning: "hacer ejercicio; resolver un problema", example: "I work out at the gym. / We worked out the answer.", level: "A2" },
      { verb: "write down", meaning: "anotar", example: "Write down the address.", level: "A1" }
      // añade aquí las demás entradas de tu base original si lo deseas
    ];
  }

  // Nombre que aparecerá en la UI de AnkiMine (puede ser async como en el ejemplo)
  async displayName() {
    try {
      var locale = await api.locale();
      // ejemplo de personalización por locale (opcional)
      if (locale && locale.indexOf && locale.indexOf('ES') !== -1) return 'Phrasal Verbs (inglés → español)';
      return 'Phrasal Verbs (EN→ES)';
    } catch (e) {
      return 'Phrasal Verbs (EN→ES)';
    }
  }

  // Permite cambiar opciones desde la UI de AnkiMine si lo soporta
  setOptions(options) {
    this.options = options || {};
    if (this.options.maxResults) this.maxResults = this.options.maxResults;
  }

  // Método obligatorio: recibe la palabra y debe devolver Promise que resuelva a HTML string o array
  async findTerm(word) {
    this.word = (word || '').toString().trim();
    if (!this.word) return []; // array vacío = sin resultados

    var q = this.word.toLowerCase();

    // buscar coincidencias: verbo exacto, que empiece o que contenga
    var matches = [];
    for (var i = 0; i < this.db.length; i++) {
      var v = (this.db[i].verb || '').toLowerCase();
      if (v === q || v.indexOf(q) === 0 || v.indexOf(q) > -1) {
        matches.push(this.db[i]);
        if (matches.length >= this.maxResults) break;
      }
    }

    if (matches.length === 0) return []; // sin resultados

    // Construir HTML de salida — AnkiMine mostrará el HTML en el popup
    var html = '<div class="user-dict-results"><h3>Phrasal verbs: ' + this._escapeHtml(this.word) + '</h3>';
    html += '<ul style="margin-left:0; padding-left:1em;">';
    for (var j = 0; j < matches.length; j++) {
      var e = matches[j];
      html += '<li style="margin-bottom:0.6em;">';
      html += '<strong>' + this._escapeHtml(e.verb) + '</strong>';
      if (e.level) html += ' <small style="color:#666">[' + this._escapeHtml(e.level) + ']</small>';
      html += '<div style="margin-top:0.2em;">' + this._escapeHtml(e.meaning) + '</div>';
      if (e.example) html += '<div style="font-style:italic; color:#333; margin-top:0.2em;">Ej: ' + this._escapeHtml(e.example) + '</div>';
      html += '</li>';
    }
    html += '</ul></div>';

    return html; // AnkiMine acepta string HTML o array
  }

  // util: escapar HTML simple para seguridad
  _escapeHtml(s) {
    if (!s) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // opcional: método para debugging (devuelve la DB)
  listAll() {
    return this.db.slice(0);
  }
}

/* export condicional para test (no rompe en navegadores) */
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = enes_PhrasalVerbs;
}
