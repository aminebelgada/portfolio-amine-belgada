import { motion } from "framer-motion";
import { GraduationCap, BarChart3, Cog, Briefcase } from "lucide-react";
import { about } from "../data/content";
import SectionHeading from "./SectionHeading";

const icons = { GraduationCap, BarChart3, Cog, Briefcase };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div className="section-container">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} align="center" />

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {about.description.map((paragraph, i) => (
              <p key={i} className="text-gray text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {about.cards.map((card) => {
              const Icon = icons[card.icon];
              return (
                <motion.div
                  key={card.title}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="card p-6 group hover:shadow-glow transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-colors duration-300">
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-dark mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">{card.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
