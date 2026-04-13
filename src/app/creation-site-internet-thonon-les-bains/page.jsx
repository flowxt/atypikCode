import Link from 'next/link'

export const metadata = {
  title: 'Création Site Internet Thonon-les-Bains | Développeur Web Léman - Atypik Code',
  description: 'Création de sites internet à Thonon-les-Bains pour hôtels, restaurants, thermes et commerces du Léman. Développeur web spécialisé tourisme et bien-être. Devis gratuit.',
  keywords: 'création site internet thonon-les-bains, développeur web thonon, site web thonon léman, agence web chablais, création site hôtel thonon, site internet evian',
  alternates: {
    canonical: 'https://www.atypikcode.fr/creation-site-internet-thonon-les-bains',
  },
  openGraph: {
    title: 'Création Site Internet Thonon-les-Bains | Développeur Web Léman',
    description: 'Sites web performants pour les professionnels du tourisme, du bien-être et du commerce à Thonon-les-Bains et sur les rives du Lac Léman.',
    type: 'website',
    url: 'https://www.atypikcode.fr/creation-site-internet-thonon-les-bains',
  },
}

const faqData = [
  {
    question: "Combien coûte un site internet pour un hôtel ou restaurant à Thonon ?",
    answer: "Les tarifs démarrent à 950 € pour une landing page efficace et à 1 900 € pour un site vitrine complet. Pour un hôtel ou restaurant avec réservation en ligne, fonctionnalités multilingues ou galeries immersives, un devis sur mesure est établi gratuitement sous 24 h."
  },
  {
    question: "Pouvez-vous créer un site avec réservation en ligne ?",
    answer: "Oui, j'intègre des modules de réservation adaptés à votre activité : réservation de chambres, de tables, de soins thermaux ou d'activités nautiques. Les solutions s'intègrent avec vos outils existants (channel managers, calendriers, paiement en ligne)."
  },
  {
    question: "Comment attirer les touristes sur mon site ?",
    answer: "Je travaille le référencement local (SEO) sur les requêtes touristiques liées au Lac Léman et au Chablais. Le site est optimisé pour les recherches en français, anglais et allemand afin de capter la clientèle suisse et internationale. J'optimise aussi la fiche Google Business et les données structurées."
  },
  {
    question: "En combien de temps le site est-il prêt ?",
    answer: "Comptez 1 à 2 semaines pour une landing page et 3 à 5 semaines pour un site vitrine complet. Les projets sur mesure avec réservation ou multilingue nécessitent 5 à 8 semaines. Chaque étape est validée ensemble avant de passer à la suivante."
  }
]

export default function CreationSiteInternetThononLesBains() {
  const services = [
    {
      title: "Landing Page",
      description: "Page unique haute conversion pour promouvoir votre établissement thermal, hôtel ou activité touristique sur le Léman.",
      price: "À partir de 950 €",
      features: ["Design responsive", "Optimisation SEO locale", "Formulaire de contact / réservation", "Analytics intégrées"]
    },
    {
      title: "Site Business",
      description: "Site vitrine complet pour présenter votre activité à Thonon-les-Bains : hôtellerie, restauration, bien-être, nautisme.",
      price: "À partir de 1 900 €",
      features: ["Multi-pages optimisées", "Référencement Léman & Chablais", "Galerie photos immersive", "Maintenance 6 mois incluse"]
    },
    {
      title: "Sur Mesure",
      description: "Solution digitale personnalisée avec réservation en ligne, multilingue (FR/EN/DE) ou fonctionnalités spécifiques à votre métier.",
      price: "Sur devis",
      features: ["Réservation en ligne", "Multilingue FR/EN/DE", "Intégrations sur mesure", "Support technique dédié"]
    }
  ]

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

  return (
    <main className="relative z-10 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-950 via-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Création de Site Internet à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Thonon-les-Bains
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Développeur web spécialisé pour les professionnels du tourisme, du bien-être
              et du commerce sur les rives du Lac Léman. Des sites performants qui transforment
              vos visiteurs en clients, toute l'année.
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

      {/* Pourquoi une présence digitale à Thonon */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Pourquoi votre entreprise à Thonon-les-Bains a besoin d'un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                site web performant ?
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Capitale touristique du Léman</h3>
                <p className="text-gray-300">
                  Sous-préfecture de 36 000 habitants, Thonon est la porte d'entrée du tourisme
                  lémanique. Les visiteurs recherchent hébergements, restaurants et activités en ligne
                  avant même d'arriver. Un site web professionnel capte cette audience.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Concurrence entre villes du lac</h3>
                <p className="text-gray-300">
                  Evian, Yvoire, Excenevex : la concurrence est forte sur les rives du Léman.
                  Un site optimisé pour le référencement local vous positionne en tête des résultats
                  quand les touristes planifient leur séjour dans le Chablais.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Clientèle internationale</h3>
                <p className="text-gray-300">
                  Proximité de la Suisse et du bassin genevois, thermalisme reconnu, port de plaisance :
                  votre clientèle est française, suisse et internationale. Votre site doit être à la hauteur
                  de cette exigence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-gray-950/0 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Offres de création de site internet à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Thonon-les-Bains
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-400 mb-6">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tourisme & bien-être */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              Sites web pensés pour le{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                tourisme et le bien-être
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Thonon-les-Bains, ville thermale sur le Lac Léman, attire une clientèle exigeante.
              Vos outils digitaux doivent refléter cette qualité.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Référencement touristique</h3>
                <p className="text-gray-300 mb-4">
                  Vos pages sont optimisées sur les mots-clés que les visiteurs tapent réellement :
                  "hôtel Thonon Lac Léman", "restaurant vue lac Thonon", "spa thermal Évian Thonon".
                  Chaque page cible des requêtes à forte intention de réservation.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    SEO local ciblé Chablais & Léman
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Google Business optimisé
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Données structurées pour les rich snippets
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Réservation & multilingue</h3>
                <p className="text-gray-300 mb-4">
                  Intégration de systèmes de réservation pour vos chambres, tables ou soins.
                  Site disponible en français, anglais et allemand pour capter la clientèle
                  suisse-allemande du bassin genevois et au-delà.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Module de réservation intégré
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Multilingue FR / EN / DE
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Paiement en ligne sécurisé
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950/0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Questions fréquentes sur la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                création de site à Thonon
              </span>
            </h2>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10"
                >
                  <summary className="cursor-pointer p-6 text-xl font-bold text-purple-400 list-none flex items-center justify-between">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-purple-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
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
            <h2 className="text-4xl font-bold mb-8">
              Zones desservies autour de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Thonon-les-Bains
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Basé à La Roche-sur-Foron (74800), à environ 50 minutes de Thonon,
              j'accompagne les entreprises de tout le Chablais et les rives du Lac Léman.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Evian-les-Bains", "Publier", "Amphion", "Sciez",
                "Douvaine", "Excenevex", "Yvoire", "Margencel"
              ].map((ville, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-4 rounded-xl border border-white/5">
                  <div className="text-white font-medium">{ville}</div>
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
              Lancez votre site web à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Thonon-les-Bains
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Florian Barjon, développeur web chez Atypik Code.
              Discutons de votre projet lors d'un appel découverte gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33683062632"
                className="border border-purple-500 text-purple-400 py-4 px-8 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
              >
                06 83 06 26 32
              </a>
            </div>
            <p className="text-gray-500 mt-6 text-sm">
              floriandev74@gmail.com - La Roche-sur-Foron 74800
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
