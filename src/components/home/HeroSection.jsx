"use client";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Effet de particules en arrière-plan */}
      <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#a78bfa"
          speed={1.5}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black/95 to-black pointer-events-none"></div>
      </div>

      {/* Cercles décoratifs subtils */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Contenu principal */}
      <div className="relative z-20 text-center max-w-5xl px-6 py-20">
        
        {/* Badge de preuve sociale */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400">
            <span className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </span>
            5/5 sur Google • 20+ entrepreneurs accompagnés
          </span>
        </motion.div>

        {/* Titre principal - PUNCH */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Ne perdez plus de clients
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400">
            à cause d&apos;un site lent.
          </span>
        </motion.h1>
        
        {/* Sous-titre orienté bénéfices */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Je développe des sites web <span className="text-white font-medium">ultra-performants</span> avec Next.js, 
          conçus pour <span className="text-white font-medium">Google</span> et la <span className="text-white font-medium">conversion</span>. 
          Rapides, sécurisés et sur-mesure.
        </motion.p>

        {/* CTA principal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <Link 
            href="/contact" 
            className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
          >
            Discuter de mon projet
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
          
          <Link 
            href="#portfolio" 
            className="px-8 py-4 bg-transparent border border-white/20 rounded-full font-medium text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Voir mes réalisations
          </Link>
        </motion.div>

        {/* Micro-garanties */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm text-gray-500"
        >
          Réponse sous 24h • Devis gratuit • Sans engagement
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white/40 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
