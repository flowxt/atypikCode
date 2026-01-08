"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      id: 'landing-page',
      title: "L'Essentiel",
      subtitle: 'Landing Page',
      price: 'À partir de 950€',
      description: 'Idéal pour lancer une offre ou capturer des leads.',
      features: [
        'Page unique optimisée conversion',
        'Design sur-mesure Next.js',
        'Responsive mobile parfait',
        'Optimisation SEO de base',
        'Livraison 7 jours'
      ],
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 'site-business',
      title: 'Site Business',
      subtitle: 'Vitrine complète',
      price: 'À partir de 1 900€',
      description: 'Une présence complète pour asseoir votre crédibilité.',
      features: [
        "Jusqu'à 5 pages sur-mesure",
        'Technologie Next.js ultra-rapide',
        'Référencement SEO avancé',
        'Analytics & suivi conversions',
        'Livraison 2-3 semaines'
      ],
      popular: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'sur-mesure',
      title: 'Sur Mesure',
      subtitle: 'E-commerce & Apps',
      price: 'Sur devis',
      description: 'Pour les projets ambitieux qui veulent se démarquer.',
      features: [
        'Solution e-commerce complète',
        'Application web sur-mesure',
        'Fonctionnalités avancées',
        'Performance maximale',
        'Support prioritaire'
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
            Offres
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Des sites conçus pour convertir
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Chaque projet est unique. Choisissez la formule qui correspond à vos ambitions.
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
                    Le plus choisi
                  </span>
                </div>
              )}
              
              <div className={`h-full bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border ${service.popular ? 'border-blue-500/30' : 'border-white/5'} p-8 hover:border-white/20 transition-all duration-300`}>
                
                {/* Titre et prix */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">{service.subtitle}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
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
