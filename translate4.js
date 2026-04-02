import fs from 'fs';

const pages = [
  'src/pages/wood-library.astro',
  'src/pages/artisan.astro'
];

const dictionary = {
  'The Archive': 'El Archivo',
  'Wood Library': 'Catálogo de Madera',
  'Our curated selection of timber, tested for structural integrity and dimensional stability in extreme climates.': 'Nuestra selección curada de madera, probada en integridad estructural y estabilidad dimensional en climas extremos.',
  'Origin': 'Origen',
  'Usage': 'Uso',
  'White Oak': 'Roble Blanco',
  'Appalachian Range': 'Cordillera de los Apalaches',
  'Structural / External': 'Estructural / Exterior',
  'Walnut': 'Nogal',
  'Central USA': 'Centro de EE. UU.',
  'Fine Joinery': 'Ebanistería Fina',
  'Maple': 'Arce',
  'Northern Forests': 'Bosques del Norte',
  'Millwork / Floors': 'Carpintería / Suelos',
  'MILLED': 'PROCESADO'
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
