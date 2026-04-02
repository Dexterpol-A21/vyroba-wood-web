import React, { useState } from 'react';

export default function CNCGrid() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    });
  };

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden bg-surface pointer-events-auto"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #162839 1.5px, transparent 0)`,
          backgroundSize: `40px 40px`
        }}
      />
      
      {/* CNC Crosshairs */}
      <div 
        className="absolute pointer-events-none bg-secondary/60 transition-opacity duration-300"
        style={{
          width: '1px',
          left: mousePos.x,
          top: 0,
          bottom: 0,
          opacity: isHovered ? 1 : 0
        }}
      />
      <div 
        className="absolute pointer-events-none bg-secondary/60 transition-opacity duration-300"
        style={{
          height: '1px',
          top: mousePos.y,
          left: 0,
          right: 0,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Target Dot */}
      <div 
        className="absolute pointer-events-none border border-secondary transition-opacity duration-300"
        style={{
          width: '12px',
          height: '12px',
          left: mousePos.x - 6,
          top: mousePos.y - 6,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Flashlight Glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(22, 40, 57, 0.05) 0%, transparent 80%)`,
          opacity: isHovered ? 1 : 0
        }}
      />
    </div>
  );
}
