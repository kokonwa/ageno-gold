import { createContext, useContext } from "react";

export type Lang = "en" | "fr";

export const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export const useLang = () => useContext(LangContext);

export const IMG = {
  hero: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/560f121e-e8da-4de2-a8e6-798242cb7af6/hero-mining-6a296dfa-1794000222384.webp",
  director: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/560f121e-e8da-4de2-a8e6-798242cb7af6/director-portrait-3a8745ec-1794000223021.webp",
  newsOps: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/560f121e-e8da-4de2-a8e6-798242cb7af6/news-operations-2bba2c29-1794000222680.webp",
  newsEsg: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/560f121e-e8da-4de2-a8e6-798242cb7af6/news-esg-3848ac1a-1794000222982.webp",
  newsTech: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/560f121e-e8da-4de2-a8e6-798242cb7af6/news-technology-357b6b17-1794000223385.webp",
  newsMarket: "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/560f121e-e8da-4de2-a8e6-798242cb7af6/news-market-cafd7fab-1794000225735.webp",
};

export interface Territory {
  id: string;
  name: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ContentData {
  nav: { links: { label: string; href: string }[]; inquiry: string };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    cta1: string;
    cta2: string;
    badges: string[];
    metrics: { value: number; suffix: string; label: string }[];
  };
  about: { title: string; body: string; values: { title: string; desc: string }[] };
  operations: { title: string; subtitle: string; territories: Territory[] };
  services: { title: string; subtitle: string; items: Service[] };
  leadership: {
    title: string;
    name: string;
    role: string;
    bio: string;
    vision: string;
    focus: string[];
  };
  timeline: { title: string; events: TimelineEvent[] };
  news: { title: string; search: string; all: string; categories: string[]; articles: Article[] };
  testimonials: { title: string; items: Testimonial[] };
  contact: {
    title: string;
    subtitle: string;
    labels: { name: string; email: string; org: string; dept: string; msg: string };
    depts: string[];
    submit: string;
    success: string;
    phone: string;
    phoneSecondary: string;
    email: string;
    address: string;
    bases: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    legal: string;
    rights: string;
    newsletter: string;
    subscribe: string;
    emailPlaceholder: string;
  };
}

