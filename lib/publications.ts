export interface Publication {
  id: string;
  code: string;
  type: "Journal Article" | "Workshop Paper";
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  status: string;
  location?: string;
  doi?: string;
  arxiv?: string;
  primaryClass?: string;
  url?: string;
  urlLabel?: string;
  bibtex?: string;
}

export const publications: Publication[] = [
  {
    id: "sarkar2026sartopoguard",
    code: "J1",
    type: "Journal Article",
    title:
      "SAR-TopoGuard: Training-Free, Speckle-Aware Topological Verification for Structure-Preserving SAR-to-Optical Translation",
    authors: [
      "Satabarto Sarkar",
      "Debojyoti Ghosh",
      "Subhranil Biswas",
      "Kaustav Mandal",
      "D. Sobya",
    ],
    venue: "IEEE Geoscience and Remote Sensing Letters",
    venueShort: "IEEE GRSL",
    year: 2026,
    status: "Accepted (in press)",
    doi: "10.1109/LGRS.2026.3753492",
    url: "https://doi.org/10.1109/LGRS.2026.3753492",
    urlLabel: "DOI: 10.1109/LGRS.2026.3753492",
    bibtex: `@article{sarkar2026sartopoguard,
  author  = {Sarkar, Satabarto and Ghosh, Debojyoti and Biswas, Subhranil and Mandal, Kaustav and Sobya, D.},
  title   = {{SAR-TopoGuard}: Training-Free, Speckle-Aware Topological Verification for Structure-Preserving {SAR}-to-Optical Translation},
  journal = {IEEE Geoscience and Remote Sensing Letters},
  year    = {2026},
  doi     = {10.1109/LGRS.2026.3753492},
  note    = {Accepted, in press}
}`,
  },
  {
    id: "sarkar2026pricing",
    code: "W1",
    type: "Workshop Paper",
    title: "Pricing Symbolic Rules by What GNNs Leave Unlearned",
    authors: ["Satabarto Sarkar", "Prithwineel Paul"],
    venue: "Workshop on Graph Machine Learning (GraphML) at ACML 2026",
    venueShort: "GraphML @ ACML 2026",
    year: 2026,
    status: "Accepted",
    location: "Melbourne, Australia",
    arxiv: "2611.12446",
    primaryClass: "cs.NE",
    url: "https://arxiv.org/abs/2611.12446",
    urlLabel: "arXiv:2611.12446",
    bibtex: `@inproceedings{sarkar2026pricing,
  author    = {Sarkar, Satabarto and Paul, Prithwineel},
  title     = {Pricing Symbolic Rules by What {GNNs} Leave Unlearned},
  booktitle = {Workshop on Graph Machine Learning (GraphML) at ACML 2026},
  address   = {Melbourne, Australia},
  year      = {2026},
  eprint    = {2611.12446},
  archivePrefix = {arXiv},
  primaryClass  = {cs.NE}
}`,
  },
];

export const underReviewManuscripts: Publication[] = [
  {
    id: "j2-rules-gnns",
    code: "J2",
    type: "Journal Article",
    title: "Rules Are Worth What GNNs Fail to Learn",
    authors: ["Satabarto Sarkar", "Prithwineel Paul"],
    venue: "Neurocomputing (Elsevier)",
    venueShort: "Neurocomputing",
    year: 2026,
    status: "Under Review",
  },
  {
    id: "j3-fuzzy-lstm-snp",
    code: "J3",
    type: "Journal Article",
    title:
      "Fuzzy LSTM-SNP Models for Univariate Time-Series Forecasting: Takagi–Sugeno Integration at Input, Gate and Output Levels",
    authors: [
      "Satabarto Sarkar",
      "Prithwineel Paul",
      "Gexiang Zhang",
      "Ferrante Neri",
      "Antonio Ramírez de Arellano Marrero",
      "Agustín Riscos-Núñez",
      "David Orellana-Martín",
    ],
    venue: "Applied Soft Computing (Elsevier)",
    venueShort: "Applied Soft Computing",
    year: 2026,
    status: "Under Review",
  },
  {
    id: "j4-certified-auth",
    code: "J4",
    type: "Journal Article",
    title: "Certified Three-Way Authentication of AI-Generated Images",
    authors: ["Satabarto Sarkar"],
    venue: "Journal Manuscript",
    venueShort: "Journal",
    year: 2026,
    status: "Under Review",
  },
  {
    id: "j5-program-symmetry",
    code: "J5",
    type: "Journal Article",
    title:
      "Where Neuro-Symbolic Learners Get Stuck: Program Symmetry, Saddle Selection and Fold Minima in Concept Grounding",
    authors: ["Satabarto Sarkar", "Prithwineel Paul"],
    venue: "Neurocomputing (Elsevier)",
    venueShort: "Neurocomputing",
    year: 2026,
    status: "Under Review",
  },
  {
    id: "w2-sparsity-free",
    code: "W2",
    type: "Workshop Paper",
    title:
      "When Is Sparsity Free? Adaptive Firing Conditions for Closed-Form, Seed-Free Time-Series Forecasting",
    authors: ["Satabarto Sarkar", "Prithwineel Paul"],
    venue: "4th Workshop on AI for Time Series Analysis (AI4TS) at AAAI-27",
    venueShort: "AI4TS @ AAAI-27",
    year: 2027,
    location: "Montréal, Canada",
    status: "Under Review",
  },
  {
    id: "w3-accept-defer-flag",
    code: "W3",
    type: "Workshop Paper",
    title:
      "Accept, Defer or Flag: Certified Authentication of AI-Generated Images Against Unseen Generators and Adversarial Attacks",
    authors: ["Satabarto Sarkar", "Subhranil Biswas", "Prithwineel Paul"],
    venue: "SAFE Workshop at AAAI-27",
    venueShort: "SAFE @ AAAI-27",
    year: 2027,
    location: "Montréal, Canada",
    status: "Under Review",
  },
  {
    id: "w4-nesy-symmetry",
    code: "W4",
    type: "Workshop Paper",
    title:
      "Where Neuro-Symbolic Learners Get Stuck: Program Symmetry, Saddle Selection, and Fold Minima in Concept Grounding",
    authors: ["Satabarto Sarkar"],
    venue:
      "Workshop on Neuro-Symbolic AI and Foundation Models (NeSy-FM) at AAAI-27",
    venueShort: "NeSy-FM @ AAAI-27",
    year: 2027,
    location: "Montréal, Canada",
    status: "Under Review",
  },
  {
    id: "w5-rules-instruments",
    code: "W5",
    type: "Workshop Paper",
    title:
      "Rules as Measuring Instruments: Certified, Label-Free Auditing of Foundation-Model Perception in Neuro-Symbolic Systems",
    authors: ["Satabarto Sarkar"],
    venue:
      "Workshop on Neuro-Symbolic AI and Foundation Models (NeSy-FM) at AAAI-27",
    venueShort: "NeSy-FM @ AAAI-27",
    year: 2027,
    location: "Montréal, Canada",
    status: "Under Review",
  },
];
