import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Développeur Web La Roche-sur-Foron | Création Site Internet 2025',
  description: 'Développeur web freelance à La Roche-sur-Foron en Haute-Savoie. Création de sites internet professionnels, landing pages et applications web sur mesure. Devis gratuit.',
  keywords: 'développeur web la roche-sur-foron, création site internet haute-savoie, freelance développeur 74, site web professionnel roche-sur-foron, agence web haute-savoie, création site vitrine 74800',
  openGraph: {
    title: 'Développeur Web à La Roche-sur-Foron | Sites Internet Professionnels',
    description: 'Votre développeur web local en Haute-Savoie. Sites vitrines, landing pages et e-commerce sur mesure. Rencontrez-moi à La Roche-sur-Foron !',
    type: 'article',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.atypikcode.fr/blog/developpeur-web-la-roche-sur-foron'
  }
}

export default function DeveloppeurWebLaRocheSurForon() {
  const avantages = [
    {
      icon: "🏔️",
      title: "Proximité locale",
      description: "Basé à La Roche-sur-Foron, je vous rencontre en personne pour comprendre votre projet et vos besoins spécifiques."
    },
    {
      icon: "⚡",
      title: "Technologies modernes",
      description: "J'utilise Next.js et React, les mêmes technologies que Netflix ou Uber, pour des sites ultra-rapides et bien référencés."
    },
    {
      icon: "🎯",
      title: "Sites qui convertissent",
      description: "Chaque site est conçu pour transformer vos visiteurs en clients. Design optimisé pour la conversion."
    },
    {
      icon: "📈",
      title: "SEO local optimisé",
      description: "Votre site sera visible sur Google pour les recherches locales en Haute-Savoie et alentours."
    }
  ]

  const villes = [
    "La Roche-sur-Foron",
    "Annecy",
    "Bonneville",
    "Cluses",
    "Sallanches",
    "Thonon-les-Bains",
    "Annemasse",
    "Saint-Julien-en-Genevois",
    "Reignier",
    "Cruseilles",
    "Thorens-Glières",
    "Évires"
  ]

  const temoignages = [
    {
      nom: "Kristelle F.",
      activite: "Thérapeute",
      avis: "Florian a réalisé notre site et nous sommes RAVIS 🤩 Le site est fluide, beau et accessible à tous. Je recommande très très très fortement ses services !",
      note: 5
    },
    {
      nom: "Céline L.",
      activite: "Entrepreneur",
      avis: "Il a tout de suite su cerner mes besoins et a su donner vie à un site qui me ressemble vraiment. Le résultat est clair, moderne et super pro.",
      note: 5
    },
    {
      nom: "LLAS",
      activite: "Entrepreneur",
      avis: "J'ai fait appel à Atypik Code pour deux sites Internet et une landing page. Je suis très satisfait du design et je suis actuellement très bien référencé.",
      note: 5
    }
  ]

  return (
    <main className="pt-24 bg-gray-950">
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* En-tête SEO optimisé */}
          <header className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              📍 La Roche-sur-Foron • Haute-Savoie (74)
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Développeur Web à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                La Roche-sur-Foron
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Création de sites internet professionnels en Haute-Savoie. 
              Sites vitrines, landing pages et e-commerce sur mesure pour les entreprises 
              de La Roche-sur-Foron et ses environs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Discuter de mon projet
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
              <Link 
                href="/#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all"
              >
                Voir mes réalisations
              </Link>
            </div>
          </header>

          {/* Introduction */}
          <section className="prose prose-lg prose-invert max-w-none mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Pourquoi faire appel à un développeur web local à La Roche-sur-Foron ?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vous êtes <strong>artisan, commerçant, thérapeute ou entrepreneur</strong> à La Roche-sur-Foron 
                ou en Haute-Savoie ? Votre activité mérite un site internet professionnel qui vous 
                représente et attire de nouveaux clients.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                En tant que <strong>développeur web freelance basé à La Roche-sur-Foron</strong>, 
                je crée des sites internet sur mesure avec les technologies les plus modernes 
                (Next.js, React). Contrairement aux solutions toutes faites comme Wix ou WordPress, 
                vos sites sont <strong>ultra-rapides, sécurisés et parfaitement optimisés pour Google</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                La proximité me permet de vous rencontrer en personne, de comprendre votre métier 
                et de créer un site qui reflète vraiment votre identité et vos valeurs.
              </p>
            </div>
          </section>

          {/* Avantages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mes avantages en tant que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                développeur local
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {avantages.map((avantage, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 p-6 hover:border-purple-500/30 transition-all"
                >
                  <div className="text-4xl mb-4">{avantage.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{avantage.title}</h3>
                  <p className="text-gray-400">{avantage.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services proposés */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mes services de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                création web
              </span>
            </h2>

            <div className="space-y-6">
              {/* Landing Page */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 p-8">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">🚀</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-white">Landing Page</h3>
                      <span className="text-purple-400 font-bold text-xl">À partir de 950€</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Page d'atterrissage optimisée pour la conversion. Idéale pour lancer une offre, 
                      un service ou capturer des leads qualifiés à La Roche-sur-Foron et en Haute-Savoie.
                    </p>
                    <ul className="text-gray-400 space-y-2">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Design sur mesure et responsive
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Optimisation SEO locale
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Formulaire de contact intégré
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Site Vitrine */}
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 p-8">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">🏢</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-white">Site Vitrine Professionnel</h3>
                      <span className="text-purple-400 font-bold text-xl">À partir de 1 900€</span>
                      <span className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full">Populaire</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Site web complet pour présenter votre activité, vos services et votre expertise. 
                      Parfait pour les artisans, thérapeutes et PME de La Roche-sur-Foron.
                    </p>
                    <ul className="text-gray-400 space-y-2">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        5 à 10 pages personnalisées
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        SEO avancé pour Google
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Performances optimales (score 100/100)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* E-commerce */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 p-8">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">🛒</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-white">Site E-commerce</h3>
                      <span className="text-purple-400 font-bold text-xl">Sur devis</span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Boutique en ligne professionnelle pour vendre vos produits ou services. 
                      Solution complète avec paiement sécurisé et gestion des commandes.
                    </p>
                    <ul className="text-gray-400 space-y-2">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Catalogue produits illimité
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Paiement Stripe sécurisé
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Tableau de bord admin
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              * Frais d'hébergement et maintenance : 50 à 150€/mois selon les options
            </p>
          </section>

          {/* Témoignages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Ce que disent mes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                clients
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Plus de 20 entrepreneurs accompagnés en Haute-Savoie
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {temoignages.map((temoignage, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 p-6"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(temoignage.note)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{temoignage.avis}"</p>
                  <div>
                    <p className="font-bold text-white">{temoignage.nom}</p>
                    <p className="text-gray-500 text-sm">{temoignage.activite}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://share.google/NcwHY3Xaa70ERtb74"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Voir tous les avis Google
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </section>

          {/* Zone d'intervention */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Zone d'intervention en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Haute-Savoie
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Basé à La Roche-sur-Foron, j'interviens dans toute la Haute-Savoie (74)
            </p>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {villes.map((ville, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      ville === "La Roche-sur-Foron" 
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" 
                        : "bg-gray-800 text-gray-300 border border-white/10"
                    }`}
                  >
                    {ville}
                  </span>
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm mt-6">
                Rendez-vous en personne possibles • Travail à distance pour le reste de la France
              </p>
            </div>
          </section>

          {/* Processus de travail */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comment se déroule{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                notre collaboration
              </span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  etape: "1",
                  titre: "Appel découverte gratuit",
                  description: "On se rencontre (en visio ou à La Roche-sur-Foron) pour discuter de votre projet, vos besoins et vos objectifs. C'est gratuit et sans engagement."
                },
                {
                  etape: "2",
                  titre: "Devis personnalisé",
                  description: "Je vous envoie une proposition détaillée avec le prix exact, les fonctionnalités incluses et le planning de réalisation."
                },
                {
                  etape: "3",
                  titre: "Création de votre site",
                  description: "Je développe votre site avec des points réguliers pour valider chaque étape. Vous suivez l'avancement en temps réel."
                },
                {
                  etape: "4",
                  titre: "Mise en ligne",
                  description: "Votre site est mis en ligne, optimisé pour Google et prêt à accueillir vos premiers visiteurs et clients !"
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {step.etape}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{step.titre}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ locale */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Questions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                fréquentes
              </span>
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "Pourquoi choisir un développeur local à La Roche-sur-Foron ?",
                  answer: "Un développeur local connaît le tissu économique de la région, peut vous rencontrer en personne et comprend mieux vos besoins. Je suis disponible pour des rendez-vous à La Roche-sur-Foron, Annecy ou Bonneville."
                },
                {
                  question: "Combien de temps pour créer un site internet ?",
                  answer: "Une landing page est livrée en 1-2 semaines. Un site vitrine complet prend 3-4 semaines. Un site e-commerce peut prendre 4-6 semaines selon la complexité."
                },
                {
                  question: "Mes sites sont-ils bien référencés sur Google ?",
                  answer: "Absolument ! J'utilise Next.js, une technologie qui produit des sites ultra-rapides adorés par Google. Tous mes sites sont optimisés pour le SEO local (La Roche-sur-Foron, Haute-Savoie, etc.)."
                },
                {
                  question: "Proposez-vous la maintenance du site ?",
                  answer: "Oui, je propose des forfaits maintenance de 50 à 150€/mois incluant hébergement, mises à jour, sauvegardes et support technique."
                },
                {
                  question: "Puis-je modifier mon site moi-même ?",
                  answer: "Pour les modifications simples (textes, images), c'est possible. Pour les modifications structurelles, je reste à votre disposition avec un tarif horaire avantageux."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10 p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section className="relative z-10 text-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/20 p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à créer votre site web{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                à La Roche-sur-Foron ?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet lors d'un appel découverte gratuit. 
              Devis personnalisé sous 24h !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                📞 Appel découverte gratuit
              </Link>
              <a 
                href="mailto:floriandev74@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
              >
                ✉️ floriandev74@gmail.com
              </a>
            </div>

            <p className="text-gray-400 mt-8 text-sm">
              ⭐ 5/5 sur Google • 20+ clients satisfaits en Haute-Savoie
            </p>
          </section>

          {/* Schema.org pour SEO local */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Atypik Code - Développeur Web",
                "description": "Développeur web freelance à La Roche-sur-Foron. Création de sites internet professionnels en Haute-Savoie.",
                "url": "https://www.atypikcode.fr",
                "telephone": "",
                "email": "floriandev74@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "La Roche-sur-Foron",
                  "addressRegion": "Haute-Savoie",
                  "postalCode": "74800",
                  "addressCountry": "FR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 46.0667,
                  "longitude": 6.3167
                },
                "areaServed": [
                  "La Roche-sur-Foron",
                  "Annecy",
                  "Bonneville",
                  "Cluses",
                  "Haute-Savoie"
                ],
                "priceRange": "€€",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "reviewCount": "12"
                }
              })
            }}
          />
        </div>
      </article>
    </main>
  )
}