const en: ContentData = {
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Operations", href: "#operations" },
      { label: "Services", href: "#services" },
      { label: "Leadership", href: "#leadership" },
      { label: "Timeline", href: "#timeline" },
      { label: "News", href: "#news" },
      { label: "Contact", href: "#contact" },
    ],
    inquiry: "Request Inquiry",
  },
  hero: {
    eyebrow: "Ageno Mining Company",
    headline: "Sustainable Gold Exploration & Industrial Extraction in the DRC",
    sub: "Headquartered in Kinshasa with active concessions across Haut-Uele and Ituri provinces.",
    cta1: "Explore Operations",
    cta2: "Download Institutional Profile",
    badges: ["Kinshasa HQ", "Haut-Uele Concessions", "Ituri Exploration", "Zero Mercury Protocol"],
    metrics: [
      { value: 12400, suffix: "+", label: "Hectares Under License" },
      { value: 100, suffix: "%", label: "ESG Compliance" },
      { value: 48, suffix: "", label: "Exploration Drills Active" },
    ],
  },
  about: {
    title: "About Ageno Mining",
    body: "Founded in Kinshasa in 2025, Ageno Mining Company is a registered Congolese enterprise operating under the Mining Code 2018. We combine advanced geological expertise with responsible extraction practices to develop gold assets across the Democratic Republic of Congo while empowering local communities.",
    values: [
      { title: "Transparency", desc: "Open reporting aligned with the Extractive Industries Transparency Initiative (EITI)." },
      { title: "Sustainability", desc: "Zero mercury protocol, tailings management, and full environmental rehabilitation." },
      { title: "Community", desc: "Formalizing artisanal mining and investing in local infrastructure and education." },
    ],
  },
  operations: {
    title: "Operational Presence",
    subtitle: "Three strategic hubs anchoring our end-to-end mining value chain across the DRC.",
    territories: [
      {
        id: "kinshasa",
        name: "Kinshasa",
        role: "Corporate Headquarters",
        description: "Central command for regulatory compliance, mineral export logistics, refining certification, and institutional partnerships.",
        highlights: ["Cadastre Minier registration", "Export permit processing", "Refining certification", "Investor relations"],
      },
      {
        id: "haut-uele",
        name: "Haut-Uele (Watsa Belt)",
        role: "Primary Extraction Zone",
        description: "Mechanical extraction operations covering alluvial and hard-rock gold deposits along the Watsa greenstone belt.",
        highlights: ["Alluvial gold recovery", "Hard-rock vein extraction", "Core drilling programs", "Field base operations"],
      },
      {
        id: "ituri",
        name: "Ituri (Mongbwalu-Mambasa)",
        role: "Exploration Corridor",
        description: "Geological prospecting and community development pacts targeting high-grade vein evaluation across the Ituri gold corridor.",
        highlights: ["High-grade vein mapping", "Community development pacts", "Geophysical surveys", "Resource estimation"],
      },
    ],
  },
  services: {
    title: "Technical Capabilities",
    subtitle: "Six core competencies driving value from exploration through refined delivery.",
    items: [
      { id: "exploration", title: "Gold Exploration & Core Drilling", description: "Systematic diamond drilling programs with real-time assay analysis for resource delineation.", stat: "48+", statLabel: "Active Drill Rigs" },
      { id: "extraction", title: "Responsible Open-Pit & Underground Extraction", description: "Mechanized extraction with zero-mercury processing and full environmental monitoring.", stat: "100%", statLabel: "Mercury-Free" },
      { id: "mapping", title: "Remote Sensing & Geological Mapping", description: "Satellite imagery, LiDAR, and ground-truth surveys for deposit characterization.", stat: "12K", statLabel: "Hectares Mapped" },
      { id: "environment", title: "Environmental Stewardship & Tailings", description: "Comprehensive EIA programs, water treatment, and progressive land rehabilitation.", stat: "6", statLabel: "Certified EIAs" },
      { id: "community", title: "Local Community Empowerment", description: "Artisanal miner formalization, infrastructure investment, and skills development.", stat: "2.4K", statLabel: "Jobs Created" },
      { id: "logistics", title: "Secure Supply Chain & Refining", description: "Chain-of-custody protocols from pit to certified refinery with full audit trails.", stat: "99.9%", statLabel: "Traceability" },
    ],
  },
  leadership: {
    title: "Executive Leadership",
    name: "Eng. Patrick Ageno",
    role: "Founder & Managing Director",
    bio: "A mining engineer with over 20 years of experience across Central and East Africa, Patrick founded Ageno Mining to demonstrate that responsible extraction and community prosperity are inseparable. He holds a degree in Mining Engineering from the University of Kinshasa and has led exploration programs in the Kilo-Moto and Mongbwalu goldfields.",
    vision: "Our vision is to build a world-class Congolese mining enterprise that adds value at every stage, from the pit to the refinery, while setting new standards for environmental and social governance in the DRC.",
    focus: ["Transparent ESG Governance", "Technology-Driven Yield", "Local Workforce Development"],
  },
  timeline: {
    title: "Milestones",
    events: [
      { date: "Jan 2025", title: "Kinshasa Incorporation", description: "Ageno Mining Company officially registered with the DRC Ministry of Mines under the Mining Code 2018." },
      { date: "Mar 2025", title: "Cadastre Minier Permits", description: "Exploration permits granted for three concessions in the Haut-Uele and Ituri provinces." },
      { date: "Jun 2025", title: "Haut-Uele Field Base", description: "Operational field base established in Watsa with initial core drilling programs launched." },
      { date: "Aug 2025", title: "EIA Certification", description: "Environmental Impact Assessment approved for all active exploration zones by the Ministry of Environment." },
      { date: "Oct 2025", title: "Ituri Community Agreement", description: "Signed community development pacts with local authorities in Mongbwalu and Mambasa territories." },
      { date: "Present", title: "Processing Expansion", description: "Commissioning of a new gravity separation processing plant targeting 500 kg/month capacity." },
    ],
  },
  news: {
    title: "News & Insights",
    search: "Search articles...",
    all: "All",
    categories: ["Operations", "ESG & Community", "Technology", "Market Analysis"],
    articles: [
      {
        id: "n1", title: "Watsa Processing Plant Reaches Phase II Commissioning", category: "Operations",
        date: "Dec 2025", readTime: "4 min",
        excerpt: "Our new gravity separation facility in Haut-Uele enters Phase II commissioning, targeting 500 kg monthly throughput.",
        body: [
          "The Ageno Mining processing facility in Watsa has entered Phase II commissioning, marking a significant milestone in our operational capacity expansion. The gravity separation plant is designed to process alluvial and hard-rock ore with zero mercury usage.",
          "Phase II involves the integration of automated flotation cells and a closed-loop water recycling system. Once fully operational, the plant will process up to 120 tonnes of ore per day, supporting our target of 500 kg of refined gold per month.",
          "This investment reinforces our commitment to mechanized, responsible extraction practices while creating over 150 direct jobs for the local Watsa workforce.",
        ],
        image: IMG.newsOps,
      },
      {
        id: "n2", title: "Environmental Impact Assessment Approved for All Active Zones", category: "ESG & Community",
        date: "Nov 2025", readTime: "3 min",
        excerpt: "The Ministry of Environment certifies our comprehensive EIA covering all exploration and extraction sites.",
        body: [
          "Ageno Mining has received full Environmental Impact Assessment certification from the DRC Ministry of Environment for all active exploration and extraction zones across Haut-Uele and Ituri provinces.",
          "The EIA covers water management, biodiversity protection, tailings storage, and progressive land rehabilitation plans. Our zero-mercury processing commitment was highlighted as a sector benchmark.",
          "Independent auditors praised the community engagement component, which includes artisanal miner formalization programs and infrastructure development agreements with local chiefdoms.",
        ],
        image: IMG.newsEsg,
      },
      {
        id: "n3", title: "LiDAR Survey Maps 12,000 Hectares of Gold-Bearing Terrain", category: "Technology",
        date: "Oct 2025", readTime: "5 min",
        excerpt: "Advanced remote sensing identifies new high-grade vein structures in the Mongbwalu corridor.",
        body: [
          "Our geological team completed a comprehensive LiDAR and satellite-based survey covering 12,000 hectares across the Ituri exploration corridor, revealing previously unmapped gold-bearing vein structures.",
          "The survey combined drone-mounted LiDAR with multispectral satellite imagery, processed through proprietary 3D modeling software. Results identified four new high-priority drill targets in the Mongbwalu area.",
          "This technology-driven approach allows us to optimize exploration spending while minimizing surface disturbance, consistent with our environmental stewardship commitments.",
        ],
        image: IMG.newsTech,
      },
      {
        id: "n4", title: "Gold Market Outlook: DRC Artisanal Sector Formalization", category: "Market Analysis",
        date: "Sep 2025", readTime: "6 min",
        excerpt: "Analysis of how formalization initiatives are reshaping the Congolese gold supply chain and export dynamics.",
        body: [
          "The formalization of artisanal and small-scale mining (ASM) in the DRC is fundamentally reshaping the national gold supply chain. Ageno Mining's community partnership model offers a replicable framework for the sector.",
          "By integrating artisanal miners into our licensed operations under fair-trade protocols, we create traceable supply chains that meet international refinery standards while providing sustainable livelihoods.",
          "The global gold market continues to reward ethically sourced material, and DRC producers who can demonstrate full chain-of-custody compliance are positioned to capture premium pricing.",
        ],
        image: IMG.newsMarket,
      },
    ],
  },
  testimonials: {
    title: "Partner Endorsements",
    items: [
      { quote: "Ageno Mining has set a new standard for responsible gold extraction in Haut-Uele. Their environmental protocols exceed national requirements.", name: "Dr. Marie Kabongo", role: "Provincial Mining Delegate, Haut-Uele" },
      { quote: "The geological data quality from Ageno's exploration programs is world-class. Their LiDAR work revealed structures we had missed for years.", name: "Jean-Luc Moreau", role: "Senior Geologist, African Mining Consultants" },
      { quote: "As a logistics partner, we value Ageno's transparent chain-of-custody. Every shipment is documented from pit to refinery.", name: "Emmanuel Tshibangu", role: "Director, Congo Mineral Logistics SARL" },
      { quote: "Ageno Mining invested in our school and health center before extracting a single gram of gold. That is real community partnership.", name: "Chef Louis Mbala", role: "Community Leader, Mongbwalu Territory" },
    ],
  },
  contact: {
    title: "Get in Touch",
    subtitle: "For inquiries related to procurement, investment, concessions, careers, or press.",
    labels: { name: "Full Name", email: "Email Address", org: "Organization / Institution", dept: "Department", msg: "Your Message" },
    depts: ["Procurement", "Investor Relations", "Concession Inquiries", "Careers", "Press"],
    submit: "Send Inquiry",
    success: "Your inquiry has been received. Our team will respond within 48 hours.",
    phone: "+243 819 702 362",
    phoneSecondary: "+256 778 775 060",
    email: "contact@agenominingcompany.com",
    address: "Boulevard du 30 Juin, Gombe, Kinshasa, DR Congo",
    bases: "Operational Bases: Watsa (Haut-Uele) & Bunia/Mambasa (Ituri)",
  },
  footer: {
    tagline: "Responsible gold exploration and industrial extraction across the Democratic Republic of Congo.",
    quickLinks: "Quick Links",
    legal: "Ageno Mining Company operates under the DRC Mining Code 2018 (Loi n°18/001). All extraction activities are conducted under valid exploitation permits issued by the Ministry of Mines.",
    rights: "All rights reserved.",
    newsletter: "Institutional Updates",
    subscribe: "Subscribe",
    emailPlaceholder: "Enter your email",
  },
};

