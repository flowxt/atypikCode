"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA({ 
  title = "Votre activité mérite un site d'exception.", 
  description = "Ne laissez pas un site lent ou daté freiner votre croissance.", 
  buttonText = "Discuter de mon projet",
  buttonLink = "/contact"
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border-gradient"
    >
      {/* Halo animé en arrière-plan */}
      <div className="absolute -inset-px overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[150%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-30"
          style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(139,92,246,0.5) 10%, transparent 25%, transparent 50%, rgba(59,130,246,0.4) 60%, transparent 75%)" }}
        ></div>
      </div>
      <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-gray-950 via-purple-950/40 to-gray-950 pointer-events-none"></div>

      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="relative z-10 p-12 text-center">
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          {description}
        </p>
        
        <Link
          href={buttonLink}
          className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold transition-all"
        >
          {buttonText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </Link>
        
        <p className="text-sm text-gray-500 mt-6">
          Réponse sous 24h • Devis gratuit
        </p>
      </div>
    </motion.div>
  );
}
