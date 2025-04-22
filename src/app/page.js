import { HeroSection } from "@/components/home/HeroSection";
import Values from "@/components/home/Values";
import ServicesOverview from "@/components/services/ServicesOverview";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/global/CTA";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title:
    "Atypik Code | Développement web sur mesure à Annecy et en Haute-Savoie",
  description:
    "Création de sites web professionnels et boutiques en ligne pour indépendants et PME en Haute-Savoie. Landing pages optimisées SEO et sites vitrines performants.",
  keywords:
    "développement web, création site internet, Annecy, Haute-Savoie, développeur web freelance, landing page, site vitrine, référencement local",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <Values />
      <Testimonials />
      <FAQ />
      <CTA
        title="Prêt pour un site qui génère des clients ?"
        description="Réservez un appel gratuit et sans engagement de 30 minutes"
        buttonText="Réserver mon appel"
        buttonLink="/services#booking"
      />
    </main>
  );
}
