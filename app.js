const categoryInfo = [
  ['miembro-inferior','Miembro inferior','Piernas, glúteos, cadera y pantorrillas.'],
  ['espalda','Espalda','Tracción, postura y control escapular.'],
  ['pectoral','Pectoral','Fuerza de empuje y control del tren superior.'],
  ['hombro','Hombro','Movilidad, estabilidad y fuerza del hombro.'],
  ['biceps','Bíceps','Flexión de codo y fuerza del brazo.'],
  ['triceps','Tríceps','Extensión de codo y fuerza de empuje.'],
  ['core','Core','Estabilidad del tronco, abdomen y zona lumbopélvica.'],
  ['funcionales','Funcionales','Coordinación, potencia y movimientos integrados.'],
  ['cardio','Cardio','Resistencia cardiovascular y acondicionamiento general.']
].map(([id,label,desc]) => ({id,label,desc}));

const path = (zone, file) => `assets/photos/${zone}/${file}.jpg`;
const slug = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const exercises = [];
function add(zone, name, muscle, file, description, benefit, sets='3', reps='10–12') {
  exercises.push({
    id: slug(name), zone, name, muscle, image: path(zone,file), description, benefit, sets, reps,
    steps: [
      `Adopta una posición estable y ajusta el equipo antes de comenzar.`,
      `Realiza el movimiento de ${name.toLowerCase()} con un recorrido cómodo y sin impulso.`,
      `Vuelve lentamente a la posición inicial, manteniendo la respiración y el control.`
    ]
  });
}

// Miembro inferior
add('miembro-inferior','Abductores en máquina','Glúteo medio y abductores','abductores-en-maquina','Separa las piernas contra la resistencia de la máquina sin mover el tronco.','Fortalece la estabilidad lateral de la cadera y el control de las rodillas.');
add('miembro-inferior','Aductores en máquina','Aductores de cadera','aductores-en-maquina','Junta las piernas contra resistencia desde una apertura cómoda.','Fortalece la cara interna del muslo y contribuye a la estabilidad pélvica.');
add('miembro-inferior','Curl femoral de pie','Isquiotibiales','curl-femoral-de-pie','Flexiona una rodilla llevando el talón hacia el glúteo mientras mantienes la cadera estable.','Trabaja cada isquiotibial por separado y mejora el control de la rodilla.');
add('miembro-inferior','Curl femoral sentado en máquina','Isquiotibiales','curl-femoral-sentado-en-maquina','Flexiona las rodillas desde una posición sentada con los muslos asegurados.','Fortalece la parte posterior del muslo con una trayectoria guiada.');
add('miembro-inferior','Extensión de rodilla en máquina','Cuádriceps','extension-de-rodilla-en-maquina','Extiende las rodillas levantando el rodillo sin despegar la cadera del asiento.','Fortalece el cuádriceps y mejora la capacidad de extender la rodilla.','3','12–15');
add('miembro-inferior','Hip thrust en máquina','Glúteo mayor','hip-thrust-en-maquina','Eleva la cadera contra el apoyo de la máquina y aprieta los glúteos arriba.','Desarrolla fuerza de glúteos y potencia de extensión de cadera.');
add('miembro-inferior','Pantorrilla sentado en máquina','Sóleo y pantorrilla','maquina-de-pantorrilla-sentado','Eleva y baja los talones manteniendo la parte delantera de los pies apoyada.','Fortalece las pantorrillas y favorece la estabilidad del tobillo.','3','12–20');
add('miembro-inferior','Patada lateral en polea baja','Glúteo medio','patada-lateral-en-polea-baja','Separa una pierna hacia el lado con la tobillera conectada a la polea.','Mejora la fuerza lateral de cadera y el control de la pelvis.','3','12–15 por lado');
add('miembro-inferior','Prensa inclinada','Cuádriceps y glúteos','prensa-inclinada','Empuja la plataforma con ambos pies manteniendo espalda y cadera apoyadas.','Desarrolla fuerza de piernas con apoyo estable del tronco.');
add('miembro-inferior','Sentadilla en hack invertida','Glúteos y cuádriceps','sentadilla-en-hack-invertida','Desciende en la máquina con cadera atrás y rodillas alineadas con los pies.','Fortalece piernas y glúteos mediante una trayectoria guiada.');
add('miembro-inferior','Sentadilla libre con barra','Piernas, glúteos y core','sentadilla-libre-con-barra','Desciende y sube con la barra estable, el abdomen activo y los pies firmes.','Integra fuerza de piernas, estabilidad del tronco y coordinación.','3','6–10');
add('miembro-inferior','Sentadilla sissy','Cuádriceps','sentadilla-sissy','Inclina el cuerpo en bloque mientras las rodillas avanzan, usando un apoyo seguro.','Aumenta el trabajo del cuádriceps y exige control de rodilla.','3','8–12');

// Espalda
add('espalda','Dominadas asistidas en máquina','Dorsal y brazos','dominadas-asistidas-en-maquina','Eleva el cuerpo hacia las barras usando la ayuda regulada de la máquina.','Fortalece espalda y brazos mientras facilita el aprendizaje de la dominada.','3','6–10');
add('espalda','Jalón al pecho','Dorsal ancho','jalon-al-pecho','Lleva la barra hacia la parte alta del pecho mientras bajas los hombros.','Fortalece los dorsales y favorece el control de las escápulas.');
add('espalda','Pull over en polea','Dorsal y serrato','pull-over-en-polea','Baja la barra con brazos casi extendidos desde arriba hasta los muslos.','Trabaja el dorsal sin depender tanto de la flexión del codo.');
add('espalda','Remo horizontal en polea','Espalda media','remo-horizontal-en-polea','Tira del agarre hacia el abdomen acercando las escápulas.','Fortalece la espalda media y apoya una postura activa.');

// Pectoral
add('pectoral','Pec deck','Pectoral mayor','pec-deck','Junta los brazos frente al pecho desde una apertura cómoda.','Concentra el trabajo en el pectoral con una trayectoria estable.');
add('pectoral','Pec fly en polea baja','Pectoral mayor','pec-fly-en-polea-baja','Lleva las manos al frente y ligeramente hacia arriba desde las poleas bajas.','Mantiene tensión continua en el pecho y mejora el control del hombro.');
add('pectoral','Press inclinado con barra','Pectoral superior y tríceps','press-inclinado-con-barra','Baja la barra hacia la parte alta del pecho y empuja desde un banco inclinado.','Desarrolla fuerza de empuje con énfasis en el pectoral superior.','3','6–10');
add('pectoral','Press plano en máquina','Pectoral y tríceps','press-plano-en-maquina','Empuja las manijas al frente con la espalda apoyada y los hombros bajos.','Fortalece pecho y tríceps con una trayectoria guiada.');

// Hombro
add('hombro','Rotación interna de hombro en polea','Manguito rotador','rotacion-interna-de-hombro-en-polea','Gira el antebrazo hacia el abdomen manteniendo el codo pegado al cuerpo.','Fortalece los rotadores internos y contribuye al control del hombro.','3','12–15 por lado');
add('hombro','Vuelos frontales con mancuernas','Deltoides anterior','vuelos-frontales-con-mancuernas','Eleva las mancuernas al frente hasta una altura cómoda sin balancearte.','Fortalece la parte anterior del hombro y el control de elevación.');
add('hombro','Vuelos laterales con mancuernas','Deltoides medio','vuelos-laterales-con-mancuernas','Eleva los brazos hacia los lados con codos suaves y hombros relajados.','Fortalece el deltoides medio y mejora el control del brazo.','3','12–15');

