"use client";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Conteneur principal avec z-index pour placer le texte au-dessus de l'effet */}
      <div className="relative z-20 text-center max-w-5xl px-4">
        <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 pb-4">
          Atypik Code
        </h1>
        
        {/* Traits animés entre le titre et le sous-titre */}
        <div className="relative h-10 my-4">
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
        
        <p className="text-lg md:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto">
          Développement de sites web professionnels qui génèrent des clients pour artisans et indépendants
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-white hover:from-purple-700 hover:to-blue-700 transition-all">
            Découvrir mes services
          </Link>
          <Link href="/contact" className="px-8 py-3 bg-transparent border border-white/20 rounded-lg font-medium text-white hover:bg-white/10 transition-all">
            Me contacter
          </Link>
        </div>
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