"use client";
import { motion } from "framer-motion";

export default function SocialProof() {
  const stats = [
    {
      number: "10+",
      label: "Sites créés",
      description: "Projets réalisés avec succès"
    },
    {
      number: "5/5", 
      label: "Satisfaction",
      description: "Note moyenne clients"
    },
    {
      number: "24h",
      label: "Délai réponse",
      description: "Maximum garanti"
    }
  ];

  const benefits = [
    "Sites optimisés SEO qui génèrent du trafic qualifié",
    "Design responsive adapté à tous les appareils", 
    "Suivi personnalisé et formation incluse"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Stats en haut */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
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

          {/* Message central concis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AtypikCode</span> ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Une approche atypique qui transforme votre vision en site web performant. 
              Mon regard différent sur le digital fait la différence pour vos projets.
            </p>
          </motion.div>

          {/* Bénéfices concrets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/10"
              >
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
} 