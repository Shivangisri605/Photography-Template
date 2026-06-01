'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function GallerySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    '/an4.jpg',
    '/an5.jpg',
    '/an6.jpg',
    '/an7.jpg',
    '/an8.jpg',
    '/an9.jpg',
    '/br13.jpg',
    '/br14.jpg',
    '/br15.jpg',
    '/br16.jpg',
    '/br17.jpg',
  ];

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
            {galleryItems.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-[2rem] bg-white/20 backdrop-blur-sm border border-white/50 shadow-xl shadow-slate-200/30 hover:shadow-3xl hover:shadow-slate-300/40 hover:-translate-y-1.5 transition-all duration-500 flex-shrink-0 w-80 h-80 md:w-96 md:h-96 cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />

                {/* Subtle hover camera icon overlay */}
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100 text-slate-800 border border-white/40">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-slate-900 shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Full Size Image */}
              <div className="relative aspect-[4/3] bg-slate-200 md:max-h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Full size gallery image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
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
