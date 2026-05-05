import Link from 'next/link'
import LocalPricingCards from '@/components/local/LocalPricingCards'

export const metadata = {
  title: "Création Site Internet Cluses | À partir de 1 000€ - Atypik Code",
  description: "Création de site internet à Cluses à partir de 1 000€. Développeur web spécialisé pour entreprises industrielles, PME/PMI et secteur du décolletage en vallée de l'Arve. Devis gratuit en 24h.",
  keywords: "création site internet cluses, site vitrine cluses 1000 euros, développeur web cluses, site web vallée arve, agence web cluses 74, site internet industriel haute-savoie",
  alternates: {
    canonical: 'https://www.atypikcode.fr/creation-site-internet-cluses',
  },
  openGraph: {
    title: "Création Site Internet Cluses | Développeur Web Vallée de l'Arve",
    description: "Développeur web à proximité de Cluses. Sites internet pour entreprises industrielles, PME/PMI et acteurs du décolletage en Haute-Savoie.",
    type: 'website',
    url: 'https://www.atypikcode.fr/creation-site-internet-cluses',
  },
}

const faqData = [
  {
    question: "Combien coûte un site internet pour une entreprise industrielle à Cluses ?",
    answer: "Les tarifs démarrent à 1\u00a0000\u00a0€ pour un Vitrine Essentiel (1-3 pages), 1\u00a0500\u00a0€ pour un Vitrine Pro (jusqu'à 5 pages, SEO avancé) et 1\u00a0900\u00a0€ pour un Vitrine Premium. Pour les projets industriels sur mesure (catalogue produits techniques, configurateur, espace donneur d'ordres), un devis personnalisé est établi gratuitement. Chaque projet inclut l'optimisation SEO et un accompagnement personnalisé."
  },
  {
    question: "Pouvez-vous créer un catalogue de produits en ligne ?",
    answer: "Oui, je développe des catalogues produits adaptés au secteur industriel : fiches techniques détaillées, filtres par caractéristiques (matériaux, dimensions, tolérances), téléchargement de plans PDF et formulaires de demande de devis intégrés."
  },
  {
    question: "Comment un site web peut-il aider mon entreprise de décolletage ?",
    answer: "Un site professionnel vous rend visible auprès des donneurs d'ordres qui recherchent des sous-traitants en ligne. Il présente vos certifications (ISO, EN), votre parc machines, vos capacités de production et facilite la prise de contact pour de nouveaux marchés au-delà de la vallée de l'Arve."
  },
  {
    question: "Le site sera-t-il adapté aux tablettes et smartphones ?",
    answer: "Absolument. Tous les sites sont responsive et s'adaptent à tous les écrans. Vos clients et prospects pourront consulter votre catalogue ou vous contacter aussi bien depuis un bureau que depuis un atelier, sur mobile ou tablette."
  }
]

export default function CreationSiteInternetCluses() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const communes = [
    "Scionzier", "Marnaz", "Thyez", "Magland",
    "Nancy-sur-Cluses", "Le Reposoir", "Châtillon-sur-Cluses"
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Création de Site Internet à{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Cluses
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Capitale mondiale du décolletage, Cluses regorge d'entreprises industrielles
                d'excellence. Je vous accompagne dans votre transformation digitale pour conquérir
                de nouveaux marchés au-delà de la vallée de l'Arve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
                >
                  Devis gratuit sous 24h
                </Link>
                <a
                  href="tel:+33683062632"
                  className="border border-purple-500 text-purple-400 py-4 px-8 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
                >
                  06 83 06 26 32
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi un site web à Cluses */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                Pourquoi les entreprises de Cluses ont besoin d'un{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  site internet ?
                </span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Visibilité B2B</h3>
                  <p className="text-gray-300">
                    Les donneurs d'ordres recherchent leurs sous-traitants en ligne.
                    Sans site web, votre entreprise de décolletage reste invisible face
                    à la concurrence nationale et internationale.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nouveaux marchés</h3>
                  <p className="text-gray-300">
                    Beaucoup d'industriels clusiens n'ont pas encore de présence digitale.
                    C'est une opportunité : un site professionnel vous démarque
                    et attire des contrats hors vallée de l'Arve.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Proximité</h3>
                  <p className="text-gray-300">
                    Basé à La Roche-sur-Foron, à 20 minutes de Cluses, je connais
                    le tissu industriel local. Rendez-vous en présentiel, réactivité
                    et compréhension de vos enjeux techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-to-b from-gray-900/0 to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                Offres de création de sites web pour{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Cluses et la vallée de l'Arve
                </span>
              </h2>

              <LocalPricingCards localContext="à Cluses" />
            </div>
          </div>
        </section>

        {/* Focus industriel */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-6">
                Des sites web pensés pour{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  l'industrie
                </span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                Cluses et ses 18 000 habitants concentrent un savoir-faire industriel unique.
                Vos sites web doivent refléter cette expertise technique et attirer les bons interlocuteurs.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Catalogues produits techniques</h3>
                  <p className="text-gray-300">
                    Présentez vos pièces usinées, vos capacités de production et vos spécifications
                    techniques avec des fiches produits détaillées, des filtres par matériaux
                    et des téléchargements de plans.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Certifications et normes</h3>
                  <p className="text-gray-300">
                    Mettez en avant vos certifications ISO 9001, EN 9100, IATF 16949
                    et vos agréments. Un gage de confiance indispensable pour convaincre
                    les donneurs d'ordres exigeants.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Parc machines et capacités</h3>
                  <p className="text-gray-300">
                    Présentez vos tours automatiques, centres d'usinage et équipements
                    de contrôle. Les acheteurs industriels veulent voir votre outil
                    de production avant de vous contacter.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Rayonnement commercial</h3>
                  <p className="text-gray-300">
                    Aidez votre PME clusienne à décrocher des contrats en France et à
                    l'international. Un site web multilingue et bien référencé ouvre les portes
                    de nouveaux marchés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-b from-gray-900/0 to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                Questions fréquentes sur la{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  création web à Cluses
                </span>
              </h2>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <details key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10">
                    <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-semibold text-purple-400 list-none">
                      {faq.question}
                      <svg className="w-5 h-5 flex-shrink-0 ml-4 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <p className="px-6 pb-6 text-gray-300 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Également disponible autour de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Cluses
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Je crée des sites internet pour les entreprises de Cluses et de toute la vallée de l'Arve.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {communes.map((commune, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 px-6 py-3 rounded-full border border-white/5 text-white font-medium">
                    {commune}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Donnez de la visibilité à votre entreprise{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  clusienne
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Discutons de votre projet autour d'un café à Cluses ou en visio.
                Devis personnalisé sous 24h, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="mailto:floriandev74@gmail.com"
                  className="border border-purple-500 text-purple-400 py-4 px-8 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
                >
                  floriandev74@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
