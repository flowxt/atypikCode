import ServiceDetail from "@/components/services/ServiceDetail";
import CTA from "@/components/global/CTA";
import BookingCalendar from "@/components/services/BookingCalendar";
import { ServicesHero } from "@/components/services/ServicesHero";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Développement Web en Haute-Savoie | Sites & Landing Pages | Atypik Code",
  description:
    "Création de sites web professionnels et landing pages en Haute-Savoie. SEO et design responsive. Solutions sur mesure pour entreprises.",
  keywords:
    "développement web Haute-Savoie, création site internet, landing page, site vitrine, application web, SEO, site responsive, Annecy, haute-savoie",
  alternates: {
    canonical: "https://www.atypikcode.fr/services",
  },
};

// Données simplifiées pour les services
const services = [
  {
    id: "pack-essentiel",
    title: "Pack Essentiel",
    description: "Landing page pour démarrer votre présence en ligne",
    price: "À partir de 600€",
    idealFor: "Artisans et petites entreprises",
    keyPoints: [
      "Landing page",
      "Référencement local optimisé",
      "Formulaire de contact",
      "Responsive (mobile, tablette, PC)",
    ],
    icon: "landing-page-icon",
    image: "/image/landing.png",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: "pack-professionnel",
    title: "Pack Professionnel",
    description: "Site complet pour développer votre clientèle",
    price: "À partir de 1200€",
    idealFor: "PME et entreprises établies",
    keyPoints: [
      "Site multi-pages (3-8 pages)",
      "Système de devis en ligne",
      "Témoignages clients",
      "SEO complet et analytics",
    ],
    icon: "site-icon",
    image: "/image/site-vitrine.png",
    color: "from-purple-600 to-pink-500",
  },
  {
    id: "pack-premium",
    title: "Pack Premium",
    description: "Solution digitale complète pour maximiser votre impact",
    price: "À partir de 2000€",
    idealFor: "Entreprises en croissance",
    keyPoints: [
      "Site premium avec fonctionnalités avancées",
      "Blog optimisé pour le SEO",
      "Fonctionnalités métier personnalisées",
      "Suivi et accompagnement mensuel",
    ],
    icon: "app-icon",
    image: "/image/appli.jpg",
    color: "from-amber-500 to-orange-600",
  },
];

export default function Services() {
  return (
    <main className="bg-gray-950">
      <ServicesHero />

      <div className="relative bg-gradient-to-b from-gray-950 to-black mt-[-50px] pt-16 pb-24">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/0 to-gray-950"></div>

        <div className="max-w-6xl mx-auto px-6 pt-16">
          {/* Bannière simplifiée */}
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-5 rounded-lg border border-purple-500/30 max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-white">
              Tous mes sites incluent :{" "}
              <strong className="text-purple-300">design moderne</strong>,
              <strong className="text-purple-300"> optimisation SEO</strong> et
              <strong className="text-purple-300">
                {" "}
                expérience adaptée à votre activité
              </strong>
            </p>
          </div>
          {/* build */}
          {/* Services en cartes */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-gray-900/70 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-3">{service.description}</p>
                    <p className="text-xl font-semibold text-purple-400 mb-4">
                      {service.price}
                    </p>

                    <p className="text-sm text-gray-400 mb-3">
                      Idéal pour : {service.idealFor}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-400 mr-2">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="#booking"
                      className="block w-full text-center py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section réservation */}
          <div id="booking" className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Discutons de votre projet
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Réservez un appel gratuit de 30 minutes pour échanger sur vos
                besoins et recevoir des conseils personnalisés
              </p>
            </div>

            <BookingCalendar />
          </div>

          <div className="container mx-auto px-4 mt-20">
            <CTA
              title="Des questions ?"
              description="Contactez-moi directement pour discuter de votre projet"
              buttonText="Contact"
              buttonLink="/contact"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
