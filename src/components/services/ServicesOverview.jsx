"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesOverview() {
  const [hoveredService, setHoveredService] = useState(null)
  
  const services = [
    {
      id: 'pack-essentiel',
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
        </svg>
      ),
      title: 'Pack Essentiel',
      description: 'Votre meilleur commercial en ligne qui travaille pour vous 24h/24, même quand vous dormez.',
      benefit: 'Visibilité immédiate dans votre zone géographique',
      link: '/services#pack-essentiel',
    },
    {
      id: 'pack-professionnel',
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      title: 'Pack Professionnel',
      description: 'Transformez vos visiteurs en clients grâce à un site complet et parfaitement optimisé.',
      benefit: 'Augmentation des demandes de devis et réservations',
      link: '/services#pack-professionnel',
    },
    {
      id: 'pack-premium',
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Pack Premium',
      description: 'Une solution digitale complète pour vous démarquer de la concurrence et générer des leads qualifiés.',
      benefit: 'Génération continue de nouveaux clients',
      link: '/services#pack-premium',
    }
  ]
  
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/0 to-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Des solutions qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">génèrent des résultats</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Votre site web n&apos;est pas une dépense, c&apos;est un investissement qui doit vous rapporter des clients et développer votre activité.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
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
              <Link href={service.link}>
                <div className="h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                  {service.icon}
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20 inline-block mb-4">
                    <span className="text-sm font-medium text-purple-300">{service.benefit}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="flex items-center text-purple-400 font-medium">
                    Voir les détails
                    <svg 
                      className={`w-5 h-5 ml-2 transition-transform duration-300 ${hoveredService === service.id ? 'translate-x-1' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            href="/services"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium text-white hover:from-purple-600 hover:to-blue-600 transition duration-300 relative z-20"
          >
            Découvrir tous les packs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}