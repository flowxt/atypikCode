import Link from 'next/link'

export const metadata = {
  title: 'Création Site Internet La Roche-sur-Foron | Développeur Web 74800 - Atypik Code',
  description: 'Développeur web freelance à La Roche-sur-Foron. Création de sites internet professionnels, landing pages et applications web pour entreprises en Haute-Savoie. Devis gratuit sous 24h.',
  keywords: 'création site internet la roche-sur-foron, développeur web la roche-sur-foron, site web 74800, agence web la roche-sur-foron, développement web haute-savoie, site vitrine la roche-sur-foron, création site web la roche sur foron',
  alternates: {
    canonical: 'https://www.atypikcode.fr/developpement-web-la-roche-sur-foron',
  },
  openGraph: {
    title: 'Création Site Internet La Roche-sur-Foron | Développeur Web Local',
    description: 'Développeur web basé à La Roche-sur-Foron. Sites internet Next.js ultra-performants pour entreprises et artisans de Haute-Savoie.',
    type: 'website',
  },
}

const faqs = [
  {
    question: "Combien coûte la création d'un site internet à La Roche-sur-Foron ?",
    answer: "Les tarifs dépendent de la complexité de votre projet. Une landing page professionnelle optimisée pour la conversion démarre à 950€. Un site vitrine complet avec plusieurs pages, référencement SEO avancé et formulaire de contact est à partir de 1 900€. Pour les projets e-commerce ou sur mesure, je propose un devis personnalisé gratuit après un échange sur vos besoins."
  },
  {
    question: "En combien de temps mon site sera-t-il en ligne ?",
    answer: "Je privilégie la qualité et les résultats. Une landing page est généralement livrée en 1 à 2 semaines. Un site vitrine complet demande 2 à 4 semaines selon la complexité. Pour une application web, comptez 4 à 8 semaines. Chaque projet inclut des phases de validation avec vous pour garantir un résultat qui correspond exactement à vos attentes."
  },
  {
    question: "Mon site sera-t-il visible sur Google pour les recherches à La Roche-sur-Foron ?",
    answer: "C'est mon objectif principal. Tous mes sites incluent une optimisation SEO locale complète : balisage schema.org pour les entreprises locales, optimisation des mots-clés géographiques (La Roche-sur-Foron, Haute-Savoie, 74800), inscription Google Business Profile, et une structure technique qui plaît aux moteurs de recherche. La technologie Next.js que j'utilise offre des performances de chargement supérieures, un facteur clé pour le classement Google."
  },
  {
    question: "Pourquoi choisir un développeur local plutôt qu'une agence parisienne ou un site Wix ?",
    answer: "En tant que développeur basé à La Roche-sur-Foron, je vous offre une proximité que ni une agence parisienne ni un outil DIY ne peuvent égaler. Des rendez-vous en personne, une compréhension du marché local haut-savoyard, et une réactivité maximale. Contrairement à Wix ou WordPress, mes sites sont développés avec Next.js, la même technologie que Netflix ou Uber, ce qui garantit des performances et un référencement nettement supérieurs."
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne du site ?",
    answer: "Absolument. Chaque projet inclut une période de maintenance. Je reste disponible pour les modifications, les mises à jour de contenu et le suivi des performances. Je propose aussi des forfaits de maintenance mensuels comprenant l'hébergement, les sauvegardes, les mises à jour de sécurité et le suivi du référencement."
  },
  {
    question: "Quels types d'entreprises accompagnez-vous à La Roche-sur-Foron ?",
    answer: "J'accompagne tous les professionnels qui souhaitent développer leur visibilité en ligne : artisans du bâtiment, commerçants, restaurateurs, professionnels de santé et du bien-être, professions libérales, associations et PME. Chaque projet est adapté aux besoins spécifiques de votre secteur d'activité et de votre clientèle cible."
  }
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Atypik Code - Développeur Web La Roche-sur-Foron",
  description: "Création de sites internet professionnels à La Roche-sur-Foron et en Haute-Savoie",
  url: "https://www.atypikcode.fr/developpement-web-la-roche-sur-foron",
  telephone: "+33683062632",
  email: "floriandev74@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Roche-sur-Foron",
    postalCode: "74800",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.0667,
    longitude: 6.3167,
  },
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
}

