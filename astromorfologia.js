// ══════════════════════════════════════════════════════════════════
//  ASTROMORFOLOGÍA — mensajes para mensajes_astrologicos.js
//  Agregar este bloque al objeto window.ASTROMORF_DATA
//  o como variable global: window.ASTROMORF_DATA = { ... }
// ══════════════════════════════════════════════════════════════════

window.ASTROMORF_DATA = {

  // ── SIGNOS: info solar + ascendente + planeta regente integrado ──

  signos: {
    aries: {
      emoji: '♈︎', nombre: 'Aries', elemento: 'Fuego', planeta: 'Marte',
      zonas: ['cabeza'],
      solar: {
        texto: 'Aries rige la cabeza, el rostro y el cerebro. Los nativos de Aries suelen tener rasgos marcados: frente amplia, cejas prominentes, mirada directa e intensa. El cuerpo tiende a ser atlético y de movimientos rápidos. La piel puede ser rojiza o con tendencia al rubor. La energía física es explosiva y de alta intensidad.',
        rasgos: ['Frente amplia','Cejas marcadas','Mirada directa','Complexión atlética','Movimiento rápido']
      },
      asc: {
        texto: 'Con Aries ascendiendo, el rostro es lo primero que impacta: mandíbula firme, expresión decidida, ojos que van al frente. La nariz puede ser aguilena o pronunciada. Proyectas energía y determinación desde el primer instante.',
        planeta_info: 'Tu Ascendente Aries tiene a Marte como planeta regente. Marte imprime al físico una constitución atlética, movimientos directos y una mirada encendida. La cabeza y la mandíbula son sus zonas de expresión más marcadas — lo cual refuerza lo que tu Ascendente ya proyecta.',
        rasgos_asc: ['Mandíbula firme','Expresión decidida','Nariz pronunciada','Presencia directa','Energía proyectada']
      }
    },

    tauro: {
      emoji: '♉︎', nombre: 'Tauro', elemento: 'Tierra', planeta: 'Venus',
      zonas: ['cuello','hombros'],
      solar: {
        texto: 'Tauro rige el cuello, la garganta y la voz. Los taurinos suelen tener un cuello largo y bien formado, hombros anchos y una constitución robusta y sólida. La piel tiende a ser suave y de buena calidad. La voz es uno de sus rasgos más distintivos: profunda, cálida y musical.',
        rasgos: ['Cuello largo','Hombros anchos','Constitución robusta','Piel suave','Voz profunda y cálida']
      },
      asc: {
        texto: 'El Ascendente Tauro imprime al rostro una belleza sensual y serena. Pómulos suaves, ojos grandes y expresivos, labios bien definidos. La expresión es tranquila pero determinada. El cuerpo irradia solidez y presencia.',
        planeta_info: 'Tu Ascendente Tauro tiene a Venus como planeta regente. Venus imprime belleza, simetría y armonía al físico: piel suave, labios bien definidos, cuello elegante. Esto refuerza y profundiza la belleza serena que Tauro ya le da a tu Ascendente.',
        rasgos_asc: ['Pómulos suaves','Ojos grandes','Labios definidos','Expresión serena','Solidez corporal']
      }
    },

    geminis: {
      emoji: '♊︎', nombre: 'Géminis', elemento: 'Aire', planeta: 'Mercurio',
      zonas: ['brazos','manos','hombros'],
      solar: {
        texto: 'Géminis rige los brazos, las manos, los hombros y los pulmones. Los geminianos suelen ser de complexión delgada y ágil, con manos expresivas que acompañan el habla. Los rasgos faciales son juveniles y variables en expresión. La agilidad física y el movimiento constante son característicos.',
        rasgos: ['Manos expresivas','Complexión delgada','Rasgos juveniles','Movimiento constante','Mirada inquieta']
      },
      asc: {
        texto: 'Ascendente Géminis: rostro triangular, ojos vivos y cambiantes, nariz pequeña. La expresión muta con rapidez — cada emoción se refleja al instante. Las manos son siempre protagonistas en la conversación.',
        planeta_info: 'Tu Ascendente Géminis tiene a Mercurio como planeta regente. Mercurio da agilidad y ligereza al cuerpo: rasgos finos, movimientos rápidos, sistema nervioso muy activo. Esto amplifica la variabilidad expresiva y la inquietud que Géminis ya imprime a tu presencia.',
        rasgos_asc: ['Rostro triangular','Ojos cambiantes','Nariz pequeña','Expresión variable','Manos expresivas']
      }
    },

    cancer: {
      emoji: '♋︎', nombre: 'Cáncer', elemento: 'Agua', planeta: 'Luna',
      zonas: ['pecho','abdomen'],
      solar: {
        texto: 'Cáncer rige el pecho, el estómago y los senos. Los cancerianos suelen tener un torso amplio y redondeado, rostro ovalado o en forma de luna, ojos grandes y profundos. La piel es pálida o de tonos claros. Retienen líquidos con facilidad y el peso corporal fluctúa con los ciclos emocionales.',
        rasgos: ['Torso amplio','Rostro ovalado','Ojos grandes','Piel clara','Fluctuación de peso']
      },
      asc: {
        texto: 'Con Cáncer ascendiendo, el rostro es redondo y suave como la Luna. Mejillas llenas, ojos grandes y acuosos que comunican profundidad emocional. La expresión es dulce, receptiva y a veces soñadora.',
        planeta_info: 'Tu Ascendente Cáncer tiene a la Luna como planeta regente. La Luna moldea el cuerpo desde la fluidez: fluctuación de peso, piel sensible, ojos profundos. Esto hace que tu presencia exterior sea especialmente sensible a los ciclos emocionales y al estado de ánimo del momento.',
        rasgos_asc: ['Mejillas llenas','Ojos acuosos','Expresión dulce','Receptividad evidente','Sensibilidad cutánea']
      }
    },

    leo: {
      emoji: '♌︎', nombre: 'Leo', elemento: 'Fuego', planeta: 'Sol',
      zonas: ['pecho','hombros'],
      solar: {
        texto: 'Leo rige el corazón, la espalda y la columna vertebral. Los leoninos se distinguen por su porte real: caminan erguidos, con la cabeza en alto. El cabello suele ser abundante y llamativo. La constitución es fuerte y magnética. El corazón — tanto físico como emocional — es su centro vital.',
        rasgos: ['Porte erguido','Cabello abundante','Espalda amplia','Constitución magnética','Presencia imponente']
      },
      asc: {
        texto: 'El Ascendente Leo produce un rostro de rasgos nobles y bien definidos. Frente amplia, cabello con vida propia, mirada soberana. La persona entra a una habitación y se nota. El cuello y los hombros son especialmente llamativos.',
        planeta_info: 'Tu Ascendente Leo tiene al Sol como planeta regente. El Sol imprime luminosidad al físico: piel con brillo propio, postura erguida y natural, presencia que irradia confianza sin esfuerzo. Esto hace que tu Ascendente Leo se vea aún más radiante y magnético de lo habitual.',
        rasgos_asc: ['Rasgos nobles','Frente amplia','Mirada soberana','Cabello llamativo','Presencia magnética']
      }
    },

    virgo: {
      emoji: '♍︎', nombre: 'Virgo', elemento: 'Tierra', planeta: 'Mercurio',
      zonas: ['abdomen'],
      solar: {
        texto: 'Virgo rige el aparato digestivo, el intestino y el sistema nervioso. Los virginianos suelen ser de complexión delgada y meticulosa, con rasgos finos y precisos. La piel es limpia y de buena calidad cuando cuidan su alimentación. Los movimientos son medidos y controlados, nunca excesivos.',
        rasgos: ['Complexión delgada','Rasgos finos','Piel de calidad','Movimientos precisos','Expresión analítica']
      },
      asc: {
        texto: 'Ascendente Virgo: rostro ovalado con rasgos pequeños y bien proporcionados. Nariz fina, ojos alertas y observadores. La expresión denota inteligencia práctica. La higiene y el cuidado personal son notorios.',
        planeta_info: 'Tu Ascendente Virgo tiene a Mercurio como planeta regente. Mercurio da ligereza, rasgos finos y un sistema nervioso muy activo. Esto refuerza la precisión y el detalle que Virgo imprime en tu apariencia: todo en ti parece calculado, limpio, sin un pelo fuera de lugar.',
        rasgos_asc: ['Rostro ovalado','Nariz fina','Ojos observadores','Expresión analítica','Cuidado personal notable']
      }
    },

    libra: {
      emoji: '♎︎', nombre: 'Libra', elemento: 'Aire', planeta: 'Venus',
      zonas: ['caderas'],
      solar: {
        texto: 'Libra rige los riñones, las caderas y la parte lumbar. Los librianos suelen tener una belleza equilibrada y simétrica, lo cual es su sello más reconocible. El cuerpo tiende a ser proporcionado, con caderas bien delineadas. El rostro irradia armonía y agrado natural.',
        rasgos: ['Simetría facial','Caderas proporcionadas','Belleza equilibrada','Piel luminosa','Encanto natural']
      },
      asc: {
        texto: 'El Ascendente Libra es uno de los más bellos del zodíaco. Rasgos simétricos, sonrisa encantadora, ojos que invitan. La persona tiene un magnetismo social innato. Las proporciones corporales son armónicas y elegantes.',
        planeta_info: 'Tu Ascendente Libra tiene a Venus como planeta regente. Venus es el planeta de la belleza por excelencia: simetría, piel suave, labios definidos, cuello elegante. Tener Libra ascendente con Venus como regente es una de las combinaciones más estéticas del zodíaco — la armonía es doble.',
        rasgos_asc: ['Rasgos simétricos','Sonrisa encantadora','Magnetismo social','Proporciones elegantes','Ojos que invitan']
      }
    },

    escorpio: {
      emoji: '♏︎', nombre: 'Escorpio', elemento: 'Agua', planeta: 'Plutón/Marte',
      zonas: ['caderas','abdomen'],
      solar: {
        texto: 'Escorpio rige los órganos reproductores, la pelvis y el sistema eliminatorio. Los escorpianos tienen una presencia intensa y magnética que se siente antes de verse. Los ojos son penetrantes e hipnóticos. La piel puede ser oscura o con un tono profundo. La constitución es fuerte y resistente.',
        rasgos: ['Ojos penetrantes','Presencia magnética','Complexión resistente','Mirada hipnótica','Tono oscuro']
      },
      asc: {
        texto: 'Ascendente Escorpio: el rostro más intenso del zodíaco. Ojos que atraviesan, expresión que guarda secretos. Las cejas suelen ser marcadas, la mandíbula definida. Pocas palabras, mucho impacto.',
        planeta_info: 'Tu Ascendente Escorpio tiene a Plutón y Marte como planetas regentes. Plutón aporta magnetismo denso y mirada oscura; Marte, energía muscular y mandíbula marcada. Esta combinación hace que tu presencia sea de las más intensas y difíciles de ignorar de todo el zodíaco.',
        rasgos_asc: ['Ojos que atraviesan','Cejas marcadas','Mandíbula definida','Expresión hermética','Impacto inmediato']
      }
    },

    sagitario: {
      emoji: '♐︎', nombre: 'Sagitario', elemento: 'Fuego', planeta: 'Júpiter',
      zonas: ['muslos','caderas'],
      solar: {
        texto: 'Sagitario rige los muslos, las caderas y el hígado. Los sagitarianos suelen ser altos o con extremidades largas, con una expresión abierta y franca. La sonrisa es amplia y generosa. El cuerpo irradia vitalidad y movimiento. Tendencia a ganar peso en la zona de caderas y muslos.',
        rasgos: ['Estatura elevada','Extremidades largas','Sonrisa amplia','Vitalidad evidente','Caderas y muslos prominentes']
      },
      asc: {
        texto: 'El Ascendente Sagitario produce un rostro abierto, frontal y luminoso. Frente amplia, nariz aguileña o recta. Los ojos son expresivos y miran lejos. La presencia es jovial y franca — inspira confianza de inmediato.',
        planeta_info: 'Tu Ascendente Sagitario tiene a Júpiter como planeta regente. Júpiter expande el cuerpo y el carisma: estatura tendencialmente alta, complexión amplia, sonrisa generosa y una irradiación jovial que llena el espacio. Tu presencia es de las que agrandan la habitación al entrar.',
        rasgos_asc: ['Frente amplia','Nariz aguileña','Ojos que miran lejos','Presencia jovial','Inspiración de confianza']
      }
    },

    capricornio: {
      emoji: '♑︎', nombre: 'Capricornio', elemento: 'Tierra', planeta: 'Saturno',
      zonas: ['rodillas','piernas'],
      solar: {
        texto: 'Capricornio rige las rodillas, los huesos y la estructura ósea. Los capricornianos suelen tener rasgos angulosos y bien definidos, con una estructura ósea prominente. Envejecen inversamente — de jóvenes parecen mayores y con los años se vuelven más interesantes. La piel es resistente y de tonos secos.',
        rasgos: ['Rasgos angulosos','Estructura ósea prominente','Envejecimiento inverso','Mirada seria','Complexión resistente']
      },
      asc: {
        texto: 'Ascendente Capricornio: rostro serio, estructura ósea marcada, pómulos definidos. La expresión proyecta madurez y autoridad natural. Con el tiempo, los rasgos se vuelven más magnéticos. Las rodillas y la postura son notorias.',
        planeta_info: 'Tu Ascendente Capricornio tiene a Saturno como planeta regente. Saturno produce un físico austero y resistente: rasgos angulosos, pómulos marcados, piel seca. Refuerza la seriedad y la estructura ósea que Capricornio ya le da a tu Ascendente — tu presencia proyecta autoridad desde la primera impresión.',
        rasgos_asc: ['Rasgos serios','Pómulos definidos','Madurez proyectada','Postura notable','Magnetismo creciente']
      }
    },

    acuario: {
      emoji: '♒︎', nombre: 'Acuario', elemento: 'Aire', planeta: 'Urano/Saturno',
      zonas: ['piernas'],
      solar: {
        texto: 'Acuario rige las piernas (pantorrillas y tobillos) y el sistema circulatorio. Los acuarianos suelen tener rasgos únicos y difíciles de clasificar en un "tipo" — son originales en su apariencia. Los ojos son inusuales, a veces de color claro o con un brillo eléctrico. El estilo personal rompe normas.',
        rasgos: ['Rasgos únicos','Ojos inusuales','Piernas largas','Estilo original','Brillo eléctrico en la mirada']
      },
      asc: {
        texto: 'El Ascendente Acuario produce un rostro original e inclasificable. Ojos que parecen mirar más allá, expresión inteligente y algo distante. Raramente encajan en un estereotipo. Hay algo en ellos que no termina de definirse — y eso es el rasgo más distintivo.',
        planeta_info: 'Tu Ascendente Acuario tiene a Urano y Saturno como planetas regentes. Urano imprime originalidad eléctrica — ojos inusuales, algo que no cuadra con los cánones. Saturno añade estructura y resistencia. El resultado es una presencia que desconcierta y fascina a partes iguales.',
        rasgos_asc: ['Ojos eléctricos','Expresión distante','Originalidad innata','Inclasificable visualmente','Inteligencia proyectada']
      }
    },

    piscis: {
      emoji: '♓︎', nombre: 'Piscis', elemento: 'Agua', planeta: 'Neptuno/Júpiter',
      zonas: ['pies'],
      solar: {
        texto: 'Piscis rige los pies y el sistema linfático. Los piscianos suelen tener una apariencia etérea y soñadora. Los ojos son grandes, acuosos y profundos — a menudo de tonos cambiantes. La piel es delicada y sensible. El cuerpo es fluido en sus movimientos, como si flotara. Los pies suelen ser importantes en su vida.',
        rasgos: ['Ojos grandes y acuosos','Apariencia etérea','Piel delicada','Movimiento fluido','Mirada profunda']
      },
      asc: {
        texto: 'Ascendente Piscis: el rostro más soñador y difuso del zodíaco. Ojos que parecen contener océanos, mirada que va hacia adentro. Los rasgos son suaves, sin aristas. La persona emana una sensibilidad que conmueve antes de hablar.',
        planeta_info: 'Tu Ascendente Piscis tiene a Neptuno y Júpiter como planetas regentes. Neptuno disuelve los contornos: apariencia etérea, ojos velados, piel translúcida. Júpiter amplía la presencia. Tu Ascendente es uno de los más difíciles de "leer" porque cambia según quien lo mira — y eso es puro Neptuno.',
        rasgos_asc: ['Ojos oceánicos','Rasgos sin aristas','Sensibilidad evidente','Apariencia mutable','Profundidad sin palabras']
      }
    }
  },

  // ── ZONAS CORPORALES ─────────────────────────────────────────────

  zonas: {
    cabeza:   {
      signo: 'Aries ♈︎', titulo: 'Cabeza · Rostro · Cerebro',
      desc: 'Aries rige toda la región cefálica. Las personas con énfasis en esta zona suelen tener frente prominente, rasgos frontales marcados y una presencia directa. Las cejas, los ojos y la mandíbula son los elementos más expresivos. El cuero cabelludo y el cerebro son áreas de sensibilidad física particular.',
      signos: ['aries']
    },
    cuello:   {
      signo: 'Tauro ♉︎', titulo: 'Cuello · Garganta · Voz',
      desc: 'Tauro gobierna el cuello y la garganta. Esta zona es en muchos sentidos el "centro expresivo" del cuerpo: la voz que emana de aquí es uno de los atributos más distintivos. Un cuello largo y bien formado es signo venusino. La tiroides y las cuerdas vocales son los órganos más sensibles.',
      signos: ['tauro']
    },
    hombros:  {
      signo: 'Géminis ♊︎ / Tauro ♉︎', titulo: 'Hombros · Clavículas',
      desc: 'Los hombros marcan la amplitud de la presencia. Tauro los forma, Géminis los activa con movimiento. Una clavícula prominente o hombros anchos hablan de estructura taurina. Los hombros caídos o tensos son señal de carga emocional no procesada.',
      signos: ['tauro','geminis']
    },
    pecho:    {
      signo: 'Cáncer ♋︎ / Leo ♌︎', titulo: 'Pecho · Corazón · Pulmones',
      desc: 'Cáncer rige el pecho y el estómago; Leo, el corazón y la espalda alta. El pecho es el centro de la emoción y la vitalidad. Un tórax amplio habla de generosidad emocional. El corazón — tanto músculo como símbolo — late desde aquí como el motor de la vida.',
      signos: ['cancer','leo']
    },
    brazos:   {
      signo: 'Géminis ♊︎', titulo: 'Brazos · Antebrazos · Codos',
      desc: 'Géminis rige los brazos y los pulmones. Los brazos son el instrumento de la comunicación física — abrazar, señalar, escribir, crear. Las personas con énfasis en Géminis suelen tener brazos ágiles y expresivos. El sistema respiratorio y los nervios de los brazos son sus puntos sensibles.',
      signos: ['geminis']
    },
    manos:    {
      signo: 'Géminis ♊︎ / Virgo ♍︎', titulo: 'Manos · Muñecas · Dedos',
      desc: 'Las manos son el instrumento más expresivo del cuerpo humano. Géminis las activa, Virgo las refina. Manos largas y delgadas son mercurianas; manos cuadradas y sólidas, taurinas. La quiromancia completa esta lectura — las líneas de las manos son el mapa del destino.',
      signos: ['geminis','virgo']
    },
    abdomen:  {
      signo: 'Cáncer ♋︎ / Virgo ♍︎', titulo: 'Abdomen · Sistema digestivo',
      desc: 'Cáncer rige el estómago y la retención de líquidos; Virgo, el intestino y el proceso digestivo. El abdomen es el centro de procesamiento del cuerpo — no solo físico sino emocional. Las "sensaciones viscerales" son literales: el miedo, la intuición y el amor se sienten aquí primero.',
      signos: ['cancer','virgo']
    },
    caderas:  {
      signo: 'Libra ♎︎ / Escorpio ♏︎', titulo: 'Caderas · Riñones · Pelvis',
      desc: 'Libra gobierna los riñones y la zona lumbar; Escorpio, los órganos reproductores y la pelvis. Las caderas definen la silueta y el equilibrio del cuerpo. En la astrología clásica, esta zona conecta con la creatividad, la sexualidad y el movimiento vital. El equilibrio de los riñones refleja el equilibrio de las relaciones.',
      signos: ['libra','escorpio']
    },
    muslos:   {
      signo: 'Sagitario ♐︎', titulo: 'Muslos · Parte superior de las piernas',
      desc: 'Sagitario rige los muslos y el hígado. Los muslos son el motor de la locomoción — representan la capacidad de avanzar, viajar, expandirse. En las personas sagitarianas, los muslos suelen ser prominentes o bien desarrollados. El hígado, su órgano regente, procesa tanto los alimentos como los excesos.',
      signos: ['sagitario']
    },
    rodillas: {
      signo: 'Capricornio ♑︎', titulo: 'Rodillas · Articulaciones',
      desc: 'Capricornio rige las rodillas y la estructura ósea general. Las rodillas son la articulación de la humildad — doblarse sin quebrarse. Los capricornianos deben cuidar especialmente sus rodillas, que cargan el peso de su ambición. Las articulaciones en general hablan de la flexibilidad interior.',
      signos: ['capricornio']
    },
    piernas:  {
      signo: 'Acuario ♒︎ / Capricornio ♑︎', titulo: 'Piernas · Pantorrillas · Tobillos',
      desc: 'Acuario rige las pantorrillas y los tobillos; Capricornio, las rodillas y la tibia. Las piernas son el sustento, el avance, la conexión con la tierra. Las personas con énfasis en Acuario suelen tener piernas largas y bien formadas, con tobillos llamativos. La circulación es su punto de atención.',
      signos: ['acuario','capricornio']
    },
    pies:     {
      signo: 'Piscis ♓︎', titulo: 'Pies · Tobillos · Sistema linfático',
      desc: 'Piscis rige los pies — el punto final del zodíaco y de la silueta humana. Los pies conectan con la tierra pero también con lo invisible: en muchas tradiciones son el centro de la energía kundalini y del campo energético general. Los piscianos suelen tener pies especialmente sensibles o con características particulares.',
      signos: ['piscis']
    }
  },

  // ── DOLOR CORPORAL: lectura astrológica por zona ─────────────────
  // Se muestra cuando el usuario selecciona una zona en "¿Dónde te duele a menudo?"
  // y esa zona NO corresponde a su signo solar ni ascendente.

  dolor: {
    cabeza: {
      titulo: 'Cabeza · Dolores frecuentes',
      texto: 'El dolor recurrente en la cabeza — migrañas, tensión craneal, presión — es señal de Aries activado en tu carta, aunque no sea tu signo solar ni tu ascendente. Puede indicar un Marte tenso, exceso de energía mental sin descarga, o Aries ocupando una casa sensible en tu natal. La cabeza duele cuando no se actúa: cuando la energía marciana se acumula sin salida.',
      consejo: 'Revisá si tenés planetas en Aries o si Marte está en tensión. El movimiento físico intenso — correr, ejercicio explosivo — suele aliviar estos dolores de origen marciano.'
    },
    cuello: {
      titulo: 'Cuello · Dolores frecuentes',
      texto: 'El cuello y la garganta son territorio de Tauro y Venus. Su dolor frecuente habla de tensiones no expresadas — palabras no dichas, emociones guardadas en la garganta. Venus o Tauro activos en zonas sensibles de tu carta pueden manifestar problemas de tiroides, cervicales, cuerdas vocales o tensión constante en esa zona.',
      consejo: 'Observá si te cuesta expresar lo que sentís o pensás. El cuerpo almacena en el cuello lo que la voz no dice. Trabajar la expresión vocal o el canto puede ser terapéutico.'
    },
    hombros: {
      titulo: 'Hombros · Dolores frecuentes',
      texto: 'Los hombros cargan lo que la mente no suelta. Son regidos por Géminis y Tauro — la tensión aquí refleja sobrecarga mental, responsabilidades acumuladas, o un sistema nervioso que no descansa. El dolor de hombros es uno de los más comunes en personas con Mercurio tenso o Géminis activo en zonas de carga en la carta.',
      consejo: 'La tensión en hombros suele responder bien al trabajo con la respiración — los pulmones, también geminianos, liberan cuando el hombro se suelta. Respiración consciente y pausas mentales.'
    },
    pecho: {
      titulo: 'Pecho · Dolores frecuentes',
      texto: 'El pecho es el territorio del corazón — Leo — y del estómago emocional — Cáncer. El dolor o presión frecuente en esta zona habla de emociones que el cuerpo no ha procesado. Cáncer acumula, Leo expande: cuando ninguno de los dos fluye bien, el pecho se tensa. Puede también relacionarse con el sistema respiratorio (pulmones) bajo tensión.',
      consejo: 'Prestá atención a qué emociones estás reteniendo. El pecho suele responder rápido a la expresión emocional honesta — una conversación pendiente, un llanto liberado, un abrazo real.'
    },
    brazos: {
      titulo: 'Brazos · Dolores frecuentes',
      texto: 'Los brazos son el canal de la acción y la comunicación física — Géminis los rige. El dolor frecuente aquí, incluyendo codos y antebrazos, puede indicar tensión nerviosa acumulada, uso repetitivo sin descanso, o Mercurio en posición tensa en tu carta. Las personas que trabajan mucho con las manos o la mente cargan en los brazos lo que la mente no suelta.',
      consejo: 'El descanso activo — no inactividad, sino cambiar el tipo de movimiento — ayuda mucho. El sistema nervioso, también mercuriano, necesita pausas reales entre estímulos.'
    },
    manos: {
      titulo: 'Manos · Dolores frecuentes',
      texto: 'Las manos son el instrumento más mercuriano y virginiano del cuerpo. El dolor frecuente en muñecas, dedos o articulaciones de las manos puede señalar Mercurio o Virgo activos con tensión — pero también Saturno, que rige las articulaciones en general. Las manos duelen cuando se les pide demasiado sin reconocerles lo que hacen.',
      consejo: 'Revisá si Saturno está en aspecto tenso con Mercurio o en Virgo. El cuidado físico de las manos — masajes, estiramientos, calor — tiene también un efecto energético importante.'
    },
    abdomen: {
      titulo: 'Abdomen · Dolores frecuentes',
      texto: 'El abdomen es el centro del procesamiento — físico y emocional. Cáncer rige el estómago, Virgo el intestino. El dolor o malestar frecuente aquí es uno de los más directamente ligados al estado emocional: el nerviosismo, la ansiedad y el miedo se sienten primero en el vientre. Un Mercurio o Virgo tenso, o Cáncer en zonas de alta carga, puede manifestarse como problemas digestivos crónicos.',
      consejo: 'Observá qué situaciones o personas preceden al malestar abdominal. El intestino tiene su propio sistema nervioso — escucharlo es escuchar la carta desde adentro.'
    },
    caderas: {
      titulo: 'Caderas · Dolores frecuentes',
      texto: 'Las caderas son territorio de Libra (riñones, zona lumbar) y Escorpio (pelvis, órganos reproductores). El dolor frecuente aquí puede señalar desequilibrios en las relaciones — Libra necesita equilibrio entre dar y recibir — o tensiones en la zona creativa y sexual — Escorpio. También puede indicar Venus o Plutón/Marte en posiciones sensibles en tu carta.',
      consejo: 'Revisá el equilibrio en tus relaciones más cercanas. Las caderas también responden mucho al movimiento — el baile, el yoga y los movimientos de cadera son terapéuticos a nivel energético.'
    },
    muslos: {
      titulo: 'Muslos · Dolores frecuentes',
      texto: 'Los muslos son regidos por Sagitario y conectados con el hígado — su órgano. El dolor frecuente en esta zona puede reflejar exceso de expansión sin integración: demasiado movimiento, viajes, compromisos, energía jupiteriana desbordada. El hígado, cuando está bajo carga, también puede irradiar hacia los muslos.',
      consejo: 'Revisá si Júpiter está en tensión en tu carta o si Sagitario ocupa casas de sobrecarga. La moderación — paradójicamente sagitariana — y el trabajo con el hígado (alimentación, hidratación) pueden aliviar.'
    },
    rodillas: {
      titulo: 'Rodillas · Dolores frecuentes',
      texto: 'Las rodillas son capricornianas y saturninas por excelencia. Su dolor frecuente es una de las señales más claras de Saturno activo con tensión: peso acumulado, responsabilidades que doblan sin quebrar, estructuras que necesitan revisión. Las articulaciones en general son el lenguaje físico de Saturno — cuando duelen, algo en la estructura de vida necesita ajustarse.',
      consejo: 'Revisá si Saturno está en aspecto tenso o si Capricornio ocupa casas de alta carga. El peso emocional que no se descarga termina en las rodillas — literalmente.'
    },
    piernas: {
      titulo: 'Piernas · Dolores frecuentes',
      texto: 'Las piernas — pantorrillas, tobillos — son territorio acuariano, con Capricornio en las rodillas. El dolor frecuente aquí puede indicar problemas circulatorios (Acuario rige el sistema circulatorio), tensión por exceso de estabilidad o por demasiado movimiento sin arraigo. El cuerpo pide que te detengas o que avances — y las piernas son el primer mensaje.',
      consejo: 'La circulación acuariana responde bien al movimiento regular y constante — no explosivo, sino sostenido. Revisá también si Urano o Saturno están en tensión en tu carta.'
    },
    pies: {
      titulo: 'Pies · Dolores frecuentes',
      texto: 'Los pies son el territorio final de Piscis — el cierre del zodíaco. Su dolor frecuente puede reflejar Neptuno o Júpiter en tensión, acumulación de lo no procesado (energética y físicamente), o sensibilidad del sistema linfático. Los piscianos y quienes tienen énfasis en Piscis suelen tener pies muy sensibles que absorben la energía del entorno.',
      consejo: 'Los pies responden extraordinariamente a la reflexología y al contacto con la tierra descalzo. El baño de pies con sal también tiene efecto energético real para zonas con énfasis neptunianos.'
    }
  }

};
// ── FIN ASTROMORF_DATA ────────────────────────────────────────────

