import React, { useEffect, useRef } from 'react';

export default function DraftingGrid({ theme = 'default' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Regresamos al tamaño original perfecto alineado a la cuadrícula de fondo 
    const gridSize = 40;
    const cols = Math.ceil(window.innerWidth / gridSize) + 2;
    const rows = 45;

    // Seleccionar paleta de acuerdo al tema
    let palette = [];
    if (theme === 'closets') {
      palette = [
        'rgba(22, 40, 57, 0.65)',    // Primary (Azul oscuro)
        'rgba(44, 62, 80, 0.55)',    // Primary container (Azul medio)
        'rgba(15, 28, 40, 0.7)',     // Azul muy oscuro
        'rgba(150, 169, 190, 0.35)', // Azul gris claro
        'rgba(60, 80, 100, 0.4)',    // Azul intermedio
        'rgba(22, 40, 57, 0.45)',
        'rgba(30, 50, 70, 0.5)'
      ];
    } else if (theme === 'puertas') {
      palette = [
        'rgba(139, 58, 54, 0.65)',   // Rojo/Guinda de Puertas
        'rgba(110, 40, 35, 0.7)',    // Guinda oscuro
        'rgba(200, 90, 85, 0.45)',   // Guinda claro/desgastado
        'rgba(160, 70, 65, 0.5)',    // Guinda medio
        'rgba(139, 58, 54, 0.45)',
        'rgba(80, 25, 20, 0.6)'
      ];
    } else if (theme === 'cocinas') {
      palette = [
        'rgba(74, 124, 89, 0.65)',   // Verde bosque de Cocinas
        'rgba(47, 90, 61, 0.7)',     // Verde oscuro
        'rgba(184, 212, 190, 0.45)', // Verde claro
        'rgba(90, 140, 105, 0.5)',   // Verde medio
        'rgba(74, 124, 89, 0.45)',
        'rgba(35, 70, 48, 0.6)'
      ];
    } else {
      palette = [
        'rgba(138, 80, 28, 0.55)',
        'rgba(160, 82, 45, 0.45)',
        'rgba(210, 180, 140, 0.4)',
        'rgba(94, 58, 16, 0.65)',
        'rgba(253, 176, 116, 0.35)',
        'rgba(196, 139, 86, 0.45)',
        'rgba(22, 40, 57, 0.25)',
        'rgba(101, 67, 33, 0.6)',
        'rgba(205, 133, 63, 0.5)'
      ];
    }

    const cells = Array.from({ length: cols }, () => new Array(rows).fill(null));
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const cell = document.createElement('div');
        cell.className = "absolute pointer-events-none";
        
        // Cuadros perfectos, sin deformaciones ni bordes curvos
        cell.style.width = `${gridSize}px`;
        cell.style.height = `${gridSize}px`;
        cell.style.left = `${i * gridSize}px`;
        cell.style.top = `${j * gridSize}px`;
        
        cell.style.opacity = '0';
        cell.style.transitionProperty = 'opacity'; // Solo animamos la opacidad
        
        // Asignamos el color con un hash para que sea consistente
        const hash = Math.abs((i * 17) ^ (j * 31));
        cell.style.backgroundColor = palette[hash % palette.length];
        
        // El secreto del "Rastro": Cada cuadro tarda distinto tiempo en apagarse.
        // Unos se borran en 800ms y otros tardan hasta 3 segundos, dándole esa textura o huella que se disuelve.
        const fadeOutDuration = 800 + (hash % 6) * 450; 
        cell.dataset.fadeOutTime = fadeOutDuration;
        
        fragment.appendChild(cell);
        cells[i][j] = cell;
      }
    }
    
    container.appendChild(fragment);

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
        
        const gridX = Math.floor((e.clientX - rect.left) / gridSize);
        const gridY = Math.floor((e.clientY - rect.top) / gridSize);
        
        const radius = 2; // Radio de iluminación 

        for(let dx = -radius; dx <= radius; dx++) {
          for(let dy = -radius; dy <= radius; dy++) {
            const nx = gridX + dx;
            const ny = gridY + dy;
            
            if(nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
              const dist = Math.sqrt(dx*dx + dy*dy);
              const maxDist = 2.5; 
              if (dist > maxDist) continue;
              
              const targetCell = cells[nx][ny];
              if (!targetCell) continue;

              const intensity = Math.max(0, 1 - (dist / maxDist));
              
              // Se enciende instantáneamente
              targetCell.style.transitionDuration = '0ms'; 
              targetCell.style.opacity = (intensity * 0.9).toString();
              
              clearTimeout(targetCell.timeout);
              targetCell.timeout = setTimeout(() => {
                // Se apaga usando su tiempo personalizado, dejando una "huella/rastro" asimétrica en la cuadrícula plana
                targetCell.style.transitionDuration = `${targetCell.dataset.fadeOutTime}ms`;
                targetCell.style.opacity = '0';
              }, 50);
            }
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      while(container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-surface pointer-events-none overflow-hidden">
      {/* Base paper grid lines (Structural) */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #162839 1px, transparent 1px),
            linear-gradient(to bottom, #162839 1px, transparent 1px)
          `,
          backgroundSize: `40px 40px`,
          zIndex: 10
        }}
      />
      {/* Grid térmico restaurado a cuadros perfectos pero con estela */}
      <div ref={containerRef} className="absolute inset-0 mix-blend-multiply z-0 pointer-events-none" />
    </div>
  );
}
