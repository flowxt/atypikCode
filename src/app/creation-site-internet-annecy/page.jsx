import Link from 'next/link'
import LocalPricingCards from '@/components/local/LocalPricingCards'

export const metadata = {
  title: 'Création Site Internet Annecy | À partir de 1 000€ - Atypik Code',
  description:
    'Création de site internet à Annecy par un développeur web freelance en Haute-Savoie. Site vitrine professionnel à partir de 1 000€. Devis gratuit en 24h.',
  keywords:
    'création site internet annecy, développeur web annecy, site vitrine annecy 1000 euros, agence web annecy, création site web haute-savoie, développeur freelance annecy, site internet lac annecy, webdesign annecy',
  alternates: {
    canonical: 'https://www.atypikcode.fr/creation-site-internet-annecy',
  },
  openGraph: {
    title: 'Création Site Internet Annecy | Développeur Web Freelance',
    description:
      'Développeur web freelance proche d\'Annecy. Création de sites internet performants pour commerces, hôtels, restaurants et entreprises du bassin annécien.',
    type: 'website',
    url: 'https://www.atypikcode.fr/creation-site-internet-annecy',
  },
}

const faqData = [
  {
    question: 'Combien coûte un site internet à Annecy ?',
    answer:
      'Le tarif dépend du périmètre. Mes 3 formules : Vitrine Essentiel à partir de 1\u00a0000\u00a0€ (1-3 pages), Vitrine Pro à 1\u00a0500\u00a0€ (jusqu\'à 5 pages, SEO avancé), Vitrine Premium à 1\u00a0900\u00a0€ (multilingue ou réservation, design haut de gamme). Les projets sur mesure (e-commerce, application) font l\'objet d\'un devis personnalisé. Chaque prestation inclut le design responsive, l\'optimisation SEO et un accompagnement après mise en ligne.',
  },
  {
    question: 'Pourquoi choisir un développeur local plutôt qu\'une agence parisienne ?',
    answer:
      'Un développeur implanté en Haute-Savoie comprend les réalités du marché annécien : la saisonnalité touristique, la concurrence locale, les attentes des clients de la région. Vous bénéficiez de rendez-vous en face à face, d\'une réactivité immédiate et de tarifs sans les frais de structure d\'une grande agence.',
  },
  {
    question: 'En combien de temps mon site sera-t-il en ligne ?',
    answer:
      'Comptez 1 à 2 semaines pour un site Vitrine Essentiel, 2 à 3 semaines pour un Vitrine Pro et 3 à 4 semaines pour un Vitrine Premium. Un projet sur mesure (e-commerce, application) nécessite généralement 5 à 8 semaines selon sa complexité. Je m\'engage sur un calendrier clair dès le démarrage du projet.',
  },
  {
    question: 'Mon site sera-t-il visible sur Google pour les recherches à Annecy ?',
    answer:
      'Chaque site que je développe intègre une optimisation SEO locale dès la conception : balisage sémantique, données structurées, mots-clés géolocalisés, performances optimales et compatibilité mobile. Ces fondations techniques maximisent votre visibilité sur les recherches liées à Annecy et sa région.',
  },
  {
    question: 'Proposez-vous un suivi après la mise en ligne ?',
    answer:
      'Tous mes projets incluent 6 mois de maintenance : mises à jour de sécurité, corrections et ajustements. Je propose ensuite des formules de maintenance adaptées pour que votre site reste performant et à jour sur le long terme.',
  },
]

