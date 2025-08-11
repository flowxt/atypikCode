"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Première question ouverte par défaut

  const faqs = [
    {
      question: "💰 Combien coûte réellement un site web qui convertit ?",
      answer: "Mes tarifs sont transparents : 750€ pour une landing page, 1600€ pour un site vitrine complet et à partir de 2200€ pour un site e-commerce. C'est un investissement rentable qui se rembourse généralement en 2-3 mois grâce aux nouveaux clients générés.",
      highlight: "Remboursé en 2-3 mois"
    },
    {
      question: "⏰ Combien de temps faut-il pour voir des résultats ?",
      answer: "Mes clients voient en moyenne leurs premiers leads dans les 48h après la mise en ligne. En 30 jours, l'augmentation moyenne est de 300% des contacts. Votre site est livré en 7 jours maximum, puis optimisé en continu pour maximiser les conversions.",
      highlight: "Premiers leads en 48h"
    },
    {
      question: "🤔 Comment être sûr que mon site va vraiment convertir ?",
      answer: "Tous mes sites incluent des éléments de conversion prouvés : témoignages, formulaires optimisés, design persuasif, etc. Je m'engage sur les résultats et vous accompagne jusqu'à ce que votre site génère plus de leads qu'avant.",
      highlight: "Résultats garantis"
    },
    {
      question: "😰 Et si je ne suis pas satisfait du résultat ?",
      answer: "J'offre des révisions illimitées pendant 30 jours pour que le site vous convienne parfaitement. Mon objectif est votre satisfaction totale et je m'engage à faire le nécessaire pour y arriver.",
      highlight: "Révisions illimitées 30 jours"
    },
    {
      question: "🔧 Je ne m'y connais pas en technique, est-ce compliqué ?",
      answer: "Absolument pas ! Je m'occupe de tout : création, mise en ligne, formation. Vous recevez un site clé en main + une formation vidéo simple pour que vous puissiez le modifier vous-même. Support technique inclus pendant 6 mois.",
      highlight: "Formation + support 6 mois"
    },
    {
      question: "📈 Mes concurrents ont déjà un site, ne suis-je pas en retard ?",
      answer: "C'est maintenant ou jamais ! 80% des sites de vos concurrents ne convertissent pas. Un site optimisé pour la conversion vous donne un avantage énorme. Mes clients surpassent souvent leurs concurrents en quelques semaines. Plus vous attendez, plus vous perdez des clients.",
      highlight: "Surpassez vos concurrents"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Titre avec impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vous hésitez encore ? 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                C&apos;est normal !
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Voici les réponses aux questions que se posent tous mes futurs clients.
              <br />
              <strong className="text-purple-300">Spoiler : aucun regret jusqu&apos;à présent !</strong>
            </p>
          </motion.div>

          {/* Questions fréquentes avec approche simple */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border-2 rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? 'border-purple-500/50 bg-gradient-to-br from-purple-900/30 to-blue-900/30 shadow-lg shadow-purple-500/10' 
                      : 'border-white/20 bg-gray-800/50 hover:border-purple-500/30'
                  }`}
                >
                  <div
                    className="w-full p-6 text-left flex justify-between items-center cursor-pointer select-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white pr-4 pointer-events-none">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 pointer-events-none">
                      <svg
                        className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Contenu conditionnel */}
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-white/10">
                        <p className="text-gray-300 text-base leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        <div className="inline-flex items-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-4 py-2 rounded-full border border-green-500/20">
                          <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-green-300 font-medium text-sm">{faq.highlight}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Section de rassurance finale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎯 Une question qui n&apos;est pas listée ?
              </h3>
              <p className="text-gray-300 mb-6">
                Posez-moi directement votre question par WhatsApp ou email.
                <br />
                <strong className="text-purple-300">Réponse garantie sous 2h en semaine !</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/33683062632?text=Bonjour%20Florian,%20j'ai%20une%20question%20sur%20votre%20offre%20de%20création%20de%20site%20web" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp direct
                </a>
                
                <a 
                  href="mailto:floriandev74@gmail.com?subject=Question%20sur%20votre%20offre%20de%20création%20de%20site%20web&body=Bonjour%20Florian,%0D%0A%0D%0AJ'ai%20une%20question%20concernant%20votre%20offre%20:%0D%0A%0D%0A"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Email direct
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}