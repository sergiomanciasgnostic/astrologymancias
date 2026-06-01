// ═══════════════════════════════════════════════════════════════
// ZODIACO CHINO — Mensajes para mensajes_astrologicos.js
// Pega este bloque dentro del archivo mensajes_astrologicos.js
// en el lugar donde se definen las otras variables globales.
// ═══════════════════════════════════════════════════════════════
//
// Cada animal tiene 4 mensajes:
//   anio   → Pilar del Año    (máscara social, cómo te ven)
//   mes    → Pilar del Mes    (mundo interior, emociones)
//   dia    → Pilar del Día    (yo verdadero, esencia)
//   hora   → Pilar de la Hora (animal secreto, potencial oculto)
//
// Para que el HTML los tome automáticamente, asigna así:
//   window.ZC_MENSAJES = ZC_MENSAJES;
// al final del bloque.
// ═══════════════════════════════════════════════════════════════

var ZC_MENSAJES = {

  rata: {
    anio:  "El Año de la Rata te da una presencia inteligente e ingeniosa ante el mundo. Los demás te perciben como alguien sagaz, adaptable y lleno de recursos. Tienes habilidad innata para encontrar oportunidades donde otros ven obstáculos, y una memoria excepcional que raramente te traiciona. Tu encanto social te abre puertas, aunque a veces los demás tardan en descubrir tu profundidad real.",
    mes:   "En tu mundo interior vive la Rata: eres alguien que procesa las emociones con inteligencia antes que con sentimiento puro. Cuidas profundamente a quienes amas, pero desde la discreción y la previsión. En familia eres el que organiza, prevé y protege sin hacer demasiado ruido. Tu desafío emocional es aprender a confiar sin calcular tanto.",
    dia:   "Tu esencia más profunda es la de la Rata: astuta, vivaz y profundamente curiosa. En el amor buscas a alguien con quien construir algo tangible, alguien que valore tu ingenio y tu capacidad de adaptación. Eres más sensible de lo que muestras, y necesitas que tu pareja entienda que detrás de tu pragmatismo hay un corazón que busca seguridad y lealtad.",
    hora:  "Tu animal secreto es la Rata: en la madurez y en tu vida interior más oculta, desarrollas una agudeza mental extraordinaria y una capacidad de reinvención constante. Este potencial se activa en situaciones de presión o cambio, donde tu mente encuentra soluciones que otros no ven. Es el don que irás descubriendo con los años."
  },

  buey: {
    anio:  "El Año del Buey te da una imagen de solidez, confiabilidad y trabajo constante. Quienes te conocen te ven como alguien en quien se puede apoyar, que cumple lo que promete y no se deja llevar por los vientos del cambio. Tu perseverancia es tu mayor fortaleza visible: logras lo que otros abandonan a mitad de camino.",
    mes:   "En tu interior vive el Buey: amas profundamente pero con paciencia y sin prisa. En familia eres el pilar silencioso, el que sostiene sin quejarse, el que llega cuando todos los demás ya se fueron. Tus emociones son profundas pero lentas de expresar. Cuando logras abrirte, tu afecto es de los más duraderos y genuinos.",
    dia:   "Tu esencia es la del Buey: constante, fiel y con una determinación que pocas veces cede. En el amor eres leal hasta la médula y buscas una pareja que valore el compromiso real sobre los gestos pasajeros. No te apresuras, pero cuando decides, es para siempre. Tu desafío íntimo es aprender a soltar cuando algo no funciona.",
    hora:  "Tu animal secreto es el Buey: en la madurez desarrollas una capacidad de construcción y resistencia que sorprende a todos. Tienes el don de terminar lo que otros dejan incompleto, de crear estructuras sólidas desde la paciencia. Este potencial oculto florece especialmente cuando decides enfocarte en algo sin distracciones."
  },

  tigre: {
    anio:  "El Año del Tigre te da una presencia magnética e imponente. Los demás te perciben como alguien valiente, apasionado y con una energía difícil de ignorar. Eres visto como líder natural, como alguien que no teme lanzarse al vacío ni desafiar lo establecido. Tu carisma atrae, pero tu intensidad también puede intimidar.",
    mes:   "En tu mundo interior vive el Tigre: tus emociones son intensas, a veces volcánicas. Amas con pasión y protege a tu familia con fiereza. En el entorno íntimo eres generoso y protector, aunque tu impulsividad puede generar tormentas que luego lamentas. Aprender a respirar antes de reaccionar es tu mayor trabajo emocional.",
    dia:   "Tu esencia más profunda es la del Tigre: libre, audaz e intensamente vivo. En el amor necesitas a alguien que no se achique ante tu fuerza, que te inspire y te dé espacio para ser quien eres. Tu pareja ideal te acompaña en la aventura sin querer domesticarte. Cuando amas, lo haces completamente.",
    hora:  "Tu animal secreto es el Tigre: en la madurez develops un coraje que asombra, la capacidad de liderar causas más grandes que tú mismo. Tu potencial oculto es el de la transformación valiente: cuando ya no tienes nada que perder, el Tigre interior actúa con una libertad que cambia todo lo que toca."
  },

  conejo: {
    anio:  "El Año del Conejo te da una imagen de elegancia, diplomacia y buen gusto. Los demás te perciben como alguien refinado, amable y con una intuición social excepcional. Sabes cuándo hablar y cuándo callar, y rara vez causas conflictos innecesarios. Tu sensibilidad artística es visible y atrae.",
    mes:   "En tu interior vive el Conejo: eres profundamente empático y sensible a las emociones del entorno familiar. Necesitas armonía para florecer, y cuando hay conflicto a tu alrededor lo sientes en el cuerpo. En familia eres el que cuida los vínculos con delicadeza, el que recuerda los detalles que importan.",
    dia:   "Tu esencia es la del Conejo: gentil, artística y profundamente sensible. En el amor buscas ternura, belleza y una conexión que vaya más allá de lo superficial. Necesitas que tu pareja te dé seguridad emocional y aprecie tu mundo interior. Tu desafío íntimo es no evitar las conversaciones difíciles que mantienen vivos los vínculos.",
    hora:  "Tu animal secreto es el Conejo: en la madurez develops una capacidad de mediación y arte que pocas personas logran. Tu potencial oculto es el de crear belleza y paz donde había tensión, de tender puentes con una gracia que viene de la experiencia acumulada."
  },

  dragon: {
    anio:  "El Año del Dragón te da una presencia extraordinaria: magnética, poderosa y casi mítica. Los demás te perciben como alguien con una energía especial, visionario e inspirador. Eres visto como alguien fuera de lo común, con una confianza natural que pocas personas cuestionan. El Dragón es el único animal mítico del zodíaco chino: te toca cargarlo.",
    mes:   "En tu interior vive el Dragón: tus emociones son intensas y grandiosas. En familia puedes ser protector y generoso hasta el exceso, pero también necesitas que reconozcan tu esfuerzo. Tu fuego interno alimenta a quienes amas, aunque a veces puede quemarlos si no aprendes a dosificar tu intensidad.",
    dia:   "Tu esencia es la del Dragón: visionaria, apasionada y extraordinariamente vital. En el amor buscas a alguien que esté a tu altura, que te vea más allá del brillo y que comparta tu fuego sin apagarlo. No te conformas con lo mediocre: necesitas una conexión que sea también una aventura.",
    hora:  "Tu animal secreto es el Dragón: en la madurez develops un poder transformador que puede mover montañas. Tu potencial oculto es el de la inspiración: en los momentos más cruciales de tu vida, algo dentro de ti se activa con una fuerza que cambia no solo tu destino sino el de quienes te rodean."
  },

  serpiente: {
    anio:  "El Año de la Serpiente te da una imagen misteriosa, intuitiva e intelectualmente profunda. Los demás te perciben como alguien que sabe más de lo que dice, que observa antes de actuar y que raramente actúa sin motivo. Tu presencia tiene algo de enigmático que genera curiosidad y respeto.",
    mes:   "En tu interior vive la Serpiente: tus emociones son profundas, complejas y a veces difíciles de expresar. Amas con intensidad y exclusividad; la traición es lo que más te cuesta perdonar. En familia eres leal y protector, pero también puedes ser posesivo cuando sientes que algo que amas está en riesgo.",
    dia:   "Tu esencia es la de la Serpiente: sabia, profunda e intensamente perceptiva. En el amor buscas una conexión que trascienda lo físico, alguien con quien puedas hablar de lo que está debajo de la superficie. Tu pareja ideal te da espacio para tu mundo interior sin intentar forzarte a abrirte antes de tiempo.",
    hora:  "Tu animal secreto es la Serpiente: en la madurez develops una sabiduría que viene de haber observado mucho y hablado poco. Tu potencial oculto es el de la transformación: como la serpiente que muda de piel, tienes la capacidad de reinventarte completamente cuando la vida te lo exige."
  },

  caballo: {
    anio:  "El Año del Caballo te da una imagen de energía, libertad y entusiasmo contagioso. Los demás te perciben como alguien activo, sociable y lleno de vida, que no se queda quieto y que lleva el movimiento a todo lo que toca. Tu alegría y tu optimismo son visibles y atraen a las personas.",
    mes:   "En tu interior vive el Caballo: tus emociones son rápidas, intensas y a veces difíciles de sostener. Necesitas espacio incluso dentro de tus vínculos más íntimos, y puedes sentirte sofocado cuando la familia demanda demasiada presencia. Tu amor es genuino pero libre; aprendes a expresarlo a tu manera.",
    dia:   "Tu esencia es la del Caballo: libre, enérgico y profundamente independiente. En el amor necesitas a alguien que no intente poseerte, que entienda que tu libertad no es falta de amor sino condición para él. Cuando encuentras esa conexión, eres de los amantes más apasionados y leales.",
    hora:  "Tu animal secreto es el Caballo: en la madurez develops una capacidad de acción y liderazgo que sorprende. Tu potencial oculto es el de inspirar a otros a moverse, a salir de la quietud y a perseguir lo que quieren. Eres alguien que mueve a las personas cuando decide actuar desde su centro."
  },

  cabra: {
    anio:  "El Año de la Cabra te da una imagen creativa, sensible y profundamente humana. Los demás te perciben como alguien artístico, empático y con una calidez que pocas personas tienen. Tu generosidad es genuina y tu sensibilidad estética visible en todo lo que haces.",
    mes:   "En tu interior vive la Cabra: eres profundamente afectivo y necesitas sentirte amado y valorado en tu entorno familiar. Cuando el ambiente es armonioso floreces; cuando hay conflicto, te retraes. Amas cuidar a los demás, pero también necesitas que alguien te cuide a ti.",
    dia:   "Tu esencia es la de la Cabra: creativa, sensible y en busca de una conexión genuinamente humana. En el amor necesitas seguridad emocional y un compañero que aprecie tu mundo interior y tu sensibilidad artística. Tu pareja ideal te hace sentir en casa.",
    hora:  "Tu animal secreto es la Cabra: en la madurez develops una creatividad y una capacidad de nutrir a otros que se vuelve tu mayor legado. Tu potencial oculto es el de crear espacios donde las personas se sientan vistas y contenidas, donde el arte y la emoción tienen un lugar."
  },

  mono: {
    anio:  "El Año del Mono te da una imagen inteligente, versátil y llena de humor. Los demás te perciben como alguien que aprende todo con facilidad, que sabe adaptarse a cualquier situación y que tiene siempre una solución creativa. Tu ingenio te hace memorable en cualquier grupo.",
    mes:   "En tu interior vive el Mono: tus emociones son rápidas y variadas, y a veces cuesta que los demás sigan tu ritmo afectivo. En familia puedes ser el animador, el que sube el ánimo y trae creatividad al hogar. Tu desafío emocional es profundizar más allá de la superficie y quedarte con lo que vale la pena.",
    dia:   "Tu esencia es la del Mono: curiosa, brillante y profundamente lúdica. En el amor necesitas a alguien que te estimule intelectualmente y que nunca te resulte predecible. Te aburres con facilidad si la conexión no tiene chispa. Cuando amas de verdad, eres increíblemente ingenioso y divertido.",
    hora:  "Tu animal secreto es el Mono: en la madurez develops una inteligencia estratégica que pocas personas poseen. Tu potencial oculto es el de resolver lo que nadie más puede resolver, de encontrar el punto exacto donde las piezas encajan de forma inesperada."
  },

  gallo: {
    anio:  "El Año del Gallo te da una imagen de precisión, honestidad y detalle impecable. Los demás te perciben como alguien observador, exigente consigo mismo y con un sentido del orden difícil de igualar. Tu capacidad para analizar situaciones es vista como un don, aunque a veces incomoda a quienes prefieren no verse reflejados.",
    mes:   "En tu interior vive el Gallo: en familia eres el que nota lo que nadie más nota, el que recuerda lo que se dijo y lo que se prometió. Tu amor se expresa a través del cuidado concreto y los detalles que los demás dan por sentados. Tu desafío es suavizar la crítica cuando lo que sientes es amor.",
    dia:   "Tu esencia es la del Gallo: honesta, analítica y profundamente exigente. En el amor buscas a alguien que comparta tu sentido de la responsabilidad y que valore tu honestidad incluso cuando duele. No soportas la mediocridad ni las excusas. Cuando amas, cuidas con una precisión que es en sí misma un acto de devoción.",
    hora:  "Tu animal secreto es el Gallo: en la madurez develops una capacidad de observación y análisis que se convierte en sabiduría práctica. Tu potencial oculto es el de ver lo que otros no ven y decirlo en el momento justo, con la claridad exacta que cambia el rumbo de las situaciones."
  },

  perro: {
    anio:  "El Año del Perro te da una imagen de lealtad, justicia y honestidad incuestionable. Los demás te perciben como alguien en quien se puede confiar, que defiende lo correcto aunque le cueste y que nunca traiciona a quien ama. Eres visto como el amigo que siempre aparece cuando más se lo necesita.",
    mes:   "En tu interior vive el Perro: tu amor familiar es incondicional y protector. Eres el guardián del hogar, el que permanece cuando todo lo demás cambia. Tus miedos internos suelen girar alrededor de la pérdida o el abandono, pero cuando los trabajas, se convierten en una capacidad de amar sin condiciones.",
    dia:   "Tu esencia es la del Perro: leal, justo y profundamente ético. En el amor buscas a alguien que comparta tus valores y en quien puedas confiar completamente. No perdonas la traición con facilidad, pero cuando encuentras a tu persona, te entregas sin reservas. Necesitas sentirte seguro para abrirte del todo.",
    hora:  "Tu animal secreto es el Perro: en la madurez develops una capacidad de guiar y proteger a otros que se convierte en tu vocación más profunda. Tu potencial oculto es el de la justicia compasiva: sabes cuándo defender y cuándo soltar, y esa sabiduría es un regalo para quienes están a tu lado."
  },

  cerdo: {
    anio:  "El Año del Cerdo te da una imagen de generosidad, calidez y disfrute genuino de la vida. Los demás te perciben como alguien bueno, sincero y sin dobleces, que da sin calcular y que sabe disfrutar lo bello de estar vivo. Tu honestidad es tan obvia que a veces sorprende.",
    mes:   "En tu interior vive el Cerdo: amas a tu familia con una generosidad que a veces no tiene límites. Disfrutas de crear momentos de placer y abundancia para los que amas, y te cuesta decir que no cuando alguien necesita algo. Tu desafío emocional es aprender a cuidarte a ti mismo con la misma entrega.",
    dia:   "Tu esencia es la del Cerdo: sincera, compasiva y profundamente humana. En el amor eres de los que se entregan sin reservas, que no juegan ni calculan. Buscas una conexión auténtica y una pareja que valore tu honestidad y tu calor. Tu mayor vulnerabilidad es confiar en quien no lo merece.",
    hora:  "Tu animal secreto es el Cerdo: en la madurez develops una capacidad de disfrute consciente y una generosidad que se vuelve contagiosa. Tu potencial oculto es el de recordarle a los demás que la vida también se trata de saborearla, que la abundancia compartida es más valiosa que la acumulada en soledad."
  }

};

