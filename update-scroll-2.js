const fs = require('fs');
const path = 'src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// Replace classes in Card 1
content = content.replace(
    'class="w-full bg-[#212121] rounded-sm transform transition-transform duration-700 reveal-card translate-y-12 opacity-0"',
    'class="w-full bg-[#212121] rounded-sm transform transition-all duration-1000 ease-out reveal-card translate-y-32 opacity-0"'
);

// Replace classes in Card 2
content = content.replace(
    'class="w-full bg-[#212121] rounded-sm transform transition-transform duration-700 delay-100 reveal-card translate-y-12 opacity-0"',
    'class="w-full bg-[#212121] rounded-sm transform transition-all duration-1000 delay-200 ease-out reveal-card translate-y-32 opacity-0"'
);

// Replace classes in Card 3
content = content.replace(
    'class="w-full bg-[#212121] rounded-sm transform transition-transform duration-700 delay-200 reveal-card translate-y-12 opacity-0"',
    'class="w-full bg-[#212121] rounded-sm transform transition-all duration-1000 delay-[400ms] ease-out reveal-card translate-y-32 opacity-0"'
);

// Update Intersection Observer to use 'translate-y-32'
content = content.replace(
    /entry.target.classList.remove\('translate-y-12', 'opacity-0'\);/g,
    "entry.target.classList.remove('translate-y-32', 'opacity-0');"
);

fs.writeFileSync(path, content);
