import CTA from "@/components/global/CTA";
import BookingCalendar from "@/components/services/BookingCalendar";
import Link from "next/link";

export const metadata = {
  title: "Services | Création de Sites Web - Atypik Code",
  description:
    "Création de sites web professionnels en Haute-Savoie. Landing page 750€, Site vitrine 1600€, E-commerce à partir de 2200€. Devis gratuit.",
  keywords:
    "création site web, landing page, site vitrine, e-commerce, développeur web haute-savoie",
  alternates: {
    canonical: "https://www.atypikcode.fr/services",
  },
};

const services = [
  {
    id: "landing-page",
    title: "Landing Page",
    price: "750€",
    description: "Une page unique optimisée pour convertir vos visiteurs en clients.",
    features: [
      "Design sur mesure",
      "Formulaire de contact",
      "Optimisation SEO",
      "Responsive mobile",
      "Livraison en 7 jours"
    ],
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "site-vitrine",
    title: "Site Vitrine",
    price: "1600€",
    description: "Un site professionnel multi-pages pour établir votre présence en ligne.",
    features: [
      "Site multi-pages",
      "Blog intégré",
      "Optimisation SEO avancée",
      "Responsive toutes tailles",
      "Livraison en 2-3 semaines"
    ],
    popular: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    price: "À partir de 2200€",
    description: "Une boutique en ligne complète pour vendre vos produits.",
    features: [
      "Boutique complète",
      "Paiements sécurisés",
      "Gestion des stocks",
      "Tableau de bord",
      "Livraison en 3-4 semaines"
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
            Des sites web qui vous ressemblent
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choisissez la formule adaptée à votre projet. 
            Chaque site est unique et conçu spécifiquement pour votre activité.
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
                    <span className="text-white text-sm font-medium">Recommandé</span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
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
                Frais d&apos;hébergement et maintenance : <span className="text-white font-medium">25 à 50€/mois</span> selon les options
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
              Un appel de 30 minutes pour discuter de votre projet et définir vos besoins.
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
            description="Je réponds à toutes vos questions par email ou WhatsApp."
            buttonText="Me contacter"
            buttonLink="/contact"
          />
        </div>
      </section>
    </main>
  );
}
