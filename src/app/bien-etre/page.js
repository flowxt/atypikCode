import Image from "next/image";
import Link from "next/link";
import BienEtreContactForm from "@/components/bien-etre/BienEtreContactForm";

export const metadata = {
  title: "Site Web pour Thérapeutes & Praticiens Bien-être | Atypik Code",
  description:
    "Site web professionnel pour sophrologues, énergéticiennes et praticiens bien-être. Design doux, apaisant et adapté à votre univers.",
  keywords:
    "site web thérapeute, site internet bien-être, site sophrologue, site naturopathe, site énergéticienne, site médecine douce, site coach bien-être, Haute-Savoie, Annecy",
  alternates: {
    canonical: "https://www.atypikcode.fr/bien-etre",
  },
};

export default function BienEtreLandingPage() {
  return (
    <main className="bg-gray-950 relative">
      {/* [1] Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/image/medium.jpg"
            alt="Pratique bien-être"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 to-gray-950"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Un site qui reflète votre énergie
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Sophrologue, énergéticienne, praticien bien-être ? Ayez enfin un
              site doux, professionnel et qui vous ressemble.
            </p>
            <a
              href="#contact"
              className="inline-block py-4 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity relative z-20"
            >
              Réserver mon appel gratuit
            </a>
          </div>
        </div>
      </section>

      {/* [2] Présentation */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un site apaisant, rassurant, qui vous ressemble
            </h2>
            <p className="text-xl text-gray-300">
              Dans l&apos;univers du bien-être et des médecines douces, la
              confiance est essentielle. Votre site web doit transmettre cette
              même énergie apaisante que vous offrez à vos clients. Je crée pour
              vous un espace en ligne qui respire la sérénité, la douceur et
              l&apos;authenticité – un véritable reflet de votre pratique et de
              vos valeurs.
            </p>
          </div>
        </div>
      </section>

      {/* [3] Ce que vous obtenez */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Ce que je vous propose
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-2">Design apaisant</h3>
              <p className="text-gray-300">
                Couleurs douces, typographie élégante et mise en page zen qui
                transmet votre philosophie
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Prise de rendez-vous</h3>
              <p className="text-gray-300">
                Système intégré pour que vos clients puissent réserver
                facilement des séances
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
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
                Expérience fluide sur smartphone, où la majorité de vos clients
                vous découvriront
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-2">Référencement optimisé</h3>
              <p className="text-gray-300">
                SEO local pour être trouvé par les personnes qui recherchent vos
                services dans votre zone
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
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
                Chargement instantané pour une expérience utilisateur zen, sans
                frustration
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
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
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Présentation des soins</h3>
              <p className="text-gray-300">
                Mise en valeur claire de vos services, prestations et bienfaits
                pour vos clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [4] Exemples de réalisations */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Elles m&apos;ont fait confiance
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-gray-800">
              <Image
                src="/image/site-vitrine.png"
                alt="Site web Kris La Voix des Anges"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                <a
                  href="https://krislavoixdesanges.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  Kris La Voix des Anges
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
                Site créé pour Kristel, médium et énergéticienne. Design élégant
                et apaisant qui reflète l&apos;univers spirituel de sa pratique,
                avec un système de prise de rendez-vous intégré.
              </p>
              <p className="text-xl text-gray-300 mb-6">
                <a
                  href="https://krislavoixdesanges.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  www.krislavoixdesanges.com
                </a>{" "}
                - Le site a permis de développer sa clientèle et d&apos;élargir
                sa zone d&apos;influence.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Design spirituel
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Prise de RDV
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Présentation soins
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Témoignages clients
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-gray-800 md:order-2">
              <Image
                src="/image/landing.png"
                alt="Site web Harmonie et Sens"
                fill
                className="object-cover"
              />
            </div>

            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  Harmonie et Sens 74
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
                Site créé pour Sophie, sophrologue et praticienne en massages
                bien-être. Interface douce et intuitive qui valorise son
                approche holistique et ses différentes techniques.
              </p>
              <p className="text-xl text-gray-300 mb-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  www.harmonie-et-sens.fr
                </a>{" "}
                - Le site a contribué à professionnaliser son image et à attirer
                une nouvelle clientèle.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Ambiance zen
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Galerie soins
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Formulaire contact
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                  Blog bien-être
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
            Des tarifs clairs et transparents
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Formule Landing Page */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-purple-500/10 h-full flex flex-col">
              <div className="text-center">
                <div className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-1 text-sm font-medium mb-6">
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
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Landing page professionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Formulaire de contact optimisé</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Référencement local</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Livraison en 1 semaine</span>
                  </li>
                </ul>

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="inline-block w-full py-4 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity text-center relative z-10"
                  >
                    Demander ma landing page
                  </a>
                </div>
              </div>
            </div>

            {/* Formule Site Vitrine */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-purple-500/10 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-8 right-0 bg-gradient-to-r from-indigo-500 to-purple-700 text-white text-xs font-bold px-8 py-1 uppercase transform rotate-45 translate-x-6">
                Recommandé
              </div>
              <div className="text-center">
                <div className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 px-5 py-1 text-sm font-medium mb-6">
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
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Site complet (3-6 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Présentation détaillée de vos soins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Système de prise de rendez-vous</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>SEO complet pour être trouvé dans votre zone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Assistance prioritaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Livraison en 2 semaines</span>
                  </li>
                </ul>

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="inline-block w-full py-4 px-8 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity text-center relative z-10"
                  >
                    Demander mon site vitrine
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-8 max-w-3xl mx-auto">
            Tous les prix sont TTC. Nom de domaine offert la première année.
            Aucun frais caché ou surprise. Vous restez 100% propriétaire de
            votre site, sans engagement.
          </p>
        </div>
      </section>

      {/* [6] Avis client */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Elles en parlent mieux que moi
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
              &quot;Florian a réalisé notre site et nous sommes RAVIS 🤩 Le site
              est fluide, beau et accessible à tous. Naturellement les
              performances sont à la hauteur de celui-ci. Florian est à
              l&apos;écoute, très professionnel et surtout perfectionniste au
              détail 😊 Je recommande très très très fortement ses services sans
              hésiter. Merci merci merci infiniment Florian&quot;
            </p>

            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                <span className="font-bold">KF</span>
              </div>
              <div>
                <p className="font-bold">Kristel Feron</p>
                <p className="text-gray-400">Kris La Voix des Anges</p>
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
              Réserver mon appel découverte
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Remplissez ce formulaire pour être rappelé gratuitement et sans
              engagement
            </p>

            <BienEtreContactForm />

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