// Hacer disponible globalmente para el HTML
window.ZC_MENSAJES = ZC_MENSAJES;

// ═══════════════════════════════════════════════════════════════
// FIN — Zodiaco Chino mensajes
// ═══════════════════════════════════════════════════════════════

// ================================================================================
// ZODIACO CHINO - DATOS COMPLETOS
// ================================================================================

// Animales zodiacales
var ZC_ANIMALES = [
  { key:'rata',     emoji:'🐀', nombre:'Rata',     yin:false, trine:1, elemento_fijo:'Agua',   horas:[23,0],  descripcion:'Inteligente, adaptable, carismática. Sabe aprovechar las oportunidades y tiene gran memoria. A veces demasiado calculadora.' },
  { key:'buey',     emoji:'🐂', nombre:'Buey',     yin:true,  trine:2, elemento_fijo:'Tierra',  horas:[1,2],   descripcion:'Trabajador, confiable, determinado. Su perseverancia lo lleva lejos aunque avance lento. Puede ser terco.' },
  { key:'tigre',    emoji:'🐅', nombre:'Tigre',    yin:false, trine:3, elemento_fijo:'Madera',  horas:[3,4],   descripcion:'Valiente, apasionado, carismático. Natural líder que no teme los desafíos. Puede ser impulsivo.' },
  { key:'conejo',   emoji:'🐇', nombre:'Conejo',   yin:true,  trine:1, elemento_fijo:'Madera',  horas:[5,6],   descripcion:'Diplomático, empático, artístico. Ama la armonía y la belleza. Puede evitar los conflictos en exceso.' },
  { key:'dragon',   emoji:'🐉', nombre:'Dragón',   yin:false, trine:1, elemento_fijo:'Tierra',  horas:[7,8],   descripcion:'Poderoso, visionario, magnético. El único animal mítico: simboliza fuerza e inspiración divina. Puede ser arrogante.' },
  { key:'serpiente',emoji:'🐍', nombre:'Serpiente',yin:true,  trine:2, elemento_fijo:'Fuego',   horas:[9,10],  descripcion:'Sabia, intuitiva, misteriosa. Percibe lo que otros no ven. Puede ser posesiva y celosa.' },
  { key:'caballo',  emoji:'🐎', nombre:'Caballo',  yin:false, trine:3, elemento_fijo:'Fuego',   horas:[11,12], descripcion:'Libre, enérgico, sociable. Ama la aventura y la independencia. Puede dispersarse con facilidad.' },
  { key:'cabra',    emoji:'🐐', nombre:'Cabra',    yin:true,  trine:2, elemento_fijo:'Tierra',  horas:[13,14], descripcion:'Creativa, sensible, generosa. Profundamente artística y empática. Puede ser insegura.' },
  { key:'mono',     emoji:'🐒', nombre:'Mono',     yin:false, trine:1, elemento_fijo:'Metal',   horas:[15,16], descripcion:'Ingenioso, curioso, versátil. Aprende todo con velocidad asombrosa. Puede ser manipulador.' },
  { key:'gallo',    emoji:'🐓', nombre:'Gallo',    yin:true,  trine:3, elemento_fijo:'Metal',   horas:[17,18], descripcion:'Perfeccionista, honesto, observador. Dice la verdad aunque duela. Puede ser demasiado crítico.' },
  { key:'perro',    emoji:'🐕', nombre:'Perro',    yin:false, trine:3, elemento_fijo:'Tierra',  horas:[19,20], descripcion:'Leal, justo, protector. El más fiel de los animales. Puede ser ansioso y pesimista.' },
  { key:'cerdo',    emoji:'🐖', nombre:'Cerdo',    yin:true,  trine:2, elemento_fijo:'Agua',   horas:[21,22], descripcion:'Generoso, sincero, compasivo. Disfruta la vida con plenitud. Puede ser ingenuo.' }
];

