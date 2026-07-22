// Hardcoded SanharSGT knowledge base for RAG / LLM system prompts AND for the
// chat widget's local (no-backend-required) Q&A fallback.
// Sourced from this project's own src/data/*Content.js files (the site's committed copy).
// Swap in live/CMS data later without changing the chat widget's contract.

export const SANHAR_KNOWLEDGE = {
  company: {
    name: "SanharSGT",
    tagline: "Enterprise Healthcare & Digital Systems for Growth",
    summary:
      "SANHAR SGT designs and delivers enterprise-grade digital infrastructure for mission-critical organizations worldwide, spanning hospital information systems, enterprise resource planning, and advanced analytics.",
    since: "2004",
    stats: { yearsExperience: "20+", globalClients: "200+", countries: "12" },
    vision:
      "To be the trusted foundation for mission-critical organizations globally, powering the future of healthcare through tech-driven empathy.",
    mission:
      "To deliver systems that evolve with the organization, ensuring scalability, security and superior performance.",
    features: ["Healthcare IT Specialists (Expert Team)", "HIPAA & ISO Compliant (Security First)", "Scalable Infrastructure (Cloud Native)"],
    compliance: ["HIPAA", "SOC 2", "ISO 27001"],
  },

  services: [
    { name: "Hospital Information System (HIS)", description: "Comprehensive HIS managing clinical, administrative, and financial operations in a single integrated suite." },
    { name: "Laboratory Information System (LIS)", description: "Precision LIS automating lab workflows and sample management with global health standard integration." },
    { name: "Radiology Information System / PACS (RIS/PACS)", description: "High-speed viewing and secure storage for complex medical imaging departments." },
    { name: "Electronic Health Records (EHR)", description: "Unified, patient-centric data platform providing real-time access to patient history across clinical teams." },
    { name: "Enterprise Resource Planning (ERP)", description: "Financial control covering HR, payroll, and asset lifecycles with industry-specific ERP modules." },
    { name: "Inventory & Pharmacy / Supply Chain", description: "Real-time tracking and intelligent forecasting for medical supplies and pharmaceuticals." },
  ],

  platforms: [
    "Enterprise HIMS",
    "Business Intelligence (Power BI dashboards & purchase analytics)",
    "Doctor Mobility app",
    "Patient Engagement (Patient app)",
    "e-Prescription (eRx)",
    "Supply Chain Management (SCM)",
  ],

  whoWeServe: [
    { title: "Public Health Authorities", tagline: "Population Health", description: "Population health management at scale with real-time disease surveillance and health analytics." },
    { title: "Private Hospital Networks", tagline: "Multi-Facility Care", description: "Unified management for multi-facility chains: consistent care standards, centralized billing, shared EHR." },
    { title: "Medical Research & Trials", tagline: "Clinical Innovation", description: "High-fidelity data collection and secure management of clinical trials and research datasets." },
    { title: "Health Insurance Groups", tagline: "Claims & Risk", description: "Automated claims processing, member risk stratification, provider network management, fraud detection." },
    { title: "Laboratory & Imaging", tagline: "Diagnostic Precision", description: "Integrated LIS and RIS/PACS workflows with seamless EMR integration." },
    { title: "Specialty Care Clinics", tagline: "Specialized Care", description: "Tailored workflows for cardiology, oncology, and fertility clinics." },
  ],

  whyUs: {
    pillars: [
      { title: "Enterprise-Grade Security", items: ["HIPAA, SOC 2, ISO 27001", "End-to-end data encryption", "Regular security audits", "Role-based access control"] },
      { title: "Performance at Scale", items: ["Sub-second response times", "Horizontal scaling capabilities", "Optimized DB architecture", "Millions of transactions"] },
      { title: "Global Deployment", items: ["Multi-tenant SaaS", "Data residency compliance", "24/7 global support", "Multi-language & currency"] },
      { title: "Domain Expertise", items: ["Healthcare IT specialists", "Enterprise architects", "Best practices integration", "Regulatory knowledge"] },
    ],
    methodology: [
      { title: "Discovery", desc: "Requirements & Architecture", time: "2-4 weeks" },
      { title: "Dev & Config", desc: "Custom System Builds", time: "8-16 weeks" },
      { title: "Testing", desc: "UAT & User Training", time: "3-6 weeks" },
      { title: "Go-Live", desc: "Deployment & Support", time: "Ongoing" },
    ],
    techStack: ["Microservices", "PostgreSQL", "AWS / Cloud", "OAuth 2.0"],
  },

  leadership:
    "SanharSGT is guided by an experienced healthcare-technology leadership team spanning engineering, operations, and enterprise architecture. For named leadership contacts, please reach out to our team directly.",

  offices: [
    { city: "Mumbai", country: "India", type: "Corporate Headquarters", address: "Premium Tech Park, North Mumbai" },
    { city: "Dubai", country: "UAE", type: "Regional Innovation Hub", address: "DIFC, Level 15, UAE" },
    { city: "Bangalore", country: "India", type: "Primary Engineering Center", address: "Silicon Valley Complex, BLR" },
    { city: "Nairobi", country: "Kenya", type: "Africa HQ & Operations", address: "Business District Towers" },
  ],

  contact: {
    generalInquiries: "hello@sanharsgt.com",
    supportDesk: "+1 (800) 123-4567",
    headquarters: "Mumbai, India",
  },

  careers: {
    heading: "Build Systems That Save Lives",
    description: "We're looking for extraordinary people to solve global healthcare infrastructure challenges.",
    openRoles: [
      { title: "Senior Health-Tech Engineer", dept: "Engineering", location: "Remote / Global", type: "Full-time" },
      { title: "Product Designer (UI/UX)", dept: "Design", location: "San Francisco, CA", type: "Full-time" },
      { title: "Enterprise Solutions Architect", dept: "Engineering", location: "London, UK", type: "Hybrid" },
      { title: "Security & Compliance Lead", dept: "Operations", location: "Remote", type: "Full-time" },
    ],
  },

  resources: {
    caseStudies: ["350-bed hospital network", "Multi-national manufacturing ERP", "District health network - 85 facilities"],
    blog: ["Healthcare interoperability challenges", "Modernizing legacy ERP systems", "Cloud migration for healthcare"],
    downloads: ["SANHAR HIMS Product Sheet", "Integration Architecture Guide", "Healthcare Security Framework"],
  },

  testimonials: [
    { quote: "Sanhar's HIMS solution transformed our hospital's operational efficiency, reducing patient wait times by 40% and improving billing accuracy.", author: "Dr. Rajesh Kumar, Medical Director", company: "Apollo Hospitals" },
    { quote: "The Business Intelligence dashboards give us real-time insights critical for decision-making.", author: "Sarah Jenning, Chief Operations Officer", company: "Aster DM Healthcare" },
    { quote: "Implementing the e-Prescription system eliminated medication errors and improved doctor-pharmacist communication.", author: "Dr. Ayesha Khan, Head of Pharmacy", company: "Zulekha Hospital" },
    { quote: "The Doctor Mobility app is intuitive and has empowered our physicians to access patient records on the go.", author: "Mr. Vikram Singh, IT Manager", company: "NMC Healthcare" },
  ],
};

