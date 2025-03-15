import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800  text-white'>
      <nav className='flex justify-between mx-auto container items-center p-3'>
       
            <div className='text-3xl '>
              <Link href={"/posts"} className='hover:text-blue-500 transition-all duration-300'>面接管理アプリ</Link>
            </div>

    
            <div className='space-x-12 font-bold'>
              <Link href={"/posts"} className='hover:text-blue-500 transition-all duration-300'>ホーム</Link>
              <Link href={"/create-post"} className='hover:text-blue-500 transition-all duration-300'>Create</Link>
              <Link href={"/posts"} className='hover:text-blue-500 transition-all duration-300'>問い合わせ</Link>
            </div>
  
    
      </nav>
    </div>
  )
}

export default Navbar