import fs from 'fs';

const pages = [
  'src/pages/index.astro',
  'src/pages/b2b-portal.astro',
  'src/pages/wood-library.astro',
  'src/pages/artisan.astro'
];

const dictionary = {
  'SYSTEM STATUS': 'ESTADO DEL SISTEMA',
  'Workshop Feed: Active': 'Transmisión Taller: Activa',
  'Current Load:': 'Carga Actual:',
  '84% Capacity': '84% Capacidad',
  'Lead Time:': 'Tiempo de Entrega:',
  '14 Business Days': '14 Días Hábiles',
  'Live Workshop Feed': 'Transmisión en Vivo',
  'REAL-TIME DATA': 'DATOS EN TIEMPO REAL',
  'LOGISTICS SYNC': 'SINC. LOGÍSTICA',
  'Structural Beam A12': 'Viga Estructural A12',
  'MILLING': 'FRESADO',
  'Fascia Panel X9': 'Panel de Fascia X9',
  'FINAL SPEC': 'ESPECIFICACIÓN FINAL',
  'Cladding Profile V2': 'Perfil de Revestimiento V2',
  'PENDING': 'PENDIENTE'
};

pages.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [en, es] of Object.entries(dictionary)) {
      content = content.split(en).join(es);
    }
    fs.writeFileSync(file, content);
  }
});
