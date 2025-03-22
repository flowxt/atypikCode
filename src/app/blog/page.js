import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | Atypik Code",
  description:
    "Articles techniques et conseils de développement web par Atypik Code",
};

// Données simulées des articles de blog
const blogPosts = [
  {
    id: 1,
    title: "Comment optimiser les performances de votre site Next.js",
    excerpt:
      "Découvrez les meilleures pratiques pour améliorer la vitesse et les performances de votre application Next.js.",
    date: "12 Mai 2023",
    image: "/images/blog/nextjs-performance.jpg",
    category: "Next.js",
    slug: "optimiser-performances-nextjs",
  },
  {
    id: 2,
    title: "Les avantages de Tailwind CSS pour vos projets",
    excerpt:
      "Pourquoi Tailwind CSS est devenu si populaire et comment l'utiliser efficacement dans vos projets web.",
    date: "28 Avril 2023",
    image: "/images/blog/tailwind-css.jpg",
    category: "CSS",
    slug: "avantages-tailwind-css",
  },
  {
    id: 3,
    title: "Créer des animations fluides avec Framer Motion",
    excerpt:
      "Guide complet sur l'utilisation de Framer Motion pour ajouter des animations professionnelles à votre site React.",
    date: "15 Avril 2023",
    image: "/images/blog/framer-motion.jpg",
    category: "Animation",
    slug: "animations-framer-motion",
  },
  {
    id: 4,
    title: "Déployer votre site Next.js sur Vercel",
    excerpt:
      "Comment configurer et déployer votre application Next.js sur la plateforme Vercel en quelques étapes simples.",
    date: "2 Avril 2023",
    image: "/images/blog/vercel-deployment.jpg",
    category: "Déploiement",
    slug: "deployer-nextjs-vercel",
  },
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
          Blog
        </h1>

        <p className="text-xl text-gray-300 mb-16">
          Découvrez mes articles techniques et conseils sur le développement
          web, React, Next.js et les dernières tendances.
        </p>

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
              <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/10 h-full flex flex-col">
                <div className="relative w-full h-56 overflow-hidden">
                  {/* Remplacer avec vos propres images ou utiliser des placeholders */}
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">Image: {post.title}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-300 mb-4 flex-1">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-gray-400 text-sm">{post.date}</span>

                    <span className="text-purple-400 font-medium flex items-center">
                      Lire l'article
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
