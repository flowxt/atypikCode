import CTA from "@/components/global/CTA";
import BookingCalendar from "@/components/services/BookingCalendar";
import Link from "next/link";
import { packs, monthlyMaintenance } from "@/data/packs";

export const metadata = {
  title: "Services | Site Vitrine à partir de 1 000€ - Atypik Code",
  description:
    "Création de sites vitrines professionnels en Next.js, à partir de 1 000€ en Haute-Savoie. 3 formules claires : Essentiel 1 000€, Pro 1 500€, Premium 1 900€. Devis gratuit en 24h.",
  keywords:
    "création site vitrine, site internet pas cher, tarif site web, site vitrine 1000 euros, développeur web haute-savoie, site internet professionnel, devis site web",
  alternates: {
    canonical: "https://www.atypikcode.fr/services",
  },
  openGraph: {
    title: "Services | Site Vitrine à partir de 1 000€ - Atypik Code",
    description:
      "Site vitrine pro à partir de 1 000€. 3 formules claires (Essentiel, Pro, Premium) + sur-mesure. Devis gratuit en 24h.",
    type: "website",
  },
};

export default function Services() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Un site vitrine pro{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              à partir de 1 000€
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologie Next.js — la même que Netflix ou Uber — pour un site
            plus rapide et mieux référencé que celui de vos concurrents.
            Tarifs transparents, devis gratuit en 24h.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packs.map((service) => (
              <div
                key={service.id}
                className={`relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border ${
                  service.popular ? 'border-blue-500/40 lg:-mt-4 lg:-mb-4' : 'border-white/5'
                } overflow-hidden flex flex-col`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-2 text-center">
                    <span className="text-white text-sm font-medium">⭐ Le plus choisi</span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{service.tagline}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1`}>
                    {service.priceLabel}
                  </div>
                  <p className="text-xs text-gray-500 mb-5">Livraison : {service.delivery}</p>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-green-400 mr-2.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="#booking">
                    <button className={`w-full py-3 px-6 rounded-full font-medium text-sm transition-all ${
                      service.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}>
                      Demander un devis
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Note sur les frais */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-gray-900 border border-white/5 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-gray-300 text-sm">
                Maintenance & hébergement en option : <span className="text-white font-medium">{monthlyMaintenance}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section réservation */}
      <section id="booking" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 font-medium mb-4 tracking-wide uppercase text-sm">
              Réservation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prenez rendez-vous
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Un appel de 30 minutes pour discuter de votre projet. Réponse garantie sous 24h.
            </p>
          </div>

          <BookingCalendar />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <CTA
            title="Une question ?"
            description="Je réponds à toutes vos questions par email ou WhatsApp sous 24h."
            buttonText="Me contacter"
            buttonLink="/contact"
          />
        </div>
      </section>
    </main>
  );
}
