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
    id: 7,
    title:
      "Pourquoi votre site Wix ne vous apporte pas de clients (et comment y remédier)",
    excerpt:
      "Découvrez pourquoi de nombreux artisans et indépendants n'obtiennent pas de résultats avec leur site Wix et comment un site professionnel optimisé peut transformer votre visibilité en ligne.",
    date: "15 avril 2025",
    image: "/image/wix.png",
    category: "SEO",
    slug: "limites-wix-pourquoi-investir-site-professionnel",
    content: `
      <h1>Pourquoi votre site Wix ne vous apporte pas de clients (et comment y remédier)</h1>
      
      <p>Vous êtes artisan, thérapeute ou indépendant, et vous avez franchi le pas en créant votre site internet avec Wix. La promesse était séduisante : une interface intuitive, des templates attrayants, et pas besoin de connaissances techniques. Quelques heures plus tard, votre site était en ligne. Et puis... rien. Aucun client ne vous contacte malgré vos investissements en temps et en énergie.</p>
      
      <p>Ce scénario est malheureusement fréquent, mais il n'est pas dû au hasard. Dans cet article, nous allons explorer les raisons techniques qui expliquent pourquoi votre site Wix reste invisible sur Google, et comment un site professionnel développé avec des technologies comme Next.js peut radicalement transformer votre présence en ligne.</p>
      
      <h2>Les limites cachées des sites Wix pour les artisans</h2>
      
      <p>Wix et les autres constructeurs de sites "Do It Yourself" (DIY) offrent une facilité d'utilisation indéniable. Cependant, cette simplicité cache des limitations techniques importantes qui affectent directement votre capacité à attirer des clients.</p>
      
      <h3>Un code généré automatiquement et peu optimisé</h3>
      
      <p>Les sites créés avec Wix génèrent automatiquement du code HTML, CSS et JavaScript. Ce code est souvent surchargé d'éléments inutiles qui ralentissent considérablement le chargement de votre site. Google pénalise les sites lents dans son classement, ce qui affecte directement votre visibilité.</p>
      
      <p>Pour illustrer ce point, voici une comparaison révélatrice :</p>
      <ul>
        <li>Un site Wix standard charge en moyenne en 4,5 secondes</li>
        <li>Un site développé avec Next.js charge en moyenne en 1,2 seconde</li>
      </ul>
      
      <p>Cette différence de vitesse peut sembler anodine, mais elle est cruciale pour Google et pour vos visiteurs. Selon une étude de Google, 53% des utilisateurs mobiles quittent un site qui met plus de 3 secondes à charger.</p>
      
      <h3>Des limitations techniques pour le référencement local</h3>
      
      <p>Le référencement local est essentiel pour les artisans et indépendants qui servent une clientèle géographiquement proche. Wix propose des fonctionnalités de base pour le SEO, mais présente plusieurs limitations critiques :</p>
      
      <ul>
        <li>Impossibilité d'implémenter certains balisages schema.org avancés qui améliorent votre visibilité dans les recherches locales</li>
        <li>Options limitées pour personnaliser les URL et les méta-descriptions par page</li>
        <li>Difficulté à intégrer des données structurées spécifiques à votre métier (horaires, services, tarifs)</li>
      </ul>
      
      <h3>Une structure SEO rigide et peu personnalisable</h3>
      
      <p>Les sites Wix utilisent une architecture prédéfinie qui ne correspond pas toujours aux meilleures pratiques SEO pour votre secteur spécifique. Cette rigidité limite votre capacité à adapter votre site aux exigences particulières de Google pour votre domaine d'activité.</p>
      
      <div class="bg-blue-600/20 p-4 border border-blue-500/30 rounded-lg my-6">
        <p class="font-bold text-blue-100">Statistique clé :</p>
        <p class="text-gray-300">Les sites Wix chargent en moyenne 30% plus lentement que les sites optimisés avec des technologies comme Next.js, un facteur que Google considère comme critique dans son algorithme de classement.</p>
      </div>
      
      <h2>Pourquoi vos concurrents vous dépassent sur Google</h2>
      
      <p>Vous avez peut-être remarqué que certains de vos concurrents apparaissent systématiquement dans les premiers résultats de Google, tandis que votre site reste invisible. Cette différence s'explique par plusieurs facteurs techniques.</p>
      
      <h3>L'importance cruciale des Core Web Vitals</h3>
      
      <p>Depuis 2021, Google utilise les "Core Web Vitals" comme facteur de classement. Ces métriques mesurent la performance technique de votre site, notamment :</p>
      
      <ul>
        <li><strong>LCP (Largest Contentful Paint)</strong> : temps de chargement du contenu principal</li>
        <li><strong>FID (First Input Delay)</strong> : réactivité lors des interactions</li>
        <li><strong>CLS (Cumulative Layout Shift)</strong> : stabilité visuelle pendant le chargement</li>
      </ul>
      
      <p>Les sites développés avec Next.js obtiennent systématiquement de meilleurs scores sur ces métriques, ce qui leur confère un avantage considérable dans le classement Google.</p>
      
      <h3>La structure technique invisible mais déterminante</h3>
      
      <p>Derrière l'apparence visuelle de votre site se cache une architecture technique qui influence fortement son classement dans les moteurs de recherche. Un site Next.js offre :</p>
      
      <ul>
        <li>Un rendu côté serveur (SSR) qui améliore significativement la vitesse de chargement</li>
        <li>Une génération de pages statiques qui optimise les performances</li>
        <li>Un code minimal et propre qui facilite l'indexation par Google</li>
      </ul>
      
      <p>Cette architecture technique permet à votre site d'être plus rapidement et plus efficacement indexé par Google, ce qui améliore votre positionnement pour les recherches pertinentes.</p>
      
      <h3>Le balisage schema.org : l'atout méconnu des artisans</h3>
      
      <p>Le balisage schema.org est un langage de balisage que les moteurs de recherche utilisent pour mieux comprendre le contenu de votre site. Pour un artisan ou un indépendant, ce balisage permet d'afficher des informations enrichies dans les résultats de recherche : avis clients, horaires d'ouverture, services proposés, zone d'intervention...</p>
      
      <p>Ces informations enrichies augmentent considérablement votre taux de clic dans les résultats de recherche. Un site Next.js permet d'implémenter précisément ce type de balisage, tandis que Wix offre des options limitées.</p>
      
      <h2>Ce que Next.js apporte que Wix ne peut pas offrir</h2>
      
      <p>Next.js est un framework de développement basé sur React, spécialement conçu pour créer des sites web performants et optimisés pour le référencement. Voici les avantages qu'il offre par rapport à une solution comme Wix :</p>
      
      <h3>Performance technique supérieure</h3>
      
      <p>Next.js utilise des techniques avancées pour optimiser la performance de votre site :</p>
      
      <ul>
        <li>Chargement progressif des pages pour une expérience utilisateur fluide</li>
        <li>Optimisation automatique des images pour réduire les temps de chargement</li>
        <li>Préchargement des liens pour une navigation quasi instantanée</li>
      </ul>
      
      <p>Ces optimisations techniques se traduisent par une expérience utilisateur supérieure, ce qui réduit le taux de rebond et améliore votre référencement.</p>
      
      <h3>Optimisation mobile irréprochable</h3>
      
      <p>Avec plus de 60% des recherches effectuées sur mobile, l'expérience sur smartphone est devenue un critère déterminant pour Google. Next.js adopte une approche "mobile-first" qui garantit une expérience optimale sur tous les appareils.</p>
      
      <p>Contrairement à Wix qui adapte un site desktop pour mobile, Next.js permet de construire une expérience véritablement optimisée pour chaque type d'appareil.</p>
      
      <h3>Personnalisation complète du code source</h3>
      
      <p>Avec Next.js, chaque aspect de votre site peut être personnalisé pour répondre précisément à vos besoins spécifiques :</p>
      
      <ul>
        <li>Intégration de fonctionnalités sur mesure adaptées à votre métier</li>
        <li>Optimisation spécifique pour les mots-clés pertinents dans votre secteur</li>
        <li>Structure de données parfaitement alignée avec les attentes de Google pour votre activité</li>
      </ul>
      
      <p>Cette personnalisation vous permet de vous démarquer de vos concurrents qui utilisent des templates génériques.</p>
      
      <h2>L'investissement qui se rentabilise rapidement</h2>
      
      <p>Beaucoup d'artisans et d'indépendants hésitent à investir dans un site web professionnel, préférant la solution "gratuite" ou à bas coût de Wix. Pourtant, cette approche peut s'avérer coûteuse à long terme.</p>
      
      <h3>Un calcul simple et concret</h3>
      
      <p>Considérons un exemple concret : un plombier dont une intervention moyenne génère 200€ de chiffre d'affaires.</p>
      
      <ul>
        <li>Un site web professionnel optimisé coûte en moyenne entre 1500€ et 3000€</li>
        <li>Si ce site vous apporte seulement 2 nouveaux clients par mois (ce qui est très conservateur)</li>
        <li>Cela représente 400€ de chiffre d'affaires supplémentaire mensuel, soit 4800€ par an</li>
      </ul>
      
      <p>L'investissement initial est donc amorti en 4 à 7 mois seulement, et génère ensuite un flux continu de nouveaux clients.</p>
      
      <h3>Le témoignage d'artisans ayant fait le pas</h3>
      
      <p>Martin, artisan menuisier en Haute-Savoie, témoigne : "Après des années avec un site Wix qui n'apportait aucun client, j'ai investi dans un site professionnel développé avec Next.js. En trois mois, j'ai reçu plus de demandes de devis que durant les deux années précédentes."</p>
      
      <p>Ce type de transformation n'est pas exceptionnel. De nombreux artisans constatent une amélioration significative de leur visibilité en ligne après avoir migré d'une solution DIY vers un site web professionnel.</p>
      
      <h3>Un ROI mesurable et concret</h3>
      
      <p>Contrairement à d'autres investissements marketing dont le retour est difficile à mesurer, un site web professionnel vous permet de suivre précisément :</p>
      
      <ul>
        <li>Le nombre de visiteurs qui trouvent votre site via Google</li>
        <li>Les mots-clés qui génèrent du trafic vers votre site</li>
        <li>Le nombre de formulaires de contact remplis ou d'appels générés</li>
        <li>Le taux de conversion de visiteurs en clients</li>
      </ul>
      
      <p>Ces données vous permettent d'optimiser continuellement votre présence en ligne et d'améliorer votre retour sur investissement.</p>
      
      <h2>Comment passer de Wix à un site professionnel qui génère des clients</h2>
      
      <p>La transition d'un site Wix vers un site professionnel développé avec Next.js n'est pas aussi complexe qu'elle peut le paraître. Voici les étapes clés de ce processus :</p>
      
      <ol>
        <li><strong>Analyse de votre activité et de vos objectifs</strong> pour créer une stratégie de contenu alignée avec votre vision</li>
        <li><strong>Étude de vos concurrents</strong> pour identifier leurs forces et faiblesses</li>
        <li><strong>Recherche des mots-clés</strong> les plus pertinents pour votre activité</li>
        <li><strong>Conception d'une architecture de site</strong> optimisée pour le référencement local</li>
        <li><strong>Développement technique</strong> avec Next.js pour garantir des performances optimales</li>
        <li><strong>Migration de votre contenu existant</strong> avec optimisation SEO</li>
        <li><strong>Formation à l'utilisation</strong> de votre nouveau site</li>
      </ol>
      
      <p>Ce processus peut être réalisé en 4 à 6 semaines, sans interruption de votre présence en ligne actuelle.</p>
      
      <h2>Conclusion : un choix décisif pour votre visibilité</h2>
      
      <p>Votre site web n'est pas simplement une vitrine digitale - c'est un outil de génération de clients qui doit vous apporter un retour sur investissement concret. Les solutions DIY comme Wix peuvent sembler attrayantes par leur facilité d'utilisation et leur coût initial bas, mais elles présentent des limitations techniques qui restreignent considérablement votre visibilité en ligne.</p>
      
      <p>Un site professionnel développé avec Next.js vous offre une infrastructure technique optimisée pour le référencement, une performance supérieure et une personnalisation complète adaptée à votre métier. Cet investissement se traduit rapidement par une augmentation de votre visibilité en ligne et par un flux continu de nouveaux clients.</p>
      
      <p>Vous souhaitez comprendre comment transformer votre présence en ligne et attirer plus de clients qualifiés ? <a href="/services#booking" class="text-blue-400 hover:underline">Réservez un appel gratuit de 30 minutes</a> pour une analyse personnalisée de votre situation actuelle et des opportunités d'amélioration.</p>
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
