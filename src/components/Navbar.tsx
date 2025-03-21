import Link from 'next/link';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white fixed top-0 w-full z-10"> {/* fixed, top-0, w-full, z-10 を追加 */}
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

        <div className="hidden md:flex space-x-8 font-semibold">
          <a href="#features" className="hover:text-blue-300 transition-colors duration-300">
            機能
          </a>
          <a href="#pricing" className="hover:text-blue-300 transition-colors duration-300">
            料金
          </a>
            <a href="#contact" className="hover:text-blue-300 transition-colors duration-300">
            お問い合わせ
          </a>
             <a href="#team" className="hover:text-blue-300 transition-colors duration-300">
            チーム紹介
          </a>
            <a href="#faq" className="hover:text-blue-300 transition-colors duration-300">
            よくある質問
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;