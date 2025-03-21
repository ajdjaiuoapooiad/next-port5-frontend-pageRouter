import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'; // useRouterを追加

const Navbar: React.FC = () => {
  const router = useRouter(); // useRouterを初期化

  return (
    <div className="bg-gray-800 text-white">
      <nav className="flex justify-between items-center p-4 container mx-auto relative">
        <div className="text-xl font-bold">
          <Link
            href="/"
            className="flex items-center hover:text-blue-300 transition-colors duration-300"
          >
            <img src='\icons\test.svg' alt="Document Icon" className="w-6 h-6 mr-2" />
            インターン面接管理アプリ
          </Link>
        </div>

        {router.pathname === '/' && ( // トップページでのみリンクを表示
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
        )}
      </nav>
    </div>
  );
};

export default Navbar;