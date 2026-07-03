import Link from 'next/link'
import LocalPricingCards from '@/components/local/LocalPricingCards'

export const metadata = {
  title: 'Développement Web & Création Site Internet Bonneville | Dès 1 000€',
  description:
    "Développement web sur mesure et création de site internet à Bonneville (74130) à partir de 1 000€. L'alternative locale aux agences : un développeur freelance à 10 min de Bonneville. Devis gratuit en 24h.",
  keywords:
    'développement web bonneville, développement web sur mesure bonneville, entreprise développement web bonneville, agence de développement web bonneville, création site internet bonneville, site vitrine bonneville 1000 euros, développeur web bonneville, site web bonneville 74, agence web bonneville',
  alternates: {
    canonical: 'https://www.atypikcode.fr/creation-site-internet-bonneville',
  },
  openGraph: {
    title: 'Développement Web & Site Internet Bonneville | Atypik Code',
    description:
      'Développement web sur mesure à 10 minutes de Bonneville. Sites internet performants pour les entreprises et artisans de la sous-préfecture de Haute-Savoie.',
    url: 'https://www.atypikcode.fr/creation-site-internet-bonneville',
    type: 'website',
  },
}

const faqData = [
  {
    question: 'Combien coûte la création d\'un site internet à Bonneville ?',
    answer:
      'Les tarifs démarrent à 1 000 € HT pour un site Vitrine Essentiel (1-3 pages, design responsive, SEO de base), 1 500 € HT pour un Vitrine Pro (jusqu\'à 5 pages, SEO avancé) et 1 900 € HT pour la formule Premium. Pour un projet sur mesure avec des fonctionnalités spécifiques (réservation, catalogue produits, espace client), un devis personnalisé est établi gratuitement sous 24h après étude de vos besoins.',
  },
  {
    question: 'Quel est le délai de création d\'un site web ?',
    answer:
      'Comptez 1 à 2 semaines pour un Vitrine Essentiel, 2 à 3 semaines pour un Vitrine Pro et 3 à 4 semaines pour la formule Premium. Étant basé à La Roche-sur-Foron, à seulement 10 minutes de Bonneville, nous pouvons nous rencontrer facilement pour ajuster le projet et accélérer les validations.',
  },
  {
    question: 'Mon site apparaîtra-t-il en première page de Google ?',
    answer:
      'Chaque site est construit avec les meilleures pratiques SEO : structure sémantique, temps de chargement optimisé, balisage schema.org et contenu ciblé sur vos mots-clés locaux. Le référencement naturel est un travail continu, mais la base technique que je mets en place vous donne un avantage concret pour vous positionner sur des requêtes comme "votre activité + Bonneville".',
  },
  {
    question: 'Proposez-vous du développement web sur mesure à Bonneville ?',
    answer:
      'Oui. Au-delà des sites vitrines, je développe des solutions web sur mesure pour les entreprises de Bonneville et de la vallée de l\'Arve : applications web, outils métier, plateformes de réservation, e-commerce. Contrairement à une agence de développement web classique, vous travaillez en direct avec le développeur : circuit court, tarifs maîtrisés et réactivité. Chaque projet sur mesure fait l\'objet d\'un devis gratuit sous 24h.',
  },
  {
    question: 'Proposez-vous un accompagnement après la mise en ligne ?',
    answer:
      'Oui, chaque projet inclut 6 mois de maintenance gratuite (mises à jour, corrections, sauvegardes). Au-delà, je propose des contrats d\'accompagnement adaptés. Vous bénéficiez aussi d\'une formation pour gérer vos contenus en autonomie.',
  },
]

