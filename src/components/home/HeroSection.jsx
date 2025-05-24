"use client";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Conteneur principal avec z-index pour placer le texte au-dessus de l'effet */}
      <div className="relative z-20 text-center max-w-6xl px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:text-7xl text-4xl lg:text-8xl font-bold text-white pb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-700">Atypik</span> Code
        </motion.h1>
        
        {/* Traits animés entre le titre et le sous-titre */}
        <div className="relative h-10 my-6">
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "70%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="absolute left-0 right-0 mx-auto h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm"
          />
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "70%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="absolute left-0 right-0 mx-auto h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "40%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
            className="absolute left-0 right-0 mx-auto h-[5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"
          />
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "40%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
            className="absolute left-0 right-0 mx-auto h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Votre site web qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">génère des clients</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
        >
          Développement de sites web professionnels optimisés SEO pour entreprises et professionnels. 
          Transformez vos visiteurs en clients avec une présence digitale qui convertit.
        </motion.p>

        {/* Badge de confiance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-4 py-2 rounded-full border border-purple-500/20 mb-8"
        >
          <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="text-sm font-medium text-purple-300">10+ sites créés • Note 5/5</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href="/contact" 
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <span className="flex items-center justify-center">
              Démarrer mon projet
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </Link>
          <Link 
            href="/services" 
            className="px-8 py-4 bg-transparent border-2 border-white/20 rounded-lg font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            Voir mes services
          </Link>
        </motion.div>
      </div>

      {/* Effet de particules */}
      <div className="w-full h-full absolute inset-0">
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8BB8FE"
          speed={2}
        />

        {/* Radial Gradient pour adoucir les bords */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
      </div>
    </div>
  );
} 