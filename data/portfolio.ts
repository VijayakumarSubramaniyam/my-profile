import fs from "node:fs/promises";
import path from "node:path";

export type ContactDetail = {
  label: string;
  value: string;
};

export type SocialLink = {
  label: string;
  href: string;
  glyph: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type WorkItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

export type DetailItem = {
  period: string;
  title: string;
  subtitle: string;
};

export type SkillGroup = {
  group: string;
  items: Array<{ name: string; level: number }>;
};

export type PortfolioData = {
  profile: {
    name: string;
    title: string;
    avatar: string;
    resumeUrl: string;
    location: string;
    email: string;
    phone: string;
    birthday: string;
  };
  socials: SocialLink[];
  contactDetails: ContactDetail[];
  intro: string;
  story: string;
  services: ServiceItem[];
  projects: WorkItem[];
  education: DetailItem[];
  experience: DetailItem[];
  skills: SkillGroup[];
  technicalInterests: string[];
  personalInformation: string[];
  achievements: string[];
};

export const fallbackPortfolio: PortfolioData = {
  profile: {
    name: "VIJAYA KUMAR.S",
    title: "UI Developer",
    avatar: "/assets/profile.jpeg",
    resumeUrl: "/assets/resume.pdf",
    location: "Erode, Tamilnadu",
    email: "vijisubramaniyam123@gmail.com",
    phone: "+91 824-886-4006",
    birthday: "April 5, 1995",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ajithkumaroffical/", glyph: "in" },
    { label: "GitHub", href: "https://github.com/AjithRithik", glyph: "gh" },
    { label: "Instagram", href: "https://www.instagram.com/ajith_rithik/", glyph: "ig" },
  ],
  contactDetails: [
    { label: "Phone", value: "+91 824-886-4006" },
    { label: "Email", value: "vijisubramaniyam123@gmail.com" },
    { label: "Location", value: "Erode, Tamilnadu" },
    { label: "Birthday", value: "April 5, 1995" },
  ],
  intro:
    "Above 9 years of IT experience in working in a corporate environment as a front-end UI/Web developer. Strong technical skills in complex website development including web-based applications. Experience in designing and building dynamic and user-interactive websites using JavaScript, Angular, AngularJS, and jQuery.",
  story:
    "Expertise in designing and developing interactive front-end applications using HTML5, CSS3, JavaScript, and AJAX.",
  services: [
    {
      title: "UI/UX Design Implementation",
      description:
        "I bring to life the designs crafted by UI/UX designers, translating static mockups into interactive and visually appealing user interfaces. Working closely with designers, I ensure the final product maintains usability and accessibility standards.",
    },
    {
      title: "Frontend Technologies Mastery",
      description:
        "I keep my frontend skills sharp with HTML, CSS, and JavaScript fundamentals, enhancing them with React and Angular for added versatility. I address browser quirks and performance challenges to deliver scalable solutions.",
    },
    {
      title: "CMS Integration",
      description:
        "I integrate frontend applications with CMS platforms like Contentful or Netlify CMS to manage website content efficiently. I customize components and templates to keep content editing intuitive.",
    },
    {
      title: "Testing and Optimization",
      description:
        "I prioritize quality and performance by rigorously testing frontend code for cross-device compatibility and optimizing for speed using code splitting and lazy loading techniques.",
    },
    {
      title: "SEO Implementation",
      description:
        "I integrate SEO best practices into frontend development to improve visibility and ranking on search engines through meta tags, structured markup, and performance tuning.",
    },
    {
      title: "Collaboration and Communication",
      description:
        "As a frontend developer, I prioritize effective collaboration with cross-functional teams, including backend developers, designers, and clients, to align on goals and deliver value.",
    },
  ],
  projects: [
    {
      title: "NRL Client Portal",
      category: "Enterprise app",
      description: "Customer-facing platform built for a high-traffic enterprise system with a modern UI and data-rich dashboards.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      href: "#",
    },
    {
      title: "Rising Campaign",
      category: "Marketing site",
      description: "Responsive site designed to deliver product storytelling, campaign dashboards, and conversion-focused landing pages.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      href: "#",
    },
    {
      title: "Product Analytics Board",
      category: "Dashboard",
      description: "Advanced analytics interface with performance insights, filters, and reusable UI modules for product teams.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      href: "#",
    },
    {
      title: "Content Platform",
      category: "CMS-driven",
      description: "Content authoring experience built around content blocks, templates, and structured pages for quick publishing.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      href: "#",
    },
    {
      title: "DX Experience",
      category: "UX System",
      description: "Custom design system that streamlined product consistency and accelerated feature delivery across teams.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      href: "#",
    },
    {
      title: "Growth Funnel",
      category: "Product marketing",
      description: "Landing page and funnel optimization project focused on cohort performance and experiment-driven growth.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      href: "#",
    },
  ],
  education: [
    { period: "2015 - 2017", title: "MCA - 8.36 CGPA", subtitle: "Anna University / Erode Sengunthar Engineering College" },
    { period: "2012 - 2015", title: "BCA - 71.8%", subtitle: "Bharathiyar University / Gobi Arts and Science College" },
    { period: "2012", title: "HSC - 69.3%", subtitle: "Government Boys Higher Secondary School, Nambiyur" },
    { period: "2010", title: "SSLC - 75.2%", subtitle: "Government Boys Higher Secondary School, Nambiyur" },
  ],
  experience: [
    { period: "May 2023 - Present", title: "Specialist - Software Engineering", subtitle: "LTIMindtree, Coimbatore" },
    { period: "Oct 2021 - Apr 2023", title: "Technology Analyst", subtitle: "Infosys, Chennai" },
    { period: "Nov 2019 - Oct 2021", title: "Software Engineer", subtitle: "Orion Innovation, Chennai" },
    { period: "Jan 2017 - Nov 2019", title: "Software Engineer", subtitle: "Vertace Consultants, Chennai" },
  ],
  technicalInterests: ["Creating Responsive Website", "React JS", "Vue Js"],
  personalInformation: ["April 5, 1995", "31, Male, Married", "601-14, Azlakapuri Street, Nambiyur (TK), Erode (DK) - 638 458"],
  achievements: ["Employee of the month", "Key Contributor Batch", "Trust & Respect Batch"],
  skills: [
    {
      group: "Programming Languages",
      items: [
        { name: "HTML", level: 95 },
        { name: "CSS/CSS3 (Sass)", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Node.js", level: 60 },
        { name: "GraphQL", level: 70 },
        { name: "SQL", level: 60 },
        { name: "MongoDB", level: 50 },
      ],
    },
    {
      group: "Libraries & Frameworks",
      items: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 95 },
        { name: "Angular", level: 80 },
        { name: "Nest.js", level: 50 },
        { name: "jQuery", level: 60 },
        { name: "Axios", level: 70 },
        { name: "Apollo", level: 60 },
        { name: "Express", level: 40 },
        { name: "Theme UI", level: 60 },
        { name: "Tailwind", level: 90 },
        { name: "Bootstrap", level: 50 },
        { name: "Material UI", level: 65 },
        { name: "Styled Components", level: 85 },
      ],
    },
    {
      group: "DevOps, Tools & Build Systems",
      items: [
        { name: "Git / Bash / Shells", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "GitLab", level: 82 },
        { name: "Azure", level: 68 },
        { name: "CI / CD", level: 72 },
        { name: "SonarQube", level: 62 },
        { name: "Jenkins", level: 60 },
        { name: "ESLint", level: 82 },
        { name: "VS Code", level: 90 },
        { name: "NPM", level: 85 },
        { name: "Yarn", level: 78 },
        { name: "Webpack", level: 68 },
        { name: "Turbo", level: 74 },
        { name: "Monorepo", level: 76 },
      ],
    },
    {
      group: "Cloud, Analytics, CMS & Communication",
      items: [
        { name: "AWS CloudFront", level: 70 },
        { name: "Firebase", level: 70 },
        { name: "Google Analytics", level: 72 },
        { name: "GrowthBook", level: 65 },
        { name: "Optimizely A/B Testing", level: 60 },
        { name: "Contentful CMS", level: 78 },
        { name: "Netlify CMS", level: 72 },
        { name: "Netlify", level: 78 },
        { name: "Vercel", level: 85 },
        { name: "Zendesk", level: 60 },
      ],
    },
  ],
};

const portfolioFilePath = path.join(process.cwd(), "data", "portfolio.json");

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const data = await fs.readFile(portfolioFilePath, "utf-8");
    return JSON.parse(data) as PortfolioData;
  } catch {
    return fallbackPortfolio;
  }
}

export async function savePortfolioData(data: Partial<PortfolioData> | PortfolioData): Promise<PortfolioData> {
  const normalizedData = {
    ...fallbackPortfolio,
    ...(typeof data === "string" ? JSON.parse(data) : data),
  } as PortfolioData;

  await fs.mkdir(path.dirname(portfolioFilePath), { recursive: true });
  await fs.writeFile(portfolioFilePath, `${JSON.stringify(normalizedData, null, 2)}\n`, "utf-8");

  return normalizedData;
}
