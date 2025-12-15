"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      id: 'landing-page',
      title: 'Landing Page',
      price: '750€',
      description: 'Une page unique optimisée pour convertir vos visiteurs en clients.',
      features: [
        'Design sur mesure',
        'Formulaire de contact',
        'Optimisation SEO',
        'Responsive mobile',
        'Livraison 7 jours'
      ],
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 'site-vitrine',
      title: 'Site Vitrine',
      price: '1600€',
      description: 'Un site professionnel multi-pages pour établir votre présence en ligne.',
      features: [
        'Site multi-pages',
        'Blog intégré',
        'Système de RDV',
        'Analytics avancés',
        'Livraison 2-3 semaines'
      ],
      popular: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'e-commerce',
      title: 'E-commerce',
      price: 'À partir de 2200€',
      description: 'Une boutique en ligne complète pour vendre vos produits.',
      features: [
        'Boutique complète',
        'Paiements sécurisés',
        'Gestion des stocks',
        'Tableau de bord',
        'SEO e-commerce'
      ],
      color: 'from-emerald-500 to-teal-600'
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
            Services
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Des solutions adaptées à vos besoins
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Choisissez la formule qui correspond le mieux à votre projet. 
            Chaque site est unique et conçu spécifiquement pour votre activité.
          </motion.p>
        </div>
        
        {/* Grille de services */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${service.popular ? 'md:-mt-4 md:-mb-4' : ''}`}
            >
              {/* Badge populaire */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Recommandé
                  </span>
                </div>
              )}
              
              <div className={`h-full bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border ${service.popular ? 'border-blue-500/30' : 'border-white/5'} p-8 hover:border-white/20 transition-all duration-300`}>
                
                {/* Titre et prix */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Link href="/contact">
                  <button className={`w-full py-3 px-6 rounded-full font-medium text-sm transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90' 
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}>
                    Demander un devis
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Note sur les frais */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-gray-900 border border-white/5 rounded-full px-5 py-2.5 mb-4">
            <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-gray-400 text-sm">
              + frais mensuels : <span className="text-white">25 à 50€</span> (hébergement & maintenance)
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            Besoin d&apos;une solution personnalisée ? <Link href="/contact" className="text-purple-400 hover:underline">Contactez-moi</Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
