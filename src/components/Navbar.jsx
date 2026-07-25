import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="section-container">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center font-display font-bold text-white text-sm shadow-glow group-hover:scale-105 transition-transform">
              {profile.initials}
            </span>
            <span className="font-display font-semibold text-dark hidden sm:inline">
              {profile.name}
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive ? "text-primary" : "text-dark/70 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm">
            Me contacter
          </a>

          <button
            aria-label="Ouvrir le menu"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-dark"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mx-6 mt-2"
          >
            <div className="glass rounded-2xl p-4 flex flex-col gap-1 shadow-card">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-dark font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary justify-center mt-2"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
