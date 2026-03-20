'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=90", category: "Restaurant Ambiance" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=90", category: "Fine Dining" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&q=90", category: "Bar Counter" },
  { src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1400&q=90", category: "Live Kitchen" },
  { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1400&q=90", category: "Gourmet Platter" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&q=90", category: "Pizza Special" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=90", category: "Grilled Delights" },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1400&q=90", category: "Fresh Salads" },
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1400&q=90", category: "Family Dinner" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&q=90", category: "BBQ Night" },
  { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&q=90", category: "Cozy Corner" },
  { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400&q=90", category: "Evening Vibes" },
  { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1400&q=90", category: "Cocktail Bar" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=90", category: "Night Scene" },
  { src: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1400&q=90", category: "Rooftop View" },
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1400&q=90", category: "Outdoor Seating" },
  { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1400&q=90", category: "Event Night" },
  { src: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1400&q=90", category: "Celebration" },
];

function Lightbox({ index, onClose, onPrev, onNext }: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = galleryImages[index];

  return createPortal(
    <>
      <style>{`
        .lb-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          background: rgba(0,0,0,0.95) !important;
          z-index: 2147483647 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .lb-img-wrap {
          position: absolute !important;
          top: 0 !important; left: 0 !important;
          width: 100% !important; height: 100% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 60px 80px !important;
          box-sizing: border-box !important;
        }
        .lb-img {
          max-width: 100% !important;
          max-height: 100% !important;
          width: auto !important;
          height: auto !important;
          object-fit: contain !important;
          border-radius: 12px !important;
          display: block !important;
          box-shadow: 0 0 80px rgba(0,0,0,1) !important;
        }
        .lb-btn {
          position: absolute !important;
          z-index: 2147483647 !important;
          cursor: pointer !important;
          border: none !important;
          outline: none !important;
        }
        .lb-close {
          top: 16px !important;
          right: 16px !important;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50% !important;
          background: rgba(212,175,55,0.15) !important;
          border: 1.5px solid rgba(212,175,55,0.6) !important;
          color: #D4AF37 !important;
          font-size: 18px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-weight: bold !important;
          line-height: 1 !important;
        }
        .lb-close:hover {
          background: rgba(212,175,55,0.35) !important;
        }
        .lb-prev {
          left: 16px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 52px !important;
          height: 52px !important;
          border-radius: 50% !important;
          background: rgba(212,175,55,0.12) !important;
          border: 1.5px solid rgba(212,175,55,0.5) !important;
          color: #D4AF37 !important;
          font-size: 28px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          line-height: 1 !important;
        }
        .lb-next {
          right: 16px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 52px !important;
          height: 52px !important;
          border-radius: 50% !important;
          background: rgba(212,175,55,0.12) !important;
          border: 1.5px solid rgba(212,175,55,0.5) !important;
          color: #D4AF37 !important;
          font-size: 28px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          line-height: 1 !important;
        }
        .lb-prev:hover, .lb-next:hover {
          background: rgba(212,175,55,0.28) !important;
        }
        .lb-bar {
          position: absolute !important;
          bottom: 20px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          padding: 8px 20px !important;
          background: rgba(0,0,0,0.8) !important;
          border-radius: 999px !important;
          border: 1px solid rgba(212,175,55,0.2) !important;
          white-space: nowrap !important;
          z-index: 2147483647 !important;
        }
        .lb-spin {
          position: absolute !important;
          width: 48px !important;
          height: 48px !important;
          border: 4px solid rgba(212,175,55,0.2) !important;
          border-top-color: #D4AF37 !important;
          border-radius: 50% !important;
          animation: lbspin 0.8s linear infinite !important;
        }
        @keyframes lbspin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Full screen overlay — click background = close */}
      <div
        className="lb-overlay"
        onClick={onClose}
      >
        {/* Close button — top right */}
        <button
          className="lb-btn lb-close"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Prev */}
        <button
          className="lb-btn lb-prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Next */}
        <button
          className="lb-btn lb-next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >
          ›
        </button>

        {/* Image wrapper — click image = do nothing (background click = close) */}
        <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={img.src}
            src={img.src}
            alt={img.category}
            className="lb-img"
          />
        </div>

        {/* Bottom bar */}
        <div className="lb-bar" onClick={(e) => e.stopPropagation()}>
          <span style={{ color: '#D4AF37', fontSize: '13px', fontWeight: 600 }}>
            {img.category}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'monospace' }}>
            {index + 1} / {galleryImages.length}
          </span>
        </div>
      </div>
    </>,
    document.body
  );
}

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null), []);
  const goNext = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % galleryImages.length : null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      {/* Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 cursor-zoom-in bg-[#111]"
            style={{ aspectRatio: '4/3' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.category}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            <span className="absolute top-3 left-3 px-3 py-1 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider rounded-full">
              {img.category}
            </span>
            {/* Zoom icon center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 border border-[#D4AF37]/70">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox — rendered via Portal directly into document.body */}
      {isClient && lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}