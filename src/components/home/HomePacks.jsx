"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePacks() {
  const packs = [
    {
      id: 'landing-conversion',
      name: "L'Essentiel",
      subtitle: "Landing Page",
      description: "Idéal pour lancer une offre ou capturer des leads.",
      price: "À partir de 950€",
      features: [
        "Page unique optimisée conversion",
        "Design sur-mesure Next.js",
        "Responsive mobile parfait",
        "Optimisation SEO de base",
        "Formulaire de contact intégré",
      ],
      popular: false
    },
    {
      id: 'site-business',
      name: "Site Business",
      subtitle: "Vitrine complète",
      description: "Une présence complète pour asseoir votre crédibilité.",
      price: "À partir de 1 900€",
      features: [
        "Jusqu'à 5 pages sur-mesure",
        "Technologie Next.js ultra-rapide",
        "Design premium personnalisé",
        "Référencement SEO avancé",
        "Formulaire + intégrations",
        "Analytics & suivi des conversions"
      ],
      popular: true
    },
    {
      id: 'sur-mesure',
      name: "Sur Mesure",
      subtitle: "E-commerce & Apps",
      description: "Pour les projets ambitieux qui veulent se démarquer.",
      price: "Sur devis",
      features: [
        "Solution e-commerce complète",
        "Application web sur-mesure",
        "Fonctionnalités avancées",
        "Performance maximale",
        "Accompagnement dédié",
        "Architecture scalable",
        "Support prioritaire"
      ],
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-black relative z-10">
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
        
        {/* Grille des packs */}
        <div className="grid md:grid-cols-3 gap-6">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                pack.popular 
                  ? 'bg-gradient-to-b from-purple-900/30 to-gray-950 border-2 border-purple-500/30' 
                  : 'bg-gradient-to-b from-gray-900 to-gray-950 border border-white/5'
              } hover:border-white/10 transition-all`}
            >
              {/* Badge populaire */}
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    Le plus choisi
                  </span>
                </div>
              )}
              
              {/* Header du pack */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 uppercase tracking-wide">{pack.subtitle}</p>
                <h3 className="text-2xl font-bold text-white mt-1">{pack.name}</h3>
                <p className="text-gray-400 mt-2 text-sm">{pack.description}</p>
              </div>
              
              {/* Prix */}
              <div className="mb-6 pb-6 border-b border-white/5">
                <span className="text-3xl font-bold text-white">{pack.price}</span>
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-400 text-sm">
                    <svg className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Link
                href="/contact"
                className={`block w-full text-center py-3 rounded-full font-medium transition-all ${
                  pack.popular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                Demander un devis
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Note maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            <span className="text-purple-400">💡</span> Peur de gérer votre site seul ? 
            Je propose un <span className="text-gray-300">forfait maintenance</span> (50-150€/mois) 
            pour que vous gardiez l&apos;esprit tranquille.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
