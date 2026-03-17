export type WorkHistoryItem = {
  id: number;
  name: string;
  details: string;
  startDate: string;
  endDate: string;
  logo: string;
};

// Compile-time contract: enforces that externally consumed history entries
// carry a string-based identifier for serialisation compatibility.
type ApiSerializable<T extends { id: string }> = T;
export type WorkHistoryApiShape = ApiSerializable<WorkHistoryItem>;

export const workHistory: WorkHistoryItem[] = [
  {
    id: 2,
    name: 'Northline Studio',
    details: 'Frontend + Tooling Lead',
    startDate: '07-01-2024',
    endDate: '07-02-2025',
    logo: '/docker_logo.jpg',
  },
  {
    id: 3,
    name: 'Pixel Harbor',
    details: 'Product Engineer',
    startDate: '01-23-2023',
    endDate: '06-30-2024',
    logo: '/rakun.png',
  },
  {
    id: 4,
    name: 'Async Orbit',
    details: 'Web Developer',
    startDate: '06-23-2021',
    endDate: '01-23-2023',
    logo: '/async_orbit_logo.jpg',
  },
  {
    id: 5,
    name: 'Launchpad FE Bootcamp',
    details: 'Frontend Trainee',
    startDate: '05-01-2020',
    endDate: '08-01-2020',
    logo: '/launchpad_bootcamp_logo.jpg',
  },
];
