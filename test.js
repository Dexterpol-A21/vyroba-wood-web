const fs = require('fs');

let content = fs.readFileSync('src/pages/index.astro', 'utf8');

const replacement1 = `
            <!-- Line 1: Cocinas -->
            <div class="w-full bg-[#212121] rounded-none">
                <a href="/cocinas" class="relative -top-3 block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 shadow-[0_12px_2px_0_#8a501c] hover:top-0 hover:shadow-[0_0px_0_0_#8a501c] transition-all duration-300 group cursor-pointer flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span class="text-5xl font-black text-outline/30 group-hover:text-[#8a501c] transition-colors block">01</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" class="w-10 h-10 text-outline/40 group-hover:text-[#8a501c] transition-colors">
                                <rect x="3" y="3" width="18" height="6"></rect>     
                                <line x1="6" y1="3" x2="6" y2="9"></line>
                                <rect x="3" y="14" width="8" height="7"></rect>     
                                <rect x="13" y="14" width="8" height="7"></rect>    
                            </svg>
                        </div>
                        <div class="font-bold tracking-[0.2em] text-[10px] text-[#8a501c] uppercase mb-3">[ SISTEMA 01 : COCINAS ]<br/>ALTO TRÁFICO - MDF HIDRÓFUGO</div>
                        <h4 class="text-2xl font-black uppercase mb-4 text-primary group-hover:text-[#8a501c] transition-colors">Cocinas Integrales</h4>
                        <p class="text-on-surface-variant font-medium leading-relaxed mb-8">
                            Producción en serie de módulos de cocina. Desde gabinetes y alacenas hasta barras, con herrajes de alta resistencia listos para instalación rápida.
                        </p>
                    </div>
                </a>
            </div>`;

// Wait, the user specifically provided a CSS block with some particular aesthetics: 
// background-color: #212121; border: 0.08em solid #fff; etc.
// But they said "aplica este codigo a esas 3 tarjetas". Meaning apply the effect/logic to the cards!

// Let me use exact styles matching his prompt but mapped to our design system (or exact colors if he wants #212121). 
// The dark gray (#212121) actually works with the Industrial aesthetic, but the "border: 0.08em solid #fff" is too bright for light mode. 
// I'll keep the border mapped to `border-outline-variant/30` or the specific accent color.

