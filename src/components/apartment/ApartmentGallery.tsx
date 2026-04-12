"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ImageCategory } from "@/lib/images";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ApartmentGallery({ categories }: { categories: ImageCategory[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!categories || categories.length === 0) return null;

  // Flatten images for the lightbox navigation
  const allImages = categories.flatMap(cat => cat.images);

  const openLightbox = (imgSrc: string) => {
    const idx = allImages.indexOf(imgSrc);
    if(idx !== -1) setSelectedIndex(idx);
  };

  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + allImages.length) % allImages.length);
  };

  return (
    <section className="mt-20 mb-10 w-full pt-10 border-t border-border/50">
      <h2 className="text-3xl font-semibold text-foreground mb-12 font-serif">Galerie & Eindrücke</h2>
      
      <div className="space-y-16">
        {categories.map((category, catIndex) => (
          category.images.length > 0 && (
            <div key={catIndex}>
              <h3 className="text-xl font-medium text-foreground mb-6 pb-2 border-b border-border/40 inline-block">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {category.images.map((src, i) => (
                  <div 
                    key={i} 
                    onClick={() => openLightbox(src)}
                    className={`cursor-pointer relative rounded-xl overflow-hidden shadow-sm group ${
                      i === 0 && category.images.length >= 3 ? "col-span-2 row-span-2 h-[300px] md:h-[400px]" : "h-[150px] md:h-[190px]"
                    }`}
                  >
                    <Image 
                      src={src} 
                      alt={`${category.title} view ${i + 1}`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors" onClick={closeLightbox} aria-label="Schließen">
            <X className="w-8 h-8" />
          </button>
          
          <button className="absolute left-4 md:left-10 text-white/50 hover:text-white p-4 transition-colors z-10" onClick={prevImage} aria-label="Vorheriges Bild">
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <div className="relative w-full max-w-6xl h-[80vh] mx-16">
            <Image 
              src={allImages[selectedIndex]} 
              alt="Fullscreen View" 
              fill 
              className="object-contain" 
              priority
            />
          </div>

          <button className="absolute right-4 md:right-10 text-white/50 hover:text-white p-4 transition-colors z-10" onClick={nextImage} aria-label="Nächstes Bild">
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/60 font-medium">
            {selectedIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
