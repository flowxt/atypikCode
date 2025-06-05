import { HeroSection } from "@/components/home/HeroSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import CTA from "@/components/global/CTA";
import SocialProof from "@/components/home/SocialProof";
import FAQ from "@/components/home/FAQ";

export const metadata = {
  title:
    "Développement Web La Roche-sur-Foron | Création Site Internet Haute-Savoie - Atypik Code",
  description:
    "Expert développement web à La Roche-sur-Foron. Création sites internet modernes avec Next.js, React, Framer Motion. Landing pages qui convertissent. Devis gratuit 24h.",
  keywords:
    "développement web la roche-sur-foron, création site internet la-roche-sur-foron, site web haute-savoie, framer motion, next.js développeur, landing page conversion, site internet la-roche-sur-foron, développeur web annecy, realisation site web la-roche-sur-foron",
  openGraph: {
    title:
      "Développement Web La Roche-sur-Foron | Sites Internet Modernes - Atypik Code",
    description:
      "Développeur web spécialisé Next.js à La Roche-sur-Foron. Sites internet performants avec animations Framer Motion pour entreprises Haute-Savoie.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atypik Code - Développement web La Roche-sur-Foron",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développement Web La Roche-sur-Foron | Atypik Code",
    description:
      "Expert développement web moderne avec Next.js et Framer Motion en Haute-Savoie.",
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

      {/* FAQ pour lever les objections */}
      <FAQ />

      {/* CTA final */}
      <div className="container mx-auto px-4 my-16">
        <CTA
          title="Prêt à tripler vos clients ?"
          description="Plus que 7 places disponibles ce mois. Saisissez cette opportunité avant qu'il ne soit trop tard."
          buttonText="OBTENIR MON DEVIS GRATUIT"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
