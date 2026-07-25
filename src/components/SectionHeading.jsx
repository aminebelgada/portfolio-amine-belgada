import { motion } from "framer-motion";

/**
 * Consistent eyebrow + title + optional description used across sections.
 */
export default function SectionHeading({ eyebrow, title, description, align = "center", theme = "light" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = theme === "dark" ? "text-white" : "text-dark";
  const descColor = theme === "dark" ? "text-white/60" : "text-gray";
  const eyebrowColor = theme === "dark" ? "text-primary-light" : "text-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-3 max-w-2xl ${alignment}`}
    >
      {eyebrow && <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`text-base sm:text-lg leading-relaxed ${descColor}`}>{description}</p>}
    </motion.div>
  );
}
