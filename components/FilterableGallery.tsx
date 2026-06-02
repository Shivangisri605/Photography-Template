'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const MOCK_ITEMS: GalleryItem[] = [
  { id: 1, src: '/an4.jpg', alt: 'Mountain ridge', category: 'Mountains' },
  { id: 2, src: '/an5.jpg', alt: 'Pine forest', category: 'Forests' },
  { id: 3, src: '/an6.jpg', alt: 'Rocky lake', category: 'Lakes' },
  { id: 4, src: '/an7.jpg', alt: 'Sunset mountain', category: 'Mountains' },
  { id: 5, src: '/an8.jpg', alt: 'Misty forest', category: 'Forests' },
  { id: 6, src: '/an9.jpg', alt: 'Calm lake', category: 'Lakes' },
  { id: 7, src: '/br13.jpg', alt: 'Hill view', category: 'Mountains' },
  { id: 8, src: '/br14.jpg', alt: 'Green valley', category: 'Forests' },
];

export default function FilterableGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = useMemo(() => {
    const uniq = Array.from(new Set(MOCK_ITEMS.map((i) => i.category)));
    return ['All', ...uniq];
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return MOCK_ITEMS;
    return MOCK_ITEMS.filter((it) => it.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] uppercase font-extrabold tracking-[0.3em] text-slate-500 mb-3">
          Moments in Time
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-slate-900 tracking-tight">
          Photo Gallery
        </h2>

        {/* Filters */}
        <div className="flex gap-3 items-center justify-center mb-8 flex-wrap">
          {categories.map((cat) => {
            const active = cat === selectedCategory;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                  active ? 'bg-slate-900 text-white shadow-md' : 'bg-white/60 text-slate-800 hover:scale-105'
                }`}
                aria-pressed={active}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item.src)}
              className="relative rounded-2xl overflow-hidden bg-white/5 shadow-sm focus:outline-none"
            >
              <div className="aspect-[4/3] relative w-full h-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </button>
          ))}

          {filteredItems.length === 0 && (
            <p className="col-span-full text-center text-slate-500 py-8">
              No images in “{selectedCategory}”.
            </p>
          )}
        </div>

        {/* Lightbox modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative inline-flex w-auto max-w-[90vw] max-h-[90vh] bg-white/8 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-slate-900 shadow transition-all"
                aria-label="Close image"
              >
                ✕
              </button>

              <div className="flex items-center justify-center w-full h-full min-h-[40vh] max-h-[calc(90vh-48px)] bg-slate-100/20 overflow-hidden">
                <div className="relative mx-auto w-auto max-w-[90vw] max-h-[calc(90vh-80px)] p-2">
                  <Image
                    src={selectedImage}
                    alt="Full size"
                    width={1600}
                    height={1200}
                    className="w-auto max-w-full max-h-[90vh] mx-auto block object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
