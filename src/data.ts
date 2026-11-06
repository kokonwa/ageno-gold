import type {
  Metric,
  TimelineMilestone,
  OperationSpec,
  MiningOperation,
  TeamMember,
  CaseStudy,
  Testimonial,
  Article,
  SiteLocation,
  InquiryChannel,
  NavItem,
} from "./types";

const IMG =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/0a798ed9-39e4-4002-b28f-0b6333299e6f";

export const IMAGES = {
  hero: `${IMG}/hero-open-pit-mine-13f62339-1793994693437.webp`,
  beforePit: `${IMG}/before-reclamation-pit-5f102d90-1793994692190.webp`,
  afterForest: `${IMG}/after-reclamation-forest-0be26a69-1793994692426.webp`,
  beforeTailings: `${IMG}/before-tailings-facility-4f10e0f7-1793994693110.webp`,
  afterCorridor: `${IMG}/after-biodiversity-corridor-c716289c-1793994692540.webp`,
  exploration: `${IMG}/exploration-geologists-e3983ecb-1793994696309.webp`,
  extraction: `${IMG}/extraction-haul-trucks-625cf202-1793994696448.webp`,
  refining: `${IMG}/refining-gold-bars-81cc67e0-1793994696459.webp`,
};

export const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "about", label: "About" },
  { id: "operations", label: "Operations" },
  { id: "case-studies", label: "Case Studies" },
  { id: "leadership", label: "Leadership" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export const METRICS: Metric[] = [
  {
    id: "reserves",
    value: "2.4M",
    unit: "oz",
    label: "Proven & Probable Reserves",
    detail: "Independently certified JORC / SEC S-K 1300 reserves across four operating districts.",
    icon: "coins",
  },
  {
    id: "purity",
    value: "99.99",
    unit: "%",
    label: "Refined Purity",
    detail: "London Good Delivery accredited bars refined to four-nines specification.",
    icon: "seal",
  },
  {
    id: "carbon",
    value: "0.42",
    unit: "tCO₂e/koz",
    label: "Carbon Intensity Ratio",
    detail: "Best-in-class Scope 1 & 2 emissions per kiloz produced, verified annually.",
    icon: "leaf",
  },
  {
    id: "reclaim",
    value: "12,000",
    unit: "ha",
    label: "Land Reclaimed",
    detail: "Progressive rehabilitation returning mined ground to native habitat corridors.",
    icon: "recycle",
  },
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2008",
    title: "Founding & First Discovery",
    tag: "Origin",
    summary:
      "Ageno Gold is incorporated by a consortium of economic geologists after the Karasi anomaly returns the company's first high-grade intercept.",
    achievements: [
      "Karasi structural target drilled at 14.2 g/t Au",
      "Initial seed capital of $18M raised",
      "First 400 km² exploration licence granted",
    ],
    image: IMAGES.exploration,
  },
  {
    year: "2013",
    title: "Resource Definition",
    tag: "Growth",
    summary:
      "A multi-year infill programme converts the discovery into a maiden 800 koz maiden resource and secures joint-venture partnerships.",
    achievements: [
      "Maiden resource of 800 koz declared",
      "Two strategic JV agreements signed",
      "ISO 14001 environmental certification achieved",
    ],
    image: IMAGES.extraction,
  },
  {
    year: "2017",
    title: "First Ore & Refining Hub",
    tag: "Production",
    summary:
      "The Karasi open pit ships first ore while the coastal hydrometallurgical refinery begins commissioning toward London Good Delivery accreditation.",
    achievements: [
      "First 120 koz of doré shipped",
      "Refinery commissioning complete",
      "1,400 direct jobs created",
    ],
    image: IMAGES.refining,
  },
  {
    year: "2021",
    title: "ESG Leadership Mandate",
    tag: "Stewardship",
    summary:
      "Ageno publishes a science-based decarbonisation roadmap and launches the biodiversity corridor programme across all operating districts.",
    achievements: [
      "SBTi-aligned net-zero 2040 pathway",
      "6,000 ha placed under rehabilitation",
      "IRMA-assurance pilot site selected",
    ],
    image: IMAGES.afterCorridor,
  },
  {
    year: "2025",
    title: "Institutional Scale",
    tag: "Today",
    summary:
      "Four operating districts, 2.4M oz certified reserves and autonomous deep-vein drilling place Ageno among the most efficient producers globally.",
    achievements: [
      "Reserves expanded to 2.4M oz",
      "Autonomous drilling fleet deployed",
      "NYSE / TSX dual-listing readiness",
    ],
    image: IMAGES.hero,
  },
];

