"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  // Ferme le menu si l'écran devient plus large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Empêche le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  // Animation du bouton hamburger
  const topBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  }
  
  const centerBarVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  }
  
  const bottomBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  }
  
  // Animation du menu
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    closed: { opacity: 0, x: 30 },
    open: { opacity: 1, x: 0 }
  }
  
  // Liens de navigation
  const navLinks = [
    { text: 'Accueil', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' }
  ]
  
  return (
    <>
      {/* Bouton hamburger */}
      <button 
        className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu de navigation"
      >
        <motion.span
          className="w-8 h-1 bg-white mb-1.5 rounded-full"
          variants={topBarVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-8 h-1 bg-white mb-1.5 rounded-full" 
          variants={centerBarVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-8 h-1 bg-white rounded-full"
          variants={bottomBarVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        />
      </button>
      
      {/* Menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen justify-start items-center pt-24 pb-16 px-8">
              <nav className="flex flex-col items-center gap-8 w-full">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="overflow-hidden"
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold text-white hover:text-purple-400 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div
                variants={itemVariants}
                className="mt-12"
              >
                <Link 
                  href="/services#booking"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
                >
                  Prendre rendez-vous
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}