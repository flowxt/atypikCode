"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer: "Le délai de création dépend de la complexité du projet. Une landing page peut être prête en 1-2 semaines, tandis qu'un site web complet avec des fonctionnalités personnalisées peut prendre 4-8 semaines. Chaque projet débute par une estimation précise du calendrier après analyse de vos besoins spécifiques."
    },
    {
      question: "Quelles informations dois-je fournir pour démarrer mon projet ?",
      answer: "Pour commencer efficacement, j'aurai besoin d'informations sur votre entreprise (activités, valeurs, cible), vos objectifs pour le site, vos préférences en matière de design, et tout contenu que vous souhaitez inclure (textes, images, logo). Nous établirons ensemble un brief détaillé lors de notre premier échange."
    },
    {
      question: "Comment se déroule le processus de création de mon site web ?",
      answer: "Le processus se déroule en 5 étapes principales : 1) Analyse et planification (définition des objectifs, structure du site), 2) Design (création des maquettes visuelles), 3) Développement (programmation du site), 4) Tests et optimisations (vérification des fonctionnalités et performances), 5) Mise en ligne et formation. Vous êtes impliqué à chaque étape avec des points de validation réguliers."
    },
    {
      question: "Est-ce que mon site sera optimisé pour le référencement (SEO) ?",
      answer: "Absolument. L'optimisation SEO est intégrée dès la conception du site avec une structure technique propre, des balises optimisées, un contenu structuré et une vitesse de chargement rapide. Je vous fournis également des recommandations pour continuer à améliorer votre référencement après la mise en ligne du site."
    },
    {
      question: "Proposez-vous un service de maintenance après la mise en ligne ?",
      answer: "Oui, je propose différentes formules de maintenance pour garantir la sécurité, les performances et la pérennité de votre site. Ces formules incluent les mises à jour techniques, la sauvegarde régulière des données, la surveillance de la sécurité et un support technique en cas de besoin. Nous définirons ensemble la formule la plus adaptée à vos besoins."
    },
    {
      question: "Comment fonctionne le système de réservation d'appels ?",
      answer: "Le système de réservation permet à vos clients ou prospects de sélectionner un créneau disponible dans votre calendrier en ligne. Après confirmation, ils reçoivent une confirmation par email avec les détails de l'appel et un lien pour rejoindre la visioconférence ou modifier le rendez-vous si nécessaire. Ce système se synchronise avec vos calendriers existants (Google Calendar, Outlook, etc.)."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 py-32 px-6 md:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm text-sm font-medium text-blue-300 mb-3">
          Questions fréquentes
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5">Tout ce que vous devez savoir</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Vous avez des questions sur le processus de création de votre site web ? Voici les réponses aux questions les plus fréquentes.
        </p>
      </motion.div>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-10">{faq.question}</h3>
                <div className={`p-2 rounded-full bg-gray-700/50 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-8">
            Vous avez d'autres questions ? N'hésitez pas à me contacter directement.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg shadow-blue-600/20"
          >
            Me contacter
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}