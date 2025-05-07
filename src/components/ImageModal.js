"use client";

import Image from "next/image";

export default function ImageModal({ src, alt }) {
  const openModal = () => {
    window.open(src, "_blank", "width=800,height=600");
  };

  return (
    <div className="relative h-[237px] rounded-lg overflow-hidden group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        quality={100}
      />
      <button
        onClick={openModal}
        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <span className="text-white bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
          Voir en taille réelle
        </span>
      </button>
    </div>
  );
}
