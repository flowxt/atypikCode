import { HeroSection } from "@/components/home/HeroSection";
import Values from "@/components/home/Values";
import ServicesOverview from "@/components/services/ServicesOverview";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/global/CTA";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

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

      {/* Section présentation personnelle */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/5">
                <div className="relative w-72 h-96 mx-auto lg:w-96 lg:h-120">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-500/20 blur-xl"></div>
                  <div className="absolute inset-0 border-2 border-purple-500/30 overflow-hidden">
                    <Image
                      src="/image/florian-dev.png"
                      alt="Florian, développeur web et fondateur d'AtypikCode"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 mt-8 lg:mt-0">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Pourquoi AtypikCode ?
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    À travers AtypikCode, je transforme ma différence en
                    avantage. Porteur d&apos;un Trouble du Spectre Autistique
                    (TSA), j&apos;apporte un regard véritablement atypique sur
                    vos projets web.
                  </p>
                  <p>
                    Ma passion pour l&apos;informatique, cultivée depuis
                    toujours, s&apos;est transformée en une mission : vous
                    donner la visibilité que vous méritez sur internet.
                  </p>
                  <p>
                    Google est un adversaire redoutable sans les bonnes armes.
                    Mon approche méthodique, mon souci du détail et ma
                    persévérance - traits caractéristiques de mon
                    neurodéveloppement - me permettent de créer des sites web
                    optimisés qui se démarquent.
                  </p>
                  <p className="font-medium text-purple-300">
                    Je mets mes compétences à votre service pour vous doter
                    d&apos;une présence en ligne aussi unique et atypique que
                    vos talents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <Values />
      <Testimonials />
      <FAQ />
      <div className="container mx-auto px-4 my-8">
        <CTA
          title="Prêt pour un site qui génère des clients ?"
          description="Réservez un appel gratuit et sans engagement de 30 minutes"
          buttonText="Réserver mon appel"
          buttonLink="/services#booking"
        />
      </div>
    </main>
  );
}
