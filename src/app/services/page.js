import ServiceDetail from "@/components/services/ServiceDetail";
import CTA from "@/components/global/CTA";
import BookingCalendar from "@/components/services/BookingCalendar";
import { ServicesHero } from "@/components/services/ServicesHero";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Sites Web Qui Convertissent | -20% jusqu'au 01 Septembre | Atypik Code",
  description:
    "Création de sites web à haute conversion en Haute-Savoie. Landing pages 640€ au lieu de 800€. Sites complets 1280€ au lieu de 1600€. 7 places restantes.",
  keywords:
    "site web conversion, landing page Haute-Savoie, création site internet, développeur web Annecy, site qui génère clients, augmenter chiffre affaires",
  alternates: {
    canonical: "https://www.atypikcode.fr/services",
  },
};

// Services orientés conversion avec urgence
const services = [
  {
    id: "landing-page",
    title: "Landing Page Ultra-Convertissante",
    description: "Votre page qui transforme les visiteurs en clients",
    priceOriginal: "800€",
    price: "640€",
    economy: "160€ d'économie",
    idealFor: "Entrepreneurs qui veulent générer rapidement des leads",
    results: "+300% de conversions moyennes",
    keyPoints: [
      "Design psychologique qui pousse à l'action",
      "Formulaire optimisé (+65% de taux de conversion)",
      "Preuves sociales intégrées",
      "Référencement local pour être trouvé",
      "Livré en 7 jours maximum",
    ],
    icon: "🚀",
    image: "/image/landing.png",
    color: "from-blue-600 to-cyan-500",
    guarantee: "Premier lead garanti sous 30 jours",
    testimonial:
      "Mon CA a doublé en 3 mois grâce à ma nouvelle landing page ! - Céline L.",
  },
  {
    id: "site-complet",
    title: "Site Complet Machine à Clients",
    description: "Votre arsenal digital pour dominer votre marché",
    priceOriginal: "1600€",
    price: "1280€",
    economy: "320€ d'économie",
    idealFor: "Entreprises sérieuses qui veulent exploser leur CA",
    results: "+500% de visibilité Google",
    keyPoints: [
      "Site multi-pages optimisé conversion",
      "Système de devis automatique",
      "Blog pour attirer des prospects",
      "Témoignages clients intégrés",
      "Formation complète incluse",
      "Support 6 mois offert",
    ],
    icon: "💎",
    image: "/image/site-vitrine.png",
    color: "from-purple-600 to-pink-500",
    guarantee: "10 leads qualifiés garantis en 60 jours",
    testimonial:
      "Mon site m'a rapporté 5 nouveaux clients en 2 semaines ! - Kristelle F.",
  },
];

export default function Services() {
  return (
    <main className="bg-gray-950">
      <ServicesHero />

      <div className="relative bg-gradient-to-b from-gray-950 to-black mt-[-50px] pt-16 pb-24">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/0 to-gray-950"></div>

        <div className="max-w-6xl mx-auto px-6 pt-16">
          {/* Badge d'urgence */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 px-6 py-3 rounded-full border border-red-500/30 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-red-300 font-bold">
                🔥 OFFRE LIMITÉE -20% jusqu&apos;au 01 septembre • Plus que 7
                places
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Choisissez votre
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {" "}
                Machine à Clients
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des sites web qui génèrent réellement des clients, pas juste
              &quot;jolis à regarder&quot;.
              <br />
              <strong className="text-purple-300">
                Résultats garantis ou on retravaille gratuitement.
              </strong>
            </p>
          </div>

          {/* Preuves sociales rapides */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-2xl border border-purple-500/20">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-white font-medium">
                10 entrepreneurs satisfaits ce mois
              </span>
            </div>

            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-white font-medium">
                +342% de conversions moyennes
              </span>
            </div>
          </div>

          {/* Services en cartes optimisées */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 border-2 border-purple-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 relative"
              >
                {/* Badge populaire pour le deuxième service */}
                {index === 1 && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse z-10">
                    🔥 POPULAIRE
                  </div>
                )}

                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-4xl">
                    {service.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-lg">
                    {service.description}
                  </p>

                  {/* Pricing avec économie */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-purple-400">
                        {service.price}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {service.priceOriginal}
                      </span>
                      <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-sm font-medium">
                        {service.economy}
                      </span>
                    </div>
                    <p className="text-green-400 font-medium text-sm">
                      💰 {service.economy} - Offre limitée !
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-xl border border-blue-500/20 mb-4">
                    <p className="text-blue-300 font-medium mb-1">
                      🎯 Idéal pour : {service.idealFor}
                    </p>
                    <p className="text-green-300 font-bold">
                      📈 {service.results}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Garantie */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-3 rounded-lg border border-green-500/20 mb-4">
                    <p className="text-green-300 text-sm font-medium">
                      🛡️ <strong>Garantie :</strong> {service.guarantee}
                    </p>
                  </div>

                  {/* Témoignage */}
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-3 rounded-lg border border-yellow-500/20 mb-6">
                    <p className="text-yellow-200 text-sm italic">
                      &quot;{service.testimonial}&quot;
                    </p>
                  </div>

                  <Link
                    href="#booking"
                    className="block w-full text-center py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
                  >
                    🚀 Réserver maintenant (-20%)
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Section urgence */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 mb-20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              ⚠️ Attention : Places limitées !
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Je ne prends que{" "}
              <strong className="text-red-300">
                7 nouveaux projets par mois
              </strong>{" "}
              pour garantir la qualité.
              <br />
              <span className="text-orange-300">
                Plus que 3 places disponibles en septembre.
              </span>
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-300">
              <span>✅ Kristelle F. - Réservé</span>
              <span>✅ Céline L. - Réservé</span>
              <span>✅ Laurie P. - Réservé</span>
              <span>⏳ Votre place ?</span>
            </div>
          </div>

          {/* Section réservation */}
          <div id="booking" className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Réservez votre place maintenant
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Appel gratuit de 30 minutes pour définir votre stratégie
                digitale.
                <br />
                <strong className="text-purple-300">
                  Vous repartez avec un plan d&apos;action même si on ne
                  travaille pas ensemble !
                </strong>
              </p>
            </div>

            <BookingCalendar />
          </div>

          <div className="container mx-auto px-4 mt-20">
            <CTA
              title="Une question ? Parlons de votre projet !"
              description="WhatsApp ou email pour une réponse rapide et personnalisée"
              buttonText="OBTENIR MON DEVIS GRATUIT"
              buttonLink="/contact"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
