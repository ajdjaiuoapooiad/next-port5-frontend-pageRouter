import Sidebar from '@/components/Sidebar'
import React from 'react'

const GraphPage = () => {
  return (
    <div className='grid grid-cols-5'>
        <div className='col-span-1'> 
          <Sidebar />
        </div>

        <div className='col-span-4 p-5'>
            <h1>Graph Page</h1>
            <p>This is the Graph Page</p>
        </div>
    </div>
  )
}

export default GraphPage