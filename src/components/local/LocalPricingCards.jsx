import Link from 'next/link'
import { packs } from '@/data/packs'

/**
 * Cartes tarifaires réutilisables pour les pages locales (Annecy, Annemasse, etc.)
 * Optionnel : `localContext` permet de personnaliser légèrement les descriptions
 * pour évoquer la ville (ex: "à Annecy", "dans la vallée de l'Arve").
 */
export default function LocalPricingCards({ localContext = '' }) {
  const contextSuffix = localContext ? ` ${localContext}` : ''

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {packs.map((pack) => (
        <div
          key={pack.id}
          className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-7 rounded-2xl flex flex-col transition-all ${
            pack.popular
              ? 'border border-blue-500/40 hover:border-blue-500/60 lg:-mt-4 lg:-mb-4'
              : 'border border-white/10 hover:border-purple-500/30'
          }`}
        >
          {pack.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
              ⭐ Le plus choisi
            </div>
          )}

          <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
            {pack.tagline}
          </div>
          <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
          <div className={`text-2xl font-bold bg-gradient-to-r ${pack.color} bg-clip-text text-transparent mb-1`}>
            {pack.priceLabel}
          </div>
          <p className="text-xs text-gray-500 mb-4">Livraison : {pack.delivery}</p>

          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            {pack.description}
            {contextSuffix && pack.id !== 'sur-mesure' ? ` Adapté à votre activité${contextSuffix}.` : ''}
          </p>

          <ul className="space-y-2.5 flex-grow mb-6">
            {pack.features.map((feature) => (
              <li key={feature} className="flex items-start text-gray-300 text-sm">
                <svg className="w-4 h-4 text-green-400 mr-2.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={`block text-center py-3 px-6 rounded-full font-medium text-sm transition-all ${
              pack.popular
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90'
                : 'border border-purple-500/50 text-purple-400 hover:bg-purple-500/10'
            }`}
          >
            Demander un devis
          </Link>
        </div>
      ))}
    </div>
  )
}
