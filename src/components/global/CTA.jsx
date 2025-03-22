"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA({ title, description, buttonText, buttonLink }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl p-10 md:p-16 shadow-2xl shadow-purple-900/20 border border-white/10 backdrop-blur-sm"
    >
      {/* Éléments de design */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-10">
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            {title}
          </h2>
          <p className="text-xl text-gray-300">
            {description}
          </p>
        </div>
        
        <div className="md:w-1/3 flex md:justify-end">
          <Link href={buttonLink}>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto whitespace-nowrap px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-600/30 text-lg"
            >
              {buttonText}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}