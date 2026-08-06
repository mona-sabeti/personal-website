export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  skills: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  href?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type EducationItem = {
  credential: string;
  institution: string;
  period: string;
  detail: string;
};

export const profile = {
  name: "Mona Sabeti",
  shortName: "MS",
  role: "Software Engineering Graduate",
  about: [
    "Add a short paragraph about yourself, your background, and the kind of work you enjoy.",
    "Add another paragraph about the roles or opportunities you are looking for.",
  ],
  email: "hello@example.com",
  linkedIn: "https://www.linkedin.com/",
  github: "https://github.com/",
} as const;

// TODO: Replace the placeholder email and social URLs above with Mona's details.

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export const experience: ExperienceItem[] = [
  {
    role: "Position title",
    company: "Organization name",
    period: "Start date — End date",
    summary:
      "Add a concise overview of your responsibilities, the problems you worked on, and the technologies you used.",
    skills: ["Technology", "Technology", "Technology"],
  },
  {
    role: "Position title",
    company: "Organization name",
    period: "Start date — End date",
    summary:
      "Add another relevant role, internship, research position, or volunteer experience here.",
    skills: ["Technology", "Technology"],
  },
];

// TODO: Replace the experience placeholders with accurate roles and responsibilities.
// Avoid adding metrics until they can be supported by your résumé or project notes.

export const projects: Project[] = [
  {
    title: "Full-stack application",
    category: "Software Development",
    description:
      "Describe the problem this application addresses, your contribution, and the key technical decisions you made.",
    technologies: ["Next.js", "TypeScript", "Database"],
  },
  {
    title: "Security project",
    category: "Cybersecurity",
    description:
      "Describe the security topic, the scope of the work, and the defensive tools or methods you explored.",
    technologies: ["Security tool", "Python", "Automation"],
  },
  {
    title: "Data project",
    category: "Data & Analytics",
    description:
      "Describe the dataset, your analysis approach, and what the finished project helps a user understand.",
    technologies: ["Python", "SQL", "Visualization"],
  },
];

// TODO: Replace project placeholders and add repository or live-demo URLs with `href`.

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Add language", "Add language", "Add language"],
  },
  {
    title: "Development",
    skills: ["Add framework", "Add tool", "Add technology"],
  },
  {
    title: "Security & Data",
    skills: ["Add skill", "Add skill", "Add skill"],
  },
  {
    title: "Other",
    skills: ["Add skill", "Add skill", "Add skill"],
  },
];

// TODO: Confirm this skills list and reorder it around the roles you are targeting.

export const education: EducationItem[] = [
  {
    credential: "Software Engineering",
    institution: "University or college name",
    period: "Graduation year",
    detail:
      "Add your degree type, relevant coursework, academic focus, or honours if applicable.",
  },
];

// TODO: Add the exact institution, credential, dates, and relevant academic details.