// Bíceps y tríceps
add('biceps','Curl de bíceps con mancuernas','Bíceps','curl-de-biceps-con-mancuernas','Flexiona los codos llevando las mancuernas hacia los hombros sin balancear el tronco.','Fortalece bíceps y mejora la fuerza de agarre y flexión de codo.');
add('biceps','Curl de bíceps en polea alta','Bíceps','curl-de-biceps-en-polea-alta','Flexiona los codos desde los brazos elevados manteniéndolos alineados.','Trabaja el bíceps con tensión constante y exige estabilidad del hombro.');
add('biceps','Curl martillo con mancuernas','Braquial y bíceps','curl-martillo-con-mancuernas','Flexiona los codos con las palmas enfrentadas y las muñecas neutras.','Fortalece el brazo y antebrazo con un agarre cómodo.');
add('biceps','Curl predicador en banco','Bíceps','curl-predicador-en-banco','Flexiona el codo con la parte posterior del brazo apoyada en el banco.','Aísla el bíceps y limita el impulso del cuerpo.');
add('biceps','Curl predicador en máquina','Bíceps','curl-predicador-en-maquina','Eleva el agarre con los brazos apoyados y regresa sin soltar la carga.','Permite entrenar el bíceps con soporte y recorrido guiado.');
add('triceps','Extensión de tríceps en polea','Tríceps','extension-de-triceps-en-polea','Extiende los codos llevando el agarre hacia los muslos, sin mover los hombros.','Fortalece el tríceps y la capacidad de extensión del codo.','3','10–15');
add('triceps','Fondos asistidos en máquina','Tríceps y pectoral','fondos-asistidos-en-maquina','Baja y eleva el cuerpo con la ayuda de la plataforma de la máquina.','Desarrolla fuerza para fondos y trabaja tríceps, pecho y cintura escapular.','3','8–12');

// Core
add('core','Abdominal en V con balón','Abdomen','abdominal-en-v-con-balon-abdominal','Acerca simultáneamente tronco y piernas para formar una V sosteniendo el balón.','Mejora la fuerza abdominal y la coordinación entre tren superior e inferior.','3','8–12');
add('core','Abdominal con giro y balón','Oblicuos y abdomen','abdominal-y-giro-con-balon-abdominal','Eleva el tronco y gira llevando el balón hacia cada lado.','Fortalece abdomen y oblicuos, y entrena el control de rotación.','3','10 por lado');
add('core','Bicicleta abdominal','Abdomen y oblicuos','bicicleta-abdominal','Alterna codo y rodilla contraria mientras extiendes la otra pierna.','Mejora resistencia abdominal y coordinación cruzada.','3','12 por lado');
add('core','Crunch abdominal en banco','Recto abdominal','crunch-abdominal-en-banco','Flexiona el tronco de forma corta sobre el banco sin tirar del cuello.','Fortalece el abdomen mediante un movimiento estable y controlado.','3','12–15');
add('core','Crunch abdominal en máquina','Recto abdominal','crunch-abdominal-en-maquina','Flexiona el tronco contra la resistencia de la máquina manteniendo la pelvis estable.','Permite graduar la carga para fortalecer el abdomen.','3','12–15');
add('core','Crunch bicicleta','Abdomen y oblicuos','crunch-bicicleta','Alterna una rotación del tronco hacia la rodilla contraria.','Entrena oblicuos, abdomen y coordinación del tronco.','3','10 por lado');
add('core','Dead bug alternado','Core profundo','dead-bug-alternado','Extiende brazo y pierna contrarios sin perder el apoyo de la zona lumbar.','Mejora la estabilidad lumbopélvica y la coordinación cruzada.','3','8 por lado');
add('core','Dead bug isométrico','Core profundo','dead-bug-isometrico','Mantén brazos y piernas elevadas con el abdomen activo y la espalda apoyada.','Desarrolla resistencia del core con baja movilidad de la columna.','3','20–30 s');
add('core','Elevación de piernas','Abdomen inferior','elevacion-de-piernas','Eleva y baja las piernas juntas sin arquear la espalda.','Fortalece abdomen y control de la pelvis.','3','8–12');
add('core','Rodillas sobre fitball','Core y hombros','encogimiento-de-rodillas-sobre-fitball','Desde plancha, acerca las rodillas al pecho rodando el balón.','Entrena estabilidad del tronco, hombros y coordinación.','3','8–12');
add('core','Leñador con balón medicinal','Oblicuos y cadera','lenador-abdominal-con-balon-medicinal','Mueve el balón en diagonal combinando giro controlado de tronco y cadera.','Mejora fuerza rotacional y coordinación de cuerpo completo.','3','10 por lado');
add('core','Marcha con balón sobre la cabeza','Core y hombros','marcha-con-balon-medicinal-sobre-la-cabeza','Marcha en el sitio sosteniendo el balón arriba sin inclinar el tronco.','Trabaja estabilidad, postura y control de la pelvis.','3','20 pasos');
add('core','Toque de pies con balón medicinal','Abdomen','medicinal-ball-toe','Acerca el balón hacia los pies elevando el tronco y las piernas.','Fortalece el abdomen y mejora coordinación del patrón de flexión.','3','10–12');
add('core','Navaja unilateral con balón','Abdomen y oblicuos','navaja-unilateral-con-balon-medicinal','Acerca una pierna y el balón con una flexión diagonal del tronco.','Entrena abdomen, oblicuos y coordinación unilateral.','3','8 por lado');
add('core','Patada en tijera','Abdomen y flexores de cadera','patada-en-tijera','Alterna pequeñas elevaciones de las piernas manteniendo la zona lumbar estable.','Mejora resistencia del abdomen inferior y control de piernas.','3','20–30 s');
add('core','Plancha de antebrazos sobre fitball','Core y hombros','plancha-de-antebrazos-sobre-fitball','Mantén el cuerpo alineado con antebrazos apoyados sobre el balón.','Aumenta el reto de estabilidad del core y la cintura escapular.','3','20–30 s');
add('core','Plancha invertida con rodilla al pecho','Core, glúteos y brazos','plancha-invertida-con-rodilla-al-pecho','Desde plancha invertida, acerca una rodilla al pecho sin bajar la cadera.','Integra estabilidad del tronco, glúteos y apoyo de brazos.','3','8 por lado');
add('core','Plancha lateral con toque cruzado','Oblicuos y hombros','plancha-lateral-con-toque-cruzado-de-mano','Desde plancha lateral, realiza un alcance cruzado manteniendo la cadera elevada.','Fortalece oblicuos y mejora estabilidad lateral.','3','8 por lado');
add('core','Puente con mancuerna','Glúteos y core','puente-con-mancuerna','Eleva la cadera desde el suelo con la mancuerna apoyada sobre la pelvis.','Fortalece glúteos y mejora el control lumbopélvico.','3','12–15');
add('core','Puente con toque de tobillo','Core y glúteos','puente-con-toque-de-tobillo','Desde una posición de puente, alterna alcances hacia cada tobillo.','Trabaja glúteos y estabilidad del tronco con movimiento lateral.','3','10 por lado');
add('core','Puente unilateral con pierna elevada','Glúteos y core','puente-unilateral-con-pierna-elevada','Eleva la cadera apoyándote en una sola pierna.','Fortalece cada glúteo por separado y mejora la estabilidad pélvica.','3','8 por lado');
add('core','Toque de punta unilateral','Abdomen y oblicuos','toque-de-punta-unilateral','Acerca una mano al pie contrario elevando el tronco de forma diagonal.','Fortalece abdomen y oblicuos con coordinación cruzada.','3','10 por lado');

