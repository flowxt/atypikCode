"use client";
import { motion } from "framer-motion";

export default function SocialProof() {
  const stats = [
    {
      number: "342%",
      label: "Augmentation moyenne",
      description: "de leads générés",
      icon: "📈"
    },
    {
      number: "7 jours", 
      label: "Délai moyen",
      description: "de livraison garantie",
      icon: "⚡"
    },
    {
      number: "100%",
      label: "Clients satisfaits",
      description: "résultats garantis",
      icon: "🎯"
    }
  ];

  const testimonials = [
    {
      name: "Kristelle Feron",
      business: "Praticienne bien-être",
      text: "Florian a réalisé notre site et nous sommes RAVIS 🤩 Le site est fluide, beau et accessible à tous. Naturellement les performances sont à la hauteur de celui ci. Florian est à l'écoute, très professionnel et surtout perfectionniste au détail 😊",
      result: "Site fluide et performant",
      avatar: "KF",
      rating: 5
    },
    {
      name: "Céline L", 
      business: "Entrepreneuse",
      text: "Un grand merci à Florian 🙏 pour la création de mon site internet ! Il a tout de suite su cerner mes besoins, mes envies, et a su donner vie à un site qui me ressemble vraiment. Le résultat est clair, moderne, et super pro.",
      result: "Site moderne et pro",
      avatar: "CL",
      rating: 5
    },
    {
      name: "Laurie Pringuet",
      business: "Petite entreprise",
      text: "J'ai fait appel à Florian pour créer mon site de ma petite entreprise et il a fait un travail remarquable en un temps record!!! Vous pouvez y aller les yeux fermés en toute confiance. Il effectue un suivi extra et est très pédagogue.",
      result: "Travail remarquable",
      avatar: "LP", 
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Titre avec impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Des résultats qui <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">parlent d'eux-mêmes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mes clients obtiennent en moyenne <strong className="text-green-400">3x plus de contacts</strong> dans les 30 premiers jours.
              Voici leurs témoignages authentiques.
            </p>
          </motion.div>

          {/* Stats impressionnantes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Témoignages authentiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Ce que disent mes clients 👇
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 relative"
                >
                  {/* Badge de résultat */}
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.result}
                  </div>

                  {/* Étoiles */}
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.business}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Garanties et urgence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              🚀 Rejoignez mes clients qui cartonnent
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-white font-medium">Résultats garantis</span>
                <span className="text-gray-400 text-sm">site performant</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="text-white font-medium">Livraison rapide</span>
                <span className="text-gray-400 text-sm">7 jours maximum</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <span className="text-white font-medium">Support inclus</span>
                <span className="text-gray-400 text-sm">Formation + SAV</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-white font-medium">Réponse rapide</span>
                <span className="text-gray-400 text-sm">Sous 24h garanti</span>
              </div>
            </div>

            <p className="text-gray-300 text-lg">
              Plus de <strong className="text-green-400">10 entrepreneurs</strong> me font confiance.
              <br/>
              <span className="text-purple-300">Pourquoi pas vous ?</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
} 