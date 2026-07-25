import { motion } from "framer-motion";
import { SiGoogle, SiPostgresql, SiPython } from "react-icons/si";
import { Award, BarChart3 } from "lucide-react";
import { certificates } from "../data/content";
import SectionHeading from "./SectionHeading";

const iconMap = { SiGoogle, BarChart3, SiPostgresql, SiPython };

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28 bg-white overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="Formation continue"
          title="Certificates"
          description="Certifications obtenues pour renforcer mes compétences en data et BI."
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {certificates.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Award;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-start sm:items-center gap-6 sm:gap-0 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-glow z-10">
                    <Icon size={16} className="text-primary" />
                  </div>

                  <div className={`pl-16 sm:pl-0 sm:w-1/2 ${isEven ? "sm:pr-14 sm:text-right" : "sm:pl-14"}`}>
                    <div className="card p-5 inline-block w-full sm:w-auto sm:min-w-[280px] hover:shadow-glow transition-shadow duration-300">
                      <p className="font-mono text-xs text-primary mb-1">{cert.date}</p>
                      <h3 className="font-display font-semibold text-dark">{cert.title}</h3>
                      <p className="text-gray text-sm mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-gray text-sm mt-10">
          De nouveaux certificats sont ajoutés régulièrement — cette section est prévue pour grandir facilement.
        </p>
      </div>
    </section>
  );
}