// Funcionales
add('funcionales','Battle ropes','Cuerpo completo','battle-ropes','Genera ondas alternas o simultáneas con las cuerdas desde una base estable.','Eleva el pulso y desarrolla resistencia de brazos, hombros y core.','4','20–30 s');
add('funcionales','Bíceps con banda','Bíceps','biceps-con-banda','Flexiona los codos contra la tensión de una banda pisada o anclada.','Fortalece los brazos con resistencia progresiva y fácil de graduar.','3','12–15');
add('funcionales','Burpees','Cuerpo completo','burpees','Combina sentadilla, apoyo de manos, plancha y regreso de pie.','Mejora el acondicionamiento, la coordinación y la resistencia general.','3','6–10');
add('funcionales','Dominadas con banda','Espalda y brazos','dominadas-con-banda','Realiza una dominada usando una banda para reducir parte del peso corporal.','Ayuda a desarrollar fuerza de tracción y progresar hacia la dominada libre.','3','5–8');
add('funcionales','Ejercicio de gusano','Core, hombros y piernas','ejercicio-de-gusano','Camina con las manos hasta una plancha y regresa acercando los pies.','Activa el cuerpo completo y combina movilidad con estabilidad.','3','6–8');
add('funcionales','Empuje de trineo','Piernas y core','empuje-de-trineo','Empuja el trineo caminando con el tronco firme y pasos continuos.','Desarrolla fuerza de piernas, potencia y capacidad cardiovascular.','4','15–20 m');
add('funcionales','Extensión de tríceps con banda','Tríceps','extension-de-triceps-con-banda','Extiende los codos contra la banda manteniendo los brazos estables.','Fortalece tríceps con resistencia gradual.','3','12–15');
add('funcionales','Flexión de hombro con banda','Hombro','flexion-de-hombro-con-banda','Eleva el brazo al frente contra la resistencia de la banda.','Mejora fuerza y control de elevación del hombro.','3','10–12');
add('funcionales','Fondo de tríceps en cajón','Tríceps y hombros','fondo-de-triceps-cajon','Flexiona y extiende los codos con las manos apoyadas en un cajón estable.','Fortalece tríceps y control del tren superior.','3','8–12');
add('funcionales','Jalón con mancuerna','Espalda y core','jalon-con-mancuerna','Desde una plancha, lleva una mancuerna hacia el costado alternando brazos.','Integra fuerza de espalda con estabilidad del core y hombros.','3','8 por lado');
add('funcionales','Rodilla al pecho sobre fitball','Core y hombros','rodilla-al-pecho-sobre-fitball','Acerca las rodillas al pecho con los pies apoyados sobre el balón.','Mejora estabilidad del tronco y control de hombros.','3','8–12');
add('funcionales','Salto a cajón','Piernas y potencia','salto-a-cajon','Salta con ambos pies hacia una superficie estable y aterriza con control.','Desarrolla potencia de piernas y coordinación de aterrizaje.','3','5–8');
add('funcionales','Salto en minitrampolín','Cardio y piernas','salto-en-minitrampolin','Realiza saltos suaves y controlados sobre el minitrampolín.','Favorece coordinación, equilibrio y acondicionamiento cardiovascular.','3','30 s');
add('funcionales','Salto lateral en step','Piernas y agilidad','salto-lateral-en-step','Desplázate lateralmente sobre el step con apoyos controlados.','Mejora agilidad, coordinación lateral y resistencia de piernas.','3','20–30 s');
add('funcionales','Salto vertical','Piernas y potencia','salto-vertical','Impúlsate hacia arriba y aterriza amortiguando con cadera, rodillas y tobillos.','Desarrolla potencia y enseña control en el aterrizaje.','3','6–8');
add('funcionales','Sentadilla rusa con vuelo','Piernas y hombros','setadilla-rusa-con-vuelo','Combina una sentadilla con elevación del implemento al ponerse de pie.','Integra piernas, hombros y coordinación de cuerpo completo.','3','8–12');
add('funcionales','Snatch con mancuerna','Cuerpo completo','snatch-con-mancuerna','Lleva la mancuerna desde abajo hasta encima de la cabeza en un movimiento continuo.','Desarrolla potencia, coordinación y control unilateral.','3','6 por lado');
add('funcionales','Step up con llanta y sentadilla','Piernas y coordinación','step-up-con-llanta-descenso-y-sentadilla','Sube al apoyo, desciende con control y enlaza una sentadilla.','Trabaja fuerza de piernas, equilibrio y cambios de nivel.','3','8 por lado');
add('funcionales','Wall ball','Piernas, core y hombros','wall-ball','Realiza una sentadilla y lanza el balón hacia un objetivo en la pared.','Integra fuerza, potencia y resistencia cardiovascular.','3','10–15');

// Cardio
add('cardio','Bicicleta spinning estática','Sistema cardiovascular y piernas','bicileta-spining-estatica','Pedalea con la bicicleta ajustada a tu altura y una resistencia sostenible.','Mejora la capacidad cardiovascular y la resistencia de piernas.','1','10–30 min');
add('cardio','Elíptica magnética','Sistema cardiovascular','eliptica-magnetica','Mueve brazos y piernas de forma continua sobre la elíptica.','Favorece el acondicionamiento con un patrón de bajo impacto.','1','10–30 min');
add('cardio','Máquina escaladora','Piernas y cardio','maquina-escaladora','Sube escalones de forma continua manteniendo el tronco erguido.','Mejora resistencia cardiovascular y fuerza-resistencia de piernas.','1','8–20 min');

let activeCategory = 'miembro-inferior';
let modalExercise = null;
const saved = (() => { try { return JSON.parse(localStorage.getItem('farallonesRoutineV1') || '[]'); } catch { return []; } })();
let routine = saved.filter(item => exercises.some(ex => ex.id === item.id)).map(item => ({id:item.id, sets:Number(item.sets)||3, reps:item.reps||'10–12', completed:Boolean(item.completed)}));
const savedPatients = (() => { try { return JSON.parse(localStorage.getItem('farallonesPatientsV1') || '[]'); } catch { return []; } })();
let patients = Array.isArray(savedPatients) ? savedPatients : [];
let currentPatientId = null;
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('is-visible');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}
function persist() { localStorage.setItem('farallonesRoutineV1', JSON.stringify(routine)); }
function findExercise(id) { return exercises.find(item => item.id === id); }
function isAdded(id) { return routine.some(item => item.id === id); }

