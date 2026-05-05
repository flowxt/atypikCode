import Link from 'next/link'
import { packs } from '@/data/packs'

export const metadata = {
  title: 'Tarifs Site Internet Haute-Savoie 2026 | À partir de 1 000€ - Atypik Code',
  description: "Tarifs transparents pour la création de site internet en Haute-Savoie. Site vitrine pro à partir de 1 000€ (Essentiel), 1 500€ (Pro) ou 1 900€ (Premium). Devis gratuit en 24h.",
  keywords: 'tarifs développement web, prix site internet haute-savoie, site vitrine 1000 euros, coût création site web la roche-sur-foron, devis développeur web, tarif site internet 2026',
  alternates: {
    canonical: 'https://www.atypikcode.fr/blog/tarifs-developpement-web-haute-savoie',
  },
  openGraph: {
    title: 'Tarifs Site Internet Haute-Savoie 2026 | À partir de 1 000€',
    description: "Prix clairs et transparents pour votre site vitrine en Haute-Savoie : 1 000€ / 1 500€ / 1 900€. Sur devis pour e-commerce et applications.",
    type: 'article',
  },
}

export default function TarifsDeveloppementWeb() {
  const additionalServices = [
    { service: "Nom de domaine", price: "15€/an", description: "Réservation et configuration" },
    { service: "Hébergement web", price: "10€/mois", description: "Serveur haute performance Vercel" },
    { service: "Certificat SSL", price: "Gratuit", description: "Sécurisation HTTPS incluse" },
    { service: "Emails professionnels", price: "5€/mois/adresse", description: "contact@votreentreprise.fr" },
    { service: "Forfait maintenance", price: "50 à 150€/mois", description: "Hébergement + mises à jour + sauvegardes + support" },
    { service: "Formation", price: "100€/heure", description: "Formation à la gestion de votre site" },
    { service: "Rédaction de contenu", price: "80€/page", description: "Rédaction SEO professionnelle" },
    { service: "Photos professionnelles", price: "300€/demi-journée", description: "Shooting produits/équipe" },
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
                Site Internet
              </span>{" "}
              Haute-Savoie 2026
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
              Site vitrine professionnel <strong className="text-white">à partir de 1 000€</strong> en Haute-Savoie.
              Tarifs transparents, devis gratuit sous 24h.
            </p>

            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              3 formules claires pour les sites vitrines (1 000€ / 1 500€ / 1 900€) et un sur-devis
              pour les projets e-commerce ou applications web.
            </p>

            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="text-green-400 font-bold mb-2">💡 Ce qui est toujours inclus</h3>
              <p className="text-gray-300">
                Design responsive sur mesure, optimisation SEO, mise en ligne, formation à l&apos;utilisation
                et 6 mois de garantie. <span className="text-white font-medium">Aucun frais caché.</span>
              </p>
            </div>
          </header>

          {/* Grille des packs */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🌐</div>
              <h2 className="text-4xl font-bold mb-4">Sites Vitrine</h2>
              <p className="text-xl text-gray-300">3 formules pour s&apos;adapter à votre activité et votre budget</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packs.map((pack) => (
                <div
                  key={pack.id}
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-7 rounded-2xl border flex flex-col ${
                    pack.popular
                      ? 'border-blue-500/50 shadow-lg shadow-blue-500/20 lg:-mt-4 lg:-mb-4'
                      : 'border-white/10'
                  }`}
                >
                  {pack.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
                        ⭐ Le plus choisi
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{pack.tagline}</p>
                  <h3 className="text-xl font-bold mb-3">{pack.name}</h3>

                  <div className="mb-2">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${pack.color} bg-clip-text text-transparent`}>
                      {pack.priceLabel}
                    </span>
                    {pack.priceNumber && (
                      <span className="text-gray-400 ml-2 text-sm">HT</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mb-5">Livraison : {pack.delivery}</p>

                  <p className="text-gray-300 text-sm mb-5 leading-relaxed">{pack.description}</p>

                  <ul className="space-y-2.5 mb-7 flex-grow">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-green-400 mr-2.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-full font-semibold text-sm transition-all ${
                      pack.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90'
                        : 'border border-purple-500/50 text-purple-400 hover:bg-purple-500/10'
                    }`}
                  >
                    Demander un devis
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Services additionnels */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                additionnels
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{service.service}</h3>
                    <span className="text-xl font-bold text-purple-400">{service.price}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
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
                <h3 className="text-2xl font-bold mb-4">💰 Tarifs accessibles</h3>
                <p className="text-gray-300 mb-4">
                  À partir de 1 000€, je rends le site web professionnel accessible
                  aux indépendants, artisans et petites entreprises de Haute-Savoie.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Pas d&apos;intermédiaires : prix réduits</li>
                  <li>• Développeur local : économies de structure</li>
                  <li>• Processus optimisé : délais courts</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">🎯 Valeur ajoutée</h3>
                <p className="text-gray-300 mb-4">
                  Chaque euro investi dans votre site doit vous rapporter. Mes sites sont
                  conçus pour générer des contacts et des ventes.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Technologies modernes (Next.js, React)</li>
                  <li>• SEO optimisé dès le départ</li>
                  <li>• Formation pour autonomie</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">🔧 Tout inclus</h3>
                <p className="text-gray-300 mb-4">
                  Mes formules incluent tout ce dont vous avez besoin pour réussir en ligne.
                  Pas de mauvaises surprises en cours de projet.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
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
                <ul className="text-gray-300 space-y-2 text-sm">
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

              <div className="space-y-8">
                {[
                  { step: "1", title: "Appel découverte gratuit", description: "30 minutes pour comprendre vos besoins, vos objectifs et votre budget. Aucun engagement.", duration: "30 min" },
                  { step: "2", title: "Devis personnalisé", description: "Proposition détaillée avec planning, fonctionnalités et tarifs adaptés à votre projet. Réponse sous 24h.", duration: "24h" },
                  { step: "3", title: "Acompte et lancement", description: "Versement de 30% pour démarrer le projet. Signature du contrat et planning détaillé.", duration: "1 jour" },
                  { step: "4", title: "Développement", description: "Création de votre site avec points réguliers. Accès à l'environnement de développement en temps réel.", duration: "1-4 semaines" },
                  { step: "5", title: "Tests et formation", description: "Tests approfondis, corrections, puis formation personnalisée pour gérer votre site en autonomie.", duration: "1 semaine" },
                  { step: "6", title: "Mise en ligne", description: "Déploiement sur votre nom de domaine, configuration finale. Solde 70% à la livraison.", duration: "1 jour" },
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
                      <p className="text-gray-300 text-sm">{step.description}</p>
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
                  answer: "Les tarifs de développement n'incluent pas l'hébergement (10€/mois) ni le nom de domaine (15€/an). Ces frais sont à prévoir en plus et sont facturés annuellement. Je peux m'occuper de tout pour vous via le forfait maintenance."
                },
                {
                  question: "Proposez-vous des facilités de paiement ?",
                  answer: "Oui ! Paiement en 2 fois pour toutes les formules : 30% à la commande pour démarrer, 70% à la livraison. Pour les projets sur-mesure plus importants (e-commerce, applications), un paiement en 3 ou 4 fois est possible."
                },
                {
                  question: "Proposez-vous un forfait maintenance ?",
                  answer: "Oui ! Je propose des forfaits maintenance de 50 à 150€/mois selon les options : hébergement, mises à jour de sécurité, sauvegardes automatiques, modifications mineures et support technique."
                },
                {
                  question: "Quelle est la différence entre les 3 formules vitrine ?",
                  answer: "Vitrine Essentiel (1 000€) : 1 à 3 pages, idéal pour démarrer. Vitrine Pro (1 500€) : jusqu'à 5 pages, SEO avancé, animations, analytics — c'est la formule la plus choisie. Vitrine Premium (1 900€) : 5+ pages, design haut de gamme, multilingue OU réservation en ligne, maintenance 6 mois incluse."
                },
                {
                  question: "Combien coûte une modification après livraison ?",
                  answer: "Les petites modifications (texte, couleurs) sont gratuites les 3 premiers mois. Les modifications importantes sont facturées 80€/heure avec devis préalable, ou incluses dans le forfait maintenance mensuel."
                },
                {
                  question: "Puis-je avoir un site moins cher ailleurs ?",
                  answer: "Peut-être, mais attention aux prestations incluses ! Mes tarifs incluent tout : design sur mesure, SEO, responsive, formation, mise en ligne. Comparez à prestations égales — un site Wix ou WordPress mal optimisé vous coûtera bien plus cher en perte de clients."
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
              Discutons de votre projet lors d&apos;un appel découverte gratuit de 30 minutes.
              Devis personnalisé et transparent sous 24h.
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

            <p className="text-gray-400 mt-6 text-sm">
              ⭐ Plus de 20 projets réalisés en Haute-Savoie • 100% de clients satisfaits
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
