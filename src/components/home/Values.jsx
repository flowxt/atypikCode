"use client"

import { motion } from 'framer-motion'

export default function Values() {
  const values = [
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: 'Qualité',
      description: 'Je m\'engage à livrer un code propre, performant et maintenable. Chaque projet est développé selon les meilleures pratiques du secteur.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      ),
      title: 'Transparence',
      description: 'Je vous tiens informé de l\'avancement de votre projet à chaque étape. Aucune surprise, aucun frais caché : tout est clair dès le départ.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>
      ),
      title: 'Communication',
      description: 'Je privilégie une communication claire et régulière pour comprendre précisément vos besoins et vous proposer les solutions les plus adaptées.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: 'Réactivité',
      description: 'Je m\'adapte rapidement à vos demandes et aux évolutions de votre projet pour vous offrir un service efficace et dans les délais convenus.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      title: 'Innovation',
      description: 'Je me forme continuellement pour vous proposer les technologies les plus récentes et pertinentes qui feront la différence sur votre projet.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: 'Accompagnement',
      description: 'Je reste à vos côtés après la livraison de votre projet pour vous former et vous aider à tirer le meilleur parti de votre solution.'
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/50 to-gray-900/0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">valeurs</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Des principes qui guident ma façon de travailler pour vous offrir une expérience de qualité.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -150px 0px" }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut",
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
            >
              {value.icon}
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}