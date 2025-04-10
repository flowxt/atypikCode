import { Metadata } from "next";
import CTA from "@/components/global/CTA";
import InformatiquePack from "@/components/informatique/InformatiquePack";
import BookingCalendar from "@/components/services/BookingCalendar";

export const metadata = {
  title: "Services Informatiques | Configuration et Assistance | Atypik Code",
  description:
    "Assistance informatique personnalisée, configuration de PC et Mac, synchronisation d'appareils Apple et assemblage de PC sur mesure. Solutions adaptées aux particuliers et professionnels.",
  keywords:
    "assistance informatique, configuration PC, synchronisation Apple, assemblage PC sur mesure, dépannage informatique, Haute-Savoie, installation logiciels",
};

// Données des packs de services informatiques
const informatiquePacks = [
  {
    id: "pack-installation",
    title: "Pack Installation & Configuration",
    description:
      "Mise en service et configuration complète de vos appareils informatiques",
    priceFrom: 80,
    priceInfo: "Tarif horaire : 50€/h",
    idealFor:
      "Particuliers et professionnels souhaitant optimiser leurs appareils",
    benefits: [
      "Prise en main rapide de vos nouveaux équipements",
      "Configuration sécurisée avec protection de vos données",
      "Transfert de données depuis vos anciens appareils",
      "Explication et formation à l'utilisation",
    ],
    features: [
      "Installation de Windows ou macOS et mise à jour",
      "Configuration des comptes utilisateurs et emails",
      "Installation des logiciels essentiels",
      "Mise en place d'une solution de sauvegarde",
      "Configuration des périphériques (imprimante, scanner, etc.)",
      "Conseils personnalisés d'utilisation",
    ],
    icon: "install-icon",
    image: "/image/install.jpg",
  },
  {
    id: "pack-apple",
    title: "Pack Écosystème Apple",
    description:
      "Synchronisation et optimisation de vos appareils Apple pour une expérience fluide",
    priceFrom: 120,
    priceInfo: "Tarif horaire : 60€/h",
    idealFor:
      "Utilisateurs d'iPhone, iPad, Mac souhaitant un écosystème cohérent",
    benefits: [
      "Accès à vos données sur tous vos appareils",
      "Synchronisation automatique des photos, contacts et calendriers",
      "Partage simplifié entre vos différents appareils",
      "Sécurisation de votre écosystème Apple",
    ],
    features: [
      "Configuration d'iCloud et optimisation du stockage",
      "Mise en place de la synchronisation entre appareils",
      "Configuration de la sauvegarde automatique",
      "Partage familial et gestion des achats",
      "Installation et organisation des applications essentielles",
      "Configuration de Handoff et Continuity",
    ],
    icon: "apple-icon",
    image: "/image/appli.jpg",
  },
  {
    id: "pc-sur-mesure",
    title: "PC Sur Mesure",
    description:
      "Conception et assemblage d'un PC adapté exactement à vos besoins",
    priceFrom: 200,
    priceInfo: "Hors coût du matériel",
    idealFor: "Gamers, créatifs, professionnels ayant des besoins spécifiques",
    benefits: [
      "PC parfaitement adapté à votre utilisation",
      "Composants de qualité sélectionnés selon votre budget",
      "Performance optimale pour vos logiciels spécifiques",
      "Rapport qualité/prix supérieur aux PC préassemblés",
    ],
    features: [
      "Conseil personnalisé et sélection des composants",
      "Assemblage professionnel et câblage soigné",
      "Installation et configuration du système d'exploitation",
      "Installation des pilotes et logiciels nécessaires",
      "Tests de performance et stabilité",
      "Support post-assemblage",
    ],
    icon: "pc-icon",
    image: "/image/pc-sur-mesure.jpeg",
  },
];

export default function InformatiquePage() {
  return (
    <main className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Services Informatiques
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Assistance et solutions personnalisées pour vos appareils
            informatiques
          </p>
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl border border-white/10 max-w-2xl mx-auto">
            <p className="text-white">
              Que vous soyez particulier ou professionnel, je vous accompagne
              dans l&apos;installation, la configuration et l&apos;optimisation
              de vos équipements informatiques. Disponible à{" "}
              <strong className="text-purple-300">domicile</strong> ou en{" "}
              <strong className="text-purple-300">télémaintenance</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {informatiquePacks.map((pack) => (
            <div key={pack.id} id={pack.id} className="scroll-mt-32">
              <InformatiquePack pack={pack} />
            </div>
          ))}
        </div>

        <div id="booking" className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d&apos;assistance informatique ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Réservez un appel gratuit pour discuter de vos besoins et obtenir
              un devis personnalisé
            </p>
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-5 rounded-xl border border-purple-500/20 max-w-2xl mx-auto">
              <p className="text-white text-sm">
                Après notre échange, je vous proposerai une solution adaptée à
                vos besoins spécifiques et à votre budget. Intervention possible
                en Haute-Savoie ou à distance selon le type de prestation.
              </p>
            </div>
          </div>

          <BookingCalendar />
        </div>

        <div className="mt-32">
          <CTA
            title="D'autres questions ?"
            description="N'hésitez pas à me contacter pour tout renseignement complémentaire."
            buttonText="Contact"
            buttonLink="/contact"
          />
        </div>
      </div>
    </main>
  );
}
