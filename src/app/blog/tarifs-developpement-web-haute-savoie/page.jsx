import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: 'Tarifs Développement Web Haute-Savoie 2024 | Prix Sites Internet La Roche-sur-Foron',
  description: 'Découvrez nos tarifs transparents pour le développement web en Haute-Savoie. Prix site vitrine, landing page, application à La Roche-sur-Foron. Devis gratuit.',
  keywords: 'tarifs développement web, prix site internet haute-savoie, coût création site web la roche-sur-foron, devis développeur web, tarif landing page',
  openGraph: {
    title: 'Tarifs Développement Web Haute-Savoie 2024 | Prix Transparents',
    description: 'Prix clairs et transparents pour votre projet web en Haute-Savoie. Du site vitrine à l\'application sur mesure.',
    type: 'article',
  },
}

export default function TarifsDeveloppementWeb() {
  const services = [
    {
      category: "Landing Pages",
      description: "Pages d'atterrissage optimisées pour la conversion",
      icon: "🚀",
      packages: [
        {
          name: "Landing Page",
          price: "À partir de 950€",
          features: [
            "1 page d'atterrissage responsive",
            "Design sur mesure",
            "Optimisation SEO de base",
            "Formulaire de contact",
            "Analytics Google",
            "2 révisions incluses",
            "Livraison en 1-2 semaines"
          ],
          popular: false
        },
        {
          name: "Landing Pro",
          price: "À partir de 950€",
          features: [
            "Landing page + page de remerciement",
            "Design premium avec animations",
            "Optimisation SEO avancée",
            "A/B testing",
            "Intégration CRM",
            "3 révisions incluses",
            "Formation à la gestion",
            "Livraison en 2-3 semaines"
          ],
          popular: true
        }
      ]
    },
    {
      category: "Sites Vitrine",
      description: "Sites web complets pour présenter votre activité",
      icon: "🏢",
      packages: [
        {
          name: "Site Vitrine",
          price: "À partir de 1 900€",
          features: [
            "5 pages responsive",
            "Design professionnel",
            "Optimisation SEO",
            "Formulaire de contact",
            "Galerie photos",
            "Google Maps intégré",
            "3 révisions incluses",
            "Livraison en 3-4 semaines"
          ],
          popular: false
        },
        {
          name: "Site Business",
          price: "Sur devis",
          features: [
            "10 pages responsive",
            "Design premium avec animations",
            "SEO avancé + contenu optimisé",
            "Blog intégré",
            "Espace client/admin",
            "Réservation en ligne",
            "5 révisions incluses",
            "Formation complète",
            "Livraison en 4-6 semaines"
          ],
          popular: true
        },
        {
          name: "Site Premium",
          price: "4 000€",
          features: [
            "Pages illimitées",
            "Design sur mesure avancé",
            "CMS personnalisé",
            "Multilingue",
            "E-commerce (jusqu'à 50 produits)",
            "Intégrations API",
            "Révisions illimitées",
            "Support 1 an",
            "Livraison en 6-8 semaines"
          ],
          popular: false
        }
      ]
    },
    {
      category: "Applications Web",
      description: "Solutions sur mesure pour digitaliser vos processus",
      icon: "⚡",
      packages: [
        {
          name: "App MVP",
          price: "3 500€",
          features: [
            "Application simple (3-5 fonctionnalités)",
            "Interface utilisateur moderne",
            "Base de données",
            "Authentification utilisateur",
            "Responsive design",
            "Tests et documentation",
            "Livraison en 6-8 semaines"
          ],
          popular: false
        },
        {
          name: "App Business",
          price: "7 000€",
          features: [
            "Application complète (10+ fonctionnalités)",
            "Dashboard admin",
            "API REST",
            "Gestion des rôles",
            "Notifications",
            "Intégrations tierces",
            "Support 6 mois",
            "Livraison en 8-12 semaines"
          ],
          popular: true
        },
        {
          name: "App Enterprise",
          price: "Sur devis",
          features: [
            "Application complexe sur mesure",
            "Architecture scalable",
            "Sécurité renforcée",
            "Intégrations multiples",
            "Formation équipe",
            "Support dédié",
            "Maintenance incluse",
            "Délais selon projet"
          ],
          popular: false
        }
      ]
    }
  ]

  const additionalServices = [
    { service: "Nom de domaine", price: "15€/an", description: "Réservation et configuration" },
    { service: "Hébergement web", price: "10€/mois", description: "Serveur haute performance" },
    { service: "Certificat SSL", price: "Gratuit", description: "Sécurisation HTTPS" },
    { service: "Emails professionnels", price: "5€/mois/adresse", description: "contact@votreentreprise.fr" },
    { service: "Maintenance mensuelle", price: "50 à 150€/mois", description: "Hébergement + mises à jour + sauvegarde + support" },
    { service: "Formation", price: "100€/heure", description: "Formation à la gestion de votre site" },
    { service: "Rédaction contenu", price: "80€/page", description: "Rédaction SEO professionnelle" },
    { service: "Photos professionnelles", price: "300€/demi-journée", description: "Shooting produits/équipe" }
  ]

  return (
    <main className="pt-24">
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tarifs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Développement Web
              </span>{" "}
              Haute-Savoie
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Découvrez nos tarifs transparents pour votre projet web à La Roche-sur-Foron et en Haute-Savoie. 
              Prix fixes, sans surprise, avec tout inclus pour votre réussite en ligne.
            </p>

            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="text-green-400 font-bold mb-2">💡 Engagement qualité</h3>
              <p className="text-gray-300">
                Tous nos prix incluent : design responsive, optimisation SEO, formation, 
                support technique réactif. Aucun frais caché !
              </p>
            </div>
          </header>

          {/* Grilles de tarifs par catégorie */}
          {services.map((serviceCategory, categoryIndex) => (
            <section key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{serviceCategory.icon}</div>
                <h2 className="text-4xl font-bold mb-4">{serviceCategory.category}</h2>
                <p className="text-xl text-gray-300">{serviceCategory.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategory.packages.map((package_, packageIndex) => (
                  <div
                    key={packageIndex}
                    className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border ${
                      package_.popular 
                        ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                        : 'border-white/10'
                    }`}
                  >
                    {package_.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Plus populaire
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-4">{package_.name}</h3>
                    
                    <div className="mb-8">
                      <span className="text-4xl font-bold text-purple-400">{package_.price}</span>
                      {package_.price !== "Sur devis" && (
                        <span className="text-gray-400 ml-2">HT</span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {package_.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                        package_.popular
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/30'
                          : 'border border-purple-500 text-purple-400 hover:bg-purple-500/10'
                      }`}
                    >
                      Commander maintenant
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Services additionnels */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Additionnels
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{service.service}</h3>
                    <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pourquoi ces tarifs */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Pourquoi ces{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                tarifs ?
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">💰 Tarifs compétitifs</h3>
                <p className="text-gray-300 mb-4">
                  Nos prix sont étudiés pour être justes : moins chers qu'une agence web traditionnelle, 
                  mais avec la même qualité professionnelle.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Pas d'intermédiaires = prix réduits</li>
                  <li>• Développeur local = économies transport</li>
                  <li>• Processus optimisé = délais courts</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">🎯 Valeur ajoutée</h3>
                <p className="text-gray-300 mb-4">
                  Chaque euro investi dans votre site web doit vous rapporter. 
                  Nos sites sont conçus pour générer des leads et des ventes.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Technologies modernes (Next.js, React)</li>
                  <li>• SEO optimisé dès le départ</li>
                  <li>• Formation pour autonomie</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">🔧 Tout inclus</h3>
                <p className="text-gray-300 mb-4">
                  Nos tarifs incluent tout ce dont vous avez besoin pour réussir en ligne. 
                  Pas de mauvaises surprises en cours de projet.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Design responsive (mobile/tablette/desktop)</li>
                  <li>• Optimisation vitesse et SEO</li>
                  <li>• Formation + documentation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">⚡ Expertise locale</h3>
                <p className="text-gray-300 mb-4">
                  Basé en Haute-Savoie, je connais le marché local et les attentes 
                  des entreprises de la région.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Rendez-vous en présentiel possibles</li>
                  <li>• Connaissance du tissu économique local</li>
                  <li>• Support réactif et personnalisé</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process de travail */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Comment ça{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                fonctionne ?
              </span>
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>
              
              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "Appel découverte gratuit",
                    description: "Discussion de 30 minutes pour comprendre vos besoins, vos objectifs et votre budget. Aucun engagement.",
                    duration: "30 min"
                  },
                  {
                    step: "2", 
                    title: "Devis personnalisé",
                    description: "Proposition détaillée avec planning, fonctionnalités et tarifs adaptés à votre projet. Réponse sous 24h.",
                    duration: "24h"
                  },
                  {
                    step: "3",
                    title: "Acompte et lancement",
                    description: "Versement de 40% pour démarrer le projet. Signature du contrat et planning détaillé.",
                    duration: "1 jour"
                  },
                  {
                    step: "4",
                    title: "Développement",
                    description: "Création de votre site avec points réguliers. Accès à l'environnement de développement en temps réel.",
                    duration: "2-8 semaines"
                  },
                  {
                    step: "5",
                    title: "Tests et formation",
                    description: "Tests approfondis, corrections, puis formation personnalisée pour gérer votre site en autonomie.",
                    duration: "1 semaine"
                  },
                  {
                    step: "6",
                    title: "Mise en ligne",
                    description: "Déploiement sur votre nom de domaine, configuration finale. Solde 60% à la livraison.",
                    duration: "1 jour"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-8 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10">
                      {step.step}
                    </div>
                    
                    <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/10">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <span className="text-sm text-purple-400 font-medium">{step.duration}</span>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Tarifs */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Questions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                fréquentes
              </span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Ces tarifs incluent-ils l'hébergement et le nom de domaine ?",
                  answer: "Les tarifs de développement n'incluent pas l'hébergement (10€/mois) ni le nom de domaine (15€/an). Ces frais sont à prévoir en plus et sont facturés annuellement. Je peux m'occuper de tout pour vous."
                },
                {
                  question: "Proposez-vous des facilités de paiement ?",
                  answer: "Oui ! Paiement en 3 fois sans frais : 40% au lancement, 40% à mi-parcours, 20% à la livraison. Pour les projets > 3000€, possibilité de paiement en 4 fois."
                },
                {
                  question: "Proposez-vous un forfait maintenance ?",
                  answer: "Oui ! Je propose des forfaits maintenance de 50 à 150€/mois selon les options. Cela inclut l'hébergement, les mises à jour, les sauvegardes et le support technique."
                },
                {
                  question: "Les révisions sont-elles vraiment incluses ?",
                  answer: "Oui ! Chaque package inclut un nombre de révisions (2 à 5 selon la formule). Les révisions portent sur le design et le contenu, pas sur l'ajout de nouvelles fonctionnalités."
                },
                {
                  question: "Combien coûte une modification après livraison ?",
                  answer: "Les petites modifications (texte, couleurs) sont gratuites les 3 premiers mois. Les modifications importantes sont facturées 80€/heure avec devis préalable."
                },
                {
                  question: "Puis-je avoir un site moins cher ailleurs ?",
                  answer: "Peut-être, mais attention aux prestations incluses ! Nos tarifs incluent tout : design sur mesure, SEO, responsive, formation, maintenance 6 mois. Comparez à prestations égales."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-12 rounded-2xl border border-white/10">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à lancer votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                projet web ?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discutons de votre projet lors d'un appel découverte gratuit de 30 minutes. 
              Devis personnalisé et transparent sous 24h !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
              >
                📞 Appel découverte gratuit
              </Link>
              <a 
                href="mailto:floriandev74@gmail.com" 
                className="border border-purple-500 text-purple-400 py-4 px-8 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
              >
                ✉️ Email direct
              </a>
            </div>

            <p className="text-gray-400 mt-6">
              ⭐ Plus de 20 projets réalisés en Haute-Savoie • 100% de clients satisfaits
            </p>
          </section>
        </div>
      </article>
    </main>
  )
} 