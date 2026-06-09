"use client";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Grille technique en arrière-plan */}
      <div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>

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

      {/* Spotlight central + cercles décoratifs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>
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
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm text-sm text-gray-300">
            <span className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </span>
            <span className="font-medium text-white mr-1.5">5/5 sur Google</span> • 20+ entrepreneurs accompagnés
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
          <span className="text-gradient-animated">
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
            className="group btn-glow px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-base inline-flex items-center justify-center"
          >
            Discuter de mon projet
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
          
          <Link 
            href="#portfolio" 
            className="px-8 py-4 bg-white/[0.03] border border-white/15 backdrop-blur-sm rounded-full font-medium text-white hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300"
          >
            Voir mes réalisations
          </Link>
        </motion.div>

        {/* Micro-garanties */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm text-gray-500 mb-12"
        >
          Réponse sous 24h • Devis gratuit • Sans engagement
        </motion.p>

        {/* Bandeau technologies */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-gray-600">
            Propulsé par
          </span>
          {["Next.js", "React", "Tailwind CSS", "Vercel"].map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors"
            >
              {tech}
            </span>
          ))}
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
