"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

// Composants d'illustration pour chaque pack
export const PackIllustration = ({ type }) => {
  if (type === "pack-essentiel") {
    return (
      <div className="pack-illustration mb-6">
        <svg className="w-full h-44" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="40" width="80" height="80" rx="4" fill="url(#gradientEssentiel)" />
          <path d="M70 60H130M70 80H110" stroke="white" strokeWidth="2" opacity="0.7" />
          <rect x="150" y="50" width="30" height="60" rx="4" fill="#6d28d9" opacity="0.8" />
          <path d="M90 100C90 100 95 95 105 95C115 95 120 100 120 100" stroke="white" strokeWidth="1.5" opacity="0.9" />
          <circle cx="40" cy="65" r="15" fill="#8b5cf6" opacity="0.7" />
          <path d="M35 65L40 70L45 60" stroke="white" strokeWidth="1.5" />
          <defs>
            <linearGradient id="gradientEssentiel" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-center text-sm text-purple-300 mt-1">Présence web essentielle</p>
      </div>
    )
  }
  
  if (type === "pack-professionnel") {
    return (
      <div className="pack-illustration mb-6">
        <svg className="w-full h-44" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="30" width="120" height="90" rx="6" fill="url(#gradientPro)" />
          <path d="M60 50H140M60 70H120M60 90H100" stroke="white" strokeWidth="2" opacity="0.7" />
          <circle cx="150" cy="100" r="20" fill="#ec4899" opacity="0.8" />
          <path d="M145 100L150 105L155 95" stroke="white" strokeWidth="2" />
          <circle cx="50" cy="110" r="15" fill="#8b5cf6" opacity="0.8" />
          <rect x="150" y="40" width="30" height="40" rx="4" fill="#3b82f6" opacity="0.8" />
          <path d="M80 110C80 110 90 100 110 100C130 100 140 110 140 110" stroke="white" strokeWidth="1.5" opacity="0.9" />
          <defs>
            <linearGradient id="gradientPro" x1="0" y1="0" x2="150" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9333ea" />
              <stop offset="1" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-center text-sm text-purple-300 mt-1">Site complet avec conversions</p>
      </div>
    )
  }
  
  if (type === "pack-premium") {
    return (
      <div className="pack-illustration mb-6">
        <svg className="w-full h-44" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="20" width="140" height="100" rx="8" fill="url(#gradientPremium)" />
          <path d="M50 40H150M50 60H140M50 80H120M50 100H90" stroke="white" strokeWidth="2" opacity="0.7" />
          <circle cx="160" cy="40" r="15" fill="#f472b6" opacity="0.8" className="animate-pulse" />
          <rect x="30" y="110" width="30" height="25" rx="4" fill="#4f46e5" opacity="0.8" />
          <rect x="140" y="70" width="40" height="30" rx="6" fill="#7c3aed" opacity="0.8" />
          <path d="M150 85 L160 80 L170 85" stroke="white" strokeWidth="1.5" />
          <path d="M70 115C70 115 85 105 110 105C135 105 150 115 150 115" stroke="white" strokeWidth="1.5" opacity="0.9" />
          <defs>
            <linearGradient id="gradientPremium" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7c3aed" />
              <stop offset="0.5" stopColor="#6366f1" />
              <stop offset="1" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-center text-sm text-purple-300 mt-1">Solution digitale complète</p>
      </div>
    )
  }
  
  return null;
}

export default function HomePacks() {
  const packs = [
    {
      id: "pack-essentiel",
      title: "Pack Essentiel",
      price: "À partir de 800€",
      description: "Idéal pour les artisans et autoentrepreneurs en démarrage",
      features: [
        "Site vitrine 1-3 pages",
        "Formulaire de contact",
        "Optimisation mobile",
        "Référencement local"
      ],
      highlight: "Visibilité locale garantie",
      link: "/services#pack-essentiel",
    },
    {
      id: "pack-professionnel",
      title: "Pack Professionnel",
      price: "À partir de 1500€",
      description: "Pour les PME et indépendants établis",
      features: [
        "Site multi-pages complet",
        "Système de prise de rendez-vous",
        "Galerie photo et témoignages",
        "Optimisation SEO avancée"
      ],
      highlight: "Le plus populaire",
      isPopular: true,
      link: "/services#pack-professionnel",
    },
    {
      id: "pack-premium",
      title: "Pack Premium",
      price: "À partir de 2800€",
      description: "Solution complète pour entreprises en croissance",
      features: [
        "Site web premium personnalisé",
        "Blog intégré avec plan éditorial",
        "Fonctionnalités sur mesure",
        "Accompagnement mensuel"
      ],
      highlight: "Génération de leads maximale",
      link: "/services#pack-premium",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/30 to-gray-900/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Des formules adaptées à <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">vos besoins</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Choisissez le pack qui correspond à votre activité et vos objectifs. Tous nos packs incluent un design personnalisé et une optimisation SEO.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${pack.isPopular ? 'md:-mt-4 md:-mb-4 z-10' : ''}`}
            >
              <div className={`h-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border ${pack.isPopular ? 'border-purple-500/30' : 'border-white/10'} overflow-hidden shadow-lg ${pack.isPopular ? 'shadow-purple-500/20' : ''}`}>
                {pack.isPopular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-1.5 text-center">
                    <span className="text-white text-sm font-medium">Le plus adapté pour votre activité</span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300">
                      {pack.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{pack.title}</h3>
                  <p className="text-gray-400 mb-5">{pack.description}</p>
                  
                  {/* Illustration SVG pour chaque pack */}
                  <PackIllustration type={pack.id} />
                  
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
                    {pack.price}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {pack.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-purple-400 text-lg mt-0.5">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Link href={pack.link}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 rounded-lg font-medium transition-all ${
                          pack.isPopular
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                            : 'bg-gradient-to-r from-gray-700/40 to-gray-800/40 border border-white/10 text-white hover:bg-white/10'
                        }`}
                      >
                        Voir les détails
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Besoin d'une solution sur mesure ?</p>
          <Link href="/services#booking">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-transparent border border-purple-500/30 rounded-lg font-medium text-purple-400 hover:bg-purple-500/10 transition-all"
            >
              Discutons de votre projet
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
} 