import { motion } from "framer-motion";
import {
  SiPython,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiApacheairflow,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Database, Sigma, Table, BarChart3, Filter, Workflow } from "lucide-react";
import { skillCategories } from "../data/content";
import SectionHeading from "./SectionHeading";

const iconMap = {
  SiPython,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiApacheairflow,
  SiDocker,
  SiGit,
  SiGithub,
  Database,
  Sigma,
  Table,
  BarChart3,
  Filter,
  Workflow,
};

function SkillBar({ skill }) {
  const Icon = iconMap[skill.icon];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-dark">
          {Icon && <Icon size={16} className="text-primary" />}
          {skill.name}
        </span>
        <span className="font-mono text-xs text-gray">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-primary"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,black,transparent)]" />

      <div className="section-container relative">
        <SectionHeading
          eyebrow="Boîte à outils"
          title="Compétences"
          description="Les technologies et outils que j'utilise pour transformer la donnée brute en décisions."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="card p-6 hover:shadow-glow transition-shadow duration-300"
            >
              <h3 className="font-display font-semibold text-lg text-dark mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.category}
              </h3>
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
