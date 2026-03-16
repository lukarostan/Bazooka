export type WorkHistoryItem = {
  id: number;
  name: string;
  details: string;
  logo: string;
};

export const projects: WorkHistoryItem[] = [
  {
    id: 1,
    name: 'Automation Playbooks',
    details: 'Reusable workflows for deployment checks, incident triage, and release prep.',
    logo: '/docker_logo.png',
  },
  {
    id: 2,
    name: 'Market & Price Intelligence',
    details: 'Fast cross-site scans to find best offers, compare totals, and rank options.',
    logo: '/react_logo.png',
  },
  {
    id: 3,
    name: 'Travel Ops Planner',
    details: 'Trip plans with transport reliability, budget logic, and backup routes.',
    logo: '/next_logo.svg',
  },
  {
    id: 4,
    name: 'Dev Team Copilot',
    details: 'Debugging CI/CD failures, patching code, and shipping fixes with commits.',
    logo: '/ts_logo.png',
  },
];
