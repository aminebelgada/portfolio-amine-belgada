// Centralized content for the portfolio.
// Update this file to change text across the whole site.

export const profile = {
  name: "Amine Belgada",
  initials: "AB",
  roles: ["Data Analyst", "Business Intelligence", "Power BI Developer"],
  tagline:
    "Je suis étudiant en Master Système d'Information & Data Science, passionné par l'analyse de données, la Business Intelligence et le Data Engineering.",
  subtagline:
    "Je développe des solutions décisionnelles complètes allant de la collecte des données jusqu'à la création de tableaux de bord interactifs.",
  email: "amine.belgada@example.com",
  phone: "+212 6 27 46 60 57",
  linkedin: "https://linkedin.com/in/amine-belgada",
  github: "https://github.com/amine-belgada",
  cvPath: "/Amine_Belgada_CV.pdf",
};

export const stats = [
  { value: 3, suffix: "+", label: "Projets" },
  { value: 10, suffix: "+", label: "Dashboards" },
  { value: 100, suffix: "%", label: "Motivation" },
];

export const about = {
  title: "À propos",
  eyebrow: "Qui suis-je",
  description: [
    "Étudiant en Master Système d'Information & Data Science, je suis passionné par l'analyse de données, l'ETL, les Data Warehouses et la visualisation de données.",
    "Je recherche une opportunité en tant que Data Analyst afin de mettre en pratique mes compétences en Python, SQL et Power BI.",
  ],
  cards: [
    {
      icon: "GraduationCap",
      title: "Formation",
      detail: "Master Système d'Information & Data Science",
    },
    {
      icon: "BarChart3",
      title: "Data Analytics",
      detail: "Business Intelligence",
    },
    {
      icon: "Cog",
      title: "Data Engineering",
      detail: "ETL · Airflow · Docker",
    },
    {
      icon: "Briefcase",
      title: "Recherche",
      detail: "Stage · CDI · Data Analyst",
    },
  ],
};

export const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 85, icon: "SiPython" },
      { name: "SQL", level: 90, icon: "Database" },
      { name: "DAX", level: 75, icon: "Sigma" },
    ],
  },
  {
    category: "Data",
    skills: [
      { name: "Pandas", level: 85, icon: "SiPandas" },
      { name: "NumPy", level: 80, icon: "SiNumpy" },
      { name: "Excel", level: 90, icon: "Table" },
    ],
  },
  {
    category: "BI",
    skills: [
      { name: "Power BI", level: 90, icon: "BarChart3" },
      { name: "Power Query", level: 80, icon: "Filter" },
      { name: "DAX", level: 75, icon: "Sigma" },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "ETL", level: 80, icon: "Workflow" },
      { name: "Apache Airflow", level: 75, icon: "SiApacheairflow" },
      { name: "Docker", level: 70, icon: "SiDocker" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL Server", level: 85, icon: "Database" },
      { name: "PostgreSQL", level: 80, icon: "SiPostgresql" },
    ],
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", level: 85, icon: "SiGit" },
      { name: "GitHub", level: 85, icon: "SiGithub" },
    ],
  },
];

export const projects = [
  {
    id: "decisional-system",
    featured: true,
    title:
      "Conception et développement d'un système décisionnel pour l'analyse des interventions techniques des clients",
    description:
      "Développement complet d'une plateforme décisionnelle basée sur un Data Warehouse permettant d'analyser les interventions techniques.",
    features: [
      "Construction d'un Data Warehouse en architecture en étoile",
      "Pipeline ETL développé avec Python",
      "Orchestration des flux avec Apache Airflow",
      "Conteneurisation avec Docker",
      "Stockage et modélisation sur SQL Server",
      "Dashboard Power BI interactif",
    ],
    kpis: [
      "Temps moyen de réparation",
      "Nombre d'interventions",
      "Coût des réparations",
      "Performance des techniciens",
    ],
    tech: ["Python", "SQL Server", "Docker", "Airflow", "Power BI"],
    image: "/projects/dashbord-intervention.jpeg",
    links: {
      github: "https://github.com/amine-belgada/decisional-system",
      report: "/reports/rapport-systeme-decisionnel.pdf",
      dashboard: "#gallery",
    },
  },
  {
    id: "titanic",
    featured: false,
    title: "Titanic Data Analysis",
    description:
      "Analyse exploratoire des données du Titanic, nettoyage des données et modélisation prédictive de la survie des passagers.",
    features: ["EDA approfondie", "Nettoyage & feature engineering", "Modèle de Machine Learning"],
    tech: ["Python", "Scikit-Learn", "Matplotlib"],
    image: "/projects/titanic.svg",
    links: {
      github: "https://github.com/amine-belgada/titanic-analysis",
    },
  },
  {
    id: "sales-dashboard",
    featured: false,
    title: "Sales Analysis Dashboard",
    description:
      "Tableau de bord décisionnel pour le suivi des ventes, incluant des indicateurs clés de performance et des prévisions.",
    features: ["KPIs de vente en temps réel", "Requêtes SQL optimisées", "Prévisions (Forecast)"],
    tech: ["Python", "SQL", "Power BI"],
    image: "/projects/image2.jpg",
    links: {
      github: "https://github.com/amine-belgada/sales-dashboard",
    },
  },
];

export const gallery = [
  { id: 1, title: "Dashboard Power BI", category: "Power BI", image: "/gallery/dashboard-powerbi.svg", size: "large" },
  { id: 2, title: "Orchestration Airflow", category: "Airflow", image: "/gallery/airflow.svg", size: "small" },
  { id: 3, title: "Modélisation SQL Server", category: "SQL Server", image: "/gallery/sqlserver.svg", size: "medium" },
  { id: 4, title: "Pipeline ETL", category: "ETL", image: "/gallery/etl.svg", size: "small" },
  { id: 5, title: "Scripts Python", category: "Python", image: "/gallery/python.svg", size: "medium" },
  { id: 6, title: "Dashboard des ventes", category: "Power BI", image: "/gallery/sales-gallery.svg", size: "small" },
];

export const certificates = [
  {
    id: 1,
    title: "Google Data Analytics",
    issuer: "Google",
    date: "2025",
    icon: "SiGoogle",
  },
  {
    id: 2,
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    date: "2025",
    icon: "BarChart3",
  },
  {
    id: 3,
    title: "SQL for Data Science",
    issuer: "Coursera",
    date: "2024",
    icon: "SiPostgresql",
  },
  {
    id: 4,
    title: "Python for Data Analysis",
    issuer: "Coursera",
    date: "2024",
    icon: "SiPython",
  },
  // Ajoutez facilement un nouveau certificat en dupliquant un objet ci-dessus.
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
