import ServiceDetail from "@/components/services/ServiceDetail";
import ProcessSteps from "@/components/services/ProcessSteps";
import CTA from "@/components/global/CTA";
import BookingCalendar from "@/components/services/BookingCalendar";

export const metadata = {
  title:
    "Services de Développement Web en Haute-Savoie | Landing Pages & Sites Web | Atypik Code",
  description:
    "Création de sites web professionnels, landing pages optimisées et applications React/Next.js sur mesure. Services de développement web en Haute-Savoie et à distance pour entreprises et startups.",
  keywords:
    "développeur web Haute-Savoie, création site internet, landing page optimisée, développement Next.js, React, sites web professionnels, Annecy, 74800",
};

// Données statiques pour les services (vous pourriez les placer dans un fichier séparé)
const services = [
  {
    id: "landing-page",
    title: "Landing Page",
    description:
      "Une page web optimisée pour convertir vos visiteurs en clients",
    priceFrom: 800,
    features: [
      "Design responsive sur mesure",
      "Optimisation SEO avancée",
      "Formulaires de capture de leads",
      "Intégration analytics",
      "Suivi mensuel des performances et optimisations régulières",
    ],
    icon: "landing-page-icon",
    processSteps: [
      {
        title: "Analyse des besoins",
        description: "Nous définissons ensemble vos objectifs",
      },
      {
        title: "Design personnalisé",
        description: "Création de maquettes adaptées à votre marque",
      },
      {
        title: "Développement",
        description:
          "Codage de votre landing page avec des technologies modernes",
      },
      {
        title: "Tests",
        description: "Vérification de la compatibilité et des performances",
      },
      {
        title: "Mise en ligne",
        description: "Déploiement et configuration finale",
      },
    ],
  },
  {
    id: "site-vitrine",
    title: "Site Vitrine",
    description:
      "Un site web complet pour présenter votre entreprise et vos services",
    priceFrom: 1200,
    features: [
      "Design exclusif multi-pages",
      "Optimisation SEO complète",
      "Interface d'administration",
      "Formulaire de contact",
      "Intégration réseaux sociaux",
    ],
    icon: "site-icon",
    processSteps: [
      {
        title: "Analyse et stratégie",
        description: "Définition des objectifs et de la structure",
      },
      {
        title: "Conception UX/UI",
        description: "Création des wireframes et maquettes",
      },
      {
        title: "Développement",
        description: "Création du site avec Next.js et Tailwind",
      },
      {
        title: "Contenu et SEO",
        description: "Optimisation pour les moteurs de recherche",
      },
      {
        title: "Tests et lancement",
        description: "Vérification complète et mise en ligne",
      },
    ],
  },
  {
    id: "application",
    title: "Application Web",
    description:
      "Une application sur mesure pour digitaliser vos processus métier",
    priceFrom: 3000,
    features: [
      "Développement sur mesure",
      "Interface utilisateur intuitive",
      "Panneau d'administration",
      "Intégrations API tierces",
      "Sécurité renforcée",
    ],
    icon: "app-icon",
    processSteps: [
      {
        title: "Spécifications",
        description: "Définition détaillée des fonctionnalités",
      },
      {
        title: "Architecture",
        description: "Conception de la structure technique",
      },
      {
        title: "Développement",
        description: "Programmation des fonctionnalités",
      },
      {
        title: "Tests rigoureux",
        description: "Vérification de chaque aspect",
      },
      { title: "Déploiement", description: "Mise en production et formation" },
    ],
  },
];

export default function Services() {
  return (
    <main className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Nos Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions digitales sur mesure pour répondre à vos objectifs
            commerciaux
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service) => (
            <div key={service.id}>
              <ServiceDetail service={service} />
              <div className="mt-16">
                <ProcessSteps steps={service.processSteps} />
              </div>
            </div>
          ))}
        </div>

        <div id="booking" className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Réservez un appel gratuit
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discutons de votre projet pendant un appel de 30 minutes sans
              engagement
            </p>
          </div>

          {/* Calendly intégré via un composant client */}
          <BookingCalendar />
        </div>

        <div className="mt-32">
          <CTA
            title="Des questions supplémentaires ?"
            description="N'hésitez pas à me contacter directement pour discuter de votre projet."
            buttonText="Contact"
            buttonLink="/contact"
          />
        </div>
      </div>
    </main>
  );
}
