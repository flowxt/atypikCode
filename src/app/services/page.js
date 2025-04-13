import ServiceDetail from "@/components/services/ServiceDetail";
import ProcessSteps from "@/components/services/ProcessSteps";
import CTA from "@/components/global/CTA";
import BookingCalendar from "@/components/services/BookingCalendar";

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

// Données statiques pour les services (vous pourriez les placer dans un fichier séparé)
const services = [
  {
    id: "pack-essentiel",
    title: "Pack Essentiel",
    description:
      "Votre vitrine professionnelle en ligne pour attirer vos premiers clients",
    priceFrom: 600,
    idealFor: "Artisans, autoentrepreneurs et TPE en démarrage",
    benefits: [
      "Visibilité immédiate sur Google dans votre zone géographique",
      "Contact direct avec vos clients potentiels via formulaire",
      "Présentation professionnelle de votre activité 24h/24",
      "Site responsive accessible sur mobile, tablette et ordinateur",
    ],
    features: [
      "Site vitrine 1 à 3 pages (accueil, services, contact)",
      "Formulaire de contact optimisé pour les conversions",
      "Référencement local optimisé pour votre zone d'activité",
      "Intégration de vos coordonnées et horaires d'ouverture",
      "Mise en place de Google Business Profile",
    ],
    icon: "landing-page-icon",
    image: "/image/landing.png",
    processSteps: [
      {
        title: "Découverte",
        description: "Entretien personnalisé pour comprendre votre activité",
      },
      {
        title: "Design adapté",
        description:
          "Maquette moderne reflétant l'identité de votre entreprise",
      },
      {
        title: "Développement",
        description:
          "Création de votre site avec des technologies performantes",
      },
      {
        title: "Référencement local",
        description:
          "Optimisation pour être visible dans votre zone géographique",
      },
      {
        title: "Mise en ligne",
        description: "Publication et configuration de votre présence en ligne",
      },
    ],
  },
  {
    id: "pack-professionnel",
    title: "Pack Professionnel",
    description:
      "Développez votre clientèle avec un site complet qui convertit vos visiteurs",
    priceFrom: 1200,
    idealFor: "PME, cabinets libéraux et commerces locaux établis",
    benefits: [
      "Augmentation significative de vos demandes de devis et réservations",
      "Renforcement de votre crédibilité avec des témoignages clients",
      "Présentation détaillée de vos services et spécialités",
      "Fidélisation de vos clients grâce à une image professionnelle",
    ],
    features: [
      "Site multi-pages complet (5 à 8 pages personnalisées)",
      "Système de prise de rendez-vous ou demande de devis en ligne",
      "Galerie photo et portfolios de vos réalisations",
      "Témoignages clients pour renforcer votre crédibilité",
      "Optimisation SEO complète pour un meilleur classement",
      "Tableau de bord analytics pour suivre vos performances",
    ],
    icon: "site-icon",
    image: "/image/site-vitrine.png",
    processSteps: [
      {
        title: "Stratégie personnalisée",
        description: "Analyse de votre marché et de vos objectifs commerciaux",
      },
      {
        title: "Architecture et UX",
        description:
          "Structure optimisée pour guider efficacement vos visiteurs",
      },
      {
        title: "Développement avancé",
        description: "Création du site avec des fonctionnalités sur mesure",
      },
      {
        title: "Production de contenu",
        description:
          "Rédaction optimisée pour convertir et rassurer vos clients",
      },
      {
        title: "Formation et lancement",
        description: "Prise en main et stratégie post-lancement",
      },
    ],
  },
  {
    id: "pack-premium",
    title: "Pack Premium",
    description:
      "Maximisez votre impact en ligne avec une solution digitale complète",
    priceFrom: 2500,
    idealFor:
      "Entreprises en croissance ayant besoin d'une présence digitale avancée",
    benefits: [
      "Génération continue de leads qualifiés grâce au contenu régulier",
      "Automatisation de vos processus de vente et réservation",
      "Image de marque premium qui vous démarque de la concurrence",
      "Suivi personnalisé pour adapter votre stratégie en continu",
    ],
    features: [
      "Site web premium avec fonctionnalités avancées",
      "Blog intégré avec calendrier éditorial sur 3 mois",
      "Système de réservation/paiement en ligne si nécessaire",
      "Espace client ou fonctionnalités métier personnalisées",
      "Stratégie de contenu optimisée pour le référencement",
      "Accompagnement mensuel et ajustements stratégiques",
    ],
    icon: "app-icon",
    image: "/image/appli.jpg",
    processSteps: [
      {
        title: "Workshop stratégique",
        description:
          "Session approfondie pour définir votre stratégie digitale globale",
      },
      {
        title: "Architecture sur mesure",
        description: "Conception d'un système adapté à vos processus métier",
      },
      {
        title: "Développement personnalisé",
        description:
          "Programmation de fonctionnalités spécifiques à votre activité",
      },
      {
        title: "Stratégie de contenu",
        description: "Création d'un plan de contenu SEO optimisé",
      },
      {
        title: "Formation et suivi",
        description:
          "Accompagnement continu pour maximiser votre retour sur investissement",
      },
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
              Des Solutions Web Qui Génèrent des Résultats
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Votre site web doit être bien plus qu&apos;une simple présence en
            ligne - il doit être votre meilleur commercial, travaillant pour
            vous 24h/24.
          </p>
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl border border-white/10 max-w-2xl mx-auto">
            <p className="text-white">
              Chaque formule inclut une{" "}
              <strong className="text-purple-300">
                stratégie personnalisée
              </strong>{" "}
              pour votre activité, un{" "}
              <strong className="text-purple-300">design moderne</strong> adapté
              à votre marque, et une{" "}
              <strong className="text-purple-300">optimisation SEO</strong> pour
              être visible par vos clients potentiels.
            </p>
          </div>
        </div>

        <div className="space-y-32">
          {services.map((service) => (
            <div key={service.id} id={service.id}>
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
              Discutons de votre projet
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Réservez un appel découverte gratuit de 30 minutes pour parler de
              vos objectifs et recevoir des conseils personnalisés
            </p>
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-5 rounded-xl border border-purple-500/20 max-w-2xl mx-auto">
              <p className="text-white text-sm">
                Pendant cet appel, nous évaluerons vos besoins, discuterons des
                solutions possibles et vous recevrez des recommandations
                concrètes - même si vous décidez de ne pas travailler avec moi.
              </p>
            </div>
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