export default function DeveloppementWebLaRocheSurForon() {
  return (
    <main className="relative z-10 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">
              Développeur web freelance en Haute-Savoie
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Création de Site Internet à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                La Roche-sur-Foron
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Vous êtes entrepreneur, artisan ou commerçant à La Roche-sur-Foron et vous avez besoin 
              d&apos;un site internet qui attire des clients ? Je crée des sites web performants 
              avec Next.js, conçus pour convertir vos visiteurs en contacts qualifiés.
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

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">20+</div>
                <div className="text-sm text-gray-400">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Score performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">24h</div>
                <div className="text-sm text-gray-400">Réponse garantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi un site web à La Roche */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Pourquoi votre entreprise à La Roche-sur-Foron a besoin d&apos;un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                site internet professionnel
              </span>
            </h2>
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                La Roche-sur-Foron est une ville dynamique de Haute-Savoie avec un tissu économique riche : 
                artisans, commerçants, professionnels de santé, restaurateurs... Pourtant, beaucoup d&apos;entreprises 
                locales n&apos;ont pas encore de présence en ligne professionnelle ou utilisent des solutions 
                comme Wix qui ne leur apportent aucun client.
              </p>
              <p>
                Aujourd&apos;hui, <strong className="text-white">97% des consommateurs recherchent des services locaux sur Google</strong> avant 
                de prendre contact. Si votre entreprise n&apos;apparaît pas dans les premiers résultats pour 
                des recherches comme &quot;plombier La Roche-sur-Foron&quot; ou &quot;restaurant 74800&quot;, 
                vous perdez des clients chaque jour au profit de vos concurrents.
              </p>
              <p>
                En tant que développeur web basé à La Roche-sur-Foron, je crée des sites internet 
                qui ne sont pas de simples vitrines, mais de véritables outils d&apos;acquisition de clients.
                Grâce à la technologie Next.js et à une optimisation SEO locale poussée, vos futurs 
                clients vous trouveront directement sur Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages développeur local */}
      <section className="py-20 bg-gradient-to-b from-gray-900/0 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Les avantages d&apos;un développeur web{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                basé à La Roche-sur-Foron
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
                <h3 className="text-2xl font-bold mb-4">Proximité immédiate</h3>
                <p className="text-gray-300">
                  Basé à La Roche-sur-Foron, je vous propose des rendez-vous en personne 
                  pour discuter de votre projet. Pas d&apos;intermédiaire, pas de décalage horaire : 
                  un interlocuteur unique qui connaît le marché local.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Technologie Next.js</h3>
                <p className="text-gray-300">
                  Vos concurrents utilisent WordPress ou Wix. Je développe avec Next.js, 
                  la technologie de Netflix et Uber. Résultat : un site 3x plus rapide, 
                  mieux référencé et qui convertit davantage de visiteurs en clients.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Expert SEO local</h3>
                <p className="text-gray-300">
                  Je ne me contente pas de créer un beau site. J&apos;optimise chaque page 
                  pour que votre entreprise apparaisse en première page de Google 
                  quand vos clients cherchent vos services à La Roche-sur-Foron et alentour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services et tarifs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Tarifs création de site internet à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                La Roche-sur-Foron
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Des tarifs transparents, adaptés aux besoins des entreprises locales. 
              Chaque projet inclut l&apos;optimisation SEO et un design sur mesure.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-sm text-purple-400 font-medium uppercase tracking-wide mb-2">Landing Page</div>
                <h3 className="text-2xl font-bold mb-2">L&apos;Essentiel</h3>
                <p className="text-gray-400 mb-4">Idéal pour lancer une offre ou capturer des leads</p>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">À partir de 950€</div>
                <ul className="space-y-3 mb-8">
                  {["Page unique optimisée conversion", "Design sur-mesure Next.js", "Responsive mobile parfait", "Optimisation SEO de base", "Formulaire de contact intégré"].map((f, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all">
                  Demander un devis
                </Link>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-blue-500/30 relative hover:border-blue-500/50 transition-all">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Le plus choisi
                </div>
                <div className="text-sm text-blue-400 font-medium uppercase tracking-wide mb-2">Site Business</div>
                <h3 className="text-2xl font-bold mb-2">Vitrine complète</h3>
                <p className="text-gray-400 mb-4">Présence complète pour asseoir votre crédibilité</p>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">À partir de 1 900€</div>
                <ul className="space-y-3 mb-8">
                  {["Jusqu'à 5 pages sur-mesure", "Technologie Next.js ultra-rapide", "Référencement SEO avancé", "Formulaire + intégrations", "Analytics & suivi conversions"].map((f, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium hover:opacity-90 transition-all">
                  Demander un devis
                </Link>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-sm text-emerald-400 font-medium uppercase tracking-wide mb-2">Sur Mesure</div>
                <h3 className="text-2xl font-bold mb-2">E-commerce & Apps</h3>
                <p className="text-gray-400 mb-4">Projets ambitieux avec solution personnalisée</p>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-6">Sur devis</div>
                <ul className="space-y-3 mb-8">
                  {["Solution e-commerce complète", "Application web sur-mesure", "Fonctionnalités avancées", "Architecture scalable", "Support prioritaire"].map((f, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all">
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/0">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Création de sites web pour tous les professionnels de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                La Roche-sur-Foron
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Artisans du bâtiment", desc: "Plombiers, électriciens, menuisiers, maçons... Un site qui met en valeur votre savoir-faire et génère des demandes de devis." },
                { title: "Commerçants", desc: "Boutiques, restaurants, salons de coiffure... Attirez une clientèle locale grâce à une vitrine en ligne professionnelle." },
                { title: "Professionnels de santé", desc: "Médecins, kinés, ostéopathes, dentistes... Un site rassurant avec prise de rendez-vous en ligne." },
                { title: "Praticiens bien-être", desc: "Sophrologues, naturopathes, coachs... Un site apaisant qui reflète votre pratique et attire de nouveaux clients." },
                { title: "Professions libérales", desc: "Avocats, comptables, architectes, consultants... Renforcez votre crédibilité avec un site à votre image." },
                { title: "PME et associations", desc: "Entreprises locales et associations qui veulent structurer leur présence en ligne et communiquer efficacement." },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-white/5 hover:border-purple-500/20 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention avec liens internes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Développeur web pour toute la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Haute-Savoie
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Basé à La Roche-sur-Foron, j&apos;interviens dans toute la Haute-Savoie 
              et jusqu&apos;à Genève pour la création de sites internet professionnels.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { ville: "Annecy", link: "/creation-site-internet-annecy" },
                { ville: "Bonneville", link: "/creation-site-internet-bonneville" },
                { ville: "Annemasse", link: "/creation-site-internet-annemasse" },
                { ville: "Cluses", link: "/creation-site-internet-cluses" },
                { ville: "Thonon-les-Bains", link: "/creation-site-internet-thonon-les-bains" },
                { ville: "Genève", link: "/creation-site-internet-geneve" },
                { ville: "La Roche-sur-Foron", link: null },
                { ville: "Sallanches", link: null },
                { ville: "Chamonix", link: null },
                { ville: "Rumilly", link: null },
                { ville: "Passy", link: null },
                { ville: "Scionzier", link: null },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-4 rounded-xl border border-white/5 hover:border-purple-500/20 transition-all">
                  {item.link ? (
                    <Link href={item.link} className="text-white font-medium hover:text-purple-400 transition-colors">
                      {item.ville}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{item.ville}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-gray-900/0 to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Questions fréquentes sur la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                création de site internet
              </span>{" "}
              à La Roche-sur-Foron
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 group open:border-purple-500/30 transition-all"
                >
                  <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white pr-4 group-hover:text-purple-400 transition-colors">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à lancer votre projet web à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                La Roche-sur-Foron ?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet lors d&apos;un appel découverte gratuit de 30 minutes. 
              Devis personnalisé sous 24h, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
              >
                Appel découverte gratuit
              </Link>
              <a 
                href="tel:+33683062632" 
                className="border border-purple-500 text-purple-400 py-4 px-8 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
              >
                06 83 06 26 32
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Florian Barjon - Développeur web freelance à La Roche-sur-Foron, Haute-Savoie
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
