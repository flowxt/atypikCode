"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SocialProof() {
  const testimonials = [
    {
      name: "Kristelle F.",
      role: "Entrepreneuse",
      text: "Florian a réalisé notre site et nous sommes RAVIS 🤩 Le site est fluide, beau et accessible à tous. Florian est à l'écoute, très professionnel et surtout perfectionniste au détail. Je recommande très très très fortement !",
      rating: 5,
      highlight: "RAVIS"
    },
    {
      name: "Leora",
      role: "Local Guide Google",
      text: "Bien plus qu'un excellent webmaster. Empathique, à l'écoute, bon communiquant, il a su capter immédiatement mes besoins. Travail conséquent, rapidité, confiance totale : une collaboration qui marque.",
      rating: 5,
      highlight: "Confiance totale"
    },
    {
      name: "Céline L.",
      role: "Entrepreneuse",
      text: "Il a tout de suite su cerner mes besoins et donner vie à un site qui me ressemble vraiment. Le résultat est clair, moderne, et super pro. Je recommande les yeux fermés !",
      rating: 5,
      highlight: "Les yeux fermés"
    },
    {
      name: "LLAS LLAS",
      role: "Entrepreneur",
      text: "J'ai fait appel à Atypik Code pour deux sites Internet et une landing page. Je suis très satisfait du design, et je suis actuellement très bien référencé. Merci Florian !",
      rating: 5,
      highlight: "Très bien référencé"
    },
    {
      name: "Laurie P.",
      role: "Entrepreneuse",
      text: "Travail remarquable en un temps record ! Vous pouvez y aller les yeux fermés en toute confiance. Il effectue un suivi extra et est très pédagogue. Merci infiniment 🙏",
      rating: 5,
      highlight: "Temps record"
    },
    {
      name: "Patrice",
      role: "Entrepreneur",
      text: "Florian est vraiment très pro, perfectionniste, et à l'écoute du besoin de ses clients. Dans le détail ça fait plaisir à voir. Un gars vraiment passionné.",
      rating: 5,
      highlight: "Perfectionniste"
    }
  ];

  // Afficher seulement 3 témoignages sur la grille principale
  const mainTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm"
          >
            Témoignages vérifiés
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ce qu&apos;ils disent de moi
          </motion.h2>
          
          {/* Badge Google */}
          <motion.a
            href="https://share.google/NcwHY3Xaa70ERtb74"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/5 rounded-full px-6 py-3 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold">5/5 sur Google</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">12 avis vérifiés</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </motion.a>
        </div>

        {/* Grille des témoignages */}
        <div className="grid md:grid-cols-3 gap-6">
          {mainTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border border-white/5 p-8"
            >
              {/* Badge highlight */}
              <div className="absolute -top-3 right-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  &quot;{testimonial.highlight}&quot;
                </span>
              </div>
              
              {/* Étoiles */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              {/* Texte */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                &quot;{testimonial.text}&quot;
              </p>
              
              {/* Auteur */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lien vers tous les avis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://share.google/NcwHY3Xaa70ERtb74"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
          >
            Voir tous les avis sur Google
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