const fr: ContentData = {
  nav: {
    links: [
      { label: "À propos", href: "#about" },
      { label: "Opérations", href: "#operations" },
      { label: "Services", href: "#services" },
      { label: "Direction", href: "#leadership" },
      { label: "Chronologie", href: "#timeline" },
      { label: "Actualités", href: "#news" },
      { label: "Contact", href: "#contact" },
    ],
    inquiry: "Demander un Rendez-vous",
  },
  hero: {
    eyebrow: "Ageno Mining Company",
    headline: "Exploration Aurifère Durable & Extraction Industrielle en RDC",
    sub: "Siège à Kinshasa avec des concessions actives dans les provinces du Haut-Uele et de l'Ituri.",
    cta1: "Explorer nos Opérations",
    cta2: "Télécharger le Profil Institutionnel",
    badges: ["Siège Kinshasa", "Concessions Haut-Uele", "Exploration Ituri", "Protocole Zéro Mercure"],
    metrics: [
      { value: 12400, suffix: "+", label: "Hectares Sous Licence" },
      { value: 100, suffix: "%", label: "Conformité ESG" },
      { value: 48, suffix: "", label: "Forages d'Exploration Actifs" },
    ],
  },
  about: {
    title: "À Propos d'Ageno Mining",
    body: "Fondée à Kinshasa en 2025, Ageno Mining Company est une entreprise congolaise enregistrée sous le Code Minier 2018. Nous combinons une expertise géologique avancée avec des pratiques d'extraction responsables pour développer des actifs aurifères en République Démocratique du Congo tout en autonomisant les communautés locales.",
    values: [
      { title: "Transparence", desc: "Rapports ouverts alignés sur l'Initiative pour la Transparence dans les Industries Extractives (ITIE)." },
      { title: "Durabilité", desc: "Protocole zéro mercure, gestion des résidus et réhabilitation environnementale complète." },
      { title: "Communauté", desc: "Formalisation de l'orpaillage et investissement dans les infrastructures et l'éducation locales." },
    ],
  },
  operations: {
    title: "Présence Opérationnelle",
    subtitle: "Trois pôles stratégiques ancrant notre chaîne de valeur minière intégrée à travers la RDC.",
    territories: [
      {
        id: "kinshasa",
        name: "Kinshasa",
        role: "Siège Social",
        description: "Commande centrale pour la conformité réglementaire, la logistique d'exportation, la certification de raffinage et les partenariats institutionnels.",
        highlights: ["Inscription au Cadastre Minier", "Traitement des permis d'exportation", "Certification de raffinage", "Relations investisseurs"],
      },
      {
        id: "haut-uele",
        name: "Haut-Uele (Ceinture de Watsa)",
        role: "Zone d'Extraction Principale",
        description: "Opérations d'extraction mécanique couvrant les gisements alluvionnaires et de roche dure le long de la ceinture verte de Watsa.",
        highlights: ["Récupération d'or alluvionnaire", "Extraction de veines en roche dure", "Programmes de carottage", "Base opérationnelle de terrain"],
      },
      {
        id: "ituri",
        name: "Ituri (Mongbwalu-Mambasa)",
        role: "Corridor d'Exploration",
        description: "Prospection géologique et pactes de développement communautaire visant l'évaluation de veines à haute teneur dans le corridor aurifère de l'Ituri.",
        highlights: ["Cartographie de veines à haute teneur", "Pactes de développement communautaire", "Relevés géophysiques", "Estimation des ressources"],
      },
    ],
  },
  services: {
    title: "Capacités Techniques",
    subtitle: "Six compétences fondamentales créant de la valeur de l'exploration à la livraison raffinée.",
    items: [
      { id: "exploration", title: "Exploration Aurifère & Carottage", description: "Programmes de forage diamanté systématiques avec analyse en temps réel pour la délimitation des ressources.", stat: "48+", statLabel: "Sondes Actives" },
      { id: "extraction", title: "Extraction Responsable à Ciel Ouvert & Souterraine", description: "Extraction mécanisée avec traitement zéro mercure et surveillance environnementale complète.", stat: "100%", statLabel: "Sans Mercure" },
      { id: "mapping", title: "Télédétection & Cartographie Géologique", description: "Imagerie satellite, LiDAR et relevés de terrain pour la caractérisation des gisements.", stat: "12K", statLabel: "Hectares Cartographiés" },
      { id: "environment", title: "Gestion Environnementale & Résidus", description: "Programmes d'EIE complets, traitement des eaux et réhabilitation progressive des terres.", stat: "6", statLabel: "EIE Certifiées" },
      { id: "community", title: "Autonomisation des Communautés Locales", description: "Formalisation de l'orpaillage, investissement en infrastructures et développement des compétences.", stat: "2,4K", statLabel: "Emplois Créés" },
      { id: "logistics", title: "Chaîne d'Approvisionnement & Raffinage Sécurisés", description: "Protocoles de traçabilité de la fosse à la raffinerie certifiée avec pistes d'audit complètes.", stat: "99,9%", statLabel: "Traçabilité" },
    ],
  },
  leadership: {
    title: "Direction Exécutive",
    name: "Ing. Patrick Ageno",
    role: "Fondateur & Directeur Général",
    bio: "Ingénieur minier avec plus de 20 ans d'expérience en Afrique centrale et orientale, Patrick a fondé Ageno Mining pour démontrer que l'extraction responsable et la prospérité communautaire sont indissociables. Il est titulaire d'un diplôme en Génie Minier de l'Université de Kinshasa et a dirigé des programmes d'exploration dans les champs aurifères de Kilo-Moto et Mongbwalu.",
    vision: "Notre vision est de bâtir une entreprise minière congolaise de classe mondiale qui ajoute de la valeur à chaque étape, de la fosse à la raffinerie, tout en établissant de nouveaux standards de gouvernance environnementale et sociale en RDC.",
    focus: ["Gouvernance ESG Transparente", "Rendement par la Technologie", "Développement de la Main-d'œuvre Locale"],
  },
  timeline: {
    title: "Jalons",
    events: [
      { date: "Jan 2025", title: "Incorporation à Kinshasa", description: "Ageno Mining Company officiellement enregistrée auprès du Ministère des Mines de la RDC sous le Code Minier 2018." },
      { date: "Mar 2025", title: "Permis Cadastre Minier", description: "Permis d'exploration accordés pour trois concessions dans les provinces du Haut-Uele et de l'Ituri." },
      { date: "Juin 2025", title: "Base de Terrain Haut-Uele", description: "Base opérationnelle établie à Watsa avec lancement des premiers programmes de carottage." },
      { date: "Août 2025", title: "Certification EIE", description: "Évaluation d'Impact Environnemental approuvée pour toutes les zones d'exploration actives par le Ministère de l'Environnement." },
      { date: "Oct 2025", title: "Accord Communautaire Ituri", description: "Signature de pactes de développement communautaire avec les autorités locales des territoires de Mongbwalu et Mambasa." },
      { date: "Présent", title: "Expansion du Traitement", description: "Mise en service d'une nouvelle usine de séparation par gravité visant une capacité de 500 kg/mois." },
    ],
  },
  news: {
    title: "Actualités & Analyses",
    search: "Rechercher des articles...",
    all: "Tout",
    categories: ["Opérations", "ESG & Communauté", "Technologie", "Analyse de Marché"],
    articles: [
      {
        id: "n1", title: "L'Usine de Traitement de Watsa Atteint la Phase II de Mise en Service", category: "Opérations",
        date: "Déc 2025", readTime: "4 min",
        excerpt: "Notre nouvelle installation de séparation par gravité au Haut-Uele entre en phase II de mise en service, visant 500 kg de production mensuelle.",
        body: [
          "L'installation de traitement d'Ageno Mining à Watsa est entrée en phase II de mise en service, marquant une étape significative dans notre expansion de capacité opérationnelle. L'usine de séparation par gravité est conçue pour traiter le minerai alluvionnaire et de roche dure sans utilisation de mercure.",
          "La phase II implique l'intégration de cellules de flottation automatisées et d'un système de recyclage d'eau en circuit fermé. Une fois pleinement opérationnelle, l'usine traitera jusqu'à 120 tonnes de minerai par jour.",
          "Cet investissement renforce notre engagement envers des pratiques d'extraction mécanisées et responsables tout en créant plus de 150 emplois directs pour la main-d'œuvre locale de Watsa.",
        ],
        image: IMG.newsOps,
      },
      {
        id: "n2", title: "Évaluation d'Impact Environnemental Approuvée pour Toutes les Zones Actives", category: "ESG & Communauté",
        date: "Nov 2025", readTime: "3 min",
        excerpt: "Le Ministère de l'Environnement certifie notre EIE complète couvrant tous les sites d'exploration et d'extraction.",
        body: [
          "Ageno Mining a reçu la certification complète de son Évaluation d'Impact Environnemental du Ministère de l'Environnement de la RDC pour toutes les zones actives d'exploration et d'extraction dans les provinces du Haut-Uele et de l'Ituri.",
          "L'EIE couvre la gestion de l'eau, la protection de la biodiversité, le stockage des résidus et les plans de réhabilitation progressive des terres. Notre engagement en matière de traitement sans mercure a été souligné comme un référence sectorielle.",
          "Les auditeurs indépendants ont salué le volet d'engagement communautaire, qui inclut des programmes de formalisation de l'orpaillage et des accords de développement d'infrastructures avec les chefferies locales.",
        ],
        image: IMG.newsEsg,
      },
      {
        id: "n3", title: "Relevé LiDAR Cartographie 12 000 Hectares de Terrain Aurifère", category: "Technologie",
        date: "Oct 2025", readTime: "5 min",
        excerpt: "La télédétection avancée identifie de nouvelles structures de veines à haute teneur dans le corridor de Mongbwalu.",
        body: [
          "Notre équipe géologique a complété un relevé LiDAR et satellite couvrant 12 000 hectares dans le corridor d'exploration de l'Ituri, révélant des structures de veines aurifères auparavant cartographiées.",
          "Le relevé combinait du LiDAR monté sur drone avec de l'imagerie satellite multispectrale, traitée par un logiciel de modélisation 3D propriétaire. Les résultats ont identifié quatre nouvelles cibles de forage à haute priorité dans la zone de Mongbwalu.",
          "Cette approche technologique nous permet d'optimiser les dépenses d'exploration tout en minimisant la perturbation de surface, conformément à nos engagements de gestion environnementale.",
        ],
        image: IMG.newsTech,
      },
      {
        id: "n4", title: "Perspectives du Marché de l'Or : Formalisation du Secteur Artisanal en RDC", category: "Analyse de Marché",
        date: "Sep 2025", readTime: "6 min",
        excerpt: "Analyse de l'impact des initiatives de formalisation sur la chaîne d'approvisionnement aurifère congolaise.",
        body: [
          "La formalisation de l'exploitation minière artisanale et à petite échelle (EMAPE) en RDC transforme fondamentalement la chaîne d'approvisionnement nationale en or. Le modèle de partenariat communautaire d'Ageno Mining offre un cadre réplicable pour le secteur.",
          "En intégrant les orpailleurs dans nos opérations licenciées sous des protocoles de commerce équitable, nous créons des chaînes d'approvisionnement traçables répondant aux normes internationales des raffineries.",
          "Le marché mondial de l'or continue de récompenser le matériau éthiquement sourced, et les producteurs de la RDC capables de démontrer une conformité complète de traçabilité sont positionnés pour capter des prix premium.",
        ],
        image: IMG.newsMarket,
      },
    ],
  },
  testimonials: {
    title: "Témoignages des Partenaires",
    items: [
      { quote: "Ageno Mining a établi un nouveau standard pour l'extraction responsable de l'or au Haut-Uele. Leurs protocoles environnementaux dépassent les exigences nationales.", name: "Dr. Marie Kabongo", role: "Déléguée Provinciale des Mines, Haut-Uele" },
      { quote: "La qualité des données géologiques des programmes d'exploration d'Ageno est de classe mondiale. Leur travail LiDAR a révélé des structures que nous avions manquées pendant des années.", name: "Jean-Luc Moreau", role: "Géologue Senior, African Mining Consultants" },
      { quote: "En tant que partenaire logistique, nous apprécions la traçabilité transparente d'Ageno. Chaque expédition est documentée de la fosse à la raffinerie.", name: "Emmanuel Tshibangu", role: "Directeur, Congo Mineral Logistics SARL" },
      { quote: "Ageno Mining a investi dans notre école et notre centre de santé avant d'extraire un seul gramme d'or. C'est un véritable partenariat communautaire.", name: "Chef Louis Mbala", role: "Leader Communautaire, Territoire de Mongbwalu" },
    ],
  },
  contact: {
    title: "Nous Contacter",
    subtitle: "Pour les demandes relatives aux approvisionnements, investissements, concessions, carrières ou presse.",
    labels: { name: "Nom Complet", email: "Adresse Email", org: "Organisation / Institution", dept: "Département", msg: "Votre Message" },
    depts: ["Approvisionnement", "Relations Investisseurs", "Demandes de Concessions", "Carrières", "Presse"],
    submit: "Envoyer la Demande",
    success: "Votre demande a été reçue. Notre équipe répondra dans les 48 heures.",
    phone: "+243 819 702 362",
    phoneSecondary: "+256 778 775 060",
    email: "contact@agenominingcompany.com",
    address: "Boulevard du 30 Juin, Gombe, Kinshasa, RD Congo",
    bases: "Bases Opérationnelles : Watsa (Haut-Uele) & Bunia/Mambasa (Ituri)",
  },
  footer: {
    tagline: "Exploration aurifère responsable et extraction industrielle à travers la République Démocratique du Congo.",
    quickLinks: "Liens Rapides",
    legal: "Ageno Mining Company opère sous le Code Minier 2018 de la RDC (Loi n°18/001). Toutes les activités d'extraction sont menées sous des permis d'exploitation valides délivrés par le Ministère des Mines.",
    rights: "Tous droits réservés.",
    newsletter: "Actualités Institutionnelles",
    subscribe: "S'abonner",
    emailPlaceholder: "Entrez votre email",
  },
};

export const CONTENT: Record<Lang, ContentData> = { en, fr };
