'use client';

import Image from 'next/image';
import { useRef, useState, useMemo } from 'react';

export default function GallerySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems = [
    { src: '/an4.jpg', category: 'Lakes' },
    { src: '/an5.jpg', category: 'Forests' },
    { src: '/an6.jpg', category: 'Mountains' },
    { src: '/an7.jpg', category: 'Mountains' },
    { src: '/br14.jpg', category: 'Mountains' },
    { src: '/an9.jpg', category: 'Forests' },
    { src: '/br13.jpg', category: 'Mountains' },
    { src: '/br15.jpg', category: 'Mountains' },
    { src: '/br16.jpg', category: 'Lakes' },
    { src: '/br17.jpg', category: 'Lakes' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const uniq = Array.from(new Set(galleryItems.map((g) => g.category)));
    return ['All', ...uniq];
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return galleryItems;
    return galleryItems.filter((g) => g.category === selectedCategory);
  }, [selectedCategory]);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-[10px] uppercase font-extrabold tracking-[0.3em] text-slate-500 mb-3">
          Moments in Time
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-slate-900 tracking-tight">
          Photo Gallery
        </h2>
        <p className="text-center text-slate-600 mb-16 text-sm font-light max-w-md mx-auto leading-relaxed">
          A collection of favorite moments, nature studies, and wildlife captures from around the world.
        </p>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg transform -translate-x-6 md:-translate-x-16 ${
              canScrollLeft
                ? 'opacity-100 cursor-pointer hover:scale-110'
                : 'opacity-30 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5 text-slate-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg transform translate-x-6 md:translate-x-16 ${
              canScrollRight
                ? 'opacity-100 cursor-pointer hover:scale-110'
                : 'opacity-30 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 text-slate-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5L15.75 12l-7.5 7.5"
              />
            </svg>
          </button>

          {/* Filter buttons */}
          <div className="flex gap-3 items-center justify-center mb-6">
            {categories.map((cat) => {
              const active = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                    active
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white/60 text-slate-800 hover:scale-105'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 px-4"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedImage(item.src);
                  setSelectedIndex(index);
                }}
                className="group relative overflow-hidden rounded-[2rem] bg-white/20 backdrop-blur-sm border border-white/50 shadow-xl shadow-slate-200/30 hover:shadow-3xl hover:shadow-slate-300/40 hover:-translate-y-1.5 transition-all duration-500 flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem] cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />

                {/* Camera overlay removed as requested */}
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal - full-bleed style */}
        {selectedImage && selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center overflow-auto p-4 sm:p-6"
            onClick={() => {
              setSelectedImage(null);
              setSelectedIndex(null);
            }}
          >
            <div
              className="relative w-full max-w-[92vw] sm:max-w-[980px] md:max-w-[1100px] max-h-[75vh] sm:max-h-[80vh] bg-black shadow-2xl rounded-md flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* left nav */}
              <button
                onClick={() => {
                  if (selectedIndex > 0) {
                    const prev = selectedIndex - 1;
                    setSelectedIndex(prev);
                    setSelectedImage(filteredItems[prev].src);
                  }
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-transparent border border-white/30 flex items-center justify-center text-white/90 hover:bg-white/5"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* image panel */}
              <div className="mx-auto max-w-full max-h-full p-4 sm:p-6 flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Full size gallery image"
                  width={2000}
                  height={1400}
                  sizes="(max-width: 768px) 92vw, (max-width: 1100px) 92vw, 1100px"
                  className="object-contain max-w-full max-h-full"
                  priority
                />
              </div>

              {/* right nav */}
              <button
                onClick={() => {
                  if (selectedIndex < filteredItems.length - 1) {
                    const next = selectedIndex + 1;
                    setSelectedIndex(next);
                    setSelectedImage(filteredItems[next].src);
                  }
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-transparent border border-white/30 flex items-center justify-center text-white/90 hover:bg-white/5"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* close button */}
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setSelectedIndex(null);
                }}
                className="absolute top-3 right-3 z-40 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-slate-900 shadow"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
