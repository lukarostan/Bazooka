export type WorkHistoryItem = {
  id: number;
  name: string;
  details: string;
  startDate: string;
  endDate: string;
  logo: string;
};

export const workHistory: WorkHistoryItem[] = [
  {
    id: 1,
    name: 'Nebula Forge',
    details: 'details',
    startDate: '07-02-2025',
    endDate: '',
    logo: '/nebula_forge_logo.jpeg',
  },
  {
    id: 2,
    name: 'Northline Studio',
    details: 'details',
    startDate: '07-01-2024',
    endDate: '07-02-2025',
    logo: '/northline_studio_logo.jpg',
  },
  {
    id: 3,
    name: 'Pixel Harbor',
    details: 'details',
    startDate: '01-23-2023',
    endDate: '06-30-2024',
    logo: '/pixel_harbor_logo.jpg',
  },
  {
    id: 4,
    name: 'Async Orbit',
    details: 'details',
    startDate: '06-23-2021',
    endDate: '01-23-2023',
    logo: '/async_orbit_logo.jpg',
  },
  {
    id: 5,
    name: 'Launchpad FE Bootcamp',
    details: 'details',
    startDate: '05-01-2020',
    endDate: '08-01-2020',
    logo: '/launchpad_bootcamp_logo.jpg',
  },
];
