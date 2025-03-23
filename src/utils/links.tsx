import { AreaChart, Layers, AppWindow } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: '/create-post',
    label: '新規登録',
    icon: <Layers />,
  },
  {
    href: '/posts',
    label: '企業一覧ページ',
    icon: <AppWindow />,
  },
  {
    href: '/graph-posts',
    label: 'グラフ',
    icon: <AreaChart />,
  },
  {
    href: '/scrape-posts',
    label: 'スクレイピング',
    icon: <AreaChart />,
  },
  {
    href: '/scrape-createPosts',
    label: 'スクレイピング＆新規登録',
    icon: <AreaChart />,
  },
];

export default links;