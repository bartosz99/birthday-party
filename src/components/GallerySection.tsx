import { motion, AnimatePresence } from "framer-motion";
import { Beer, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Import gallery images - add more as you convert HEIC files to JPG
// import img1 from "./assets/gallery/IMG_1646.jpg";
import img2 from "./assets/gallery/IMG_1648.jpg";
// After converting HEIC files, uncomment and add:
import img3 from "./assets/gallery/IMG_5853.jpg";
import img4 from "./assets/gallery/IMG_9051.jpg";
import img5 from "./assets/gallery/IMG_9523.jpg";
import img6 from "./assets/gallery/IMG_2.jpg";
import img7 from "./assets/gallery/img_44.png";
import img8 from "./assets/gallery/image_45.jpeg";
import img9 from "./assets/gallery/img_46.jpeg";
import img10 from "./assets/gallery/50af4393-28d8-4089-b0f1-4f068a350c87.jpeg"
import img11 from "./assets/gallery/c94bbeaa-58fc-405a-adb0-64275bdf6f5a.jpeg"




const galleryImages = [
  // { src: img1, alt: "placeholder" },
  { src: img2, alt: "placeholder" },
  { src: img3, alt: "placeholder" },
  { src: img4, alt: "placeholder" },
  { src: img5, alt: "placeholder" },
  { src: img6, alt: "placeholder" },
  { src: img7, alt: "placeholder" },
  { src: img8, alt: "placeholder" },
  { src: img9, alt: "placeholder" },
  { src: img10, alt: "placeholder" },
  { src: img11, alt: "placeholder" },





  // Add more images here after conversion
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neon-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Beer className="w-8 h-8 text-neon-yellow" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              {/* PIWNE WSPOMNIENIA */}
            </h2>
            <Beer className="w-8 h-8 text-neon-yellow" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jesteśmy różni ale każdy lubi ze mną walić browary 🍺
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer aspect-square"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-yellow to-neon-cyan rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-border/50 bg-card/50">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium">
                    Kliknij aby powiększyć
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beer decoration */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground text-sm inline-flex items-center gap-2">
            <span className="text-2xl">🍻</span>
            Bo najlepsze imprezy to te przy dobrym piwie
            <span className="text-2xl">🍻</span>
          </p>
        </motion.div> */}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-10"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;