// Elementos
var ZC_ELEMENTOS = ['Madera','Fuego','Tierra','Metal','Agua'];

// Emojis de elementos
var ZC_ELEM_EMOJI = { 'Madera':'🌿', 'Fuego':'🔥', 'Tierra':'🌍', 'Metal':'⚙️', 'Agua':'💧' };

// COLORES DE ELEMENTOS (esto es lo que Sergio pidió específicamente)
var ZC_ELEM_COLOR = { 'Madera':'#4ade80', 'Fuego':'#f97316', 'Tierra':'#d97706', 'Metal':'#94a3b8', 'Agua':'#38bdf8' };

// Año base de referencia
var ZC_ANIO_BASE = 1900; // Rata Yang Metal

// Orden animales para el año (ciclo de 12 desde 1900 = Rata)
var ZC_ORDEN_ANIMALES = ['rata','buey','tigre','conejo','dragon','serpiente','caballo','cabra','mono','gallo','perro','cerdo'];

// Elementos del año en ciclo de 10 (cada uno dura 2 años, alternando Yang/Yin)
var ZC_ELEMENTOS_CICLO = ['Metal','Metal','Agua','Agua','Madera','Madera','Fuego','Fuego','Tierra','Tierra'];

// Ciclo de 12 animales por mes lunar (fijo)
var ZC_MESES_ANIMAL = ['tigre','conejo','dragon','serpiente','caballo','cabra','mono','gallo','perro','cerdo','rata','buey'];

