"use client"

import { motion } from 'framer-motion'

export default function ServiceDetail({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-10 rounded-2xl border border-white/10 shadow-lg"
    >
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3">
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
        
        <div className="md:w-1/3">
          <div className="bg-gray-900/70 p-6 rounded-xl border border-white/10 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p className="text-gray-400">Image illustrative</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}