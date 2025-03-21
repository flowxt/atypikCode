import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Développeur Web en Haute-Savoie | Création de Sites Web",
  description:
    "Création de sites web et landing pages professionnels pour auto-entrepreneurs, sociétés et PME en Haute-Savoie. À partir de 800€.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
