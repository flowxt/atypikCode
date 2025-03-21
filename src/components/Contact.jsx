"use client"

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm text-sm font-medium text-purple-300 mb-3">
          Contactez-moi
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5">Discutons de votre projet</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Envoyez-moi un message et je vous répondrai dans les plus brefs délais.
        </p>
      </motion.div>
      
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-10 rounded-2xl border border-white/10 shadow-lg"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-gray-200 font-medium">Nom</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-gray-700/50 rounded-xl border border-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-gray-200 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-gray-700/50 rounded-xl border border-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                  placeholder="Votre email"
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-2 text-gray-200 font-medium">Sujet</label>
              <input 
                type="text" 
                className="w-full p-4 bg-gray-700/50 rounded-xl border border-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                placeholder="Sujet de votre message"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-gray-200 font-medium">Message</label>
              <textarea 
                className="w-full p-4 bg-gray-700/50 rounded-xl border border-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all h-40 resize-none"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.01, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold shadow-lg shadow-purple-600/20"
            >
              Envoyer le message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}