export default function CreationSiteInternetBonneville() {
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
      <section className="py-20 bg-gradient-to-br from-gray-950 via-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">
              Développeur web freelance -- basé à 10 min de Bonneville
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Création de Site Internet et Développement Web à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Bonneville
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Vous cherchez une entreprise de développement web à Bonneville ? Plutôt qu&apos;une
              agence, travaillez en direct avec un développeur freelance local : du site vitrine au
              développement web sur mesure, un interlocuteur unique, des tarifs transparents et un
              site pensé pour attirer vos clients de la vallée de l&apos;Arve.
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

      {/* Pourquoi les entreprises de Bonneville ont besoin d'un site */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              Pourquoi les entreprises de Bonneville ont besoin d'un{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                site internet professionnel
              </span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
              Ville de marché et sous-préfecture historique, Bonneville concentre un tissu dense de
              PME, d'artisans et de commerces. La concurrence locale est forte : un site web
              performant fait la différence.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Un bassin économique dynamique</h3>
                <p className="text-gray-300">
                  La vallée de l'Arve regroupe l'un des plus importants pôles industriels de France
                  dans le décolletage et la mécanique de précision. Les PME et PMI bonnevilloises
                  doivent se démarquer en ligne pour capter de nouveaux marchés, au-delà du
                  bouche-à-oreille local.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Des clients qui cherchent en ligne</h3>
                <p className="text-gray-300">
                  Que ce soit pour trouver un artisan, un commerce ou un prestataire de services à
                  Bonneville, le réflexe Google est devenu universel. Sans site web, vous êtes
                  invisible pour une large part de votre clientèle potentielle, notamment les
                  nouveaux arrivants dans la vallée.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Crédibilité et confiance</h3>
                <p className="text-gray-300">
                  Un site professionnel renforce immédiatement la confiance de vos prospects. Pour
                  les commerces du centre-ville de Bonneville comme pour les entreprises de la zone
                  industrielle, c'est un investissement qui génère des retours concrets et
                  mesurables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services et tarifs */}
      <section className="py-20 bg-gradient-to-b from-gray-950/0 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              Offres de création de site web pour{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Bonneville
              </span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              Des solutions adaptées à chaque budget, du commerçant indépendant à la PME
              industrielle de la vallée de l'Arve.
            </p>

            <LocalPricingCards localContext="à Bonneville" />
          </div>
        </div>
      </section>

      {/* Avantage proximité */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-10 md:p-16 rounded-2xl border border-white/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    Votre développeur web à{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                      10 minutes
                    </span>{' '}
                    de Bonneville
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Je suis Florian Barjon, développeur web freelance basé à La Roche-sur-Foron
                    (74800). Bonneville est littéralement la ville voisine : je connais ses
                    quartiers, ses zones d'activité, son marché du samedi et les habitudes de
                    consommation de ses habitants.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Cette proximité vous garantit des rendez-vous en personne quand vous le
                    souhaitez, une réactivité immédiate et une compréhension fine de votre marché
                    local. Pas besoin de travailler avec une agence parisienne quand votre
                    développeur est à deux pas.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      label: 'Trajet La Roche -- Bonneville',
                      value: '10 min',
                    },
                    {
                      label: 'Rendez-vous en personne',
                      value: 'Quand vous voulez',
                    },
                    {
                      label: 'Réponse à vos messages',
                      value: 'Sous 2h en jour ouvré',
                    },
                    {
                      label: 'Devis personnalisé',
                      value: 'Gratuit sous 24h',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center border-b border-white/10 pb-4"
                    >
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-white font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-gray-950/0 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Questions fréquentes sur la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                création de site à Bonneville
              </span>
            </h2>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 overflow-hidden"
                >
                  <summary className="cursor-pointer p-6 text-lg font-semibold text-white flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-purple-400 shrink-0 ml-4 transition-transform group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed">{faq.answer}</div>
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
              Également disponible autour de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Bonneville
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              J'accompagne les entreprises de toute la vallée de l'Arve et du Faucigny dans leur
              transformation digitale.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Ayze', distance: '5 min' },
                { name: 'Contamine-sur-Arve', distance: '7 min' },
                { name: 'Vougy', distance: '8 min' },
                { name: 'Saint-Pierre-en-Faucigny', distance: '6 min' },
                { name: 'Bonne', distance: '12 min' },
                { name: 'Scientrier', distance: '10 min' },
              ].map((ville, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-5 rounded-xl border border-white/5"
                >
                  <div className="text-white font-medium">{ville.name}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {ville.distance} de Bonneville
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Donnez vie à votre projet web à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Bonneville
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Discutons de votre projet autour d'un café à Bonneville ou à La Roche-sur-Foron.
              Premier échange et devis gratuits, sans engagement.
            </p>
            <p className="text-gray-400 mb-10">
              Florian Barjon -- Atypik Code -- floriandev74@gmail.com
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
              >
                Prendre rendez-vous
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
  )
}
