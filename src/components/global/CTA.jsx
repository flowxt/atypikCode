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
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-purple-950/50 to-gray-900 border border-white/10"
    >
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="relative z-10 p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          {description}
        </p>
        
        <Link
          href={buttonLink}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all"
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
