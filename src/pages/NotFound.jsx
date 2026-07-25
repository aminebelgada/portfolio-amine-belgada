import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-surface text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm mb-3">Erreur 404</p>
        <h1 className="font-display text-6xl sm:text-7xl font-bold gradient-text mb-4">
          Page introuvable
        </h1>
        <p className="text-gray max-w-md mx-auto mb-8">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          <Home size={18} />
          Retour à l'accueil
        </Link>
      </motion.div>
    </section>
  );
}
