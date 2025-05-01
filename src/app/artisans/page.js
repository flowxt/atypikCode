import Image from "next/image";
import Link from "next/link";

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
    <main className="bg-gray-950 relative">
      {/* [1] Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/image/artisan.jpg"
            alt="Artisan au travail"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Un site professionnel, sans tracas
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Artisan du bâtiment ou de la rénovation ? Offrez-vous un site
              rapide, clair et pensé pour vos clients.
            </p>
            <a
              href="#contact"
              className="inline-block py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity relative z-20"
            >
              Demander mon site pro
            </a>
          </div>
        </div>
      </section>

      {/* [2] Présentation */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Concentrez-vous sur votre métier, je m&apos;occupe du reste
            </h2>
            <p className="text-xl text-gray-300">
              En tant qu&apos;artisan, votre temps est précieux. Vous
              n&apos;avez pas besoin d&apos;un site compliqué, mais d&apos;une
              vitrine professionnelle qui convertit vos visiteurs en clients. Je
              crée pour vous un site web optimisé, rapide et sans prise de tête
              qui met en valeur votre savoir-faire.
            </p>
          </div>
        </div>
      </section>

      {/* [3] Ce que vous obtenez */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Ce qui est inclus dans votre site
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-2">Design professionnel</h3>
              <p className="text-gray-300">
                Design moderne qui inspire confiance et met en valeur votre
                métier d&apos;artisan
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-2">100% compatible mobile</h3>
              <p className="text-gray-300">
                Site parfaitement adapté aux smartphones, tablettes et
                ordinateurs
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-2">Formulaire de contact</h3>
              <p className="text-gray-300">
                Formulaire optimisé pour obtenir des demandes de devis
                qualifiées
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-2">Optimisé pour Google</h3>
              <p className="text-gray-300">
                Référencement local pour être visible dans votre zone
                d&apos;intervention
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-2">Rapide et performant</h3>
              <p className="text-gray-300">
                Chargement ultra-rapide pour ne perdre aucun client potentiel
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-2">
                Personnalisé à votre métier
              </h3>
              <p className="text-gray-300">
                Contenu adapté à votre activité: plombier, électricien,
                menuisier...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [4] Exemple de réalisation */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Un exemple concret
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-gray-800">
              <Image
                src="/image/myeasyplan.png"
                alt="Exemple de site web artisan"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                <a
                  href="https://my-easy-plan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  My Easy Plan
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
              </h3>
              <p className="text-xl text-gray-300 mb-3">
                Site créé pour une dessinatrice en bâtiment spécialisée dans les
                plans et permis de construire. Design épuré, mise en avant de
                ses réalisations et système simple de demande de devis.
              </p>
              <p className="text-xl text-gray-300 mb-6">
                <a
                  href="https://my-easy-plan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  www.my-easy-plan.com
                </a>{" "}
                - Le site génère en moyenne 5 nouvelles demandes de devis par
                semaine.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Design moderne
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Galerie plans
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Formulaire de devis
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Référencement local
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [5] Tarifs clairs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Un tarif unique et transparent
          </h2>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-purple-500/10">
            <div className="text-center">
              <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-1 text-sm font-medium mb-6">
                OFFRE SPÉCIALE ARTISANS
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
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Site complet livré en 2 semaines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Nom de domaine offert la première année</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Assistance à la rédaction de contenu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Aucun frais caché ou surprise</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-block w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity text-center relative z-10"
              >
                Demander mon site pro
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* [6] Avis client */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Ce qu&apos;en pensent mes clients
          </h2>

          <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <svg
              className="h-12 w-12 text-purple-500 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-xl italic mb-6">
              &quot;Florian a créé un site parfaitement adapté à mon activité de
              dessinatrice industrielle. Je reçois des demandes de devis
              régulièrement, et mes clients me disent qu&apos;ils ont trouvé mon
              entreprise grâce au site. Un vrai plus pour mon activité !&quot;
            </p>

            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                <span className="font-bold">JM</span>
              </div>
              <div>
                <p className="font-bold">Laurie Pringuet</p>
                <p className="text-gray-400">Dessinatrice en bâtiment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [7] Formulaire de contact */}
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

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="profession"
                  >
                    Métier
                  </label>
                  <input
                    type="text"
                    id="profession"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Plombier, Électricien, Menuisier..."
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="phone"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="06 XX XX XX XX"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="city"
                >
                  Ville / Zone d&apos;intervention
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Annecy et alentours"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Parlez-nous de votre projet ou posez-nous vos questions"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity relative z-10"
              >
                Être rappelé gratuitement
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-6 text-center">
              En soumettant ce formulaire, vous acceptez d&apos;être contacté au
              sujet de votre projet de site web
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
