import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-dark border-t border-white/10 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center font-display font-bold text-white text-xs">
            {profile.initials}
          </span>
          <div>
            <p className="text-white font-display font-semibold text-sm">{profile.name}</p>
            <p className="text-white/40 text-xs">© 2026 Tous droits réservés.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <Mail size={17} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white hover:-translate-y-1 transition-transform"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
}
