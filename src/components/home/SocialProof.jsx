"use client";
import { motion } from "framer-motion";

export default function SocialProof() {
  const testimonials = [
    {
      name: "Kristelle Feron",
      business: "Praticienne bien-être",
      text: "Florian a réalisé notre site et nous sommes RAVIS. Le site est fluide, beau et accessible à tous. Florian est à l'écoute, très professionnel et surtout perfectionniste.",
      avatar: "KF"
    },
    {
      name: "Céline L", 
      business: "Entrepreneuse",
      text: "Il a tout de suite su cerner mes besoins, mes envies, et a su donner vie à un site qui me ressemble vraiment. Le résultat est clair, moderne, et super pro.",
      avatar: "CL"
    },
    {
      name: "Laurie Pringuet",
      business: "Petite entreprise",
      text: "Il a fait un travail remarquable en un temps record ! Vous pouvez y aller les yeux fermés en toute confiance. Il effectue un suivi extra et est très pédagogue.",
      avatar: "LP"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm"
          >
            Témoignages
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ce que disent mes clients
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-yellow-400"
          >
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="ml-2 text-gray-400 text-sm">5/5 basé sur les avis Google</span>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-2xl border border-white/5"
            >
              {/* Quote */}
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-white/5"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-1">20+</p>
            <p className="text-gray-500 text-sm">Clients accompagnés</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-1">5/5</p>
            <p className="text-gray-500 text-sm">Note moyenne</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-1">7j</p>
            <p className="text-gray-500 text-sm">Délai moyen</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-1">24h</p>
            <p className="text-gray-500 text-sm">Temps de réponse</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
