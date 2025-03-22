"use client"

import { useEffect } from 'react'

export default function BookingCalendar() {
  useEffect(() => {
    // Chargement du script Calendly après le montage du composant
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      // Nettoyage du script lors du démontage du composant
      document.body.removeChild(script)
    }
  }, [])
  
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 shadow-xl">
      {/* Conteneur Calendly */}
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/votre-compte/30min"
        style={{ minWidth: '320px', height: '650px' }}
      ></div>
    </div>
  )
}