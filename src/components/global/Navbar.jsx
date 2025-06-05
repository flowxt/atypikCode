"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Vérifier si le lien est actif
  const isActive = (path) => pathname === path
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])
  
  // Navigation simplifiée pour la conversion
  const navLinks = [
    { text: 'Accueil', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' },
  ]
  
  return (
    <header className={`fixed w-full z-[110] transition-all duration-300 ${scrolled ? 'py-3 bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-white/10' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold tracking-tight text-white"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Atypik
              </span>{" "}
              Code
            </motion.div>
          </Link>
          
          {/* Menu desktop simplifié */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className={`text-lg transition-all duration-300 hover:scale-105 ${
                  isActive(link.href) 
                    ? 'text-purple-400 font-semibold' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.text}
              </Link>
            ))}
          </motion.div>
          
          {/* CTA principal - Version simple et fonctionnelle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <div className="relative">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                <span>🚀</span>
                <span>Devis Gratuit</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
              
              {/* Badge -20% séparé et bien positionné */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                -20%
              </div>
            </div>
          </motion.div>
          
          {/* Menu mobile */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}