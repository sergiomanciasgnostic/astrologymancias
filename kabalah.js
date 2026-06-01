// ══════════════════════════════════════════════════════════════
// MENSAJES KABALAH — Sergiomancias Gnostic
// Todos los textos, preguntas, correspondencias y mensajes
// del módulo Kabalah. Cargados desde este archivo externo.
// ══════════════════════════════════════════════════════════════

var KB_DATA = [
  // ─────────────────────────────────────────────────────────────
  // 0 · KETHER
  // ─────────────────────────────────────────────────────────────
  {
    idx: 0,
    nombre: 'Kether',
    subtitulo: 'La Corona',
    color: '#ffffff',
    rgb: '255,255,255',
    simbolo: '✦',
    pilar: 'Equilibrio',
    planeta: 'Neptuno / Primer Motor',
    arcano: 'El Loco (0)',
    angel: 'Metatrón',
    nombre_divino: 'Ehieh (Yo Soy)',
    elemento: 'Éter puro',
    keywords: ['Unidad','Origen divino','Vacío sagrado','El Ser','Trascendencia'],
    descripcion: 'Kether es la primera emanación, el punto de origen de toda existencia. Es la conciencia pura antes de la forma, la unión con lo Infinito (Ein Sof). Quien resuena con Kether siente un llamado profundo a la trascendencia, la contemplación y la unidad con todo lo que existe.',
    practica: 'Meditación en el silencio absoluto. Contemplar el espacio entre pensamientos. Ayuno consciente de estimulación para escuchar la voz interior más sutil.',
    mensaje_espiritual: 'Eres un punto de luz que recuerda su origen. No buscas a Dios: eres Su respiración haciéndose consciente. Cuanto más te vacías, más recibes.',
    desequilibrio: 'Disociación de la realidad material. Dificultad para encarnarse, tendencia a la evasión espiritual o al nihilismo. Sensación de no pertenecer a ningún lugar.',
    caminos_activos: ['El Loco', 'El Mago', 'La Sacerdotisa'],
    questions: [
      {
        text: '¿Sientes con frecuencia que hay una conciencia mayor de la que formas parte?',
        opts: ['Constantemente, es mi certeza más profunda', 'A menudo, en momentos de quietud', 'Rara vez lo percibo con claridad', 'Casi nunca, me cuesta sentir eso']
      },
      {
        text: '¿Puedes estar en silencio total —sin teléfono, música ni distracciones— sintiéndote completo?',
        opts: ['Sí, el silencio me nutre profundamente', 'Lo busco y disfruto', 'Me resulta incómodo al principio', 'No, el silencio me genera ansiedad']
      },
      {
        text: '¿Experimentas momentos de unidad o disolución del ego durante meditación u oración?',
        opts: ['Con frecuencia y de forma intensa', 'Ocasionalmente, con práctica', 'Rara vez, son breves destellos', 'No los he experimentado']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 1 · CHOKMAH
  // ─────────────────────────────────────────────────────────────
  {
    idx: 1,
    nombre: 'Chokmah',
    subtitulo: 'La Sabiduría',
    color: '#a8d8ea',
    rgb: '168,216,234',
    simbolo: '◈',
    pilar: 'Misericordia',
    planeta: 'Urano / Las Esferas Fijas',
    arcano: 'El Emperador (IV)',
    angel: 'Raziel',
    nombre_divino: 'Yah (El Dios)',
    elemento: 'Fuego primordial',
    keywords: ['Sabiduría primordial', 'Visión', 'Chispa divina', 'Voluntad', 'Inspiración'],
    descripcion: 'Chokmah es la sabiduría activa, el primer movimiento de la voluntad divina. Es la fuerza pura, el impulso creador. Quienes resuenan con Chokmah poseen una visión penetrante de la realidad, actúan desde la inspiración súbita y sienten el tiempo como un flujo vivo que moldean con su presencia.',
    practica: 'Estudio de los textos sagrados con apertura intuitiva. Practicar la acción desde la inspiración espontánea. Conectar con maestros espirituales o textos de sabiduría perenne.',
    mensaje_espiritual: 'La verdad no se razona: se recibe. Confía en esos destellos que llegan antes de pensar. Eres un canal de la sabiduría que precede al tiempo.',
    desequilibrio: 'Impulsividad sin estructura. Exceso de visiones sin acción concreta. Dificultad para escuchar a otros cuando ya "sabes" la respuesta.',
    caminos_activos: ['El Mago', 'La Rueda de la Fortuna', 'El Emperador'],
    questions: [
      {
        text: '¿Recibes con frecuencia destellos de comprensión repentina, como si la verdad llegara de golpe?',
        opts: ['Sí, es mi modo natural de comprender', 'Con cierta frecuencia', 'Ocasionalmente', 'Rara vez, necesito razonar paso a paso']
      },
      {
        text: '¿Te sientes llamado a transmitir sabiduría o enseñanzas a otros?',
        opts: ['Es una vocación que siento claramente', 'Sí, cuando tengo algo valioso que compartir', 'A veces, aunque me genera inseguridad', 'No, prefiero guardar lo que sé']
      },
      {
        text: '¿Percibes patrones y verdades universales en situaciones cotidianas?',
        opts: ['Constantemente, todo me habla de lo sagrado', 'Con frecuencia, veo conexiones profundas', 'A veces lo noto', 'Raramente, me enfoco en los hechos concretos']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 2 · BINAH
  // ─────────────────────────────────────────────────────────────
  {
    idx: 2,
    nombre: 'Binah',
    subtitulo: 'La Comprensión',
    color: '#9b59b6',
    rgb: '155,89,182',
    simbolo: '◉',
    pilar: 'Rigor',
    planeta: 'Saturno',
    arcano: 'La Emperatriz (III)',
    angel: 'Tzaphkiel',
    nombre_divino: 'YHVH Elohim',
    elemento: 'Agua primordial',
    keywords: ['Comprensión profunda', 'Forma', 'Gestación', 'Madre suprema', 'Estructura'],
    descripcion: 'Binah es la matriz receptiva que da forma a la sabiduría de Chokmah. Es la Gran Madre, el útero cósmico donde las ideas toman estructura. Quienes resuenan con Binah poseen una capacidad extraordinaria de comprensión profunda, piensan en estructuras y ven cómo las cosas se sostienen o colapsan desde su raíz.',
    practica: 'Journaling profundo y estructurado. Análisis meditativo de experiencias pasadas. Trabajo con los arquetipos de lo femenino sagrado y la escucha activa del cuerpo.',
    mensaje_espiritual: 'Comprender es más sagrado que saber. Tienes el don de la profundidad: donde otros ven superficie, tú ves raíces. Dale tiempo a la gestación de lo que nace en ti.',
    desequilibrio: 'Rigidez mental. Tendencia a la melancolía o el duelo crónico. Dificultad para soltar estructuras que ya no sirven. Control excesivo como forma de evitar el caos.',
    caminos_activos: ['La Suma Sacerdotisa', 'La Emperatriz', 'La Justicia'],
    questions: [
      {
        text: '¿Tiendes a comprender las cosas en profundidad antes de actuar, buscando sus causas más ocultas?',
        opts: ['Siempre, voy a la raíz de todo', 'La mayoría de las veces', 'Cuando tengo tiempo para reflexionar', 'Prefiero actuar primero']
      },
      {
        text: '¿Te sientes cómodo/a sosteniendo la ambigüedad y la espera sin necesitar respuestas inmediatas?',
        opts: ['Sí, la paciencia es una de mis fortalezas', 'Generalmente sí', 'Me cuesta, aunque lo trabajo', 'No, la incertidumbre me genera ansiedad']
      },
      {
        text: '¿Sientes una conexión especial con los ciclos, la gestación y el tiempo como proceso?',
        opts: ['Profundamente, pienso en ciclos vitales', 'Con bastante frecuencia', 'En algunos momentos', 'Raramente']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 3 · CHESED
  // ─────────────────────────────────────────────────────────────
  {
    idx: 3,
    nombre: 'Chesed',
    subtitulo: 'La Misericordia',
    color: '#3498db',
    rgb: '52,152,219',
    simbolo: '✿',
    pilar: 'Misericordia',
    planeta: 'Júpiter',
    arcano: 'La Rueda de la Fortuna (X)',
    angel: 'Tzadkiel',
    nombre_divino: 'El (Dios fuerte)',
    elemento: 'Agua / expansión',
    keywords: ['Amor incondicional', 'Abundancia', 'Generosidad', 'Gracia', 'Compasión'],
    descripcion: 'Chesed es la misericordia y el amor que fluye sin condiciones. Es la abundancia divina expresándose en el mundo como generosidad, compasión y expansión. Quien resuena con Chesed tiene un corazón enorme, da sin esperar retorno y siente que el amor es la fuerza que sostiene toda la creación.',
    practica: 'Actos de servicio desinteresado. Práctica de la generosidad consciente. Trabajo con afirmaciones de abundancia y gratitud. Meditaciones de amor compasivo (metta).',
    mensaje_espiritual: 'Tu corazón es demasiado grande para las medidas del mundo. Lo que das no se pierde: se multiplica en planos que aún no ves. La abundancia que sientes es real.',
    desequilibrio: 'Exceso de generosidad que lleva al agotamiento. Dificultad para poner límites. Idealismo que ignora la realidad. Dependencia emocional disfrazada de amor.',
    caminos_activos: ['La Rueda de la Fortuna', 'La Fuerza', 'El Colgado'],
    questions: [
      {
        text: '¿Sueles dar a otros —tiempo, recursos, energía— sin esperar nada a cambio?',
        opts: ['Es mi modo natural de relacionarme', 'Con frecuencia, lo valoro mucho', 'A veces, cuando tengo suficiente', 'Me cuesta, tengo miedo de quedarme sin nada']
      },
      {
        text: '¿Sientes que el universo es esencialmente abundante y que hay suficiente para todos?',
        opts: ['Profundamente, vivo desde esa certeza', 'La mayoría del tiempo sí', 'Oscilo entre la abundancia y el miedo', 'Generalmente siento escasez']
      },
      {
        text: '¿Puedes perdonar con relativa facilidad, incluso errores significativos?',
        opts: ['Sí, el perdón es una práctica natural en mí', 'Puedo perdonar aunque tome tiempo', 'Me esfuerzo, es un trabajo difícil', 'Me resulta muy difícil perdonar']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 4 · GEBURAH
  // ─────────────────────────────────────────────────────────────
  {
    idx: 4,
    nombre: 'Geburah',
    subtitulo: 'La Fuerza',
    color: '#e74c3c',
    rgb: '231,76,60',
    simbolo: '▲',
    pilar: 'Rigor',
    planeta: 'Marte',
    arcano: 'La Fuerza (VIII)',
    angel: 'Kamael',
    nombre_divino: 'Elohim Gibor (Dios Todopoderoso)',
    elemento: 'Fuego / acción',
    keywords: ['Fuerza', 'Justicia', 'Disciplina', 'Discernimiento', 'Voluntad'],
    descripcion: 'Geburah es la fuerza y el rigor sagrado. Es la capacidad de podar lo que no sirve, de decir no con amor, de aplicar justicia sin crueldad. Quien resuena con Geburah posee una voluntad de hierro, un sentido agudo de lo correcto y la capacidad de transformar a través de la verdad directa.',
    practica: 'Prácticas de disciplina: ayuno, ejercicio riguroso, silencio voluntario. Trabajo con límites. Revisión honesta de hábitos y relaciones que drenan energía. Práctica marcial o de movimiento estructurado.',
    mensaje_espiritual: 'Tu fuerza no es crueldad: es amor que se niega a mentir. Cuando dices no, proteges algo sagrado. El filo que llevas en ti está al servicio de la verdad.',
    desequilibrio: 'Crueldad, rigidez o juicio excesivo hacia uno mismo y otros. Tendencia a destruir en lugar de transformar. Ira reprimida que explota de forma descontrolada.',
    caminos_activos: ['La Fuerza', 'El Carro', 'La Torre'],
    questions: [
      {
        text: '¿Puedes decir "no" con firmeza cuando algo no está alineado con tus valores?',
        opts: ['Sí, mis límites son claros y los sostengo', 'La mayoría de las veces puedo', 'Me cuesta pero lo intento', 'No, cedo para evitar conflictos']
      },
      {
        text: '¿Tienes una fuerte conciencia de justicia y reaccionas ante la injusticia con determinación?',
        opts: ['Muy intensamente, la injusticia me moviliza', 'Con claridad, actúo cuando puedo', 'La noto pero no siempre actúo', 'No es algo que me mueva especialmente']
      },
      {
        text: '¿Practicas la autodisciplina de forma constante en alguna área de tu vida?',
        opts: ['Sí, es un pilar de mi vida', 'En varias áreas importantes', 'En alguna área, con esfuerzo', 'Me cuesta mantener la disciplina']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 5 · TIPHARETH
  // ─────────────────────────────────────────────────────────────
  {
    idx: 5,
    nombre: 'Tiphareth',
    subtitulo: 'La Belleza',
    color: '#f1c40f',
    rgb: '241,196,15',
    simbolo: '☀',
    pilar: 'Equilibrio',
    planeta: 'Sol',
    arcano: 'El Sol (XIX)',
    angel: 'Rafael',
    nombre_divino: 'YHVH Eloah ve-Daat',
    elemento: 'Fuego solar / corazón',
    keywords: ['Armonía', 'Belleza', 'Amor equilibrado', 'El Cristo interior', 'Propósito'],
    descripcion: 'Tiphareth es el corazón del Árbol de la Vida, el punto de armonía y belleza entre todas las fuerzas. Es el principio crístico, la conciencia solar. Quien resuena con Tiphareth busca el equilibrio en todo, tiene capacidad de mediar y reconciliar, y experimenta la vida como una obra de arte sagrada.',
    practica: 'Trabajo con el corazón: yoga, tai chi, movimiento fluido. Meditación centrada en el pecho. Creación artística como práctica espiritual. Buscar la belleza en lo cotidiano.',
    mensaje_espiritual: 'Eres el centro, el mediador, el que recuerda que todo está conectado. Tu vida tiene la estructura de una obra de arte: cada dolor fue pincelada, cada alegría, luz. Brilla desde el corazón.',
    desequilibrio: 'Necesidad excesiva de ser visto o reconocido. Dificultad para integrarse sin perder el centro. Narcisismo espiritual o sensación de ser el "elegido".',
    caminos_activos: ['El Sol', 'El Juicio', 'Los Amantes'],
    questions: [
      {
        text: '¿Tiendes a buscar el equilibrio y la armonía entre extremos opuestos?',
        opts: ['Sí, es mi impulso natural más fuerte', 'Con frecuencia busco el punto medio', 'A veces, cuando noto el desequilibrio', 'Prefiero tomar partido claro']
      },
      {
        text: '¿La belleza —en el arte, la naturaleza, las personas— te afecta de forma profunda y significativa?',
        opts: ['Profundamente, la belleza me transforma', 'Con mucha intensidad', 'Sí, aunque no siempre lo noto', 'No particularmente']
      },
      {
        text: '¿Sientes que tu vida tiene un propósito que integra tanto lo espiritual como lo mundano?',
        opts: ['Sí, vivo desde esa integración', 'Lo busco activamente', 'Lo vislumbro a veces', 'Siento separación entre ambos mundos']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 6 · NETZACH
  // ─────────────────────────────────────────────────────────────
  {
    idx: 6,
    nombre: 'Netzach',
    subtitulo: 'La Victoria',
    color: '#27ae60',
    rgb: '39,174,96',
    simbolo: '♡',
    pilar: 'Misericordia',
    planeta: 'Venus',
    arcano: 'La Emperatriz (III) / Los Amantes',
    angel: 'Haniel',
    nombre_divino: 'YHVH Tzabaoth',
    elemento: 'Fuego / deseo',
    keywords: ['Emoción', 'Deseo', 'Naturaleza', 'Arte y placer', 'Sensorialidad'],
    descripcion: 'Netzach rige el mundo de las emociones, los deseos y la naturaleza. Es la energía dionisíaca, el amor como fuerza vital, la creatividad que surge del cuerpo. Quien resuena con Netzach vive intensamente, se enamora profundamente y percibe lo sagrado en la naturaleza, el arte y la sensorialidad.',
    practica: 'Conexión con la naturaleza: paseos en bosques, agua, tierra. Expresión artística libre sin juicio. Danza, música, contacto con las emociones sin reprimirlas. Rituales de gratitud con elementos naturales.',
    mensaje_espiritual: 'Tus emociones no son debilidades: son el lenguaje del alma. En ti vive el artista que hace sagrado lo bello. Ama con toda la intensidad que traes, sin disculparte.',
    desequilibrio: 'Esclavitud a las emociones o los deseos. Incapacidad de sostener compromisos. Tendencia a idealizarlo todo y decepcionar. Dependencia afectiva o sensorial.',
    caminos_activos: ['Los Amantes', 'La Emperatriz', 'La Luna'],
    questions: [
      {
        text: '¿Vives tus emociones con intensidad y las consideras una fuente de sabiduría?',
        opts: ['Sí, mis emociones son mi brújula principal', 'Con frecuencia las escucho profundamente', 'A veces, aunque me abruman', 'Prefiero la razón sobre las emociones']
      },
      {
        text: '¿Te sientes profundamente conectado/a con la naturaleza y sus ciclos?',
        opts: ['Sí, la naturaleza es mi hogar sagrado', 'Con mucha intensidad', 'La disfruto aunque no me defino por eso', 'No es una conexión central en mi vida']
      },
      {
        text: '¿El arte, la música o la belleza sensorial te produce experiencias que sientes como espirituales?',
        opts: ['Constantemente, son mis portales sagrados', 'Con frecuencia me elevan', 'A veces me tocan profundamente', 'No particularmente']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 7 · HOD
  // ─────────────────────────────────────────────────────────────
  {
    idx: 7,
    nombre: 'Hod',
    subtitulo: 'El Esplendor',
    color: '#e67e22',
    rgb: '230,126,34',
    simbolo: '◬',
    pilar: 'Rigor',
    planeta: 'Mercurio',
    arcano: 'El Mago (I)',
    angel: 'Miguel',
    nombre_divino: 'Elohim Tzabaoth',
    elemento: 'Agua / intelecto',
    keywords: ['Intelecto', 'Comunicación', 'Magia de la palabra', 'Análisis', 'Lenguaje'],
    descripcion: 'Hod es el intelecto activo, la comunicación precisa y el poder de la palabra. Rige el lenguaje, la lógica y la magia ceremonial. Quien resuena con Hod posee una mente ágil, ama el aprendizaje sistemático y encuentra en el pensamiento estructurado una forma de acercarse a lo divino.',
    practica: 'Estudio sistemático de textos sagrados o filosóficos. Escritura estructurada: diario, ensayos, análisis. Práctica de la oratoria o la enseñanza. Magia verbal: mantras, afirmaciones precisas.',
    mensaje_espiritual: 'Tu mente es un instrumento sagrado. Las palabras que eliges esculpen realidades. Usa tu claridad intelectual al servicio del espíritu y verás cómo el lenguaje se convierte en magia.',
    desequilibrio: 'Racionalismo que ahoga la intuición. Cinismo o escepticismo como escudo emocional. Exceso de análisis que paraliza la acción. Manipulación a través del lenguaje.',
    caminos_activos: ['El Mago', 'Los Amantes', 'El Ermitaño'],
    questions: [
      {
        text: '¿Disfrutas del análisis detallado, la clasificación y el entendimiento sistemático de las cosas?',
        opts: ['Profundamente, mi mente disfruta cada detalle', 'Con frecuencia, el orden intelectual me da paz', 'A veces, cuando es necesario', 'Prefiero la intuición al análisis']
      },
      {
        text: '¿Las palabras —escritas o habladas— tienen para ti un poder especial o sagrado?',
        opts: ['Sí, cuido mucho lo que digo y escribo', 'Las valoro mucho y las uso con intención', 'A veces, en contextos importantes', 'No especialmente']
      },
      {
        text: '¿Aprendes con facilidad materias complejas y disfrutas del estudio profundo?',
        opts: ['Sí, el aprendizaje es una pasión constante', 'Con bastante facilidad y disfrute', 'Cuando el tema me interesa mucho', 'Me cuesta sostener el estudio prolongado']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 8 · YESOD
  // ─────────────────────────────────────────────────────────────
  {
    idx: 8,
    nombre: 'Yesod',
    subtitulo: 'El Fundamento',
    color: '#8e44ad',
    rgb: '142,68,173',
    simbolo: '☽',
    pilar: 'Equilibrio',
    planeta: 'Luna',
    arcano: 'La Luna (XVIII)',
    angel: 'Gabriel',
    nombre_divino: 'Shaddai El Chai (Dios Viviente Todopoderoso)',
    elemento: 'Éter / inconsciente',
    keywords: ['Inconsciente', 'Sueños', 'Psique', 'Canal entre mundos', 'Memoria'],
    descripcion: 'Yesod es el fundamento etérico, el canal entre el mundo espiritual y el material. Rige el inconsciente, los sueños, la memoria y el mundo astral. Quien resuena con Yesod tiene una vida onírica intensa, sensibilidad psíquica natural y una profunda conexión con las corrientes invisibles que mueven la realidad.',
    practica: 'Registro de sueños al despertar. Meditaciones guiadas y visualizaciones. Trabajo con arquetipos y símbolos. Terapias de profundidad: psicoanálisis junguiano, constelaciones familiares.',
    mensaje_espiritual: 'Eres un puente entre lo visible y lo invisible. Tus sueños son cartas del alma, no ilusiones. Confía en lo que percibes más allá de lo racional: estás recibiendo.',
    desequilibrio: 'Confusión entre lo imaginado y lo real. Tendencia a la ilusión, la fantasía escapista o la manipulación inconsciente. Fluctuaciones emocionales ligadas a ciclos externos.',
    caminos_activos: ['La Luna', 'El Colgado', 'La Sacerdotisa'],
    questions: [
      {
        text: '¿Tienes una vida onírica activa y encuentras mensajes o significados en tus sueños?',
        opts: ['Muy intensa, mis sueños son revelaciones', 'Con frecuencia los recuerdo y analizo', 'Ocasionalmente presto atención a mis sueños', 'Rara vez los recuerdo o les doy importancia']
      },
      {
        text: '¿Percibes con facilidad las corrientes emocionales y no-verbales en personas o lugares?',
        opts: ['Sí, soy muy sensible a las energías sutiles', 'Con bastante claridad', 'A veces, en situaciones intensas', 'No particularmente, me guío más por lo explícito']
      },
      {
        text: '¿Trabajas con el inconsciente a través de terapia, símbolos, meditación u otras prácticas?',
        opts: ['Sí, es una parte central de mi camino', 'Regularmente en alguna forma', 'Lo he explorado aunque no de forma constante', 'No es algo que haya trabajado']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 9 · MALKUTH
  // ─────────────────────────────────────────────────────────────
  {
    idx: 9,
    nombre: 'Malkuth',
    subtitulo: 'El Reino',
    color: '#795548',
    rgb: '121,85,72',
    simbolo: '◆',
    pilar: 'Equilibrio',
    planeta: 'Tierra',
    arcano: 'El Mundo (XXI)',
    angel: 'Sandalfón',
    nombre_divino: 'Adonai ha-Aretz (Señor de la Tierra)',
    elemento: 'Tierra',
    keywords: ['Manifestación', 'Materia', 'Presencia', 'El aquí y ahora', 'Encarnación'],
    descripcion: 'Malkuth es el reino de la manifestación, el mundo físico donde lo divino toma forma. Es la tierra, el cuerpo, el presente. Quien resuena con Malkuth tiene una capacidad extraordinaria de manifestar, de encarnar lo espiritual en lo cotidiano y de encontrar lo sagrado en los actos más simples de la vida material.',
    practica: 'Trabajo corporal: yoga, masaje, contacto con la tierra. Cocina consciente, jardinería, artesanía. Prácticas de presencia plena (mindfulness). Rituales cotidianos que sacralicen lo mundano.',
    mensaje_espiritual: 'Lo divino no está en lo lejano: está en tus manos que sostienen el café por la mañana, en tus pies que tocan la tierra. Encarnar es el acto sagrado más difícil y más necesario.',
    desequilibrio: 'Materialismo que ahoga la espiritualidad. Dificultad para elevar la mirada más allá de lo inmediato. Apego excesivo a lo físico o, al contrario, desprecio del cuerpo.',
    caminos_activos: ['El Mundo', 'El Juicio', 'La Luna'],
    questions: [
      {
        text: '¿Encuentras lo sagrado en las actividades cotidianas: cocinar, caminar, estar en silencio?',
        opts: ['Sí, lo ordinario es mi templo', 'Con frecuencia, valoro los rituales simples', 'A veces, en momentos de calma', 'Busco lo sagrado más en lo extraordinario']
      },
      {
        text: '¿Tienes facilidad para manifestar tus intenciones en resultados concretos y materiales?',
        opts: ['Sí, soy muy efectivo/a para concretar', 'Bastante, aunque toma tiempo', 'A veces, con esfuerzo', 'Me cuesta pasar de las ideas a la acción']
      },
      {
        text: '¿El cuerpo y la salud física son una prioridad sagrada en tu vida?',
        opts: ['Absolutamente, el cuerpo es templo del alma', 'Sí, cuido mi salud con consciencia', 'Lo intento aunque no siempre logro sostenerlo', 'No es algo que priorice especialmente']
      }
    ]
  }
];

// Exportar para uso en el HTML
if (typeof window !== 'undefined') {
  window.KB_DATA = KB_DATA;
}

// ══════════════════════════════════════════════════════════════
// MENSAJES KABALAH NUMEROLOGÍA — Sergiomancias Gnostic
// Tabla de correspondencia entre número reducido (1-9, 11, 22)
// y Sefirá del Árbol de la Vida.
// Añadir este bloque al archivo mensajes_astrologicos.js
// ══════════════════════════════════════════════════════════════

var KB_NUM_MAP = {
  // Número → índice de Sefirá en KB_SEFIROTH / KB_DATA
  // La reducción numerológica estándar da 1-9 (+ maestros 11, 22)
  1:  { sefiraIdx: 0, nota: 'El Uno resuena con Kether: la unidad primordial, el origen de todo.' },
  2:  { sefiraIdx: 2, nota: 'El Dos resuena con Binah: la dualidad, la forma que recibe y gestiona.' },
  3:  { sefiraIdx: 1, nota: 'El Tres resuena con Chokmah: la sabiduría que irradia en todas direcciones.' },
  4:  { sefiraIdx: 9, nota: 'El Cuatro resuena con Malkuth: la manifestación concreta, los cuatro elementos.' },
  5:  { sefiraIdx: 4, nota: 'El Cinco resuena con Geburah: la fuerza transformadora, el cambio necesario.' },
  6:  { sefiraIdx: 5, nota: 'El Seis resuena con Tiphareth: el corazón del Árbol, armonía y belleza.' },
  7:  { sefiraIdx: 8, nota: 'El Siete resuena con Yesod: el fundamento misterioso, los sueños y el inconsciente.' },
  8:  { sefiraIdx: 3, nota: 'El Ocho resuena con Chesed: la abundancia y la expansión del amor.' },
  9:  { sefiraIdx: 6, nota: 'El Nueve resuena con Netzach: la victoria, la emoción plena y la naturaleza.' },
  11: { sefiraIdx: 7, nota: 'El Maestro 11 resuena con Hod: el esplendor de la mente iluminada, puente entre mundos.' },
  22: { sefiraIdx: 3, nota: 'El Maestro 22 resuena con Chesed: el constructor maestro que expande amor en forma.' }
};

// Mensajes de comparación entre Sefirá numerológica y Sefirá del cuestionario
var KB_NUM_MENSAJES = {
  coincidencia: [
    'Tu número de destino y tu energía vivida convergen en el mismo punto del Árbol. Esto es una señal de alineación profunda: lo que eres en esencia ya es lo que manifiestas.',
    'Cuando el número que porta tu nombre y fecha coincide con tu Sefirá dominante, el Árbol te habla de unidad. Estás en tu camino.',
    'La convergencia entre tu numerología y tu cuestionario es notable: el Árbol confirma que tu energía más activa es también tu propósito más profundo.'
  ],
  complemento: [
    'Tu número de destino señala una energía que complementa tu Sefirá dominante. No son opuestos: son maestro y alumno dentro de ti.',
    'La diferencia entre tu Sefirá numerológica y la del cuestionario indica que tienes dos grandes fuerzas trabajando en ti, cada una enriqueciendo a la otra.',
    'Tu número porta una enseñanza que tu energía dominante aún está integrando. Este es un punto de crecimiento consciente en tu camino kabbalístico.'
  ],
  tension: [
    'Existe una tensión creativa entre tu número de destino y tu energía más activa. En Kábalah, la tensión entre pilares es la fuente de toda creación.',
    'Tu número y tu Sefirá dominante pertenecen a pilares distintos del Árbol. Este contraste es un llamado a integrar ambas fuerzas sin anular ninguna.',
    'La distancia entre tu numerología y tu cuestionario kabbalístico no es un problema: es la materia prima de tu evolución espiritual.'
  ]
};

// Exportar
if (typeof window !== 'undefined') {
  window.KB_NUM_MAP = KB_NUM_MAP;
  window.KB_NUM_MENSAJES = KB_NUM_MENSAJES;
}

// KB_DATA — Sefiroth del Árbol de la Vida
// Generado desde Sergiomancias Gnostic HTML | kabalah module
// Cargado como: window.KB_DATA en mensajes_astrologicos.js

window.KB_DATA = [
    {idx:0,nombre:'Kether',subtitulo:'La Corona',color:'#ffffff',rgb:'255,255,255',simbolo:'✦',pilar:'Equilibrio',planeta:'Neptuno / Primer Motor',arcano:'El Loco (0)',angel:'Metatrón',nombre_divino:'Ehieh (Yo Soy)',elemento:'Éter puro',keywords:['Unidad','Origen divino','Vacío sagrado','El Ser','Trascendencia'],descripcion:'Kether es la primera emanación, el punto de origen de toda existencia. Es la conciencia pura antes de la forma, la unión con lo Infinito (Ein Sof). Quien resuena con Kether siente un llamado profundo a la trascendencia, la contemplación y la unidad con todo lo que existe.',practica:'Meditación en el silencio absoluto. Contemplar el espacio entre pensamientos. Ayuno consciente de estimulación para escuchar la voz interior más sutil.',mensaje_espiritual:'Eres un punto de luz que recuerda su origen. No buscas a Dios: eres Su respiración haciéndose consciente. Cuanto más te vacías, más recibes.',desequilibrio:'Disociación de la realidad material. Dificultad para encarnarse, tendencia a la evasión espiritual o al nihilismo. Sensación de no pertenecer a ningún lugar.',caminos_activos:['El Loco','El Mago','La Sacerdotisa'],questions:[{text:'¿Sientes con frecuencia que hay una conciencia mayor de la que formas parte?',opts:['Constantemente, es mi certeza más profunda','A menudo, en momentos de quietud','Rara vez lo percibo con claridad','Casi nunca, me cuesta sentir eso']},{text:'¿Puedes estar en silencio total —sin teléfono, música ni distracciones— sintiéndote completo?',opts:['Sí, el silencio me nutre profundamente','Lo busco y disfruto','Me resulta incómodo al principio','No, el silencio me genera ansiedad']},{text:'¿Experimentas momentos de unidad o disolución del ego durante meditación u oración?',opts:['Con frecuencia y de forma intensa','Ocasionalmente, con práctica','Rara vez, son breves destellos','No los he experimentado']}]},
    {idx:1,nombre:'Chokmah',subtitulo:'La Sabiduría',color:'#a8d8ea',rgb:'168,216,234',simbolo:'◈',pilar:'Misericordia',planeta:'Urano / Las Esferas Fijas',arcano:'El Emperador (IV)',angel:'Raziel',nombre_divino:'Yah (El Dios)',elemento:'Fuego primordial',keywords:['Sabiduría primordial','Visión','Chispa divina','Voluntad','Inspiración'],descripcion:'Chokmah es la sabiduría activa, el primer movimiento de la voluntad divina. Es la fuerza pura, el impulso creador. Quienes resuenan con Chokmah poseen una visión penetrante de la realidad, actúan desde la inspiración súbita y sienten el tiempo como un flujo vivo que moldean con su presencia.',practica:'Estudio de los textos sagrados con apertura intuitiva. Practicar la acción desde la inspiración espontánea. Conectar con maestros espirituales o textos de sabiduría perenne.',mensaje_espiritual:'La verdad no se razona: se recibe. Confía en esos destellos que llegan antes de pensar. Eres un canal de la sabiduría que precede al tiempo.',desequilibrio:'Impulsividad sin estructura. Exceso de visiones sin acción concreta. Dificultad para escuchar a otros cuando ya sabes la respuesta.',caminos_activos:['El Mago','La Rueda de la Fortuna','El Emperador'],questions:[{text:'¿Recibes con frecuencia destellos de comprensión repentina, como si la verdad llegara de golpe?',opts:['Sí, es mi modo natural de comprender','Con cierta frecuencia','Ocasionalmente','Rara vez, necesito razonar paso a paso']},{text:'¿Te sientes llamado a transmitir sabiduría o enseñanzas a otros?',opts:['Es una vocación que siento claramente','Sí, cuando tengo algo valioso que compartir','A veces, aunque me genera inseguridad','No, prefiero guardar lo que sé']},{text:'¿Percibes patrones y verdades universales en situaciones cotidianas?',opts:['Constantemente, todo me habla de lo sagrado','Con frecuencia, veo conexiones profundas','A veces lo noto','Raramente, me enfoco en los hechos concretos']}]},
    {idx:2,nombre:'Binah',subtitulo:'La Comprensión',color:'#9b59b6',rgb:'155,89,182',simbolo:'◉',pilar:'Rigor',planeta:'Saturno',arcano:'La Emperatriz (III)',angel:'Tzaphkiel',nombre_divino:'YHVH Elohim',elemento:'Agua primordial',keywords:['Comprensión profunda','Forma','Gestación','Madre suprema','Estructura'],descripcion:'Binah es la matriz receptiva que da forma a la sabiduría de Chokmah. Es la Gran Madre, el útero cósmico donde las ideas toman estructura. Quienes resuenan con Binah poseen una capacidad extraordinaria de comprensión profunda, piensan en estructuras y ven cómo las cosas se sostienen o colapsan desde su raíz.',practica:'Journaling profundo y estructurado. Análisis meditativo de experiencias pasadas. Trabajo con los arquetipos de lo femenino sagrado y la escucha activa del cuerpo.',mensaje_espiritual:'Comprender es más sagrado que saber. Tienes el don de la profundidad: donde otros ven superficie, tú ves raíces. Dale tiempo a la gestación de lo que nace en ti.',desequilibrio:'Rigidez mental. Tendencia a la melancolía o el duelo crónico. Dificultad para soltar estructuras que ya no sirven. Control excesivo como forma de evitar el caos.',caminos_activos:['La Suma Sacerdotisa','La Emperatriz','La Justicia'],questions:[{text:'¿Tiendes a comprender las cosas en profundidad antes de actuar, buscando sus causas más ocultas?',opts:['Siempre, voy a la raíz de todo','La mayoría de las veces','Cuando tengo tiempo para reflexionar','Prefiero actuar primero']},{text:'¿Te sientes cómodo/a sosteniendo la ambigüedad y la espera sin necesitar respuestas inmediatas?',opts:['Sí, la paciencia es una de mis fortalezas','Generalmente sí','Me cuesta, aunque lo trabajo','No, la incertidumbre me genera ansiedad']},{text:'¿Sientes una conexión especial con los ciclos, la gestación y el tiempo como proceso?',opts:['Profundamente, pienso en ciclos vitales','Con bastante frecuencia','En algunos momentos','Raramente']}]},
    {idx:3,nombre:'Chesed',subtitulo:'La Misericordia',color:'#3498db',rgb:'52,152,219',simbolo:'✿',pilar:'Misericordia',planeta:'Júpiter',arcano:'La Rueda de la Fortuna (X)',angel:'Tzadkiel',nombre_divino:'El (Dios fuerte)',elemento:'Agua / expansión',keywords:['Amor incondicional','Abundancia','Generosidad','Gracia','Compasión'],descripcion:'Chesed es la misericordia y el amor que fluye sin condiciones. Es la abundancia divina expresándose en el mundo como generosidad, compasión y expansión. Quien resuena con Chesed tiene un corazón enorme, da sin esperar retorno y siente que el amor es la fuerza que sostiene toda la creación.',practica:'Actos de servicio desinteresado. Práctica de la generosidad consciente. Trabajo con afirmaciones de abundancia y gratitud. Meditaciones de amor compasivo (metta).',mensaje_espiritual:'Tu corazón es demasiado grande para las medidas del mundo. Lo que das no se pierde: se multiplica en planos que aún no ves. La abundancia que sientes es real.',desequilibrio:'Exceso de generosidad que lleva al agotamiento. Dificultad para poner límites. Idealismo que ignora la realidad. Dependencia emocional disfrazada de amor.',caminos_activos:['La Rueda de la Fortuna','La Fuerza','El Colgado'],questions:[{text:'¿Sueles dar a otros —tiempo, recursos, energía— sin esperar nada a cambio?',opts:['Es mi modo natural de relacionarme','Con frecuencia, lo valoro mucho','A veces, cuando tengo suficiente','Me cuesta, tengo miedo de quedarme sin nada']},{text:'¿Sientes que el universo es esencialmente abundante y que hay suficiente para todos?',opts:['Profundamente, vivo desde esa certeza','La mayoría del tiempo sí','Oscilo entre la abundancia y el miedo','Generalmente siento escasez']},{text:'¿Puedes perdonar con relativa facilidad, incluso errores significativos?',opts:['Sí, el perdón es una práctica natural en mí','Puedo perdonar aunque tome tiempo','Me esfuerzo, es un trabajo difícil','Me resulta muy difícil perdonar']}]},
    {idx:4,nombre:'Geburah',subtitulo:'La Fuerza',color:'#e74c3c',rgb:'231,76,60',simbolo:'▲',pilar:'Rigor',planeta:'Marte',arcano:'La Fuerza (VIII)',angel:'Kamael',nombre_divino:'Elohim Gibor (Dios Todopoderoso)',elemento:'Fuego / acción',keywords:['Fuerza','Justicia','Disciplina','Discernimiento','Voluntad'],descripcion:'Geburah es la fuerza y el rigor sagrado. Es la capacidad de podar lo que no sirve, de decir no con amor, de aplicar justicia sin crueldad. Quien resuena con Geburah posee una voluntad de hierro, un sentido agudo de lo correcto y la capacidad de transformar a través de la verdad directa.',practica:'Prácticas de disciplina: ayuno, ejercicio riguroso, silencio voluntario. Trabajo con límites. Revisión honesta de hábitos y relaciones que drenan energía. Práctica marcial o de movimiento estructurado.',mensaje_espiritual:'Tu fuerza no es crueldad: es amor que se niega a mentir. Cuando dices no, proteges algo sagrado. El filo que llevas en ti está al servicio de la verdad.',desequilibrio:'Crueldad, rigidez o juicio excesivo hacia uno mismo y otros. Tendencia a destruir en lugar de transformar. Ira reprimida que explota de forma descontrolada.',caminos_activos:['La Fuerza','El Carro','La Torre'],questions:[{text:'¿Puedes decir "no" con firmeza cuando algo no está alineado con tus valores?',opts:['Sí, mis límites son claros y los sostengo','La mayoría de las veces puedo','Me cuesta pero lo intento','No, cedo para evitar conflictos']},{text:'¿Tienes una fuerte conciencia de justicia y reaccionas ante la injusticia con determinación?',opts:['Muy intensamente, la injusticia me moviliza','Con claridad, actúo cuando puedo','La noto pero no siempre actúo','No es algo que me mueva especialmente']},{text:'¿Practicas la autodisciplina de forma constante en alguna área de tu vida?',opts:['Sí, es un pilar de mi vida','En varias áreas importantes','En alguna área, con esfuerzo','Me cuesta mantener la disciplina']}]},
    {idx:5,nombre:'Tiphareth',subtitulo:'La Belleza',color:'#f1c40f',rgb:'241,196,15',simbolo:'☀',pilar:'Equilibrio',planeta:'Sol',arcano:'El Sol (XIX)',angel:'Rafael',nombre_divino:'YHVH Eloah ve-Daat',elemento:'Fuego solar / corazón',keywords:['Armonía','Belleza','Amor equilibrado','El Cristo interior','Propósito'],descripcion:'Tiphareth es el corazón del Árbol de la Vida, el punto de armonía y belleza entre todas las fuerzas. Es el principio crístico, la conciencia solar. Quien resuena con Tiphareth busca el equilibrio en todo, tiene capacidad de mediar y reconciliar, y experimenta la vida como una obra de arte sagrada.',practica:'Trabajo con el corazón: yoga, tai chi, movimiento fluido. Meditación centrada en el pecho. Creación artística como práctica espiritual. Buscar la belleza en lo cotidiano.',mensaje_espiritual:'Eres el centro, el mediador, el que recuerda que todo está conectado. Tu vida tiene la estructura de una obra de arte: cada dolor fue pincelada, cada alegría, luz. Brilla desde el corazón.',desequilibrio:'Necesidad excesiva de ser visto o reconocido. Dificultad para integrarse sin perder el centro. Narcisismo espiritual o sensación de ser el elegido.',caminos_activos:['El Sol','El Juicio','Los Amantes'],questions:[{text:'¿Tiendes a buscar el equilibrio y la armonía entre extremos opuestos?',opts:['Sí, es mi impulso natural más fuerte','Con frecuencia busco el punto medio','A veces, cuando noto el desequilibrio','Prefiero tomar partido claro']},{text:'¿La belleza —en el arte, la naturaleza, las personas— te afecta de forma profunda y significativa?',opts:['Profundamente, la belleza me transforma','Con mucha intensidad','Sí, aunque no siempre lo noto','No particularmente']},{text:'¿Sientes que tu vida tiene un propósito que integra tanto lo espiritual como lo mundano?',opts:['Sí, vivo desde esa integración','Lo busco activamente','Lo vislumbro a veces','Siento separación entre ambos mundos']}]},
    {idx:6,nombre:'Netzach',subtitulo:'La Victoria',color:'#27ae60',rgb:'39,174,96',simbolo:'♡',pilar:'Misericordia',planeta:'Venus',arcano:'Los Amantes (VI)',angel:'Haniel',nombre_divino:'YHVH Tzabaoth',elemento:'Fuego / deseo',keywords:['Emoción','Deseo','Naturaleza','Arte y placer','Sensorialidad'],descripcion:'Netzach rige el mundo de las emociones, los deseos y la naturaleza. Es la energía dionisíaca, el amor como fuerza vital, la creatividad que surge del cuerpo. Quien resuena con Netzach vive intensamente, se enamora profundamente y percibe lo sagrado en la naturaleza, el arte y la sensorialidad.',practica:'Conexión con la naturaleza: paseos en bosques, agua, tierra. Expresión artística libre sin juicio. Danza, música, contacto con las emociones sin reprimirlas. Rituales de gratitud con elementos naturales.',mensaje_espiritual:'Tus emociones no son debilidades: son el lenguaje del alma. En ti vive el artista que hace sagrado lo bello. Ama con toda la intensidad que traes, sin disculparte.',desequilibrio:'Esclavitud a las emociones o los deseos. Incapacidad de sostener compromisos. Tendencia a idealizarlo todo y decepcionar. Dependencia afectiva o sensorial.',caminos_activos:['Los Amantes','La Emperatriz','La Luna'],questions:[{text:'¿Vives tus emociones con intensidad y las consideras una fuente de sabiduría?',opts:['Sí, mis emociones son mi brújula principal','Con frecuencia las escucho profundamente','A veces, aunque me abruman','Prefiero la razón sobre las emociones']},{text:'¿Te sientes profundamente conectado/a con la naturaleza y sus ciclos?',opts:['Sí, la naturaleza es mi hogar sagrado','Con mucha intensidad','La disfruto aunque no me defino por eso','No es una conexión central en mi vida']},{text:'¿El arte, la música o la belleza sensorial te produce experiencias que sientes como espirituales?',opts:['Constantemente, son mis portales sagrados','Con frecuencia me elevan','A veces me tocan profundamente','No particularmente']}]},
    {idx:7,nombre:'Hod',subtitulo:'El Esplendor',color:'#e67e22',rgb:'230,126,34',simbolo:'◬',pilar:'Rigor',planeta:'Mercurio',arcano:'El Mago (I)',angel:'Miguel',nombre_divino:'Elohim Tzabaoth',elemento:'Agua / intelecto',keywords:['Intelecto','Comunicación','Magia de la palabra','Análisis','Lenguaje'],descripcion:'Hod es el intelecto activo, la comunicación precisa y el poder de la palabra. Rige el lenguaje, la lógica y la magia ceremonial. Quien resuena con Hod posee una mente ágil, ama el aprendizaje sistemático y encuentra en el pensamiento estructurado una forma de acercarse a lo divino.',practica:'Estudio sistemático de textos sagrados o filosóficos. Escritura estructurada: diario, ensayos, análisis. Práctica de la oratoria o la enseñanza. Magia verbal: mantras, afirmaciones precisas.',mensaje_espiritual:'Tu mente es un instrumento sagrado. Las palabras que eliges esculpen realidades. Usa tu claridad intelectual al servicio del espíritu y verás cómo el lenguaje se convierte en magia.',desequilibrio:'Racionalismo que ahoga la intuición. Cinismo como escudo emocional. Exceso de análisis que paraliza la acción. Manipulación a través del lenguaje.',caminos_activos:['El Mago','Los Amantes','El Ermitaño'],questions:[{text:'¿Disfrutas del análisis detallado, la clasificación y el entendimiento sistemático de las cosas?',opts:['Profundamente, mi mente disfruta cada detalle','Con frecuencia, el orden intelectual me da paz','A veces, cuando es necesario','Prefiero la intuición al análisis']},{text:'¿Las palabras —escritas o habladas— tienen para ti un poder especial o sagrado?',opts:['Sí, cuido mucho lo que digo y escribo','Las valoro mucho y las uso con intención','A veces, en contextos importantes','No especialmente']},{text:'¿Aprendes con facilidad materias complejas y disfrutas del estudio profundo?',opts:['Sí, el aprendizaje es una pasión constante','Con bastante facilidad y disfrute','Cuando el tema me interesa mucho','Me cuesta sostener el estudio prolongado']}]},
    {idx:8,nombre:'Yesod',subtitulo:'El Fundamento',color:'#8e44ad',rgb:'142,68,173',simbolo:'☽',pilar:'Equilibrio',planeta:'Luna',arcano:'La Luna (XVIII)',angel:'Gabriel',nombre_divino:'Shaddai El Chai (Dios Viviente)',elemento:'Éter / inconsciente',keywords:['Inconsciente','Sueños','Psique','Canal entre mundos','Memoria'],descripcion:'Yesod es el fundamento etérico, el canal entre el mundo espiritual y el material. Rige el inconsciente, los sueños, la memoria y el mundo astral. Quien resuena con Yesod tiene una vida onírica intensa, sensibilidad psíquica natural y una profunda conexión con las corrientes invisibles que mueven la realidad.',practica:'Registro de sueños al despertar. Meditaciones guiadas y visualizaciones. Trabajo con arquetipos y símbolos. Terapias de profundidad: psicoanálisis junguiano, constelaciones familiares.',mensaje_espiritual:'Eres un puente entre lo visible y lo invisible. Tus sueños son cartas del alma, no ilusiones. Confía en lo que percibes más allá de lo racional: estás recibiendo.',desequilibrio:'Confusión entre lo imaginado y lo real. Tendencia a la ilusión o la fantasía escapista. Fluctuaciones emocionales ligadas a ciclos externos.',caminos_activos:['La Luna','El Colgado','La Sacerdotisa'],questions:[{text:'¿Tienes una vida onírica activa y encuentras mensajes o significados en tus sueños?',opts:['Muy intensa, mis sueños son revelaciones','Con frecuencia los recuerdo y analizo','Ocasionalmente presto atención a mis sueños','Rara vez los recuerdo o les doy importancia']},{text:'¿Percibes con facilidad las corrientes emocionales y no-verbales en personas o lugares?',opts:['Sí, soy muy sensible a las energías sutiles','Con bastante claridad','A veces, en situaciones intensas','No particularmente, me guío más por lo explícito']},{text:'¿Trabajas con el inconsciente a través de terapia, símbolos, meditación u otras prácticas?',opts:['Sí, es una parte central de mi camino','Regularmente en alguna forma','Lo he explorado aunque no de forma constante','No es algo que haya trabajado']}]},
    {idx:9,nombre:'Malkuth',subtitulo:'El Reino',color:'#795548',rgb:'121,85,72',simbolo:'◆',pilar:'Equilibrio',planeta:'Tierra',arcano:'El Mundo (XXI)',angel:'Sandalfón',nombre_divino:'Adonai ha-Aretz (Señor de la Tierra)',elemento:'Tierra',keywords:['Manifestación','Materia','Presencia','El aquí y ahora','Encarnación'],descripcion:'Malkuth es el reino de la manifestación, el mundo físico donde lo divino toma forma. Es la tierra, el cuerpo, el presente. Quien resuena con Malkuth tiene una capacidad extraordinaria de manifestar, de encarnar lo espiritual en lo cotidiano y de encontrar lo sagrado en los actos más simples de la vida material.',practica:'Trabajo corporal: yoga, masaje, contacto con la tierra. Cocina consciente, jardinería, artesanía. Prácticas de presencia plena (mindfulness). Rituales cotidianos que sacralicen lo mundano.',mensaje_espiritual:'Lo divino no está en lo lejano: está en tus manos que sostienen el café por la mañana, en tus pies que tocan la tierra. Encarnar es el acto sagrado más difícil y más necesario.',desequilibrio:'Materialismo que ahoga la espiritualidad. Dificultad para elevar la mirada más allá de lo inmediato. Apego excesivo a lo físico o desprecio del cuerpo.',caminos_activos:['El Mundo','El Juicio','La Luna'],questions:[{text:'¿Encuentras lo sagrado en las actividades cotidianas: cocinar, caminar, estar en silencio?',opts:['Sí, lo ordinario es mi templo','Con frecuencia, valoro los rituales simples','A veces, en momentos de calma','Busco lo sagrado más en lo extraordinario']},{text:'¿Tienes facilidad para manifestar tus intenciones en resultados concretos y materiales?',opts:['Sí, soy muy efectivo/a para concretar','Bastante, aunque toma tiempo','A veces, con esfuerzo','Me cuesta pasar de las ideas a la acción']},{text:'¿El cuerpo y la salud física son una prioridad sagrada en tu vida?',opts:['Absolutamente, el cuerpo es templo del alma','Sí, cuido mi salud con consciencia','Lo intento aunque no siempre logro sostenerlo','No es algo que priorice especialmente']}]}
];


// ════════════════════════════════════════════════════════════════
//  KABALAH — Numerología Kabbalística · Mensajes
//  Autor: Sergiomancias Gnostic | sergiomanciasgnostic.online
// ════════════════════════════════════════════════════════════════

window.KB_NUM_MAP = {
  1:  {
    sefiraIdx: 0,
    nota_destino:   'El 1 como Número de Destino te coloca bajo la corona de Kether: viniste a iniciar, a abrir caminos donde no los había. Tu alma no llegó a seguir estructuras ajenas sino a construir las propias. El riesgo es el aislamiento; la misión, encender la primera chispa.',
    nota_expresion: 'El 1 en tu Número de Expresión significa que tu nombre vibra con la frecuencia del origen. Cuando hablas, proyectas autoridad y singularidad. Las personas te perciben como alguien que sabe adónde va, aunque por dentro aún estés buscando. Esa percepción es también una responsabilidad.'
  },
  2:  {
    sefiraIdx: 2,
    nota_destino:   'El 2 como Número de Destino te vincula con Binah, la Gran Madre del Árbol. Viniste a aprender el arte de recibir, de escuchar antes de hablar, de tejer puentes entre opuestos. Tu camino no es el del héroe solitario sino el del diplomático del alma: quien une lo que estaba roto.',
    nota_expresion: 'El 2 en tu Número de Expresión hace que tu nombre irradie sensibilidad y capacidad de contención. Quienes te rodean sienten que pueden confiar en ti sus secretos. El peligro es que absorbes tanto lo ajeno que olvidas lo propio. Tu nombre llama a sanar; cuida no perder tu centro en ese proceso.'
  },
  3:  {
    sefiraIdx: 1,
    nota_destino:   'El 3 como Número de Destino te conecta con Chokmah, la sabiduría que irradia sin filtro. Viniste a crear, a expresar, a traer belleza donde había vacío. Tu camino exige que aprendas a canalizar esa energía desbordante: el 3 sin disciplina se dispersa; el 3 con foco transforma el mundo.',
    nota_expresion: 'El 3 en tu Número de Expresión imprime en tu nombre una energía creativa y magnética. Las personas te buscan para sentirse inspiradas. Tu palabra tiene poder de elevar o de herir con igual intensidad. Eres un comunicador nato; lo que eliges decir —y callar— define quién eres ante los demás.'
  },
  4:  {
    sefiraIdx: 9,
    nota_destino:   'El 4 como Número de Destino te ancla en Malkuth, el reino de la manifestación concreta. Viniste a construir algo que dure: una familia, una obra, un legado que otros puedan tocar con las manos. Tu alma aprendió en otras vidas a soñar; en esta, el cielo te pide que también ejecutes.',
    nota_expresion: 'El 4 en tu Número de Expresión hace que tu nombre transmita solidez y confianza. Las personas te perciben como alguien en quien apoyarse. Tu desafío es no confundir estabilidad con rigidez: el nombre que vibra en 4 puede edificar grandes estructuras o levantarse muros que bloquean el crecimiento.'
  },
  5:  {
    sefiraIdx: 4,
    nota_destino:   'El 5 como Número de Destino te coloca bajo la fuerza transformadora de Geburah. Viniste a romper lo que ya no sirve, en tu vida y en la de quienes te rodean. El cambio no es tu enemigo: es tu lenguaje nativo. Tu alma vino equipada para la libertad; el aprendizaje es usar esa libertad con propósito.',
    nota_expresion: 'El 5 en tu Número de Expresión proyecta un nombre que atrae y desestabiliza a partes iguales. Las personas sienten en ti una energía inquieta, imprevisible, viva. Eres quien recuerda a los demás que la vida puede ser de otra manera. Tu palabra moviliza; asegúrate de saber hacia dónde.'
  },
  6:  {
    sefiraIdx: 5,
    nota_destino:   'El 6 como Número de Destino te sitúa en Tiphareth, el corazón del Árbol de la Vida. Viniste a aprender el amor que no sofoca, la belleza que no necesita aprobación, el servicio que no se convierte en sacrificio. Tu camino es encontrar ese equilibrio entre dar y recibir sin perder tu sol interior.',
    nota_expresion: 'El 6 en tu Número de Expresión irradia calidez y sentido de la responsabilidad. Tu nombre evoca hogar, cuidado, armonía. Las personas te buscan cuando necesitan apoyo emocional. El reto es aprender a decir no sin culpa: quien todo lo sostiene termina agotado si no tiene también quién lo sostenga a él.'
  },
  7:  {
    sefiraIdx: 8,
    nota_destino:   'El 7 como Número de Destino te lleva a Yesod, el fundamento invisible que sostiene todo lo que existe. Viniste a conocer lo que está detrás del velo: los patrones ocultos, las verdades que la mayoría no ve. Tu camino es profundo y a veces solitario, pero cada insight tuyo alcanza a muchos más de los que imaginas.',
    nota_expresion: 'El 7 en tu Número de Expresión hace que tu nombre resuene con misterio e inteligencia. Las personas perciben en ti capas que no logran descifrar del todo, y eso las fascina o las incomoda. Eres un observador nato. Tu desafío: bajar lo que ves en lo alto al lenguaje que otros puedan recibir.'
  },
  8:  {
    sefiraIdx: 3,
    nota_destino:   'El 8 como Número de Destino te conecta con Chesed, la expansión generosa y el poder bien usado. Viniste a materializar grandes proyectos, a manejar recursos y a aprender que el verdadero poder no domina sino que eleva. Tu alma tiene una relación kármica con la abundancia: vine a sanarla, no a repetirla.',
    nota_expresion: 'El 8 en tu Número de Expresión imprime en tu nombre una presencia que los demás sienten antes de que abras la boca. Proyectas autoridad, capacidad ejecutiva y determinación. El peligro es que esa misma fuerza puede volverse inflexible. Tu nombre llama al liderazgo; la pregunta es a qué tipo de liderazgo eliges responder.'
  },
  9:  {
    sefiraIdx: 6,
    nota_destino:   'El 9 como Número de Destino te une a Netzach, la victoria de la emoción y la belleza de la naturaleza en su forma más plena. Viniste a completar ciclos, a sanar heridas antiguas y a dejar algo mejor de lo que encontraste. El 9 es el número del que da sin esperar retorno: su recompensa viene de otra fuente.',
    nota_expresion: 'El 9 en tu Número de Expresión hace que tu nombre lleve consigo una carga de humanidad profunda. Las personas sienten en ti compasión y amplitud de miras. Tu palabra tiene la capacidad de consolar, de abrir perspectivas, de nombrar lo que otros no saben cómo decir. Tu desafío: no cargar las heridas de todos como si fueran tuyas.'
  },
  11: {
    sefiraIdx: 7,
    nota_destino:   'El Maestro 11 como Número de Destino te coloca en el filo entre Hod y el rayo que baja de Kether. Viniste con una sensibilidad espiritual que puede ser tu mayor don o tu mayor vulnerabilidad. No eres como los demás y en algún nivel siempre lo supiste. Tu misión es canalizar esa visión elevada sin quemarte en el intento.',
    nota_expresion: 'El Maestro 11 en tu Número de Expresión hace que tu nombre opere en dos frecuencias simultáneas. Hay momentos en que inspiras a multitudes sin proponértelo; otros en que la presión de esa vibración te agota. Eres un transmisor. Lo que dices tiene eco más profundo del que calculas: elige tus palabras como si fueran semillas.'
  },
  22: {
    sefiraIdx: 3,
    nota_destino:   'El Maestro 22 como Número de Destino es el arquitecto del Árbol. Chesed te da la visión expansiva; el 22 te da la capacidad de construirla en el plano físico. Viniste con planos para algo grande, algo que trasciende tu vida personal. El reto es no paralizarte ante la escala de lo que ves posible.',
    nota_expresion: 'El Maestro 22 en tu Número de Expresión hace que tu nombre cargue una frecuencia de construcción y legado. Las personas sienten en ti alguien capaz de hacer real lo que para otros es solo idea. Eres el puente entre el sueño y la forma. Tu desafío es confiar en esa capacidad sin esperar que el mundo primero te valide.'
  }
};

window.KB_NUM_MENSAJES = {

  coincidencia: [
    'Tu Número de Destino y la Sefirá que el cuestionario reveló apuntan al mismo lugar del Árbol. En la tradición kabbalística esto se llama tikún coherente: el alma que encarna sabe exactamente dónde trabajar y no se dispersa entre contradicciones. Tus distintas dimensiones hablan el mismo idioma. Aprovecha esa claridad: no siempre se tiene.',
    'Hay personas que pasan décadas buscando coherencia entre lo que sienten que son y lo que el cosmos trazó en su nacimiento. Tu numerología y tu cuestionario coinciden en la misma Sefirá: eso significa que ya tienes la brújula alineada. El trabajo ahora no es encontrar el norte, sino caminar.'
  ],

  complemento: [
    'Tu Número de Destino y tu Sefirá dominante no son iguales, pero se entienden. En el Árbol, la complementariedad entre Sefirot es la base de toda creación: ninguna trabaja sola. Lo que el número inscribió en tu nacimiento y lo que el cuestionario encontró en tu interior se potencian mutuamente. Tienes dos maestros internos; el arte es aprender cuándo escuchar a cada uno.',
    'La Kábalah enseña que el alma encarna con múltiples resonancias, no con una sola. Tu número de destino y tu Sefirá vivida se complementan como el inhalar y el exhalar: distintos, necesarios, parte del mismo aliento. No intentes unificarlos a la fuerza; deja que conversen.'
  ],

  tension: [
    'Tu número de destino y tu Sefirá más activa pertenecen a corrientes distintas del Árbol. Eso genera tensión, sí, pero la Kábalah no teme la tensión: la abraza. El rayo que ilumina el Árbol no baja en línea recta, sino zigzagueando entre pilares opuestos. Esa oscilación es tu energía creativa. Úsala.',
    'Entre tu número y tu Sefirá dominante existe una distancia real en el Árbol. No es un error del cosmos: es una invitación a crecer en dos direcciones a la vez. Las almas que viven en esa tensión rara vez tienen vidas cómodas, pero casi siempre tienen vidas profundas. Elige qué hacer con esa profundidad.'
  ],

  nota_pie: 'Los números no dictan: iluminan. Lo que hagas con esa luz es siempre tuyo.'
};

