"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-16 bg-gradient-to-b from-gray-900/50 to-[#0A0A0F]/80">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm text-sm font-medium text-purple-300 mb-3">
          À propos
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5">L'expertise au service de votre entreprise</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Passionné de développement web, je mets mon expertise au service de votre réussite digitale.
        </p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Développeur web basé en Haute-Savoie
          </h3>
          
          <p className="text-gray-300 mb-6 text-lg">
            Spécialisé dans la création de sites web et d'applications sur mesure depuis plus de 5 ans, je combine créativité et expertise technique pour offrir des solutions digitales qui se démarquent.
          </p>
          
          <p className="text-gray-300 mb-6 text-lg">
            Ma mission est de traduire vos objectifs commerciaux en une présence en ligne efficace et performante, adaptée aux besoins spécifiques de votre activité et de votre public cible.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Sites web sur mesure</h4>
                <p className="text-gray-300">
                  Chaque projet est unique et mérite une approche personnalisée qui reflète votre identité et répond à vos objectifs spécifiques.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Performance et optimisation</h4>
                <p className="text-gray-300">
                  Vos sites sont optimisés pour le référencement, la vitesse de chargement et l'expérience utilisateur afin de maximiser votre impact en ligne.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-pink-500/20 rounded-lg mt-1">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">Technologies modernes</h4>
                <p className="text-gray-300">
                  Utilisation des dernières technologies pour créer des sites web durables, évolutifs et faciles à maintenir.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full filter blur-2xl"></div>
          
          <div className="relative p-2 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl border border-white/10">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xl mb-3">Mon processus de travail</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold shrink-0">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium text-white">Analyse et planification</h5>
                        <p className="text-gray-400">Comprendre vos besoins et définir les objectifs du projet</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold shrink-0">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium text-white">Design et maquettes</h5>
                        <p className="text-gray-400">Création d'interfaces visuelles attrayantes et fonctionnelles</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium text-white">Développement</h5>
                        <p className="text-gray-400">Transformation des maquettes en sites web fonctionnels</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400 font-bold shrink-0">
                        4
                      </div>
                      <div>
                        <h5 className="font-medium text-white">Tests et optimisation</h5>
                        <p className="text-gray-400">Assurer la performance et la compatibilité multi-supports</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 font-bold shrink-0">
                        5
                      </div>
                      <div>
                        <h5 className="font-medium text-white">Lancement et suivi</h5>
                        <p className="text-gray-400">Mise en ligne et accompagnement post-lancement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}