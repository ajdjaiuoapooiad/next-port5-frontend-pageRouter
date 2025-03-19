import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Sidebar } from 'lucide-react';



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

      </nav>
    </div>
  );
};

export default Navbar;