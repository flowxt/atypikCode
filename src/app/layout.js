import { Inter } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { Analytics } from "@vercel/analytics/next";
import PageTransition from "@/components/global/PageTransition";
import Script from "next/script";

import "./globals.css";
import BackgroundEffects from "@/components/global/BackgroundEffects";
import WhatsAppButton from "@/components/global/WhatsAppButton";

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AtypikCode",
  url: "https://www.atypikcode.fr",
  logo: "https://www.atypikcode.fr/logo.png",
  description:
    "Développeur web freelance spécialisé dans la création de sites web pour entreprises et professionnels en Haute-Savoie",
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
    addressRegion: "Haute-Savoie",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33",
    contactType: "customer service",
    availableLanguage: "French",
  },
  sameAs: ["https://www.linkedin.com/in/florian-atypikcode"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AtypikCode",
  image: "https://www.atypikcode.fr/logo.png",
  description:
    "Création de sites web professionnels pour entreprises et professionnels",
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
    addressRegion: "Haute-Savoie",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.8992,
    longitude: 6.1294,
  },
  url: "https://www.atypikcode.fr",
  telephone: "+33",
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-18:00",
  serviceArea: {
    "@type": "Place",
    name: "Haute-Savoie, France",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Développement de sites web professionnels",
  description:
    "Création de sites web optimisés SEO, landing pages et applications web pour entreprises et professionnels",
  provider: {
    "@type": "Organization",
    name: "AtypikCode",
  },
  areaServed: {
    "@type": "Place",
    name: "Haute-Savoie, France",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services web",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Site Vitrine",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Application Web",
        },
      },
    ],
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

      {/* Schema.org structured data */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script
        id="schema-service"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(serviceSchema)}
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
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
