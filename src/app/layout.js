import { Inter } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { Analytics } from "@vercel/analytics/next";
import PageTransition from "@/components/global/PageTransition";
import Script from "next/script";

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
    "développeur web Annecy, création site internet Haute-Savoie, landing page optimisée, refonte site web, expert React Next.js, site e-commerce Annemasse, développement web Thonon, webdesign Chamonix, site responsive, applications web sur mesure, SEO local, agence digitale Haute-Savoie, site vitrine professionnel",
  metadataBase: new URL("https://www.atypikcode.fr"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M4V33FHZ');`}
      </Script>

      {/* Google Ads Tag */}
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17045327166');
        `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17045327166"
        strategy="afterInteractive"
      />

      {/* Script pour le suivi de conversion */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
            'send_to': 'AW-17045327166/cfgqCOv1pMEaEL6a7L8_',
            'event_callback': callback
          });
          return false;
        }
        `}
      </Script>
      <body
        className={`${inter.className} bg-[#0A0A0F] text-white min-h-screen`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4V33FHZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <BackgroundEffects />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
