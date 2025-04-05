"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServiceDetail({ service }) {
  // Mapping des images par ID de service
  const serviceImages = {
    'landing-page': '/image/landing.png',
    'site-vitrine': '/image/site-vitrine.png',
    'application': '/image/appli.jpg'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-10 rounded-2xl border border-white/10 shadow-lg"
    >
      {/* Image en pleine largeur pour mobile */}
      <div className="md:hidden mb-8">
        {serviceImages[service.id] && (
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
        )}
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-xl text-gray-300 mb-8">{service.description}</p>
          
          <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-purple-400 text-lg mt-0.5">✓</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="p-6 bg-gray-900/50 rounded-xl border border-white/5">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              À partir de {service.priceFrom}€
            </p>
          </div>
        </div>
        
        {/* Image plus grande pour desktop */}
        <div className="hidden md:block md:w-1/2">
          {serviceImages[service.id] && (
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
          )}
        </div>
      </div>
    </motion.div>
  )
}