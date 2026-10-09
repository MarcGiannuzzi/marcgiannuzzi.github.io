// Bilingual portfolio content. English is served at `/`, French at `/fr`.
// Source of truth for experiences: github.com/MarcGiannuzzi/cv (English & French .tex).

export type Lang = "en" | "fr"

export interface ExternalLink {
  label: string
  href: string
  logo?: string
}

// Client mission carried out while employed by a consulting firm
export interface Mission {
  title: string
  client: string
  clientUrl?: string
  clientLogo?: string
  period: string
  description: string
  bullets?: string[]
  tags: string[]
}

export interface Experience {
  // Paths under public/, shown before the company name (several for joint ventures)
  logos: string[]
  title: string
  company: string
  url?: string
  period: string
  description: string
  links?: ExternalLink[]
  bullets?: string[]
  tags: string[]
  missions?: Mission[]
}

export interface Education {
  logo: string
  school: string
  url: string
  meta: string
  description: string
  bullets?: string[]
  tags?: string[]
}

export interface Certification {
  name: string
  period: string
  description: string
}

export interface Content {
  nav: { about: string; experience: string; education: string; skills: string }
  resume: { label: string; href: string }
  switchLang: { label: string; href: string; ariaLabel: string }
  hero: { title: string; subtitle: [string, string] }
  ventures: ExternalLink[]
  sections: {
    experience: string
    education: string
    educationSub: string
    certifications: string
    techStack: string
  }
  viewFullExperience: string
  missionsLabel: string
  experiences: Experience[]
  education: Education[]
  certifications: { provider: string; logo: string; url: string; subtitle: string; items: Certification[] }
  footer: string
}

const ventures: ExternalLink[] = [
  { label: "tadata.fr", href: "https://tadata.fr/", logo: "/logos/tadata.png" },
  { label: "waiyers.com", href: "https://waiyers.com/", logo: "/logos/waiyers.png" },
]

const waiyersTags = [
  "Flutter",
  "TypeScript",
  "Next.js",
  "Go",
  "Python",
  "FastAPI",
  "gRPC",
  "LLM APIs",
  "PostgreSQL",
  "AWS",
  "Terraform",
  "Kubernetes",
  "Skaffold",
  "GitHub Actions",
]

const interieurTags = ["Data Lakehouse", "Data Governance", "Data Catalog", "Data Pipelines", "Dashboards"]

