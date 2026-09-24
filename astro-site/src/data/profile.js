// ============================================================
// EDIT ME: all bio / education / experience / news content.
// Publications live in publications.js.
// ============================================================

export const profile = {
  name: "Yongjin Yang",
  tagline: "LLM post-training and self-improving agents",
  affiliation: "University of Toronto · Vector Institute",
  email: "yjyang@cs.toronto.edu",
  interests:
    "LLM post-training and self-improving agents, with a focus on RL post-training (curricula, exploration, and multi-domain RLVR), knowledge distillation, prompt optimization, and memory-augmented agents.",
  links: {
    github: "https://github.com/YangYongJin",
    scholar: "https://scholar.google.com/citations?user=qGVZm3sAAAAJ",
    linkedin: "https://www.linkedin.com/in/yongjin-yang-0195a6184/",
    cv: "https://drive.google.com/file/d/1r37bpjVRWvK_cWFh0txtSKrlxopp-y5B/view?usp=drive_link",
  },
  bioHtml: `
    I am a Ph.D. student at the University of Toronto and the Vector Institute, advised by
    Professor <a href="https://zhijing-jin.com/home/">Zhijing Jin</a> and supported by the
    Connaught International Scholarship. Previously, I completed my M.S. at KAIST AI with
    <a href="https://fbsqkd.github.io/">Se-Young Yun</a> and
    <a href="https://sites.google.com/view/kiminlee">Kimin Lee</a>, and my B.S. at Seoul
    National University. I study LLM post-training and self-improving agents, including
    RL curricula and exploration, knowledge distillation, prompt optimization, and
    memory-augmented agents.
  `,
};

// "news" renders on the home page. Only the big ones, most recent first.
export const news = [
  { date: "2026-09", text: "Three papers accepted to NeurIPS 2026, including my work on Transfer-Aware Curriculum (TAC)!" },
  { date: "2026-06", text: "Two papers selected as Orals (Top 4 Best Papers out of 222 submissions) at the ICML 2026 RLxF Workshop." },
  { date: "2026-06", text: "Recognized as a Gold Reviewer for ICML 2026." },
  { date: "2026-05", text: "Entropy-Aware On-Policy Distillation accepted at ICML 2026." },
  { date: "2026-02", text: "Started as a visiting researcher at ServiceNow AI Research (Montreal), working on reinforcement learning for long-horizon agents." },
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
  { when: "Sep 2025 – Summer 2029 (expected)", what: "University of Toronto · Ph.D. in Computer Science (adviser: Zhijing Jin) · GPA 4.0/4.0" },
  { when: "Mar 2023 – Feb 2025", what: "KAIST · M.S., Graduate School of AI (advisers: Se-Young Yun, Kimin Lee) · GPA 4.18/4.3, ranked 2nd in department" },
  { when: "Mar 2017 – Feb 2023", what: "Seoul National University · B.S., Electrical and Computer Engineering · GPA 4.12/4.3, Summa Cum Laude" },
];

export const experience = [
  { when: "Feb 2026 – Sep 2026", what: "ServiceNow AI Research · Visiting Researcher, UI Assist team (supervised by Alexandre Drouin and Christopher Pal): adaptive prompt teaching and RL for long-horizon agents" },
  { when: "Sep 2025 – Present", what: "University of Toronto & Vector Institute · Graduate Researcher (advised by Zhijing Jin): transfer-aware curricula and LLM-to-SLM distillation" },
  { when: "Mar 2024 – Jun 2024", what: "Naver AI Lab · Research Intern (supervised by Hwaran Lee): uncertainty quantification and multilingual red-teaming" },
  { when: "Mar 2023 – Feb 2025", what: "KAIST · Graduate Researcher (advised by Se-Young Yun and Kimin Lee): language-agent exploration, preference-data filtering, and vision-language transfer learning" },
  { when: "Jun 2022 – Sep 2022", what: "Seoul National University · Undergraduate Researcher (advised by Taesup Kim): adaptive loss reweighting for cold-start recommendation" },
];

export const awards = [
  { when: "2025", what: "Connaught International Scholarship · University of Toronto" },
  { when: "2017 – 2023", what: "Korea National Science & Technology Scholarship · full-ride academic excellence scholarship" },
];

export const services = [
  "Reviewer: NeurIPS, ICML (Gold Reviewer, 2026), ICLR, COLM, TMLR, and ACL Rolling Review (2024–2026)",
  "Lab Administrator, Jinesis Lab · HPC compute and infrastructure",
];

export const teaching = [
  { when: "Sep 2026 – Dec 2026", what: "Probabilistic Learning and Reasoning (CSC412/2506) · Teaching Assistant (UofT)" },
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
