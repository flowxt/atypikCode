"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { packs, monthlyMaintenance } from '@/data/packs'

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-black">
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
            Des formules transparentes et évolutives. Choisissez celle qui correspond à votre stade,
            on adapte ensuite ensemble selon vos besoins.
          </motion.p>
        </div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${service.popular ? 'lg:-mt-4 lg:-mb-4' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    ⭐ Le plus choisi
                  </span>
                </div>
              )}

              <div className={`h-full bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border ${service.popular ? 'border-blue-500/40' : 'border-white/5'} p-7 hover:border-white/20 transition-all duration-300 flex flex-col`}>

                <div className="mb-5">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{service.tagline}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.priceLabel}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Livraison : {service.delivery}</p>
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-7 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-2.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

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
              Maintenance & hébergement : <span className="text-white">{monthlyMaintenance}</span> en option
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            Pas sûr de la formule ? <Link href="/contact" className="text-purple-400 hover:underline">Discutons-en</Link>, c&apos;est gratuit.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
