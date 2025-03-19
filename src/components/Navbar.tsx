import Link from 'next/link';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("toggleMenu called, isOpen:", !isOpen);
  };

  return (
    <div className="bg-gray-800 text-white">
      <nav className="flex justify-between mx-auto container items-center p-3">
        <div className="text-xl font-bold">
          <Link
            href="/"
            className="hover:text-blue-500 transition-all duration-300"
          >
            インターン面接管理アプリ
          </Link>
        </div>

        <div className="hidden md:flex space-x-12 font-bold">
          <Link
            href="/posts"
            className="hover:text-blue-500 transition-all duration-300"
          >
            機能
          </Link>
          <Link
            href="/create-post"
            className="hover:text-blue-500 transition-all duration-300"
          >
            料金
          </Link>
          <Link
            href="/posts"
            className="hover:text-blue-500 transition-all duration-300"
          >
            新規登録
          </Link>
          <Link
            href="/posts"
            className="hover:text-blue-500 transition-all duration-300"
          >
            ログイン
          </Link>
          <Link
            href="/posts"
            className="hover:text-blue-500 transition-all duration-300"
          >
            お問い合わせ
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 0 1 1.414-1.414l4.828 4.828 4.829-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.829z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <div className="flex flex-col space-y-4 font-bold">
            <Link
              href="/posts"
              className="hover:text-blue-500 transition-all duration-300"
            >
              機能
            </Link>
            <Link
              href="/create-post"
              className="hover:text-blue-500 transition-all duration-300"
            >
              料金
            </Link>
            <Link
              href="/posts"
              className="hover:text-blue-500 transition-all duration-300"
            >
              新規登録
            </Link>
            <Link
              href="/posts"
              className="hover:text-blue-500 transition-all duration-300"
            >
              ログイン
            </Link>
            <Link
              href="/posts"
              className="hover:text-blue-500 transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;