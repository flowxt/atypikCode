import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Données des articles
const blogPosts = [
  {
    id: 1,
    title: "Comment optimiser les performances de votre site Next.js",
    excerpt:
      "Découvrez les meilleures pratiques pour améliorer la vitesse et les performances de votre application Next.js.",
    date: "6 avril 2025",
    image: "/image/blog/next-blog.png",
    category: "Next.js",
    slug: "optimiser-performances-nextjs",
    content: `
      <h2>Introduction à l'optimisation de performance dans Next.js 15</h2>
      <p>L'optimisation des performances est cruciale pour offrir une expérience utilisateur fluide et agréable. Next.js 15, la dernière version majeure du framework, introduit des améliorations significatives en termes de performances et propose des outils avancés pour optimiser votre application.</p>
      
      <h2>Utiliser le nouveau composant Image</h2>
      <p>Next.js 15 a amélioré son composant Image pour offrir des performances encore meilleures :</p>
      <ul>
        <li>Optimisation automatique des images avec WebP et AVIF</li>
        <li>Chargement prioritaire intelligent basé sur le viewport</li>
        <li>Support amélioré pour les images responsive</li>
      </ul>
      <p>Exemple de code avec les nouvelles options :</p>
      <pre><code>import Image from 'next/image'

export default function OptimizedImage() {
  return (
    &lt;Image
      src="/mon-image.jpg"
      alt="Description"
      width={500}
      height={300}
      priority={false}
      fetchPriority="auto"
      sizes="(max-width: 768px) 100vw, 50vw"
    /&gt;
  )
}</code></pre>

      <h2>Tirer profit du React Server Components</h2>
      <p>Next.js 15 utilise pleinement les React Server Components, permettant de réduire significativement la taille du JavaScript côté client :</p>
      <pre><code>// app/page.js - Un Server Component par défaut
export default async function Page() {
  // Cette logique s'exécute uniquement sur le serveur
  const data = await fetch('https://api.example.com/data')
  const products = await data.json()
  
  return (
    &lt;div&gt;
      {products.map(product => (
        &lt;ProductCard key={product.id} product={product} /&gt;
      ))}
    &lt;/div&gt;
  )
}

// Pour les composants qui nécessitent l'interactivité côté client
'use client'
import { useState } from 'react'

export function InteractiveComponent() {
  const [count, setCount] = useState(0)
  // Ce code s'exécute côté client
}</code></pre>

      <h2>Optimiser les polices avec next/font</h2>
      <p>Next.js 15 a amélioré le système de gestion des polices pour une expérience encore plus performante :</p>
      <pre><code>import { Inter, Roboto } from 'next/font/google'

// Chargement optimisé de plusieurs polices
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Layout({ children }) {
  return (
    &lt;html lang="fr" className={inter.className}&gt;
      &lt;body&gt;
        &lt;h1 className={roboto.className}&gt;Titre en Roboto&lt;/h1&gt;
        {children}
      &lt;/body&gt;
    &lt;/html&gt;
  )
}</code></pre>

      <h2>Nouvelles stratégies de mise en cache dans Next.js 15</h2>
      <p>Next.js 15 propose un système de cache plus intelligent et plus flexible :</p>
      <pre><code>// Exemple de fetch avec options de cache avancées
async function getData() {
  const res = await fetch('https://api.example.com/data', { 
    next: { 
      revalidate: 3600,  // Revalider toutes les heures
      tags: ['products'], // Utiliser des tags pour invalider le cache
    }
  })
  
  if (!res.ok) {
    throw new Error('Échec de la récupération des données')
  }
  
  return res.json()
}

// Invalider manuellement le cache avec les tags
import { revalidateTag } from 'next/cache'

export async function POST(request) {
  // Traitement de la requête
  revalidateTag('products')
  return Response.json({ revalidated: true, now: Date.now() })
}</code></pre>

      <h2>Utiliser l'App Router pour des performances optimales</h2>
      <p>Next.js 15 a perfectionné l'App Router avec de nouvelles fonctionnalités pour améliorer les performances :</p>
      <ul>
        <li>Parallel Routes pour charger simultanément plusieurs sections</li>
        <li>Intercepting Routes pour des transitions fluides</li>
        <li>Partial Rendering pour ne mettre à jour que les parties nécessaires</li>
      </ul>
      
      <h2>Analyser les performances avec le nouveau Dashboard</h2>
      <p>Next.js 15 inclut un tableau de bord de performance intégré pour surveiller et améliorer les métriques clés :</p>
      <ul>
        <li>Core Web Vitals automatiquement mesurés</li>
        <li>Analyse des bundles JavaScript</li>
        <li>Monitoring des Server Components vs Client Components</li>
        <li>Détection des problèmes de performance en temps réel</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Next.js 15 apporte des améliorations significatives en termes de performance et d'expérience développeur. En utilisant les Server Components, les nouvelles stratégies de cache, et l'App Router optimisé, vous pouvez créer des applications web plus rapides et plus réactives. Le nouveau système d'analyse de performance intégré vous aide également à identifier et résoudre les problèmes avant qu'ils n'affectent vos utilisateurs.</p>
    `,
  },
  {
    id: 2,
    title: "Les avantages de Tailwind CSS pour vos projets",
    excerpt:
      "Pourquoi Tailwind CSS est devenu si populaire et comment l'utiliser efficacement dans vos projets web.",
    date: "2 Avril 2025",
    image: "/image/blog/tailwind.png",
    category: "CSS",
    slug: "avantages-tailwind-css",
    content: `
      <h2>Pourquoi Tailwind CSS gagne en popularité</h2>
      <p>Tailwind CSS a révolutionné la façon dont les développeurs front-end abordent le style de leurs applications. Contrairement aux frameworks CSS traditionnels comme Bootstrap, Tailwind adopte une approche "utility-first" qui offre une flexibilité sans précédent.</p>
      
      <h2>Les principaux avantages de Tailwind CSS</h2>
      
      <h3>1. Développement rapide</h3>
      <p>Avec Tailwind, vous n'avez plus besoin de passer d'un fichier CSS à un autre. Tout se fait directement dans votre HTML/JSX :</p>
      <pre><code>&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
  Cliquez ici
&lt;/button&gt;</code></pre>
      
      <h3>2. Personnalisation simplifiée</h3>
      <p>Tailwind est hautement personnalisable via son fichier de configuration :</p>
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#3490dc',
        'brand-light': '#93C5FD',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      }
    }
  }
}</code></pre>
      
      <h3>3. Responsive design intuitif</h3>
      <p>Les classes responsives de Tailwind sont intuitives et faciles à utiliser :</p>
      <pre><code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;
  Contenu responsif
&lt;/div&gt;</code></pre>
      
      <h3>4. Taille de production optimisée</h3>
      <p>Tailwind utilise PurgeCSS pour éliminer toutes les classes inutilisées lors de la build de production, réduisant ainsi considérablement la taille du fichier CSS final.</p>
      
      <h2>Comparaison avec d'autres approches CSS</h2>
      <table border="1">
        <tr>
          <th>Fonctionnalité</th>
          <th>Tailwind CSS</th>
          <th>Bootstrap</th>
          <th>CSS-in-JS</th>
        </tr>
        <tr>
          <td>Taille du bundle</td>
          <td>Petite (après purge)</td>
          <td>Grande</td>
          <td>Varie</td>
        </tr>
        <tr>
          <td>Courbe d'apprentissage</td>
          <td>Moyenne</td>
          <td>Faible</td>
          <td>Élevée</td>
        </tr>
        <tr>
          <td>Personnalisation</td>
          <td>Très élevée</td>
          <td>Moyenne</td>
          <td>Très élevée</td>
        </tr>
        <tr>
          <td>Productivité</td>
          <td>Élevée</td>
          <td>Moyenne</td>
          <td>Moyenne</td>
        </tr>
      </table>
      
      <h2>Comment bien démarrer avec Tailwind CSS</h2>
      <p>Pour intégrer Tailwind à votre projet Next.js :</p>
      <ol>
        <li>Installez les dépendances :
          <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
        </li>
        <li>Configurez les chemins dans tailwind.config.js :
          <pre><code>module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
        </li>
        <li>Ajoutez les directives à votre CSS :
          <pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
        </li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS offre un excellent équilibre entre productivité, personnalisation et performance. Sa popularité croissante témoigne de son efficacité dans le développement web moderne. En adoptant Tailwind, vous gagnerez en rapidité de développement tout en conservant une flexibilité totale sur le design de votre application.</p>
    `,
  },
  {
    id: 3,
    title: "Créer des animations fluides avec Framer Motion",
    excerpt:
      "Guide complet sur l'utilisation de Framer Motion pour ajouter des animations professionnelles à votre site React.",
    date: "6 Avril 2025",
    image: "/image/blog/framer.png",
    category: "Animation",
    slug: "animations-framer-motion",
    content: `
      <h2>Introduction à Framer Motion</h2>
      <p>Framer Motion est une bibliothèque d'animations puissante pour React qui simplifie la création d'interfaces utilisateur dynamiques et interactives. Elle offre une API déclarative qui permet de créer des animations complexes avec un minimum de code.</p>
      
      <h2>Installation et configuration</h2>
      <p>Pour commencer avec Framer Motion dans votre projet React ou Next.js :</p>
      <pre><code>npm install framer-motion</code></pre>
      <p>Importez ensuite les composants nécessaires :</p>
      <pre><code>import { motion } from 'framer-motion';</code></pre>
      
      <h2>Animations de base</h2>
      <p>La façon la plus simple de créer une animation est d'utiliser le composant <code>motion</code> :</p>
      <pre><code>// Animation simple avec fade-in et déplacement
&lt;motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
&gt;
  Hello, animation!
&lt;/motion.div&gt;</code></pre>
      
      <h2>Transitions et variantes</h2>
      <p>Les variantes permettent de définir des états d'animation nommés et de les réutiliser :</p>
      <pre><code>const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

&lt;motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
&gt;
  Animation avec variantes
&lt;/motion.div&gt;</code></pre>
      
      <h2>Animations au défilement (Scroll Animations)</h2>
      <p>Les animations au défilement sont très populaires pour créer des sites web engageants :</p>
      <pre><code>&lt;motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
&gt;
  Je m'affiche quand vous défilez jusqu'à moi!
&lt;/motion.div&gt;</code></pre>
      
      <h2>Animations basées sur les gestes</h2>
      <p>Framer Motion facilite la création d'interactions basées sur les gestes de l'utilisateur :</p>
      <pre><code>&lt;motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
&gt;
  Cliquez-moi
&lt;/motion.button&gt;</code></pre>
      
      <h2>Animations de page avec AnimatePresence</h2>
      <p>Pour les transitions de page ou les animations de composants qui entrent/sortent du DOM :</p>
      <pre><code>import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    &lt;&gt;
      &lt;button onClick={() => setIsVisible(!isVisible)}&gt;
        Toggle
      &lt;/button&gt;
      
      &lt;AnimatePresence&gt;
        {isVisible && (
          &lt;motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          &gt;
            Ce contenu apparaît et disparaît en douceur
          &lt;/motion.div&gt;
        )}
      &lt;/AnimatePresence&gt;
    &lt;/&gt;
  );
}</code></pre>
      
      <h2>Animations avancées avec orchestration</h2>
      <p>Pour des séquences d'animations plus complexes, vous pouvez utiliser les délais et la propagation :</p>
      <pre><code>const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

&lt;motion.ul
  variants={containerVariants}
  initial="hidden"
  animate="visible"
&gt;
  {items.map(item => (
    &lt;motion.li key={item.id} variants={itemVariants}&gt;
      {item.text}
    &lt;/motion.li&gt;
  ))}
&lt;/motion.ul&gt;</code></pre>
      
      <h2>Optimisation des performances</h2>
      <p>Quelques conseils pour garder vos animations fluides :</p>
      <ul>
        <li>Privilégiez les propriétés <code>transform</code> et <code>opacity</code> qui sont moins coûteuses</li>
        <li>Utilisez <code>layout</code> avec parcimonie car il est plus lourd</li>
        <li>Évitez d'animer trop d'éléments simultanément</li>
        <li>Utilisez <code>useReducedMotion</code> pour respecter les préférences d'accessibilité</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Framer Motion offre un équilibre parfait entre simplicité d'utilisation et puissance, ce qui en fait un choix idéal pour ajouter des animations professionnelles à vos projets React. En maîtrisant ses fonctionnalités, vous pourrez créer des expériences utilisateur mémorables qui se démarquent de la concurrence.</p>
    `,
  },
  {
    id: 4,
    title: "Déployer votre site Next.js sur Vercel",
    excerpt:
      "Comment configurer et déployer votre application Next.js sur la plateforme Vercel en quelques étapes simples.",
    date: "2 Avril 2025",
    image: "/image/blog/vercel.jpeg",
    category: "Déploiement",
    slug: "deployer-nextjs-vercel",
    content: `
      <h2>Pourquoi choisir Vercel pour déployer votre application Next.js</h2>
      <p>Vercel est la plateforme créée par l'équipe derrière Next.js, ce qui en fait le choix idéal pour déployer vos applications Next.js. Elle offre une intégration native, des performances optimales et une expérience développeur exceptionnelle.</p>
      
      <h2>Avantages du déploiement sur Vercel</h2>
      <ul>
        <li>Déploiements automatiques à partir de Git</li>
        <li>Prévisualisations pour chaque pull request</li>
        <li>Optimisations spécifiques pour Next.js</li>
        <li>CDN global pour des performances maximales</li>
        <li>Domaines personnalisés et HTTPS automatique</li>
        <li>Fonctionnalités d'analyse et de monitoring intégrées</li>
      </ul>
      
      <h2>Prérequis pour le déploiement</h2>
      <p>Avant de commencer, assurez-vous d'avoir :</p>
      <ol>
        <li>Un compte <a href="https://vercel.com/signup" target="_blank">Vercel</a></li>
        <li>Votre projet Next.js sur GitHub, GitLab ou Bitbucket</li>
        <li>Un projet Next.js fonctionnel en local</li>
      </ol>
      
      <h2>Étapes de déploiement</h2>
      
      <h3>1. Se connecter à Vercel</h3>
      <p>Connectez-vous à Vercel en utilisant votre compte GitHub, GitLab ou Bitbucket pour simplifier l'intégration.</p>
      
      <h3>2. Importer votre projet</h3>
      <p>Une fois connecté :</p>
      <ol>
        <li>Cliquez sur "Add New..." puis "Project"</li>
        <li>Sélectionnez le référentiel contenant votre projet Next.js</li>
        <li>Vercel détectera automatiquement qu'il s'agit d'un projet Next.js</li>
      </ol>
      
      <h3>3. Configurer les variables d'environnement</h3>
      <p>Si votre projet utilise des variables d'environnement (API keys, secrets, etc.) :</p>
      <ol>
        <li>Allez dans l'onglet "Settings" de votre projet</li>
        <li>Sélectionnez "Environment Variables"</li>
        <li>Ajoutez vos variables une par une</li>
        <li>Spécifiez les environnements appropriés (Production, Preview, Development)</li>
      </ol>
      
      <h3>4. Configurer votre domaine personnalisé</h3>
      <p>Pour ajouter votre propre domaine :</p>
      <ol>
        <li>Allez dans l'onglet "Settings" puis "Domains"</li>
        <li>Cliquez sur "Add" et entrez votre nom de domaine</li>
        <li>Suivez les instructions pour configurer vos enregistrements DNS</li>
      </ol>
      
      <h2>Optimisations avancées pour la production</h2>
      
      <h3>Personnalisation avec vercel.json</h3>
      <p>Vous pouvez créer un fichier <code>vercel.json</code> à la racine de votre projet pour des configurations avancées :</p>
      <pre><code>{
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    { "source": "/ancienne-page", "destination": "/nouvelle-page" }
  ]
}</code></pre>
      
      <h3>Analytics et monitoring</h3>
      <p>Activez Vercel Analytics pour surveiller les performances de votre site :</p>
      <pre><code>// Installation de l'outil d'analyse
npm install @vercel/analytics

// Intégration dans _app.js ou layout.js
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    &lt;&gt;
      &lt;Component {...pageProps} /&gt;
      &lt;Analytics /&gt;
    &lt;/&gt;
  );
}</code></pre>
      
      <h2>CI/CD et déploiements automatiques</h2>
      <p>Vercel configure automatiquement une pipeline CI/CD pour votre projet :</p>
      <ul>
        <li>Chaque push sur la branche principale déclenche un déploiement en production</li>
        <li>Chaque pull request crée un environnement de prévisualisation</li>
        <li>Les commentaires sur les PR peuvent inclure des liens vers les prévisualisations</li>
      </ul>
      
      <h2>Bonnes pratiques pour un déploiement réussi</h2>
      <ol>
        <li>Testez toujours votre application localement avant de déployer</li>
        <li>Utilisez <code>next build</code> pour vérifier qu'il n'y a pas d'erreurs de build</li>
        <li>Configurez des tests automatisés dans votre workflow CI</li>
        <li>Utilisez des variables d'environnement pour les secrets et configurations spécifiques à l'environnement</li>
        <li>Profitez des prévisualisations pour vérifier les modifications avant de les fusionner</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Déployer une application Next.js sur Vercel est probablement la façon la plus simple et la plus efficace de mettre votre projet en production. Grâce à son intégration native avec Next.js, ses fonctionnalités de CI/CD et son CDN global, Vercel vous permet de vous concentrer sur le développement tout en offrant une expérience utilisateur optimale.</p>
    `,
  },
  {
    id: 6,
    title:
      "Pourquoi les indépendants ont besoin d'un site web professionnel en 2025",
    excerpt:
      "Découvrez pourquoi posséder un site web est devenu indispensable pour les artisans, thérapeutes et autres indépendants qui veulent se démarquer et attirer des clients locaux.",
    date: "12 avril 2025",
    image: "/image/entrepreneur.jpg",
    category: "Stratégie Web",
    slug: "pourquoi-site-web-independants-2025",
    content: `
      <h1>Pourquoi les indépendants ont besoin d'un site web professionnel en 2025 (artisans, thérapeutes, food trucks…)</h1>
      
      <p>À l'ère du numérique, posséder simplement une page Facebook ou un compte Instagram ne suffit plus pour se démarquer en tant qu'indépendant. Les consommateurs d'aujourd'hui recherchent activement des services locaux via Google, et un site web professionnel est devenu la pierre angulaire d'une présence en ligne crédible. Que vous soyez artisan, thérapeute, restaurateur ambulant ou tout autre travailleur indépendant, un site web bien conçu représente l'investissement le plus rentable pour votre visibilité et votre crédibilité en 2025.</p>
      
      <h2>1. Un site web = votre carte de visite disponible 24h/24</h2>
      
      <p>Contrairement aux réseaux sociaux où votre contenu est rapidement noyé dans un flux incessant, votre site web reste accessible à tout moment. C'est votre vitrine permanente qui travaille pour vous pendant que vous dormez.</p>
      
      <p>Un site professionnel vous permet de :</p>
      <ul>
        <li>Présenter clairement vos services, tarifs et disponibilités</li>
        <li>Montrer votre travail à travers un portfolio ou une galerie</li>
        <li>Offrir un premier contact professionnel qui inspire confiance</li>
        <li>Être trouvable par des clients potentiels à toute heure</li>
      </ul>
      
      <p>Selon une étude récente, 78% des consommateurs recherchent des informations en ligne avant de contacter un professionnel local. Sans site web, vous êtes tout simplement invisible pour cette clientèle.</p>
      
      <h2>2. Être visible sur Google, pas juste sur Instagram</h2>
      
      <p>Si les réseaux sociaux sont excellents pour fidéliser une communauté, c'est Google qui vous apporte les nouveaux clients qui cherchent activement vos services.</p>
      
      <p>Le référencement local (SEO local) est particulièrement puissant pour les indépendants :</p>
      <ul>
        <li>"Plombier Annecy", "Massage thérapeutique Annemasse", "Food truck Thonon" - ces recherches locales sont effectuées par des personnes prêtes à passer à l'action</li>
        <li>97% des utilisateurs recherchent des entreprises locales en ligne</li>
        <li>Un site bien référencé vous place directement devant des clients qualifiés de votre région</li>
      </ul>
      
      <div class="bg-blue-600/20 p-4 border border-blue-500/30 rounded-lg my-6">
        <p class="font-bold text-blue-100">À savoir :</p>
        <p class="text-gray-300">70% des consommateurs consultent Google avant de contacter un professionnel, et 88% font confiance aux avis en ligne autant qu'aux recommandations personnelles.</p>
      </div>
      
      <h2>3. Rassurer avec du contenu professionnel</h2>
      
      <p>Votre site web est souvent le premier point de contact avec vos futurs clients. C'est l'occasion de créer une première impression mémorable et rassurante.</p>
      
      <p>Un site efficace doit inclure :</p>
      <ul>
        <li>Une présentation claire de qui vous êtes et de votre parcours</li>
        <li>Des tarifs transparents ou une fourchette de prix</li>
        <li>Des témoignages clients vérifiés qui renforcent votre crédibilité</li>
        <li>Un formulaire de contact ou un système de réservation en ligne</li>
        <li>Des réponses aux questions fréquentes pour lever les freins</li>
      </ul>
      
      <p>Ces éléments créent immédiatement un sentiment de confiance et diminuent le temps nécessaire pour convaincre un prospect. Un client rassuré est un client qui franchit plus facilement le pas.</p>
      
      <h2>4. Se démarquer de la concurrence</h2>
      
      <p>Malgré l'importance croissante du web, de nombreux indépendants n'ont toujours pas de site professionnel, ou se contentent d'une présence sommaire sur des plateformes tierces.</p>
      
      <p>Cette situation représente une opportunité exceptionnelle :</p>
      <ul>
        <li>Vous pouvez facilement vous démarquer avec un site de qualité dans votre secteur</li>
        <li>Un site bien conçu vous positionne comme un professionnel sérieux et techniquement à jour</li>
        <li>Vous contrôlez entièrement votre image et votre message, contrairement aux plateformes externes</li>
        <li>Vous créez un actif numérique durable qui prend de la valeur avec le temps</li>
      </ul>
      
      <p>Dans un marché où la différenciation est cruciale, votre site web peut devenir votre meilleur argument de vente et votre commercial le plus efficace.</p>
      
      <h2>Conclusion : un investissement rentable et nécessaire</h2>
      
      <p>En 2025, un site web n'est plus un luxe pour les indépendants, mais une nécessité. C'est un investissement qui rapporte quotidiennement, vous permet d'être trouvé par des clients qualifiés, et renforce votre image professionnelle.</p>
      
      <p>Contrairement aux idées reçues, créer un site web professionnel n'est plus nécessairement coûteux ou complexe. Des solutions adaptées aux indépendants permettent d'obtenir un site performant, optimisé pour le référencement local, et parfaitement aligné avec votre image de marque.</p>
      
      <p>Chez Atypik Code, je crée des sites sur mesure pour les indépendants à des prix accessibles. Chaque projet est pensé pour maximiser votre visibilité locale et transformer les visiteurs en clients.</p>
      
      <p>Vous souhaitez discuter de votre projet de site web ? <a href="/services#booking" class="text-blue-400 hover:underline">Réservez un appel gratuit de 30 minutes</a> et découvrons ensemble comment booster votre présence en ligne.</p>
    `,
  },
];

