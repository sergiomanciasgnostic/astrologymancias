// ══════════════════════════════════════════════════════════════════════
// AURAS — Sistema completo de interpretaciones · Sergiomancias Gnostic
// Pegar este bloque dentro de mensajes_astrologicos.js
//
// Estructura de cada color:
//   principal  → Quién sos (energía dominante, naturaleza, cómo sos en el mundo)
//   secundario → Qué te sostiene (cómo opera ESE color cuando aparece detrás de otro)
//   camino     → Hacia dónde apunta (tensión creativa, desafío, dirección vital)
//
// La función generarSintesisAura(prin, sec) ensambla los tres bloques
// de manera personalizada para cualquiera de los 3.306 pares posibles.
// ══════════════════════════════════════════════════════════════════════

window.AURA_INTERP = {

  // ── ROJOS ───────────────────────────────────────────────────────────
  "Rojo": {
    esencia: "Fuerza vital primaria · Marte · Aries · Fuego",
    principal: "Tu aura irradia la frecuencia del guerrero primordial. Eres alguien que actúa antes de dudar, que siente antes de pensar y que deja huella en cada lugar que pisa. Hay en ti una energía física y emocional desbordante que otros perciben desde el primer momento — no esperás permiso: cuando algo te importa, te lanzás con todo. Tu mayor fortaleza es el coraje instintivo, esa valentía que no calcula el riesgo porque siente que no hay otra opción más que avanzar. El Rojo también habla de un vínculo profundo con el cuerpo: su salud, su movimiento, su placer. Tu misión es iniciar — nuevos caminos, nuevas ideas, nuevas etapas.",
    secundario: "Cuando el Rojo aparece detrás de tu color dominante, actúa como motor invisible. No se ve en la superficie pero está en cada decisión — es la chispa que te impide quedarte quieto cuando algo necesita ser hecho. Le da combustible a lo que sea que tu aura principal esté construyendo.",
    camino: "La tensión que llevás es entre el impulso y la consciencia. El Rojo quiere moverse ahora; el color que lo acompaña pide algo más. Aprender a usar ese fuego con dirección — no apagarlo sino orientarlo — es el trabajo central de tu campo áurico en este momento."
  },
  "Rojo escarlata": {
    esencia: "Pasión transformadora · Marte · Escorpio · Fuego",
    principal: "Tu aura combina la intensidad marciana con la profundidad escorpiana. No te detenés en la superficie de nada — detectás lo oculto sin que nadie te lo señale y vivís las experiencias con una entrega que pocos comprenden. En las relaciones sos magnético y exigente: no aceptás medias tintas. Tu mayor fortaleza es la capacidad de regenerarte — has pasado por fuegos que habrían consumido a otros y saliste más entero.",
    secundario: "Detrás de tu color principal, el Rojo Escarlata opera como radar de verdad. Te impide aceptar explicaciones superficiales, te empuja a ir más hondo aunque sea incómodo, y añade una intensidad emocional que da peso real a todo lo que hacés.",
    camino: "Tu desafío es aprender que no toda batalla merece esa intensidad. La combinación de tu aura pide que elijas con más cuidado dónde poner ese fuego transformador — porque cuando lo dirigís bien, lo que tocás cambia para siempre."
  },
  "Rojo rubí": {
    esencia: "Nobleza solar · Sol · Leo · Fuego",
    principal: "Tu aura porta una dignidad natural — hay en ti algo que inspira respeto sin que lo busqués activamente. Liderás desde el afecto, no desde el ego: tu poder viene de la calidez que irradiás, de la lealtad que das y de la confianza que transmitís. Las personas orbitan a tu alrededor buscando luz, y vos la das sin escatimar. Tu mayor fortaleza es la magnanimidad: cuando amás, protegés; cuando liderás, elevás.",
    secundario: "Como color secundario, el Rojo Rubí añade nobleza al fondo de tu aura. Opera como corazón generoso detrás de lo que mostrás — hace que tus acciones tengan una calidez genuina que otros sienten aunque no puedan nombrarla.",
    camino: "El trabajo de tu combinación áurica es aprender que el corazón no es ilimitado. La grandeza que irradiás necesita también un espacio de recarga — y permitirte recibir con la misma generosidad con que das es el umbral que tu aura está cruzando."
  },
  "Rojo oscuro": {
    esencia: "Regeneración plutónica · Plutón · Escorpio · Fuego",
    principal: "Tu aura guarda un poder que no siempre mostrás — hay profundidades en vos que pocos llegan a conocer, y eso no es un defecto sino una forma de protección. Has conocido la pérdida, la sombra, la destrucción de algo que amabas, y en lugar de detenerte, lo convertiste en combustible. Tu mayor fortaleza es la capacidad de renacer cuando todo parece perdido.",
    secundario: "Cuando aparece detrás de otro color, el Rojo Oscuro actúa como raíz de poder oculto. No se exhibe pero se siente — añade una densidad y una profundidad al campo áurico que hace que tu presencia tenga peso incluso cuando no hablás.",
    camino: "Tu combinación pide que aprendas a confiar en los demás lo suficiente como para mostrar esas capas más profundas. El poder que guardás adentro, cuando se comparte con quienes lo merecen, se multiplica en lugar de gastarse."
  },
  "Rojo rosado": {
    esencia: "Amor activo · Venus · Aries · Fuego",
    principal: "Tu aura irradia una ternura que no teme exponerse — amás con espontaneidad, sin calcular si será correspondido. Hay en vos una frescura emocional que desarma a las personas más cerradas. Venus te da la necesidad de conexión; Aries te da el coraje de dar el primer paso. No esperás a ser amado para amar.",
    secundario: "Como secundario, el Rojo Rosado añade calidez espontánea al fondo de tu aura. Hace que lo que tu color principal construye tenga un corazón visible — una ternura que la gente siente y que convierte tus vínculos en algo genuinamente reconfortante.",
    camino: "Tu aura está aprendiendo a recibir con la misma generosidad con que da. La combinación que cargás tiene mucho para ofrecer — el trabajo es crear el espacio para que otros también puedan dártelo a vos."
  },
  "Rojo carmesí": {
    esencia: "Ambición disciplinada · Marte · Capricornio · Fuego",
    principal: "Tu aura combina el fuego de Marte con la estructura de Capricornio. No te desperdiciás en arrebatos — dirigís esa energía con precisión hacia tus objetivos. Trabajás cuando otros descansan, planificás cuando otros improvisan, y no celebrás hasta que la meta está alcanzada. Tu mayor fortaleza es la constancia apasionada: no solo empezás, terminás.",
    secundario: "Detrás de tu color principal, el Rojo Carmesí opera como columna vertebral. Es lo que te mantiene en movimiento cuando la motivación flaquea — la disciplina silenciosa que sostiene todo lo que tu aura dominante está construyendo.",
    camino: "Tu combinación pide que aprendas a sentir el camino, no solo el destino. La pasión que tenés merece también ser vivida en el proceso — no solo celebrada cuando llegás."
  },

  // ── NARANJAS ────────────────────────────────────────────────────────
  "Naranja": {
    esencia: "Creatividad solar · Sol · Leo · Fuego",
    principal: "Tu aura vibra en la frecuencia de la alegría creativa. Entrás a una habitación y cambiás el clima emocional del lugar sin proponértelo. Las personas se acercan porque al estar cerca de vos se sienten vivas. No escondés tu entusiasmo — lo mostrás, lo contagiás, lo ponés al servicio de todo lo que creás.",
    secundario: "Como secundario, el Naranja añade una chispa de vitalidad al fondo de tu aura. Evita que lo que tu color principal construye se vuelva pesado o serio en exceso — introduce el juego, la alegría espontánea, el recordatorio de que crear también puede ser delicioso.",
    camino: "Tu combinación está aprendiendo a habitar también los momentos de calma sin sentirlos como pérdida. La profundidad no es el enemigo de la alegría — y tu aura está integrando esas dos corrientes."
  },
  "Naranja dorado": {
    esencia: "Optimismo filosófico · Sol · Sagitario · Fuego",
    principal: "Tu aura combina la calidez solar con el horizonte sagitariano. Tenés un optimismo que no es ingenuidad sino fe ganada a través de la experiencia — has visto que las cosas terminan encontrando su lugar y esa certeza te libera para explorar sin miedo al fracaso. Tu mayor fortaleza es encontrar significado en casi cualquier situación.",
    secundario: "Detrás de tu color principal, el Naranja Dorado opera como brújula filosófica. Cuando el camino se complica, es lo que te recuerda el para qué — añade perspectiva y evita que te pierdas en los detalles sin ver el panorama.",
    camino: "Tu combinación está aprendiendo a quedarse. No todas las respuestas están en el próximo horizonte — algunas de las más importantes están en lo que ya tenés, esperando que te detengas el tiempo suficiente para verlas."
  },
  "Naranja melocotón": {
    esencia: "Dulzura creativa · Venus · Leo · Fuego",
    principal: "Tu aura irradia una suavidad luminosa — hay en vos una delicadeza que no es debilidad sino refinamiento. Convertís los gestos cotidianos en actos de amor y dejás tu firma estética en todo lo que tocás. Venus te da la necesidad de armonía; Leo te da el escenario para expresarla.",
    secundario: "Como secundario, el Naranja Melocotón añade una dulzura sensorial al campo de tu aura. Hace que lo que tu color principal hace tenga una textura cálida y agradable — como si todo lo que tocás quedara con un acabado más suave y más humano.",
    camino: "Tu combinación está aprendiendo a no confundir el reconocimiento externo con la validación de tu valor. Lo que creás tiene mérito propio — independientemente de cuántos lo vean."
  },
  "Naranja quemado": {
    esencia: "Aventura apasionada · Marte · Sagitario · Fuego",
    principal: "Tu aura combina el impulso marciano con la visión sagitariana. No podés quedarte quieto cuando hay un territorio por descubrir. Cuando creés en algo, actuás, y lo hacés con una intensidad que arrastra a otros. No esperás las condiciones perfectas — partís con lo que hay.",
    secundario: "Detrás de tu color principal, el Naranja Quemado opera como empuje de largo aliento. Es lo que convierte la visión en movimiento cuando todo lo demás duda — añade la convicción práctica que hace que las cosas realmente pasen.",
    camino: "Tu combinación está aprendiendo que la paciencia también es una forma de poder. La velocidad que tenés es un don — el trabajo es aprender cuándo acelerar y cuándo dejar que el proceso madure."
  },

  // ── AMARILLOS ────────────────────────────────────────────────────────
  "Amarillo": {
    esencia: "Intelecto ágil · Mercurio · Géminis · Aire",
    principal: "Tu aura vibra en la frecuencia de la mente que nunca duerme del todo. Procesás información a una velocidad que sorprende incluso a vos mismo — podés seguir tres conversaciones al mismo tiempo, cambiar de tema sin perder el hilo y encontrar el ángulo gracioso en casi cualquier situación. Tu mayor fortaleza es la comunicación: podés explicar lo complejo de manera simple y conectar con personas muy distintas.",
    secundario: "Como secundario, el Amarillo añade agilidad mental al fondo de tu aura. Hace que lo que tu color principal siente o crea encuentre palabras — es el traductor interno que convierte la experiencia en lenguaje comprensible para los demás.",
    camino: "Tu combinación está aprendiendo a profundizar. La velocidad es tu don — el desafío es aprender que detenerse en algo el tiempo suficiente para conocerlo de verdad es también una forma de inteligencia."
  },
  "Amarillo dorado": {
    esencia: "Autoridad espiritual · Sol · Leo · Fuego",
    principal: "Tu aura porta una luminosidad que no necesita adornos. Hay en vos una autoridad natural que proviene de la autenticidad — tu palabra tiene resonancia y tu visión inspira a otros a ver más lejos de lo que ven solos. No liderás para dominar sino para elevar.",
    secundario: "Detrás de tu color principal, el Amarillo Dorado opera como fuente de luz interior. Es lo que hace que tu presencia tenga peso incluso cuando no estás en primer plano — una calidez solar que sostiene y da sentido a todo lo que tu aura dominante expresa.",
    camino: "Tu combinación está aprendiendo que la luz también necesita recargar. El descanso no es derrota — es la condición para que el sol pueda salir más brillante al día siguiente."
  },
  "Amarillo limón": {
    esencia: "Discernimiento preciso · Mercurio · Virgo · Tierra",
    principal: "Tu aura combina la agilidad mercurial con la metodología de Virgo. Detectás el error en el sistema, el detalle que no cierra, la inconsistencia que otros pasan por alto. No es perfeccionismo por vanidad — es un estándar interno que sabe que las cosas funcionan mejor cuando se respetan los detalles.",
    secundario: "Como secundario, el Amarillo Limón añade precisión al campo de tu aura. Actúa como filtro de calidad — hace que lo que tu color principal construye tenga rigor, que las ideas no se queden a mitad de camino y que los procesos terminen bien.",
    camino: "Tu combinación está aprendiendo a vivir en la imperfección de los procesos sin que eso te inmovilice. El discernimiento que tenés es un regalo — el trabajo es usarlo para avanzar, no para detenerte."
  },
  "Amarillo pálido": {
    esencia: "Intuición lunar · Luna · Cáncer · Agua",
    principal: "Tu aura combina la luminosidad mental con la sensibilidad emocional. Sabés cuando alguien está mal aunque diga que está bien, notás el cambio en el tono de voz, leés el lenguaje no verbal de manera casi automática. Tu mayor fortaleza es la empatía intuitiva que permite acompañar sin invadir.",
    secundario: "Detrás de tu color principal, el Amarillo Pálido opera como antena emocional. Hace que lo que tu aura dominante expresa tenga una sintonía fina con lo que los demás necesitan — añade la sensibilidad que convierte la acción en cuidado.",
    camino: "Tu combinación está aprendiendo a no absorber tan profundamente las emociones ajenas que pierdas contacto con las tuyas. Sentir lo de los demás es tu don — el trabajo es mantener el hilo de vuelta a vos mismo."
  },
  "Amarillo mostaza": {
    esencia: "Sabiduría práctica · Júpiter · Sagitario · Fuego",
    principal: "Tu aura porta una riqueza acumulada — hay en vos conocimiento que no viene solo de los libros sino de haber vivido, de haber errado y de haber elegido aprender. Tendés a buscar el significado más amplio detrás de los eventos y eso te protege de los golpes que destruirían a alguien con menos perspectiva.",
    secundario: "Como secundario, el Amarillo Mostaza añade sabiduría de fondo a tu aura. Es lo que te impide reaccionar desde el pánico — aporta perspectiva histórica, la memoria de que ya pasaste por cosas difíciles y saliste, y convierte la experiencia pasada en guía presente.",
    camino: "Tu combinación está aprendiendo a no usar la filosofía como escudo para no sentir. La sabiduría que tenés es real — el trabajo es dejar que también toque los lugares donde todavía duele."
  },

  // ── VERDES ───────────────────────────────────────────────────────────
  "Verde": {
    esencia: "Conexión con la vida · Venus · Tauro · Tierra",
    principal: "Tu aura vibra en la frecuencia de la naturaleza en su estado más puro. Hay en vos una presencia que calma, que estabiliza, que hace sentir a los demás que todo va a estar bien. Tu mayor fortaleza es la capacidad de nutrir — a las personas, a los proyectos, a los espacios que habitás.",
    secundario: "Como secundario, el Verde añade arraigo y nutrición al campo de tu aura. Es lo que mantiene los pies en la tierra cuando tu color principal quiere volar — aporta la estabilidad que hace posible que las ideas más elevadas tengan dónde aterrizar.",
    camino: "Tu combinación está aprendiendo que el cambio también es parte de la naturaleza, no su negación. La estabilidad que tenés es una fortaleza — el trabajo es dejar que esa base sólida te permita moverte, no inmovilizarte."
  },
  "Verde esmeralda": {
    esencia: "Armonía del corazón · Venus · Libra · Aire",
    principal: "Tu aura combina el corazón abierto con la mente que sopesa con justicia. Tenés una capacidad para crear armonía — en las relaciones, en los espacios, en los grupos — que no proviene de ceder siempre sino de ver con genuina amplitud todos los lados de una situación.",
    secundario: "Detrás de tu color principal, el Verde Esmeralda opera como corazón equilibrador. Añade la dimensión del amor que no excluye y la justicia que no juzga — hace que lo que tu aura dominante construye tenga una base de equidad genuina.",
    camino: "Tu combinación está aprendiendo a tomar partido cuando la justicia lo exige, aunque rompa la armonía. El equilibrio que buscás es hermoso — el desafío es que a veces la verdad es más importante que la paz."
  },
  "Verde menta": {
    esencia: "Sanación práctica · Mercurio · Virgo · Tierra",
    principal: "Tu aura irradia una limpieza energética particular — estar cerca de vos tiene un efecto clarificador. Ves lo que está mal en un sistema y sabés intervenir con la herramienta adecuada. No sos sanador por misticismo sino por atención: ves lo que otros no ven porque observás con más cuidado.",
    secundario: "Como secundario, el Verde Menta añade claridad y orden al campo de tu aura. Es lo que organiza lo que tu color principal siente o crea — convierte el caos en pasos concretos y hace que las buenas intenciones se traduzcan en acciones que realmente ayudan.",
    camino: "Tu combinación está aprendiendo a recibir cuidado sin sentirte en deuda. Das con tanta naturalidad que olvidás que vos también necesitás ser sostenido — y dejar que eso ocurra es parte del trabajo."
  },
  "Verde oliva": {
    esencia: "Sabiduría terrenal · Saturno · Tauro · Tierra",
    principal: "Tu aura porta una densidad particular — cargada de tiempo, de paciencia, de capas acumuladas. No creés en los atajos, confiás en los procesos lentos, respetás lo que ha sobrevivido a la prueba del tiempo. Tu mayor fortaleza es la permanencia: sos de los que siguen cuando los demás se han ido.",
    secundario: "Detrás de tu color principal, el Verde Oliva opera como memoria larga. Aporta el peso de la experiencia acumulada — hace que lo que tu aura dominante decide tenga raíz, que no sea reacción sino elección consciente fundada en todo lo que ya viviste.",
    camino: "Tu combinación está aprendiendo a abrirse a lo nuevo sin tener que entenderlo primero. La sabiduría que tenés es real — el trabajo es que no se convierta en resistencia cuando lo que llega es genuinamente bueno."
  },
  "Verde lima": {
    esencia: "Renovación radical · Urano · Acuario · Aire",
    principal: "Tu aura combina la vida vegetal con la electricidad uraniana. Tenés un impulso renovador que te lleva a cuestionar las estructuras establecidas. No es rebeldía sin causa — es una inteligencia que detecta cuando algo ha caducado y necesita ser reemplazado. Tu mayor fortaleza es ver lo nuevo antes que llegue.",
    secundario: "Como secundario, el Verde Lima añade un impulso renovador al fondo de tu aura. Es lo que evita que lo que tu color principal construye se cristalice demasiado — introduce la pregunta fresca, la perspectiva que nadie había considerado, la puerta de salida cuando el sistema se cierra.",
    camino: "Tu combinación está aprendiendo que no todo lo viejo merece ser destruido. La capacidad de renovación que tenés es un don — el trabajo es discernir qué necesita cambiar y qué merece ser preservado."
  },
  "Verde bosque": {
    esencia: "Resistencia estructural · Saturno · Capricornio · Tierra",
    principal: "Tu aura porta una solidez que se construyó con el tiempo. Cuando decís que estarás, estás. No necesitás resultados inmediatos porque confiás en que el proceso bien llevado siempre da frutos. Tu mayor fortaleza es la confiabilidad — en vos misma y para los demás.",
    secundario: "Detrás de tu color principal, el Verde Bosque opera como raíz profunda. Es lo que te mantiene de pie cuando las tormentas sacuden lo que tu aura dominante está construyendo — la resistencia silenciosa que nadie ve pero que sostiene todo.",
    camino: "Tu combinación está aprendiendo que descansar no es rendirse. La fortaleza que tenés es enorme — el trabajo es usarla para crecer hacia arriba también, no solo para aguantar."
  },
  "Verde turquesa": {
    esencia: "Empatía oceánica · Neptuno · Piscis · Agua",
    principal: "Tu aura combina la sanación práctica del verde con la sensibilidad espiritual del agua. Podés acompañar tanto en lo cotidiano como en lo profundo. Captás energías que no tienen nombre, sentís atmósferas antes de que se vuelvan visibles, y tu empatía no distingue entre lo que te contaron y lo que viviste.",
    secundario: "Como secundario, el Verde Turquesa añade empatía fluida al campo de tu aura. Hace que lo que tu color principal hace tenga una sintonía casi sobrenatural con lo que el entorno necesita — es la inteligencia emocional que guía sin que nadie lo note.",
    camino: "Tu combinación está aprendiendo a sostener límites en un campo tan permeable. La capacidad de sentir todo es tu mayor don — el trabajo es aprender cuándo abrir y cuándo cerrar esa puerta."
  },

  // ── AZULES ───────────────────────────────────────────────────────────
  "Azul": {
    esencia: "Expansión del conocimiento · Júpiter · Sagitario · Fuego",
    principal: "Tu aura vibra en la frecuencia de la mente que mira hacia el horizonte. Tenés una visión amplia que no se conforma con las respuestas pequeñas. Creés en el crecimiento, en la abundancia, en que siempre hay más para aprender y más para dar. Tu mayor fortaleza es ver el panorama completo cuando todos están atrapados en los detalles.",
    secundario: "Como secundario, el Azul añade amplitud de visión al fondo de tu aura. Es lo que evita que te pierdas en lo inmediato — te recuerda el horizonte, te abre la perspectiva y hace que lo que tu color principal siente tenga un marco más grande donde cobrar sentido.",
    camino: "Tu combinación está aprendiendo que la profundidad también es una forma de expansión. No todo lo que importa está en el siguiente horizonte — algunas de las verdades más grandes están esperando que te quedés el tiempo suficiente para encontrarlas."
  },
  "Azul eléctrico": {
    esencia: "Genialidad disruptiva · Urano · Acuario · Aire",
    principal: "Tu aura porta ideas que a veces no encuentran interlocutores porque son demasiado adelantadas para el contexto en que vivís. Urano te convierte en un receptor de las frecuencias que están llegando. Tu forma de innovar no es gradual sino en saltos — de pronto lo ves todo diferente y ya no podés volver atrás.",
    secundario: "Detrás de tu color principal, el Azul Eléctrico opera como destello de innovación. Es lo que introduce la pregunta que nadie hizo, el ángulo que cambia todo, la solución que aparece de la nada cuando el sistema convencional ya no tiene respuestas.",
    camino: "Tu combinación está aprendiendo a comunicar la visión de una manera que otros puedan seguirte. Ver el futuro antes que llegue es tu don — el trabajo es tender el puente entre donde estás y donde los demás todavía están."
  },
  "Azul real": {
    esencia: "Compasión expansiva · Júpiter · Piscis · Agua",
    principal: "Tu aura combina la amplitud jupiteriana con la profundidad pisceana. Podés ver la humanidad incluso en quien te ha herido, y eso te da una libertad interior que pocos comprenden. Tu mayor fortaleza es la magnanimidad — podés sostener la visión grande cuando todo parece pequeño y mezquino.",
    secundario: "Como secundario, el Azul Real añade compasión expansiva al campo de tu aura. Es lo que impide que lo que tu color principal construye se vuelva frío o cerrado — introduce la dimensión del otro, la capacidad de ver más allá del propio mundo.",
    camino: "Tu combinación está aprendiendo que la compasión no implica no tener límites. Amar sin condiciones es diferente a aceptar sin discernimiento — y tu aura está integrando esa distinción fundamental."
  },
  "Azul cielo": {
    esencia: "Comunicación abierta · Mercurio · Géminis · Aire",
    principal: "Tu aura irradia una apertura comunicativa que hace que las personas quieran hablarte. Hay en vos algo que invita a la confianza, que crea un espacio donde las ideas fluyen sin miedo al juicio. Tu mayor fortaleza es la capacidad de crear puentes — entre ideas, entre personas, entre mundos que no se hablan.",
    secundario: "Detrás de tu color principal, el Azul Cielo opera como puente de expresión. Es lo que conecta el mundo interior de tu aura dominante con el exterior — hace que lo que sentís encuentre palabras y que esas palabras lleguen donde tienen que llegar.",
    camino: "Tu combinación está aprendiendo a habitar el silencio sin interpretarlo como ausencia. La conexión que buscás también existe en lo no dicho — y tu aura está descubriendo que la profundidad no siempre necesita ser articulada."
  },
  "Azul marino": {
    esencia: "Disciplina intelectual · Saturno · Acuario · Aire",
    principal: "Tu aura porta una profundidad que no se exhibe — hay en vos un mundo interior extenso que pocos conocen. Cuando movés, es porque has pensado con cuidado. Tu mayor fortaleza es la confiabilidad intelectual: cuando hablás, lo que decís tiene peso porque lo has trabajado.",
    secundario: "Como secundario, el Azul Marino añade rigor y profundidad al campo de tu aura. Es lo que le da solidez a lo que tu color principal crea — la arquitectura invisible que sostiene las ideas más brillantes y hace que duren.",
    camino: "Tu combinación está aprendiendo a dejar que los demás te conozcan antes de que todo esté perfecto. La profundidad que tenés es un regalo que se comparte — y la intimidad que evitás por prudencia es también la que más necesitás."
  },
  "Azul hielo": {
    esencia: "Objetividad cristalina · Urano · Acuario · Aire",
    principal: "Tu aura porta una claridad particular — podés analizar situaciones complejas con una ecuanimidad que otros envidian. Cuando todos corren, vos evaluás; cuando todos gritan, vos respirás. Tu mayor fortaleza es la precisión sin contaminación emocional.",
    secundario: "Detrás de tu color principal, el Azul Hielo opera como espejo claro. Es lo que te permite ver las situaciones sin la distorsión del miedo o el deseo — añade la objetividad que hace que las decisiones de tu aura dominante sean más limpias.",
    camino: "Tu combinación está aprendiendo que la vulnerabilidad también es una forma de inteligencia. La claridad que tenés es real — el trabajo es dejar que esa claridad también ilumine lo que sentís, no solo lo que analizás."
  },
  "Azul zafiro": {
    esencia: "Autoridad moral · Saturno · Capricornio · Tierra",
    principal: "Tu aura inspira una confianza particular — no la confianza fácil que se da por simpatía, sino la confianza profunda que se gana con el tiempo porque sos coherente entre lo que decís y lo que hacés. Cuando das tu palabra, la cumplís.",
    secundario: "Como secundario, el Azul Zafiro añade integridad al fondo de tu aura. Es lo que hace que lo que tu color principal crea tenga consistencia en el tiempo — la fidelidad a los principios que convierte las intenciones en trayectorias reales.",
    camino: "Tu combinación está aprendiendo a ser flexible cuando la rigidez no sirve al bien que querías proteger. La integridad que tenés es sólida — el trabajo es que esa solidez sea raíz, no jaula."
  },
  "Azul índigo": {
    esencia: "Visión interior · Neptuno · Piscis · Agua",
    principal: "Tu aura vibra en la frecuencia del tercer ojo abierto. No solo pensás: percibís. No solo observás: intuís. Hay en vos una sabiduría que no siempre podés explicar pero que rara vez te falla cuando aprendés a escucharla. Tu mayor fortaleza es la percepción extrasensorial que te permite navegar donde otros se pierden.",
    secundario: "Detrás de tu color principal, el Azul Índigo opera como guía interior silencioso. Es la voz que sabe sin poder explicar por qué — añade la percepción sutil que orienta a tu aura dominante cuando la lógica ya no alcanza.",
    camino: "Tu combinación está aprendiendo a confiar en lo que ves sin necesitar que otros lo validen. La percepción que tenés es real — el trabajo es actuar desde ella con la misma confianza con que actuarías desde cualquier dato concreto."
  },

  // ── VIOLETAS Y PÚRPURAS ─────────────────────────────────────────────
  "Violeta": {
    esencia: "Misticismo profundo · Neptuno · Piscis · Agua",
    principal: "Tu aura vibra en la frecuencia más alta del espectro visible. Hay en vos una orientación hacia lo sagrado que no es religión sino experiencia directa de algo más grande que el yo individual. Tu mayor fortaleza es la capacidad de tocar lo divino y transmitir esa frecuencia de maneras que transforman a quienes te rodean.",
    secundario: "Como secundario, el Violeta añade una dimensión sagrada al fondo de tu aura. Es lo que convierte lo ordinario en significativo — introduce la pregunta espiritual detrás de cada acción y hace que lo que tu color principal hace tenga un peso trascendente.",
    camino: "Tu combinación está aprendiendo a habitar el mundo ordinario sin perder el contacto con lo extraordinario que llevás dentro. Lo sagrado y lo cotidiano no son opuestos — y tu aura está integrando esa unión."
  },
  "Púrpura": {
    esencia: "Realeza espiritual · Júpiter · Sagitario · Fuego",
    principal: "Tu aura porta una autoridad sagrada — no la que se impone sino la que se irradia cuando alguien sabe quién es y por qué está aquí. Ya sea que te aplaudan o te ignoren, seguís siendo quien sos. Tu mayor fortaleza es la dignidad interior que no se negocia.",
    secundario: "Detrás de tu color principal, el Púrpura opera como columna de propósito. Es lo que da sentido a todo lo que tu aura dominante hace — la certeza profunda de que hay una razón más grande que sostiene el camino, incluso cuando no es visible.",
    camino: "Tu combinación está aprendiendo que la sabiduría también se nutre de la humildad. La nobleza que llevás es auténtica — el trabajo es que esa certeza de propósito no se cierre a las lecciones que solo llegan cuando uno se permite no saber."
  },
  "Lila": {
    esencia: "Sensibilidad psíquica · Luna · Cáncer · Agua",
    principal: "Tu aura combina la suavidad lunar con la apertura espiritual. Sos una antena viviente de lo que ocurre en los planos emocionales y sutiles. Tu mayor fortaleza es la receptividad psíquica que te permite acompañar a otros en sus procesos más profundos.",
    secundario: "Como secundario, el Lila añade una delicadeza perceptiva al campo de tu aura. Es lo que hace que lo que tu color principal construye tenga una sensibilidad fina — la capacidad de leer entre líneas, de sentir lo que no se dice y de responder a eso.",
    camino: "Tu combinación está aprendiendo a proteger ese campo tan abierto. La receptividad que tenés es un don extraordinario — el trabajo es aprender a elegir conscientemente cuándo y con quién abrirlo."
  },
  "Lavanda": {
    esencia: "Amor espiritual · Neptuno · Libra · Aire",
    principal: "Tu aura irradia una gracia particular — hay en vos una suavidad que proviene de una relación genuina con lo bello y lo elevado. Tu mayor fortaleza es la capacidad de elevar el nivel energético de cualquier espacio que habitás, sin esfuerzo aparente.",
    secundario: "Detrás de tu color principal, la Lavanda opera como campo de gracia. Es lo que suaviza los bordes de lo que tu aura dominante hace — añade elegancia espiritual, la sensación de que hay algo más alto sosteniendo todo.",
    camino: "Tu combinación está aprendiendo a enraizarse en lo concreto sin perder esa altura. La elevación que tenés es real — el trabajo es que esa ligereza tenga también raíces que la mantengan presente."
  },
  "Magenta": {
    esencia: "Transformación radical · Plutón · Escorpio · Agua",
    principal: "Tu aura no es suave — hay en ella una intensidad que transforma el campo de quien entra en contacto con vos. Tenés una capacidad casi instintiva para ver lo que ya no sirve y la valentía de nombrarlo. Todo lo que hacés lo hacés con una intensidad que deja marca.",
    secundario: "Como secundario, el Magenta añade poder transformador al fondo de tu aura. Es lo que disuelve lo que ya no sirve en lo que tu color principal está construyendo — el agente de renovación que aparece cuando algo necesita cambiar de raíz.",
    camino: "Tu combinación está aprendiendo que no toda transformación necesita ser radical. El poder que tenés es enorme — el trabajo es usarlo con la precisión de un bisturí, no la fuerza de un mazo."
  },
  "Violeta oscuro": {
    esencia: "Transmutación espiritual · Plutón · Piscis · Agua",
    principal: "Tu aura guarda secretos cósmicos. Podés descender hasta donde otros no se atreven e igualmente ascender a frecuencias que la mayoría no alcanza. Siempre vas más profundo — en las relaciones, en el pensamiento, en la experiencia espiritual. Tu mayor fortaleza es la capacidad de transmutación.",
    secundario: "Detrás de tu color principal, el Violeta Oscuro opera como alquimista de fondo. Es lo que convierte el sufrimiento en sabiduría, la crisis en iniciación — añade la dimensión de la profundidad que da a todo lo que tu aura dominante hace un peso espiritual genuino.",
    camino: "Tu combinación está aprendiendo a no quedarse demasiado tiempo en las profundidades sin regresar. La capacidad de descender es un poder — el trabajo es también conocer el camino de vuelta a la superficie."
  },

  // ── ROSAS ─────────────────────────────────────────────────────────────
  "Rosa": {
    esencia: "Amor incondicional · Venus · Libra · Aire",
    principal: "Tu aura vibra en la frecuencia del corazón abierto. Irradiás calidez hacia todo lo que existe sin poner condiciones. Tu mayor fortaleza es la capacidad de crear ambientes donde las personas se sienten vistas y queridas — y eso es más raro y más poderoso de lo que el mundo suele reconocer.",
    secundario: "Como secundario, el Rosa añade amor incondicional al fondo de tu aura. Es lo que convierte lo que tu color principal hace en algo genuinamente humano — introduce la ternura, el cuidado, la presencia afectiva que hace que las personas sientan que importan.",
    camino: "Tu combinación está aprendiendo que amarte a vos mismo con la misma incondicionalidad es el primer acto de amor. Dar tanto como das es hermoso — el trabajo es incluirte en ese amor."
  },
  "Rosa fucsia": {
    esencia: "Pasión amorosa · Venus · Escorpio · Agua",
    principal: "Tu aura combina la energía venusiana del afecto con la profundidad escorpiana. Cuando amás, lo hacés de una manera que transforma — no solo a quien amás sino a vos mismo en el proceso. O estás completamente presente en el vínculo o no estás.",
    secundario: "Detrás de tu color principal, el Rosa Fucsia opera como intensificador del vínculo. Es lo que convierte las relaciones de tu aura dominante en conexiones reales — añade la entrega que va más allá de la cortesía y crea intimidad genuina.",
    camino: "Tu combinación está aprendiendo a sostener la intensidad sin que se vuelva posesión. La profundidad que amás es un don — el trabajo es amar de una manera que libera en lugar de retener."
  },
  "Rosa bebé": {
    esencia: "Ternura maternal · Luna · Cáncer · Agua",
    principal: "Tu aura irradia un instinto de cuidado que se activa de manera casi automática cuando alguien a tu alrededor está en dolor o necesidad. Tu mayor fortaleza es la capacidad de hacer sentir a otros que no están solos — de crear espacios donde la vulnerabilidad es segura.",
    secundario: "Como secundario, el Rosa Bebé añade ternura nutricia al campo de tu aura. Es lo que hace que lo que tu color principal construye tenga un corazón suave — introduce el cuidado, la paciencia con los procesos lentos, la gentileza con lo que es frágil.",
    camino: "Tu combinación está aprendiendo que el amor que no pasa por tu propio corazón se agota. Cuidar a otros es tu naturaleza — el trabajo es aprender que cuidarte a vos es la condición para que ese amor dure."
  },
  "Rosa coral": {
    esencia: "Afecto espontáneo · Venus · Aries · Fuego",
    principal: "Tu aura combina la calidez venusiana con el impulso ariano. No calculás si es el momento adecuado para mostrar afecto — simplemente lo mostrás. Tu mayor fortaleza es la capacidad de hacer sentir a los demás que importan, ahora, sin condiciones.",
    secundario: "Detrás de tu color principal, el Rosa Coral opera como calor espontáneo. Es lo que convierte los gestos de tu aura dominante en algo genuinamente afectivo — introduce la iniciativa del corazón que no espera el momento perfecto.",
    camino: "Tu combinación está aprendiendo que el afecto también necesita raíces. La espontaneidad que tenés es un don — el trabajo es añadirle continuidad, para que los demás puedan confiar en esa calidez más allá del impulso del momento."
  },
  "Rosa salmón": {
    esencia: "Amor sensorial · Venus · Tauro · Tierra",
    principal: "Tu aura combina la ternura venusiana con el apego taurino a lo concreto. Amás a través de actos tangibles: el abrazo que dura el tiempo necesario, el gesto que nadie pidió pero que estaba exactamente donde hacía falta. Tu mayor fortaleza es hacer del amor una experiencia sensorial completa.",
    secundario: "Como secundario, el Rosa Salmón añade calidez concreta al campo de tu aura. Es lo que traduce las intenciones de tu color principal en acciones reales y palpables — hace que el amor no se quede en el pensamiento sino que llegue al cuerpo.",
    camino: "Tu combinación está aprendiendo a decir lo que sentís también con palabras. El lenguaje del cuerpo que manejás es exquisito — el trabajo es añadirle la dimensión verbal que permite que los vínculos también crezcan en la comprensión mutua."
  },

  // ── BLANCOS Y PLATEADOS ──────────────────────────────────────────────
  "Blanco": {
    esencia: "Pureza espiritual · Luna · Cáncer · Agua",
    principal: "Tu aura vibra en la frecuencia de la totalidad integrada. Hay en vos una pureza que no es inocencia ingenua sino una limpieza interior que elegís mantener a través del discernimiento. Tu mayor fortaleza es la capacidad de ser espejo: tu presencia devuelve a los demás una versión más clara de sí mismos.",
    secundario: "Como secundario, el Blanco añade limpieza y claridad al campo de tu aura. Es lo que purifica lo que tu color principal construye — elimina lo accesorio, lo que no corresponde, y deja solo lo esencial en su forma más nítida.",
    camino: "Tu combinación está aprendiendo a proteger esa pureza sin convertirla en aislamiento. La limpieza que llevás es preciosa — el trabajo es que sea un espacio abierto donde otros puedan entrar, no una fortaleza donde nada pueda tocarte."
  },
  "Blanco perla": {
    esencia: "Discernimiento espiritual · Luna · Virgo · Tierra",
    principal: "Tu aura combina la luminosidad lunar con la precisión virgoana. Hay en vos un orden sagrado — la claridad de quien sabe que ciertos principios no se negocian. Tu mayor fortaleza es la pureza del servicio: hacés las cosas bien porque importa hacerlas bien.",
    secundario: "Detrás de tu color principal, el Blanco Perla opera como filtro de impecabilidad. Es lo que hace que lo que tu aura dominante expresa tenga una calidad particular — añade la atención al detalle que convierte lo bueno en excelente.",
    camino: "Tu combinación está aprendiendo a ser tan compasivo con vos mismo como con los demás. El estándar que sostenés es elevado — el trabajo es aplicarlo con la misma gentileza que usarías con alguien que amás."
  },
  "Plateado": {
    esencia: "Versatilidad lunar · Luna · Géminis · Aire",
    principal: "Tu aura tiene una calidad cambiante — como la luna que refleja perfectamente la luz. Hay en vos una capacidad de resonar con los ambientes y las personas de una manera que es una forma de inteligencia adaptativa muy elevada. Tu mayor fortaleza es la versatilidad intuitiva.",
    secundario: "Como secundario, el Plateado añade fluidez adaptativa al campo de tu aura. Es lo que hace que lo que tu color principal hace pueda moverse entre contextos muy distintos — aporta la flexibilidad que permite que el mensaje llegue de maneras muy diferentes según quien recibe.",
    camino: "Tu combinación está aprendiendo a encontrar el hilo de tu propia voz entre tanta resonancia con lo externo. La adaptabilidad que tenés es un don — el trabajo es saber siempre desde dónde te estás adaptando."
  },
  "Blanco iridiscente": {
    esencia: "Consciencia expandida · Neptuno · Piscis · Agua",
    principal: "Tu aura toca las frecuencias más elevadas del campo humano. Hay en vos una expansión de consciencia que a veces te hace sentir que no terminás donde el otro comienza. Tu mayor fortaleza es la capacidad de acceder a estados elevados y transmitir esa frecuencia de manera que otros puedan atisbarla.",
    secundario: "Detrás de tu color principal, el Blanco Iridiscente opera como portal a lo eterno. Es lo que convierte lo que tu aura dominante hace en algo que trasciende lo ordinario — añade la dimensión de lo sagrado a lo cotidiano.",
    camino: "Tu combinación está aprendiendo a habitar el cuerpo y el presente con la misma plenitud con que habitás lo eterno. La expansión que tenés es real — el trabajo es aterrizarla sin perderla."
  },
  "Blanco cristalino": {
    esencia: "Claridad absoluta · Urano · Acuario · Aire",
    principal: "Tu aura porta una claridad que no se consigue fácilmente — es el resultado de haber atravesado capas de condicionamiento hasta ver las cosas sin los filtros habituales. No tenés miedo de lo que encontrarás cuando mirás con honestidad — y eso te hace libre.",
    secundario: "Como secundario, el Blanco Cristalino añade transparencia al campo de tu aura. Es lo que disuelve las ilusiones y las autoengaños en lo que tu color principal construye — introduce una honestidad que a veces sorprende pero que siempre libera.",
    camino: "Tu combinación está aprendiendo que los demás necesitan tiempo para llegar a donde vos ya estás. La claridad que tenés es un don — el trabajo es sostenerla con paciencia y compasión hacia los procesos más lentos de los que te rodean."
  },

  // ── DORADOS ──────────────────────────────────────────────────────────
  "Dorado": {
    esencia: "Consciencia solar · Sol · Leo · Fuego",
    principal: "Tu aura vibra en la frecuencia del sol en su cenit. Cuando estás en tu centro, tu presencia tiene una calidad que eleva el nivel de todo lo que te rodea. No guardás la luz para vos — la ponés al servicio de los demás. Tu mayor fortaleza es la capacidad de transformar cualquier entorno con tu sola presencia.",
    secundario: "Como secundario, el Dorado añade luminosidad central al campo de tu aura. Es lo que le da a lo que tu color principal hace una calidad solar — la calidez que inspira, el magnetismo que convoca, la luz que ilumina sin cegar.",
    camino: "Tu combinación está aprendiendo que el descanso es renovación, no derrota. La irradiación que tenés necesita también momentos de silencio y recarga — y aprender a dártelos es parte de honrar ese don."
  },
  "Dorado brillante": {
    esencia: "Coraje solar · Sol · Aries · Fuego",
    principal: "Tu aura combina el poder solar con la iniciativa ariana. Abrís caminos que todavía no existen — cuando algo te llama, te lanzás sin esperar que otros lo hayan hecho primero. No sos el que perfecciona, sos el que empieza. Tu mayor fortaleza es la valentía de la iniciación.",
    secundario: "Detrás de tu color principal, el Dorado Brillante opera como primer rayo. Es lo que enciende lo que tu aura dominante está guardando — el coraje de dar el primer paso que convierte la visión en realidad.",
    camino: "Tu combinación está aprendiendo a pasar la antorcha una vez que el camino está trazado. Iniciás con una fuerza extraordinaria — el trabajo es también acompañar el proceso que viene después de ese primer impulso."
  },
  "Dorado antiguo": {
    esencia: "Sabiduría madura · Saturno · Leo · Fuego",
    principal: "Tu aura porta una riqueza que no se puede comprar — es el resultado de pruebas superadas, de lecciones aprendidas con el cuerpo, de haber mantenido la integridad en momentos en que hubiera sido más fácil ceder. Tu mayor fortaleza es la autoridad ganada con vida real.",
    secundario: "Como secundario, el Dorado Antiguo añade sabiduría probada al campo de tu aura. Es lo que le da a lo que tu color principal hace un peso particular — la resonancia de quien ha pasado por algo y tiene cicatrices que cuentan una historia.",
    camino: "Tu combinación está aprendiendo a transmitir lo que sabés sin la rigidez de quien cree que solo hay un camino. La sabiduría que tenés es un tesoro — el trabajo es ofrecerla con la apertura de quien sabe que siempre hay más que aprender."
  },
  "Dorado cobre": {
    esencia: "Abundancia sensorial · Venus · Tauro · Tierra",
    principal: "Tu aura combina la belleza venusiana con el apego taurino a lo material. Disfrutás de los placeres físicos sin culpa, valorás la calidad sobre la cantidad y tenés un gusto refinado que se expresa en todo lo que creás o construís. Tu mayor fortaleza es la capacidad de manifestar prosperidad a través del cuidado.",
    secundario: "Detrás de tu color principal, el Dorado Cobre opera como imán de abundancia. Es lo que atrae la prosperidad concreta a lo que tu aura dominante está construyendo — añade la dimensión material que convierte las ideas en recursos reales.",
    camino: "Tu combinación está aprendiendo que la abundancia verdadera incluye también dimensiones no materiales. La prosperidad que creás es real — el trabajo es expandir esa capacidad hacia los planos emocional, espiritual y relacional."
  },

  // ── NEGROS Y GRISES ──────────────────────────────────────────────────
  "Negro": {
    esencia: "Potencial absoluto · Plutón · Escorpio · Agua",
    principal: "Tu aura vibra en la frecuencia del potencial absoluto — todo lo que aún no se ha manifestado. Tenés una relación íntima con la muerte simbólica: el fin de etapas, la transformación profunda, los renacimientos repetidos. Tu mayor fortaleza es el poder de transmutación que convierte el plomo en oro interior.",
    secundario: "Como secundario, el Negro añade potencia concentrada al campo de tu aura. Es la semilla invisible que guarda en su oscuridad todo lo que está por nacer — añade profundidad, misterio y el poder de la espera consciente a lo que tu color principal expresa.",
    camino: "Tu combinación está aprendiendo que no todo necesita ser transformado — a veces la vida simplemente quiere ser vivida. El poder de transmutación que tenés es extraordinario — el trabajo es también dejar que las cosas sean, sin necesitar que todo se convierta en algo más."
  },
  "Gris": {
    esencia: "Equilibrio estructural · Saturno · Capricornio · Tierra",
    principal: "Tu aura vibra en la frecuencia de la neutralidad sabia. Podés ver el blanco y el negro sin necesidad de decidir que uno es mejor que el otro. Tu mayor fortaleza es la capacidad de sostener la complejidad sin simplificarla prematuramente — de vivir cómodamente en los matices.",
    secundario: "Detrás de tu color principal, el Gris opera como equilibrador. Es lo que modera los extremos de lo que tu aura dominante expresa — añade pragmatismo, perspectiva y la capacidad de no dejarse arrastrar por ninguna corriente demasiado fuerte.",
    camino: "Tu combinación está aprendiendo que la pasión también es una forma de sabiduría. El equilibrio que tenés es valioso — el trabajo es no usarlo como escudo contra el compromiso emocional que la vida también pide."
  },
  "Gris perla": {
    esencia: "Discernimiento lunarizado · Luna · Virgo · Tierra",
    principal: "Tu aura combina la sensibilidad lunar con la precisión virgoana. Captás lo sutil — en las personas, en los ambientes, en las situaciones — con una fineza que da una ventaja en la lectura de la realidad. Tu mayor fortaleza es el discernimiento refinado que permite actuar con una precisión casi sobrenatural.",
    secundario: "Como secundario, el Gris Perla añade percepción fina al campo de tu aura. Es lo que capta los matices que tu color principal podría pasar por alto — introduce la sensibilidad que lee entre líneas y ajusta la respuesta a lo que realmente está ocurriendo.",
    camino: "Tu combinación está aprendiendo a desconectar cuando la sensibilidad se vuelve saturación. Percibir tanto es un don extraordinario — el trabajo es aprender a cerrar esa antena cuando necesitás descansar."
  },
  "Gris carbón": {
    esencia: "Visión sistémica · Saturno · Acuario · Aire",
    principal: "Tu aura porta una austeridad que no es frialdad sino concentración. Ves cómo las partes se relacionan, detectás los fallos estructurales antes de que se vuelvan crisis, y tenés la paciencia para construir soluciones que funcionen a largo plazo. Tu mayor fortaleza es pensar en sistemas que perduran.",
    secundario: "Detrás de tu color principal, el Gris Carbón opera como arquitecto de fondo. Es lo que convierte las ideas de tu aura dominante en estructuras que funcionan — añade la visión sistémica que asegura que lo que se construye tenga coherencia y durabilidad.",
    camino: "Tu combinación está aprendiendo a conectar con las personas no solo a través de la lógica sino también del corazón. Los sistemas que construís son sólidos — el trabajo es recordar que están hechos de personas, no solo de partes."
  },

  // ── ESPECIALES ────────────────────────────────────────────────────────
  "Arcoíris": {
    esencia: "Totalidad espiritual · Sol · Todos los signos · Todos los elementos",
    principal: "Tu aura no puede reducirse a una frecuencia — sos todos los colores coexistiendo en la misma luz. Podés ser intenso como el Rojo y suave como el Lila, racional como el Amarillo y místico como el Violeta, todo dentro del mismo ser. Tu mayor fortaleza es la totalidad — no sos pocas cosas, sos muchas, y esa pluralidad es exactamente tu don.",
    secundario: "Como secundario, el Arcoíris añade totalidad al campo de tu aura. Es lo que impide que tu color principal se cierre demasiado en una sola frecuencia — introduce la pluralidad, la apertura a todos los matices, la capacidad de resonar con realidades muy distintas.",
    camino: "Tu combinación está aprendiendo que la pluralidad no necesita justificación. Ser todo lo que sos está perfectamente bien — el trabajo es encontrar el hilo que conecta todas esas expresiones distintas en una identidad coherente."
  },
  "Iridiscente": {
    esencia: "Multidimensionalidad · Neptuno · Piscis · Agua",
    principal: "Tu aura cambia de tono dependiendo del ángulo desde el que se la mira — y eso describe perfectamente tu naturaleza. Hay en vos una fluidez entre estados, entre roles, entre niveles de realidad, que hace que diferentes personas te conozcan de maneras muy distintas. No es falsedad — es resonancia multidimensional.",
    secundario: "Detrás de tu color principal, el Iridiscente opera como espectro expandido. Es lo que añade dimensiones ocultas a lo que tu aura dominante muestra — introduce la capacidad de moverse entre frecuencias con una fluidez que enriquece sin diluir.",
    camino: "Tu combinación está aprendiendo a encontrar y sostener el centro cuando el cambio es constante. La fluidez que tenés es un don — el trabajo es que haya un hilo de identidad estable desde el cual todas esas transformaciones tengan sentido."
  },
  "Opalescente": {
    esencia: "Sensibilidad onírica · Luna · Cáncer · Agua",
    principal: "Tu aura guarda en su interior un universo de luz que solo se revela desde ciertos ángulos. Hay en vos una riqueza interior que no siempre se muestra — una imaginación y una vida onírica tan vívidas que a veces lo soñado parece más real que lo vivido. Tu mayor fortaleza es la creatividad nacida de las profundidades del alma.",
    secundario: "Como secundario, el Opalescente añade profundidad onírica al campo de tu aura. Es lo que convierte lo que tu color principal hace en algo que tiene más capas de las que se ven a primera vista — introduce la riqueza interior que hace que tu presencia tenga misterio.",
    camino: "Tu combinación está aprendiendo a traer los tesoros internos al mundo exterior. El universo que llevás adentro es extraordinario — el trabajo es encontrar las formas de compartirlo, de que esa luz interna se vuelva visible para los demás."
  },
  "Tornasol": {
    esencia: "Genialidad impredecible · Urano · Acuario · Aire",
    principal: "Tu aura no se puede fijar — hay en vos una imprevisibilidad brillante que hace que las personas nunca sepan exactamente qué esperar. Recibís con antelación las frecuencias del futuro y las expresás en el presente de maneras que desconciertan a quienes están anclados en el pasado. Tu mayor fortaleza es la innovación que surge de la imprevisibilidad.",
    secundario: "Detrás de tu color principal, el Tornasol opera como chispa de lo inesperado. Es lo que introduce el giro que nadie anticipaba, la solución que viene de un ángulo completamente diferente, el destello que ilumina lo que todos estaban mirando sin ver.",
    camino: "Tu combinación está aprendiendo a aterrizar esa energía de manera que otros puedan recibirla. La visión que tenés es genuinamente adelantada — el trabajo es encontrar la forma de comunicarla que no deje a los demás tan atrás que no puedan seguirte."
  }

};

