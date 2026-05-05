import Link from 'next/link'
import LocalPricingCards from '@/components/local/LocalPricingCards'

export const metadata = {
  title: 'Création Site Internet Genève | À partir de 1 000€ - Atypik Code',
  description: 'Création de site internet à Genève à prix compétitif. Développeur web Next.js à 45 min de Genève. Qualité suisse, tarifs français : site vitrine pro à partir de 1 000€. Devis gratuit en 24h.',
  keywords: 'création site internet genève, site vitrine genève 1000 euros, développeur web genève, site internet genève pas cher, agence web genève prix, création site web suisse romande',
  alternates: {
    canonical: 'https://www.atypikcode.fr/creation-site-internet-geneve',
  },
  openGraph: {
    title: 'Création Site Internet Genève | Qualité Suisse, Tarifs Français',
    description: 'Développeur web Next.js à 45 min de Genève. Site vitrine pro à partir de 1 000€. Tarifs 3 à 5x inférieurs aux agences suisses.',
    type: 'website',
    url: 'https://www.atypikcode.fr/creation-site-internet-geneve',
  },
}

const faqData = [
  {
    question: 'Pourquoi choisir un développeur français pour mon site genevois ?',
    answer: 'En tant que développeur basé en Haute-Savoie, à seulement 45 minutes de Genève, je vous offre la même qualité technique que les agences suisses avec des tarifs 3 à 5 fois plus compétitifs. Même fuseau horaire, même langue, rencontres en personne possibles à Genève ou dans mes locaux. Vous bénéficiez d\'une expertise Next.js et d\'un accompagnement personnalisé sans les frais de structure d\'une agence genevoise.',
  },
  {
    question: 'Combien coûte un site internet à Genève ?',
    answer: "Les agences web genevoises facturent généralement entre 5 000 et 15 000 CHF pour un site vitrine. Chez Atypik Code, mes 3 formules sont transparentes : Vitrine Essentiel à partir de 1 000€, Vitrine Pro à 1 500€ (le plus choisi) et Vitrine Premium à 1 900€ (multilingue ou réservation incluse). Soit 3 à 10 fois moins cher qu'une agence genevoise pour une qualité équivalente voire supérieure grâce à la technologie Next.js.",
  },
  {
    question: 'Pouvez-vous créer un site multilingue français-anglais ?',
    answer: 'Absolument. Genève étant une ville internationale, je conçois régulièrement des sites multilingues français-anglais, et même trilingues avec l\'allemand. L\'architecture Next.js que j\'utilise gère nativement l\'internationalisation avec un excellent SEO pour chaque langue, ce qui est essentiel pour toucher la clientèle internationale de Genève.',
  },
  {
    question: 'Comment se passent les rendez-vous si vous êtes en France ?',
    answer: 'La Roche-sur-Foron est à seulement 45 minutes de Genève. Je me déplace régulièrement à Genève pour des rendez-vous clients. Nous pouvons également nous rencontrer en visioconférence ou dans un espace de coworking genevois. La proximité transfrontalière rend la collaboration aussi fluide qu\'avec un prestataire local.',
  },
  {
    question: 'Facturez-vous en francs suisses ?',
    answer: 'Je facture principalement en euros, ce qui est d\'ailleurs avantageux pour vous compte tenu du taux de change. Si vous préférez une facturation en CHF, c\'est tout à fait possible. Dans tous les cas, mes tarifs restent nettement plus compétitifs que ceux pratiqués par les agences basées à Genève.',
  },
]

