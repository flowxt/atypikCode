"use client"

import { useEffect, useRef } from 'react'

export default function BackgroundEffects() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    let frame = null;

    // Mise à jour directe du DOM via rAF : aucun re-render React par mousemove
    const handleMouseMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(101, 79, 240, 0.15), transparent 40%)`;
        }
        frame = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Effet de lumière qui suit le curseur */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 transition-opacity"
      />

      {/* Éléments de background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-60 left-1/3 w-60 h-60 bg-cyan-600/20 rounded-full filter blur-3xl opacity-10" />
      </div>
    </>
  )
}
