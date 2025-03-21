"use client"

import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm text-sm font-medium text-blue-300 mb-3">
          Services premium
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5">Des solutions sur mesure</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Je crée des expériences web interactives et élégantes, parfaitement adaptées à votre image de marque et optimisées pour atteindre vos objectifs commerciaux.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.3)" }}
          className="group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 rounded-2xl border border-white/10 shadow-lg transition-all duration-300 flex flex-col h-full"
        >
          {/* Icône */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative mb-8 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl shadow-lg shadow-purple-600/20 group-hover:shadow-purple-600/40 transition-all">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-all">Création de Landing Page</h3>
            <p className="text-gray-300 mb-6">
              Une page web élégante et performante conçue pour maximiser vos conversions. 
              Design unique adapté à votre identité visuelle et totalement optimisé pour transformer vos visiteurs en clients.
            </p>
            
            <p className="text-gray-300 mb-6">
              La landing page est souvent le premier contact de vos prospects avec votre entreprise. Je crée des pages d'atterrissage qui captent l'attention, communiquent clairement votre proposition de valeur et incitent à l'action.
            </p>
            
            <h4 className="text-lg font-semibold mb-3 text-white">Pourquoi investir dans une landing page ?</h4>
            <p className="text-gray-300 mb-6">
              Une landing page bien conçue peut dramatiquement améliorer votre taux de conversion, optimiser vos campagnes publicitaires et augmenter le retour sur investissement de vos actions marketing.
            </p>
            
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✓</span>
                <span>Design responsive et animations fluides pour toutes les tailles d'écran</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✓</span>
                <span>Optimisation SEO avancée pour un meilleur classement</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✓</span>
                <span>Formulaires interactifs personnalisés pour capturer des leads</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✓</span>
                <span>Analyses et rapports de performance détaillés</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✓</span>
                <span>Tests A/B pour optimiser constamment les résultats</span>
              </li>
            </ul>
          </div>
          
          <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/10">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              À partir de 800€
            </p>
            <div className="group-hover:translate-x-0 translate-x-10 transition-all duration-300 opacity-0 group-hover:opacity-100">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)" }}
          className="group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 rounded-2xl border border-white/10 shadow-lg transition-all duration-300 flex flex-col h-full"
        >
          {/* Icône */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative mb-8 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-all">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-all">Création de Site Web</h3>
            <p className="text-gray-300 mb-6">
              Un site web complet et professionnel avec toutes les fonctionnalités nécessaires pour 
              valoriser votre activité et vous démarquer de la concurrence dans le monde digital.
            </p>
            
            <p className="text-gray-300 mb-6">
              Votre site web est votre vitrine digitale 24h/24 et 7j/7. Je conçois des sites web qui ne sont pas seulement esthétiques, mais aussi stratégiques et fonctionnels, en prenant en compte vos objectifs commerciaux spécifiques.
            </p>
            
            <h4 className="text-lg font-semibold mb-3 text-white">Une approche centrée sur les résultats</h4>
            <p className="text-gray-300 mb-6">
              Chaque élément de votre site est pensé pour contribuer à vos objectifs commerciaux : générer des leads, vendre en ligne, renforcer votre image de marque ou informer votre public.
            </p>
            
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Design exclusif et responsive adapté à votre identité de marque</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Système de réservation intégré pour automatiser vos prises de rendez-vous</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Optimisation SEO complète pour un meilleur référencement naturel</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Animations avancées et interfaces interactives pour engager vos visiteurs</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Intégration avec vos outils métiers (CRM, marketing, etc.)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Formation à l'utilisation et support technique inclus</span>
              </li>
            </ul>
          </div>
          
          <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/10">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              À partir de 1200€
            </p>
            <div className="group-hover:translate-x-0 translate-x-10 transition-all duration-300 opacity-0 group-hover:opacity-100">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}