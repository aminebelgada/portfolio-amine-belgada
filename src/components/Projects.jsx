import { motion } from "framer-motion";
import { FileText, LayoutDashboard, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";
import ProjectChart from "./ProjectChart";

function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="card overflow-hidden grid lg:grid-cols-2 hover:shadow-glow transition-shadow duration-500"
    >
      <div className="relative bg-dark p-8 flex flex-col justify-between order-2 lg:order-1">
        <div className="absolute inset-0 bg-gradient-radial-glow opacity-60" />
        <div className="relative">
          <img
            src={project.image}
            alt={`Aperçu du dashboard — ${project.title}`}
            loading="lazy"
            className="w-full rounded-xl border border-white/10 shadow-2xl"
          />
        </div>
        <div className="relative mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
          <p className="font-mono text-xs text-white/50 mb-1">Interventions / mois</p>
          <ProjectChart />
        </div>
      </div>

      <div className="p-8 sm:p-10 order-1 lg:order-2 flex flex-col">
        <span className="eyebrow mb-3">Projet principal</span>
        <h3 className="font-display text-2xl font-semibold text-dark leading-snug">
          {project.title}
        </h3>
        <p className="text-gray mt-4 leading-relaxed">{project.description}</p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-dark/60 mb-2">
            Fonctionnalités
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-dark/60 mb-2">
            KPIs suivis
          </p>
          <div className="flex flex-wrap gap-2">
            {project.kpis.map((kpi) => (
              <span
                key={kpi}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-accent-violet/10 text-accent-violet"
              >
                {kpi}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-secondary !py-2.5 !px-5 text-sm">
            <FaGithub size={16} /> Voir GitHub
          </a>
          <a href={project.links.report} target="_blank" rel="noreferrer" className="btn-secondary !py-2.5 !px-5 text-sm">
            <FileText size={16} /> Rapport PDF
          </a>
          <a href={project.links.dashboard} className="btn-primary !py-2.5 !px-5 text-sm">
            <LayoutDashboard size={16} /> Dashboard
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="card overflow-hidden group hover:shadow-glow transition-shadow duration-300"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg text-dark">{project.title}</h3>
        <p className="text-gray text-sm mt-2 leading-relaxed">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary">
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link"
        >
          Voir le projet
          <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 bg-white overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="Réalisations"
          title="Projets"
          description="Une sélection de projets illustrant mon approche de bout en bout : de la donnée brute au dashboard décisionnel."
        />

        <div className="mt-14">
          <FeaturedProject project={featured} />
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-8">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
