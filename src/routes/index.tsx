import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ArrowUp,
  Award,
  Briefcase,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  Users,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const EMAIL = "varshaajio@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/varshaajio/";
const GITHUB = "https://github.com/varshaajio/";
const RESUME_URL = "/Varshaa_SB_Resume.pdf";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

const SKILLS: { title: string; icon: React.ReactNode; items: string[] }[] = [
  {
    title: "Languages",
    icon: <Code2 className="h-4 w-4" />,
    items: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "PHP", "SQL", "R", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: <Layers className="h-4 w-4" />,
    items: ["React.js", "Vite", "Next.js", "Redux", "Context API", "Responsive UI", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: <Terminal className="h-4 w-4" />,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MVC", "Socket.IO", "FastAPI"],
  },
  {
    title: "Databases",
    icon: <Layers className="h-4 w-4" />,
    items: ["MongoDB", "Mongoose", "SQL", "Pinecone", "Chroma"],
  },
  {
    title: "Cloud & DevOps",
    icon: <ShieldCheck className="h-4 w-4" />,
    items: ["AWS (EC2, S3)", "Azure", "GCP", "Docker", "Nginx", "Linux", "Git", "CI/CD", "Cloudinary", "Firebase"],
  },
  {
    title: "AI / ML & GenAI",
    icon: <Sparkles className="h-4 w-4" />,
    items: [
      "LangChain",
      "RAG",
      "Vector DBs",
      "TensorFlow",
      "OpenCV",
      "MobileNetV2",
      "Scikit-learn",
      "Prompt Engineering",
    ],
  },
  {
    title: "Data & Analytics",
    icon: <Cpu className="h-4 w-4" />,
    items: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
  },
  {
    title: "Developer Tools",
    icon: <Terminal className="h-4 w-4" />,
    items: ["GitHub Copilot", "Claude 3.5", "ChatGPT", "Cursor", "Replit", "Vercel", "WordPress"],
  },
];

type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
  tech: string[];
};

const EXPERIENCE: Experience[] = [
  {
    role: "MERN Stack Developer",
    company: "W3AppDevelopers",
    duration: "May 2026 – Present",
    location: "Erode, Tamil Nadu, India",
    bullets: [
      "Architected, developed, deployed and hosted the official corporate website end-to-end.",
      "Built Node.js/Express REST APIs following strict MVC with secure auth, middleware validation, error handling and multi-format file uploads.",
      "Developed a React (Vite) SPA combining Redux and Context API with protected routing and custom hooks (useAuth, useFetch, useTheme).",
      "Configured Socket.IO server for real-time notifications; integrated Cloudinary and Firebase for media delivery.",
      "Automated email (NodeChimp) and SMS notification services; containerised client & server with Docker behind Nginx reverse proxy.",
      "Authored deploy.sh and backup.sh for automated deployments and DB backups; implemented JWT auth and automated API testing.",
    ],
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "Redux",
      "Socket.IO",
      "Docker",
      "Nginx",
      "JWT",
      "Cloudinary",
      "Firebase",
    ],
  },
  {
    role: "Lead Web Developer",
    company: "hobbyjumble.com",
    duration: "May 2026 – June 2026",
    location: "Erode",
    bullets: [
      "Spearheaded end-to-end development of a commercial eCommerce platform for art & craft enthusiasts.",
      "Implemented multi-category catalog, product detail pages, search, and navigation for a diverse product mix.",
      "Built a blogging platform to drive SEO and support content marketing; integrated promotions and dynamic highlights.",
      "Enabled customer accounts, order history, payment gateway, shipping and order management workflows.",
      "Deployed on a scalable host with SSL, CDN and DNS configuration; optimised for cross-browser and SEO.",
    ],
    tech: ["eCommerce", "SEO", "Payments", "Responsive UI", "Hosting", "CDN"],
  },
  {
    role: "Data Science Intern",
    company: "IFC Infotech Software Solutions",
    duration: "Jul 2025 – Sep 2025 (12 weeks)",
    location: "Remote",
    bullets: [
      "Executed end-to-end data lifecycle: collection, cleaning, EDA, visualisation, and ML modelling.",
      "Built dynamic Power BI and Python dashboards translating raw data into actionable business insights.",
      "Developed and tested ML models under mentor guidance, contributing to real project deliverables.",
    ],
    tech: ["Python", "Power BI", "Pandas", "Scikit-learn", "EDA", "Machine Learning"],
  },
];

