# Portfolio — Amine Belgada

Portfolio Data Analyst ultra professionnel, moderne, responsive et animé, construit avec React, Vite, Tailwind CSS et Framer Motion.

## ✨ Stack

- **React 19** + **Vite** — build ultra rapide, code splitting natif
- **Tailwind CSS** — design system utilitaire (voir `tailwind.config.js`)
- **Framer Motion** — animations (fade, slide, scale, stagger, scroll reveal…)
- **React Router** — navigation SPA (page 404 incluse)
- **React Icons** + **Lucide Icons** — iconographie
- **Chart.js** (`react-chartjs-2`) — mini graphique KPI sur le projet principal
- **EmailJS** — formulaire de contact fonctionnel sans backend

## 🚀 Installation

```bash
npm install
```

## 🧑‍💻 Développement

```bash
npm run dev
```

Le site est servi sur `http://localhost:5173`.

## 📦 Build de production

```bash
npm run build
```

Le résultat est généré dans `dist/`, prêt à être déployé (Vercel, Netlify, etc.).

Pour prévisualiser le build localement :

```bash
npm run preview
```

## 📧 Configurer EmailJS (formulaire de contact)

1. Créez un compte sur [emailjs.com](https://www.emailjs.com/).
2. Créez un **service** (Gmail, Outlook…) et un **template** avec les champs `name`, `email`, `subject`, `message`.
3. Copiez `.env.example` en `.env` et renseignez :

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

4. Redémarrez `npm run dev`.

## 🖼️ Remplacer les visuels d'exemple

Ce dépôt inclut des visuels d'exemple générés (SVG) pour que le site soit fonctionnel immédiatement. Remplacez-les par vos propres fichiers :

| Élément | Chemin | Format conseillé |
|---|---|---|
| Photo de profil | `public/profile-photo.svg` | remplacez par `profile-photo.jpg` et mettez à jour `src/components/Hero.jsx` |
| CV téléchargeable | `public/Amine_Belgada_CV.pdf` | PDF |
| Rapport projet principal | `public/reports/rapport-systeme-decisionnel.pdf` | PDF |
| Captures Dashboard / Gallery | `public/projects/*.svg`, `public/gallery/*.svg` | PNG/JPG conseillés en production |
| Favicon | `public/favicon.svg` | SVG ou PNG |

## ✍️ Modifier le contenu

Tout le texte du site (nom, bio, compétences, projets, certificats, liens…) est centralisé dans **`src/data/content.js`**. Modifiez ce fichier pour mettre à jour le contenu sans toucher aux composants.

Pour ajouter un nouveau certificat, dupliquez un objet dans le tableau `certificates` de ce fichier — la section Certificates s'adapte automatiquement.

## 🗂️ Arborescence

```
src/
  components/   → Navbar, Hero, About, Skills, Projects, Gallery, Certificates, Contact, Footer…
  pages/        → Home, NotFound
  data/         → content.js (contenu centralisé)
  hooks/        → useActiveSection, useCountUp
public/         → assets statiques (images, PDF, favicon)
```

## 🌐 Déploiement sur Vercel

1. Poussez ce dépôt sur GitHub.
2. Sur [vercel.com](https://vercel.com), importez le repo.
3. Framework preset : **Vite**. Build command : `npm run build`. Output directory : `dist`.
4. Ajoutez vos variables d'environnement EmailJS dans les Project Settings.
5. Déployez 🚀

## ⚡ Performance

- Sections sous la ligne de flottaison chargées via `React.lazy` + `Suspense` (code splitting)
- Images en `loading="lazy"`
- Police optimisée via `font-display: swap` (Google Fonts)

## ♿ Accessibilité

- Focus visible sur les éléments interactifs
- `prefers-reduced-motion` respecté (les animations sont désactivées si l'utilisateur le préfère)
- Attributs `alt` sur toutes les images, `aria-label` sur les boutons icône
