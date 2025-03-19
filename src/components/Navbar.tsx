import Link from 'next/link';
import React, { useState } from 'react';


const Navbar: React.FC = () => {

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

    

      </nav>
    </div>
  );
};

export default Navbar;