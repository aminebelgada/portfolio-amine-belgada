import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { profile, stats } from "../data/content";
import ParticlesBackground from "./ParticlesBackground";
import TypingEffect from "./TypingEffect";
import useCountUp from "../hooks/useCountUp";

function StatItem({ value, suffix, label, delay }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center md:items-start"
    >
      <span className="font-mono text-3xl sm:text-4xl font-semibold gradient-text">
        {animated}
        {suffix}
      </span>
      <span className="text-sm text-gray mt-1">{label}</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-surface"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 bg-gradient-radial-glow" />
      <ParticlesBackground className="absolute inset-0 w-full h-full" />

      <div className="section-container relative z-10 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Text content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4"
          >
            Portfolio · Data Analyst
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight"
          >
            Salut, je suis{" "}
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-9 font-mono text-lg sm:text-xl text-primary font-medium"
          >
            <TypingEffect words={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-gray text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 text-gray text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {profile.subtagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="/CV MOHAMED AMINE BELGADA 2026 nv 1.pdf"
              download="CV MOHAMED AMINE BELGADA 2026 nv 1.pdf"
              className="btn-primary"
            >
              <Download size={18} />
              Télécharger mon CV
            </a>
            <a href="#projects" className="btn-secondary">
              Voir mes projets
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-14 grid grid-cols-3 gap-8"
          >
            {stats.map((s, i) => (
              <StatItem key={s.label} {...s} delay={0.6 + i * 0.1} />
            ))}
          </motion.div>
        </div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-40 animate-pulse-slow" />
            <div className="absolute -inset-3 rounded-full border border-primary/20 animate-spin-slow" />
            <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-primary shadow-glow">
              <img
                src="/profile-photo.jpeg"
                alt={`Photo de profil de ${profile.name}`}
                className="w-full h-full rounded-full object-cover bg-slate-200"
                loading="eager"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-6 glass rounded-2xl px-4 py-3 shadow-card hidden sm:block"
            >
              <p className="font-mono text-xs text-gray">Power BI</p>
              <p className="font-mono text-sm font-semibold text-primary">Expert</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-8 glass rounded-2xl px-4 py-3 shadow-card hidden sm:block"
            >
              <p className="font-mono text-xs text-gray">SQL</p>
              <p className="font-mono text-sm font-semibold text-primary">Advanced</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
