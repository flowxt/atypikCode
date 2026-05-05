import { HeroSection } from "@/components/home/HeroSection";
import WhyNextJS from "@/components/home/WhyNextJS";
import About from "@/components/home/About";
import SocialProof from "@/components/home/SocialProof";
import Portfolio from "@/components/home/Portfolio";
import HomePacks from "@/components/home/HomePacks";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/global/CTA";

export const metadata = {
  title: "Atypik Code | Site Vitrine Pro à partir de 1 000€ - Haute-Savoie",
  description:
    "Ne perdez plus de clients à cause d'un site lent. Site vitrine Next.js ultra-performant à partir de 1 000€ en Haute-Savoie. Tarifs transparents, devis gratuit en 24h.",
  keywords:
    "site vitrine 1000 euros, création site internet haute-savoie, développeur next.js, site web pas cher, site rapide, freelance développeur, développeur web La Roche-sur-Foron, tarif site internet",
  openGraph: {
    title: "Atypik Code | Site Vitrine Pro à partir de 1 000€ - Haute-Savoie",
    description:
      "Site vitrine Next.js ultra-performant à partir de 1 000€. Conçu pour Google et la conversion. Tarifs transparents.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/florian-dev.png",
        width: 1200,
        height: 630,
        alt: "Atypik Code - Développeur Web en Haute-Savoie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atypik Code | Site Vitrine Pro à partir de 1 000€ - Haute-Savoie",
    description: "Site vitrine Next.js ultra-performant à partir de 1 000€. Tarifs transparents.",
    images: ["/image/florian-dev.png"],
  },
  alternates: {
    canonical: "https://www.atypikcode.fr",
  },
};

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero avec message punch */}
      <HeroSection />
      
      {/* Pourquoi Next.js > WordPress */}
      <WhyNextJS />
      
      {/* À propos - approche "Vous d'abord" */}
      <About />
      
      {/* Témoignages - preuve sociale */}
      <SocialProof />
      
      {/* Portfolio - réalisations */}
      <Portfolio />
      
      {/* Offres avec valeur perçue */}
      <HomePacks />
      
      {/* FAQ */}
      <FAQ />
      
      {/* CTA final */}
      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <CTA
          title="Votre activité mérite un site d'exception."
          description="Ne laissez pas un site lent ou daté freiner votre croissance. Discutons de votre projet."
          buttonText="Discuter de mon projet"
          buttonLink="/contact"
        />
      </div>
    </main>
  );
}
