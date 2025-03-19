
import BarChart from '@/components/BarChart';
import BarChart2 from '@/components/BarChart2';
import Sidebar from '@/components/Sidebar'
import React from 'react'

const GraphPage = () => {
  const chartData = [10, 30, 100, 50, 15];
  const chartLabels = ['京都', '大阪', '東京', '静岡', '名古屋'];

  const chartData2 = [100, 100, 104, 110, 114];
  const chartLabels2 = ['3/1', '3/2', '3/3', '3/4','3/5'];





  return (
    <div className='grid grid-cols-5'>
        <div className='col-span-1'> 
          <Sidebar />
        </div>

        <div className='col-span-4 p-5'>
            <h1>Graph Page</h1>
            <p>This is the Graph Page</p>

            <section className="container mx-auto py-16 bg-gray-300 rounded-lg">
                <h2 className="text-3xl font-semibold text-center mb-8">データ可視化</h2>
                <BarChart  />
            </section>

            <section className="container mx-auto py-16 bg-gray-300 rounded-lg">
                <h2 className="text-3xl font-semibold text-center mb-8">データ可視化</h2>
                <BarChart2 data={chartData} labels={chartLabels} />
            </section>
        </div>
    </div>
  )
}

export default GraphPage