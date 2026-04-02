import React, { useState, useEffect, useRef } from 'react';

export default function CadGrid() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
        setIsVisible(true);
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-surface">
      {/* Static blueprint drafting grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #162839 1px, transparent 1px),
            linear-gradient(to bottom, #162839 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Horizontal Axis Line (X) */}
      <div 
        className="absolute left-0 right-0 h-[1px] bg-secondary/80 transition-opacity duration-100"
        style={{ top: mousePos.y, opacity: isVisible ? 1 : 0 }}
      />

      {/* Vertical Axis Line (Y) */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-secondary/80 transition-opacity duration-100"
        style={{ left: mousePos.x, opacity: isVisible ? 1 : 0 }}
      />

      {/* Origin Point / Reticle */}
      <div 
        className="absolute w-[6px] h-[6px] border border-secondary rounded-full transition-opacity duration-100"
        style={{ 
          left: mousePos.x - 3, 
          top: mousePos.y - 3,
          opacity: isVisible ? 1 : 0 
        }}
      />

      {/* Floating Coordinates Data */}
      <div 
        className="absolute font-space text-[10px] leading-tight text-secondary tracking-widest transition-opacity duration-100 backdrop-blur-sm bg-surface/80 p-1"
        style={{ 
          left: mousePos.x + 12, 
          top: mousePos.y + 12,
          opacity: isVisible ? 1 : 0 
        }}
      >
        <span>X:{(mousePos.x * 1.25).toFixed(1)}</span><br/>
        <span>Y:{(mousePos.y * 1.25).toFixed(1)}</span>
      </div>
    </div>
  );
}
