import Image from "next/image";
import Link from "next/link";
import ArtisansContactForm from "@/components/artisans/ArtisansContactForm";

export const metadata = {
  title: "Site Web pour Artisans | Solution Clé en Main | Atypik Code",
  description:
    "Site web professionnel pour artisans du bâtiment et de la rénovation. Design moderne, sans tracas et adapté à votre métier.",
  keywords:
    "site web artisan, site internet artisan, site artisan bâtiment, site internet plombier, site web électricien, site web maçon, site internet menuisier, Haute-Savoie, Annecy",
  alternates: {
    canonical: "https://www.atypikcode.fr/artisans",
  },
};

export default function ArtisansLandingPage() {
  return (
    <>
      <main className="bg-gray-950 relative">
        {/* [1] Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/image/artisan.jpg"
              alt="Artisan au travail"
              fill
              className="object-cover opacity-90 transform scale-105 transition-transform duration-7000 ease-in-out hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950/80"></div>
          </div>

          <div className="container mx-auto px-6 z-10 relative">
            <div className="max-w-3xl">
              <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-500/30">
                <span className="text-purple-300 font-medium">
                  Solution clé en main pour artisans
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Un site professionnel,{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  sans tracas
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                Artisan du bâtiment ou de la rénovation ? Offrez-vous un site
                rapide, clair et pensé pour vos clients. Déjà plus de 10
                artisans satisfaits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:opacity-90 transition-all hover:scale-105 relative z-20 group"
                >
                  <span className="relative z-10">
                    Obtenir mon devis gratuit
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="#tarifs"
                  className="inline-block py-4 px-8 bg-white/10 backdrop-blur-sm rounded-lg font-medium text-lg hover:bg-white/20 transition-all hover:scale-105 relative z-20"
                >
                  Voir les tarifs
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                    20+
                  </div>
                  <div className="text-sm md:text-base text-gray-400">
                    Artisans satisfaits
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                    2 semaines
                  </div>
                  <div className="text-sm md:text-base text-gray-400">
                    Délai moyen
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                    100%
                  </div>
                  <div className="text-sm md:text-base text-gray-400">
                    Satisfaction client
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* [2] Présentation */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-500/30">
                <span className="text-purple-300 font-medium">
                  Notre approche
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Concentrez-vous sur votre métier, je m&apos;occupe du reste
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                En tant qu&apos;artisan, votre temps est précieux. Vous
                n&apos;avez pas besoin d&apos;un site compliqué, mais d&apos;une
                vitrine professionnelle qui convertit vos visiteurs en clients.
                Je crée pour vous un site web optimisé, rapide et sans prise de
                tête qui met en valeur votre savoir-faire.
              </p>

              {/* Process Steps */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all group">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Échange initial
                  </h3>
                  <p className="text-gray-400">
                    Nous discutons de vos besoins et objectifs pour créer le
                    site parfait
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all group">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Création</h3>
                  <p className="text-gray-400">
                    Je développe votre site en respectant vos délais et vos
                    attentes
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all group">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Lancement</h3>
                  <p className="text-gray-400">
                    Votre site est mis en ligne et commence à générer des
                    contacts
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="#contact"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:opacity-90 transition-all hover:scale-105 group"
                >
                  <span className="relative z-10">
                    Démarrer mon projet maintenant
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* [3] Ce que vous obtenez */}
        <section className="py-20 bg-gray-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-500/30">
                <span className="text-purple-300 font-medium">
                  Votre site inclut
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Ce qui est inclus dans votre site
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all group hover:transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  Design professionnel
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Design moderne qui inspire confiance et met en valeur votre
                  métier d&apos;artisan
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all group hover:transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  100% compatible mobile
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Site parfaitement adapté aux smartphones, tablettes et
                  ordinateurs
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all group hover:transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  Formulaire de contact
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Formulaire optimisé pour obtenir des demandes de devis
                  qualifiées
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all group hover:transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  Optimisé pour Google
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Référencement local pour être visible dans votre zone
                  d&apos;intervention
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all group hover:transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  Rapide et performant
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Chargement ultra-rapide pour ne perdre aucun client potentiel
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all group hover:transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  Personnalisé à votre métier
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Contenu adapté à votre activité: plombier, électricien,
                  menuisier...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* [4] Exemple de réalisation */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-500/30">
                <span className="text-purple-300 font-medium">
                  Exemple concret
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Un exemple concret
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-gray-800 group">
                <Image
                  src="/image/myeasyplan.png"
                  alt="Exemple de site web artisan"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <a
                    href="https://my-easy-plan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-purple-400 transition-colors"
                  >
                    Voir le site en direct
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  <a
                    href="https://my-easy-plan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center group"
                  >
                    My Easy Plan
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Site créé pour une dessinatrice en bâtiment spécialisée dans
                  les plans et permis de construire. Design épuré, mise en avant
                  de ses réalisations et système simple de demande de devis.
                </p>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-purple-600/20 flex items-center justify-center mr-4">
                      <svg
                        className="h-6 w-6 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">
                        Résultats concrets
                      </p>
                      <p className="text-gray-400">
                        5 nouvelles demandes de devis par semaine en moyenne
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://my-easy-plan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline inline-flex items-center"
                  >
                    www.my-easy-plan.com
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700/50 hover:border-purple-500/30 transition-all">
                    Design moderne
                  </span>
                  <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700/50 hover:border-purple-500/30 transition-all">
                    Galerie plans
                  </span>
                  <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700/50 hover:border-purple-500/30 transition-all">
                    Formulaire de devis
                  </span>
                  <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700/50 hover:border-purple-500/30 transition-all">
                    Référencement local
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [5] Tarifs clairs */}
        <section
          id="tarifs"
          className="py-20 bg-gray-900 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-500/30">
                <span className="text-purple-300 font-medium">
                  Tarifs transparents
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Des tarifs clairs et transparents
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Formule Landing Page */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-purple-500/10 flex flex-col group hover:transform hover:scale-105 transition-all">
                <div className="text-center flex-grow">
                  <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-1 text-sm font-medium mb-6 group-hover:scale-110 transition-transform">
                    FORMULE LANDING PAGE
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-5xl font-bold">800€</span>
                    <span className="text-lg text-gray-400 ml-2">TTC</span>
                  </div>
                  <p className="text-gray-400 mb-8">
                    + 19€/mois pour l&apos;hébergement et maintenance
                  </p>

                  <div className="h-px w-full bg-gray-700 my-8"></div>

                  <ul className="space-y-4 text-left mb-8">
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>Landing page professionnelle</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>Formulaire de contact optimisé</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>Référencement local</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>Livraison en 1 semaine</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="inline-block w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:opacity-90 transition-all hover:scale-105 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10">
                      Demander ma landing page
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </a>
                </div>
              </div>

              {/* Formule Site Vitrine */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-purple-500/10 flex flex-col relative overflow-hidden group hover:transform hover:scale-105 transition-all">
                <div className="absolute top-8 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-8 py-1 uppercase transform rotate-45 translate-x-6">
                  Recommandé
                </div>
                <div className="text-center flex-grow">
                  <div className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-1 text-sm font-medium mb-6 group-hover:scale-110 transition-transform">
                    FORMULE SITE VITRINE
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-5xl font-bold">1600€</span>
                    <span className="text-lg text-gray-400 ml-2">TTC</span>
                  </div>
                  <p className="text-gray-400 mb-8">
                    + 49€/mois pour l&apos;hébergement et maintenance
                  </p>

                  <div className="h-px w-full bg-gray-700 my-8"></div>

                  <ul className="space-y-4 text-left mb-8">
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>Site complet (3-6 pages)</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>Galerie de réalisations</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>Système de devis en ligne</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>SEO complet pour être trouvé dans votre zone</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>Assistance prioritaire</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="text-green-400 mr-2 group-hover/item:scale-110 transition-transform">
                        ✓
                      </span>
                      <span>Livraison en 2 semaines</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="inline-block w-full py-4 px-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg font-medium text-lg hover:opacity-90 transition-all hover:scale-105 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10">
                      Demander mon site vitrine
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 max-w-3xl mx-auto">
                <p className="text-gray-300 mb-4">
                  Tous les prix sont TTC. Nom de domaine offert la première
                  année. Aucun frais caché ou surprise. Paiement en plusieurs
                  fois possible.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-400">
                      Satisfaction garantie
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-400">
                      Support réactif
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-400 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-400">
                      Mises à jour incluses
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="#contact"
                className="inline-block py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:opacity-90 transition-all hover:scale-105 group relative overflow-hidden"
              >
                <span className="relative z-10">
                  Obtenir mon devis personnalisé
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>
        </section>

        {/* [6] Avis client */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-500/30">
                <span className="text-purple-300 font-medium">Témoignages</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Ce qu&apos;en pensent mes clients
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all group">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-white">LP</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Laurie Pringuet</p>
                    <p className="text-gray-400">Dessinatrice en bâtiment</p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                <svg
                  className="h-12 w-12 text-purple-500 mb-6 transform group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-xl italic mb-6 leading-relaxed">
                  &quot;Florian a créé un site parfaitement adapté à mon
                  activité de dessinatrice industrielle. Je reçois des demandes
                  de devis régulièrement, et mes clients me disent qu&apos;ils
                  ont trouvé mon entreprise grâce au site. Un vrai plus pour mon
                  activité !&quot;
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm">
                    Design professionnel
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm">
                    Référencement efficace
                  </span>
                  <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm">
                    Support réactif
                  </span>
                </div>
              </div>

              {/* Additional Testimonials */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all group">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold text-white">PG</span>
                    </div>
                    <div>
                      <p className="font-bold">Patrice Guffon</p>
                      <p className="text-sm text-gray-400">Artisan</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    &quot;Un site qui génère des contacts qualifiés. Je
                    recommande !&quot;
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all group">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold text-white">SL</span>
                    </div>
                    <div>
                      <p className="font-bold">Stéphanie L.</p>
                      <p className="text-sm text-gray-400">Artisan</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    &quot;Service impeccable et résultat au-delà de mes
                    attentes.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [7] FAQ */}
        <section className="py-20 bg-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-500/30">
                <span className="text-purple-300 font-medium">
                  Questions fréquentes
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Questions fréquemment posées
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 divide-y divide-gray-700/50">
                {/* Question 1 */}
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-700/20 transition-colors">
                    <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                      Vais-je être visible sur Google grâce à votre site ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-purple-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    Absolument ! Je mets en place une stratégie de référencement
                    local spécialement conçue pour les artisans. Votre site sera
                    optimisé pour les recherches dans votre zone
                    d&apos;intervention (commune, département) et pour vos
                    services spécifiques. Les clients qui cherchent un artisan
                    comme vous dans votre secteur vous trouveront facilement. De
                    plus, je crée une fiche Google Business et optimise vos
                    informations de contact pour maximiser votre visibilité
                    locale.
                  </div>
                </details>

                {/* Question 2 */}
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-700/20 transition-colors">
                    <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                      Combien de temps faut-il pour créer mon site ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-purple-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    Je comprends que votre temps est précieux. C&apos;est
                    pourquoi j&apos;ai optimisé mon processus : votre landing
                    page sera prête en 1 semaine, et votre site vitrine complet
                    en 2 semaines seulement après notre échange initial. Je
                    m&apos;occupe de tout (design, contenu, optimisation) pour
                    que vous puissiez rester concentré sur votre métier pendant
                    que je crée votre présence en ligne professionnelle.
                  </div>
                </details>

                {/* Question 3 */}
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-700/20 transition-colors">
                    <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                      Comment allez-vous présenter mon métier d&apos;artisan ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-purple-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    Votre savoir-faire mérite d&apos;être mis en valeur
                    correctement. Je prends le temps de comprendre les
                    spécificités de votre métier (plombier, électricien,
                    menuisier, etc.) pour créer un contenu authentique qui parle
                    directement à vos clients. Nous mettrons en avant vos
                    réalisations avec des photos professionnelles, présenterons
                    clairement vos services, et soulignerons ce qui vous
                    différencie de la concurrence. L&apos;objectif est de
                    transmettre votre expertise et votre sérieux dès la première
                    visite.
                  </div>
                </details>

                {/* Question 4 */}
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-700/20 transition-colors">
                    <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                      Pourrai-je recevoir des demandes de devis directement
                      depuis le site ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-purple-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    C&apos;est précisément l&apos;un des objectifs principaux !
                    Je crée un formulaire de contact optimisé spécifiquement
                    pour les demandes de devis. Vos clients potentiels pourront
                    facilement vous contacter en précisant leur projet, et vous
                    recevrez ces demandes directement par email. Le formulaire
                    est conçu pour recueillir toutes les informations dont vous
                    avez besoin pour évaluer la demande avant même le premier
                    appel, vous faisant gagner un temps précieux.
                  </div>
                </details>

                {/* Question 5 */}
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-700/20 transition-colors">
                    <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                      Aurai-je besoin de gérer la maintenance technique du site
                      ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-purple-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    Absolument pas ! Je m&apos;occupe de tous les aspects
                    techniques : hébergement, sécurité, mises à jour et
                    maintenance. Vous avez déjà un métier exigeant, le but est
                    de vous simplifier la vie, pas de vous ajouter des tâches
                    techniques. Dans le forfait mensuel, tout est inclus pour
                    que votre site reste performant, sécurisé et à jour. Vous
                    pouvez vous concentrer sur votre travail d&apos;artisan, je
                    m&apos;occupe de votre présence en ligne.
                  </div>
                </details>

                {/* Question 6 */}
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-700/20 transition-colors">
                    <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                      Est-ce que ce sera vraiment rentable pour mon entreprise
                      artisanale ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-purple-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                    Le retour sur investissement est généralement très rapide
                    pour mes clients artisans. Un seul nouveau chantier obtenu
                    grâce au site peut souvent couvrir l&apos;investissement
                    initial. Mes clients artisans reçoivent en moyenne 3 à 5
                    demandes qualifiées par semaine via leur site. Avec un taux
                    de conversion de 30-40% en devis signés, votre site devient
                    rapidement un canal d&apos;acquisition client rentable. De
                    plus, avoir un site professionnel renforce votre crédibilité
                    auprès de tous vos prospects, même ceux qui vous découvrent
                    par d&apos;autres canaux.
                  </div>
                </details>
              </div>

              <div className="text-center mt-12">
                <a
                  href="#contact"
                  className="inline-block py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:opacity-90 transition-all hover:scale-105 group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    Démarrer mon projet maintenant
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <p className="text-gray-400 mt-4">
                  Premier rendez-vous gratuit et sans engagement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* [8] Formulaire de contact */}
        <section id="contact" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Demander mon site pro
              </h2>
              <p className="text-xl text-gray-300 mb-12 text-center">
                Remplissez ce formulaire pour être rappelé gratuitement et sans
                engagement
              </p>

              <ArtisansContactForm />

              <p className="text-gray-400 text-sm mt-6 text-center">
                En soumettant ce formulaire, vous acceptez d&apos;être contacté
                au sujet de votre projet de site web
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
