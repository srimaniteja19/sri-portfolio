export interface NavLink {
  href: string;
  label: string;
}

export interface ExperienceItem {
  date: string;
  role: string;
  meta: string;
  desc: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export interface AboutCell {
  label: string;
  title: string;
  body: string;
  color: string;
}

export interface ProjectItem {
  num: string;
  label: string;
  name: string;
  desc: string;
  tags: string[];
  url: string;
  color: string;
  active?: boolean;
}

export interface HeroTag {
  label: string;
  color: string;
}

export interface HeroFocusItem {
  label: string;
  value: string;
  color: string;
}

export interface HeroStat {
  n: string;
  l: string;
  bar: string;
}

export interface HeroProficiency {
  label: string;
  pct: number;
  col: string;
}

export interface FunFactItem {
  icon: string;
  title: string;
  text: string;
  accent?: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  color: string;
  stripe: string;
}

export interface CTAAvailItem {
  text: string;
}

export interface PortfolioContent {
  header: {
    name: string;
    email: string;
    navLinks: NavLink[];
    openToRolesText: string;
  };
  hero: {
    subtitle: string;
    name: string;
    role: string;
    statusComment: string;
    codeRole: string;
    codeFocus: string;
    codeStatus: string;
    codeComment: string;
    tags: HeroTag[];
    focusItems: HeroFocusItem[];
    stats: HeroStat[];
    proficiency: HeroProficiency[];
    terminalWhoami: string;
    terminalStack: string;
    terminalCommit1: string;
    terminalCommit2: string;
    githubUrl: string;
    linkedinUrl: string;
  };
  experience: {
    items: ExperienceItem[];
    sidebarStats: string[];
  };
  education: EducationItem[];
  about: { cells: AboutCell[] };
  projects: ProjectItem[];
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
    tagline: string;
  };
  footer: {
    name: string;
    location: string;
    statusText: string;
  };
  cta: {
    availItems: string[];
    headline: string;
    subline: string;
  };
  process: { steps: ProcessStep[] };
  funFacts: FunFactItem[];
}
