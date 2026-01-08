"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texte - Approche "Vous d'abord" */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">
              Votre partenaire digital
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Vous avez un savoir-faire.
              <br />
              <span className="text-gray-400">Votre site doit le refléter.</span>
            </h2>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Votre site actuel ne vous apporte pas de clients ? 
                Vous méritez mieux qu&apos;un template WordPress qui ressemble à des milliers d&apos;autres.
              </p>
              
              <p>
                <span className="text-white">Je ne me contente pas de coder.</span> Je construis 
                votre <span className="text-white">outil de vente</span>. Un site pensé pour convertir, 
                pas juste pour être "joli".
              </p>
              
              <p>
                J&apos;utilise <span className="text-purple-400">Next.js</span> — la même technologie 
                que Netflix ou Uber — pour garantir que votre site soit 
                <span className="text-white"> plus rapide</span> et 
                <span className="text-white"> mieux référencé</span> que celui de vos concurrents.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-sm text-gray-500">Projets livrés</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5/5</p>
                <p className="text-sm text-gray-500">Avis Google</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">7j</p>
                <p className="text-sm text-gray-500">Livraison rapide</p>
              </div>
            </div>
          </motion.div>
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative order-first md:order-last"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Cercle décoratif */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
              
              {/* Photo */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/image/flo-sansfond.png"
                  alt="Florian - Développeur web expert Next.js"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium z-20">
                Expert Next.js
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