function renderCategories() {
  $('#categories').innerHTML = categoryInfo.map(cat => `<button type="button" class="category ${cat.id===activeCategory?'is-active':''}" data-category="${cat.id}" role="tab" aria-selected="${cat.id===activeCategory}">${cat.label}</button>`).join('');
  $$('[data-category]').forEach(button => button.addEventListener('click', () => { activeCategory=button.dataset.category; renderCategories(); renderExercises(); }));
}
function renderExercises() {
  const category = categoryInfo.find(item => item.id===activeCategory);
  const list = exercises.filter(item => item.zone===activeCategory);
  $('#categoryTitle').textContent = category.label.toUpperCase();
  $('#categoryDescription').textContent = category.desc;
  $('#exerciseCount').textContent = String(list.length).padStart(2,'0');
  $('#totalCount').textContent = exercises.length;
  $('#exerciseGrid').innerHTML = list.map((item,index) => `<article class="exercise-card ${isAdded(item.id)?'is-added':''}">
    <button class="card-image" type="button" data-guide="${item.id}" aria-label="Ver guía de ${item.name}"><img src="${item.image}" alt="${item.name}" loading="lazy"><span>${String(index+1).padStart(2,'0')}</span><b>VER GUÍA ↗</b></button>
    <div class="exercise-body"><p class="exercise-muscle">${item.muscle}</p><h3>${item.name}</h3><p>${item.description}</p>
      <div class="exercise-meta"><span><small>Series</small><strong>${item.sets}</strong></span><span><small>Repeticiones</small><strong>${item.reps}</strong></span></div>
      <div class="card-actions"><button type="button" class="add-button" data-add="${item.id}">${isAdded(item.id)?'✓ En mi rutina':'＋ Añadir a mi rutina'}</button><button type="button" class="info-button" data-guide="${item.id}" aria-label="Información de ${item.name}">i</button></div>
    </div></article>`).join('');
  $$('[data-add]').forEach(button => button.addEventListener('click', () => toggleExercise(button.dataset.add)));
  $$('[data-guide]').forEach(button => button.addEventListener('click', () => openGuide(button.dataset.guide)));
}

function toggleExercise(id) {
  const index = routine.findIndex(item => item.id===id);
  if (index>=0) { routine.splice(index,1); showToast('Ejercicio eliminado de la rutina'); }
  else { const ex=findExercise(id); routine.push({id,sets:Number(ex.sets)||3,reps:ex.reps,completed:false}); showToast('Ejercicio añadido a tu rutina'); }
  persist(); renderExercises(); renderRoutine();
}

const stretchSets = {
  lower: [
    ['assets/photos/estiramientos/miembro-inferior/img-7747.jpg','Cadena posterior'],
    ['assets/photos/estiramientos/miembro-inferior/img-7757.jpg','Aductores'],
    ['assets/photos/estiramientos/cadera-y-pelvis/img-9017.jpg','Cadera y pelvis'],
    ['assets/photos/estiramientos/tobillo-y-pie/img-9026.jpg','Pantorrilla']
  ],
  upper: [
    ['assets/photos/estiramientos/miembro-superior/img-8813.jpg','Hombro posterior'],
    ['assets/photos/estiramientos/miembro-superior/img-8815.jpg','Tríceps y hombro'],
    ['assets/photos/estiramientos/miembro-superior/img-8819.jpg','Espalda alta'],
    ['assets/photos/estiramientos/miembro-superior/img-8967.jpg','Pectoral']
  ],
  core: [
    ['assets/photos/estiramientos/tronco-y-core/img-8973.jpg','Espalda y tronco'],
    ['assets/photos/estiramientos/tronco-y-core/img-8979.jpg','Costado del tronco'],
    ['assets/photos/estiramientos/tronco-y-core/img-8981.jpg','Abdomen'],
    ['assets/photos/estiramientos/tronco-y-core/img-8982.jpg','Zona lumbar']
  ]
};
function routineZones() { return [...new Set(routine.map(item => findExercise(item.id)?.zone).filter(Boolean))]; }
function recoveryImages() {
  const zones=routineZones();
  const result=[];
  if (zones.some(z=>['miembro-inferior','cardio','funcionales'].includes(z))) result.push(...stretchSets.lower.slice(0,2));
  if (zones.some(z=>['espalda','pectoral','hombro','biceps','triceps','funcionales'].includes(z))) result.push(...stretchSets.upper.slice(0,2));
  if (zones.includes('core')) result.push(...stretchSets.core.slice(0,2));
  return (result.length?result:[stretchSets.lower[0],stretchSets.upper[0],stretchSets.core[0]]).slice(0,4);
}
function renderRoutine() {
  $('#routineCount').textContent = routine.length;
  $('#routineEmpty').hidden = routine.length>0;
  const done=routine.filter(item=>item.completed).length;
  const percent=routine.length?Math.round(done/routine.length*100):0;
  $('#progressPercent').textContent=`${percent}%`; $('#progressRing').style.setProperty('--progress',percent);
  $('#routineSummary').textContent = routine.length ? `${routine.length} ejercicio${routine.length===1?'':'s'} · ${done} completado${done===1?'':'s'}` : 'Aún no hay ejercicios añadidos';
  $('#routineList').innerHTML = routine.map((item,index) => { const ex=findExercise(item.id); return `<article class="routine-row ${item.completed?'is-complete':''}">
    <label class="complete-check"><input type="checkbox" data-complete="${item.id}" ${item.completed?'checked':''}><span>✓</span></label>
    <img src="${ex.image}" alt="" loading="lazy"><div class="routine-name"><small>${String(index+1).padStart(2,'0')} · ${categoryInfo.find(c=>c.id===ex.zone)?.label}</small><strong>${ex.name}</strong><span>${ex.muscle}</span></div>
    <label class="routine-field"><span>Series</span><input type="number" min="1" max="20" value="${item.sets}" data-sets="${item.id}" aria-label="Series de ${ex.name}"></label>
    <label class="routine-field reps-field"><span>Repeticiones / tiempo</span><input type="text" value="${item.reps}" data-reps="${item.id}" aria-label="Repeticiones de ${ex.name}"></label>
    <button class="remove-routine" type="button" data-remove="${item.id}" aria-label="Eliminar ${ex.name}">×</button>
  </article>`; }).join('');
  $$('[data-complete]').forEach(input=>input.addEventListener('change',()=>updateRoutineItem(input.dataset.complete,'completed',input.checked)));
  $$('[data-sets]').forEach(input=>input.addEventListener('change',()=>updateRoutineItem(input.dataset.sets,'sets',Math.max(1,Number(input.value)||1))));
  $$('[data-reps]').forEach(input=>input.addEventListener('change',()=>updateRoutineItem(input.dataset.reps,'reps',input.value.trim()||'10')));
  $$('[data-remove]').forEach(button=>button.addEventListener('click',()=>toggleExercise(button.dataset.remove)));
  const zones=routineZones();
  $('#warmupText').textContent = zones.includes('miembro-inferior') || zones.includes('cardio') ? 'Camina o pedalea 4–5 minutos. Moviliza tobillos, rodillas y cadera; luego realiza una serie ligera del primer ejercicio.' : zones.length ? 'Eleva el pulso 4–5 minutos. Moviliza hombros, codos y columna; luego realiza una serie ligera del primer ejercicio.' : 'Haz movilidad articular suave, eleva progresivamente el pulso y realiza una serie de aproximación sin peso o con carga ligera.';
  $('#stretchGallery').innerHTML = recoveryImages().map(([src,label])=>`<figure><img src="${src}" alt="Ejemplo de estiramiento: ${label}" loading="lazy"><figcaption>${label}<span>20–30 s</span></figcaption></figure>`).join('');
}
function updateRoutineItem(id,key,value) { const item=routine.find(row=>row.id===id); if(!item)return; item[key]=value; persist(); renderRoutine(); }

