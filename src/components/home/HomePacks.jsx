"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePacks() {
  const packs = [
    {
      id: "landing-page",
      title: "Landing Page",
      price: "750€",
      description: "Idéal pour tester le marché et générer des leads rapidement",
      features: [
        "Page unique ultra-performante",
        "Formulaire de contact intelligent",
        "Optimisation SEO complète",
        "Design responsive premium"
      ],
      link: "/services",
    },
    {
      id: "site-vitrine",
      title: "Site Vitrine",
      price: "1600€",
      description: "Pour les entreprises qui veulent une présence web complète",
      features: [
        "Site multi-pages professionnel",
        "Blog intégré pour le SEO",
        "Système de rendez-vous automatisé",
        "Analytics et suivi avancés"
      ],
      isPopular: true,
      link: "/services",
    },
    {
      id: "e-commerce",
      title: "Site E-commerce",
      price: "À partir de 2200€",
      description: "Pour vendre vos produits en ligne efficacement",
      features: [
        "Boutique en ligne complète",
        "Paiements sécurisés intégrés",
        "Gestion des stocks et commandes",
        "Tableau de bord administrateur"
      ],
      link: "/services",
    },
  ];

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
            Tarifs
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Des formules claires et transparentes
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Choisissez le pack qui correspond à votre activité. Design personnalisé et optimisation SEO inclus.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${pack.isPopular ? 'md:-mt-4 md:-mb-4' : ''}`}
            >
              <div className={`h-full bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border ${pack.isPopular ? 'border-purple-500/30' : 'border-white/5'} overflow-hidden`}>
                {pack.isPopular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-2 text-center">
                    <span className="text-white text-sm font-medium">Recommandé</span>
                  </div>
                )}
                
                <div className="p-8">
                  {/* Title & Price */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{pack.title}</h3>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      {pack.price}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6">{pack.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pack.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Link href={pack.link}>
                    <button className={`w-full py-3 rounded-full font-medium text-sm transition-all ${
                      pack.isPopular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}>
                      En savoir plus
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">Besoin d&apos;une solution sur mesure ?</p>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-full bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all">
              Discutons de votre projet
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
