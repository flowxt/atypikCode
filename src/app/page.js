import { HeroSection } from "@/components/home/HeroSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import CTA from "@/components/global/CTA";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/home/SocialProof";

export const metadata = {
  title: "Site Web Professionnel qui Génère des Clients | AtypikCode Annecy",
  description:
    "Créateur de sites web pour entreprises et professionnels en Haute-Savoie. Landing pages optimisées SEO qui transforment vos visiteurs en clients. Devis gratuit.",
  keywords:
    "site web entreprise, landing page optimisée, développeur web Annecy, site internet professionnel, création site vitrine, référencement local Haute-Savoie, conversion client, développeur freelance",
  openGraph: {
    title: "Site Web qui Génère des Clients | AtypikCode",
    description:
      "Transformez vos visiteurs en clients avec un site web professionnel optimisé. Spécialiste des entreprises et professionnels en Haute-Savoie.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AtypikCode - Sites web professionnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Web qui Génère des Clients | AtypikCode",
    description:
      "Créateur de sites web pour entreprises et professionnels. Optimisés pour la conversion.",
  },
  alternates: {
    canonical: "https://www.atypikcode.fr",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Preuve sociale immédiate */}
      <SocialProof />

      {/* Services focus */}
      <ServicesOverview />

      {/* Témoignages pour la confiance */}
      <Testimonials />

      {/* CTA final */}
      <div className="container mx-auto px-4 my-16">
        <CTA
          title="Prêt pour un site qui génère des clients ?"
          description="Réservez un appel gratuit et sans engagement de 30 minutes"
          buttonText="Réserver mon appel"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
