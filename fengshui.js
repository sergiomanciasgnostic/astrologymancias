// ══════════════════════════════════════════════════════════════
// MENSAJES FENG SHUI — Para agregar a mensajes_astrologicos.js
// ══════════════════════════════════════════════════════════════
// Estructura lista para copiar al JS externo.
// En el HTML reemplazar los objetos KUA_DATA y EV_ESTRELLAS
// por referencias a window.FENG_MENSAJES.kua y window.FENG_MENSAJES.ev
// ══════════════════════════════════════════════════════════════

var FENG_MENSAJES = {

  // ─────────────────────────────────────────
  // NÚMERO KUA — Ba-Zhai
  // ─────────────────────────────────────────
  kua: {
    1: {
      nombre: 'Kua 1',
      grupo: 'Este',
      elemento: 'Agua',
      color: '#60a5fa',
      favorables: [
        { dir: 'Norte',   letra: 'N',  nombre: 'Sheng Chi',   desc: 'Dirección de prosperidad y éxito máximo. Ideal para dormir con la cabeza apuntando hacia aquí y para tu escritorio de trabajo.' },
        { dir: 'Sur',     letra: 'S',  nombre: 'Tien Yi',     desc: 'Dirección de salud y longevidad. Usar esta dirección mejora la recuperación, la vitalidad y el bienestar físico.' },
        { dir: 'Este',    letra: 'E',  nombre: 'Nien Yen',    desc: 'Dirección de amor y relaciones. Beneficia el romance, los vínculos familiares y la armonía en el hogar.' },
        { dir: 'Sureste', letra: 'SE', nombre: 'Fu Wei',      desc: 'Dirección de crecimiento personal. Apoya el desarrollo espiritual, la autoconsciencia y el aprendizaje continuo.' }
      ],
      desfavorables: [
        { dir: 'Oeste',    letra: 'O',  nombre: 'Ho Hai',     desc: 'Dirección de contratiempos leves. Puede traer pequeños obstáculos, retrasos y malos entendidos.' },
        { dir: 'Noroeste', letra: 'NO', nombre: 'Wu Gwei',    desc: 'Dirección de los 5 Fantasmas. Asociada a conflictos, chismes, pérdidas menores y accidentes.' },
        { dir: 'Suroeste', letra: 'SO', nombre: 'Liu Sha',    desc: 'Dirección de los 6 Daños. Puede generar problemas legales, traiciones y dificultades con socios.' },
        { dir: 'Noreste',  letra: 'NE', nombre: 'Chueh Ming', desc: 'Peor dirección. Evitar dormir o trabajar mirando hacia aquí. Asociada a pérdidas graves y enfermedades.' }
      ],
      lectura: 'El Kua 1 pertenece al <strong>Grupo Este</strong> y está regido por el elemento <strong>Agua</strong>. Eres una persona adaptable, intuitiva y con gran capacidad para fluir con los cambios. Tu energía vital se potencia cuando te alineas con las direcciones del Este: prosperidad al Norte, salud al Sur, amor al Este y crecimiento al Sureste. Evita el sector Noreste: es tu Chueh Ming, la dirección más adversa.'
    },

    2: {
      nombre: 'Kua 2',
      grupo: 'Oeste',
      elemento: 'Tierra',
      color: '#fbbf24',
      favorables: [
        { dir: 'Suroeste', letra: 'SO', nombre: 'Sheng Chi',   desc: 'Dirección de prosperidad y éxito máximo. Ideal para dormir y trabajar mirando hacia aquí.' },
        { dir: 'Noroeste', letra: 'NO', nombre: 'Tien Yi',     desc: 'Dirección de salud y longevidad. Potencia tu vitalidad y recuperación física.' },
        { dir: 'Oeste',    letra: 'O',  nombre: 'Nien Yen',    desc: 'Dirección de amor y relaciones. Favorece los vínculos afectivos y la armonía familiar.' },
        { dir: 'Noreste',  letra: 'NE', nombre: 'Fu Wei',      desc: 'Dirección de crecimiento personal. Apoya el desarrollo interior y el autodescubrimiento.' }
      ],
      desfavorables: [
        { dir: 'Este',    letra: 'E',  nombre: 'Ho Hai',     desc: 'Dirección de contratiempos leves. Puede causar pequeños obstáculos y retrasos.' },
        { dir: 'Sureste', letra: 'SE', nombre: 'Wu Gwei',    desc: 'Dirección de los 5 Fantasmas. Conflictos, chismes y pérdidas menores.' },
        { dir: 'Norte',   letra: 'N',  nombre: 'Liu Sha',    desc: 'Dirección de los 6 Daños. Problemas legales, traiciones y dificultades.' },
        { dir: 'Sur',     letra: 'S',  nombre: 'Chueh Ming', desc: 'Peor dirección. Evitar dormir o trabajar mirando hacia aquí.' }
      ],
      lectura: 'El Kua 2 pertenece al <strong>Grupo Oeste</strong> y está regido por el elemento <strong>Tierra</strong>. Eres una persona nutricia, estable y con gran sentido práctico. Tu energía se potencia en las direcciones del Grupo Oeste. El Suroeste es tu dirección de máxima prosperidad. El Sur es tu Chueh Ming: evítalo para dormir y trabajar.'
    },

    3: {
      nombre: 'Kua 3',
      grupo: 'Este',
      elemento: 'Madera',
      color: '#4ade80',
      favorables: [
        { dir: 'Este',    letra: 'E',  nombre: 'Sheng Chi',   desc: 'Dirección de prosperidad y éxito máximo.' },
        { dir: 'Norte',   letra: 'N',  nombre: 'Tien Yi',     desc: 'Dirección de salud y longevidad.' },
        { dir: 'Sureste', letra: 'SE', nombre: 'Nien Yen',    desc: 'Dirección de amor y relaciones.' },
        { dir: 'Sur',     letra: 'S',  nombre: 'Fu Wei',      desc: 'Dirección de crecimiento personal.' }
      ],
      desfavorables: [
        { dir: 'Suroeste', letra: 'SO', nombre: 'Ho Hai',     desc: 'Contratiempos leves y obstáculos menores.' },
        { dir: 'Noroeste', letra: 'NO', nombre: 'Wu Gwei',    desc: '5 Fantasmas: conflictos y chismes.' },
        { dir: 'Oeste',    letra: 'O',  nombre: 'Liu Sha',    desc: '6 Daños: traiciones y problemas legales.' },
        { dir: 'Noreste',  letra: 'NE', nombre: 'Chueh Ming', desc: 'Peor dirección. Evitar para dormir y trabajar.' }
      ],
      lectura: 'El Kua 3 pertenece al <strong>Grupo Este</strong> y está regido por el elemento <strong>Madera</strong>. Eres una persona con iniciativa, ambición y capacidad de liderazgo. Tu dirección de máxima prosperidad es el Este. El Noreste es tu Chueh Ming: la dirección más desfavorable que debes evitar.'
    },

    4: {
      nombre: 'Kua 4',
      grupo: 'Este',
      elemento: 'Madera',
      color: '#4ade80',
      favorables: [
        { dir: 'Sureste', letra: 'SE', nombre: 'Sheng Chi',   desc: 'Dirección de prosperidad y éxito máximo.' },
        { dir: 'Este',    letra: 'E',  nombre: 'Tien Yi',     desc: 'Dirección de salud y longevidad.' },
        { dir: 'Sur',     letra: 'S',  nombre: 'Nien Yen',    desc: 'Dirección de amor y relaciones.' },
        { dir: 'Norte',   letra: 'N',  nombre: 'Fu Wei',      desc: 'Dirección de crecimiento personal.' }
      ],
      desfavorables: [
        { dir: 'Noreste',  letra: 'NE', nombre: 'Ho Hai',     desc: 'Contratiempos leves y obstáculos menores.' },
        { dir: 'Oeste',    letra: 'O',  nombre: 'Wu Gwei',    desc: '5 Fantasmas: conflictos y pérdidas.' },
        { dir: 'Noroeste', letra: 'NO', nombre: 'Liu Sha',    desc: '6 Daños: traiciones y dificultades legales.' },
        { dir: 'Suroeste', letra: 'SO', nombre: 'Chueh Ming', desc: 'Peor dirección. Evitar para dormir y trabajar.' }
      ],
      lectura: 'El Kua 4 pertenece al <strong>Grupo Este</strong> y está regido por el elemento <strong>Madera</strong>. Eres una persona creativa, comunicativa y con talento para el aprendizaje. Tu dirección de máxima prosperidad es el Sureste. El Suroeste es tu Chueh Ming: evítalo.'
    },

    6: {
      nombre: 'Kua 6',
      grupo: 'Oeste',
      elemento: 'Metal',
      color: '#e2e8f0',
      favorables: [
        { dir: 'Noroeste', letra: 'NO', nombre: 'Sheng Chi',   desc: 'Dirección de prosperidad y éxito máximo.' },
        { dir: 'Suroeste', letra: 'SO', nombre: 'Tien Yi',     desc: 'Dirección de salud y longevidad.' },
        { dir: 'Noreste',  letra: 'NE', nombre: 'Nien Yen',    desc: 'Dirección de amor y relaciones.' },
        { dir: 'Oeste',    letra: 'O',  nombre: 'Fu Wei',      desc: 'Dirección de crecimiento personal.' }
      ],
      desfavorables: [
        { dir: 'Sur',     letra: 'S',  nombre: 'Ho Hai',     desc: 'Contratiempos leves y obstáculos menores.' },
        { dir: 'Norte',   letra: 'N',  nombre: 'Wu Gwei',    desc: '5 Fantasmas: conflictos y chismes.' },
        { dir: 'Sureste', letra: 'SE', nombre: 'Liu Sha',    desc: '6 Daños: traiciones y dificultades.' },
        { dir: 'Este',    letra: 'E',  nombre: 'Chueh Ming', desc: 'Peor dirección. Evitar para dormir y trabajar.' }
      ],
      lectura: 'El Kua 6 pertenece al <strong>Grupo Oeste</strong> y está regido por el elemento <strong>Metal</strong>. Eres una persona con autoridad natural, determinación y alto sentido ético. Tu dirección de máxima prosperidad es el Noroeste. El Este es tu Chueh Ming: la dirección más desfavorable.'
    },

    7: {
      nombre: 'Kua 7',
      grupo: 'Oeste',
      elemento: 'Metal',
      color: '#e2e8f0',
      favorables: [
        { dir: 'Oeste',    letra: 'O',  nombre: 'Sheng Chi',   desc: 'Dirección de prosperidad y éxito máximo.' },
        { dir: 'Noreste',  letra: 'NE', nombre: 'Tien Yi',     desc: 'Dirección de salud y longevidad.' },
        { dir: 'Noroeste', letra: 'NO', nombre: 'Nien Yen',    desc: 'Dirección de amor y relaciones.' },
        { dir: 'Suroeste', letra: 'SO', nombre: 'Fu Wei',      desc: 'Dirección de crecimiento personal.' }
      ],
      desfavorables: [
        { dir: 'Norte',   letra: 'N',  nombre: 'Ho Hai',     desc: 'Contratiempos leves y obstáculos menores.' },
        { dir: 'Sur',     letra: 'S',  nombre: 'Wu Gwei',    desc: '5 Fantasmas: conflictos y pérdidas.' },
        { dir: 'Este',    letra: 'E',  nombre: 'Liu Sha',    desc: '6 Daños: traiciones y dificultades legales.' },
        { dir: 'Sureste', letra: 'SE', nombre: 'Chueh Ming', desc: 'Peor dirección. Evitar para dormir y trabajar.' }
      ],
      lectura: 'El Kua 7 pertenece al <strong>Grupo Oeste</strong> y está regido por el elemento <strong>Metal</strong>. Eres una persona carismática, persuasiva y con don para las relaciones sociales. Tu dirección de máxima prosperidad es el Oeste. El Sureste es tu Chueh Ming.'
    },

    8: {
      nombre: 'Kua 8',
      grupo: 'Oeste',
      elemento: 'Tierra',
      color: '#fbbf24',
      favorables: [
        { dir: 'Noreste',  letra: 'NE', nombre: 'Sheng Chi',   desc: 'Dirección de prosperidad y éxito máximo.' },
        { dir: 'Oeste',    letra: 'O',  nombre: 'Tien Yi',     desc: 'Dirección de salud y longevidad.' },
        { dir: 'Noroeste', letra: 'NO', nombre: 'Nien Yen',    desc: 'Dirección de amor y relaciones.' },
        { dir: 'Suroeste', letra: 'SO', nombre: 'Fu Wei',      desc: 'Dirección de crecimiento personal.' }
      ],
      desfavorables: [
        { dir: 'Sureste', letra: 'SE', nombre: 'Ho Hai',     desc: 'Contratiempos leves y obstáculos menores.' },
        { dir: 'Este',    letra: 'E',  nombre: 'Wu Gwei',    desc: '5 Fantasmas: conflictos y chismes.' },
        { dir: 'Sur',     letra: 'S',  nombre: 'Liu Sha',    desc: '6 Daños: traiciones y dificultades.' },
        { dir: 'Norte',   letra: 'N',  nombre: 'Chueh Ming', desc: 'Peor dirección. Evitar para dormir y trabajar.' }
      ],
      lectura: 'El Kua 8 pertenece al <strong>Grupo Oeste</strong> y está regido por el elemento <strong>Tierra</strong>. Eres una persona estable, confiable y con vocación de servicio. Tu dirección de máxima prosperidad es el Noreste. El Norte es tu Chueh Ming: evítalo.'
    },

    9: {
      nombre: 'Kua 9',
      grupo: 'Este',
      elemento: 'Fuego',
      color: '#f87171',
      favorables: [
        { dir: 'Sur',     letra: 'S',  nombre: 'Sheng Chi',   desc: 'Dirección de prosperidad y éxito máximo.' },
        { dir: 'Este',    letra: 'E',  nombre: 'Tien Yi',     desc: 'Dirección de salud y longevidad.' },
        { dir: 'Norte',   letra: 'N',  nombre: 'Nien Yen',    desc: 'Dirección de amor y relaciones.' },
        { dir: 'Sureste', letra: 'SE', nombre: 'Fu Wei',      desc: 'Dirección de crecimiento personal.' }
      ],
      desfavorables: [
        { dir: 'Oeste',    letra: 'O',  nombre: 'Ho Hai',     desc: 'Contratiempos leves y obstáculos menores.' },
        { dir: 'Noreste',  letra: 'NE', nombre: 'Wu Gwei',    desc: '5 Fantasmas: conflictos y pérdidas.' },
        { dir: 'Noroeste', letra: 'NO', nombre: 'Liu Sha',    desc: '6 Daños: traiciones y dificultades legales.' },
        { dir: 'Suroeste', letra: 'SO', nombre: 'Chueh Ming', desc: 'Peor dirección. Evitar para dormir y trabajar.' }
      ],
      lectura: 'El Kua 9 pertenece al <strong>Grupo Este</strong> y está regido por el elemento <strong>Fuego</strong>. Eres una persona brillante, apasionada y con gran capacidad de influencia. Tu dirección de máxima prosperidad es el Sur. El Suroeste es tu Chueh Ming.'
    }
  },

  // ─────────────────────────────────────────
  // ESTRELLAS VOLADORAS — Lo Shu
  // ─────────────────────────────────────────
  ev: {
    1: {
      nombre: 'Estrella 1 · Agua',
      emoji: '💧',
      elemento: 'Agua',
      color: '#60a5fa',
      sector: 'Norte',
      lectura: 'La Estrella 1 Agua representa sabiduría, fluidez e intuición. Las personas nacidas bajo esta estrella tienen una mente brillante, adaptable y filosófica. Son naturalmente diplomáticas y saben navegar situaciones complejas con gracia. Su reto es no perder su identidad al adaptarse demasiado a los demás.',
      consejo: 'Activa el Norte de tu espacio con elementos de agua (fuente, espejo) para potenciar oportunidades laborales.'
    },
    2: {
      nombre: 'Estrella 2 · Tierra',
      emoji: '🌍',
      elemento: 'Tierra',
      color: '#fbbf24',
      sector: 'Suroeste',
      lectura: 'La Estrella 2 Tierra simboliza nutrición, cuidado y maternidad cósmica. Quienes nacen bajo esta influencia son compasivos, serviciales y con vocación de cuidar a otros. Tienen gran intuición sobre las necesidades ajenas. Su reto es establecer límites sanos y no agotarse dando sin recibir.',
      consejo: 'Activa el Suroeste con cristales de cuarzo rosa o parejas de objetos para atraer amor y armonía familiar.'
    },
    3: {
      nombre: 'Estrella 3 · Madera',
      emoji: '🌿',
      elemento: 'Madera',
      color: '#4ade80',
      sector: 'Este',
      lectura: 'La Estrella 3 Madera irradia crecimiento, iniciativa y comunicación. Las personas de esta estrella son dinámicas, entusiastas y con una energía vital que inspira a quienes las rodean. Tienen facilidad para emprender y para expresar ideas. Su reto es aprender la paciencia y no dispersarse.',
      consejo: 'Activa el Este con plantas vivas, madera natural o imágenes de árboles para potenciar la salud y los proyectos nuevos.'
    },
    4: {
      nombre: 'Estrella 4 · Madera',
      emoji: '🍃',
      elemento: 'Madera',
      color: '#34d399',
      sector: 'Sureste',
      lectura: 'La Estrella 4 Madera simboliza romanticismo, creatividad y el don de la palabra. Las personas de esta estrella son artísticas, sensibles y con una profunda vida interior. Tienen talento natural para la escritura, la música o cualquier arte. Su reto es no quedar atrapadas en el mundo de los sueños.',
      consejo: 'Activa el Sureste con plantas en número de 4 o elementos verdes para atraer prosperidad y oportunidades románticas.'
    },
    5: {
      nombre: 'Estrella 5 · Tierra',
      emoji: '🌀',
      elemento: 'Tierra',
      color: '#a78bfa',
      sector: 'Centro',
      lectura: 'La Estrella 5 Tierra es la estrella del centro, la más poderosa y ambivalente. Las personas de esta estrella tienen una energía intensísima y un potencial transformador enorme. Pueden alcanzar grandes alturas o enfrentar grandes retos. Todo depende de cómo canalizan su energía volcánica interior.',
      consejo: 'Mantén el centro de tu espacio siempre limpio y libre de objetos pesados. Usa campanas de metal para neutralizar energías extremas.'
    },
    6: {
      nombre: 'Estrella 6 · Metal',
      emoji: '⚙️',
      elemento: 'Metal',
      color: '#e2e8f0',
      sector: 'Noroeste',
      lectura: 'La Estrella 6 Metal representa autoridad, liderazgo celestial y justicia. Quienes nacen bajo esta estrella tienen una presencia natural, un sentido del deber muy desarrollado y capacidad para liderar con integridad. Su reto es aprender a delegar y a ser más flexibles con sus propias expectativas.',
      consejo: 'Activa el Noroeste con objetos de metal (campanas, esferas) para atraer la ayuda de mentores y protección celestial.'
    },
    7: {
      nombre: 'Estrella 7 · Metal',
      emoji: '🗡️',
      elemento: 'Metal',
      color: '#cbd5e1',
      sector: 'Oeste',
      lectura: 'La Estrella 7 Metal irradia carisma, seducción y elocuencia. Las personas de esta estrella tienen don de palabra, atractivo magnético y habilidad para la negociación. Son encantadoras y saben moverse en entornos sociales con facilidad. Su reto es no usar sus dones para manipular.',
      consejo: 'Activa el Oeste con objetos metálicos brillantes o campanillas de viento para atraer alegría y proyectos creativos.'
    },
    8: {
      nombre: 'Estrella 8 · Tierra',
      emoji: '⛰️',
      elemento: 'Tierra',
      color: '#f59e0b',
      sector: 'Noreste',
      lectura: 'La Estrella 8 Tierra es la estrella de la prosperidad en el período actual (2004-2024). Las personas de esta estrella tienen una solidez interior poco común, gran perseverancia y capacidad para construir riqueza duradera. Son confiables, estables y con vocación de servicio. Su reto es abrirse al cambio.',
      consejo: 'Activa el Noreste con cristales de cuarzo, geodos o imágenes de montañas para atraer prosperidad y conocimiento.'
    },
    9: {
      nombre: 'Estrella 9 · Fuego',
      emoji: '🔥',
      elemento: 'Fuego',
      color: '#f87171',
      sector: 'Sur',
      lectura: 'La Estrella 9 Fuego simboliza reconocimiento, iluminación y el futuro. Las personas de esta estrella son brillantes, visionarias y con una luz interior que atrae la atención de los demás. Tienen talento para el escenario, la espiritualidad y la comunicación. Su reto es no quemarse a sí mismas por brillar demasiado.',
      consejo: 'Activa el Sur con velas, luces o imágenes de aves fénix para potenciar el reconocimiento y la fama.'
    }
  },

  // ─────────────────────────────────────────
  // BA ZI — Descripciones de los 10 Dioses
  // ─────────────────────────────────────────
  diezDioses: {
    'Hermano Rob':  'Competidor, ambición propia, independencia. Potencial de rivalidad o autoafirmación fuerte.',
    'Amigo Rob':    'Aliado, cooperación, red social. Facilidad para trabajar en equipo.',
    'Producción':   'Expresión directa, liderazgo, dominio. Capacidad de influir y dirigir.',
    'Expresión':    'Creatividad, arte, comunicación. Don para transmitir ideas con belleza.',
    'Riqueza':      'Riqueza directa, trabajo, disciplina. Capacidad de generar prosperidad concreta.',
    'Riqueza Sutil':'Riqueza indirecta, inversiones, oportunidades inesperadas.',
    'Poder/Control':'Poder directo, autoridad, estructura. Carrera oficial y responsabilidad.',
    'Influencia':   'Poder sutil, guía espiritual, protección. Liderazgo desde la sabiduría.',
    'Recurso':      'Apoyo directo, conocimiento, educación. Protección de mentores y padres.',
    'Madre':        'Recurso sutil, intuición, fe. Apoyo del universo y conexión espiritual.'
  }

};

