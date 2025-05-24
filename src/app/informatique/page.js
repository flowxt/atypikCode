import { Metadata } from "next";
import CTA from "@/components/global/CTA";
import { InformatiqueHero } from "@/components/informatique/InformatiqueHero";
import BookingCalendar from "@/components/services/BookingCalendar";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services Informatiques | Configuration et Assistance | Atypik Code",
  description:
    "Assistance informatique personnalisée, configuration de PC et Mac, synchronisation d'appareils Apple et assemblage de PC sur mesure en Haute-Savoie. Solutions adaptées aux particuliers et professionnels.",
  keywords:
    "assistance informatique Haute-Savoie, configuration PC, synchronisation Apple, assemblage PC sur mesure, dépannage informatique, Annecy, installation logiciels",
};

// Données simplifiées des packs de services informatiques
const informatiquePacks = [
  {
    id: "pack-installation",
    title: "Installation & Configuration",
    description: "Mise en service complète de vos appareils",
    price: "À partir de 80€",
    tarif: "Tarif horaire : 50€/h",
    idealFor: "Particuliers et professionnels",
    keyPoints: [
      "Installation Windows ou macOS",
      "Configuration des comptes et emails",
      "Installation des logiciels essentiels",
      "Configuration des périphériques",
    ],
    icon: "install-icon",
    image: "/image/install.jpg",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: "pack-apple",
    title: "Écosystème Apple",
    description: "Synchronisation optimale de vos appareils Apple",
    price: "À partir de 120€",
    tarif: "Tarif horaire : 60€/h",
    idealFor: "Utilisateurs iPhone, iPad, Mac",
    keyPoints: [
      "Configuration d'iCloud et stockage",
      "Synchronisation entre appareils",
      "Sauvegarde automatique",
      "Partage familial et continuité",
    ],
    icon: "apple-icon",
    image: "/image/appli.jpg",
    color: "from-purple-600 to-pink-500",
  },
  {
    id: "pc-sur-mesure",
    title: "PC Sur Mesure",
    description: "PC parfaitement adapté à vos besoins",
    price: "À partir de 200€",
    tarif: "Hors coût du matériel",
    idealFor: "Gamers, créatifs, professionnels",
    keyPoints: [
      "Sélection des composants adaptés",
      "Assemblage professionnel",
      "Installation complète du système",
      "Tests de performance",
    ],
    icon: "pc-icon",
    image: "/image/pc-sur-mesure.jpeg",
    color: "from-amber-500 to-orange-600",
  },
];

export default function InformatiquePage() {
  return (
    <main className="bg-gray-950">
      <InformatiqueHero />

      <div className="relative bg-gradient-to-b from-gray-950 to-black mt-[-50px] pt-16 pb-24">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/0 to-gray-950"></div>

        <div className="max-w-6xl mx-auto px-6 pt-16">
          {/* Bannière simplifiée */}
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-5 rounded-lg border border-purple-500/30 max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-white">
              Des solutions informatiques{" "}
              <strong className="text-purple-300">personnalisées</strong> et
              <strong className="text-purple-300"> sur mesure</strong> pour tous
              vos besoins
            </p>
          </div>

          {/* Services en cartes */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {informatiquePacks.map((pack) => (
              <div
                key={pack.id}
                id={pack.id}
                className="bg-gray-900/70 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={pack.image}
                    alt={pack.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{pack.title}</h3>
                    <p className="text-gray-300 mb-3">{pack.description}</p>
                    <p className="text-xl font-semibold text-purple-400 mb-1">
                      {pack.price}
                    </p>
                    <p className="text-sm text-gray-400 mb-3">{pack.tarif}</p>

                    <p className="text-sm text-gray-400 mb-3">
                      Idéal pour : {pack.idealFor}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {pack.keyPoints.map((point, index) => (
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
                Besoin d&apos;assistance informatique ?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Réservez un appel gratuit pour discuter de vos besoins et
                obtenir un devis personnalisé. Intervention possible en
                Haute-Savoie ou à distance selon le type de prestation.
              </p>
            </div>

            <BookingCalendar />
          </div>

          <div className="container mx-auto px-4 mt-20">
            <CTA
              title="D'autres questions ?"
              description="Contactez-moi pour tout renseignement complémentaire"
              buttonText="Contact"
              buttonLink="/contact"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
