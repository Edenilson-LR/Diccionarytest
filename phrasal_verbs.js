// phrasal_verbs.js
// Diccionario de phrasal verbs compatible con AnkiMine (cargable desde GitHub - raw URL).
// Instrucciones: sube este archivo a un repositorio público y usa la URL "Raw" (raw.githubusercontent.com/.../phrasal_verbs.js)
// en AnkiMine (Opc. de diccionarios -> Diccionario del usuario -> Script).

// Lista de phrasal verbs (verb, meaning, example, level, separable)
const phrasalVerbs = [
  { verb: "ask out", meaning: "invite someone on a date", example: "He asked her out to dinner.", level: "B1", separable: true },
  { verb: "bring up", meaning: "mention or introduce a topic; raise a child", example: "She brought up an interesting point in the meeting.", level: "B2", separable: false },
  { verb: "call off", meaning: "cancel (an event)", example: "They called off the match because of rain.", level: "B1", separable: true },
  { verb: "carry on", meaning: "continue", example: "Please carry on with your work.", level: "A2", separable: false },
  { verb: "come across", meaning: "find by chance; seem (impression)", example: "I came across an old photo. / He came across as shy.", level: "B1", separable: false },
  { verb: "come up with", meaning: "think of (an idea)", example: "She came up with a great solution.", level: "B2", separable: true },
  { verb: "cut down (on)", meaning: "reduce (consumption)", example: "I'm trying to cut down on sugar.", level: "B1", separable: false },
  { verb: "cut off", meaning: "stop the supply; interrupt", example: "The electricity was cut off.", level: "B2", separable: true },
  { verb: "drop by", meaning: "visit informally", example: "I might drop by your office later.", level: "A2", separable: false },
  { verb: "drop out (of)", meaning: "leave school or an activity before finishing", example: "He dropped out of university.", level: "B2", separable: false },
  { verb: "eat out", meaning: "eat at a restaurant", example: "Let's eat out tonight.", level: "A1", separable: false },
  { verb: "figure out", meaning: "understand; solve", example: "I can't figure out this problem.", level: "B1", separable: true },
  { verb: "fill in", meaning: "complete (a form); substitute for someone", example: "Please fill in this form. / Can you fill in for me tomorrow?", level: "A2", separable: true },
  { verb: "find out", meaning: "discover", example: "I found out the answer online.", level: "A2", separable: true },
  { verb: "get along (with)", meaning: "have a good relationship", example: "She gets along with her colleagues.", level: "A2", separable: false },
  { verb: "get away (with)", meaning: "escape punishment; do something without being noticed", example: "He got away with cheating.", level: "B2", separable: false },
  { verb: "get over", meaning: "recover from (an illness or shock)", example: "It took her months to get over the illness.", level: "B1", separable: false },
  { verb: "give up", meaning: "stop doing something (habit); surrender", example: "I gave up smoking last year.", level: "A2", separable: false },
  { verb: "go on", meaning: "continue; happen", example: "Go on — I'm listening. / What's going on?", level: "A2", separable: false },
  { verb: "go over", meaning: "review; examine", example: "Let's go over the plan together.", level: "B1", separable: false },
  { verb: "grow up", meaning: "become an adult; be raised", example: "He grew up in Mexico.", level: "A1", separable: false },
  { verb: "hang out", meaning: "spend time relaxing", example: "Do you want to hang out this weekend?", level: "A2", separable: false },
  { verb: "hold on", meaning: "wait; keep hold of", example: "Hold on a second, please.", level: "A2", separable: false },
  { verb: "keep on", meaning: "continue", example: "Keep on practicing and you'll improve.", level: "B1", separable: false },
  { verb: "look after", meaning: "take care of", example: "Can you look after my cat?", level: "A1", separable: false },
  { verb: "look forward to", meaning: "be excited about a future event", example: "I'm looking forward to the holidays.", level: "A2", separable: false },
  { verb: "look up", meaning: "search for information; improve (situation)", example: "Look up the word in the dictionary. / Things are looking up.", level: "A2", separable: true },
  { verb: "make up", meaning: "invent (a story); reconcile", example: "She made up an excuse. / They made up after the fight.", level: "B1", separable: true },
  { verb: "pass away", meaning: "die (polite)", example: "Her grandfather passed away last year.", level: "B2", separable: false },
  { verb: "pick up", meaning: "collect; learn informally; give a ride", example: "I'll pick you up at 7. / He picked up Spanish quickly.", level: "A2", separable: true },
  { verb: "put off", meaning: "postpone", example: "They put off the meeting until next week.", level: "B1", separable: true },
  { verb: "put on", meaning: "wear; organize (an event)", example: "She put on a coat. / The school put on a play.", level: "A2", separable: true },
  { verb: "put up with", meaning: "tolerate", example: "I won't put up with rude behaviour.", level: "B2", separable: false },
  { verb: "run out (of)", meaning: "have no more left", example: "We've run out of milk.", level: "A2", separable: false },
  { verb: "set up", meaning: "establish; arrange", example: "They set up a new company.", level: "B1", separable: true },
  { verb: "show up", meaning: "arrive; appear", example: "He showed up late to the party.", level: "A2", separable: false },
  { verb: "shut down", meaning: "close (a business or machine)", example: "The factory was shut down.", level: "B2", separable: true },
  { verb: "slow down", meaning: "reduce speed or rate", example: "You need to slow down when driving in rain.", level: "A2", separable: false },
  { verb: "sort out", meaning: "organize; solve a problem", example: "We'll sort out the issue tomorrow.", level: "B1", separable: true },
  { verb: "stand out", meaning: "be noticeable", example: "Her red coat made her stand out in the crowd.", level: "B1", separable: false },
  { verb: "take after", meaning: "resemble (family)", example: "She takes after her mother.", level: "A2", separable: false },
  { verb: "take off", meaning: "remove (clothing); depart (plane); become successful", example: "The plane took off on time. / That idea really took off.", level: "B1", separable: true },
  { verb: "take on", meaning: "accept (work/responsibility); compete against", example: "He took on extra duties.", level: "B2", separable: true },
  { verb: "take up", meaning: "start a hobby; occupy space/time", example: "She took up painting.", level: "B1", separable: true },
  { verb: "tear up", meaning: "rip into pieces; become emotional", example: "He tore up the letter. / She was torn up after the news.", level: "B2", separable: true },
  { verb: "throw away", meaning: "dispose of", example: "Don't throw away those papers — we need them.", level: "A2", separable: true },
  { verb: "turn down", meaning: "reject; reduce volume", example: "She turned down the job offer.", level: "B1", separable: true },
  { verb: "turn up", meaning: "increase volume; appear unexpectedly", example: "Turn up the music! / He turned up late.", level: "A2", separable: true },
  { verb: "use up", meaning: "consume completely", example: "We've used up all the paper.", level: "A2", separable: true },
  { verb: "warm up", meaning: "prepare for physical activity; get warmer", example: "Warm up before you exercise.", level: "A2", separable: false },
  { verb: "work out", meaning: "exercise; solve a problem; calculate", example: "I work out at the gym. / We worked out the answer.", level: "A2", separable: true },
  { verb: "write down", meaning: "record on paper", example: "Write down the address.", level: "A1", separable: true }
];