export const OPERATIONS: MiningOperation[] = [
  {
    id: "exploration",
    name: "Exploration",
    phase: "Phase 01",
    icon: "compass",
    summary:
      "Airborne geophysics, structural mapping and reverse-circulation drilling delineate targets to JORC confidence before a single tonne moves.",
    image: IMAGES.exploration,
    highlights: [
      "AI-assisted anomaly detection across 400 km² grids",
      "3D geological modelling with grade continuity analysis",
      "Community-led prospecting partnerships",
    ],
    certifications: ["JORC 2012", "ISO 14001"],
  },
  {
    id: "extraction",
    name: "Extraction",
    phase: "Phase 02",
    icon: "factory",
    summary:
      "Selective open-pit mining and autonomous deep-vein drilling recover ore with precision blending to maintain mill feed consistency.",
    image: IMAGES.extraction,
    highlights: [
      "Autonomous haulage with 24/7 remote operations centre",
      "Grade-control blending to +/-0.1 g/t tolerance",
      "Progressive backfill and concurrent rehabilitation",
    ],
    certifications: ["ISO 45001", "IRMA Assured"],
  },
  {
    id: "refining",
    name: "Refining",
    phase: "Phase 03",
    icon: "flask",
    summary:
      "Hydrometallurgical processing and electrowinning produce four-nines gold poured to London Good Delivery accredited bars.",
    image: IMAGES.refining,
    highlights: [
      "99.99% purity certified assay on every pour",
      "Closed-loop cyanide destruction and water recycling",
      "Full chain-of-custody LBMA responsible sourcing",
    ],
    certifications: ["LBMA Good Delivery", "COP 2000"],
  },
];

export const COMPARISON_SPECS: OperationSpec[] = [
  { label: "Typical Depth", values: ["Surface to 300 m", "0 - 600 m pit", "1.2 km deep-vein"] },
  { label: "Gold Recovery Rate", values: ["N/A (delineation)", "92.4%", "96.1% (CIL + EW)"] },
  { label: "Water Recirculation", values: ["38%", "71%", "94% closed loop"] },
  { label: "Carbon Intensity", values: ["0.08 t/koz", "0.31 t/koz", "0.22 t/koz"] },
  { label: "Technology Stack", values: ["Drone LiDAR, RC drill", "AHS fleet, grade model", "CIL, electrowinning"] },
  { label: "Certifications", values: ["JORC 2012", "ISO 45001", "LBMA Good Delivery"] },
  { label: "Workforce", values: ["180 field geologists", "1,400 operators", "620 process engineers"] },
];

