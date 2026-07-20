// ============================================================
// EDIT ME: all bio / education / experience / news content.
// Publications live in publications.js.
// ============================================================

export const profile = {
  name: "Yongjin Yang",
  tagline: "Post-training & self-improvement for language models",
  affiliation: "University of Toronto · Vector Institute",
  email: "dyyjkd@gmail.com",
  interests:
    "Post-training and self-improvement for language models, with a focus on exploration, adaptive curricula, knowledge distillation, reinforcement learning, memory-augmented agents, and continual learning.",
  links: {
    github: "https://github.com/YangYongJin",
    scholar: "https://scholar.google.com/citations?user=qGVZm3sAAAAJ",
    linkedin: "https://www.linkedin.com/in/yongjin-yang-0195a6184/",
  },
  bioHtml: `
    I am a Ph.D. student at the University of Toronto and the Vector Institute, advised by
    Professor <a href="https://zhijing-jin.com/home/">Zhijing Jin</a> and supported by the
    Connaught International Scholarship. Previously, I completed my M.S. at KAIST AI with
    <a href="https://fbsqkd.github.io/">Se-Young Yun</a> and
    <a href="https://sites.google.com/view/kiminlee">Kimin Lee</a>, and my B.S. at Seoul
    National University. I work on post-training and self-improvement for language models,
    including exploration, adaptive curricula, knowledge distillation, reinforcement
    learning, memory-augmented agents, and continual learning.
  `,
};

// "news" renders on the home page. Only the big ones, most recent first.
export const news = [
  { date: "2026-06", text: "Two papers selected as Orals (Top 4 Best Papers out of 222 submissions) at the ICML 2026 RLxF Workshop." },
  { date: "2026-06", text: "Recognized as a Gold Reviewer for ICML 2026." },
  { date: "2026-05", text: "Entropy-Aware On-Policy Distillation accepted at ICML 2026." },
  { date: "2026-02", text: "Started as a visiting researcher at ServiceNow AI Research (Montreal), working on memory-augmented agents." },
  { date: "2025-09", text: "Started my Ph.D. at the University of Toronto / Vector Institute." },
];

// Current research interests.
export const projects = [
  {
    name: "Learning from better data",
    color: "coral",
    desc: "Learning is, at its core, fitting data, so the data often matters most. I am interested in which data should be used for which tasks, how to organize it into curricula, and how to construct effective data for knowledge distillation.",
  },
  {
    name: "Where should knowledge live?",
    color: "purple",
    desc: "What should a model absorb into its parameters, retain in external memory, or receive through context? I am interested in how stability, reuse, and forgetting should affect that choice.",
  },
  {
    name: "Exploration and self-improvement",
    color: "teal",
    desc: "A system can only learn from the experiences it produces. I am curious about agents that guide their own exploration and about whether useful exploration should happen in text, latent, or task-specific spaces.",
  },
];

export const education = [
  { when: "Sep 2025 – Present", what: "University of Toronto · Ph.D. in Computer Science (adviser: Zhijing Jin)" },
  { when: "Mar 2023 – Feb 2025", what: "KAIST · M.S., Graduate School of AI (advisers: Se-Young Yun, Kimin Lee) · GPA 4.18/4.3, ranked 2nd in department" },
  { when: "Mar 2017 – Feb 2023", what: "Seoul National University · B.S., Electrical and Computer Engineering · GPA 4.12/4.3, Summa Cum Laude" },
];

export const experience = [
  { when: "Feb 2026 – Sep 2026", what: "ServiceNow AI Research (Montreal) · Visiting Researcher, UI Assist team: memory-augmented and continual-learning methods for LM agents" },
  { when: "Mar 2024 – Jun 2024", what: "Naver AI Lab · Research Intern, Language Research team: uncertainty quantification & code-switching red-teaming (NAACL 2025, ACL 2025)" },
  { when: "Jul 2021 – Aug 2021", what: "Samsung Electronics, MX · Software Engineering Intern: Android System API logging framework" },
];

export const awards = [
  { when: "Apr 2025", what: "Connaught International Scholarship · entrance scholarship for five international students, UofT" },
  { when: "Dec 2023", what: "Best Paper Award, Korea Software Congress (KSC) · FedCON: Model Contrastive Federated Learning on Re-Identification" },
  { when: "2017 – 2023", what: "Korea National Science & Technology Scholarship · full-ride academic excellence scholarship" },
];

export const services = [
  "Conferences: ICLR (2025, 2026), NeurIPS (2025, 2026), ICML 2026 (Gold Reviewer), COLM (2025, 2026), AAAI 2025",
  "Journals: TMLR",
  "ACL Rolling Review: 2024 (Feb, Jun, Oct, Dec), 2025 (Feb, May, Jul, Oct), 2026 (Jan)",
  "Workshops: DPFM @ ICLR (2024, 2025), MAS @ ICML 2025",
];

export const teaching = [
  { when: "Sep 2025 – Dec 2025", what: "Introduction to Programming Languages · Teaching Assistant (UofT)" },
  { when: "Sep 2021 – Feb 2022", what: "Introduction to Algorithms · Departmental Tutor (SNU)" },
  { when: "Mar 2018 – Aug 2018", what: "Principles of Physics I · Group Tutor (SNU)" },
];

// Blog posts on deck. Rendered as "coming soon" on /blog/ and the home page.
export const upcomingPosts = [
  {
    title: "Exploration in the LLM Space",
    desc: "A look at exploration in classical reinforcement learning, why it becomes a bottleneck in reinforcement learning for language models, and which ideas may be worth trying next.",
    color: "teal",
  },
  {
    title: "Memory vs. Parameters",
    desc: "An analogy to how humans learn, followed by a recap of research on updating a model through its parameters or through external memory.",
    color: "purple",
  },
  {
    title: "Anthropic's Full Ecosystem",
    desc: "A researcher's tour of the Claude ecosystem: models, Claude Code, the Agent SDK, MCP, and skills, and what it signals about where AI systems are heading.",
    color: "coral",
  },
];
