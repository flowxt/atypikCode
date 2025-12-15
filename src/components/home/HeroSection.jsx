"use client";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Effet de particules en arrière-plan */}
      <div className="w-full h-full absolute inset-0 pointer-events-none">
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
        
        {/* Badge subtil */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Développeur web freelance en Haute-Savoie
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Créez votre site web
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400">
            professionnel
          </span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Je conçois des sites web élégants et performants qui valorisent 
          votre activité et transforment vos visiteurs en clients.
        </motion.p>

        {/* Tarifs clairs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10"
        >
          <div className="text-center px-4">
            <p className="text-2xl md:text-3xl font-bold text-white">750€</p>
            <p className="text-sm text-gray-500">Landing Page</p>
          </div>
          <div className="hidden md:block w-px bg-white/10"></div>
          <div className="text-center px-4">
            <p className="text-2xl md:text-3xl font-bold text-white">1600€</p>
            <p className="text-sm text-gray-500">Site Vitrine</p>
          </div>
          <div className="hidden md:block w-px bg-white/10"></div>
          <div className="text-center px-4">
            <p className="text-2xl md:text-3xl font-bold text-white">2200€+</p>
            <p className="text-sm text-gray-500">E-commerce</p>
          </div>
        </motion.div>

        {/* CTA principal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link 
            href="/contact" 
            className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
          >
            Demander un devis gratuit
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
          
          <Link 
            href="/services" 
            className="px-8 py-4 bg-transparent border border-white/20 rounded-full font-medium text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Découvrir mes services
          </Link>
        </motion.div>

        {/* Garanties */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Devis gratuit
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Livraison rapide
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Accompagnement inclus
          </div>
        </motion.div>
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