// Hacer disponible globalmente para el HTML
window.FENG_MENSAJES = FENG_MENSAJES;

// ══════════════════════════════════════════════════════════════
// ADAPTACIÓN HTML — Cómo conectar el JS externo con el HTML
// ══════════════════════════════════════════════════════════════
//
// 1. Guardar este bloque en mensajes_astrologicos.js (en GitHub)
//    dentro del objeto principal, p.ej:
//
//      window.FENG_MENSAJES = FENG_MENSAJES;   // exponer globalmente
//
// 2. En el HTML, cargar el script ANTES del módulo Feng Shui:
//
//      <script src="https://sergiomanciasgnostic.github.io/astrologymancias/mensajes_astrologicos.js"></script>
//
// 3. En el módulo Feng Shui del HTML, reemplazar:
//
//      var KUA_DATA = { 1: {...}, 2: {...}, ... };
//      →  var KUA_DATA = window.FENG_MENSAJES.kua;
//
//      var EV_ESTRELLAS = { 1: {...}, 2: {...}, ... };
//      →  var EV_ESTRELLAS = window.FENG_MENSAJES.ev;
//
//      var DIEZ_DESC = { 'Hermano Rob': '...', ... };
//      →  var DIEZ_DESC = window.FENG_MENSAJES.diezDioses;
//
// ══════════════════════════════════════════════════════════════

