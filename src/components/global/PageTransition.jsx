"use client"

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function PageTransition({ children }) {
  const pathname = usePathname()
  
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0] // transition cubic-bezier douce
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
} 