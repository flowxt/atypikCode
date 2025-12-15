"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA({ title, description, buttonText, buttonLink }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 md:p-16 border border-white/5"
    >
      {/* Effet de gradient subtil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent pointer-events-none"></div>
      
      {/* Cercles décoratifs subtils */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative text-center max-w-3xl mx-auto">
        {/* Titre */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          {title || "Prêt à lancer votre projet ?"}
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-8"
        >
          {description || "Discutons de votre projet et trouvons ensemble la meilleure solution pour votre activité."}
        </motion.p>
        
        {/* Bouton d'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Link href={buttonLink || "/contact"}>
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center">
              {buttonText || "Demander un devis gratuit"}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </Link>
          
          <Link href="mailto:floriandev74@gmail.com">
            <button className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300">
              floriandev74@gmail.com
            </button>
          </Link>
        </motion.div>

        {/* Garanties */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Devis gratuit
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Réponse sous 24h
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Sans engagement
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
