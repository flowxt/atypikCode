import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BlogHero } from "@/components/blog/BlogHero";

export const metadata = {
  title: "Blog | Conseils et Astuces en Développement Web | Atypik Code",
  description:
    "Découvrez nos articles et conseils d'expert sur le développement web, la création de landing pages et l'optimisation SEO. Ressources gratuites pour améliorer votre présence en ligne.",
  keywords:
    "blog développement web, astuces création site internet, conseils landing page, optimisation SEO, tutoriels React, Next.js, expérience utilisateur",
};

// Données simulées des articles de blog
const blogPosts = [
  {
    id: 8,
    title: "Comment créer une landing page qui convertit en 2025",
    excerpt:
      "Découvrez les techniques et stratégies essentielles pour concevoir des landing pages performantes qui transforment vos visiteurs en clients fidèles.",
    date: "18 avril 2025",
    image: "/image/myeasyplan.png",
    category: "Conversion",
    slug: "creer-landing-page-conversion",
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
  },
  {
    id: 6,
    title:
      "Pourquoi les indépendants ont besoin d'un site web professionnel en 2025",
    excerpt:
      "Découvrez pourquoi posséder un site web est devenu indispensable pour les artisans, thérapeutes et autres indépendants qui veulent se démarquer et attirer des clients locaux.",
    date: "12 avril 2025",
    image: "/image/artisan.jpg",
    category: "Stratégie Web",
    slug: "pourquoi-site-web-independants-2025",
  },
  {
    id: 5,
    title:
      "Pourquoi un site vitrine est indispensable pour votre activité en 2025",
    excerpt:
      "Découvrez comment un site vitrine bien optimisé peut transformer votre visibilité en ligne et devenir votre meilleur commercial 24h/24.",
    date: "6 avril 2025",
    image: "/image/blog/vitrine.png",
    category: "Marketing Digital",
    slug: "importance-site-vitrine-seo",
  },
  {
    id: 1,
    title: "Comment optimiser les performances de votre site Next.js",
    excerpt:
      "Découvrez les meilleures pratiques pour améliorer la vitesse et les performances de votre application Next.js.",
    date: "6 avril 2025",
    image: "/image/blog/next-blog.png",
    category: "Next.js",
    slug: "optimiser-performances-nextjs",
  },
  {
    id: 2,
    title: "Les avantages de Tailwind CSS pour vos projets",
    excerpt:
      "Pourquoi Tailwind CSS est devenu si populaire et comment l'utiliser efficacement dans vos projets web.",
    date: "6 Avril 2025",
    image: "/image/blog/tailwind.png",
    category: "CSS",
    slug: "avantages-tailwind-css",
  },
  {
    id: 3,
    title: "Créer des animations fluides avec Framer Motion",
    excerpt:
      "Guide complet sur l'utilisation de Framer Motion pour ajouter des animations professionnelles à votre site React.",
    date: "5 Avril 2025",
    image: "/image/blog/framer.png",
    category: "Animation",
    slug: "animations-framer-motion",
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
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gray-950">
      <BlogHero />

      {/* Section de contenu avec fond différent et superposition pour séparer nettement du hero */}
      <div className="relative bg-gradient-to-b from-gray-950 to-black mt-[-50px] pt-24 pb-24">
        {/* Effet de séparation */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/0 to-gray-950"></div>

        <div className="container mx-auto px-4 pt-20 md:pt-28">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="relative">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Lire l'article : ${post.title}`}
                  />
                  <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-lg overflow-hidden h-full flex flex-col group">
                    <div className="relative w-full h-56">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300 mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                      <p className="text-gray-400 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                        <span className="text-gray-500 text-sm">
                          {post.date}
                        </span>
                        <span className="text-purple-400 font-medium group-hover:underline group-hover:translate-x-1 inline-block transition-all duration-200">
                          Lire l&apos;article →
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
