const fs = require('fs');
const file = 'src/pages/index.astro';
let content = fs.readFileSync(file, 'utf8');

// The file ALREADY HAS the hex codes applied somehow from a past edit attempt we both made (wait, I DID apply it when I created it because the prompt instructions implicitly requested them).
// Oh! Wait! Look at line 3: "Baños y Panelería" - but the user specifically said:
// SISTEMA 03: Las Puertas (La Estructura y la Barrera).

// Let's replace "Baños y Panelería" with "Las Puertas" and update the text!
content = content.replace(
    '<h4 class="text-2xl font-black uppercase mb-4 text-primary group-hover:text-[#8B3A36] transition-colors">Baños y Panelería</h4>',
    '<h4 class="text-2xl font-black uppercase mb-4 text-primary group-hover:text-[#8B3A36] transition-colors">Las Puertas</h4>'
);

content = content.replace(
    '<div class="font-bold tracking-[0.2em] text-[10px] text-[#8B3A36] uppercase mb-3">[ SISTEMA 03 : PANELES ]<br/>TRATAMIENTO ANTIHUMEDAD - RECUBRIMIENTO</div>',
    '<div class="font-bold tracking-[0.2em] text-[10px] text-[#8B3A36] uppercase mb-3">[ SISTEMA 03 : PUERTAS ]<br/>AISLAMIENTO ACÚSTICO - ALTA DENSIDAD</div>'
);

content = content.replace(
    'Muebles de lavabo (vanities) con tratamiento antihumedad y recubrimientos arquitectónicos para lobbies, pasillos y áreas comunes.',
    'Sistemas divisores y puertas de intercomunicación. Elementos arquitectónicos estructurados con núcleo macizo para hotel y residencial masivo.'
);

fs.writeFileSync(file, content);