// Génère les métadonnées de la page dynamiquement
export async function generateMetadata({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Article non trouvé | Atypik Code",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${post.title} | Blog Atypik Code`,
    description: post.excerpt,
    keywords: `développement web, ${post.category.toLowerCase()}, blog tech, Atypik Code, ${post.slug.replace(/-/g, ", ")}`,
    alternates: {
      canonical: `https://www.atypikcode.fr/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }) {
  // Trouver l'article correspondant au slug
  const post = blogPosts.find((post) => post.slug === params.slug);

  // Si l'article n'existe pas, renvoyer une page 404
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-8 transition-colors duration-200 group relative z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Retour aux articles
        </Link>

        <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl mb-12">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300 mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-400 text-lg">{post.date}</p>
          </div>

          <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-14">
            <Image
              src={post.image || "/image/blog/default.jpg"}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>

          <div
            className="prose prose-lg prose-invert max-w-none blog-content
              prose-headings:mt-8 prose-headings:mb-4 
              prose-h2:text-2xl prose-h2:font-bold prose-h2:text-purple-300 prose-h2:border-b prose-h2:border-purple-900/30 prose-h2:pb-2 
              prose-h3:text-xl prose-h3:font-semibold prose-h3:text-blue-300 
              prose-p:my-5 prose-p:leading-7 
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:my-6 prose-ul:pl-6 prose-li:my-2 prose-li:pl-2
              prose-ol:my-6 prose-ol:pl-6 
              prose-pre:bg-gray-900/60 prose-pre:border prose-pre:border-gray-700/30 prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-6
              prose-code:text-pink-300 prose-code:bg-gray-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-table:border-collapse prose-table:w-full prose-table:my-8
              prose-th:bg-gray-800/70 prose-th:p-3 prose-th:text-left prose-th:font-semibold
              prose-td:border prose-td:border-gray-700/30 prose-td:p-3"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter((item) => item.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <div key={relatedPost.id} className="relative">
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Lire l'article : ${relatedPost.title}`}
                  />
                  <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                    <h3 className="text-xl font-bold mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 mb-3">{relatedPost.excerpt}</p>
                    <span className="text-purple-400 font-medium group-hover:underline group-hover:translate-x-1 inline-block transition-all duration-200">
                      Lire l&apos;article →
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