export default function CreationSiteInternetGeneve() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const zones = [
    'Carouge', 'Lancy', 'Vernier', 'Meyrin', 'Thônex',
    'Chêne-Bougeries', 'Plan-les-Ouates', 'Nyon', 'Lausanne',
  ]

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
            <p className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">Qualité suisse, tarifs français</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Création de Site Internet à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Genève
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
              Développeur web Next.js basé à 45 minutes de Genève. Je conçois des sites
              performants, optimisés pour le référencement, à des tarifs 3 à 5 fois inférieurs
              aux agences genevoises.
            </p>
            <p className="text-gray-400 mb-10">
              Le même niveau d'exigence que les meilleures agences suisses, sans les coûts de structure genevois.
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

      {/* Price comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Un investissement{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                intelligent
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Pourquoi payer le prix fort d'une agence genevoise quand vous pouvez obtenir
              la même qualité à une fraction du coût ?
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute -top-3 left-6">
                  <span className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">Agence web genevoise</span>
                </div>
                <div className="space-y-6 mt-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-gray-400">Site vitrine simple</span>
                    <span className="text-white font-semibold">5 000 - 8 000 CHF</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-gray-400">Site vitrine complet</span>
                    <span className="text-white font-semibold">8 000 - 15 000 CHF</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-gray-400">Site vitrine premium</span>
                    <span className="text-white font-semibold">15 000 - 25 000 CHF</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technologie</span>
                    <span className="text-white font-semibold">WordPress / CMS</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-purple-500/30 relative">
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">Atypik Code</span>
                </div>
                <div className="space-y-6 mt-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-gray-300">Site Vitrine Essentiel</span>
                    <span className="text-purple-400 font-bold text-lg">1 000€</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-gray-300">Site Vitrine Pro</span>
                    <span className="text-purple-400 font-bold text-lg">1 500€</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-gray-300">Site Vitrine Premium</span>
                    <span className="text-purple-400 font-bold text-lg">1 900€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Technologie</span>
                    <span className="text-purple-400 font-bold text-lg">Next.js / React</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              Tarifs indicatifs basés sur les prix moyens constatés dans le canton de Genève en 2024-2025.
              Facturation en EUR ou CHF selon votre préférence.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-gray-950/0 via-gray-900/50 to-gray-950/0">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Des offres adaptées au marché{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                genevois
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Trois formules conçues pour répondre aux besoins des entreprises de Genève
              et de Suisse romande.
            </p>

            <LocalPricingCards localContext="à Genève" />
          </div>
        </div>
      </section>

      {/* Why choose a French developer near Geneva */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Pourquoi choisir un développeur{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                français proche de Genève ?
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              La proximité transfrontalière, un avantage stratégique pour votre projet digital.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Même langue, même fuseau',
                  description: 'Francophone natif, même fuseau horaire, mêmes références culturelles. La communication est fluide, sans barrière. Vos retours sont intégrés en temps réel.',
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  ),
                },
                {
                  title: '45 min de Genève',
                  description: 'Basé à La Roche-sur-Foron en Haute-Savoie, je me déplace à Genève pour vos rendez-vous. Rencontres en présentiel, réactivité d\'un prestataire local.',
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Tarifs compétitifs',
                  description: 'Sans les charges de structure suisses, je propose des tarifs 3 à 5 fois inférieurs pour une qualité technique identique. Un investissement intelligent pour votre entreprise.',
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Expertise Next.js',
                  description: 'Spécialisé en Next.js et React, je construis des sites ultra-rapides qui chargent en moins d\'une seconde. Un avantage décisif pour le référencement sur Google.ch.',
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                },
                {
                  title: 'SEO marché suisse',
                  description: 'Optimisation spécifique pour le marché suisse romand : Google.ch, référencement local Genève, mots-clés adaptés au marché helvétique.',
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Disponibilité totale',
                  description: 'Interlocuteur unique et dédié, pas de turnover d\'équipe. Vous savez exactement qui travaille sur votre projet et pouvez me joindre directement.',
                  icon: (
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 bg-purple-500/15 rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 bg-gradient-to-b from-gray-950/0 via-gray-900/50 to-gray-950/0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Pour qui{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                sont mes services ?
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              J'accompagne les professionnels genevois qui veulent un site performant
              sans exploser leur budget digital.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Startups genevoises',
                  description: 'Lancez votre présence en ligne rapidement avec un budget maîtrisé. Idéal pour valider votre marché sans surinvestir.',
                },
                {
                  title: 'Professions libérales',
                  description: 'Avocats, médecins, consultants, architectes : un site vitrine professionnel qui reflète votre expertise et attire de nouveaux clients.',
                },
                {
                  title: 'Restaurants et commerces',
                  description: 'Menu en ligne, réservation, click & collect. Digitalisez votre établissement genevois pour capter la clientèle locale et touristique.',
                },
                {
                  title: 'Boutiques et artisans',
                  description: 'Présentez vos créations et savoir-faire avec un site élégant. Possibilité d\'e-commerce pour vendre en ligne en Suisse et à l\'international.',
                },
                {
                  title: 'PME et TPE',
                  description: 'Modernisez votre image digitale avec un site qui convertit. ROI mesurable et accompagnement dans la durée.',
                },
                {
                  title: 'Organisations internationales',
                  description: 'Sites multilingues, conformité internationale, design adapté au contexte genevois des ONG et institutions.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-white/10 hover:border-purple-500/20 transition-all">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Questions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                fréquentes
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-16">
              Tout ce que vous devez savoir avant de confier votre projet web à un développeur français.
            </p>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-semibold list-none [&::-webkit-details-marker]:hidden">
                    <span className="pr-4">{faq.question}</span>
                    <svg
                      className="w-5 h-5 text-purple-400 shrink-0 transition-transform group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zone */}
      <section className="py-20 bg-gradient-to-b from-gray-950/0 via-gray-900/50 to-gray-950/0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Intervention dans tout le{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Grand Genève
              </span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              Je crée des sites internet pour les entreprises de Genève et de l'arc lémanique.
              Déplacement possible pour vos rendez-vous.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {zones.map((ville, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 px-5 py-3 rounded-xl border border-white/5 text-white font-medium text-sm"
                >
                  {ville}
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
              Votre site internet à Genève,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                sans le prix suisse
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Obtenez un devis gratuit et personnalisé sous 24 heures.
              Découvrez combien vous pouvez économiser par rapport à une agence genevoise.
            </p>
            <p className="text-gray-400 mb-10">
              Florian Barjon -- Atypik Code -- La Roche-sur-Foron (74800)
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
              <a
                href="mailto:floriandev74@gmail.com"
                className="border border-white/20 text-gray-300 py-4 px-8 rounded-full font-semibold hover:bg-white/5 transition-all"
              >
                floriandev74@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
