"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServiceDetail({ service }) {
  // Mapping des images par ID de service
  const serviceImages = {
    'pack-essentiel': '/image/artisan.jpg',
    'pack-professionnel': '/image/entrepreneur.jpg',
    'pack-premium': '/image/societe.jpg'
  }

  // Données des exemples clients par type de service
  const clientExamples = {
    'pack-essentiel': [
      {
        title: 'Site vitrine pour sophro-analyste',
        image: '/image/landing.png',
        description: 'Nouveaux clients et réservations après seulement 2 semaines en ligne + visibilité Google accrue'
      }
    ],
    'pack-professionnel': [
      {
        title: 'Site pour thérapeute holistique',
        image: '/image/site-vitrine.png',
        description: 'Calendrier de rendez-vous rempli à 80% après 2 mois en ligne'
      }
    ],
    'pack-premium': [
      {
        title: 'Site pour entreprise de sécurité privée à Genève',
        image: '/image/sar.png',
        description: 'Génération de 5-8 prospects qualifiés par mois'
      }
    ]
  }

  // Récupération des exemples pour ce service
  const examples = clientExamples[service.id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-10 rounded-2xl border border-white/10 shadow-lg"
    >
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300 mb-3">
          Idéal pour: {service.idealFor}
        </span>
      </div>
      
      {/* Image en pleine largeur pour mobile */}
      <div className="md:hidden mb-8">
        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl">
          <Image 
            src={serviceImages[service.id]} 
            alt={service.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-xl text-gray-300 mb-8">{service.description}</p>
          
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Ce que vous obtenez</h3>
          <ul className="space-y-3 mb-8">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-400 text-lg mt-0.5">★</span>
                <span className="text-white font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <h3 className="text-xl font-semibold mb-4">Inclus dans ce pack</h3>
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-400 text-lg mt-0.5">✓</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="p-6 mt-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-white/5 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                À partir de {service.priceFrom}€
              </p>
              <a 
                href="#booking" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium text-white text-center hover:from-purple-600 hover:to-blue-600 transition duration-300 relative z-20"
              >
                Réserver un appel gratuit
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-3">Possibilité de paiement en plusieurs fois</p>
          </div>
        </div>
        
        {/* Image plus grande pour desktop */}
        <div className="hidden md:block md:w-1/2">
          <div className="w-full h-full aspect-video relative overflow-hidden rounded-xl">
            <Image 
              src={serviceImages[service.id]} 
              alt={service.title}
              fill
              className="object-cover object-center"
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Exemples de réalisations */}
      {examples.length > 0 && (
        <div className="mt-12 border-t border-gray-700/30 pt-10">
          <h3 className="text-2xl font-bold mb-6">Exemples de réalisations</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl overflow-hidden border border-white/5 group">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={example.image}
                    alt={example.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2">{example.title}</h4>
                  <p className="text-sm text-gray-300">
                    <span className="inline-block bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-medium mb-2">
                      Résultat
                    </span> {' '}
                    {example.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}