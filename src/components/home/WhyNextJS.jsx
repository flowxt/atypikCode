"use client"

import { motion } from 'framer-motion'

export default function WhyNextJS() {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Vitesse extrême",
      description: "Vos pages chargent instantanément. Google adore ça, vos clients aussi. Fini les visiteurs qui partent avant même de voir votre offre.",
      color: "text-yellow-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: "Sécurité maximale",
      description: "Fini les plugins piratés et les mises à jour qui plantent tout. Un site codé sur-mesure = zéro faille de sécurité.",
      color: "text-green-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      ),
      title: "Liberté totale",
      description: "Un design qui s'adapte à votre marque, pas l'inverse. Pas de templates génériques, que du sur-mesure.",
      color: "text-purple-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      ),
      title: "SEO natif",
      description: "Conçu dès le départ pour Google. Vos concurrents sur WordPress ne peuvent pas rivaliser techniquement.",
      color: "text-blue-400"
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm"
          >
            Technologie
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Pourquoi un site Next.js plutôt que WordPress ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Next.js est la technologie utilisée par <span className="text-white">Netflix, Uber et Nike</span>. 
            Je l&apos;utilise pour vous garantir un site plus rapide que celui de vos concurrents.
          </motion.p>
        </div>
        
        {/* Grille d'avantages */}
        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all"
            >
              <div className={`${advantage.color} mb-4`}>
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
              <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
