"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Laura Baud",
      subtitle: "Thérapeute TCA",
      description: "Site complet pour une thérapeute spécialisée TCA avec système de RDV et blog",
      url: "https://www.psy-tca-annecy.com",
      type: "Site Business",
      image: "/image/portfolio/psy-tca.jpg",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      name: "Kris La Voix des Anges",
      subtitle: "Soins Énergétiques",
      description: "Site élégant pour une praticienne en soins énergétiques et guidance spirituelle",
      url: "https://www.krislavoixdesanges.com",
      type: "Site Business",
      image: "/image/portfolio/kris-voix-anges.jpg",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 3,
      name: "Ener Immo 92",
      subtitle: "Immobilier",
      description: "Site vitrine pour une agence immobilière avec présentation des biens",
      url: "https://www.ener-immo92.fr",
      type: "Site Vitrine",
      image: "/image/portfolio/ener-immo.jpg",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      name: "Serenity Spa",
      subtitle: "Institut bien-être",
      description: "Site moderne pour un spa avec présentation des soins et réservation",
      url: "https://www.serenityspanoemiesaddier.fr",
      type: "Site Business",
      image: "/image/portfolio/serenity-spa.jpg",
      color: "from-teal-500 to-emerald-600"
    },
    {
      id: 5,
      name: "Glam Beauty Pro",
      subtitle: "Institut de beauté",
      description: "Site élégant pour un institut de beauté haut de gamme",
      url: "https://www.glambeauty-pro.fr",
      type: "Site Vitrine",
      image: "/image/portfolio/glam-beauty.jpg",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      name: "SAR Security",
      subtitle: "Sécurité privée",
      description: "Site professionnel pour une entreprise de sécurité privée en Suisse",
      url: "https://www.sar-security.ch",
      type: "Site Business",
      image: "/image/portfolio/sar-security.jpg",
      color: "from-slate-500 to-gray-700"
    }
  ]

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-950 to-black relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm"
          >
            Portfolio
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Mes dernières réalisations
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Des sites Next.js ultra-performants pour des entrepreneurs qui veulent se démarquer.
          </motion.p>
        </div>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Image placeholder avec gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                    Voir le site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </span>
                </div>
                
                {/* Initiales en filigrane */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/20">
                    {project.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </span>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                {/* Badge type */}
                <span className="inline-block text-xs font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full mb-3">
                  {project.type}
                </span>
                
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            Votre projet pourrait être le prochain 👇
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-full font-medium border border-white/10 hover:bg-white/10 transition-all"
          >
            Discuter de mon projet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
