"use client"

import { useEffect, useState } from 'react'

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Effet de lumière qui suit le curseur */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(101, 79, 240, 0.15), transparent 40%)`
        }}
      />
      
      {/* Éléments de background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-60 left-1/3 w-60 h-60 bg-cyan-600/20 rounded-full filter blur-3xl opacity-10" />
      </div>
    </>
  )
}