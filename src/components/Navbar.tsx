import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const links = [
    { href: '/posts', label: '機能' },
    { href: '/create-post', label: '料金' },
    { href: '/posts', label: 'お問い合わせ' },
  ];

  return (
    <aside
      className={`md:col-span-1 bg-gray-700 text-white p-4 md:bg-gray-200 md:text-gray-800 transition-all duration-300 shadow-md ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } absolute top-16 left-0 w-64 h-screen`}
    >
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-blue-300 transition-colors duration-300 block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-800 text-white">
      <nav className="flex justify-between items-center p-4 container mx-auto relative">
        <div className="text-xl font-bold">
          <Link
            href="/"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            インターン面接管理アプリ
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 font-semibold">
          <Link
            href="/posts"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            機能
          </Link>
          <Link
            href="/create-post"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            料金
          </Link>
          <Link
            href="/posts"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            お問い合わせ
          </Link>
        </div>

        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 bg-gray-200 rounded-md z-10"
          aria-label={isSidebarOpen ? 'サイドバーを閉じる' : 'サイドバーを開く'}
        >
          {isSidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>

        <Sidebar isOpen={isSidebarOpen} />
      </nav>
    </div>
  );
};

export default Navbar;