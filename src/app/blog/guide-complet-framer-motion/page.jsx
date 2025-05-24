import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: 'Guide Complet Framer Motion React 2024 | Animations Web Modernes - Atypik Code',
  description: 'Maîtrisez Framer Motion pour React : guide complet avec exemples pratiques, AnimatePresence, hooks avancés et meilleures pratiques pour des animations fluides.',
  keywords: 'framer motion, framer-motion, animation react, animatepresence, motion framer, framer motion animate, framer motion path',
  openGraph: {
    title: 'Guide Complet Framer Motion React 2024 | Animations Web Modernes',
    description: 'Tout savoir sur Framer Motion : du débutant à l\'expert avec exemples pratiques et cas d\'usage.',
    type: 'article',
  },
}

export default function GuideCompletFramerMotion() {
  return (
    <main className="pt-24">
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* En-tête de l'article */}
          <header className="mb-12">
            <div className="text-purple-400 font-medium mb-4">
              📅 Publié le 15 décembre 2024 • ⏱️ 12 min de lecture
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Guide Complet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Framer Motion
              </span>{" "}
              pour React
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Découvrez comment créer des animations web fluides et performantes avec Framer Motion. 
              De l'installation aux techniques avancées, ce guide vous donnera toutes les clés pour 
              maîtriser cette bibliothèque d'animation incontournable.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Framer Motion', 'React', 'Animation', 'Performance', 'Tutorial'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Table des matières */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">📋 Table des matières</h2>
            <nav className="space-y-2">
              {[
                { title: "1. Introduction à Framer Motion", anchor: "#introduction" },
                { title: "2. Installation et configuration", anchor: "#installation" },
                { title: "3. Animations de base avec motion", anchor: "#animations-base" },
                { title: "4. AnimatePresence : gérer les animations d'entrée/sortie", anchor: "#animate-presence" },
                { title: "5. Hooks avancés et contrôle d'animations", anchor: "#hooks-avances" },
                { title: "6. Animations de path SVG", anchor: "#svg-path" },
                { title: "7. Optimisation des performances", anchor: "#optimisation" },
                { title: "8. Cas d'usage concrets et exemples", anchor: "#exemples" },
                { title: "9. Meilleures pratiques", anchor: "#meilleures-pratiques" }
              ].map(item => (
                <a key={item.anchor} href={item.anchor} className="block text-gray-300 hover:text-purple-400 transition-colors">
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contenu de l'article */}
          <div className="blog-content">
            
            <section id="introduction" className="mb-16">
              <h2>🚀 Introduction à Framer Motion</h2>
              
              <p>
                <strong>Framer Motion</strong> est une bibliothèque d'animation pour React qui simplifie la création 
                d'animations fluides et performantes. Développée par l'équipe Framer, elle offre une API intuitive 
                qui permet de créer des interfaces utilisateur dynamiques sans sacrifier les performances.
              </p>

              <h3>Pourquoi choisir Framer Motion ?</h3>
              
              <ul>
                <li><strong>API déclarative</strong> : Définissez vos animations directement dans le JSX</li>
                <li><strong>Performances optimisées</strong> : Utilise le GPU pour des animations fluides</li>
                <li><strong>Gestes tactiles</strong> : Support natif du drag & drop et des gestes</li>
                <li><strong>AnimatePresence</strong> : Gérez facilement les animations d'entrée/sortie</li>
                <li><strong>Écosystème React</strong> : Intégration parfaite avec les hooks et le state</li>
              </ul>

              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 my-8">
                <h4 className="text-blue-400 font-bold mb-2">💡 Le saviez-vous ?</h4>
                <p className="text-gray-300 mb-0">
                  Framer Motion est utilisé par des entreprises comme Stripe, Coinbase, et bien sûr Framer. 
                  Sa popularité vient de sa capacité à créer des animations complexes avec un code minimal.
                </p>
              </div>
            </section>

            <section id="installation" className="mb-16">
              <h2>📦 Installation et configuration</h2>
              
              <h3>Installation via npm ou yarn</h3>
              
              <pre><code>{`# Avec npm
npm install framer-motion

# Avec yarn  
yarn add framer-motion

# Avec pnpm
pnpm add framer-motion`}</code></pre>

              <h3>Configuration avec Next.js</h3>
              
              <p>
                Si vous utilisez Next.js (comme nous le recommandons chez Atypik Code), 
                vous pouvez utiliser Framer Motion directement sans configuration supplémentaire.
              </p>

              <pre><code>{`// components/AnimatedComponent.jsx
"use client" // Important pour Next.js 13+

import { motion } from 'framer-motion'

export default function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello Framer Motion !
    </motion.div>
  )
}`}</code></pre>
            </section>

            <section id="animations-base" className="mb-16">
              <h2>🎨 Animations de base avec motion</h2>
              
              <h3>Le composant motion</h3>
              
              <p>
                Tous les éléments HTML peuvent être animés en les préfixant avec <code>motion.</code> :
              </p>

              <pre><code>{`import { motion } from 'framer-motion'

// Div animée
<motion.div />

// Bouton animé  
<motion.button />

// Image animée
<motion.img />

// SVG animé
<motion.svg />`}</code></pre>

              <h3>Propriétés fondamentales</h3>
              
              <ul>
                <li><strong>initial</strong> : État initial de l'animation</li>
                <li><strong>animate</strong> : État final de l'animation</li>
                <li><strong>transition</strong> : Configuration de la transition</li>
                <li><strong>exit</strong> : Animation de sortie (avec AnimatePresence)</li>
              </ul>

              <h3>Exemple : Bouton avec hover</h3>
              
              <pre><code>{`function AnimatedButton() {
  return (
    <motion.button
      className="px-6 py-3 bg-purple-600 text-white rounded-lg"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      Cliquez-moi !
    </motion.button>
  )
}`}</code></pre>
            </section>

            <section id="animate-presence" className="mb-16">
              <h2>🎭 AnimatePresence : gérer les animations d'entrée/sortie</h2>
              
              <p>
                <code>AnimatePresence</code> permet d'animer les composants qui apparaissent et disparaissent du DOM. 
                C'est essentiel pour les modales, les notifications, ou tout contenu conditionnel.
              </p>

              <h3>Exemple : Modal animée</h3>
              
              <pre><code>{`import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function AnimatedModal() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Ouvrir la modal
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white p-8 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Modal animée</h2>
              <p>Contenu de la modal avec Framer Motion</p>
              <button onClick={() => setIsOpen(false)}>
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}`}</code></pre>

              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6 my-8">
                <h4 className="text-yellow-400 font-bold mb-2">⚠️ Point important</h4>
                <p className="text-gray-300 mb-0">
                  <code>AnimatePresence</code> doit envelopper les éléments conditionnels, pas l'élément animé lui-même. 
                  Les enfants directs doivent avoir une prop <code>key</code> unique.
                </p>
              </div>
            </section>

            <section id="hooks-avances" className="mb-16">
              <h2>🎯 Hooks avancés et contrôle d'animations</h2>
              
              <h3>useAnimation() : Contrôle programmatique</h3>
              
              <pre><code>{`import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

function ControlledAnimation() {
  const controls = useAnimation()
  
  useEffect(() => {
    // Séquence d'animations
    const sequence = async () => {
      await controls.start({ x: 100 })
      await controls.start({ y: 100 })
      await controls.start({ x: 0, y: 0 })
    }
    
    sequence()
  }, [controls])
  
  return (
    <motion.div
      animate={controls}
      className="w-20 h-20 bg-purple-500 rounded-lg"
    />
  )
}`}</code></pre>

              <h3>useInView() : Animations au scroll</h3>
              
              <pre><code>{`import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function ScrollAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="p-8 bg-gray-800 rounded-xl"
    >
      <h3>Animation au scroll</h3>
      <p>Ce contenu s'anime quand il devient visible</p>
    </motion.div>
  )
}`}</code></pre>
            </section>

            <section id="svg-path" className="mb-16">
              <h2>🎨 Animations de path SVG</h2>
              
              <p>
                Une des fonctionnalités les plus impressionnantes de Framer Motion est la capacité 
                d'animer les chemins SVG avec <code>pathLength</code>.
              </p>

              <pre><code>{`function AnimatedSVG() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#8B5CF6"
        strokeWidth="4"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  )
}`}</code></pre>

              <h3>Exemple avancé : Logo animé</h3>
              
              <pre><code>{`function AnimatedLogo() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      }
    }
  }

  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M 50 100 L 150 100"
        stroke="#8B5CF6"
        strokeWidth="4"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M 100 50 L 100 150"
        stroke="#8B5CF6"
        strokeWidth="4"
        variants={draw}
        custom={1}
      />
    </motion.svg>
  )
}`}</code></pre>
            </section>

            <section id="optimisation" className="mb-16">
              <h2>⚡ Optimisation des performances</h2>
              
              <h3>Propriétés GPU-accélérées</h3>
              
              <p>Pour des performances optimales, privilégiez ces propriétés :</p>
              
              <ul>
                <li><code>x, y</code> au lieu de <code>left, top</code></li>
                <li><code>scale</code> au lieu de <code>width, height</code></li>
                <li><code>rotate</code> au lieu de transformations CSS</li>
                <li><code>opacity</code> pour les fondus</li>
              </ul>

              <h3>Layout animations avec layoutId</h3>
              
              <pre><code>{`function SharedLayoutAnimation() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <motion.div
      layout
      layoutId="expandable-card"
      className={isExpanded ? "large-card" : "small-card"}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.h2 layout="position">Titre</motion.h2>
      {isExpanded && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Contenu additionnel
        </motion.p>
      )}
    </motion.div>
  )
}`}</code></pre>

              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 my-8">
                <h4 className="text-green-400 font-bold mb-2">🚀 Astuce performance</h4>
                <p className="text-gray-300 mb-0">
                  Utilisez <code>will-change: transform</code> en CSS pour préparer le GPU, 
                  et <code>transform3d(0,0,0)</code> pour forcer l'accélération matérielle sur les anciens navigateurs.
                </p>
              </div>
            </section>

            <section id="exemples" className="mb-16">
              <h2>💼 Cas d'usage concrets</h2>
              
              <h3>1. Menu hamburger animé</h3>
              
              <pre><code>{`function AnimatedHamburger({ isOpen, toggle }) {
  const topVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  }
  
  const centerVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  }
  
  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  }
  
  return (
    <button onClick={toggle} className="flex flex-col w-8 h-8 justify-center">
      <motion.span
        className="w-8 h-1 bg-white mb-1"
        variants={topVariants}
        animate={isOpen ? "open" : "closed"}
      />
      <motion.span
        className="w-8 h-1 bg-white mb-1"
        variants={centerVariants}
        animate={isOpen ? "open" : "closed"}
      />
      <motion.span
        className="w-8 h-1 bg-white"
        variants={bottomVariants}
        animate={isOpen ? "open" : "closed"}
      />
    </button>
  )
}`}</code></pre>

              <h3>2. Carrousel d'images fluide</h3>
              
              <pre><code>{`function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0)
  
  return (
    <div className="relative overflow-hidden w-full h-96">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={\`w-3 h-3 mx-1 rounded-full \${
              current === index ? 'bg-white' : 'bg-white/50'
            }\`}
          />
        ))}
      </div>
    </div>
  )
}`}</code></pre>
            </section>

            <section id="meilleures-pratiques" className="mb-16">
              <h2>✅ Meilleures pratiques</h2>
              
              <h3>1. Gérez l'accessibilité</h3>
              
                             <pre><code>{`// Respectez les préférences utilisateur
const prefersReducedMotion = useReducedMotion()

<motion.div
  animate={{ 
    x: prefersReducedMotion ? 0 : 100 
  }}
  transition={{ 
    duration: prefersReducedMotion ? 0 : 0.5 
  }}
/>`}</code></pre>

              <h3>2. Utilisez des variants pour la réutilisabilité</h3>
              
              <pre><code>{`const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

// Réutilisable sur plusieurs composants
<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Contenu animé
</motion.div>`}</code></pre>

              <h3>3. Optimisez les re-renders</h3>
              
              <ul>
                <li>Utilisez <code>useMemo</code> pour les objets de transition complexes</li>
                <li>Évitez les animations inline dans le render</li>
                <li>Préférez les variants aux objets inline</li>
                <li>Utilisez <code>layout</code> avec parcimonie</li>
              </ul>

              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6 my-8">
                <h4 className="text-purple-400 font-bold mb-2">🎨 Notre approche chez Atypik Code</h4>
                <p className="text-gray-300 mb-0">
                  Nous intégrons Framer Motion dans tous nos projets Next.js pour créer des expériences utilisateur 
                  mémorables. L'animation n'est pas juste décorative, elle guide l'utilisateur et améliore l'UX.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2>🎓 Conclusion</h2>
              
              <p>
                <strong>Framer Motion</strong> est un outil puissant qui transforme la façon dont nous créons 
                des interfaces React. Avec une API intuitive et des performances optimisées, il permet de créer 
                des animations de qualité professionnelle sans complexité excessive.
              </p>
              
              <p>
                Les points clés à retenir :
              </p>
              
              <ul>
                <li>Commencez simple avec les props <code>initial</code>, <code>animate</code> et <code>transition</code></li>
                <li>Utilisez <code>AnimatePresence</code> pour les animations d'entrée/sortie</li>
                <li>Exploitez les hooks comme <code>useInView</code> et <code>useAnimation</code> pour des cas avancés</li>
                <li>Optimisez les performances avec les propriétés GPU-accélérées</li>
                <li>Respectez l'accessibilité avec <code>useReducedMotion</code></li>
              </ul>
              
              <p>
                Chez <strong>Atypik Code</strong>, nous utilisons Framer Motion pour tous nos projets web 
                en Haute-Savoie, créant des expériences utilisateur modernes et engageantes.
              </p>
            </section>
          </div>

          {/* CTA et liens connexes */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-white/10 mb-12">
            <h3 className="text-2xl font-bold mb-4">Besoin d'un site avec des animations professionnelles ?</h3>
            <p className="text-gray-300 mb-6">
              Nous créons des sites web modernes avec Framer Motion pour les entreprises en Haute-Savoie. 
              Animations fluides, performances optimisées et design sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-full font-semibold text-center hover:shadow-lg transition-all"
              >
                Discutons de votre projet
              </Link>
              <Link 
                href="/services" 
                className="border border-purple-500 text-purple-400 py-3 px-6 rounded-full font-semibold text-center hover:bg-purple-500/10 transition-all"
              >
                Voir nos services
              </Link>
            </div>
          </div>

          {/* Articles connexes */}
          <div className="border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold mb-6">Articles connexes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/optimiser-performances-nextjs" className="block p-6 bg-gray-800/50 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
                <h4 className="text-xl font-bold mb-2">Optimiser les performances Next.js</h4>
                <p className="text-gray-300">Techniques avancées pour des sites ultra-rapides</p>
              </Link>
              <Link href="/blog/avantages-tailwind-css" className="block p-6 bg-gray-800/50 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
                <h4 className="text-xl font-bold mb-2">Pourquoi choisir Tailwind CSS</h4>
                <p className="text-gray-300">Les avantages du CSS utility-first</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
} 