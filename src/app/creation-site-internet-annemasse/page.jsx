import Link from 'next/link'

export const metadata = {
  title: 'Création Site Internet Annemasse | Développeur Web Frontalier - Atypik Code',
  description: 'Création de site internet à Annemasse. Développeur web spécialisé pour entreprises frontalières, sites bilingues FR/EN et visibilité sur le marché franco-suisse. Devis gratuit.',
  keywords: 'création site internet annemasse, développeur web annemasse, agence web annemasse, site web frontalier, création site vitrine annemasse, développeur web genevois',
  alternates: {
    canonical: 'https://www.atypikcode.fr/creation-site-internet-annemasse',
  },
  openGraph: {
    title: 'Création Site Internet Annemasse | Développeur Web Frontalier',
    description: 'Développeur web proche d\'Annemasse. Sites performants pour entreprises frontalières, adaptés au marché franco-suisse. Tarifs compétitifs vs agences genevoises.',
    type: 'website',
    url: 'https://www.atypikcode.fr/creation-site-internet-annemasse',
  },
}

export default function CreationSiteInternetAnnemasse() {
  const services = [
    {
      title: "Landing Page",
      description: "Page unique optimisée pour convertir vos visiteurs en clients, idéale pour lancer une offre sur le bassin annemassien et genevois.",
      price: "950 €",
      features: ["Design responsive", "Optimisation SEO locale", "Formulaire de contact", "Livraison rapide"],
    },
    {
      title: "Site Business",
      description: "Site vitrine complet pour présenter votre activité aux marchés français et suisse avec un positionnement professionnel.",
      price: "1 900 €",
      features: ["Jusqu'à 5 pages", "Référencement Annemasse & Genève", "Maintenance 6 mois", "Analytics intégrés"],
    },
    {
      title: "Sur Mesure",
      description: "Solution digitale personnalisée pour les entreprises frontalières avec des besoins spécifiques : multilingue, e-commerce, plateforme.",
      price: "Sur devis",
      features: ["Site bilingue FR/EN", "Fonctionnalités avancées", "Intégrations sur mesure", "Support dédié"],
    },
  ]

  const faqs = [
    {
      question: "Combien coûte un site internet à Annemasse ?",
      answer: "Les tarifs démarrent à 950 € pour une landing page et 1 900 € pour un site vitrine complet. Ces prix sont bien en dessous de ce que pratiquent les agences web genevoises, tout en offrant la même qualité de prestation. Chaque projet fait l'objet d'un devis gratuit personnalisé sous 24h.",
    },
    {
      question: "Pouvez-vous créer un site bilingue français-anglais ?",
      answer: "Oui, je conçois des sites bilingues FR/EN adaptés aux entreprises frontalières qui travaillent avec une clientèle internationale. Le contenu est optimisé pour le référencement dans les deux langues, ce qui permet d'être visible aussi bien sur Google.fr que Google.ch.",
    },
    {
      question: "Quelle est la différence de prix avec une agence genevoise ?",
      answer: "Les agences web à Genève facturent généralement entre 5 et 10 fois plus cher qu'un développeur freelance basé en Haute-Savoie. Pour un site vitrine équivalent, comptez 10 000 à 20 000 CHF à Genève contre 1 900 € chez Atypik Code, avec le même niveau de qualité et de performance.",
    },
    {
      question: "Comment être visible sur Google à Annemasse et Genève ?",
      answer: "Je mets en place une stratégie SEO locale ciblée sur Annemasse et le bassin genevois : optimisation des mots-clés géographiques, balisage schema.org, création de contenu pertinent et configuration Google Business Profile. L'objectif est de vous positionner sur les recherches locales des deux côtés de la frontière.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const communes = [
    "Ambilly", "Ville-la-Grand", "Gaillard", "Vétraz-Monthoux",
    "Cranves-Sales", "Bonne-sur-Menoge", "Saint-Julien-en-Genevois",
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Création de Site Internet à{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Annemasse
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Développeur web basé en Haute-Savoie, je crée des sites performants pour les entreprises
                d'Annemasse et du bassin franco-genevois. Profitez d'une expertise locale à tarif compétitif
                pour vous démarquer sur un marché transfrontalier en pleine croissance.
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

        {/* Pourquoi Annemasse */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-6">
                Pourquoi votre entreprise à Annemasse a besoin d'un{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  site web performant ?
                </span>
              </h2>
              <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Deuxième agglomération de Haute-Savoie avec plus de 90 000 habitants dans son aire urbaine,
                Annemasse est une ville frontalière où plus de 80 000 personnes traversent chaque jour
                la frontière avec Genève. Dans ce marché concurrentiel, la visibilité digitale est
                indispensable.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Marché transfrontalier</h3>
                  <p className="text-gray-300">
                    Annemasse est la porte d'entrée vers le marché suisse. Vos clients potentiels
                    se trouvent des deux côtés de la frontière. Un site web professionnel vous permet
                    de capter cette clientèle franco-suisse à fort pouvoir d'achat.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Concurrence intense</h3>
                  <p className="text-gray-300">
                    Avec une économie en forte croissance liée à Genève, les entreprises d'Annemasse
                    doivent se différencier. Un site optimisé pour le référencement local vous donne
                    un avantage décisif face à vos concurrents.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Double clientèle</h3>
                  <p className="text-gray-300">
                    Services transfrontaliers, immobilier, santé, import-export : les entreprises
                    annemassiennes servent une clientèle française et suisse. Votre site doit
                    s'adresser efficacement à ces deux audiences.
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
                Mes offres de création web pour{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Annemasse
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

        {/* Avantage frontalier */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-6">
                L'avantage{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  frontalier
                </span>
              </h2>
              <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Travailler avec un développeur web haut-savoyard plutôt qu'une agence genevoise,
                c'est bénéficier d'une expertise locale à un tarif adapté au marché français.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sites bilingues FR/EN</h3>
                  <p className="text-gray-300">
                    Vos contenus traduits et optimisés pour le SEO dans chaque langue. Touchez
                    une clientèle francophone et anglophone des deux côtés de la frontière, y compris
                    les expatriés et organisations internationales de Genève.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Adapté au marché suisse</h3>
                  <p className="text-gray-300">
                    Connaissance des standards et attentes du marché helvétique : design soigné,
                    mentions légales conformes, affichage multi-devises si nécessaire. Votre site inspire
                    confiance aux clients suisses comme français.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tarifs 5 à 10x moins chers</h3>
                  <p className="text-gray-300">
                    Les agences genevoises facturent entre 10 000 et 20 000 CHF un site vitrine.
                    Basé à La Roche-sur-Foron, à 40 minutes d'Annemasse, je propose la même qualité
                    de prestation aux tarifs du marché français.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/0">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                Questions fréquentes sur la{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  création web à Annemasse
                </span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-semibold text-purple-400 hover:text-purple-300 transition-colors list-none [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <svg
                        className="w-5 h-5 flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
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
                Création de sites internet autour d'{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Annemasse
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                J'interviens à Annemasse et dans toutes les communes du bassin franco-genevois
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-4 rounded-xl border border-purple-500/20">
                  <div className="text-white font-semibold">Annemasse</div>
                </div>
                {communes.map((ville, index) => (
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
                Lancez votre projet web à{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Annemasse
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Basé à La Roche-sur-Foron, à 40 minutes d'Annemasse, je vous accompagne dans la création
                de votre site internet. Contactez-moi pour un devis gratuit et personnalisé sous 24h.
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
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
