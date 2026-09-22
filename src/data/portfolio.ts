import {
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode2,
  Flame,
  Frame,
  GitBranch,
  Globe2,
  Hexagon,
  Layers3,
  LayoutTemplate,
  Network,
  Package,
  Server,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type Technology = { name: string; icon: LucideIcon };
export type TechnologyGroup = { title: string; items: Technology[] };

export type Project = {
  name: string;
  type: string;
  role: string;
  description: string;
  stack: string[];
  contributions: string[];
  liveUrl: string;
  image: string;
  imageAlt: string;
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: Hexagon },
      { name: "Next.js", icon: Layers3 },
      { name: "TypeScript", icon: Braces },
      { name: "JavaScript ES6+", icon: FileCode2 },
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: LayoutTemplate },
      { name: "CSS Modules", icon: Package },
      { name: "Responsive Design", icon: Globe2 },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Network },
      { name: "REST API", icon: Cloud },
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Flame },
    ],
  },
  {
    title: "Workflow & Libraries",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Postman", icon: Network },
      { name: "Vite", icon: Wind },
      { name: "Figma", icon: Frame },
      { name: "TanStack Query", icon: Layers3 },
      { name: "Zustand", icon: Database },
      { name: "Formik", icon: FileCode2 },
      { name: "Axios", icon: Network },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Leleka — Pregnancy Assistant Platform",
    type: "Team Project",
    role: "Full-Stack Developer",
    description:
      "A full-stack pregnancy assistant platform for tracking pregnancy progress, diary entries, tasks, mood, personal information, and weekly pregnancy data.",
    stack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "TanStack Query",
      "Zustand",
      "Formik",
      "JWT Authentication",
    ],
    contributions: [
      "Created backend endpoints for fetching, creating, and updating diary entries.",
      "Built the diary page with Next.js routing, client requests, and Route Handlers.",
      "Integrated MongoDB through Mongoose models and validation.",
      "Implemented responsive UI and optimized client/server data fetching.",
      "Worked with Next.js App Router architecture.",
    ],
    liveUrl: "https://project-decodery-front.vercel.app/",
    image: "leleka",
    imageAlt: "Leleka pregnancy assistant project artwork with two storks",
  },
  {
    name: "RentalCar — Car Rental Web Application",
    type: "Personal Project",
    role: "Full-Stack Developer",
    description:
      "A modern car rental marketplace with a searchable vehicle catalog, advanced filtering, detailed car pages, and booking requests.",
    stack: ["Next.js", "React", "TypeScript", "TanStack Query", "REST API", "Axios", "Formik", "Yup", "CSS Modules"],
    contributions: [
      "Implemented server-side catalog data fetching with pagination.",
      "Added filtering by brand, price, and mileage.",
      "Built dynamic car detail pages and booking request functionality.",
      "Added validation, API integration, loading, and error states.",
      "Optimized layouts for mobile, tablet, and desktop.",
    ],
    liveUrl: "https://rental-car-three-chi.vercel.app/",
    image: "rentalcar",
    imageAlt: "RentalCar web application showing a white sports car",
  },
  {
    name: "Learn Lingo",
    type: "Personal Project",
    role: "Frontend Developer",
    description:
      "A language-learning teacher marketplace where users can browse teachers, filter results, manage favorites, authenticate, and submit lesson booking requests.",
    stack: ["React", "TypeScript", "Firebase", "React Query", "CSS Modules", "React Hook Form", "Yup"],
    contributions: [
      "Created teacher listing, filtering, and pagination flows.",
      "Implemented authentication, favorites, and protected functionality.",
      "Built lesson booking requests with client-side validation.",
      "Used Firebase persistence and React Query caching and synchronization.",
      "Delivered a responsive interface across device sizes.",
    ],
    liveUrl: "https://learn-lingo-app-hazel.vercel.app/",
    image: "learnlingo",
    imageAlt: "Learn Lingo project interface with a character using a laptop",
  },
  {
    name: "Paws' Little Home",
    type: "Team Project",
    role: "Frontend Developer",
    description:
      "A responsive animal shelter website where visitors can browse animals looking for a home, read detailed information, and submit adoption applications.",
    stack: ["HTML5", "CSS3", "JavaScript ES6+", "Vite", "Axios", "Swiper", "Git", "GitHub"],
    contributions: [
      "Developed the “Наші хвостики” section.",
      "Built catalogue, pagination, sliders, modals, and notifications.",
      "Supported responsive mobile, tablet, and desktop layouts.",
      "Assisted teammates with Git, libraries, and frontend blockers.",
      "Reworked substantial parts of the website when team capacity decreased.",
    ],
    liveUrl: "https://riky-droyg.github.io/paws-little-home/",
    image: "paws",
    imageAlt: "Paws' Little Home animal shelter website with cats",
  },
];

export const professionalBackground = [
  {
    role: "Soldier",
    organization: "Armed Forces of Ukraine",
    dates: "Feb 2022 — Present",
    detail: "High-discipline teamwork, accountability, following technical procedures, and working under pressure.",
  },
  {
    role: "Delivery Specialist",
    organization: "Nova Post",
    dates: "Apr 2020 — Feb 2022",
    detail: "Logistics coordination, client communication, task prioritization, and time-sensitive operations.",
  },
  {
    role: "Tour Guide",
    organization: "Accord-Tour Ltd.",
    dates: "May 2019 — Mar 2020",
    detail: "Led international groups, managed complex schedules, and solved organizational and logistical problems.",
  },
];