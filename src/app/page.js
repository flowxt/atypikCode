import { HeroSection } from "@/components/home/HeroSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import CTA from "@/components/global/CTA";
import SocialProof from "@/components/home/SocialProof";
import FAQ from "@/components/home/FAQ";
import About from "@/components/home/About";

export const metadata = {
  title: "Atypik Code | Création de Sites Web en Haute-Savoie",
  description:
    "Développeur web freelance. Création de sites internet modernes et performants. Landing page 750€, Site vitrine 1600€, E-commerce dès 2200€.",
  keywords:
    "création site web, développeur web haute-savoie, site internet la roche-sur-foron, landing page, site vitrine",
  openGraph: {
    title: "Atypik Code | Création de Sites Web",
    description:
      "Développeur web freelance spécialisé dans la création de sites internet modernes en Haute-Savoie.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://www.atypikcode.fr",
  },
};

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <About />
      <SocialProof />
      <ServicesOverview />
      <FAQ />
      
      <div className="max-w-4xl mx-auto px-6 py-24">
        <CTA
          title="Prêt à lancer votre projet ?"
          description="Discutons ensemble de vos besoins et créons le site web idéal pour votre activité."
          buttonText="Demander un devis gratuit"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