const en: Content = {
  nav: { about: "About", experience: "Experience", education: "Education", skills: "Skills" },
  resume: {
    label: "Resume",
    href: "https://github.com/MarcGiannuzzi/cv/blob/main/Marc_Giannuzzi_CV_English.pdf",
  },
  switchLang: { label: "FR", href: "/fr", ariaLabel: "Voir en français" },
  hero: {
    title: "AI Data & Security Engineer",
    subtitle: ["Data engineering, AI and cybersecurity, from architecture to production.", "Founder of Tadata and Waiyers."],
  },
  ventures,
  sections: {
    experience: "Professional Experience",
    education: "Education & Certifications",
    educationSub: "Education",
    certifications: "Certifications",
    techStack: "Tech Stack",
  },
  viewFullExperience: "Download Resume (PDF)",
  missionsLabel: "Client missions",
  experiences: [
    {
      logos: ["/logos/interieur.png"],
      title: "Data Engineer",
      company: "Ministère de l'Intérieur • Paris",
      url: "https://www.interieur.gouv.fr/",
      period: "May 2026 - Aug 2026",
      description:
        "Designed and implemented a Data Lakehouse architecture for the French Ministry of the Interior to centralize, structure, and leverage the ministry's data assets.",
      bullets: [
        "Designed the Data Lakehouse architecture (bronze, silver, gold layers)",
        "Ingested and transformed data from heterogeneous sources",
        "Orchestrated data pipelines",
        "Implemented data governance and a data catalog",
        "Optimized query and storage performance",
        "Created analytical dashboards for business units",
      ],
      tags: interieurTags,
    },
    {
      logos: ["/logos/waiyers.png", "/logos/tadata.png"],
      title: "Founder (Freelance)",
      company: "Waiyers × Tadata • Paris",
      url: "https://waiyers.com/",
      period: "Sept 2025 - Present",
      description:
        "Waiyers develops a suite of focused applications behind one shared account. Blog, tech news and data/AI/cloud consulting published on tadata.fr.",
      links: ventures,
      bullets: [
        "Multi-app development: web, iOS, Android and desktop clients behind one shared account",
        "Data architecture: offline-first sync, resumable uploads, user-owned storage (Google Drive)",
        "Backend & APIs: services, data pipelines and orchestration of AI model workflows",
        "Cloud & DevOps: Kubernetes, CI/CD with GitHub Actions, AWS",
        "Product vision: requirement definition, KPIs, roadmap and dashboards",
      ],
      tags: waiyersTags,
    },
    {
      logos: ["/logos/sfeir.png"],
      title: "Data Consultant",
      company: "SFEIR • Neuilly-sur-Seine",
      url: "https://www.sfeir.com/",
      period: "Mar 2025 - Sept 2025",
      description:
        "Working at France's premier Google Cloud Platform partner (Services 2023, Training 2024, EMEA 2025), specializing in software development and technological transformation for enterprise clients.",
      tags: ["GCP", "Technical Recruitment", "Cloud Architecture"],
      missions: [
        {
          title: "Data Architect",
          client: "LCL (Le Crédit Lyonnais) • Villejuif",
          clientUrl: "https://www.lcl.fr/",
          clientLogo: "/logos/lcl.png",
          period: "Apr 2025 - Sept 2025",
          description:
            "Leading the optimization of LCL's internal SNI entity organization and implementing analytical dashboards for CODIR and squad leaders. Consolidating data from diverse sources and orchestrating automated processing through scalable, maintainable architecture.",
          bullets: [
            "Conducted comprehensive SI audit comparing PostgreSQL, MongoDB, and Teradata",
            "Designed hybrid technical architecture (on-premise first with GCP cloud equivalents)",
            "Orchestrated Kubernetes deployment of dockerized Python scripts",
            "Integrated Jira APIs and other enterprise tools into data pipelines",
            "Created dynamic Power BI dashboards for executive leadership",
            "Led technical team of 2 data engineers and 1 Product Owner",
          ],
          tags: ["Kubernetes", "GCP", "PostgreSQL", "MongoDB", "Power BI", "Python", "GitLab CI/CD"],
        },
      ],
    },
    {
      logos: ["/logos/visian.png"],
      title: "Data Engineer Consultant",
      company: "Visian • La Défense",
      url: "https://visian.tech/",
      period: "Jan 2023 - Jan 2025",
      description: "Specialized consulting in large-scale data projects while leading internal innovation initiatives.",
      bullets: [
        "Directed Pysquad project for internal digital product development",
        "Coordinated generic AI implementation for multimodal inference tasks using Azure AI Studio",
        "Built data platform for sales team to manage missions, prospects, and consultants",
      ],
      tags: ["Azure AI Studio", "Django", "FastAPI", "Streamlit", "Redis"],
      missions: [
        {
          title: "Data Engineer",
          client: "Engie • Bagneux",
          clientUrl: "https://www.engie.fr/",
          clientLogo: "/logos/engie.png",
          period: "Jan 2023 - Jan 2025",
          description:
            "Core member of agile team developing Mon Bonus Engie/Ecodefi+, ICE, and Ecogestes Dynamiques products in SAFe framework, serving over 1.6M total customers.",
          bullets: [
            "Built REST APIs handling 100k+ daily requests with sub-second latency",
            "Architected AWS microservices and digital platforms",
            "Scaled with data scientists Deep Learning algorithms (DeepAR, Temporal Fusion Transformer)",
            "Worked on technology migration roadmap within SAFe train",
            "Optimized database flows with advanced indexing and structure improvements",
          ],
          tags: ["AWS Lambda", "Databricks", "Python", "Terraform", "Apache Airflow", "MLflow", "DynamoDB"],
        },
      ],
    },
    {
      logos: ["/logos/aqua-digital-rising.png"],
      title: "Lead Data Scientist",
      company: "Aqua Digital Rising • France",
      url: "https://www.linkedin.com/company/aqua-digital-rising/",
      period: "Aug 2021 - Oct 2022",
      description: "Led data science initiatives for fintech startup revolutionizing sports betting through advanced analytics.",
      bullets: [
        "Managed multi-database architecture (MongoDB, SQL Server, HDF5) with hundreds of GBs",
        "Developed highly configurable REST API for front-end data aggregation",
        "Implemented real-time statistics updates using RabbitMQ and Redis caching",
        "Configured Azure cloud services (Functions, Web Services, Artifacts, Pipelines)",
        "Coordinated team of 2 engineers (data scientist and front-end developer)",
      ],
      tags: ["SQL Server", "MongoDB", "Redis", "RabbitMQ", "Azure", "InfluxDB"],
    },
    {
      logos: ["/logos/orange-business.png"],
      title: "Data Scientist",
      company: "Orange Business Services • Paris",
      url: "https://www.orange-business.com/",
      period: "Feb 2021 - Jul 2021",
      description: "Digital transformation consulting on communication and network projects.",
      bullets: [
        "Diagnosed VoIP network anomalies using machine learning (clustering)",
        "Built a dynamic VoIP network graph with Kibana, then Neo4j, embedded in a web page",
        "Analyzed DevOps metrics of an Elastic server cluster",
        "Automated Elastic log cleanup with log4j and Bash",
      ],
      tags: ["Python", "scikit-learn", "Elastic Stack (ELK)", "Neo4j", "JavaScript", "Bash"],
    },
    {
      logos: ["/logos/digiberries.png"],
      title: "Software Engineer",
      company: "Digiberries • Paris",
      url: "https://www.digiberries.com/",
      period: "Aug 2020 - Mar 2021",
      description: "Web referencing agency improving clients' SEO strategies.",
      bullets: [
        "Automated Excel report generation from Google Ads data",
        "Built an SEO analysis tool with automated PDF reports (Lighthouse, Node.js)",
        "Automated email sending",
      ],
      tags: ["Python", "Node.js", "Lighthouse", "Google Ads"],
    },
    {
      logos: ["/logos/eudonet.png"],
      title: "Data Scientist",
      company: "Eudonet CRM • Courbevoie",
      url: "https://www.eudonet.com/",
      period: "Apr 2020 - Aug 2020",
      description: "B2B CRM software publisher.",
      bullets: [
        "Set up the Elastic Stack (ELK + Filebeat) for Windows IIS log analysis",
        "Built a monitoring tool and a Python usage-drop detection algorithm (FBProphet)",
        "Developed a dynamic visualization web platform (JavaScript, Node.js)",
        "Created Power BI dashboards and PowerShell scripts for IIS application management",
      ],
      tags: ["Python", "SQL Server", "Elastic Stack (ELK)", "Power BI", "PowerShell", "JavaScript"],
    },
    {
      logos: ["/logos/veesion.png"],
      title: "Software Engineer",
      company: "Veesion • Paris",
      url: "https://veesion.io/",
      period: "Jul 2019 - Sept 2019",
      description: "French scale-up detecting shoplifting automatically with AI.",
      bullets: [
        "Built an internal video labeling and visualization platform with Django",
        "Classified data for computer vision model training",
      ],
      tags: ["Python", "Django", "JavaScript", "Amazon S3"],
    },
  ],
  education: [
    {
      logo: "/logos/polytechnique.png",
      school: "Institut Polytechnique de Paris (École Polytechnique)",
      url: "https://www.polytechnique.edu/",
      meta: "2026 - 2027 • Palaiseau, France",
      description: "Executive MSc in Cybersecurity, specialization: Security Architect.",
      tags: ["Cybersecurity", "Security Architecture"],
    },
    {
      logo: "/logos/ucr.png",
      school: "University of California, Riverside",
      url: "https://www.ucr.edu/",
      meta: "2019 - 2020 • Exchange Program",
      description: "International exchange focusing on advanced computer science and data mining techniques.",
      bullets: [
        "CS 235: Data Mining Techniques",
        "CS 171: Introduction to Machine Learning and Data Mining",
        "CS 009: Python Programming",
      ],
    },
    {
      logo: "/logos/esilv.png",
      school: "ESILV - École Supérieure d'Ingénieurs Léonard de Vinci",
      url: "https://www.esilv.fr/",
      meta: "2018 - 2021 • Courbevoie, France",
      description:
        "Master's in Computer Science, Big Data & Connected Objects with specialization in Data Science. Focused on statistical analysis, machine learning algorithms, and large-scale data processing systems.",
      tags: ["Data Science", "Big Data", "IoT", "Machine Learning"],
    },
    {
      logo: "/logos/fenelon.png",
      school: "CPGE Fénelon Sainte-Marie",
      url: "https://www.fenelonsaintemarie.org/",
      meta: "2016 - 2018 • Paris, France",
      description: "Classes préparatoires: intensive pre-engineering program in Mathematics and Physics (MPSI / MP).",
      tags: ["Mathematics", "Physics", "Computer Science"],
    },
    {
      logo: "/logos/janson-de-sailly.svg",
      school: "Lycée Janson de Sailly",
      url: "https://www.janson-de-sailly.fr/",
      meta: "2016 • Paris, France",
      description: "Scientific Baccalauréat (Bac S), Engineering Sciences (SI) track, with honors (mention Bien). Chinese as second foreign language.",
      tags: ["Bac S", "Engineering Sciences (SI)", "Mention Bien", "Chinese (LV2)"],
    },
  ],
  certifications: {
    provider: "Google Cloud Platform",
    logo: "/logos/gcp.png",
    url: "https://cloud.google.com/learn/certification",
    subtitle: "Professional Certifications",
    items: [
      {
        name: "Professional Machine Learning Engineer",
        period: "2026",
        description: "Designing, building, and productionizing machine learning models on Google Cloud Platform.",
      },
      {
        name: "Professional Data Engineer",
        period: "April 2025 - April 2027",
        description: "Expertise in designing, building, and maintaining data processing systems on Google Cloud Platform.",
      },
      {
        name: "Associate Cloud Engineer",
        period: "April 2025 - April 2028",
        description: "Proficiency in deploying applications, monitoring operations, and managing enterprise cloud solutions.",
      },
    ],
  },
  footer: "© Marc Giannuzzi. All rights reserved.",
}

