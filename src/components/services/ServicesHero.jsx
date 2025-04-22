"use client";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <div className="h-[70vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Conteneur principal avec z-index pour placer le texte au-dessus de l'effet */}
      <div className="relative z-20 text-center max-w-5xl px-4">
        <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 pb-4">
          Nos Services
        </h1>
        
        {/* Traits animés entre le titre et le sous-titre */}
        <div className="relative h-10 my-4">
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "70%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="absolute left-0 right-0 mx-auto h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
          />
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "70%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="absolute left-0 right-0 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          />
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "40%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
            className="absolute left-0 right-0 mx-auto h-[5px] bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-sm"
          />
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "40%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
            className="absolute left-0 right-0 mx-auto h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg md:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto"
        >
          Des Solutions Web Qui Génèrent des Résultats
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl border border-white/10 max-w-3xl mx-auto mt-8"
        >
          <p className="text-white">
            Votre site web doit être bien plus qu&apos;une simple présence en ligne - il doit être votre meilleur commercial, travaillant pour vous 24h/24.
          </p>
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
          particleColor="#C684FF"
          speed={2}
        />

        {/* Radial Gradient pour adoucir les bords */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
      </div>
    </div>
  );
} 