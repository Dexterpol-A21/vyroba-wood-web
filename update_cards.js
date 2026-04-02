const fs = require('fs');

const path = 'src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

const regex = /<!-- Line 1: Cocinas -->[\s\S]*?(?=<!-- Visual Process Steps -->)/;

const newHTML = `<!-- Line 1: Cocinas -->
            <div class="w-full bg-[#212121] border border-[#212121]">
                <a href="/cocinas" class="relative -top-3 block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 shadow-[0_0.4em_0.1em_0.019em_#8a501c] transition-all duration-500 ease-out hover:top-0 hover:shadow-none hover:border-[#8a501c]/50 group cursor-pointer flex flex-col justify-between">
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
            </div>

            <!-- Line 2: Closets -->
            <div class="w-full bg-[#212121] border border-[#212121]">
                <a href="/closets" class="relative -top-3 block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 shadow-[0_0.4em_0.1em_0.019em_#162839] transition-all duration-500 ease-out hover:top-0 hover:shadow-none hover:border-[#162839]/50 group cursor-pointer flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span class="text-5xl font-black text-outline/30 group-hover:text-[#162839] transition-colors block">02</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" class="w-10 h-10 text-outline/40 group-hover:text-[#162839] transition-colors">
                                <rect x="3" y="3" width="18" height="18"></rect>    
                                <line x1="12" y1="3" x2="12" y2="21"></line>        
                                <line x1="3" y1="9" x2="12" y2="9"></line>
                                <line x1="3" y1="15" x2="12" y2="15"></line>        
                                <line x1="12" y1="7" x2="21" y2="7"></line>
                                <line x1="16.5" y1="7" x2="16.5" y2="10"></line>
                            </svg>
                        </div>
                        <div class="font-bold tracking-[0.2em] text-[10px] text-[#162839] uppercase mb-3">[ SISTEMA 02 : ALMACENAJE ]<br/>VOLUMEN DE PRECISIÓN - OPTIMIZACIÓN ESPACIAL</div>
                        <h4 class="text-2xl font-black uppercase mb-4 text-primary group-hover:text-[#162839] transition-colors">Clósets y Vestidores</h4>
                        <p class="text-on-surface-variant font-medium leading-relaxed mb-8">
                            Sistemas de almacenamiento optimizados espacialmente. Diseños modulares adaptables a cualquier plano arquitectónico con acabados premium.
                        </p>
                    </div>
                </a>
            </div>

            <!-- Line 3: Puertas -->
            <div class="w-full bg-[#212121] border border-[#212121]">
                <a href="/paneleria" class="relative -top-3 block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 shadow-[0_0.4em_0.1em_0.019em_#8B3A36] transition-all duration-500 ease-out hover:top-0 hover:shadow-none hover:border-[#8B3A36]/50 group cursor-pointer flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span class="text-5xl font-black text-outline/30 group-hover:text-[#8B3A36] transition-colors block">03</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" class="w-10 h-10 text-outline/40 group-hover:text-[#8B3A36] transition-colors">
                                <line x1="3" y1="21" x2="21" y2="21" stroke-width="2"></line>
                                <line x1="3" y1="21" x2="3" y2="5"></line>
                                <path d="M3,5 A16,16 0 0,1 19,21" stroke-dasharray="3 3"></path>
                            </svg>
                        </div>
                        <div class="font-bold tracking-[0.2em] text-[10px] text-[#8B3A36] uppercase mb-3">[ SISTEMA 03 : PUERTAS ]<br/>AISLAMIENTO ACÚSTICO - ALTA DENSIDAD</div>
                        <h4 class="text-2xl font-black uppercase mb-4 text-primary group-hover:text-[#8B3A36] transition-colors">Las Puertas</h4>
                        <p class="text-on-surface-variant font-medium leading-relaxed mb-8">
                            Sistemas divisores y puertas de intercomunicación. Elementos arquitectónicos estructurados con núcleo macizo para hotel y residencial masivo.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

`;

if (!content.match(regex)) {
    console.error("Could not find the target HTML to replace.");
} else {
    fs.writeFileSync(path, content.replace(regex, newHTML));
    console.log("Successfully replaced HTML.");
}
