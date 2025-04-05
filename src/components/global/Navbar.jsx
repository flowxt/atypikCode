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
  
  const navLinks = [
    { text: 'Accueil', href: '/' },
    { text: 'Services', href: '/services' },
    // { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ]
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'py-5 bg-transparent'}`}>
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
          
          {/* Menu desktop */}
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
                className={`text-lg transition-colors duration-300 ${
                  isActive(link.href) 
                    ? 'text-purple-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.text}
              </Link>
            ))}
          </motion.div>
          
          {/* Bouton CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 px-6 rounded-full font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all hover:scale-105"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
          
          {/* Menu mobile */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}