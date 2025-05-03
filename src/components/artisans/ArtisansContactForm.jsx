"use client"

import { useState, useRef, useEffect } from 'react'

export default function ArtisansContactForm() {
  const nameRef = useRef(null)
  const professionRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)
  const cityRef = useRef(null)
  const messageRef = useRef(null)
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  // Ajouter le script gtag pour la conversion Ads
  useEffect(() => {
    // Définir la fonction gtagSendEvent dans window pour qu'elle soit accessible globalement
    window.gtagSendEvent = function(url) {
      var callback = function () {
        if (typeof url === 'string') {
          window.location = url;
        }
      };
      if (typeof gtag === 'function') {
        gtag('event', 'ads_conversion_Envoi_de_formulaire_pou_1', {
          'event_callback': callback,
          'event_timeout': 2000,
        });
      }
      return false;
    };
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Collecter les données du formulaire
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: `Demande Artisan: ${professionRef.current.value} - ${cityRef.current.value}`,
      message: `
Nouveau contact Artisan:
Nom: ${nameRef.current.value}
Métier: ${professionRef.current.value}
Téléphone: ${phoneRef.current.value}
Email: ${emailRef.current.value}
Ville: ${cityRef.current.value}
Message: ${messageRef.current.value || 'Aucun message supplémentaire'}
      `
    }
    
    try {
      // Appel à l'API Resend (même API que le formulaire principal)
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Réinitialisation des champs
        nameRef.current.value = ''
        professionRef.current.value = ''
        phoneRef.current.value = ''
        emailRef.current.value = ''
        cityRef.current.value = ''
        messageRef.current.value = ''
        
        setSubmitStatus('success')
        
        // Déclencher l'événement de conversion Google Ads
        if (typeof window.gtagSendEvent === 'function') {
          window.gtagSendEvent();
        }
        
        // Déclencher l'événement de conversion Google Ads via GTM
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            'event': 'formSubmission',
            'formType': 'artisans'
          });
          console.log("GTM event pushed: formSubmission (artisans)");
        }
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
    <>
      {submitStatus === 'success' ? (
        <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center">
          <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
          <p className="text-gray-300">Merci de m'avoir contacté. Je vous rappellerai très rapidement.</p>
        </div>
      ) : submitStatus === 'error' ? (
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 text-center">
          <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <h3 className="text-2xl font-bold text-white mb-2">Oups !</h3>
          <p className="text-gray-300">Un problème est survenu lors de l'envoi. Veuillez réessayer ou me contacter directement.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="name"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Jean Dupont"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="profession"
              >
                Métier
              </label>
              <input
                type="text"
                id="profession"
                ref={professionRef}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Plombier, Électricien, Menuisier..."
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="phone"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                ref={phoneRef}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="06 XX XX XX XX"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="city"
            >
              Ville / Zone d&apos;intervention
            </label>
            <input
              type="text"
              id="city"
              ref={cityRef}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Annecy et alentours"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="message"
            >
              Message (optionnel)
            </label>
            <textarea
              id="message"
              rows="4"
              ref={messageRef}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Parlez-nous de votre projet ou posez-nous vos questions"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity relative z-10 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              "Être rappelé gratuitement"
            )}
          </button>
        </form>
      )}
    </>
  )
} 