// ================================================================================
// ASTROMORFOLOGÍA
// ================================================================================

window._ASTROMORF_DATA = {
  signos: {
    aries: { emoji:'♈', nombre:'Aries', elemento:'Fuego · Cardinal', zonas:['cabeza'],
      solar:{ texto:'Aries imprime en el cuerpo una energía marcial y directa. El rostro suele ser alargado o anguloso, con cejas prominentes y mirada intensa. La mandíbula firme y la frente alta son señas características. El cuerpo tiende a ser atlético y de movimientos rápidos, con tendencia a inclinar la cabeza hacia adelante al caminar, como si siempre fuera a embestir.', rasgos:['Frente alta','Cejas marcadas','Mirada directa','Mandíbula angular','Paso rápido','Porte combativo'] },
      asc:{ texto:'El Ascendente Aries proyecta una presencia inmediata y directa. El rostro es la primera impresión: frente despejada, pómulos definidos y una expresión que no pide permiso. La energía que emana es de liderazgo espontáneo.', rasgos_asc:['Primera impresión fuerte','Porte decidido','Expresión directa','Energía impulsiva visible'], planeta_info:'Marte rige Aries y marca el cuerpo con vigor físico y un metabolismo acelerado. La inflamación y la fiebre son señales comunes cuando este planeta está activado.' }
    },
    tauro: { emoji:'♉', nombre:'Tauro', elemento:'Tierra · Fijo', zonas:['cuello'],
      solar:{ texto:'Tauro otorga una constitución sólida y sensual. El cuello suele ser ancho y corto, con una voz rica y resonante que es una de sus marcas más reconocibles. El cuerpo tiende a acumular masa muscular con facilidad. Los movimientos son lentos y deliberados, transmitiendo estabilidad y arraigo.', rasgos:['Cuello ancho','Voz resonante','Constitución sólida','Rasgos redondeados','Movimientos pausados','Piel suave'] },
      asc:{ texto:'El Ascendente Tauro da una apariencia serena y tangible. El cuello y la garganta son zonas particularmente expresivas: la voz suena cálida desde el primer intercambio. La apariencia transmite confianza y permanencia.', rasgos_asc:['Presencia calmante','Voz atractiva','Apariencia sólida','Mirada tranquila'], planeta_info:'Venus rige Tauro e imprime belleza natural y una atracción casi magnética. Puede señalar tendencia a la retención hídrica cuando está tensionado.' }
    },
    geminis: { emoji:'♊', nombre:'Géminis', elemento:'Aire · Mutable', zonas:['brazos','manos'],
      solar:{ texto:'Géminis produce cuerpos ágiles, de constitución ligera y manos especialmente expresivas. Los brazos son largos y los gestos al hablar son parte esencial de su comunicación. El rostro es vivaz, de ojos rápidos y una sonrisa que aparece y desaparece con velocidad.', rasgos:['Manos expresivas','Ojos inquietos','Constitución ligera','Gestos al hablar','Apariencia variable','Agilidad física'] },
      asc:{ texto:'El Ascendente Géminis proyecta juventud y curiosidad instantánea. Los ojos se mueven, brillan y procesan constantemente. Hay una ligereza en el cuerpo que hace que parezca que nunca está del todo quieto.', rasgos_asc:['Ojos brillantes','Aspecto juvenil','Energía nerviosa visible','Manos gesticulantes'], planeta_info:'Mercurio rige Géminis y activa el sistema nervioso, los pulmones y los brazos. Tensionado puede producir tensión en manos u hombros rígidos.' }
    },
    cancer: { emoji:'♋', nombre:'Cáncer', elemento:'Agua · Cardinal', zonas:['pecho'],
      solar:{ texto:'Cáncer confiere una complexión suave y redondeada, con el pecho como zona corporal más expresiva. Los ojos son grandes y lunares, con una profundidad emocional que se percibe de inmediato. Los movimientos son envolventes y protectores.', rasgos:['Ojos grandes y lunares','Pecho prominente','Complexión suave','Piel sensible','Movimientos envolventes','Expresión empática'] },
      asc:{ texto:'El Ascendente Cáncer proyecta ternura y receptividad. El primer encuentro genera una sensación de calidez instintiva. El rostro refleja las emociones del entorno antes de que la persona hable.', rasgos_asc:['Expresión emotiva','Ojos profundos','Porte protector','Presencia cálida'], planeta_info:'La Luna rige Cáncer y gobierna los fluidos, el sistema digestivo y los ciclos del cuerpo. El estómago es el primer órgano que reacciona al estrés emocional.' }
    },
    leo: { emoji:'♌', nombre:'Leo', elemento:'Fuego · Fijo', zonas:['pecho'],
      solar:{ texto:'Leo imprime una presencia física que reclama espacio. El cabello es uno de sus rasgos más llamativos: abundante, con movimiento. La espalda y el pecho son zonas de orgullo físico. El porte es erguido y teatral, con una tendencia natural a ocupar el centro de cualquier habitación.', rasgos:['Cabello abundante','Espalda recta','Pecho abierto','Porte teatral','Gestos amplios','Mirada cálida'] },
      asc:{ texto:'El Ascendente Leo se nota desde la entrada. El cabello, la postura y la forma de mirar definen la primera impresión. No busca atención — la atención lo encuentra de forma natural.', rasgos_asc:['Presencia magnética','Cabello distintivo','Postura erguida','Mirada cálida y segura'], planeta_info:'El Sol rige Leo y vitaliza el corazón, la circulación y la columna dorsal. Cuando la energía solar está baja, el cuerpo avisa con fatiga o tensión en la espalda.' }
    },
    virgo: { emoji:'♍', nombre:'Virgo', elemento:'Tierra · Mutable', zonas:['abdomen'],
      solar:{ texto:'Virgo produce cuerpos de constitución media y gestos contenidos. El rostro tiene rasgos finos y analíticos. La zona abdominal y el sistema digestivo son las áreas más sensibles. Los movimientos son precisos y económicos, la apariencia pulcra y ordenada.', rasgos:['Rasgos finos','Movimientos precisos','Abdomen sensible','Aspecto ordenado','Ojos analíticos','Constitución media'] },
      asc:{ texto:'El Ascendente Virgo proyecta discernimiento y atención al detalle desde el primer segundo. La apariencia es cuidada sin ser ostentosa. Hay algo en la mirada que parece catalogar información constantemente.', rasgos_asc:['Apariencia ordenada','Mirada analítica','Porte discreto','Gestos medidos'], planeta_info:'Mercurio rige Virgo y activa el sistema digestivo y el sistema nervioso autónomo. El estrés se manifiesta primero en el vientre: náuseas, intolerancias o tensión abdominal.' }
    },
    libra: { emoji:'♎', nombre:'Libra', elemento:'Aire · Cardinal', zonas:['caderas'],
      solar:{ texto:'Libra confiere una simetría facial notable y una estética natural. Los rasgos son armónicos y equilibrados, con una sonrisa que desarma. Las caderas y la zona lumbar son los puntos de equilibrio del cuerpo. Los movimientos son elegantes y considerados.', rasgos:['Simetría facial','Caderas equilibradas','Sonrisa armoniosa','Movimientos elegantes','Estética natural','Porte diplomático'] },
      asc:{ texto:'El Ascendente Libra produce la primera impresión más agradable del zodiaco. Hay algo inmediatamente atractivo en la persona, no solo por los rasgos sino por cómo los porta. La sonrisa llega antes que las palabras.', rasgos_asc:['Sonrisa disarmante','Apariencia armónica','Tono de voz agradable','Porte elegante'], planeta_info:'Venus rige Libra y actúa sobre los riñones, la piel y el equilibrio hormonal. El cuerpo responde con sensibilidad a la desarmonía del entorno.' }
    },
    escorpio: { emoji:'♏', nombre:'Escorpio', elemento:'Agua · Fijo', zonas:['caderas'],
      solar:{ texto:'Escorpio produce una intensidad física que se percibe antes de que la persona hable. Los ojos son su rasgo más poderoso: oscuros, fijos y penetrantes. La constitución suele ser robusta o atlética, con una densidad energética particular. Los movimientos son deliberados y controlados.', rasgos:['Mirada penetrante','Constitución densa','Movimientos controlados','Presencia intensa','Zona pélvica sensible','Rasgos marcados'] },
      asc:{ texto:'El Ascendente Escorpio genera una primera impresión de profundidad y misterio que es difícil de ignorar. Hay algo en la mirada que hace que la gente sienta que está siendo leída. La presencia ocupa el espacio con peso.', rasgos_asc:['Mirada que penetra','Presencia densa','Porte misterioso','Intensidad contenida'], planeta_info:'Plutón y Marte corigen Escorpio, activando el sistema reproductivo y los mecanismos de transformación. Las crisis físicas suelen ser intensas pero seguidas de regeneraciones notables.' }
    },
    sagitario: { emoji:'♐', nombre:'Sagitario', elemento:'Fuego · Mutable', zonas:['muslos','caderas'],
      solar:{ texto:'Sagitario produce cuerpos largos y expansivos, con muslos y caderas como zonas físicas dominantes. El porte es optimista y abierto. El rostro tiene algo jovial y franco: la sonrisa es amplia y frecuente. Los movimientos son largos y entusiastas.', rasgos:['Muslos fuertes','Porte expansivo','Sonrisa amplia','Constitución larga','Movimientos entusiastas','Expresión franca'] },
      asc:{ texto:'El Ascendente Sagitario proyecta optimismo instantáneo. Hay algo en la forma de sonreír y hablar que abre espacios. El cuerpo no se contiene: los gestos son amplios, la risa es franca.', rasgos_asc:['Sonrisa abierta','Porte expansivo','Energía juvenil','Tono de voz alegre'], planeta_info:'Júpiter rige Sagitario y dilata todo lo que toca: metabolismo acelerado, tendencia a ganar peso, pero también optimismo natural. Inflamaciones ocasionales reflejan su tendencia expansiva.' }
    },
    capricornio: { emoji:'♑', nombre:'Capricornio', elemento:'Tierra · Cardinal', zonas:['rodillas','huesos'],
      solar:{ texto:'Capricornio produce una constitución angular y un porte disciplinado. La estructura ósea es lo más evidente: pómulos altos, mandíbula fuerte, una cierta aspereza en los rasgos que refleja su naturaleza seria y responsable. El cuerpo es más bien enjuto, con músculos definidos por esfuerzo.', rasgos:['Estructura ósea definida','Pómulos altos','Mandíbula fuerte','Porte rígido','Gestos económicos','Apariencia seria'] },
      asc:{ texto:'El Ascendente Capricornio transmite autoridad desde el primer segundo. No es calidez lo que proyecta, sino respeto y seriedad. El porte es vertical, la mirada directa y evaluadora.', rasgos_asc:['Porte erguido','Mirada seria','Presencia de autoridad','Gestos controlados'], planeta_info:'Saturno rige Capricornio y restringe, endurece y fortalece. Las articulaciones — especialmente rodillas — son su punto sensible. El envejecimiento es visible pero noble.' }
    },
    acuario: { emoji:'♒', nombre:'Acuario', elemento:'Aire · Fijo', zonas:['tobillos','pantorrillas'],
      solar:{ texto:'Acuario produce cuerpos de constitución variable, frecuentemente altos y de estructura delicada. El rostro tiene algo andrógino o fuera de lo común: los rasgos no se ajustan a estándares típicos. Los ojos son penetrantes e inesperados. El movimiento es errático pero elegante.', rasgos:['Constitución variable','Rasgos andróginos','Ojos penetrantes','Movimiento impredecible','Apariencia inconvencional','Energía excéntrica'] },
      asc:{ texto:'El Ascendente Acuario proyecta originalidad instantánea. No busca encajar: es obvio desde el primer vistazo que es diferente. Hay algo magnético pero alienígena en su presencia.', rasgos_asc:['Presencia única','Aspecto poco convencional','Energía magnética','Distancia inteligente'], planeta_info:'Urano rige Acuario y causa cambios súbitos e impredecibles en el cuerpo. Calambres, tensiones en pantorrillas, problemas circulatorios: el cuerpo refleja la electricidad de este planeta.' }
    },
    piscis: { emoji:'♓', nombre:'Piscis', elemento:'Agua · Mutable', zonas:['pies'],
      solar:{ texto:'Piscis produce rasgos suaves y difuminados, con ojos grandes y acuosos que son su característica más reconocible. Los pies son su zona corporal más sensible. El cuerpo tiende a retener líquidos. Los movimientos son fluidos y ondulantes, con una cualidad etérea en la apariencia.', rasgos:['Ojos acuosos y grandes','Pies sensibles','Movimientos ondulantes','Constitución suave','Retención de líquidos','Apariencia etérea'] },
      asc:{ texto:'El Ascendente Piscis produce la primera impresión más difusa del zodiaco y también la más mágica. Hay algo en la presencia que cambia según quién mire. Los ojos son el elemento que más impacta: profundos, empáticos, con algo de mar adentro.', rasgos_asc:['Ojos expresivos y profundos','Presencia cambiante','Apariencia etérea','Porte receptivo'], planeta_info:'Neptuno y Júpiter corigen Piscis y gobiernan los pies, el sistema linfático y la glándula pineal. La sensibilidad a sustancias y el agotamiento sistémico son señales frecuentes.' }
    }
  },
  dolor: {
    cabeza:   { titulo:'Cabeza · El impulso sin freno', texto:'El dolor recurrente en cabeza — migraña, tensión frontal, presión en sienes — suele relacionarse con energía ariana no procesada: impulsos reprimidos, ira contenida o exceso de actividad mental sin descanso.', consejo:'Explorar prácticas de descarga física y técnicas de liberación de la ira. El descanso obligado suele ser el mensaje más claro de este tipo de dolor.' },
    cuello:   { titulo:'Cuello · La voz que no se dice', texto:'La tensión cervical y el dolor de garganta recurrente hablan de palabras que no se dijeron, necesidades que no se expresaron. El cuello es el puente entre lo que se piensa y lo que se dice.', consejo:'Revisar qué se está callando y por qué. Trabajar la expresión vocal o artística como práctica de liberación. La rigidez cervical puede mejorar notablemente al recuperar la propia voz.' },
    hombros:  { titulo:'Hombros · El peso que se carga solo', texto:'Los hombros tensos o doloridos señalan una carga de responsabilidad asumida en exceso, o el hábito de sostener el mundo de otros sin pedir ayuda.', consejo:'Identificar qué cargas son propias y cuáles ajenas. Aprender a delegar. El masaje profundo en hombros y trapecios libera emocionalmente todo lo que se sostuvo sin apoyo.' },
    pecho:    { titulo:'Pecho · Lo que el corazón guarda', texto:'El dolor en pecho o las dificultades respiratorias hablan de amor reprimido, duelos no elaborados o la sensación de que el corazón ha sido herido y cerrado como mecanismo de protección.', consejo:'Abrir espacios de expresión emocional genuina. La respiración profunda y consciente es el primer paso. El corazón físico responde con alivio cuando el emocional procesa lo que tiene guardado.' },
    brazos:   { titulo:'Brazos · Lo que se alcanza y se suelta', texto:'Dolor en brazos, codos o muñecas habla de la relación con el dar y recibir, el alcanzar y soltar. Puede señalar sobrecarga en la comunicación o tensión en vínculos que no fluyen.', consejo:'Revisar la relación con el trabajo manual y la comunicación. Descansar los brazos conscientemente. Soltar lo que se sostiene con demasiada tensión.' },
    manos:    { titulo:'Manos · El hacer bloqueado', texto:'Las manos doloridas o rígidas hablan de una creatividad bloqueada o sobreutilizada. Puede señalar también perfeccionismo excesivo en el trabajo manual o artístico.', consejo:'Alternar períodos de actividad manual con descanso real. Incorporar trabajo creativo sin presión de resultado. Las manos necesitan jugar, no solo producir.' },
    abdomen:  { titulo:'Abdomen · Lo que no se digiere', texto:'El dolor o sensibilidad abdominal recurrente habla de lo que no se digiere, literal y emocionalmente. Las preocupaciones y la necesidad de control se alojan en el vientre antes que en ningún otro lugar.', consejo:'Incorporar relajación abdominal y respiración diafragmática. Preguntarse qué situación se está rumiando sin poder resolverla.' },
    caderas:  { titulo:'Caderas · El movimiento detenido', texto:'La tensión en caderas o zona lumbar puede señalar conflicto entre lo que se quiere y lo que se hace, energía reprimida o falta de movimiento en algún área importante de la vida.', consejo:'El movimiento es la medicina: danza, yoga de caderas, caminatas. Las caderas son el centro del movimiento — cuando se bloquean, algo en la vida también está detenido.' },
    muslos:   { titulo:'Muslos · El avanzar con fuerza', texto:'El dolor en muslos habla de la capacidad de avanzar con confianza. Puede señalar miedo a expandirse o exceso de actividad física sin recuperación adecuada.', consejo:'Escuchar el cuerpo en el ejercicio. Revisar qué expansión — viaje, estudio, aventura — se está postergando por miedo o duda.' },
    rodillas: { titulo:'Rodillas · Flexibilidad y autoridad', texto:'Las rodillas hablan de la relación con la autoridad — propia y ajena —, la capacidad de ceder sin quebrarse y el peso de las expectativas. Dolor en rodillas puede señalar rigidez ante el cambio.', consejo:'Practicar la flexibilidad simbólica: aprender a ceder donde antes se resistía. Estiramientos de rodillas y trabajo con el control y la autoridad.' },
    piernas:  { titulo:'Piernas · Circulación y avance', texto:'El dolor o pesadez en piernas y tobillos puede señalar circulación bloqueada, sedentarismo o un patrón de inmovilidad en algún área de la vida.', consejo:'Activar la circulación con movimiento regular. Elevar las piernas. Y revisar qué pasos de la vida se están posponiendo indefinidamente.' },
    pies:     { titulo:'Pies · El contacto con la tierra', texto:'Los pies doloridos son la interfaz entre el ser y la tierra. Dolor en pies puede señalar desconexión del presente o dificultad para pisar la realidad cotidiana.', consejo:'Grounding: caminar descalzo, baños de pies, masaje plantar. Los pies necesitan tierra firme debajo — y a veces eso es también una tarea emocional.' }
  }
};
