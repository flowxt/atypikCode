"use client"

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);
  
  // Gestion du swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe gauche - témoignage suivant
      handleNext();
    }
    
    if (touchStart - touchEnd < -75) {
      // Swipe droite - témoignage précédent
      handlePrev();
    }
  };
  
  const handleNext = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  
  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  
  const testimonials = [
    {
      name: "Cyrielle Schepens",
      company: "En Scènes Acting",
      role: "Directrice",
      text: "Florian a su capter l'ADN d'En Scènes Acting, comprendre ce qui nous anime et le transformer en une expérience web à part entière. Aujourd'hui, notre site n'est plus seulement une vitrine, mais une véritable porte d'entrée vers notre univers. ",
      avatar: "C",
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "Sidnei Ribeiro",
      company: "SAR Security",
      role: "CEO",
      text: "En tant que gérant de SAR Security, je cherchais un site qui me permette de me démarquer dans un secteur concurrentiel. Le résultat a dépassé toutes mes attentes. Mon site est non seulement magnifique mais il est aussi parfaitement optimisé pour le référencement. Je reçois désormais des demandes qualifiées chaque semaine.",
      avatar: "S",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Kristelle Feron",
      company: "Kris LaVoixDesAnges",
      role: "Indépendante",
      text: "La refonte de notre site a eu un impact immédiat sur nos ventes. L'expérience utilisateur est fluide, le design est moderne et les fonctionnalités de réservation en ligne nous font gagner un temps précieux. Un investissement qui s'est amorti en quelques mois seulement.",
      avatar: "K",
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <section className="relative z-10 py-32 px-6 md:px-16 bg-gradient-to-b from-[#0A0A0F] to-gray-900/80">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 backdrop-blur-sm text-sm font-medium text-pink-300 mb-3">
          Témoignages
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5">Ce que disent mes clients</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Découvrez les expériences de clients satisfaits qui ont transformé leur présence en ligne.
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto mb-16">
        <div 
          ref={sliderRef}
          className="relative overflow-hidden" 
          style={{ minHeight: '250px' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="transition-all duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
          {testimonials.map((testimonial, index) => (
              <div 
              key={index}
                className="w-full flex-shrink-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl"
                style={{ minWidth: '100%' }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                </div>
                
                <div>
                  <svg className="w-10 h-10 text-purple-600/20 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-gray-200 text-lg mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
              </div>
          ))}
          </div>
        </div>
          
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-purple-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <p className="text-xl text-gray-300 mb-6">
          Rejoignez mes clients satisfaits et transformez votre présence en ligne dès aujourd'hui.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-600/20"
        >
          Discuter de mon projet
        </motion.button>
      </motion.div>
    </section>
  )
}