// Compatibilidades Trine (grupos de 3)
var ZC_TRINE = {
  1: ['rata','dragon','mono'],
  2: ['buey','serpiente','gallo'],
  3: ['tigre','caballo','perro'],
  2: ['conejo','cabra','cerdo']
};

// Opuestos (incompatibles)
var ZC_OPUESTOS = {
  'rata':'caballo', 'buey':'cabra', 'tigre':'mono', 'conejo':'gallo',
  'dragon':'perro', 'serpiente':'cerdo', 'caballo':'rata', 'cabra':'buey',
  'mono':'tigre', 'gallo':'conejo', 'perro':'dragon', 'cerdo':'serpiente'
};

// Afines (compatibles)
var ZC_AFINES = {
  'rata':['buey','dragon'], 'buey':['rata','serpiente'], 'tigre':['caballo','perro'],
  'conejo':['cabra','cerdo'], 'dragon':['rata','mono'], 'serpiente':['buey','gallo'],
  'caballo':['tigre','perro'], 'cabra':['conejo','cerdo'], 'mono':['dragon','rata'],
  'gallo':['serpiente','buey'], 'perro':['tigre','caballo'], 'cerdo':['conejo','cabra']
};

// Hacer disponibles globalmente
window._ZC_ANIMALES = ZC_ANIMALES;
window._ZC_ELEMENTOS = ZC_ELEMENTOS;
window._ZC_ELEM_EMOJI = ZC_ELEM_EMOJI;
window._ZC_ELEM_COLOR = ZC_ELEM_COLOR;
window._ZC_ANIO_BASE = ZC_ANIO_BASE;
window._ZC_ORDEN_ANIMALES = ZC_ORDEN_ANIMALES;
window._ZC_ELEMENTOS_CICLO = ZC_ELEMENTOS_CICLO;
window._ZC_MESES_ANIMAL = ZC_MESES_ANIMAL;
window._ZC_TRINE = ZC_TRINE;
window._ZC_OPUESTOS = ZC_OPUESTOS;
window._ZC_AFINES = ZC_AFINES;
