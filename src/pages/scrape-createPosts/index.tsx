import Sidebar from '@/components/Sidebar'
import React from 'react'

const ScrapeCreatePage = () => {
  return (
    <div className='grid grid-cols-5'>
        <div className='col-span-1'> 
          <Sidebar />
        </div>

        <div className='col-span-4 p-5'>
          <div className="grid grid-cols-3">
            <h1>ScrapeCreatePage</h1>
          </div>
        </div>
    </div>
        

  )
}

export default ScrapeCreatePage