import Hero from "@/components/home/Hero";

import Values from "@/components/home/Values";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/global/CTA";
import ServicesOverview from "@/components/services/ServicesOverview";

export const metadata = {
  title: "Atypik Code | Développement Web en Haute-Savoie",
  description:
    "Création de sites web, landing pages et applications sur mesure pour entreprises et auto-entrepreneurs en Haute-Savoie",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <Values />
      <FAQ />
      <CTA
        title="Prêt à donner vie à votre projet ?"
        description="Discutons de vos besoins et objectifs lors d'un appel de découverte gratuit."
        buttonText="Réserver un appel"
        buttonLink="/services#booking"
      />
    </main>
  );
}
