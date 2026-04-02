import fs from 'fs';

const pages = [
  'src/pages/index.astro',
  'src/pages/b2b-portal.astro',
  'src/pages/wood-library.astro',
  'src/pages/artisan.astro'
];

const dictionary = {
  'Species': 'Especie',
  'Oak Rigid Core': 'Núcleo Rígido de Roble',
  'Moisture': 'Humedad',
  '8% Certified': '8% Certificado',
  'Density': 'Densidad',
  'Finish': 'Acabado',
  'UV-Industrial Coat': 'Recubrimiento Industrial UV',
  'Grade': 'Grado',
  'Structural A1': 'Estructural A1',
  'Material Data': 'Datos de Material',
  'View Library': 'Ver Catálogo',
  'Volume Production': 'Producción por Volumen',
  'Start Project Review': 'Iniciar Revisión del Proyecto',
  'Explore System': 'Explorar Sistema',
  'Access Database': 'Acceder a la Base de Datos',
  'Specs': 'Especificaciones'
};

pages.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    for (const [en, es] of Object.entries(dictionary)) {
      content = content.split(en).join(es);
    }
    
    fs.writeFileSync(file, content);
    console.log(`Translated ${file}`);
  }
});
