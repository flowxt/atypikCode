import Link from 'next/link'
import { Metadata } from 'next'

export const metadata = {
  title: 'Développement Web La Roche-sur-Foron | Création Sites Internet Haute-Savoie - Atypik Code',
  description: 'Expert en développement web à La Roche-sur-Foron. Création de sites internet modernes, landing pages et applications web en Haute-Savoie. Devis gratuit sous 24h.',
  keywords: 'développement web la roche-sur-foron, création site internet la-roche-sur-foron, site web haute-savoie, développeur web annecy',
  alternates: {
    canonical: 'https://www.atypikcode.fr/developpement-web-la-roche-sur-foron',
  },
  openGraph: {
    title: 'Développement Web La Roche-sur-Foron | Sites Internet Moderne',
    description: 'Développeur web spécialisé Next.js à La Roche-sur-Foron. Création de sites performants pour entreprises en Haute-Savoie.',
    type: 'website',
  },
}

export default function DeveloppementWebLaRocheSurForon() {
  const services = [
    {
      title: "Création de sites vitrine",
      description: "Sites web professionnels pour présenter votre activité à La Roche-sur-Foron et ses environs",
      price: "À partir de 1 900€",
      features: ["Design responsive", "Optimisation SEO locale", "Maintenance 6 mois"]
    },
    {
      title: "Landing pages optimisées",
      description: "Pages d'atterrissage haute conversion pour vos campagnes marketing en Haute-Savoie",
      price: "À partir de 950€",
      features: ["Conversion optimisée", "A/B testing", "Analytics avancées", "Formulaires de contact"]
    },
    {
      title: "Applications web sur mesure",
      description: "Solutions digitales personnalisées pour digitaliser votre activité",
      price: "Sur devis",
      features: ["Développement Next.js", "Interface moderne", "Sécurité renforcée", "Support technique"]
    }
  ]

  const realisations = [
    {
      type: "Site vitrine",
      secteur: "Artisanat local",
      ville: "La Roche-sur-Foron",
      description: "Site web moderne pour artisan menuisier"
    },
    {
      type: "E-commerce",
      secteur: "Commerce local",
      ville: "Annecy",
      description: "Boutique en ligne pour produits régionaux"
    },
    {
      type: "Application",
      secteur: "Service",
      ville: "Haute-Savoie",
      description: "Plateforme de réservation pour entreprise locale"
    }
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Développement Web à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                La Roche-sur-Foron
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expert en création de sites internet modernes en Haute-Savoie. 
              Spécialisé Next.js, React et Framer Motion pour des sites web performants 
              qui boostent votre activité locale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
              >
                Devis gratuit sous 24h
              </Link>
              <Link 
                href="/services" 
                className="border border-purple-500 text-purple-400 py-4 px-8 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
              >
                Voir mes services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir un développeur local */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Pourquoi choisir un développeur web à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                La Roche-sur-Foron ?
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Proximité géographique</h3>
                <p className="text-gray-300">
                  Basé en Haute-Savoie, je connais parfaitement le tissu économique local et les spécificités 
                  des entreprises de la région La Roche-sur-Foron, Annecy, Bonneville.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Réactivité maximale</h3>
                <p className="text-gray-300">
                  Délais de réponse ultra-rapides, rendez-vous possibles en présentiel, 
                  et suivi personnalisé de votre projet web de A à Z.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Expertise technique</h3>
                <p className="text-gray-300">
                  Maîtrise des technologies modernes (Next.js, React, Framer Motion) 
                  pour créer des sites web performants et à la pointe de l'innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-gradient-to-b from-gray-900/0 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Services de développement web à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                La Roche-sur-Foron
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
                        <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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

      {/* Réalisations locales */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Réalisations en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Haute-Savoie
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {realisations.map((realisation, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-white/10">
                  <div className="text-sm text-purple-400 font-medium mb-2">{realisation.type}</div>
                  <h3 className="text-xl font-bold mb-2">{realisation.secteur}</h3>
                  <p className="text-gray-300 mb-4">{realisation.description}</p>
                  <div className="text-sm text-gray-400">
                    📍 {realisation.ville}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
              >
                Voir plus de réalisations
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Zone d'intervention en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Haute-Savoie
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Je développe des sites web pour les entreprises et auto-entrepreneurs dans toute la Haute-Savoie
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                "La Roche-sur-Foron", "Annecy", "Bonneville", "Cluses",
                "Sallanches", "Chamonix", "Thonon-les-Bains", "Évian-les-Bains",
                "Rumilly", "Faverges", "Scionzier", "Passy"
              ].map((ville, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-4 rounded-xl border border-white/5">
                  <div className="text-white font-medium">{ville}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ locale */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Questions fréquentes sur le{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                développement web
              </span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Combien coûte la création d'un site internet à La Roche-sur-Foron ?",
                  answer: "Les tarifs varient selon la complexité : landing page à partir de 950€, site vitrine à partir de 1 900€, application sur mesure sur devis. Tous les projets incluent l'optimisation SEO et la formation."
                },
                {
                  question: "Quel délai pour créer un site web en Haute-Savoie ?",
                  answer: "Généralement 2-4 semaines pour un site vitrine, 1-2 semaines pour une landing page, et 4-8 semaines pour une application. Je privilégie la qualité et les tests approfondis."
                },
                {
                  question: "Proposez-vous la maintenance de sites web ?",
                  answer: "Oui, tous mes projets incluent 6 mois de maintenance gratuite. Ensuite, je propose des contrats de maintenance adaptés avec mises à jour, sauvegardes et support technique."
                },
                {
                  question: "Mes contenus seront-ils optimisés pour le référencement local ?",
                  answer: "Absolument ! Tous mes sites sont optimisés pour le SEO local : Google My Business, mots-clés géographiques, schema markup local, et optimisation pour les recherches Haute-Savoie."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
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
              Prêt à lancer votre projet web à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                La Roche-sur-Foron ?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discutons de votre projet lors d'un appel découverte gratuit. 
              Devis personnalisé sous 24h !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
              >
                💬 Appel découverte gratuit
              </Link>
              <a 
                href="tel:+33683062632" 
                className="border border-purple-500 text-purple-400 py-4 px-8 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
              >
                📞 Appeler directement
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 