// ══════════════════════════════════════════════════════════════════════
// generarSintesisAura(prin, sec)
// Genera la síntesis personalizada "Tu Combinación Áurica"
// usando los textos de camino de cada color y conectándolos dinámicamente
// ══════════════════════════════════════════════════════════════════════
window.generarSintesisAura = function(prin, sec) {
  var AI = window.AURA_INTERP || {};
  var ip = AI[prin.nombre];
  var is = AI[sec.nombre];
  if (!ip || !is) return '';

  // Arquetipos cortos derivados de la esencia
  var archPrin = ip.esencia.split('·')[0].trim();
  var archSec  = is.esencia.split('·')[0].trim();
  var elemPrin = prin.elem;
  var elemSec  = sec.elem;

  // Detectar relación entre elementos para personalizar el texto de unión
  var relacionElem = '';
  if (elemPrin === elemSec) {
    relacionElem = 'Dos corrientes del mismo elemento se amplifican en tu campo — lo que cada una porta se multiplica en la otra.';
  } else if (
    (elemPrin === 'Fuego' && elemSec === 'Aire') ||
    (elemPrin === 'Aire' && elemSec === 'Fuego')
  ) {
    relacionElem = 'Fuego y Aire se potencian mutuamente en tu campo — la visión aviva la llama, y la llama eleva la visión.';
  } else if (
    (elemPrin === 'Tierra' && elemSec === 'Agua') ||
    (elemPrin === 'Agua' && elemSec === 'Tierra')
  ) {
    relacionElem = 'Tierra y Agua se nutren en tu campo — el arraigo da cauce al flujo, y el flujo ablanda la tierra para que florezca.';
  } else if (
    (elemPrin === 'Fuego' && elemSec === 'Agua') ||
    (elemPrin === 'Agua' && elemSec === 'Fuego')
  ) {
    relacionElem = 'Fuego y Agua crean vapor en tu campo — la tensión entre la intensidad y la profundidad genera una energía de transformación poco común.';
  } else if (
    (elemPrin === 'Fuego' && elemSec === 'Tierra') ||
    (elemPrin === 'Tierra' && elemSec === 'Fuego')
  ) {
    relacionElem = 'Fuego y Tierra se equilibran en tu campo — la pasión tiene raíces, y las raíces tienen calor.';
  } else if (
    (elemPrin === 'Aire' && elemSec === 'Agua') ||
    (elemPrin === 'Agua' && elemSec === 'Aire')
  ) {
    relacionElem = 'Aire y Agua se encuentran en tu campo — el pensamiento y la emoción se disuelven el uno en el otro, creando una percepción extraordinariamente fluida.';
  } else if (
    (elemPrin === 'Aire' && elemSec === 'Tierra') ||
    (elemPrin === 'Tierra' && elemSec === 'Aire')
  ) {
    relacionElem = 'Aire y Tierra se complementan en tu campo — la visión tiene estructura, y la estructura tiene ideas que la renuevan.';
  } else {
    relacionElem = 'Las dos frecuencias de tu aura se sostienen mutuamente desde polaridades que se necesitan.';
  }

  // Ensamblar el texto de síntesis usando los campos camino de cada color
  var texto =
    'Tu ' + prin.nombre + ' como aura principal y tu ' + sec.nombre + ' como color secundario crean una combinación que no es suma sino diálogo. ' +
    relacionElem + ' ' +
    ip.camino + ' ' +
    'Mientras tanto, la corriente del ' + sec.nombre + ' trabaja en el fondo: ' +
    is.camino.charAt(0).toLowerCase() + is.camino.slice(1) + ' ' +
    'Juntos, estos dos colores señalan el territorio específico que tu aura está navegando en este momento de tu vida — no como destino fijo, sino como dirección viva.';

  return texto;
};