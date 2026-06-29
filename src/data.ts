import { Project, Skill, TimelineItem } from './types';

export const PERSONAL_INFO = {
  name: "Eleni Sirak",
  shortName: "Eleni",
  titles: ["ICT student", "Web developer", "Digital marketing Intern"],
  heroTitle: "Hello, I am Eleni Sirak",
  heroSubtitle: "ICT student | Web developer | Digital marketing Intern",
  heroIntro: "I create modern, responsive website and help business grow through digital marketing.",
  aboutBio: "I am an ICT student at College with interests in web development, digital marketing, and entrepreneurship. I enjoy building, responsive website. Learning new technologies, and helping business improve their online presence.",
  email: "eleniss3984@gmail.com",
  phone: "+2519846042",
  formattedPhone: "+251 984 6042",
  location: "Dire Dawa, Ethiopia",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", // Professional student portrait placeholder
  socials: {
    github: "https://github.com/EleniSirak",
    linkedin: "https://linkedin.com/in/eleni-sirak",
    telegram: "https://t.me/elenisirak"
  }
};

export const SKILLS_DATA: Skill[] = [
  {
    name: "HTML",
    percentage: 90,
    category: "Development",
    icon: "Code2",
    description: "Semantic HTML5 markup, web accessibility standard compliance, and clean structure."
  },
  {
    name: "Responsive Web Design",
    percentage: 85,
    category: "Design",
    icon: "Layout",
    description: "Fluid layouts, mobile-first design philosophy, media queries, and adaptive UI components."
  },
  {
    name: "CSS",
    percentage: 85,
    category: "Development",
    icon: "Palette",
    description: "Modern CSS3, Flexbox, CSS Grid, Tailwind CSS utility architecture, and smooth animations."
  },
  {
    name: "Canva",
    percentage: 80,
    category: "Design",
    icon: "Image",
    description: "Graphic design, brand kits, marketing visual assets, social media banners, and presentations."
  },
  {
    name: "Digital Marketing",
    percentage: 75,
    category: "Marketing",
    icon: "TrendingUp",
    description: "SEO optimization, social media campaigns, market research, and audience engagement strategy."
  },
  {
    name: "JavaScript",
    percentage: 70,
    category: "Development",
    icon: "FileCode",
    description: "ES6+ syntax, DOM manipulation, asynchronous fetching, interactive UI behaviors, and React basics."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "wow-burger",
    title: "Wow Burger Website",
    description: "Responsive restaurant website with admin panel",
    longDescription: "A full-featured dining portal built for Wow Burger restaurant. Features interactive menus, table reservation inquiries, mobile-friendly ordering flows, and a dedicated backend admin panel to update daily specials and manage inventory.",
    githubUrl: "https://github.com/EleniSirak/wow-burger-website",
    demoUrl: "https://wowburger-demo.example.com",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Admin Panel"],
    category: "Web Development",
    featured: true
  },
  {
    id: "siltawi-company",
    title: "Siltawi Company Website",
    description: "Company profile website with SEO optimization",
    longDescription: "A clean, corporate showcase web platform crafted for Siltawi Company. Emphasizes fast page load speeds, semantic SEO structuring, professional service cards, and integrated lead capture contact channels.",
    githubUrl: "https://github.com/EleniSirak/siltawi-company-web",
    demoUrl: "https://siltawi.example.com",
    tags: ["Responsive", "SEO Optimized", "Corporate", "CSS3"],
    category: "Corporate & SEO",
    featured: true
  },
  {
    id: "liquid-soap-plan",
    title: "Liquid Soap Business Plan",
    description: "Entrepreneurship project",
    longDescription: "A comprehensive entrepreneurship and feasibility study project detailing the production, branding, cost analysis, and digital marketing rollout for a local liquid soap manufacturing venture in Dire Dawa.",
    githubUrl: "https://github.com/EleniSirak/liquid-soap-business-plan",
    tags: ["Entrepreneurship", "Market Research", "Business Plan", "Canva Branding"],
    category: "Entrepreneurship",
    featured: true
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "Personal portfolio",
    longDescription: "The official personal web portfolio of Eleni Sirak. Designed with a vibrant Blue and Orange color scheme, dark mode toggle, smooth section navigation, and interactive progress indicators.",
    githubUrl: "https://github.com/EleniSirak/personal-portfolio",
    demoUrl: "https://elenisirak.example.com",
    tags: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    category: "Web Development",
    featured: true
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Digital Marketing Internship",
    organization: "Orbit Innovation Hub",
    period: "2026 - Present",
    location: "Ethiopia / Remote",
    type: "experience",
    description: [
      "Conduct marketing research.",
      "Manage social media marketing activities.",
      "Create digital content and branding materials."
    ],
    skills: ["Market Research", "Social Media Marketing", "Canva", "Branding", "Content Strategy"]
  },
  {
    id: "edu-1",
    title: "ICT Student",
    organization: "College, Department of ICT",
    period: "Ongoing",
    location: "Dire Dawa, Ethiopia",
    type: "education",
    description: [
      "Specializing in Information and Communication Technology (ICT) fundamentals.",
      "Focusing on web development, computer networking, and system troubleshooting."
    ],
    skills: ["Web Development", "Networking", "Database Basics", "Problem Solving"]
  },
  {
    id: "edu-2",
    title: "Department of Management",
    organization: "Dire Dawa University",
    period: "Higher Education",
    location: "Dire Dawa, Ethiopia",
    type: "education",
    description: [
      "Studying core management principles, organizational leadership, and business strategy.",
      "Bridging the gap between ICT technical skills and entrepreneurship business administration."
    ],
    skills: ["Business Administration", "Entrepreneurship", "Project Management", "Strategy"]
  }
];

export const CV_DOCUMENT = {
  name: "Eleni Sirak",
  summary: "Motivated ICT student, modern Web Developer, and Digital Marketing Intern based in Dire Dawa, Ethiopia. Adept at building clean, responsive web platforms and executing data-driven marketing campaigns to help businesses expand their digital footprint.",
  contact: {
    email: "eleniss3984@gmail.com",
    phone: "+251 984 6042",
    location: "Dire Dawa, Ethiopia",
    linkedin: "linkedin.com/in/eleni-sirak"
  },
  skills: ["HTML5 (90%)", "CSS3 & Tailwind (85%)", "Responsive Design (85%)", "Canva Design (80%)", "Digital Marketing (75%)", "JavaScript (70%)"],
  languages: ["Amharic (Native)", "English (Professional Working)", "Oromo (Conversational)"]
};
