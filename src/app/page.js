import Hero from "@/components/home/Hero";
import Values from "@/components/home/Values";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/global/CTA";
import ServicesOverview from "@/components/services/ServicesOverview";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Développeur Web & Landing Pages en Haute-Savoie | Atypik Code",
  description:
    "Création de sites web professionnels, landing pages et applications sur mesure pour entreprises en Haute-Savoie. Expert en développement React/Next.js, SEO et design responsive.",
  keywords:
    "développeur web Haute-Savoie, création site internet, landing page, site vitrine, application web, React, Next.js, SEO, site responsive, Annecy",
  alternates: {
    canonical: "https://www.atypikcode.fr",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
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
