import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { Analytics } from "@vercel/analytics/next";
import PageTransition from "@/components/global/PageTransition";
import Script from "next/script";

import "./globals.css";
import BackgroundEffects from "@/components/global/BackgroundEffects";
import WhatsAppButton from "@/components/global/WhatsAppButton";
import SummerPromoModal from "@/components/global/SummerPromoModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Atypik Code | Site Vitrine Pro à partir de 1 000€ - Haute-Savoie",
    template: "%s | Atypik Code - Développement Web Premium",
  },
  description:
    "Développeur web freelance en Haute-Savoie. Création de sites vitrines professionnels en Next.js à partir de 1 000€. Tarifs transparents, SEO optimisé, devis gratuit en 24h.",
  keywords:
    "création site internet Haute-Savoie, site vitrine 1000 euros, développeur web Annecy, site internet pas cher, refonte site web, expert React Next.js, site e-commerce Annemasse, développement web Thonon, webdesign Chamonix, site responsive, SEO local, freelance Haute-Savoie, tarif site web professionnel",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Atypik Code | Site Vitrine Pro à partir de 1 000€ - Haute-Savoie",
    description:
      "Création de sites vitrines professionnels en Next.js à partir de 1 000€. Tarifs transparents, SEO optimisé, devis gratuit en 24h.",
    url: "https://www.atypikcode.fr",
    siteName: "Atypik Code",
    locale: "fr_FR",
    type: "website",
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
    description:
      "Création de sites vitrines professionnels en Next.js à partir de 1 000€. Tarifs transparents, devis gratuit en 24h.",
    images: ["/image/florian-dev.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atypik Code",
  url: "https://www.atypikcode.fr",
  logo: "https://www.atypikcode.fr/logo.png",
  description:
    "Développeur web freelance spécialisé dans la création de sites web pour entreprises et professionnels en Haute-Savoie",
  founder: {
    "@type": "Person",
    name: "Florian Barjon",
    jobTitle: "Développeur Web Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Roche-sur-Foron",
    postalCode: "74800",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33683062632",
    contactType: "customer service",
    availableLanguage: "French",
    areaServed: "FR",
  },
  sameAs: [
    "https://www.linkedin.com/in/florian-barjon-497a27324/",
    "https://github.com/flowxt",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Atypik Code",
  image: "https://www.atypikcode.fr/logo.png",
  description:
    "Développeur web freelance - Création de sites vitrines professionnels en Next.js à partir de 1 000€ en Haute-Savoie",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Roche-sur-Foron",
    postalCode: "74800",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.0667,
    longitude: 6.3167,
  },
  url: "https://www.atypikcode.fr",
  telephone: "+33683062632",
  email: "floriandev74@gmail.com",
  priceRange: "1000€ - 1900€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 46.0667,
      longitude: 6.3167,
    },
    geoRadius: "50000",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "20",
    bestRating: "5",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Atypik Code",
  url: "https://www.atypikcode.fr",
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: "Atypik Code",
    url: "https://www.atypikcode.fr",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création de sites vitrines professionnels",
  description:
    "Création de sites vitrines Next.js optimisés SEO pour entreprises et indépendants en Haute-Savoie. À partir de 1 000€.",
  provider: {
    "@type": "ProfessionalService",
    name: "Atypik Code",
    url: "https://www.atypikcode.fr",
  },
  areaServed: {
    "@type": "Place",
    name: "Haute-Savoie, France",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "1000",
    highPrice: "1900",
    offerCount: "3",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Formules site vitrine",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Site Vitrine Essentiel",
          description: "Site vitrine 1 à 3 pages, design responsive, SEO de base, formulaire de contact",
        },
        price: "1000",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Site Vitrine Pro",
          description: "Site vitrine jusqu'à 5 pages, design premium, SEO avancé, animations, analytics",
        },
        price: "1500",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Site Vitrine Premium",
          description: "Site vitrine 5+ pages, design haut de gamme, multilingue ou réservation, maintenance 6 mois incluse",
        },
        price: "1900",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce et Applications sur mesure",
          description: "Solution e-commerce, application web ou outil métier 100% personnalisé",
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

      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className} bg-[#0A0A0F] text-white min-h-screen`}
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

        {/* Schema.org structured data - inline pour indexation SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <BackgroundEffects />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppButton />
        <SummerPromoModal />
        <Analytics />
      </body>
    </html>
  );
}
