import { HeroSection } from "@/components/home/HeroSection";
import WhyNextJS from "@/components/home/WhyNextJS";
import About from "@/components/home/About";
import SocialProof from "@/components/home/SocialProof";
import Portfolio from "@/components/home/Portfolio";
import HomePacks from "@/components/home/HomePacks";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/global/CTA";

export const metadata = {
  title: "Atypik Code | Sites Web Ultra-Performants en Haute-Savoie",
  description:
    "Ne perdez plus de clients à cause d'un site lent. Sites web Next.js ultra-performants, conçus pour Google et la conversion. Landing page 950€, Site Business 1900€.",
  keywords:
    "développeur next.js, site web performant, création site haute-savoie, site rapide, expert SEO, freelance développeur",
  openGraph: {
    title: "Atypik Code | Sites Web Ultra-Performants",
    description:
      "Ne perdez plus de clients à cause d'un site lent. Sites web Next.js ultra-rapides, conçus pour Google et la conversion.",
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
      <div className="max-w-4xl mx-auto px-6 py-24">
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
