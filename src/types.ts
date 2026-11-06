// Core domain types for the Ageno Gold corporate platform.

export type SectionId =
  | "overview"
  | "about"
  | "operations"
  | "case-studies"
  | "leadership"
  | "insights"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Metric {
  id: string;
  value: string;
  unit?: string;
  label: string;
  detail: string;
  icon: "coins" | "seal" | "leaf" | "recycle";
}

export interface TimelineMilestone {
  year: string;
  title: string;
  summary: string;
  achievements: string[];
  image: string;
  tag: string;
}

export interface OperationSpec {
  label: string;
  values: [string, string, string]; // exploration, extraction, refining
}

export interface MiningOperation {
  id: string;
  name: string;
  phase: string;
  icon: "compass" | "factory" | "flask";
  summary: string;
  image: string;
  highlights: string[];
  certifications: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: "Leadership" | "Operations";
  photo: string;
  bio: string;
  credentials: string[];
  tenure: string;
  linkedin: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  beforeImage: string;
  afterImage: string;
  challenge: string;
  outcome: string;
  roi: string;
  metrics: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  org: string;
  rating: number;
}

export type ArticleCategory =
  | "Market Outlook"
  | "ESG & Reclamation"
  | "Tech in Mining"
  | "Regulatory Updates";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  body: string[];
  category: ArticleCategory;
  author: string;
  date: string;
  readingTime: number;
  cover: string;
}

export interface SiteLocation {
  id: string;
  name: string;
  type: "Headquarters" | "Refinery" | "Mine Site" | "Assay Office";
  region: string;
  address: string;
  status: "Operational" | "Under Development" | "Commissioning";
  coords: { x: number; y: number }; // % position on stylised map
}

export interface InquiryChannel {
  id: string;
  label: string;
  description: string;
  icon: "scales" | "megaphone" | "globe";
}
