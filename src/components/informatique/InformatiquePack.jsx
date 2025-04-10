"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InformatiquePack({ pack }) {
  // Images par défaut si aucune n'est fournie
  const defaultImages = {
    'pack-installation': '/image/install.jpg',
    'pack-apple': '/image/appli.jpg',
    'pc-sur-mesure': '/image/pc-sur-mesure.jpeg'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-10 rounded-2xl border border-white/10 shadow-lg scroll-mt-32 pt-4"
    >
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300 mb-3">
          Idéal pour: {pack.idealFor}
        </span>
      </div>
      
      {/* Image en pleine largeur pour mobile */}
      <div className="md:hidden mb-8">
        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl">
          <Image 
            src={pack.image || defaultImages[pack.id] || '/image/informatique/default.jpg'} 
            alt={pack.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{pack.title}</h2>
          <p className="text-xl text-gray-300 mb-8">{pack.description}</p>
          
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Ce que vous obtenez</h3>
          <ul className="space-y-3 mb-8">
            {pack.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-400 text-lg mt-0.5">★</span>
                <span className="text-white font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <h3 className="text-xl font-semibold mb-4">Services inclus</h3>
          <ul className="space-y-3 mb-8">
            {pack.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-400 text-lg mt-0.5">✓</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="p-6 mt-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-white/5 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  À partir de {pack.priceFrom}€
                </p>
                {pack.priceInfo && (
                  <p className="text-sm text-gray-400 mt-1">{pack.priceInfo}</p>
                )}
              </div>
              <a 
                href="#booking" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium text-white text-center hover:from-purple-600 hover:to-blue-600 transition duration-300 relative z-20"
              >
                Demander un devis
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-3">Déplacement gratuit en Haute-Savoie pour les prestations &gt; 2h</p>
          </div>
        </div>
        
        {/* Image plus grande pour desktop */}
        <div className="hidden md:block md:w-1/2">
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-xl">
            <Image 
              src={pack.image || defaultImages[pack.id] || '/image/informatique/default.jpg'} 
              alt={pack.title}
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
} 