// Flattened system prompt string, ready to hand to a real LLM backend as context.
export const SANHAR_SYSTEM_PROMPT = `You are the official virtual assistant for SanharSGT (SANHAR SGT), an enterprise healthcare and digital systems company founded in ${SANHAR_KNOWLEDGE.company.since}.

COMPANY
${SANHAR_KNOWLEDGE.company.summary}
Scale: ${SANHAR_KNOWLEDGE.company.stats.yearsExperience} years experience, ${SANHAR_KNOWLEDGE.company.stats.globalClients} global clients, operating in ${SANHAR_KNOWLEDGE.company.stats.countries} countries.
Compliance: ${SANHAR_KNOWLEDGE.company.compliance.join(", ")}.
Vision: ${SANHAR_KNOWLEDGE.company.vision}
Mission: ${SANHAR_KNOWLEDGE.company.mission}

SERVICES
${SANHAR_KNOWLEDGE.services.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

PLATFORMS / PRODUCTS IN USE
${SANHAR_KNOWLEDGE.platforms.map((p) => `- ${p}`).join("\n")}

WHO WE SERVE
${SANHAR_KNOWLEDGE.whoWeServe.map((w) => `- ${w.title} (${w.tagline}): ${w.description}`).join("\n")}

WHY SANHAR SGT
${SANHAR_KNOWLEDGE.whyUs.pillars.map((p) => `- ${p.title}: ${p.items.join(", ")}`).join("\n")}
Delivery methodology: ${SANHAR_KNOWLEDGE.whyUs.methodology.map((m) => `${m.title} (${m.time})`).join(" -> ")}
Tech stack: ${SANHAR_KNOWLEDGE.whyUs.techStack.join(", ")}

LEADERSHIP
${SANHAR_KNOWLEDGE.leadership}

GLOBAL OFFICES
${SANHAR_KNOWLEDGE.offices.map((o) => `- ${o.city}, ${o.country} (${o.type}): ${o.address}`).join("\n")}

CAREERS
${SANHAR_KNOWLEDGE.careers.description}
${SANHAR_KNOWLEDGE.careers.openRoles.map((j) => `- ${j.title} (${j.dept}, ${j.location}, ${j.type})`).join("\n")}

RESOURCES
Case studies: ${SANHAR_KNOWLEDGE.resources.caseStudies.join("; ")}
Blog: ${SANHAR_KNOWLEDGE.resources.blog.join("; ")}
Downloads: ${SANHAR_KNOWLEDGE.resources.downloads.join("; ")}

CLIENT TESTIMONIALS
${SANHAR_KNOWLEDGE.testimonials.map((t) => `- "${t.quote}" — ${t.author}, ${t.company}`).join("\n")}

CONTACT
General inquiries: ${SANHAR_KNOWLEDGE.contact.generalInquiries}
Support desk: ${SANHAR_KNOWLEDGE.contact.supportDesk}
Headquarters: ${SANHAR_KNOWLEDGE.contact.headquarters}

INSTRUCTIONS
- Answer only using the information above. If asked something outside this scope, politely say you don't have that information and offer the contact details.
- Keep answers concise and professional, suited to enterprise healthcare buyers.
- Never invent leadership names, pricing, or client names that are not listed above.`;