const headshot = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&h=480&q=80`;

export const TEAM: TeamMember[] = [
  {
    id: "t1",
    name: "Dr. Amara Osei",
    role: "Chief Executive Officer",
    division: "Leadership",
    photo: headshot("1573497019940-1c28c88b4f3e"),
    bio: "Twenty-two years across tier-one gold producers. Amara led Ageno's transition from explorer to institutional-scale operator with a science-based decarbonisation mandate.",
    credentials: ["PhD Economic Geology", "MBA Wharton", "FAusIMM Fellow"],
    tenure: "Since 2011",
    linkedin: "#",
  },
  {
    id: "t2",
    name: "Henrik Vasquez",
    role: "Chief Financial Officer",
    division: "Leadership",
    photo: headshot("1560250097-0b713593e1df"),
    bio: "Former head of resources banking at a global investment firm, Henrik architects Ageno's capital strategy and dual-listing readiness.",
    credentials: ["CFA Charterholder", "MSc Finance LSE"],
    tenure: "Since 2015",
    linkedin: "#",
  },
  {
    id: "t3",
    name: "Dr. Leila Haddad",
    role: "Chief Sustainability Officer",
    division: "Leadership",
    photo: headshot("1580489944861-034a206968f0"),
    bio: "Leila directs the biodiversity corridor and net-zero 2040 programme, aligning Ageno with IRMA assurance and SBTi targets.",
    credentials: ["PhD Environmental Science", "GRI Certified"],
    tenure: "Since 2019",
    linkedin: "#",
  },
  {
    id: "t4",
    name: "Marcus Feld",
    role: "VP, Exploration",
    division: "Operations",
    photo: headshot("1500648767791-00dcc994a43e"),
    bio: "Marcus has personally delineated over 3M oz of gold resources and leads Ageno's AI-assisted geophysics teams.",
    credentials: ["MSc Geophysics", "SEG Member"],
    tenure: "Since 2012",
    linkedin: "#",
  },
  {
    id: "t5",
    name: "Priya Nair",
    role: "Director, Refining Operations",
    division: "Operations",
    photo: headshot("1544005313-94ddf0286df2"),
    bio: "Priya runs the coastal hydrometallurgical hub, sustaining four-nines purity and LBMA Good Delivery accreditation across every pour.",
    credentials: ["BEng Metallurgy", "Six Sigma Black Belt"],
    tenure: "Since 2016",
    linkedin: "#",
  },
  {
    id: "t6",
    name: "Tomás Rivera",
    role: "Head of Autonomous Mining",
    division: "Operations",
    photo: headshot("1519085360752-af0119f0e305"),
    bio: "Tomás commissioned Ageno's autonomous haulage fleet and remote operations centre, lifting recovery to 96.1% in deep-vein blocks.",
    credentials: ["MEng Mining Automation", "Pr.Eng"],
    tenure: "Since 2020",
    linkedin: "#",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "c1",
    title: "Karasi Pit Reclamation",
    category: "Site Reclamation",
    location: "Northern District",
    year: "2021 - 2024",
    beforeImage: IMAGES.beforePit,
    afterImage: IMAGES.afterForest,
    challenge:
      "A depleted open pit left 1,800 ha of bare ground, acid-generating waste rock and no surface-water pathway.",
    outcome:
      "Progressive landform regrading, topsoil reinstatement and native reforestation restored a self-sustaining watershed and habitat corridor.",
    roi: "1,800 ha returned to native forest, 94% vegetation survival",
    metrics: [
      { label: "Area Reclaimed", value: "1,800 ha" },
      { label: "Trees Planted", value: "420,000" },
      { label: "Water Quality", value: "Class A" },
    ],
  },
  {
    id: "c2",
    title: "Coastal Tailings to Wetland",
    category: "ESG Biodiversity Corridor",
    location: "Coastal Refinery Belt",
    year: "2022 - 2025",
    beforeImage: IMAGES.beforeTailings,
    afterImage: IMAGES.afterCorridor,
    challenge:
      "Legacy tailings storage adjacent to the refinery posed dust and seepage risk to a sensitive coastal ecosystem.",
    outcome:
      "Closed-loop dewatering and a constructed wetland converted the facility into a monitored biodiversity corridor supporting 60+ native species.",
    roi: "3.2x biodiversity value uplift, zero seepage exceedances",
    metrics: [
      { label: "Native Species", value: "62" },
      { label: "Water Recycled", value: "94%" },
      { label: "Dust Events", value: "0" },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "v1",
    quote:
      "Ageno's disclosure discipline and reserve certification are on par with the most credible producers we underwrite. Their ESG audit trail is genuinely best-in-class.",
    author: "Eleanor Whitfield",
    title: "Head of Natural Resources",
    org: "Meridian Institutional Capital",
    rating: 5,
  },
  {
    id: "v2",
    quote:
      "The chain-of-custody and LBMA responsible-sourcing compliance we see from Ageno's refinery sets the benchmark for the entire corridor.",
    author: "Raj Patel",
    title: "Bullion Desk Director",
    org: "Continental Precious Metals",
    rating: 5,
  },
  {
    id: "v3",
    quote:
      "Their autonomous deep-vein programme lifted recovery while cutting carbon intensity. That is the operational leverage the market has been waiting for.",
    author: "Sofia Lindqvist",
    title: "Lead Mining Analyst",
    org: "Nordvik Research",
    rating: 5,
  },
];

const cover = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=520&q=80`;

