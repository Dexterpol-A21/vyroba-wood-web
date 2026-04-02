const fs = require('fs');

const path = 'src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// To be completely safe, let's just string split and replace
const cocinasTag = '<a href="/cocinas" class="bg-surface-container-lowest p-10 border border-outline-variant/30 hover:border-[#8a501c]/50 transition-colors group block cursor-pointer flex flex-col justify-between">';
const closetsTag = '<a href="/closets" class="bg-surface-container-lowest p-10 border border-outline-variant/30 hover:border-[#162839]/50 transition-colors group block cursor-pointer flex flex-col justify-between">';
const puertasTag = '<a href="/paneleria" class="bg-surface-container-lowest p-10 border border-outline-variant/30 hover:border-[#8B3A36]/50 transition-colors group block cursor-pointer flex flex-col justify-between">';

content = content.replace(cocinasTag,
    `<!-- Outer wrapper for 3D effect -->
            <div class="w-full bg-[#162839] border border-[#162839] outline outline-1 outline-outline-variant/30 rounded-sm">
                <a href="/cocinas" class="relative top-0 shadow-none block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 transition-all duration-300 ease-in-out hover:-top-3 hover:shadow-[0_0.4em_0.1em_0.019em_#8a501c] group cursor-pointer flex flex-col justify-between arc-card">`
);

content = content.replace(closetsTag,
    `<!-- Outer wrapper for 3D effect -->
            <div class="w-full bg-[#162839] border border-[#162839] outline outline-1 outline-outline-variant/30 rounded-sm">
                <a href="/closets" class="relative top-0 shadow-none block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 transition-all duration-300 ease-in-out hover:-top-3 hover:shadow-[0_0.4em_0.1em_0.019em_#fdb074] group cursor-pointer flex flex-col justify-between arc-card">`
);

content = content.replace(puertasTag,
    `<!-- Outer wrapper for 3D effect -->
            <div class="w-full bg-[#162839] border border-[#162839] outline outline-1 outline-outline-variant/30 rounded-sm">
                <a href="/paneleria" class="relative top-0 shadow-none block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 transition-all duration-300 ease-in-out hover:-top-3 hover:shadow-[0_0.4em_0.1em_0.019em_#8B3A36] group cursor-pointer flex flex-col justify-between arc-card">`
);

// Close tags for the outer divs
content = content.replace(
    /<\/a>\s*<!-- Line 2: Closets -->/g,
    `    </a>
            </div>

            <!-- Line 2: Closets -->`
);

content = content.replace(
    /<\/a>\s*<!-- Line 3: Puertas -->/g,
    `    </a>
            </div>

            <!-- Line 3: Puertas -->`
);

content = content.replace(
    /<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
    `    </a>
            </div>
        </div>
    </div>
</section>`
);

fs.writeFileSync(path, content);
console.log("Check 1");
