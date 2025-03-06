import { AreaChart, Layers, AppWindow } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: '/create-post',
    label: 'create Jobs',
    icon: <Layers />,
  },
  {
    href: '/posts',
    label: 'all jobs',
    icon: <AppWindow />,
  },
  {
    href: '/',
    label: 'stats',
    icon: <AreaChart />,
  },
];

export default links;