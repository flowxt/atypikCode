export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-20 bg-gradient-to-b from-transparent to-purple-950/10">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marque */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Atypik Code
            </h2>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Sites web ultra-performants en Next.js. Conçus pour Google et la conversion.
            </p>
            <p className="text-gray-500 text-sm">74800 Haute-Savoie, France</p>
            <a href="mailto:floriandev74@gmail.com" className="text-gray-500 text-sm hover:text-purple-400 transition-colors">
              floriandev74@gmail.com
            </a>

            <div className="flex gap-3 mt-6">
              <a href="https://www.linkedin.com/in/florian-barjon-497a27324/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-white/10 hover:border-purple-500/40 hover:bg-white/5 transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 text-gray-400 hover:text-white transition-all" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com/flowxt" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-white/10 hover:border-purple-500/40 hover:bg-white/5 transition-all" aria-label="GitHub">
                <svg className="w-4 h-4 text-gray-400 hover:text-white transition-all" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Site Vitrine Essentiel — 1 000€</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Site Vitrine Pro — 1 500€</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Site Vitrine Premium — 1 900€</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">E-commerce & Apps — Sur devis</a></li>
            </ul>
            <h3 className="text-sm font-semibold mb-4 mt-8 text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-purple-400 transition-colors">Accueil</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Solutions métiers */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Solutions métiers</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/artisans" className="text-gray-400 hover:text-purple-400 transition-colors">Sites pour Artisans</a></li>
              <li><a href="/bien-etre" className="text-gray-400 hover:text-purple-400 transition-colors">Sites Bien-être</a></li>
              <li><a href="/informatique" className="text-gray-400 hover:text-purple-400 transition-colors">Dépannage informatique</a></li>
            </ul>
            <h3 className="text-sm font-semibold mb-4 mt-8 text-white uppercase tracking-wider">Ressources</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://portfolio-florian-rose.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Portfolio complet
                </a>
              </li>
              <li><a href="/blog/tarifs-developpement-web-haute-savoie" className="text-gray-400 hover:text-purple-400 transition-colors">Guide des tarifs 2025</a></li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Zones d&apos;intervention</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/developpement-web-la-roche-sur-foron" className="text-gray-400 hover:text-purple-400 transition-colors">La Roche-sur-Foron</a></li>
              <li><a href="/creation-site-internet-annecy" className="text-gray-400 hover:text-purple-400 transition-colors">Annecy</a></li>
              <li><a href="/creation-site-internet-bonneville" className="text-gray-400 hover:text-purple-400 transition-colors">Bonneville</a></li>
              <li><a href="/creation-site-internet-annemasse" className="text-gray-400 hover:text-purple-400 transition-colors">Annemasse</a></li>
              <li><a href="/creation-site-internet-thonon-les-bains" className="text-gray-400 hover:text-purple-400 transition-colors">Thonon-les-Bains</a></li>
              <li><a href="/creation-site-internet-cluses" className="text-gray-400 hover:text-purple-400 transition-colors">Cluses</a></li>
              <li><a href="/creation-site-internet-geneve" className="text-gray-400 hover:text-purple-400 transition-colors">Genève</a></li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <a href="https://www.atypikcode.fr" className="hover:text-purple-400 transition-colors">Atypik Code</a> — Tous droits réservés
          </p>
          <p className="text-xs text-gray-600 text-center md:text-right max-w-md">
            Création de site internet en Haute-Savoie : La Roche-sur-Foron, Annecy, Bonneville, Annemasse, Thonon-les-Bains, Cluses et Genève
          </p>
        </div>
      </div>
    </footer>
  )
}
