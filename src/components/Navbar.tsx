import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800  text-white'>
      <nav className='flex justify-between mx-auto container items-center p-3'>
       
            <div className='text-3xl '>
              <a href="/posts" className='hover:text-blue-500 transition-all duration-300'>面接管理アプリ</a>
            </div>

    
            <div className='space-x-12 font-bold'>
              <a href="/posts" className='hover:text-blue-500 transition-all duration-300'>ホーム</a>
              <a href="/create-post" className='hover:text-blue-500 transition-all duration-300'>Create</a>
              <a href="/posts" className='hover:text-blue-500 transition-all duration-300'>問い合わせ</a>
            </div>
  
    
      </nav>
    </div>
  )
}

export default Navbar