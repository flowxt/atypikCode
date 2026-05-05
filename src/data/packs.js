// Source unique de vérité pour les offres / tarifs.
// Tout changement de prix ou de feature se fait ICI uniquement.

export const packs = [
  {
    id: "vitrine-essentiel",
    name: "Vitrine Essentiel",
    subtitle: "Site Vitrine",
    tagline: "Pour démarrer fort",
    description: "L'offre idéale pour un indépendant ou un artisan qui veut être visible en ligne, sans se ruiner.",
    priceLabel: "À partir de 1 000€",
    priceNumber: 1000,
    priceCurrency: "EUR",
    color: "from-violet-500 to-purple-600",
    delivery: "1 à 2 semaines",
    features: [
      "1 à 3 pages sur-mesure",
      "Design moderne et responsive",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Hébergement configuré",
      "Mise en ligne offerte",
    ],
    popular: false,
  },
  {
    id: "vitrine-pro",
    name: "Vitrine Pro",
    subtitle: "Le plus choisi",
    tagline: "Pour les TPE / PME",
    description: "Une vraie vitrine digitale qui inspire confiance, attire des clients et se démarque de la concurrence.",
    priceLabel: "1 500€",
    priceNumber: 1500,
    priceCurrency: "EUR",
    color: "from-blue-500 to-cyan-500",
    delivery: "2 à 3 semaines",
    features: [
      "Jusqu'à 5 pages sur-mesure",
      "Design premium personnalisé",
      "SEO avancé + SEO local",
      "Animations et interactions fluides",
      "Analytics & suivi des conversions",
      "Intégrations (Google Maps, mail, réseaux)",
    ],
    popular: true,
  },
  {
    id: "vitrine-premium",
    name: "Vitrine Premium",
    subtitle: "Site Vitrine étendu",
    tagline: "Pour les activités exigeantes",
    description: "Pour les pros qui veulent une présence digitale au top : design haut de gamme et options avancées.",
    priceLabel: "1 900€",
    priceNumber: 1900,
    priceCurrency: "EUR",
    color: "from-emerald-500 to-teal-600",
    delivery: "3 à 4 semaines",
    features: [
      "5+ pages sur-mesure",
      "Design haut de gamme + animations avancées",
      "SEO avancé + stratégie de contenu",
      "Multilingue OU réservation en ligne",
      "Analytics avancés + tableau de bord",
      "Maintenance 6 mois incluse",
    ],
    popular: false,
  },
  {
    id: "sur-mesure",
    name: "Sur Mesure",
    subtitle: "E-commerce & Apps",
    tagline: "Pour aller plus loin",
    description: "E-commerce, application web, plateforme de réservation, outil métier… une solution 100% personnalisée.",
    priceLabel: "Sur devis",
    priceNumber: null,
    priceCurrency: "EUR",
    color: "from-pink-500 to-rose-600",
    delivery: "5 à 8 semaines",
    features: [
      "Solution e-commerce complète",
      "Application web sur-mesure",
      "Architecture scalable",
      "Intégrations API avancées",
      "Sécurité renforcée",
      "Support prioritaire",
    ],
    popular: false,
  },
];

// Helpers
export const getPack = (id) => packs.find((p) => p.id === id);
export const startingPrice = "1 000€";
export const priceRange = "1 000€ à 1 900€";
export const monthlyMaintenance = "50 à 150€/mois";
