"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function MobileMenu({ isOpen, setIsOpen }) {
  const menuRef = useRef(null)
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setIsOpen])
  
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed top-0 right-0 h-screen w-3/4 bg-gray-900/95 backdrop-blur-xl z-50 p-8 shadow-lg border-l border-white/10"
        >
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-white/10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</MobileNavLink>
            <MobileNavLink href="#apropos" onClick={() => setIsOpen(false)}>À propos</MobileNavLink>
            <MobileNavLink href="#temoignages" onClick={() => setIsOpen(false)}>Témoignages</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            
            <div className="pt-6 mt-6 border-t border-white/10">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-600/20"
              >
                Réserver un appel
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="text-xl font-medium text-white py-2 border-b border-white/10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
    >
      {children}
    </Link>
  )
}