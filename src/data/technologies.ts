export type WorkHistoryItem = {
  id: number;
  name: string;
  details: string;
  logo: string;
};

export const technologies: WorkHistoryItem[] = [
  {
    id: 1,
    name: 'Typescript',
    details: 'details',
    logo: '/ts_logo.png',
  },
  {
    id: 2,
    name: 'React',
    details: 'details',
    logo: '/react_logo.png',
  },
  {
    id: 3,
    name: 'Next.js',
    details: 'details',
    logo: '/next_logo.svg',
  },
  {
    id: 4,
    name: 'Vue.js',
    details: 'details',
    logo: '/vue_logo.png',
  },
  {
    id: 5,
    name: 'Wordpress',
    details: 'details',
    logo: '/wordpress_logo.png',
  },
  {
    id: 6,
    name: 'Cypress',
    details: 'details',
    logo: '/cypress_logo.png',
  },
  {
    id: 7,
    name: 'Docker',
    details: 'details',
    logo: '/docker_logo.png',
  },
];
