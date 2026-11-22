export type NavItem = { label: string; href: `#${string}` };

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type Project = {
  title: string;
  category: string;
  highlights: string[];
  technologies: string[];
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

export type SkillGroup = { title: string; skills: string[] };

export type EducationItem = {
  credential: string;
  institution: string;
  period: string;
  details: string[];
};

export const profile = {
  name: "Mona Sabeti",
  shortName: "MS",
  role: "Software Engineering • Cybersecurity • AI",
  location: "London, ON",
  linkedIn: "https://www.linkedin.com/in/monasabeti95/",
  github: "https://github.com/msabetih",
} as const;

export const navigation: NavItem[] = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
];

export const education: EducationItem[] = [
  {
    credential: "Master of Engineering (M.Eng), Software Engineering",
    institution: "Western University",
    period: "September 2026 — Present",
    details: ["Collaborative Specialization with Artificial Intelligence (CSAI)"],
  },
  {
    credential: "Bachelor of Engineering Science (BESc), Software Engineering",
    institution: "Western University",
    period: "September 2021 — June 2026",
    details: [
      "Dean’s Honour List (2023, 2024, 2026); Western Scholarship of Excellence (2021)",
      "Coursework in algorithms, software design, web technologies, databases, cloud computing, machine learning, software testing, and information security",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Cybersecurity Governance, Risk, & Compliance (GRC) Co-op",
    company: "Enbridge Gas",
    period: "May 2024 — August 2025",
    highlights: [
      "Developed a Python automation tool with pandas, NumPy, and openpyxl to process and analyze structured Excel datasets.",
      "Built a Microsoft Copilot agent to streamline TSA Pipeline Security compliance documentation.",
      "Developed a Power BI dashboard to track NIST control maturity against the CSF 2.0 framework.",
      "Designed a SharePoint knowledge repository using metadata classification to improve discoverability and governance.",
      "Coordinated risk reviews, tracked remediation metrics, and presented findings to cybersecurity leadership.",
    ],
  },
  {
    role: "Technology and Information Services, Summer Intern",
    company: "Enbridge Gas",
    period: "May 2023 — August 2023",
    highlights: [
      "Coordinated application testing for Windows 22H2, leading weekly meetings and tracking progress against deadlines.",
      "Coordinated Highly Exploited Vulnerabilities patching through ServiceNow incidents and collaboration with application teams.",
    ],
  },
  {
    role: "Technology and Information Services, Summer Intern",
    company: "Enbridge Gas",
    period: "May 2022 — August 2022",
    highlights: [
      "Developed and validated a searchable Microsoft Access database application.",
      "Consolidated structured asset data from multiple sources to improve consistency.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Hiver",
    category: "Hive Monitoring Web App",
    highlights: [
      "Contributed to a full-stack beekeeping platform with FastAPI endpoints for hive management, inspections, treatments, reminders, and risk-based alerts.",
      "Implemented secure account flows with bcrypt and JWT and integrated the Next.js/React frontend with backend services.",
    ],
    technologies: ["FastAPI", "Next.js", "React", "SQLAlchemy", "JWT"],
    images: [
      {
        src: "/projects/hiver.png",
        alt: "Hiver beekeeping platform landing page with illustrated bees and stacked hives",
        width: 2996,
        height: 1678,
      },
    ],
  },
  {
    title: "AI Travel Itinerary Planner",
    category: "RAG-Based System",
    highlights: [
      "Built a multi-step RAG pipeline for personalized itineraries using structured trip state and iterative refinement.",
      "Integrated ChromaDB, embeddings, cosine similarity, weather, and location data.",
    ],
    technologies: ["Python", "ChromaDB", "RAG", "Embeddings"],
    images: [
      {
        src: "/projects/travel-planner.png",
        alt: "AI travel itinerary planner showing trip parameters and a planner chat",
        width: 2818,
        height: 1700,
      },
    ],
  },
  {
    title: "WhatTheFlora?",
    category: "Plant Identifier",
    highlights: [
      "Developed a React Native mobile interface and camera flow for identifying wild plants from photos.",
      "Integrated a Flask backend serving a fine-tuned PyTorch image classifier and MySQL plant database.",
    ],
    technologies: ["React Native", "Flask", "PyTorch", "MySQL"],
    images: [
      {
        src: "/projects/what-the-flora-home.jpeg",
        alt: "WhatTheFlora mobile app home screen",
        width: 265,
        height: 573,
      },
      {
        src: "/projects/what-the-flora-dex.jpeg",
        alt: "WhatTheFlora plant catalogue screen",
        width: 265,
        height: 573,
      },
    ],
  },
  {
    title: "Song Recommendation Model",
    category: "Machine Learning",
    highlights: [
      "Cleaned and analyzed datasets and implemented Linear and Logistic Regression, SVM, KNN, and Random Forest models.",
      "Evaluated models with cross-validation, regularization, and performance metrics.",
    ],
    technologies: ["Python", "pandas", "NumPy", "scikit-learn"],
    images: [
      {
        src: "/projects/song-recommendation.png",
        alt: "Song recommendation model notebook output for two sample songs",
        width: 2256,
        height: 790,
      },
    ],
  },
];

export const leadership = {
  role: "Director, Purchasing & Food",
  organization: "Western AI",
  period: "September 2025 — April 2026",
  description:
    "Coordinated vendor communication and event logistics while collaborating with the executive team on operations and planning.",
} as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript / TypeScript", "C++", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["FastAPI", "React", "Next.js", "Node.js", "REST APIs", "pandas", "NumPy", "scikit-learn", "TensorFlow"],
  },
  {
    title: "Cloud, DevOps & Databases",
    skills: ["Google Cloud Platform", "Docker", "Kubernetes", "Git", "PostgreSQL", "MySQL", "MongoDB", "ChromaDB"],
  },
];
