"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { packs, monthlyMaintenance } from '@/data/packs'

export default function HomePacks() {
  return (
    <section className="py-24 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
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
            Un site vitrine pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">à partir de 1 000€</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Des tarifs transparents et adaptés à votre stade : que vous lanciez votre activité
            ou que vous vouliez passer un cap, choisissez la formule qui vous correspond.
          </motion.p>
        </div>

        {/* Grille des packs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                pack.popular
                  ? 'bg-gradient-to-b from-blue-900/30 to-gray-950 border-2 border-blue-500/40 lg:-mt-4 lg:-mb-4 shadow-xl shadow-blue-500/10'
                  : 'card-glow'
              } transition-all`}
            >
              {/* Badge populaire */}
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                    ⭐ Le plus choisi
                  </span>
                </div>
              )}

              {/* Header du pack */}
              <div className="mb-5">
                <p className="text-xs text-gray-500 uppercase tracking-wide">{pack.tagline}</p>
                <h3 className="text-xl font-bold text-white mt-1">{pack.name}</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">{pack.description}</p>
              </div>

              {/* Prix */}
              <div className="mb-5 pb-5 border-b border-white/5">
                <span className={`text-2xl font-bold bg-gradient-to-r ${pack.color} bg-clip-text text-transparent`}>
                  {pack.priceLabel}
                </span>
                <p className="text-xs text-gray-500 mt-1">Livraison : {pack.delivery}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6 flex-grow">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-400 text-sm">
                    <svg className="w-4 h-4 text-green-400 mr-2.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`block w-full text-center py-3 rounded-full font-medium text-sm transition-all ${
                  pack.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90'
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
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            <span className="text-purple-400">💡</span> Un forfait <span className="text-gray-300">maintenance & hébergement</span> ({monthlyMaintenance})
            est proposé en option pour que votre site reste rapide, à jour et sécurisé en permanence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
