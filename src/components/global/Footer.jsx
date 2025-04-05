export default function Footer() {
  return (
    <footer className="relative z-10 py-16 px-6 md:px-16 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Atypik Code
            </h2>
            <p className="text-gray-400 mb-4">Création de sites web et landing pages professionnels en Haute-Savoie. Expert développeur React et Next.js.</p>
            <p className="text-gray-400">74800 Haute-Savoie, France</p>
            <p className="text-gray-400 mb-4">Email: <a href="mailto:floriandev74@gmail.com" className="hover:text-purple-400 transition-colors">floriandev74@gmail.com</a></p>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Création de sites web</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Landing pages</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Applications React/Next.js</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Optimisation SEO</a></li>
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-white">Liens rapides</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="/" className="text-gray-400 hover:text-purple-400 transition-colors">Accueil</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
            
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/florian-barjon-497a27324/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-all" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com/flowxt" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all" aria-label="GitHub">
                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-all" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-10 border-t border-white/5 text-center">
          <p className="text-gray-500 mb-3">© 2025 <a href="https://www.atypikcode.fr" className="hover:text-purple-400">Atypik Code</a> - Tous droits réservés | <span className="hidden sm:inline">Développeur web freelance en</span> Haute-Savoie</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://portfolio-florian-rose.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-400 hover:text-purple-300 transition-all">
              Voir mon portfolio
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a href="/sitemap.xml" className="text-sm text-gray-500 hover:text-gray-400 transition-all">Sitemap</a>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Création de site web et Landing page en Haute-Savoie, Annecy, Annemasse et toute la France
          </p>
        </div>
      </div>
    </footer>
  )
}