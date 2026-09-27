"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Association Swani - activité 1",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Association Swani - activité 2",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Association Swani - activité 3",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Association Swani - activité 4",
  },
];

export default function Gallery() {
  const { isArabic } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage((selectedImage + 1) % images.length);
  };

  const previousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#081525] px-6 py-24"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-500/5 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            {isArabic ? "معرض الصور" : "Galerie"}
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            {isArabic ? (
              <>
                لحظات من
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  أنشطتنا
                </span>
              </>
            ) : (
              <>
                Quelques moments de
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  nos activités
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {isArabic
              ? "اكتشف بعض اللحظات من أنشطة ومبادرات جمعية السواني."
              : "Découvrez quelques moments des activités et initiatives de l'Association Swani."}
          </p>
        </div>

        {/* GALLERY */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left outline-none transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-orange-500/10 focus:ring-2 focus:ring-orange-400/50"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

              {/* NUMBER */}
              <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-xs font-black text-white backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* ZOOM */}
              <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                +
              </div>

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm font-bold text-white">
                  {isArabic
                    ? `نشاط الجمعية ${index + 1}`
                    : `Activité ${index + 1}`}
                </p>

                <p className="mt-1 text-xs text-gray-400 transition duration-300 group-hover:text-gray-300">
                  {isArabic
                    ? "اضغط لمشاهدة الصورة"
                    : "Cliquer pour agrandir"}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* FOOTNOTE */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            {isArabic
              ? "صور من أنشطة ومبادرات الجمعية"
              : "Images des activités et initiatives de l'association"}
          </p>
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          onClick={closeLightbox}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl text-white transition duration-300 hover:rotate-90 hover:bg-orange-500 sm:right-7 sm:top-7"
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Image précédente"
            className="absolute left-3 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-3xl text-white transition duration-300 hover:bg-orange-500 sm:left-7"
          >
            ‹
          </button>

          {/* IMAGE */}
          <div
            className="relative flex max-h-[90vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07111f] shadow-2xl shadow-black/50">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-h-[78vh] max-w-[90vw] object-contain"
              />
            </div>

            <div className="mt-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              {String(selectedImage + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Image suivante"
            className="absolute right-3 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-3xl text-white transition duration-300 hover:bg-orange-500 sm:right-7"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}