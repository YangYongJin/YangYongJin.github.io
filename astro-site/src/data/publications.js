// Publication order and grouping mirror the current CV.
// selected: featured on the home page.
// firstAuthor: retained for reference.

export const publications = [
  // Conference papers
  {
    year: 2026, category: "conference", firstAuthor: true, selected: true,
    title: "Transferability for General Reasoning: An Automated Curriculum for Multi-Domain RLVR",
    authors: "Yongjin Yang, Jiarui Liu, Yinghui He, Lechen Zhang, Bernhard Schölkopf, Zhijing Jin†",
    venue: "NeurIPS 2026 · ICML 2026 RLxF Workshop, Oral (4 of 222 submissions)",
    links: { paper: "https://arxiv.org/abs/2606.25178", code: "https://github.com/YangYongJin/transfer-aware-curriculum" },
  },
  {
    year: 2026, category: "conference", selected: true,
    title: "Toward Skill-Native LLMs: Skill Entropy for Benchmarking and Training Long-Horizon Reasoning",
    authors: "Yinghui He, Ling Yang, Jiarui Liu, Yongjin Yang, et al.",
    venue: "NeurIPS 2026",
    links: { paper: "https://arxiv.org/abs/2608.05139", code: "https://github.com/Gen-Verse/Skill-Entropy-RL" },
  },
  {
    year: 2026, category: "conference", selected: true,
    title: "LLM-as-a-Tutor: Policy-Aware Prompt Adaptation for Non-Verifiable RL",
    authors: "Yujin Kim*, Namgyu Ho*, Sangmin Hwang*, Joonkee Kim, Yongjin Yang, Sangmin Bae, Seungone Kim, Jaehun Jung, Se-Young Yun†, Hwanjun Song†",
    venue: "NeurIPS 2026",
    links: { paper: "https://arxiv.org/abs/2607.04412" },
  },
  {
    year: 2026, category: "conference", selected: true,
    title: "Entropy-Aware On-Policy Distillation of Language Models",
    authors: "Woogyeol Jin, Taywon Min, Yongjin Yang, Dennis Wei, Yi Zhou, Swanand Ravindra Kadhe, Nathalie Baracaldo, Kimin Lee",
    venue: "ICML 2026",
    links: { paper: "https://arxiv.org/abs/2603.07079", code: "https://github.com/WLS04/EOPD" },
  },
  {
    year: 2025, category: "conference",
    title: "Agent-to-Agent Theory of Mind: Testing Interlocutor Awareness among Large Language Models",
    authors: "Younwoo Choi*, Changling Li*, Yongjin Yang, Zhijing Jin",
    venue: "EMNLP 2025 Main",
    links: { paper: "https://arxiv.org/pdf/2506.22957", code: "https://github.com/younwoochoi/InterlocutorAwarenessLLM" },
  },
  {
    year: 2025, category: "conference",
    title: "Corrupted by Reasoning: Reasoning Language Models Become Free-Riders in Public Goods Games",
    authors: "David Guzman Piedrahita, Yongjin Yang, Mrinmaya Sachan, Giorgia Ramponi, Bernhard Schölkopf, Zhijing Jin",
    venue: "COLM 2025",
    links: { paper: "https://arxiv.org/abs/2506.23276", code: "https://github.com/davidguzmanp/SanctSim" },
  },
  {
    year: 2025, category: "conference",
    title: "Self-Training Elicits Concise Reasoning in Large Language Models",
    authors: "Tergel Munkhbat*, Namgyu Ho*, Seo Hyun Kim*, Yongjin Yang, Yujin Kim, Se-Young Yun",
    venue: "ACL 2025 Findings",
    links: { paper: "https://arxiv.org/abs/2502.20122", code: "https://github.com/TergelMunkhbat/concise-reasoning" },
  },
  {
    year: 2025, category: "conference",
    title: "Code-Switching Red-Teaming: LLM Evaluation for Safety and Multilingual Understanding",
    authors: "Haneul Yoo, Yongjin Yang, Hwaran Lee",
    venue: "ACL 2025 Main",
    links: { paper: "https://arxiv.org/abs/2406.15481", code: "https://github.com/haneul-yoo/csrt" },
  },
  {
    year: 2025, category: "conference", firstAuthor: true, selected: true,
    title: "Automated Filtering of Human Feedback Data for Aligning Text-to-Image Diffusion Models",
    authors: "Yongjin Yang*, Sihyeon Kim*, Hojung Jung, Sangmin Bae, SangMook Kim, Se-Young Yun†, Kimin Lee†",
    venue: "ICLR 2025",
    links: { paper: "https://arxiv.org/abs/2410.10166", code: "https://github.com/YangYongJin/FiFA-Official-Repo", project: "https://sprain02.github.io/FiFA/" },
  },
  {
    year: 2025, category: "conference", firstAuthor: true,
    title: "MAQA: Evaluating Uncertainty Quantification in LLMs Regarding Data Uncertainty",
    authors: "Yongjin Yang, Haneul Yoo, Hwaran Lee",
    venue: "NAACL 2025 Findings",
    links: { paper: "https://arxiv.org/abs/2408.06816", code: "https://github.com/YangYongJin/MAQA-Official-Repo" },
  },
  {
    year: 2024, category: "conference", firstAuthor: true,
    title: "Towards Difficulty-Agnostic Efficient Transfer Learning for Vision-Language Models",
    authors: "Yongjin Yang*, Jongwoo Ko*, Se-Young Yun",
    venue: "EMNLP 2024 Main",
    links: { paper: "https://arxiv.org/abs/2311.15569", code: "https://github.com/YangYongJin/APEX" },
  },
  {
    year: 2024, category: "conference", firstAuthor: true,
    title: "Leveraging Normalization Layer in Adapters with Progressive Learning and Adaptive Distillation for Cross-Domain Few-Shot Learning",
    authors: "Yongjin Yang, Taehyeon Kim, Se-Young Yun",
    venue: "AAAI 2024",
    links: { paper: "https://arxiv.org/abs/2312.11260" },
  },
  {
    year: 2023, category: "conference", firstAuthor: true,
    title: "HARE: Explainable Hate Speech Detection with Step-by-Step Reasoning",
    authors: "Yongjin Yang*, Joonkee Kim*, Yujin Kim*, Namgyu Ho, James Thorne†, Se-Young Yun†",
    venue: "EMNLP 2023 Findings",
    links: { paper: "https://arxiv.org/abs/2311.00321", code: "https://github.com/joonkeekim/hare-hate-speech" },
  },
  {
    year: 2023, category: "conference", firstAuthor: true,
    title: "Meta-Learning with Adaptive Weighted Loss for Imbalanced Cold-Start Recommendation",
    authors: "Minchang Kim*, Yongjin Yang*, Jung Hyun Ryu, Taesup Kim",
    venue: "CIKM 2023 · Oral",
    links: { paper: "https://arxiv.org/abs/2302.14640", code: "https://github.com/yangyongjin/melo" },
  },

  // Preprints
  {
    year: 2026, category: "preprint", firstAuthor: true,
    title: "Learning from Evolving Prompts: Adaptive Prompt Teaching for Reinforcement Learning",
    authors: "Yongjin Yang, Lechen Zhang, Jiarui Liu, Yinghui He, Christopher Pal, Alexandre Drouin, Zhijing Jin",
    venue: "Under review",
    links: {},
  },
  {
    year: 2026, category: "preprint",
    title: "Self-Distillation Zero: Self-Revision Turns Binary Rewards into Dense Supervision",
    authors: "Yinghui He, Simran Kaur, Adithya Bhaskar, Yongjin Yang, Jiarui Liu, Narutatsu Ri, Liam Fowl, Abhishek Panigrahi, Danqi Chen, Sanjeev Arora",
    venue: "Preprint · ICML 2026 RLxF Workshop, Oral",
    links: { paper: "https://arxiv.org/abs/2604.12002", code: "https://github.com/princeton-pli/Self-Distillation-Zero" },
  },
  {
    year: 2026, category: "preprint", firstAuthor: true,
    title: "Making Complex Reasoning Student-Friendly: A Hybrid Distillation Framework for Small Language Models",
    authors: "Yongjin Yang, Yinghui He, Jiarui Liu, Zhijing Jin",
    venue: "Preprint · ICLR 2026 Workshop on Scaling Post-Training for LLMs",
    links: { paper: "https://openreview.net/pdf?id=6jP5PDOmqN" },
  },
  {
    year: 2025, category: "preprint", firstAuthor: true,
    title: "Automated Skill Discovery for Language Agents through Exploration and Iterative Feedback",
    authors: "Yongjin Yang*, Sinjae Kang*, Juyong Lee, Dongjun Lee, Se-Young Yun†, Kimin Lee†",
    venue: "Preprint",
    links: { paper: "https://arxiv.org/abs/2506.04287" },
  },
  {
    year: 2025, category: "preprint", firstAuthor: true,
    title: "Revisiting Multi-Agent Debate as Test-Time Scaling: A Systematic Study of Conditional Effectiveness",
    authors: "Yongjin Yang*, Euiin Yi*, Jongwoo Ko, Kimin Lee†, Zhijing Jin†, Se-Young Yun†",
    venue: "Preprint · ICML 2025 Multi-Agent Systems Workshop",
    links: { paper: "https://arxiv.org/abs/2505.22960", code: "https://github.com/euiin/MAD_as_TTS" },
  },
];
