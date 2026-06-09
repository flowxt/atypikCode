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
  
  // Navigation simplifiée pour la conversion + blog pour SEO
  const navLinks = [
    { text: 'Accueil', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ]
  
  return (
    <header className={`fixed w-full z-[110] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`container mx-auto px-4 transition-all duration-500 ${scrolled ? 'max-w-5xl' : ''}`}>
        <nav className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-gray-950/70 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 shadow-lg shadow-black/40' : 'px-0'}`}>
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
                className={`relative text-base transition-all duration-300 ${
                  isActive(link.href) 
                    ? 'text-white font-semibold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.text}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></span>
                )}
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
                className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
              >
                <span>Devis Gratuit</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
              

            </div>
          </motion.div>
          
          {/* Menu mobile */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}