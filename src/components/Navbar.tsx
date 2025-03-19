import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800  text-white'>
      <nav className='flex justify-between mx-auto container items-center p-3'>
       
            <div className='text-xl font-bol'>
              <Link href={"/posts"} className='hover:text-blue-500 transition-all duration-300'>インターン面接管理アプリ</Link>
            </div>

    
            <div className='space-x-12 font-bold'>
              <Link href={"/posts"} className='hover:text-blue-500 transition-all duration-300'>機能</Link>
              <Link href={"/create-post"} className='hover:text-blue-500 transition-all duration-300'>料金</Link>
              <Link href={"/posts"} className='hover:text-blue-500 transition-all duration-300'>新規登録</Link>
              <Link href={"/posts"} className='hover:text-blue-500 transition-all duration-300'>ログイン</Link>
              <Link href={"/posts"} className='hover:text-blue-500 transition-all duration-300'>お問い合わせ</Link>
            </div>
  
    
      </nav>
    </div>
  )
}

export default Navbar