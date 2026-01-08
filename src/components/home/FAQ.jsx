"use client"

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Combien coûte un site web performant ?",
      answer: "Mes tarifs reflètent la qualité Next.js : à partir de 950€ pour une landing page, 1 900€ pour un site business complet, et sur devis pour les projets e-commerce ou sur-mesure. À cela s'ajoutent des frais mensuels de 25 à 50€ pour l'hébergement et la maintenance."
    },
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Une landing page est livrée en 7 jours, un site vitrine en 2-3 semaines, et un e-commerce en 3-4 semaines. Je m'adapte aussi à vos urgences."
    },
    {
      question: "Dois-je fournir le contenu ?",
      answer: "Idéalement oui, vous connaissez votre activité mieux que personne. Mais je peux vous aider à structurer vos textes et vous conseiller sur les images."
    },
    {
      question: "Le site sera-t-il optimisé pour Google ?",
      answer: "Absolument ! Tous mes sites incluent une optimisation SEO : balises, vitesse, structure. Le référencement naturel fait partie de mon expertise."
    },
    {
      question: "Pourrai-je modifier mon site ?",
      answer: "Pour les modifications de contenu (textes, images), je vous montre comment faire. Pour les modifications techniques, je reste disponible."
    },
    {
      question: "Comment se passe le paiement ?",
      answer: "Je demande 30% à la commande pour démarrer, et le solde à la livraison. Possibilité de paiement en plusieurs fois pour les projets importants."
    }
  ];

  return (
    <section className="py-24 bg-black relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">
            FAQ
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions fréquentes
          </h2>
          
          <p className="text-lg text-gray-400">
            Tout ce que vous devez savoir avant de commencer
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen 
                    ? 'border-purple-500/30 bg-gray-900' 
                    : 'border-white/5 bg-gray-900/50 hover:border-white/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex justify-between items-center cursor-pointer relative z-20"
                >
                  <span className="text-base font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
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
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Une autre question ?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://wa.me/33683062632?text=Bonjour%20Florian%2C%20j%27ai%20une%20question%20sur%20vos%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-green-600/10 text-green-400 rounded-full text-sm font-medium hover:bg-green-600/20 transition-all border border-green-600/20"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            
            <a 
              href="mailto:floriandev74@gmail.com?subject=Question%20sur%20vos%20services"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-purple-600/10 text-purple-400 rounded-full text-sm font-medium hover:bg-purple-600/20 transition-all border border-purple-600/20"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
