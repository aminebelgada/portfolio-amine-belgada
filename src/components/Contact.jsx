import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedin, label: "LinkedIn", value: "amine-belgada", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", value: "amine-belgada", href: profile.github },
  { icon: Phone, label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Remplacez ces identifiants par les vôtres depuis votre dashboard EmailJS.
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/30 blur-[120px] rounded-full" />

      <div className="section-container relative">
        <SectionHeading
          eyebrow="Travaillons ensemble"
          title="Contact"
          description="Une question, une opportunité de stage ou un projet en tête ? Écrivez-moi."
          theme="dark"
        />

        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "LinkedIn" || link.label === "GitHub" ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="glass-dark rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <link.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-mono">{link.label}</p>
                  <p className="text-white font-medium text-sm">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-dark rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-white/70 font-medium">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-white/70 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@exemple.com"
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm text-white/70 font-medium">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Objet de votre message"
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-white/70 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Votre message..."
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer"}
              <Send size={18} />
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} /> Message envoyé avec succès. Merci !
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} /> Configurez vos identifiants EmailJS dans .env pour activer l'envoi.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
