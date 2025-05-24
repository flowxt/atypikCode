"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sidnei Ribeiro",
      company: "SAR Security",
      text: "Le résultat a dépassé toutes mes attentes. Mon site est magnifique et parfaitement optimisé. Je reçois désormais des demandes qualifiées chaque semaine.",
      avatar: "S",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Kristelle Feron", 
      company: "Kris LaVoixDesAnges",
      text: "La refonte a eu un impact immédiat sur nos ventes. Design moderne, réservation en ligne... Un investissement amorti en quelques mois.",
      avatar: "K",
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ils ont fait <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">confiance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez comment mes clients ont transformé leur activité grâce à leur nouveau site web
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 mb-4">
                <svg className="w-6 h-6 text-purple-400 shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-200 text-lg italic leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 mb-6">
            Prêt à obtenir des résultats similaires ?
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Discuter de mon projet
          </Link>
        </motion.div>
      </div>
    </section>
  )
}