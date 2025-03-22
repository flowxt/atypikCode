import { Inter } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

import "./globals.css";
import BackgroundEffects from "@/components/global/BackgroundEffects";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Atypik Code",
    template: "%s | Atypik Code",
  },
  description: "Développement web premium en Haute-Savoie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-[#0A0A0F] text-white min-h-screen`}
      >
        <BackgroundEffects />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
