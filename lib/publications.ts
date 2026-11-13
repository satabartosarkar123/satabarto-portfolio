export interface Publication {
  id: string;
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
  url: string;
  urlLabel: string;
  bibtex: string;
}

export const publications: Publication[] = [
  {
    id: "sarkar2026sartopoguard",
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
    status: "Accepted, in press",
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
    type: "Workshop Paper",
    title: "Pricing Symbolic Rules by What GNNs Leave Unlearned",
    authors: ["Satabarto Sarkar", "Prithwineel Paul"],
    venue: "Workshop on Graph Machine Learning (GraphML) at ACML 2026",
    venueShort: "GraphML @ ACML 2026",
    year: 2026,
    status: "arXiv Preprint",
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

