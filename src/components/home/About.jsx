"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Cercle décoratif */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
              
              {/* Photo */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/image/flo-sansfond.png"
                  alt="Florian - Développeur web"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">
              À propos
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Florian, développeur web passionné
            </h2>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Passionné par le développement web, j&apos;adore donner vie aux projets 
                professionnels de mes clients. Chaque site que je crée est une nouvelle 
                aventure créative.
              </p>
              
              <p>
                Après un premier échange, je capte rapidement ce que vous souhaitez 
                et je crée votre site avec mon savoir-faire, en utilisant les 
                dernières technologies web.
              </p>
              
              <p>
                Le référencement naturel (SEO) est un domaine que je maîtrise bien. 
                Je m&apos;assure que votre site soit visible sur Google et attire 
                les bons visiteurs.
              </p>
            </div>
            
            {/* Stats rapides */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-sm text-gray-500">Clients en 2025</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5/5</p>
                <p className="text-sm text-gray-500">Note moyenne</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-gray-500">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

