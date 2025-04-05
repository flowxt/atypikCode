"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-900/10 to-transparent opacity-70"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 z-10 mb-10 md:mb-0 pr-0 md:pr-10"
      >
        <div className="inline-block mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
          <span className="text-sm font-medium text-purple-300">Développeur Web en Haute-Savoie</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Sites web premium
          </span> <br />pour les entreprises <br />qui se démarquent
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-xl">
          Je crée des sites web et landing pages d'exception pour auto-entrepreneurs, 
          PME et entreprises en Haute-Savoie et partout en France.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <Link href="/services">
            <motion.button 
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-600/20"
            >
              Découvrir mes services
            </motion.button>
          </Link>
          
          <Link href="/services#booking">
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 text-white font-semibold backdrop-blur-sm transition-all"
            >
              Réserver un appel gratuit
            </motion.button>
          </Link>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="w-full md:w-1/2 z-10 relative"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10 backdrop-blur-sm h-[400px] md:h-[600px] w-full group">
          <Image
            src="/image/florian-dev.png"
            alt="Développeur Web en Haute-Savoie"
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            className="transition-transform duration-700 group-hover:scale-105"
            priority
          />
          
          {/* Effets décoratifs sur l'image */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
          <div className="absolute -bottom-2 -left-2 -right-2 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
        
        {/* Badge flottant */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute -bottom-6 left-10 bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-lg"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">M</div>
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">S</div>
              <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">P</div>
            </div>
            <div>
              <p className="text-white font-semibold">+4 clients satisfaits</p>
              <p className="text-gray-400 text-sm">4 Sites livrés en 2025</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}