"use client";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Conteneur principal avec z-index pour placer le texte au-dessus de l'effet */}
      <div className="relative z-20 text-center max-w-6xl px-4 pt-20 md:pt-0">
        
        {/* Badge d'urgence en haut avec marge mobile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 px-4 md:px-6 py-2 md:py-3 rounded-full border border-red-500/30 mb-6 md:mb-8 mt-4 md:mt-0"
        >
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2 md:mr-3 animate-pulse"></div>
          <span className="text-xs md:text-sm font-medium text-red-300 text-center leading-tight">
            🔥 OFFRE LIMITÉE : -20% jusqu&apos;au 01 septembre
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-6xl lg:text-7xl font-bold text-white pb-4 md:pb-6 leading-tight"
        >
          Votre site web qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-700">triple</span> vos clients
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto font-medium px-2"
        >
          Fini les sites invisibles ! Je crée des sites web qui transforment vos visiteurs en clients payants.
        </motion.p>

        {/* Preuves sociales plus fortes - adaptées mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10 px-2"
        >
          <div className="flex items-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-3 md:px-4 py-2 rounded-full border border-green-500/20">
            <div className="flex -space-x-2 mr-2 md:mr-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-xs md:text-sm font-medium text-green-300">10 entrepreneurs satisfaits</span>
          </div>
          
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span className="text-xs md:text-sm font-medium text-white">Note parfaite 5/5</span>
          </div>
        </motion.div>

        {/* CTA principal adapté mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 px-2"
        >
          <Link 
            href="/contact" 
            className="group relative px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-white text-base md:text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center justify-center">
              🚀 OBTENIR MON DEVIS GRATUIT
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full animate-pulse">
              -20%
            </div>
          </Link>
          
          <Link 
            href="/services" 
            className="px-6 md:px-8 py-4 md:py-5 bg-transparent border-2 border-purple-400/50 rounded-lg font-semibold text-purple-300 hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 text-sm md:text-base"
          >
            Voir mes réalisations
          </Link>
        </motion.div>

        {/* Garantie et urgence - adaptée mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-400 px-2"
        >
          <div className="flex items-center">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Résultats garantis
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Réponse sous 24h
          </div>
          <div className="flex items-center text-red-400">
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            7 places restantes
          </div>
        </motion.div>
      </div>

      {/* Effet de particules */}
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8BB8FE"
          speed={2}
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
      </div>
    </div>
  );
} 