// --- Local Q&A matcher -------------------------------------------------
// Lets the chat widget answer correctly even with no backend wired up yet.
// Each topic is checked in order; the first keyword match wins.
const TOPICS = [
  {
    keywords: ["service", "product", "offer", "his ", " his", "lis", "ris", "pacs", "ehr", "erp", "platform", "solution"],
    answer: () =>
      `We offer:\n${SANHAR_KNOWLEDGE.services.map((s) => `• ${s.name} — ${s.description}`).join("\n")}`,
  },
  {
    keywords: ["industry", "serve", "who do you work", "client type", "hospital network", "insurance group", "clinic", "research"],
    answer: () =>
      `We serve:\n${SANHAR_KNOWLEDGE.whoWeServe.map((w) => `• ${w.title} — ${w.description}`).join("\n")}`,
  },
  {
    keywords: ["security", "hipaa", "compliance", "iso", "soc", "why sanhar", "why should", "why choose", "why us"],
    answer: () =>
      `Why SanharSGT:\n${SANHAR_KNOWLEDGE.whyUs.pillars.map((p) => `• ${p.title}: ${p.items.join(", ")}`).join("\n")}`,
  },
  {
    keywords: ["methodology", "process", "how do you deliver", "implementation timeline", "delivery model"],
    answer: () =>
      `Our delivery methodology:\n${SANHAR_KNOWLEDGE.whyUs.methodology.map((m) => `• ${m.title} (${m.time}) — ${m.desc}`).join("\n")}`,
  },
  {
    keywords: ["tech stack", "technology", "built with", "architecture"],
    answer: () => `Our platforms run on: ${SANHAR_KNOWLEDGE.whyUs.techStack.join(", ")}.`,
  },
  {
    keywords: ["office", "location", "where are you", "address", "headquarters", " hq"],
    answer: () =>
      `Our offices:\n${SANHAR_KNOWLEDGE.offices.map((o) => `• ${o.city}, ${o.country} — ${o.type} (${o.address})`).join("\n")}`,
  },
  {
    keywords: ["contact", "email", "phone", "call you", "reach you", "sales", "get in touch"],
    answer: () =>
      `You can reach us at:\n📧 ${SANHAR_KNOWLEDGE.contact.generalInquiries}\n📞 ${SANHAR_KNOWLEDGE.contact.supportDesk}\n📍 HQ: ${SANHAR_KNOWLEDGE.contact.headquarters}`,
  },
  {
    keywords: ["leadership", "ceo", "founder", "who runs", "management team", "who leads"],
    answer: () => SANHAR_KNOWLEDGE.leadership,
  },
  {
    keywords: ["career", "job", "hiring", "vacan", "work at", "join sanhar", "open position"],
    answer: () =>
      `${SANHAR_KNOWLEDGE.careers.description}\nOpen roles:\n${SANHAR_KNOWLEDGE.careers.openRoles.map((j) => `• ${j.title} — ${j.dept}, ${j.location} (${j.type})`).join("\n")}`,
  },
  {
    keywords: ["case study", "case studies", "blog", "resource", "download", "whitepaper", "documentation"],
    answer: () =>
      `Case studies: ${SANHAR_KNOWLEDGE.resources.caseStudies.join(", ")}.\nBlog: ${SANHAR_KNOWLEDGE.resources.blog.join(", ")}.\nDownloads: ${SANHAR_KNOWLEDGE.resources.downloads.join(", ")}.`,
  },
  {
    keywords: ["testimonial", "review", "client feedback", "what do clients say", "case for"],
    answer: () =>
      SANHAR_KNOWLEDGE.testimonials.map((t) => `"${t.quote}" — ${t.author}, ${t.company}`).join("\n\n"),
  },
  {
    keywords: ["about", "company", "history", "founded", "since when", "mission", "vision", "how many years", "how many client", "how many countr"],
    answer: () =>
      `${SANHAR_KNOWLEDGE.company.summary}\nFounded in ${SANHAR_KNOWLEDGE.company.since} — ${SANHAR_KNOWLEDGE.company.stats.yearsExperience} years experience, ${SANHAR_KNOWLEDGE.company.stats.globalClients} clients, ${SANHAR_KNOWLEDGE.company.stats.countries} countries.\nVision: ${SANHAR_KNOWLEDGE.company.vision}`,
  },
  {
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon"],
    answer: () => "Hello! I'm the SanharSGT assistant. Ask me about our products, industries we serve, offices, or how to get in touch.",
  },
  {
    keywords: ["thank", "thanks"],
    answer: () => "You're welcome! Let me know if there's anything else you'd like to know about SanharSGT.",
  },
];

/**
 * Answers a user query from the local knowledge base only (no network call).
 * Returns null when nothing relevant is found, so the caller can fall back
 * to a real backend response or the contact-info message.
 */
export function findKnowledgeAnswer(query) {
  if (!query) return null;
  const q = ` ${query.toLowerCase()} `;
  for (const topic of TOPICS) {
    if (topic.keywords.some((kw) => q.includes(kw))) {
      return topic.answer();
    }
  }
  return null;
}

export default SANHAR_SYSTEM_PROMPT;
