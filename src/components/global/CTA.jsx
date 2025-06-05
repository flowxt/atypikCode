"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA({ title, description, buttonText, buttonLink }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-3xl p-12 md:p-16 shadow-2xl shadow-purple-900/30 border-2 border-purple-500/30 backdrop-blur-sm"
    >
      {/* Éléments de design améliorés */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse delay-75"></div>
      
      {/* Badge d'urgence */}
      <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
        🔥 OFFRE LIMITÉE
      </div>
      
      <div className="relative text-center">
        {/* Compteur d'urgence */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 px-6 py-3 rounded-full border border-red-500/30 mb-8"
        >
          <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-red-300 font-bold">⏰ Plus que 7 places disponibles ce mois-ci</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
        >
          {title || "Prêt à tripler vos clients ?"}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          {description || "Obtenez votre devis personnalisé en 24h et découvrez comment transformer votre site en machine à clients."}
        </motion.p>

        {/* Preuves sociales rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
        >
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-white font-medium">10 entrepreneurs satisfaits</span>
          </div>
          
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span className="text-white font-medium">Note parfaite 5/5</span>
          </div>
        </motion.div>
        
        {/* Bouton d'action principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 relative inline-block"
        >
          {/* Badge promo visible et bien positionné */}
          <div className="absolute -top-3 -right-3 bg-red-500 text-white text-sm px-3 py-1 rounded-full animate-bounce font-bold z-10 shadow-lg">
            -20%
          </div>
          
          <Link href={buttonLink || "/contact"}>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.8)" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl shadow-2xl shadow-purple-600/40 overflow-hidden group relative"
            >
              {/* Animation de background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative flex items-center justify-center">
                🚀 {buttonText || "OBTENIR MON DEVIS GRATUIT"}
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Garanties et sécurisation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-300"
        >
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span><strong>Résultats</strong> garantis</span>
          </div>
          
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span><strong>Réponse</strong> sous 24h garanti</span>
          </div>
          
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span><strong>Sans engagement</strong> - Devis gratuit</span>
          </div>
        </motion.div>

        {/* Message de sécurisation final */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 text-sm mt-6"
        >
          ✨ <em>Rejoignez les entrepreneurs qui ont fait le bon choix pour leur business</em>
        </motion.p>
      </div>
    </motion.div>
  )
}