import CTA from "@/components/global/CTA";
import BookingCalendar from "@/components/services/BookingCalendar";
import Link from "next/link";

export const metadata = {
  title: "Services | Sites Web Ultra-Performants - Atypik Code",
  description:
    "Création de sites web Next.js ultra-rapides en Haute-Savoie. Landing page à partir de 950€, Site Business 1900€, E-commerce sur devis. Devis gratuit en 24h.",
  keywords:
    "création site web next.js, landing page performante, site vitrine professionnel, e-commerce, développeur web haute-savoie, tarif site internet",
  alternates: {
    canonical: "https://www.atypikcode.fr/services",
  },
  openGraph: {
    title: "Services | Sites Web Ultra-Performants - Atypik Code",
    description: "Landing page 950€, Site Business 1900€, E-commerce sur devis. Devis gratuit en 24h.",
    type: "website",
  },
};

const services = [
  {
    id: "landing-page",
    title: "L'Essentiel",
    subtitle: "Landing Page",
    price: "À partir de 950€",
    description: "Idéal pour lancer une offre ou capturer des leads. Une page unique optimisée pour la conversion.",
    features: [
      "Page unique optimisée conversion",
      "Design sur-mesure Next.js",
      "Responsive mobile parfait",
      "Optimisation SEO de base",
      "Formulaire de contact intégré",
    ],
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "site-business",
    title: "Site Business",
    subtitle: "Vitrine complète",
    price: "À partir de 1 900€",
    description: "Une présence complète pour asseoir votre crédibilité et convertir vos visiteurs.",
    features: [
      "Jusqu'à 5 pages sur-mesure",
      "Technologie Next.js ultra-rapide",
      "Design premium personnalisé",
      "Référencement SEO avancé",
      "Formulaire + intégrations",
      "Analytics & suivi conversions"
    ],
    popular: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "sur-mesure",
    title: "Sur Mesure",
    subtitle: "E-commerce & Apps",
    price: "Sur devis",
    description: "Pour les projets ambitieux qui veulent se démarquer avec une solution 100% personnalisée.",
    features: [
      "Solution e-commerce complète",
      "Application web sur-mesure",
      "Fonctionnalités avancées",
      "Performance maximale",
      "Accompagnement dédié",
      "Architecture scalable",
      "Support prioritaire"
    ],
    color: "from-emerald-500 to-teal-600"
  }
];

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
            Des sites conçus pour convertir
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologie Next.js — la même que Netflix ou Uber — pour un site 
            plus rapide et mieux référencé que celui de vos concurrents.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border ${
                  service.popular ? 'border-blue-500/30 md:-mt-4 md:-mb-4' : 'border-white/5'
                } overflow-hidden`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-2 text-center">
                    <span className="text-white text-sm font-medium">Le plus choisi</span>
                  </div>
                )}
                
                <div className="p-8">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">{service.subtitle}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                    {service.price}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Frais d&apos;hébergement et maintenance : <span className="text-white font-medium">50 à 150€/mois</span> selon les options
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