const fr: Content = {
  nav: { about: "À propos", experience: "Expérience", education: "Formation", skills: "Compétences" },
  resume: {
    label: "CV",
    href: "https://github.com/MarcGiannuzzi/cv/blob/main/Marc_Giannuzzi_CV_Francais.pdf",
  },
  switchLang: { label: "EN", href: "/", ariaLabel: "View in English" },
  hero: {
    title: "AI Data & Security Engineer",
    subtitle: [
      "Data engineering, IA et cybersécurité, de l'architecture à la mise en production.",
      "Fondateur de Tadata et Waiyers.",
    ],
  },
  ventures,
  sections: {
    experience: "Expérience professionnelle",
    education: "Formation & Certifications",
    educationSub: "Formation",
    certifications: "Certifications",
    techStack: "Stack technique",
  },
  viewFullExperience: "Télécharger le CV (PDF)",
  missionsLabel: "Missions clients",
  experiences: [
    {
      logos: ["/logos/interieur.png"],
      title: "Data Engineer",
      company: "Ministère de l'Intérieur • Paris",
      url: "https://www.interieur.gouv.fr/",
      period: "Mai 2026 - Août 2026",
      description:
        "Conception et mise en œuvre d'une architecture Data Lakehouse pour centraliser, structurer et valoriser les données du Ministère de l'Intérieur.",
      bullets: [
        "Conception de l'architecture Data Lakehouse (couches bronze, silver, gold)",
        "Ingestion et transformation des données depuis des sources hétérogènes",
        "Orchestration des pipelines de données",
        "Mise en place de la gouvernance des données et du catalogue de données",
        "Optimisation des performances de requêtage et du stockage",
        "Création de dashboards analytiques pour les directions métier",
      ],
      tags: interieurTags,
    },
    {
      logos: ["/logos/waiyers.png", "/logos/tadata.png"],
      title: "Fondateur (Auto-entrepreneur)",
      company: "Waiyers × Tadata • Paris",
      url: "https://waiyers.com/",
      period: "Sept 2025 - Aujourd'hui",
      description:
        "Waiyers développe une suite d'applications ciblées reliées par un compte commun. Blog, actualités tech et conseil data/IA/cloud publiés sur tadata.fr.",
      links: ventures,
      bullets: [
        "Développement multi-applications : clients web, iOS, Android et desktop reliés par un compte commun",
        "Architecture des données : synchronisation offline-first, uploads reprenables, stockage détenu par l'utilisateur (Google Drive)",
        "Backend & APIs : services, pipelines de données et orchestration de workflows de modèles IA",
        "Cloud & DevOps : Kubernetes, CI/CD avec GitHub Actions, AWS",
        "Vision produit : définition des besoins, des KPIs, de la roadmap et des dashboards",
        "Veille technologique : suivi des évolutions data et IA, identification des opportunités d'innovation",
      ],
      tags: waiyersTags,
    },
    {
      logos: ["/logos/sfeir.png"],
      title: "Data Consultant",
      company: "SFEIR • Neuilly-sur-Seine",
      url: "https://www.sfeir.com/",
      period: "Mar 2025 - Sept 2025",
      description:
        "Premier partenaire Google Cloud Platform en France (Services 2023, Training 2024, EMEA 2025), spécialisé dans le développement logiciel et l'accompagnement technologique des entreprises.",
      tags: ["GCP", "Recrutement technique", "Architecture Cloud"],
      missions: [
        {
          title: "Data Architect",
          client: "LCL (Le Crédit Lyonnais) • Villejuif",
          clientUrl: "https://www.lcl.fr/",
          clientLogo: "/logos/lcl.png",
          period: "Avr 2025 - Sept 2025",
          description:
            "Optimisation de l'organisation interne de l'entité SNI et mise en place des tableaux de bord analytiques pour son CODIR. Consolidation des données issues de différentes sources, orchestration et automatisation de leur traitement via une architecture scalable et maintenable.",
          bullets: [
            "Audit du SI existant : comparaison PostgreSQL, MongoDB, Teradata",
            "Architecture technique hybride (on-premise first, équivalents Cloud GCP)",
            "Orchestration Kubernetes de scripts Python dockerisés",
            "Intégration des API Jira et autres progiciels dans les pipelines",
            "Dashboards Power BI dynamiques pour le CODIR",
            "Encadrement technique de 2 data engineers et 1 PO",
          ],
          tags: ["Kubernetes", "GCP", "PostgreSQL", "MongoDB", "Power BI", "Python", "GitLab CI/CD"],
        },
      ],
    },
    {
      logos: ["/logos/visian.png"],
      title: "Data Engineer Consultant",
      company: "Visian • La Défense",
      url: "https://visian.tech/",
      period: "Jan 2023 - Jan 2025",
      description:
        "Conseil spécialisé dans les projets data à grande échelle et pilotage d'initiatives d'innovation internes.",
      bullets: [
        "Direction du projet Pysquad, développant en interne des projets digitaux",
        "Coordination d'un projet d'IA générative pour différentes tâches d'inférence avec Azure AI Studio",
        "Création d'une data plateforme pour aider les sales à gérer missions, prospects et consultants",
      ],
      tags: ["Azure AI Studio", "Django", "FastAPI", "Streamlit", "Redis"],
      missions: [
        {
          title: "Data Engineer",
          client: "Engie • Bagneux",
          clientUrl: "https://www.engie.fr/",
          clientLogo: "/logos/engie.png",
          period: "Jan 2023 - Jan 2025",
          description:
            "Membre de l'équipe agile développant les produits Mon Bonus Engie/Ecodefi+, ICE et Ecogestes Dynamiques dans le framework SAFe, pour plus de 1,6M de clients au total.",
          bullets: [
            "Création d'APIs REST (100k+ appels/jour, latence < 1s)",
            "Participation à l'architecture des micro-services AWS et des plateformes digitales",
            "Scaling d'algorithmes de Deep Learning avec les data scientists (DeepAR, Temporal Fusion Transformer)",
            "Rédaction de roadmaps de migration d'une technologie centrale au sein du train SAFe",
            "Optimisation des flux bases de données (structure, index)",
          ],
          tags: ["AWS Lambda", "Databricks", "Python", "Terraform", "Apache Airflow", "MLflow", "DynamoDB"],
        },
      ],
    },
    {
      logos: ["/logos/aqua-digital-rising.png"],
      title: "Lead Data Scientist",
      company: "Aqua Digital Rising • France",
      url: "https://www.linkedin.com/company/aqua-digital-rising/",
      period: "Août 2021 - Oct 2022",
      description: "Pilotage des initiatives data science d'une startup fintech ambitionnant de révolutionner le pari sportif.",
      bullets: [
        "Gestion d'une architecture multi-bases (MongoDB, SQL Server, HDF5) de plusieurs centaines de Go",
        "Développement d'une API REST hautement configurable pour l'agrégation de données front-end",
        "Mises à jour des statistiques en temps réel avec RabbitMQ et cache Redis",
        "Configuration des services Azure (Functions, Web Services, Artifacts, Pipelines)",
        "Coordination d'une équipe de 2 personnes (data scientist et développeur front-end)",
      ],
      tags: ["SQL Server", "MongoDB", "Redis", "RabbitMQ", "Azure", "InfluxDB"],
    },
    {
      logos: ["/logos/orange-business.png"],
      title: "Data Scientist",
      company: "Orange Business Services • Paris",
      url: "https://www.orange-business.com/",
      period: "Fév 2021 - Juil 2021",
      description: "Société de conseil en transformation digitale sur des projets de communication.",
      bullets: [
        "Analyses et diagnostics des anomalies du réseau VoIP via machine learning (clustering)",
        "Création d'un graphe de réseau VoIP dynamique avec Kibana puis Neo4j intégré dans une page web",
        "Analyses des métriques DevOps d'un cluster de serveurs Elastic",
        "Automatisation de la suppression des logs Elastic avec log4j",
      ],
      tags: ["Python", "scikit-learn", "Elastic Stack (ELK)", "Neo4j", "JavaScript", "Bash"],
    },
    {
      logos: ["/logos/digiberries.png"],
      title: "Software Engineer",
      company: "Digiberries • Paris",
      url: "https://www.digiberries.com/",
      period: "Août 2020 - Mars 2021",
      description: "Agence de référencement web, améliorant les stratégies SEO des clients.",
      bullets: [
        "Script d'automatisation de création de rapports Excel (Google Ads)",
        "Outil d'analyse SEO et rapport PDF automatisé avec Lighthouse et Node.js",
        "Automatisation d'envoi de mails",
      ],
      tags: ["Python", "Node.js", "Lighthouse", "Google Ads"],
    },
    {
      logos: ["/logos/eudonet.png"],
      title: "Data Scientist",
      company: "Eudonet CRM • Courbevoie",
      url: "https://www.eudonet.com/",
      period: "Avr 2020 - Août 2020",
      description: "Éditeur de logiciels CRM dans un contexte B2B.",
      bullets: [
        "Mise en place de la suite Elastic (ELK + Filebeat) pour l'analyse de logs Windows IIS",
        "Outil de monitoring et algorithme Python de détection de baisse d'utilisation (FBProphet)",
        "Plateforme web de visualisation dynamique (JavaScript, Node.js)",
        "Visualisations Power BI internes et scripts PowerShell pour la gestion d'applications IIS",
      ],
      tags: ["Python", "SQL Server", "Elastic Stack (ELK)", "Power BI", "PowerShell", "JavaScript"],
    },
    {
      logos: ["/logos/veesion.png"],
      title: "Software Engineer",
      company: "Veesion • Paris",
      url: "https://veesion.io/",
      period: "Juil 2019 - Sept 2019",
      description: "Scale-up française de détection automatique de vols via IA.",
      bullets: [
        "Création d'une plateforme interne de visualisation et labellisation vidéo avec Django",
        "Classification de données pour l'apprentissage du modèle de computer vision",
      ],
      tags: ["Python", "Django", "JavaScript", "Amazon S3"],
    },
  ],
  education: [
    {
      logo: "/logos/polytechnique.png",
      school: "Institut Polytechnique de Paris (École Polytechnique)",
      url: "https://www.polytechnique.edu/",
      meta: "2026 - 2027 • Palaiseau, France",
      description: "Executive MSc en Cybersécurité, spécialisation : Architecte Sécurité.",
      tags: ["Cybersécurité", "Architecture sécurité"],
    },
    {
      logo: "/logos/ucr.png",
      school: "University of California, Riverside",
      url: "https://www.ucr.edu/",
      meta: "2019 - 2020 • Échange universitaire",
      description: "Échange international axé sur l'informatique avancée et les techniques de data mining.",
      bullets: [
        "CS 235 : Data Mining Techniques",
        "CS 171 : Introduction to Machine Learning and Data Mining",
        "CS 009 : Python Programming",
      ],
    },
    {
      logo: "/logos/esilv.png",
      school: "ESILV - École Supérieure d'Ingénieurs Léonard de Vinci",
      url: "https://www.esilv.fr/",
      meta: "2018 - 2021 • Courbevoie, France",
      description:
        "Master en Informatique, Big Data & Objets Connectés, spécialisation Data Science. Analyse statistique, algorithmes de machine learning et systèmes de traitement de données à grande échelle.",
      tags: ["Data Science", "Big Data", "IoT", "Machine Learning"],
    },
    {
      logo: "/logos/fenelon.png",
      school: "CPGE Fénelon Sainte-Marie",
      url: "https://www.fenelonsaintemarie.org/",
      meta: "2016 - 2018 • Paris, France",
      description: "Classes préparatoires aux grandes écoles en Mathématiques et Physique (MPSI / MP).",
      tags: ["Mathématiques", "Physique", "Informatique"],
    },
    {
      logo: "/logos/janson-de-sailly.svg",
      school: "Lycée Janson de Sailly",
      url: "https://www.janson-de-sailly.fr/",
      meta: "2016 • Paris, France",
      description: "Baccalauréat scientifique (Bac S), spécialité Sciences de l'Ingénieur (SI), mention Bien. LV2 chinois.",
      tags: ["Bac S", "Sciences de l'Ingénieur (SI)", "Mention Bien", "Chinois (LV2)"],
    },
  ],
  certifications: {
    provider: "Google Cloud Platform",
    logo: "/logos/gcp.png",
    url: "https://cloud.google.com/learn/certification",
    subtitle: "Certifications professionnelles",
    items: [
      {
        name: "Professional Machine Learning Engineer",
        period: "2026",
        description: "Conception, entraînement et mise en production de modèles de machine learning sur Google Cloud Platform.",
      },
      {
        name: "Professional Data Engineer",
        period: "Avril 2025 - Avril 2027",
        description: "Conception, construction et maintenance de systèmes de traitement de données sur Google Cloud Platform.",
      },
      {
        name: "Associate Cloud Engineer",
        period: "Avril 2025 - Avril 2028",
        description: "Déploiement d'applications, supervision des opérations et gestion de solutions cloud d'entreprise.",
      },
    ],
  },
  footer: "© Marc Giannuzzi. Tous droits réservés.",
}

export const content: Record<Lang, Content> = { en, fr }
