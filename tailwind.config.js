/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        accent: {
          violet: "#7C3AED",
          cyan: "#06B6D4",
        },
        surface: "#F8FAFC",
        dark: {
          DEFAULT: "#0F172A",
          soft: "#111C34",
          card: "#152238",
        },
        gray: {
          DEFAULT: "#64748B",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
        "gradient-primary": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "gradient-radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(37, 99, 235, 0.35)",
        "glow-violet": "0 0 40px rgba(124, 58, 237, 0.3)",
        card: "0 10px 40px -10px rgba(15, 23, 42, 0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.9 },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};
