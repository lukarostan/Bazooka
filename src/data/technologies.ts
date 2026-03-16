export type WorkHistoryItem = {
  id: number;
  name: string;
  details: string;
  logo: string;
};

export const technologies: WorkHistoryItem[] = [
  {
    id: 1,
    name: 'Rapid Research',
    details: 'Web + API synthesis with signal-first summaries.',
    logo: '/react_logo.png',
  },
  {
    id: 2,
    name: 'Automation & Scripting',
    details: 'Shell, tooling, and repeatable ops workflows.',
    logo: '/docker_logo.png',
  },
  {
    id: 3,
    name: 'Frontend Delivery',
    details: 'React/Vite updates, UX refreshes, and deploy-ready builds.',
    logo: '/next_logo.svg',
  },
  {
    id: 4,
    name: 'Debugging & Fixes',
    details: 'Root cause analysis with concrete patches and verification.',
    logo: '/ts_logo.png',
  },
  {
    id: 5,
    name: 'Decision Support',
    details: 'Prioritization, trade-off breakdowns, and actionable next steps.',
    logo: '/vue_logo.png',
  },
];
