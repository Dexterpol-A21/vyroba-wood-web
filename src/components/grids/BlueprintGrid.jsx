import React, { useState, useEffect, useRef } from 'react';

export default function BlueprintGrid() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Check if mouse is hovering over this component's section
      if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
        setIsHovered(true);
        setMousePos({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Dim Base Layer without Grid */}
      <div className="absolute inset-0 bg-surface z-0" />
      
      {/* Hidden Technical Blueprint revealed by mouse mask */}
      <div 
        className="absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          backgroundImage: `
            linear-gradient(to right, rgba(22,40,57,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22,40,57,0.3) 1px, transparent 1px)
          `,
          backgroundSize: `50px 50px`,
          WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 20%, transparent 100%)`,
          maskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
        }}
      >
        {/* Adds technical markings inside the grid randomly for effect */}
        <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #8a501c 2px, transparent 0)`,
            backgroundSize: `250px 250px`
        }}></div>
      </div>
    </div>
  );
}