function openGuide(id) {
  const ex=findExercise(id); if(!ex)return; modalExercise=id;
  $('#guideImage').src=ex.image; $('#guideImage').alt=ex.name; $('#guideZone').textContent=`${categoryInfo.find(c=>c.id===ex.zone)?.label} · ${ex.muscle}`;
  $('#guideTitle').textContent=ex.name; $('#guideDescription').textContent=ex.description; $('#guideSteps').innerHTML=ex.steps.map(step=>`<li>${step}</li>`).join(''); $('#guideBenefit').textContent=ex.benefit;
  $('#modalAdd').textContent=isAdded(id)?'✓ Quitar de mi rutina':'＋ Añadir a mi rutina';
  $('#guideModal').classList.add('is-open'); $('#guideModal').setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeGuide() { $('#guideModal').classList.remove('is-open'); $('#guideModal').setAttribute('aria-hidden','true'); document.body.style.overflow=''; modalExercise=null; }

const escapeHTML = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
function localDateTimeValue() { const now=new Date(); return new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,16); }
function savePatients() { localStorage.setItem('farallonesPatientsV1',JSON.stringify(patients)); }
function formatDate(value, includeTime=true) {
  if(!value)return 'Sin fecha'; const date=new Date(value); if(Number.isNaN(date.getTime()))return value;
  return new Intl.DateTimeFormat('es-CO',{day:'2-digit',month:'short',year:'numeric',...(includeTime?{hour:'2-digit',minute:'2-digit'}:{})}).format(date);
}
function ageFromBirth(value) { if(!value)return ''; const birth=new Date(`${value}T12:00:00`); const now=new Date(); let age=now.getFullYear()-birth.getFullYear(); if(now < new Date(now.getFullYear(),birth.getMonth(),birth.getDate()))age--; return age>=0?`${age} años`:''; }
function latestControl(patient) { return [...(patient.controls||[])].sort((a,b)=>new Date(b.date)-new Date(a.date))[0]||null; }
function initials(name) { return name.trim().split(/\s+/).slice(0,2).map(part=>part[0]?.toUpperCase()).join('')||'P'; }
function vitalValue(control,key,unit='') { const value=control?.[key]; return value!==''&&value!=null?`${escapeHTML(value)}${unit}`:'—'; }
function pressureValue(control) { return control?.systolic||control?.diastolic?`${escapeHTML(control.systolic||'—')}/${escapeHTML(control.diastolic||'—')}`:'—'; }
function assessControl(patient,control) {
  const hasMeasurement=control&&['systolic','diastolic','heartRate','spo2','respiratoryRate','temperature','pain'].some(key=>String(control[key]??'').trim()!=='');
  if(!hasMeasurement)return {level:'neutral',title:'Sin datos suficientes',summary:'Registra al menos un signo vital para generar una valoración orientativa.',details:[]};
  const age=patient.birthDate?Number(ageFromBirth(patient.birthDate).replace(/\D/g,'')):null;
  if(age!=null&&age<18)return {level:'neutral',title:'Requiere valoración pediátrica',summary:'Los rangos automáticos de esta herramienta corresponden a adultos en reposo.',details:['Interpreta los valores con rangos pediátricos según edad y criterio profesional.']};
  const findings=[]; let score=0;
  const flag=(level,text)=>{ findings.push(text); score=Math.max(score,{expected:0,review:1,priority:2,urgent:3}[level]??0); };
  const clinicalText=`${patient.pathologies||''} ${patient.precautions||''}`.toLocaleLowerCase('es'); const contextNotes=[];
  const sys=Number(control.systolic),dia=Number(control.diastolic),hr=Number(control.heartRate),spo2=Number(control.spo2),rr=Number(control.respiratoryRate),temp=Number(control.temperature),pain=Number(control.pain);
  if(control.systolic||control.diastolic){
    if((sys&&sys>180)||(dia&&dia>120))flag('urgent','Presión arterial en rango severamente elevado. Repite la medición y aplica el protocolo de atención; con síntomas agudos requiere atención de emergencia.');
    else if((sys&&sys>=140)||(dia&&dia>=90))flag('priority','Presión arterial por encima del rango de referencia (categoría alta). Revisa antes de iniciar ejercicio.');
    else if((sys&&sys>=130)||(dia&&dia>=80))flag('review','Presión arterial en rango elevado para un adulto. Confirma con una nueva medición y criterio clínico.');
    else if((sys&&sys>=120)&&(dia&&dia<80))flag('review','Presión sistólica elevada; conviene repetir y registrar la medición.');
    else if((sys&&sys<90)||(dia&&dia<60))flag('review','Presión arterial por debajo del rango habitual; correlaciona con síntomas y antecedentes.');
  }
  if(control.heartRate&&(hr<60||hr>100))flag('review',`Frecuencia cardiaca fuera del rango habitual de reposo (60–100 lpm). ${hr<60?'Puede variar en personas entrenadas;':'Repite tras reposo;'} interpreta según el contexto.`);
  if(control.respiratoryRate&&(rr<12||rr>18))flag('review','Frecuencia respiratoria fuera del rango habitual de reposo (12–18 rpm).');
  if(control.temperature&&(temp<36.5||temp>37.3))flag('review','Temperatura fuera del rango habitual de referencia (36,5–37,3 °C).');
  if(control.spo2){
    if(spo2<=88)flag('urgent','Saturación de oxígeno de 88% o menor. Verifica la lectura y busca valoración inmediata según el estado clínico.');
    else if(spo2<=92)flag('priority','Saturación de oxígeno de 92% o menor. Repite la lectura y contacta al profesional responsable.');
    else if(spo2<95)flag('review','Saturación por debajo del rango habitual de 95–100%; considera altura, enfermedad pulmonar y precisión del equipo.');
  }
  if(control.pain){ if(pain>=7)flag('priority','Dolor percibido alto (7/10 o más). La rutina debe revisarse antes de iniciar.'); else if(pain>=4)flag('review','Dolor percibido moderado; adapta la sesión según valoración profesional.'); }
  if(/hipertensi|presi[oó]n alta/.test(clinicalText)&&(control.systolic||control.diastolic))contextNotes.push('Existe antecedente de hipertensión: compara la lectura con la meta individual indicada por el profesional tratante.');
  if(/epoc|asma|pulmon|respirator/.test(clinicalText)&&control.spo2)contextNotes.push('Existe antecedente respiratorio: la meta de saturación puede ser individual y debe prevalecer la indicación médica.');
  if(/cardi|arrit|coraz[oó]n/.test(clinicalText)&&control.heartRate)contextNotes.push('Existe antecedente cardiovascular: interpreta la frecuencia cardiaca y la intensidad de ejercicio según el plan clínico individual.');
  if(/diabet|glucosa|glicemia/.test(clinicalText))contextNotes.push('Existe antecedente relacionado con glucosa: aplica el protocolo de control indicado antes y después del ejercicio.');
  const levels=['expected','review','priority','urgent']; const level=levels[score];
  const titles={expected:'Dentro de parámetros habituales',review:'Requiere revisión',priority:'Valor fuera de referencia',urgent:'Atención prioritaria'};
  const summaries={expected:'Los valores registrados no muestran desviaciones frente a los rangos adultos configurados.',review:'Hay uno o más datos para confirmar o interpretar antes de definir la intensidad del ejercicio.',priority:'Hay datos que requieren valoración profesional antes de iniciar o continuar el entrenamiento.',urgent:'Hay un dato de posible atención inmediata. No inicies la rutina hasta aplicar el protocolo profesional correspondiente.'};
  return {level,title:titles[level],summary:summaries[level],details:[...(findings.length?findings:['Los valores registrados están dentro de los rangos de referencia configurados.']),...contextNotes]};
}
let currentEstimate=null;
function estimateRoutineForPatient(patient) {
  const control=latestControl(patient),assessment=assessControl(patient,control),age=patient.birthDate?Number(ageFromBirth(patient.birthDate).replace(/\D/g,'')):null;
  if(assessment.level==='urgent'||assessment.level==='priority')return {blocked:true,intensity:'No iniciar',title:'Requiere valoración antes de entrenar',summary:'La propuesta automática se ha detenido porque el último control contiene un valor prioritario.',notes:['Repite y confirma la medición.','Aplica el protocolo del servicio y obtén autorización profesional antes de asignar ejercicio.'],items:[]};
  if(assessment.level==='neutral')return {blocked:true,intensity:'Pendiente',title:'Faltan datos para estimar la rutina',summary:'Registra signos vitales y confirma que los rangos aplicables correspondan al paciente.',notes:['La estimación automática está configurada para adultos.'],items:[]};
  const text=`${patient.pathologies||''} ${patient.precautions||''}`.toLocaleLowerCase('es');
  const knee=/rodilla|menisc|ligament|gonart|patel|r[oó]tula/.test(text),shoulder=/hombro|manguito|supraesp|clav[ií]cul/.test(text),back=/lumbar|columna|hernia disc|ci[aá]tica|lumbalg|espalda/.test(text),cardio=/hipertensi|cardi|arrit|coraz[oó]n|infarto/.test(text),resp=/epoc|asma|pulmon|respirator/.test(text),diabetes=/diabet|glucosa|glicemia/.test(text);
  const goal=patient.trainingGoal||'movilidad',level=patient.activityLevel||'inicial';
  const goalPools={movilidad:['bicicleta-spinning-estatica','abductores-en-maquina','remo-horizontal-en-polea','dead-bug-alternado','puente-con-mancuerna'],acondicionamiento:['bicicleta-spinning-estatica','eliptica-magnetica','prensa-inclinada','remo-horizontal-en-polea','press-plano-en-maquina','dead-bug-alternado'],fuerza:['prensa-inclinada','hip-thrust-en-maquina','remo-horizontal-en-polea','press-plano-en-maquina','dead-bug-alternado'],resistencia:['bicicleta-spinning-estatica','eliptica-magnetica','abductores-en-maquina','remo-horizontal-en-polea','extension-de-triceps-en-polea']};
  let candidateIds=[...(goalPools[goal]||goalPools.movilidad)];
  const notes=[`Objetivo registrado: ${goal}. Nivel informado: ${level}.`];
  if(cardio||resp){candidateIds=['bicicleta-spinning-estatica','abductores-en-maquina','curl-de-biceps-con-mancuernas','extension-de-triceps-en-polea','dead-bug-alternado'];notes.push('Propuesta de baja intensidad, con pausas amplias y control de síntomas y signos vitales.');}
  if(knee){candidateIds=candidateIds.filter(id=>!['bicicleta-spinning-estatica','prensa-inclinada','puente-con-mancuerna'].includes(id));candidateIds.push('curl-de-biceps-en-polea-alta','extension-de-triceps-en-polea');notes.push('Se excluyeron saltos, sentadillas y ejercicios dominantes de rodilla por la condición registrada.');}
  if(shoulder){candidateIds=candidateIds.filter(id=>!['remo-horizontal-en-polea','press-plano-en-maquina','curl-de-biceps-con-mancuernas','curl-de-biceps-en-polea-alta','extension-de-triceps-en-polea'].includes(id));candidateIds.push('hip-thrust-en-maquina','curl-femoral-sentado-en-maquina','extension-de-rodilla-en-maquina');notes.push('Se excluyeron empujes, tracciones y movimientos elevados del hombro.');}
  if(back){candidateIds=candidateIds.filter(id=>!['dead-bug-alternado','puente-con-mancuerna','remo-horizontal-en-polea'].includes(id));candidateIds.push('abductores-en-maquina','curl-femoral-sentado-en-maquina');notes.push('Se priorizaron ejercicios guiados y se redujeron flexiones o rotaciones de tronco.');}
  if(diabetes)notes.push('Verifica el protocolo individual de glucosa, hidratación y medicación antes y después de la sesión.');
  if(age!=null&&age>=65)notes.push('Se propone menor volumen inicial y transiciones controladas por la edad registrada.');
  if(assessment.level==='review')notes.unshift('El último control requiere revisión: confirma los datos antes de aprobar la propuesta.');
  const unique=[...new Set(candidateIds)].map(findExercise).filter(Boolean).slice(0,assessment.level==='review'?4:5);
  const sets=(assessment.level==='review'||(age!=null&&age>=65)||level==='inicial')?2:level==='avanzado'?4:3;
  const strengthReps=goal==='fuerza'?'8–10':goal==='acondicionamiento'||goal==='resistencia'?'12–15':'10–12';
  const items=unique.map(ex=>({id:ex.id,sets:ex.zone==='cardio'?1:sets,reps:ex.zone==='cardio'?'8–12 min suave':assessment.level==='review'?'8–10':strengthReps,completed:false}));
  const intensity=assessment.level==='review'?'Baja / supervisada':level==='inicial'?'Baja a moderada':level==='avanzado'?'Moderada':'Baja a moderada';
  return {blocked:false,intensity,title:'Borrador para revisión del fisioterapeuta',summary:`Propuesta de ${items.length} ejercicios generada a partir del último control, las patologías, el nivel, el objetivo y las restricciones registradas.`,notes,items};
}
function renderEstimatedRoutine(patient) {
  const estimate=estimateRoutineForPatient(patient); currentEstimate=estimate; $('#estimatedRoutine').dataset.blocked=String(estimate.blocked); $('#estimatedRoutineTitle').textContent=estimate.title; $('#estimatedIntensity').textContent=estimate.intensity; $('#estimatedRoutineSummary').textContent=estimate.summary; $('#estimatedRoutineNotes').innerHTML=estimate.notes.map(note=>`<li>${escapeHTML(note)}</li>`).join('');
  $('#estimatedRoutineList').innerHTML=estimate.items.length?`<div class="estimate-list">${estimate.items.map(item=>{const ex=findExercise(item.id);return `<div class="estimate-item"><div><strong>${escapeHTML(ex.name)}</strong><small>${escapeHTML(ex.muscle)}</small></div><span>${escapeHTML(item.sets)} × ${escapeHTML(item.reps)}</span></div>`}).join('')}</div>`:`<div class="estimated-blocked">No se generó una rutina automática. El fisioterapeuta debe revisar primero la ficha y el último control.</div>`;
  $('#loadEstimate').disabled=estimate.blocked; $('#approveEstimate').disabled=estimate.blocked;
}
function loadEstimateToBuilder() {
  if(!currentEstimate||currentEstimate.blocked)return; routine=currentEstimate.items.map(item=>({...item})); persist(); renderExercises(); renderRoutine(); closePatientRecord(); document.querySelector('#mi-rutina').scrollIntoView({behavior:'smooth'}); showToast('Propuesta cargada para revisión');
}
function approveEstimatedRoutine() {
  const patient=patients.find(item=>item.id===currentPatientId); if(!patient||!currentEstimate||currentEstimate.blocked)return;
  patient.assignedRoutine=currentEstimate.items.map(item=>({...item})); patient.routineAssignedAt=new Date().toISOString(); patient.updatedAt=new Date().toISOString(); savePatients(); renderAssignedRoutine(patient); renderPatients($('#patientSearch').value); showToast('Propuesta aprobada y asignada');
}
function renderPatients(filter='') {
  const term=filter.trim().toLocaleLowerCase('es');
  const list=patients.filter(patient=>!term||patient.name.toLocaleLowerCase('es').includes(term)||(patient.document||'').toLocaleLowerCase('es').includes(term));
  $('#patientCount').textContent=patients.length; $('#patientEmpty').hidden=patients.length>0;
  $('#patientGrid').innerHTML=list.map(patient=>{ const last=latestControl(patient); const assessment=assessControl(patient,last); return `<article class="patient-card">
    <div class="patient-card-head"><span class="patient-avatar">${escapeHTML(initials(patient.name))}</span><div class="patient-identity"><strong>${escapeHTML(patient.name)}</strong><span>${escapeHTML(patient.document||'Sin identificación')}${patient.birthDate?` · ${escapeHTML(ageFromBirth(patient.birthDate))}`:''}</span></div><span class="patient-status-badge ${assessment.level}">${escapeHTML(assessment.title)}</span></div>
    <div class="patient-pathology"><span>Patologías / diagnósticos</span><p>${escapeHTML(patient.pathologies)}</p></div>
    <div class="latest-mini-vitals"><div><span>Presión</span><strong>${pressureValue(last)}</strong></div><div><span>F. cardiaca</span><strong>${vitalValue(last,'heartRate')}</strong></div><div><span>SpO₂</span><strong>${vitalValue(last,'spo2','%')}</strong></div><div><span>Dolor</span><strong>${vitalValue(last,'pain','/10')}</strong></div></div>
    <div class="patient-card-footer"><span>${last?`Último control: ${escapeHTML(formatDate(last.date,false))}`:'Sin controles de signos vitales'}</span><button type="button" data-patient-record="${patient.id}">Ver seguimiento →</button></div>
  </article>`}).join('');
  $$('[data-patient-record]').forEach(button=>button.addEventListener('click',()=>openPatientRecord(button.dataset.patientRecord)));
  renderPatientOptions();
}
function renderPatientOptions() {
  const select=$('#routinePatientSelect'); if(!select)return; const selected=select.value;
  select.innerHTML='<option value="">Seleccionar paciente</option>'+patients.map(patient=>`<option value="${patient.id}">${escapeHTML(patient.name)}${patient.document?` · ${escapeHTML(patient.document)}`:''}</option>`).join('');
  if(patients.some(patient=>patient.id===selected))select.value=selected;
}
function assignRoutineToPatient() {
  const patient=patients.find(item=>item.id===$('#routinePatientSelect').value);
  if(!patient){showToast('Selecciona un paciente');return;} if(!routine.length){showToast('Añade ejercicios antes de asignar la rutina');return;}
  patient.assignedRoutine=routine.map(item=>({id:item.id,sets:item.sets,reps:item.reps,completed:false})); patient.routineAssignedAt=new Date().toISOString(); patient.updatedAt=new Date().toISOString();
  savePatients(); renderPatients($('#patientSearch').value); showToast(`Rutina asignada a ${patient.name}`); openPatientRecord(patient.id);
}
function renderAssignedRoutine(patient) {
  const assigned=(patient.assignedRoutine||[]).filter(item=>findExercise(item.id)); const completed=assigned.filter(item=>item.completed).length;
  $('#assignedRoutineTitle').textContent=assigned.length?`${assigned.length} ejercicios · ${completed} completados${patient.routineAssignedAt?` · ${formatDate(patient.routineAssignedAt,false)}`:''}`:'Sin rutina asignada';
  $('#assignedRoutineList').innerHTML=assigned.length?`<div class="assigned-patient-list">${assigned.map(item=>{const ex=findExercise(item.id);return `<div class="assigned-item"><label><input type="checkbox" data-assigned-complete="${item.id}" ${item.completed?'checked':''}><span>✓</span></label><div><strong>${escapeHTML(ex.name)}</strong><small>${escapeHTML(ex.muscle)}</small></div><span>${escapeHTML(item.sets)} × ${escapeHTML(item.reps)}</span></div>`}).join('')}</div>`:'<p class="assigned-empty">Crea una rutina en la sección “Mi rutina” y asígnala desde el selector de paciente.</p>';
  $$('[data-assigned-complete]').forEach(input=>input.addEventListener('change',()=>{ const row=patient.assignedRoutine.find(item=>item.id===input.dataset.assignedComplete); if(row){row.completed=input.checked;patient.updatedAt=new Date().toISOString();savePatients();renderAssignedRoutine(patient);} }));
}
function openPatientForm(patient=null) {
  const form=$('#patientForm'); form.reset();
  $('#patientId').value=patient?.id||''; $('#patientFormTitle').textContent=patient?'EDITAR PACIENTE':'REGISTRAR PACIENTE'; $('#savePatientButton').textContent=patient?'Guardar cambios':'Guardar paciente';
  const initialVitals=form.querySelectorAll('fieldset')[2]; initialVitals.hidden=Boolean(patient);
  if(patient){ ['name','document','birthDate','professional','pathologies','precautions','activityLevel','trainingGoal'].forEach(key=>{ form.elements[key].value=patient[key]||form.elements[key].value; }); }
  else { $('#initialControlDate').value=localDateTimeValue(); }
  $('#patientFormModal').classList.add('is-open'); $('#patientFormModal').setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; setTimeout(()=>form.elements.name.focus(),50);
}
function closePatientForm() { $('#patientFormModal').classList.remove('is-open'); $('#patientFormModal').setAttribute('aria-hidden','true'); if(!$('#patientRecordModal').classList.contains('is-open'))document.body.style.overflow=''; }
function controlFromData(data,dateKey='controlDate',notesKey='controlNotes') {
  return {id:`c-${Date.now()}-${Math.random().toString(16).slice(2)}`,date:data.get(dateKey)||localDateTimeValue(),systolic:data.get('systolic')||'',diastolic:data.get('diastolic')||'',heartRate:data.get('heartRate')||'',spo2:data.get('spo2')||'',respiratoryRate:data.get('respiratoryRate')||'',temperature:data.get('temperature')||'',weight:data.get('weight')||'',pain:data.get('pain')||'',notes:data.get(notesKey)||''};
}
function controlHasData(control) { return ['systolic','diastolic','heartRate','spo2','respiratoryRate','temperature','weight','pain','notes'].some(key=>String(control[key]||'').trim()); }
function submitPatient(event) {
  event.preventDefault(); const data=new FormData(event.currentTarget); const id=data.get('patientId'); const existing=patients.find(patient=>patient.id===id);
  const base={name:data.get('name').trim(),document:data.get('document').trim(),birthDate:data.get('birthDate'),professional:data.get('professional').trim(),activityLevel:data.get('activityLevel')||'inicial',trainingGoal:data.get('trainingGoal')||'movilidad',pathologies:data.get('pathologies').trim(),precautions:data.get('precautions').trim()};
  let savedPatient=existing;
  if(existing){ Object.assign(existing,base,{updatedAt:new Date().toISOString()}); showToast('Datos del paciente actualizados'); }
  else { const first=controlFromData(data); savedPatient={id:`p-${Date.now()}-${Math.random().toString(16).slice(2)}`,...base,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),controls:controlHasData(first)?[first]:[]}; patients.unshift(savedPatient); showToast('Paciente registrado y valorado'); }
  savePatients(); renderPatients($('#patientSearch').value); closePatientForm(); openPatientRecord(savedPatient.id);
}
function openPatientRecord(id) {
  const patient=patients.find(item=>item.id===id); if(!patient)return; currentPatientId=id;
  $('#recordPatientName').textContent=patient.name; const meta=[patient.document&&`ID: ${patient.document}`,ageFromBirth(patient.birthDate),patient.professional&&`Responsable: ${patient.professional}`].filter(Boolean); $('#recordPatientMeta').textContent=meta.join(' · ')||'Sin información adicional';
  $('#recordPathologies').textContent=patient.pathologies||'Sin información'; $('#recordPrecautions').textContent=patient.precautions||'Sin restricciones registradas';
  renderPatientControls(patient); renderEstimatedRoutine(patient); renderAssignedRoutine(patient); $('#controlForm').reset(); $('#newControlDate').value=localDateTimeValue();
  $('#patientRecordModal').classList.add('is-open'); $('#patientRecordModal').setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closePatientRecord() { $('#patientRecordModal').classList.remove('is-open'); $('#patientRecordModal').setAttribute('aria-hidden','true'); currentPatientId=null; document.body.style.overflow=''; }
function renderPatientControls(patient) {
  const controls=[...(patient.controls||[])].sort((a,b)=>new Date(b.date)-new Date(a.date)); const last=controls[0];
  const assessment=assessControl(patient,last); $('#patientAssessment').dataset.level=assessment.level; $('#assessmentStatus').textContent=assessment.title; $('#assessmentSummary').textContent=assessment.summary; $('#assessmentDetails').innerHTML=assessment.details.map(detail=>`<li>${escapeHTML(detail)}</li>`).join('');
  $('#latestControlDate').textContent=last?formatDate(last.date):'Sin controles registrados';
  const vitalDefs=[['Presión',pressureValue(last),'mmHg'],['F. cardiaca',vitalValue(last,'heartRate'),'lpm'],['Saturación O₂',vitalValue(last,'spo2'),'%'],['F. respiratoria',vitalValue(last,'respiratoryRate'),'rpm'],['Temperatura',vitalValue(last,'temperature'),'°C'],['Peso',vitalValue(last,'weight'),'kg'],['Dolor',vitalValue(last,'pain'),'/10']];
  $('#latestVitals').innerHTML=last?vitalDefs.map(([label,value,unit])=>`<div class="vital-card"><span>${label}</span><strong>${value}</strong><small>${value==='—'?'':unit}</small></div>`).join(''):'<p class="no-vitals">Añade un control para visualizar los últimos signos vitales.</p>';
  $('#controlCount').textContent=`${controls.length} control${controls.length===1?'':'es'}`;
  $('#controlHistory').innerHTML=controls.length?controls.map(control=>`<article class="control-entry"><div class="control-date"><strong>${escapeHTML(formatDate(control.date,false))}</strong><span>${escapeHTML(formatDate(control.date).split(',').pop().trim())}</span></div><div class="control-values"><span>PA ${pressureValue(control)} mmHg</span><span>FC ${vitalValue(control,'heartRate')} lpm</span><span>SpO₂ ${vitalValue(control,'spo2')}%</span><span>FR ${vitalValue(control,'respiratoryRate')} rpm</span><span>T° ${vitalValue(control,'temperature')} °C</span><span>Peso ${vitalValue(control,'weight')} kg</span><span>Dolor ${vitalValue(control,'pain')}/10</span>${control.notes?`<p>${escapeHTML(control.notes)}</p>`:''}</div></article>`).join(''):'<p class="history-empty">No hay controles registrados todavía.</p>';
}
function submitControl(event) {
  event.preventDefault(); const patient=patients.find(item=>item.id===currentPatientId); if(!patient)return; const control=controlFromData(new FormData(event.currentTarget),'date','notes');
  if(!controlHasData(control)){showToast('Registra al menos un signo vital u observación');return;}
  patient.controls=patient.controls||[]; patient.controls.push(control); patient.updatedAt=new Date().toISOString(); savePatients(); renderPatientControls(patient); renderEstimatedRoutine(patient); renderPatients($('#patientSearch').value); event.currentTarget.reset(); $('#newControlDate').value=localDateTimeValue(); showToast('Nuevo control guardado y valoración actualizada');
}

document.addEventListener('DOMContentLoaded',()=>{
  renderCategories(); renderExercises(); renderRoutine(); renderPatients();
  $$('[data-close-guide]').forEach(el=>el.addEventListener('click',closeGuide));
  $('#openPatientForm').addEventListener('click',()=>openPatientForm());
  $$('[data-new-patient]').forEach(el=>el.addEventListener('click',()=>openPatientForm()));
  $$('[data-close-patient-form]').forEach(el=>el.addEventListener('click',closePatientForm));
  $$('[data-close-patient-record]').forEach(el=>el.addEventListener('click',closePatientRecord));
  $('#patientForm').addEventListener('submit',submitPatient);
  $('#controlForm').addEventListener('submit',submitControl);
  $('#patientSearch').addEventListener('input',event=>renderPatients(event.target.value));
  $('#editPatient').addEventListener('click',()=>{ const patient=patients.find(item=>item.id===currentPatientId); if(patient)openPatientForm(patient); });
  $('#assignRoutine').addEventListener('click',assignRoutineToPatient);
  $('#goToRoutineBuilder').addEventListener('click',closePatientRecord);
  $('#loadEstimate').addEventListener('click',loadEstimateToBuilder);
  $('#approveEstimate').addEventListener('click',approveEstimatedRoutine);
  $('#modalAdd').addEventListener('click',()=>{ if(modalExercise){ const id=modalExercise; toggleExercise(id); openGuide(id); } });
  $('#clearRoutine').addEventListener('click',()=>{ if(!routine.length)return; routine=[]; persist(); renderExercises(); renderRoutine(); showToast('Rutina vaciada'); });
  document.addEventListener('keydown',event=>{ if(event.key==='Escape'){ closeGuide(); closePatientForm(); closePatientRecord(); } });
});
