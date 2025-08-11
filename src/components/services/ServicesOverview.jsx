"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesOverview() {
  const [hoveredService, setHoveredService] = useState(null)
  
  const services = [
    {
      id: 'landing-page',
      icon: (
        <svg className="w-20 h-20 text-purple-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: 'Landing Page',
      subtitle: 'Parfait pour commencer',
      price: '750€',
      description: 'Une page unique optimisée qui transforme vos visiteurs en clients. Idéal pour tester le marché.',
      features: [
        'Page unique ultra-performante',
        'Formulaire de contact intelligent', 
        'Optimisation SEO complète',
        'Design responsive premium',
        'Livraison en 7 jours'
      ],
      popular: false,
      link: '/contact',
      buttonText: 'Commencer maintenant',
      resultsText: '+300% de conversions en moyenne',
      badge: 'DÉMARRAGE RAPIDE'
    },
    {
      id: 'site-complet',
      icon: (
        <svg className="w-20 h-20 text-purple-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      title: 'Site Complet',
      subtitle: 'Pour dominer votre marché',
      price: '1600€',
      description: 'Site web professionnel multi-pages qui établit votre autorité et génère des leads en continu.',
      features: [
        'Site multi-pages professionnel',
        'Blog intégré pour le SEO',
        'Système de rendez-vous automatisé',
        'Analytics et suivi avancés',
        'Formation complète incluse'
      ],
      popular: true,
      link: '/contact',
      buttonText: 'Obtenir mon devis',
      resultsText: '+500% de visibilité en 3 mois',
      badge: 'PLUS POPULAIRE'
    },
    {
      id: 'e-commerce',
      icon: (
        <svg className="w-20 h-20 text-purple-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
        </svg>
      ),
      title: 'Site E-commerce',
      subtitle: 'Pour vendre en ligne',
      price: 'À partir de 2200€',
      description: 'Boutique en ligne complète avec gestion des commandes, paiements sécurisés et tableau de bord.',
      features: [
        'Boutique en ligne complète',
        'Paiements sécurisés intégrés',
        'Gestion des stocks et commandes',
        'Tableau de bord administrateur',
        'Optimisation SEO e-commerce'
      ],
      popular: false,
      link: '/contact',
      buttonText: 'Démarrer ma boutique',
      resultsText: 'Ventes en ligne dès le premier mois',
      badge: 'VENTE EN LIGNE'
    }
  ]
  
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">Choisissez votre</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">transformation</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Seulement 2 options. Facile à choisir. Résultats garantis.
          </motion.p>

          {/* Bannière de confiance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-6 py-3 rounded-full border border-green-500/20 mb-12"
          >
            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-green-300 font-medium">Qualité garantie • Accompagnement personnalisé</span>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {service.badge}
                  </span>
                </div>
              )}

              {!service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {service.badge}
                  </span>
                </div>
              )}
              
              <div className={`h-full ${service.popular ? 'bg-gradient-to-br from-purple-900/60 to-blue-900/60 border-purple-400/50 scale-105' : 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-white/10'} p-8 rounded-2xl border-2 hover:border-purple-500/50 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20`}>
                
                <div className="text-center mb-8">
                  {service.icon}
                  <h3 className="text-3xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-purple-300 font-medium mb-4">{service.subtitle}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-4 py-2 rounded-full border border-green-500/20 inline-block mb-6">
                    <span className="text-green-300 font-medium text-sm">{service.resultsText}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 text-center text-lg">{service.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <Link href={service.link}>
                    <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      service.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl hover:shadow-purple-500/40' 
                        : 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl hover:shadow-orange-500/40'
                    }`}>
                      {service.buttonText}
                      <svg 
                        className={`w-5 h-5 ml-2 inline transition-transform duration-300 ${hoveredService === service.id ? 'translate-x-1' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        

      </div>
    </section>
  )
}