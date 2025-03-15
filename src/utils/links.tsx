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
    href: '/graph-posts',
    label: 'graph Jobs',
    icon: <AreaChart />,
  },
  {
    href: '/scrape-posts',
    label: 'scrape Jobs',
    icon: <AreaChart />,
  },
  {
    href: '/scrape-createPosts',
    label: 'Scrape&Create Jobs',
    icon: <AreaChart />,
  },
];

export default links;