export const ARTICLES: Article[] = [
  {
    id: "a1",
    title: "Gold's Structural Bid: Why Institutional Allocation Is Repricing in 2025",
    excerpt:
      "Central-bank buying, real-rate softening and supply discipline are converging to reset the gold price floor for the decade ahead.",
    body: [
      "For the first time in a generation, the marginal buyer of gold is not a jeweller or an ETF but a sovereign balance sheet. This structural shift changes how producers should think about price risk and reserve economics.",
      "Ageno's hedging policy deliberately avoids short-dated forward sales, preserving upside participation as institutional demand compounds. With 2.4M oz of certified reserves, the company's optionality is materially higher than peers locked into legacy offtakes.",
      "We expect the repricing to persist as long as real rates remain compressed and supply growth stays constrained. The exploration pipeline, not the spot price, will define the next cycle's winners.",
    ],
    category: "Market Outlook",
    author: "Henrik Vasquez",
    date: "2025-05-14",
    readingTime: 6,
    cover: cover("1610375461140-8a1059200c06"),
  },
  {
    id: "a2",
    title: "Measuring What Matters: Our Biodiversity Corridor Audit Results",
    excerpt:
      "Independent assurance confirms a 3.2x biodiversity value uplift across the coastal reclamation belt. Here is the methodology.",
    body: [
      "Biodiversity is notoriously hard to quantify, which is exactly why it is often ignored. Ageno adopted a common metric aligned to the Taskforce on Nature-related Financial Disclosures.",
      "We baseline every hectare before disturbance, track native species return, and publish annual audited deltas. The coastal corridor now supports 62 recorded native species against a zero baseline.",
      "Transparency is the point. Investors increasingly price nature risk, and a defensible, third-party-assured dataset is a competitive asset, not a cost centre.",
    ],
    category: "ESG & Reclamation",
    author: "Dr. Leila Haddad",
    date: "2025-04-02",
    readingTime: 5,
    cover: cover("1441974231577-d74038178f1f"),
  },
  {
    id: "a3",
    title: "Autonomous Deep-Vein Drilling: Cutting Carbon While Lifting Recovery",
    excerpt:
      "Our remote operations centre runs 24/7 autonomous fleets. The result is 96.1% recovery at 0.22 tCO2e/koz.",
    body: [
      "Automation is often sold as a labour story. At Ageno it is an emissions and recovery story first. Electric autonomous loaders eliminate diesel underground while tightening grade-control tolerances.",
      "The remote operations centre fuses real-time survey, geology and dispatch data, cutting idle cycles and stabilising mill feed. Recovery in the deep-vein block rose from 92% to 96.1%.",
      "Lower energy per ounce and higher recovery compound: the same orebody yields more gold with less carbon, which is the only kind of productivity growth that survives a carbon-constrained decade.",
    ],
    category: "Tech in Mining",
    author: "Tomás Rivera",
    date: "2025-03-19",
    readingTime: 7,
    cover: cover("1581091226072-9c6510a0c04c"),
  },
  {
    id: "a4",
    title: "S-K 1300 and JORC Convergence: What Dual Reporting Means for Investors",
    excerpt:
      "Aligning SEC S-K 1300 with JORC 2012 removes ambiguity from reserve statements. We break down the practical impact.",
    body: [
      "Historically, US-listed and Commonwealth-listed miners reported resources under different rules, forcing investors to reconcile incompatible reserve tables.",
      "The 2025 convergence maps JORC confidence categories directly onto S-K 1300 disclosure, meaning Ageno's 2.4M oz figure is comparable across both exchanges without restatement.",
      "For institutional underwriting this is the difference between a headline number and a bankable one. We publish the full technical report summaries alongside every reserve update.",
    ],
    category: "Regulatory Updates",
    author: "Dr. Amara Osei",
    date: "2025-02-27",
    readingTime: 4,
    cover: cover("1454165804606-c3d57bc86b40"),
  },
];

export const LOCATIONS: SiteLocation[] = [
  {
    id: "l1",
    name: "Global Headquarters",
    type: "Headquarters",
    region: "Kinshasa, Democratic Republic of the Congo",
    address: "Kinshasa, Democratic Republic of the Congo",
    status: "Operational",
    coords: { x: 54, y: 57 },
  },
  {
    id: "l2",
    name: "Karasi Open Pit",
    type: "Mine Site",
    region: "Northern District",
    address: "Karasi Operations, Zone 4",
    status: "Operational",
    coords: { x: 55, y: 60 },
  },
  {
    id: "l3",
    name: "Coastal Refinery",
    type: "Refinery",
    region: "Refinery Belt",
    address: "Port Industrial Estate, Bay 7",
    status: "Operational",
    coords: { x: 42, y: 66 },
  },
  {
    id: "l4",
    name: "Deep-Vein North",
    type: "Mine Site",
    region: "Northern District",
    address: "Autonomous Block C",
    status: "Under Development",
    coords: { x: 60, y: 48 },
  },
  {
    id: "l5",
    name: "Regional Assay Office",
    type: "Assay Office",
    region: "Geneva, Switzerland",
    address: "Quai du Seujet 12",
    status: "Commissioning",
    coords: { x: 50, y: 40 },
  },
];

export const INQUIRY_CHANNELS: InquiryChannel[] = [
  {
    id: "investor",
    label: "Investor Relations",
    description: "Reserve data, financial disclosures and listing readiness.",
    icon: "scales",
  },
  {
    id: "media",
    label: "Media & Press",
    description: "Interviews, imagery and editorial enquiries.",
    icon: "megaphone",
  },
  {
    id: "joint",
    label: "Joint Ventures",
    description: "Partnership, offtake and exploration collaboration.",
    icon: "globe",
  },
];