// Funciones auxiliares
function normalize(s) {
  return (s || "").toString().trim().toLowerCase();
}

// Interfaz mínima esperada por AnkiMine: exponer AnkiMineUserDictionary.lookup(word)
// Devuelve null si no encuentra nada, o un array de objetos { head, def, pos }
var AnkiMineUserDictionary = (function () {
  return {
    lookup: function (word) {
      if (!word) return null;
      const q = normalize(word);
      // buscar coincidencias exactas o que comiencen con la query
      const matches = phrasalVerbs.filter(e => {
        const v = normalize(e.verb);
        return v === q || v.indexOf(q) === 0 || v.includes(q);
      }).slice(0, 40); // límite razonable

      if (matches.length === 0) return null;

      return matches.map(e => ({
        head: e.verb,
        def: e.meaning + (e.example ? " — Example: " + e.example : "") + (e.level ? " (Level: " + e.level + ")" : ""),
        pos: "phrasal verb"
      }));
    },
    // opcional: listar todas las entradas (útil para debug)
    listAll: function () { return phrasalVerbs; }
  };
})();

// Si el entorno soporta export (p. ej. Node/GitHub preview), exportar para facilitar testing
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { phrasalVerbs, AnkiMineUserDictionary };
}

/*
  --- INSTALACIÓN EN GITHUB ---
  1) Crea un repositorio público en GitHub.
  2) Añade este archivo como `phrasal_verbs.js` en la raíz del repo (o carpeta /scripts/).
  3) Pulsa en el archivo en GitHub y selecciona "Raw". Copia esa URL.
     Ejemplo: https://raw.githubusercontent.com/tuUsuario/tuRepo/main/phrasal_verbs.js
  4) En AnkiMine: Opc. de diccionarios -> Diccionario del usuario -> pega la URL en "Script".
  5) Cargar Scripts -> marca la casilla On/Off -> Guardar+Cerrar.

  Si quieres, puedo proporcionarte un `README.md` listo para poner en el repo y el contenido exacto
  para que pegues directamente. También puedo convertir el archivo a JSON/CSV si lo prefieres.
*/
