import { Inter } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { Analytics } from "@vercel/analytics/next";
import PageTransition from "@/components/global/PageTransition";

import "./globals.css";
import BackgroundEffects from "@/components/global/BackgroundEffects";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Atypik Code | Développeur Web & Landing Pages en Haute-Savoie",
    template: "%s | Atypik Code - Développement Web Premium",
  },
  description:
    "Développeur web freelance en Haute-Savoie spécialisé dans la création de sites web professionnels, landing pages et applications React / Next.js. Transformation digitale pour entreprises et particuliers.",
  keywords:
    "développeur web Annecy, création site internet Haute-Savoie, landing page optimisée, refonte site web, expert React Next.js, site e-commerce Annemasse, développement web Thonon, webdesign Chamonix, site responsive, applications web sur mesure, SEO local, agence digitale Haute-Savoie, site vitrine professionnel, intégration WordPress",
  metadataBase: new URL("https://www.atypikcode.fr"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Atypik Code | Développeur Web Premium en Haute-Savoie",
    description:
      "Création de sites web professionnels et landing pages optimisés. Solutions digitales sur-mesure pour votre entreprise.",
    url: "https://www.atypikcode.fr",
    siteName: "Atypik Code",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-[#0A0A0F] text-white min-h-screen`}
      >
        <BackgroundEffects />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