type Project = {
  title: string;
  tagline: string;
  problem: string;
  outcome: string;
  features: string[];
  tech: string[];
  category: string;
  icon: React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    title: "W3AppDevelopers Corporate Platform",
    tagline: "Full-stack MERN CMS for a digital solutions company.",
    problem:
      "The company needed a scalable corporate site with a full CMS for services, blogs, categories and media, plus admin dashboards.",
    outcome:
      "Architected and shipped a production platform with secure REST APIs, real-time notifications, admin dashboards and automated deployments.",
    features: [
      "CMS modules for services, blogs, categories and media",
      "Admin dashboards with charts, tables and media library",
      "JWT auth, Socket.IO real-time, Cloudinary/Firebase integrations",
      "Dockerised deployment behind Nginx with automated shell scripts",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Docker", "Nginx", "Socket.IO"],
    category: "Full Stack",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: "hobbyjumble.com",
    tagline: "eCommerce platform for DIY, craft and embroidery products.",
    problem:
      "Craft entrepreneurs needed a discoverable storefront with catalog, blogging, payments and order management.",
    outcome:
      "Delivered a live eCommerce platform with SEO-friendly content, payments, shipping workflows and CDN-backed performance.",
    features: [
      "Multi-category catalog with search, sorting and promotions",
      "Accounts, order history, payments and shipping workflows",
      "SEO blogging platform and dynamic product highlights",
      "SSL + CDN + DNS deployment with cross-browser optimisation",
    ],
    tech: ["eCommerce", "SEO", "Payments", "Hosting", "CDN"],
    category: "Full Stack",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "EcoTrash — Real-Time Trash Classification",
    tagline: "Android + Python app that classifies waste from the camera feed.",
    problem:
      "Users struggle to sort waste correctly at the point of disposal, reducing recycling efficiency.",
    outcome:
      "Native Android app with a Python vision backend, classifying waste into biodegradable, non-biodegradable, compostable and landfill categories in real time.",
    features: [
      "Real-time image recognition on-device via CameraX",
      "Python FastAPI backend trained on the TACO dataset",
      "MobileNetV2 with quantisation for efficient mobile inference",
      "Structured category output for correct disposal guidance",
    ],
    tech: ["Python", "Java", "TensorFlow", "FastAPI", "OpenCV", "MobileNetV2", "Android"],
    category: "AI / ML",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "VEHI-SPOT — ANPR System",
    tagline: "Automatic number-plate recognition from video footage.",
    problem:
      "Manual traffic and parking management is slow and error-prone; authorities need automated vehicle identification.",
    outcome:
      "OpenCV + OCR pipeline that automates plate detection from video and structures data for RTO / FASTag-style workflows.",
    features: [
      "ANPR pipeline with OpenCV pre-processing",
      "OCR-based plate number extraction",
      "Video-frame ingestion and vehicle capture",
      "Data output tailored for traffic and parking management",
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "OCR"],
    category: "AI / ML",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "SmartGradePredict",
    tagline: "Multi-domain regression modelling for student performance.",
    problem:
      "Educators need interpretable models to predict student performance and understand contributing factors.",
    outcome:
      "Dual regression models (Linear, Ridge, Lasso) with clear visual insights on real-world datasets.",
    features: [
      "Linear, Ridge and Lasso regression comparison",
      "EDA and feature analysis on real-world data",
      "Seaborn + Matplotlib visual insights",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    category: "Data Science",
    icon: <Cpu className="h-5 w-5" />,
  },
];

const CERTIFICATIONS = [
  {
    name: "NPTEL — Programming with Generative AI",
    issuer: "NPTEL (IIT)",
    date: "Aug – Oct 2025",
    note: "Top 5% score (8 weeks)",
  },
  {
    name: "NPTEL — Programming in Java",
    issuer: "NPTEL (IIT)",
    date: "Jan – Apr 2026",
    note: "Elite Gold certification (12 weeks)",
  },
  {
    name: "AWS Cloud Computing — Training & Certification",
    issuer: "AWS",
    date: "Jun – Jul 2025",
    note: "Six-week hands-on training",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Jun 2026",
    note: "Mastery track",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "",
    note: "",
  },
  {
    name: "DevOps Fundamentals",
    issuer: "LinkedIn Learning",
    date: "",
    note: "",
  },
  {
    name: "Legacy Responsive Web Design V8",
    issuer: "freeCodeCamp",
    date: "",
    note: "",
  },
  {
    name: "Bridge Course on Virtual, Augmented and Mixed Reality",
    issuer: "Coursework",
    date: "",
    note: "",
  },
  {
    name: "Full Stack PHP from Scratch",
    issuer: "Udemy",
    date: "",
    note: "",
  },
  {
    name: "50+ Online Certifications — Software & IT",
    issuer: "IBM • Google • Microsoft • Meta • Amazon • Accenture",
    date: "",
    note: "PHP, Web Dev, Databases, Cloud, Cybersecurity",
  },
];

const ACHIEVEMENTS = [
  "Department Merit Proficiency Award for Academic Excellence",
  "Gold Medalist — SOF International Mathematics Olympiad (IMO), Level 2",
  "Top 10 finalist — LeetCode Virtual Contest (3500+ points)",
];

const LEADERSHIP = [
  {
    role: "Placement Secretary — Union Office Bearer",
    org: "Vellalar College for Women",
    period: "2026 – Present",
    desc: "Elected office bearer coordinating placement activities and student representation.",
  },
  {
    role: "Chief Election Commissioner",
    org: "Student Council Elections",
    period: "2023 – 2024",
    desc: "Coordinated election schedules, nominations, polling, vote counting and result declaration with full transparency and compliance.",
  },
  {
    role: "Green Ambassador",
    org: "College Green Initiative",
    period: "",
    desc: "Led on-campus initiatives for a greener environment.",
  },
  {
    role: "Member — Green Society Club",
    org: "Volunteer, 'Suzhal Arivom' Foundation",
    period: "",
    desc: "Active member and volunteer supporting sustainability programs.",
  },
];

function Portfolio() {
  const [dark, setDark] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  // theme
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  // scroll progress + back-to-top
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
      setShowTop(scrolled > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section
  useEffect(() => {
    const ids = ["hero", ...NAV.map((n) => n.id)];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* scroll progress */}
      <div
        aria-hidden
        className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent"
      >
        <div
          className="h-full bg-gradient-to-r from-primary via-primary-glow to-accent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Nav
        active={active}
        dark={dark}
        toggleTheme={toggleTheme}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />

      <main id="top">
        <Hero />
        <About />
        <Highlights />
        <Skills />
        <ExperienceSection />
        <ProjectsSection />
        <Education />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      <Footer />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full glass shadow-elevated transition-transform hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

function Nav({
  active,
  dark,
  toggleTheme,
  navOpen,
  setNavOpen,
}: {
  active: string;
  dark: boolean;
  toggleTheme: () => void;
  navOpen: boolean;
  setNavOpen: (v: boolean) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-3 rounded-full glass px-4 py-2 md:px-6">
        <a href="#hero" className="flex min-w-0 items-center gap-2 font-display font-semibold">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
            V
          </span>
          <span className="truncate">Varshaa S B</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === n.id
                  ? "bg-primary/15 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-primary/10"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="#contact" className="hidden btn-primary md:inline-flex">
            <Mail className="h-4 w-4" /> Hire me
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="mx-auto mt-2 max-w-6xl px-3 md:hidden">
          <div className="glass rounded-2xl p-3">
            <ul className="grid gap-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setNavOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
                  >
                    {n.label} <ChevronRight className="h-4 w-4 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="hero-orbs" />
      <div className="grid-bg" />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="chip reveal"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 rounded-full bg-success" />
            Open to internships, freelance & collaborations
          </span>
          <h1
            className="reveal mt-6 text-4xl font-bold tracking-tight md:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Hi, I'm <span className="grad-text">Varshaa S B</span>
            <br />
            <span className="text-foreground/90">
              Full Stack Developer &amp; GenAI Engineer.
            </span>
          </h1>
          <p
            className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "0.25s" }}
          >
            IT undergraduate specialising in <b className="text-foreground">MERN &amp; Java</b>,
            with hands-on experience in <b className="text-foreground">AWS, Docker</b>, and{" "}
            <b className="text-foreground">Generative AI</b>. I build intelligent, scalable
            software — from REST APIs and admin dashboards to real-time ML applications.
          </p>

          <div
            className="reveal mt-8 flex flex-wrap justify-center gap-3"
            style={{ animationDelay: "0.35s" }}
          >
            <a href={RESUME_URL} className="btn-primary" download>
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              <FileText className="h-4 w-4" /> View Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-ghost">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="btn-ghost">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>

          <div
            className="reveal mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
            style={{ animationDelay: "0.45s" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Erode, Tamil Nadu, India
            </span>
            <span className="opacity-40">•</span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" /> B.Sc. IT · Vellalar College for Women
            </span>
            <span className="opacity-40">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="h-4 w-4" /> CGPA 8.8/10
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="chip mx-auto">{eyebrow}</div>
      <h2 className="section-title mt-4">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader eyebrow="About" title="Building intelligent, scalable software." />
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-8 card-hover">
            <p className="text-base leading-relaxed text-foreground/90">
              I'm a third-year <b>B.Sc. Information Technology</b> student at Vellalar College for
              Women, passionate about building scalable digital solutions that blend modern web
              technologies with cloud infrastructure. As a{" "}
              <b>MERN Stack Developer at W3AppDevelopers</b>, I architect and deploy full-stack
              platforms — REST APIs, CMS modules, admin dashboards and real-time services — using
              MERN, TypeScript and modern cloud tooling.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I'm equally comfortable in <b className="text-foreground">Java</b>,{" "}
              <b className="text-foreground">Python</b> and <b className="text-foreground">GenAI</b>{" "}
              — LangChain, RAG, vector databases and computer-vision pipelines. My goal is to keep
              shipping useful software while deepening my expertise in cloud, DevOps and applied AI.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-4">
            <InfoCard icon={<Briefcase className="h-4 w-4" />} label="Current role" value="MERN Stack Developer @ W3AppDevelopers" />
            <InfoCard icon={<Sparkles className="h-4 w-4" />} label="Focus" value="Full-Stack · Cloud · GenAI" />
            <InfoCard icon={<GraduationCap className="h-4 w-4" />} label="Studying" value="B.Sc. IT · 2024 – 2027" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 card-hover">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">
          {icon}
        </span>
        {label}
      </div>
      <div className="mt-2 font-medium">{value}</div>
    </div>
  );
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1400;
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(end * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function Highlights() {
  const stats = [
    { label: "Projects shipped", value: PROJECTS.length, suffix: "+", icon: <Rocket className="h-4 w-4" /> },
    { label: "Certifications", value: 50, suffix: "+", icon: <Award className="h-4 w-4" /> },
    { label: "Programming languages", value: 11, suffix: "", icon: <Code2 className="h-4 w-4" /> },
    { label: "Core specialisations", value: 4, suffix: "", icon: <Sparkles className="h-4 w-4" /> },
  ];
  return (
    <section className="relative py-6">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-4 rounded-3xl border border-border bg-surface p-4 sm:grid-cols-2 md:grid-cols-4 md:p-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-surface-elevated p-5 text-center card-hover"
            >
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
                {s.icon}
              </div>
              <div className="mt-3 font-display text-3xl font-bold grad-text">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Skills"
          title="A full-stack toolkit, from UI to cloud to AI."
          desc="Grouped by discipline so recruiters can quickly map skills to roles."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 card-hover">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
                  {s.icon}
                </span>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="chip">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've built and shipped."
          desc="Roles taken directly from my resume and LinkedIn — no fluff."
        />
        <ol className="relative border-l border-border pl-6 md:pl-8">
          {EXPERIENCE.map((e, i) => (
            <li key={i} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[33px] md:-left-[41px] top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
                <Briefcase className="h-3 w-3" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 card-hover">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {e.role} <span className="text-muted-foreground">· {e.company}</span>
                  </h3>
                  <span className="text-sm text-muted-foreground">{e.duration}</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <MapPin className="mr-1 inline h-3.5 w-3.5" />
                  {e.location}
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {e.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))],
    [],
  );
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Projects"
          title="Work I'm proud of."
          desc="Filter by category. Every project is drawn from real coursework, internships or client work."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 card-hover"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 text-primary">
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold leading-tight">{p.title}</h3>
                    <div className="text-xs text-muted-foreground">{p.category}</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-foreground/90">{p.tagline}</p>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Problem</div>
                  <p className="mt-1">{p.problem}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Outcome</div>
                  <p className="mt-1">{p.outcome}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Features</div>
                  <ul className="mt-1 grid gap-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader eyebrow="Education" title="Academic background." />
        <div className="grid gap-5 md:grid-cols-3">
          <EduCard
            title="B.Sc. Information Technology"
            org="Vellalar College for Women"
            period="2024 – 2027"
            highlight="CGPA 8.8 / 10"
            notes={[
              "Areas: algorithms, automata, software engineering, data science",
              "Research disciplines: probability, statistics, algorithmic game theory, ML",
            ]}
          />
          <EduCard
            title="Higher Secondary (Grade 12, HSC)"
            org="CBSE — Geethaanjali All India Sr. Sec. School"
            period="2023 – 2024"
            highlight="94.6%"
            notes={["Stream: Commerce with Computer Science"]}
          />
          <EduCard
            title="Secondary (Grade 10, SSLC)"
            org="CBSE Board"
            period="2021 – 2022"
            highlight="93.8%"
            notes={[]}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 card-hover">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-primary" />
            <h3 className="font-semibold">Achievements</h3>
          </div>
          <ul className="mt-4 grid gap-2 text-sm md:grid-cols-3">
            {ACHIEVEMENTS.map((a) => (
              <li key={a} className="flex gap-2 rounded-xl bg-surface-elevated p-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function EduCard({
  title,
  org,
  period,
  highlight,
  notes,
}: {
  title: string;
  org: string;
  period: string;
  highlight: string;
  notes: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 card-hover">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <GraduationCap className="h-3.5 w-3.5" /> {period}
      </div>
      <h3 className="mt-2 font-semibold leading-tight">{title}</h3>
      <div className="mt-1 text-sm text-muted-foreground">{org}</div>
      <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
        {highlight}
      </div>
      {notes.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-foreground/90">
          {notes.map((n) => (
            <li key={n} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {n}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Certifications"
          title="Continuous learning, verified."
          desc="Highlights from 50+ certifications across software, cloud, AI and web."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-border bg-card p-5 card-hover"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 text-primary">
                  <Award className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-tight">{c.name}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
                  {(c.date || c.note) && (
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      {c.date && <span className="chip">{c.date}</span>}
                      {c.note && <span className="chip">{c.note}</span>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="Leadership"
          title="Positions of responsibility."
          desc="Elected roles, campus responsibilities and volunteer work."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {LEADERSHIP.map((l) => (
            <div key={l.role} className="rounded-2xl border border-border bg-card p-6 card-hover">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <Users className="h-3.5 w-3.5" /> {l.period || "Ongoing"}
              </div>
              <h3 className="mt-2 font-semibold">{l.role}</h3>
              <div className="text-sm text-muted-foreground">{l.org}</div>
              <p className="mt-3 text-sm text-foreground/90">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const errs: typeof errors = {};
    if (name.length < 2) errs.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Please enter a valid email.";
    if (message.length < 10) errs.message = "Please write a longer message (10+ chars).";
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together."
          desc="Open to internships, freelance, collaborations and innovative software projects."
        />
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2 space-y-3">
            <button
              onClick={copyEmail}
              className="w-full rounded-2xl border border-border bg-card p-5 text-left card-hover"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <div className="truncate font-medium">{EMAIL}</div>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 text-xs text-primary">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </span>
              </div>
            </button>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-border bg-card p-5 card-hover"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</div>
                  <div className="truncate font-medium">/in/varshaajio</div>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
              </div>
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-border bg-card p-5 card-hover"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Github className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</div>
                  <div className="truncate font-medium">/varshaajio</div>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
              </div>
            </a>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="font-medium">Erode, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="md:col-span-3 rounded-2xl border border-border bg-card p-6 space-y-4"
          >
            <Field label="Name" name="name" error={errors.name} placeholder="Jane Recruiter" />
            <Field
              label="Email"
              name="email"
              type="email"
              error={errors.email}
              placeholder="jane@company.com"
            />
            <Field
              label="Message"
              name="message"
              textarea
              error={errors.message}
              placeholder="Hi Varshaa, we have an opportunity at…"
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-muted-foreground">
                Submitting opens your email client, pre-filled to send to me.
              </div>
              <button type="submit" className="btn-primary">
                <Send className="h-4 w-4" /> Send message
              </button>
            </div>
            {status === "success" && (
              <div className="rounded-lg bg-success/15 px-3 py-2 text-sm text-success">
                Thanks! Your email draft is ready — hit send in your mail app.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-lg bg-destructive/15 px-3 py-2 text-sm text-destructive">
                Please fix the highlighted fields.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
  placeholder?: string;
}) {
  const id = `f-${name}`;
  const cls = `w-full rounded-xl border bg-surface-elevated px-4 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25 ${
    error ? "border-destructive" : "border-border"
  }`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea id={id} name={name} rows={5} className={cls} placeholder={placeholder} />
      ) : (
        <input id={id} name={name} type={type} className={cls} placeholder={placeholder} />
      )}
      {error && <div className="mt-1 text-xs text-destructive">{error}</div>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Varshaa S B. Built with care.
        </div>
        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:bg-primary/10"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:bg-primary/10"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:bg-primary/10"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={RESUME_URL}
            download
            aria-label="Download resume"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:bg-primary/10"
          >
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
