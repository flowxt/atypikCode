"use client"

import { motion } from 'framer-motion'

export default function ProcessSteps({ steps }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 text-center">Notre processus</h3>
      
      <div className="relative">
        {/* Ligne de connexion */}
        <div className="absolute left-[22px] top-8 bottom-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg z-10 relative">
                  {index + 1}
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 border border-white/10 flex-1">
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}