import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Image } from "lucide-react";

/**
 * ScreenshotGallery — renders a grid of images with a click-to-zoom lightbox.
 *
 * Props:
 *   images  {Array}   — Array of { url, caption, alt } objects (required)
 *   title   {string}  — Optional section heading (default: "Screenshots")
 */
const ScreenshotGallery = ({ images = [], title = "Screenshots" }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!images || images.length === 0) return null;

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const next = () =>
    setLightboxIndex((i) => (i + 1) % images.length);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div>
      {/* Grid */}
      <div
        className={`grid gap-4 ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="group relative block rounded-xl overflow-hidden border border-[#1a2d45] hover:border-[#22d3ee]/30 transition-all duration-200 bg-[#0d1526] text-left"
          >
            {/* Image */}
            <div className="relative aspect-video bg-[#030712] overflow-hidden">
              <img
                src={img.url}
                alt={img.alt || img.caption || "Screenshot"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Show a placeholder if image fails to load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="absolute inset-0 hidden items-center justify-center flex-col gap-2 bg-[#0d1526]"
                style={{ display: "none" }}
              >
                <Image className="w-8 h-8 text-[#1a2d45]" />
                <span className="text-[#4a5568] text-xs font-mono">
                  Image unavailable
                </span>
              </div>

              {/* Zoom overlay */}
              <div className="absolute inset-0 bg-[#060b14]/0 group-hover:bg-[#060b14]/40 transition-colors duration-200 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>

              {/* Index badge */}
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#060b14]/70 text-[#22d3ee] text-xs font-mono">
                {i + 1} / {images.length}
              </div>
            </div>

            {/* Caption */}
            {img.caption && (
              <div className="px-3 py-2.5">
                <p className="text-[#8899aa] text-xs font-mono leading-relaxed">
                  {img.caption}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#030712]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-[#8899aa] hover:text-[#f0f4f8] transition-colors duration-200 z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation — prev */}
            {images.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 p-2 rounded-lg border border-[#1a2d45] bg-[#0d1526] text-[#8899aa] hover:text-[#22d3ee] hover:border-[#22d3ee]/30 transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Image */}
            <div className="rounded-xl overflow-hidden border border-[#1a2d45]">
              <img
                src={images[lightboxIndex].url}
                alt={
                  images[lightboxIndex].alt ||
                  images[lightboxIndex].caption ||
                  "Screenshot"
                }
                className="w-full h-auto max-h-[75vh] object-contain bg-[#030712]"
              />
            </div>

            {/* Caption + counter */}
            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="text-[#8899aa] text-sm font-mono">
                {images[lightboxIndex].caption || ""}
              </p>
              <span className="text-[#4a5568] text-xs font-mono flex-shrink-0">
                {lightboxIndex + 1} / {images.length}
              </span>
            </div>

            {/* Navigation — next */}
            {images.length > 1 && (
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 p-2 rounded-lg border border-[#1a2d45] bg-[#0d1526] text-[#8899aa] hover:text-[#22d3ee] hover:border-[#22d3ee]/30 transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;
