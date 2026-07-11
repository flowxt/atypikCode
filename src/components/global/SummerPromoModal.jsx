"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// Période d'affichage de l'offre d'été (modifiable ici uniquement)
const PROMO_START = new Date("2026-07-01T00:00:00");
const PROMO_END = new Date("2026-08-31T23:59:59");

const STORAGE_KEY = "summer-promo-seen";

export default function SummerPromoModal() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // stockage indisponible (navigation privée) : on ferme simplement
    }
  }, []);

  useEffect(() => {
    const now = new Date();
    if (now < PROMO_START || now > PROMO_END) return;

    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    const timer = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Fermeture avec Échap + blocage du scroll en arrière-plan
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="summer-promo-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl shadow-purple-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Halo décoratif */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/25 to-purple-600/20 blur-3xl"></div>

            {/* Bouton fermer */}
            <button
              onClick={close}
              aria-label="Fermer"
              className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10 px-8 pb-8 pt-10 text-center">
              {/* Badge offre d'été */}
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <span aria-hidden="true">☀️</span>
                Offre d&apos;été — durée limitée
              </span>

              {/* Titre */}
              <h2
                id="summer-promo-title"
                className="mt-6 text-2xl font-bold leading-tight text-white md:text-3xl"
              >
                Cet été, votre site vitrine
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-purple-400">
                  est en promotion.
                </span>
              </h2>

              {/* Texte */}
              <p className="mt-4 text-sm leading-relaxed text-gray-400 md:text-base">
                C&apos;est le moment idéal pour lancer votre site pendant que vos
                concurrents sont à la plage. Remise exceptionnelle sur toutes les
                formules site vitrine jusqu&apos;au{" "}
                <span className="font-medium text-white">31 août</span>.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">
                Le montant de la remise ?{" "}
                <span className="font-medium text-white">
                  Contactez-moi, vous pourriez être agréablement surpris.
                </span>
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={close}
                  className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all"
                >
                  J&apos;en profite avant le 31 août
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <button
                  onClick={close}
                  className="text-sm text-gray-500 transition-colors hover:text-gray-300"
                >
                  Peut-être plus tard
                </button>
              </div>

              {/* Micro-garanties */}
              <p className="mt-5 text-xs text-gray-600">
                Réponse sous 24h • Devis gratuit • Sans engagement
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
