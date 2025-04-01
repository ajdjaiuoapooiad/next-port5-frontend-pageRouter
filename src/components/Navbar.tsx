import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // useRouter と usePathname をインポート
import Image from 'next/image'; // Image コンポーネントをインポート

const Navbar: React.FC = () => {
  const pathname = usePathname(); // 現在のパスを取得

  return (
    <div className="bg-gray-800 text-white">
      <nav className="flex justify-between items-center p-4 container mx-auto relative">
        <div className="text-xl font-bold">
          <Link
            href="/posts"
            className="flex items-center hover:text-blue-300 transition-colors duration-300"
          >
            <Image src="/icons/test.svg" alt="Document Icon" width={24} height={24} className="mr-2" />
            インターン面接管理アプリ
          </Link>
        </div>

        {pathname === '/' && ( // トップページでのみナビゲーションリンクを表示
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
        )}
      </nav>
    </div>
  );
};

export default Navbar;