export default function CreationSiteInternetAnnecy() {
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

  return (
    <main className="relative z-10 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">
              Développeur web freelance en Haute-Savoie
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Création de Site Internet à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Annecy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Basé à La Roche-sur-Foron, à seulement 25 minutes d'Annecy, je conçois des
              sites web sur mesure pour les entreprises du bassin annécien. Des solutions
              performantes, pensées pour convertir vos visiteurs en clients.
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

      {/* Pourquoi un site web à Annecy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              Pourquoi les entreprises d'Annecy ont besoin d'un{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                site internet professionnel
              </span>
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
              Capitale de la Haute-Savoie et destination touristique majeure des Alpes,
              Annecy attire chaque année des millions de visiteurs. Dans un marché aussi
              concurrentiel, votre présence en ligne fait la différence.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Tourisme et visibilité</h3>
                <p className="text-gray-300">
                  Avec le lac, la vieille ville et les montagnes environnantes, Annecy
                  génère un flux touristique considérable. Hotels, restaurants, loueurs de
                  vélos ou de bateaux : vos futurs clients vous cherchent d'abord sur
                  Google. Un site vitrine optimisé pour le référencement local vous place
                  en tête de leurs résultats.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Concurrence locale intense</h3>
                <p className="text-gray-300">
                  La métropole d'Annecy regroupe plus de 130 000 habitants et des milliers
                  de commerces. Agences immobilières, boutiques du centre-ville, cabinets
                  de conseil : sans un site web moderne et rapide, vous laissez vos
                  concurrents capter les clients qui auraient pu être les vôtres.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Mobile et SEO local</h3>
                <p className="text-gray-300">
                  La majorité des recherches locales sont faites depuis un smartphone,
                  souvent en déplacement. Un site rapide, responsive et optimisé pour le
                  SEO local garantit que votre entreprise annécienne apparaît au bon
                  moment, devant les bonnes personnes.
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
            <h2 className="text-4xl font-bold text-center mb-6">
              Mes offres de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                création web à Annecy
              </span>
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg">
              Des formules adaptées à chaque besoin, du lancement d'activité au projet
              digital ambitieux.
            </p>

            <LocalPricingCards localContext="à Annecy" />
          </div>
        </div>
      </section>

      {/* Avantages local */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              Un développeur web{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                à deux pas d'Annecy
              </span>
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
              Installé à La Roche-sur-Foron (74800), je travaille quotidiennement avec
              des entreprises du bassin annécien. Cette proximité change tout.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">25 minutes de trajet</h3>
                    <p className="text-gray-300">
                      La Roche-sur-Foron est reliée à Annecy par l'A41. Je peux vous
                      rencontrer dans vos locaux, dans un café du centre-ville ou au bord
                      du lac pour discuter de votre projet en personne.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Connaissance du tissu local</h3>
                    <p className="text-gray-300">
                      Je connais les enjeux des entreprises annéciennes : la saisonnalité
                      estivale et hivernale, les attentes des touristes, le dynamisme du
                      secteur tertiaire. Votre site reflètera cette réalité.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Tarifs freelance, sans intermédiaire</h3>
                    <p className="text-gray-300">
                      Pas de commercial, pas de chef de projet facturé en surplus. Vous
                      travaillez directement avec le développeur qui code votre site, ce
                      qui réduit les coûts et accélère les échanges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Technologies modernes</h3>
                    <p className="text-gray-300">
                      Vos concurrents utilisent encore des CMS lourds et lents. Je
                      développe avec Next.js et React pour des sites ultra-rapides qui
                      chargent en moins d'une seconde et séduisent Google.
                    </p>
                  </div>
                </div>
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
              Questions fréquentes sur la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                création web à Annecy
              </span>
            </h2>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-semibold text-white hover:text-purple-300 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-purple-400 flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
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
            <h2 className="text-4xl font-bold mb-6">
              Création de sites internet autour d'{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Annecy
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              J'accompagne les professionnels d'Annecy et de toutes les communes
              environnantes dans leur projet de création ou de refonte de site web.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                'Annecy',
                'Annecy-le-Vieux',
                'Cran-Gevrier',
                'Seynod',
                'Meythet',
                'Pringy',
                'Argonay',
                'Veyrier-du-Lac',
                'Sevrier',
                'Talloires',
                'Menthon-Saint-Bernard',
                'Saint-Jorioz',
              ].map((ville) => (
                <div
                  key={ville}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-4 rounded-xl border border-white/5"
                >
                  <span className="text-white font-medium">{ville}</span>
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
              Donnez vie à votre projet web à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Annecy
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Discutons de votre projet autour d'un café au bord du lac ou lors d'un
              appel découverte gratuit. Devis personnalisé sous 24h.
            </p>
            <p className="text-gray-400 mb-8">
              Florian Barjon -- Développeur web freelance -- La Roche-sur-Foron (74800)
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
