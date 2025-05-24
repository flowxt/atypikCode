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
        <svg className="w-16 h-16 text-purple-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
        </svg>
      ),
      title: 'Landing Page',
      price: 'À partir de 800€',
      description: 'Une page optimisée qui convertit vos visiteurs en prospects qualifiés.',
      features: ['Design moderne', 'Optimisation SEO', 'Formulaire de contact', 'Responsive'],
      popular: false,
      link: '/services#pack-essentiel',
    },
    {
      id: 'pack-professionnel',
      icon: (
        <svg className="w-16 h-16 text-purple-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      title: 'Site Vitrine',
      price: 'À partir de 1200€',
      description: 'Un site complet pour présenter votre entreprise et générer des leads.',
      features: ['Plusieurs pages', 'Blog intégré', 'Galerie photos', 'Analytics'],
      popular: true,
      link: '/services#pack-professionnel',
    },
    {
      id: 'pack-premium',
      icon: (
        <svg className="w-16 h-16 text-purple-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Solution Complète',
      price: 'Sur mesure',
      description: 'Application web sur mesure avec fonctionnalités avancées.',
      features: ['Développement sur mesure', 'Base de données', 'Espace client', 'Maintenance'],
      popular: false,
      link: '/services#pack-premium',
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
            <span className="text-white">Choisissez votre</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">solution</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Des solutions adaptées à vos besoins et votre budget
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Plus populaire
                  </span>
                </div>
              )}
              
              <Link href={service.link}>
                <div className={`h-full bg-gradient-to-br ${service.popular ? 'from-purple-900/50 to-blue-900/50 border-purple-500/50' : 'from-gray-800/80 to-gray-900/80 border-white/10'} p-8 rounded-2xl border hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/10`}>
                  
                  <div className="text-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                      {service.price}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center text-purple-400 font-medium">
                      En savoir plus
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
          className="text-center mt-16"
        >
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Démarrer mon projet
          </Link>
        </motion.div>
      </div>
    </section>
  )
}