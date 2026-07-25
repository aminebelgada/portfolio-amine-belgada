import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "../data/content";
import SectionHeading from "./SectionHeading";

const sizeToSpan = {
  large: "sm:row-span-2 sm:col-span-2",
  medium: "sm:row-span-2",
  small: "",
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((i) => (i + 1) % gallery.length);
  const showPrev = () => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);

  return (
    <section id="gallery" className="relative py-28 bg-surface overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="Aperçu visuel"
          title="Gallery"
          description="Captures de dashboards, pipelines et environnements de travail."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] gap-4">
          {gallery.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
              className={`relative rounded-2xl overflow-hidden group focus-visible:outline-2 focus-visible:outline-primary ${sizeToSpan[item.size]}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-white/60 font-mono text-xs">{item.category}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={closeLightbox}
          >
            <button
              aria-label="Fermer"
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            <button
              aria-label="Image précédente"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.figure
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <img
                src={gallery[activeIndex].image}
                alt={gallery[activeIndex].title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <figcaption className="mt-4 text-center text-white/80 font-medium">
                {gallery[activeIndex].title}
              </figcaption>
            </motion.figure>

            <button
              aria-label="Image suivante"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
