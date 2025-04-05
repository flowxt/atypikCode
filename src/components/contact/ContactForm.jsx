"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const subjectRef = useRef(null)
  const messageRef = useRef(null)
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Collecter les données du formulaire directement depuis les refs
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value
    }
    
    try {
      // Appel à l'API Resend
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Réinitialisation des champs en cas de succès
        nameRef.current.value = ''
        emailRef.current.value = ''
        subjectRef.current.value = ''
        messageRef.current.value = ''
        
        setSubmitStatus('success')
      } else {
        console.error('Erreur lors de l\'envoi:', await response.text())
        setSubmitStatus('error')
      }
      
      // Réinitialisation du statut après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-10 rounded-2xl border border-white/10 shadow-lg relative z-10"
    >
      {submitStatus === 'success' ? (
        <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center">
          <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
          <p className="text-gray-300">Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-200 font-medium">Nom</label>
              <input 
                type="text" 
                id="name"
                name="name"
                ref={nameRef}
                required
                className="w-full p-4 bg-gray-700/50 rounded-xl border border-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                placeholder="Votre nom"
                style={{ zIndex: 20, position: 'relative' }}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-200 font-medium">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                ref={emailRef}
                required
                className="w-full p-4 bg-gray-700/50 rounded-xl border border-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
                placeholder="Votre email"
                style={{ zIndex: 20, position: 'relative' }}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-2 text-gray-200 font-medium">Sujet</label>
            <input 
              type="text" 
              id="subject"
              name="subject"
              ref={subjectRef}
              required
              className="w-full p-4 bg-gray-700/50 rounded-xl border border-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all"
              placeholder="Sujet de votre message"
              style={{ zIndex: 20, position: 'relative' }}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-gray-200 font-medium">Message</label>
            <textarea 
              id="message"
              name="message"
              ref={messageRef}
              required
              className="w-full p-4 bg-gray-700/50 rounded-xl border border-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all h-40 resize-none"
              placeholder="Décrivez votre projet..."
              style={{ zIndex: 20, position: 'relative' }}
            ></textarea>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.01, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold shadow-lg shadow-purple-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
            ) : "Envoyer le message"}
          </motion.button>
        </form>
      )}
    </motion.div>
  )
}