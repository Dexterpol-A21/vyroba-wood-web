import fs from 'fs';
import path from 'path';

const pages = [
  'src/pages/index.astro',
  'src/pages/b2b-portal.astro',
  'src/pages/wood-library.astro',
  'src/pages/artisan.astro'
];

const dictionary = {
  'Industrial Precision | Natural Essence': 'Precisión Industrial | Esencia Natural',
  'THE<br/>ENGINEERED<br/>ORGANIC': 'LO<br/>ORGÁNICO<br/>DISEÑADO',
  'THE<br />ENGINEERED<br />ORGANIC': 'LO<br />ORGÁNICO<br />DISEÑADO',
  'Desafiamos lo rústico. Nuestra arquitectura digital conquista el grano caótico con matemáticas rigurosas.': 'Desafiamos lo rústico. Nuestra arquitectura digital conquista el grano caótico con matemáticas rigurosas.',
  'Design Phase': 'Fase de Diseño',
  'Execution': 'Ejecución',
  'Verification': 'Verificación',
  'Blueprinting': 'Planificación',
  'Automated Milling': 'Fresado Automatizado',
  'Quality Control': 'Control de Calidad',
  'Powering Large Scale Environments': 'Potenciando Entornos a Gran Escala',
  'SCALABILITY': 'ESCALABILIDAD',
  'Contract Optimized —&gt;': 'Optimización de Contrato —&gt;',
  'Scale Meets Precision': 'La Escala se Encuentra con la Precisión',
  'From prototype to 10,000 units. Our facilities are built for uncompromising volume without drift.': 'Desde el prototipo hasta 10,000 unidades. Nuestras instalaciones están construidas para un volumen inflexible sin variaciones.',
  'Project Phase: Technical Documentation': 'Fase del Proyecto: Documentación Técnica',
  'TECHNICAL<br/>SPECIFICATIONS<br/>2024': 'ESPECIFICACIONES<br/>TÉCNICAS<br/>2024',
  'TECHNICAL<br />SPECIFICATIONS<br />2024': 'ESPECIFICACIONES<br />TÉCNICAS<br />2024',
  'Precision engineering for architectural-grade timber applications. Access the core specs.': 'Ingeniería de precisión para aplicaciones de madera de grado arquitectónico. Accede a las especificaciones principales.',
  'ACCESS DATABASE': 'ACCEDER A LA BASE DE DATOS',
  'Download Blueprint PDF': 'Descargar Planos PDF',
  'System Architecture': 'Arquitectura del Sistema',
  'Structural Tolerances': 'Tolerancias Estructurales',
  'Load capacity': 'Capacidad de Carga',
  'Moisture Resistance': 'Resistencia a la Humedad',
  'Thermal Expansion': 'Expansión Térmica',
  'Joint integrity': 'Integridad de la Junta',
  'Density Rating': 'Clasificación de Densidad',
  'Phase 01: Engineering': 'Fase 01: Ingeniería',
  'THE<br/>WOOD<br/>LIBRARY': 'EL<br/>CATÁLOGO<br/>DE MADERA',
  'THE<br />WOOD<br />LIBRARY': 'EL<br />CATÁLOGO<br />DE MADERA',
  'OAK': 'ROBLE',
  'WALNUT': 'NOGAL',
  'ASH': 'FRESNO',
  'MAPLE': 'ARCE',
  'High-Density / 0.8g/cm³': 'Alta Densidad / 0.8g/cm³',
  'Thermal: Low': 'Térmica: Baja',
  'Engineered Precision': 'Precisión de Ingeniería',
  'EL DON DE <br/>LA MADERA': 'EL DON DE <br/>LA MADERA',
  'Crafting the future of structural timber with zero tolerance for error.': 'Dando forma al futuro de la madera estructural con cero tolerancia al error.',
  'Human Eye + Machine Exact': 'Ojo Humano + Exactitud de Máquina',
  'Where the CNC ends, the artisan begins.': 'Donde termina el CNC, comienza el artesano.',
  'Technical Assembly': 'Ensamblaje Técnico',
  'Every joint calculated, every grain aligned. Pushing the material to its absolute limit.': 'Cada unión calculada, cada veta alineada. Llevando el material a su límite absoluto.',
  'Engineered Output': 'Resultado Diseñado',
  'View Process Gallery': 'Ver Galería de Procesos',
  'Material Mastery': 'Maestría en Materiales'
};

pages.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    for (const [en, es] of Object.entries(dictionary)) {
      // Create a global replacement, case-sensitive usually ok but let's just do split.join
      content = content.split(en).join(es);
    }
    
    fs.writeFileSync(file, content);
    console.log(`Translated ${file}`);
  }
});
