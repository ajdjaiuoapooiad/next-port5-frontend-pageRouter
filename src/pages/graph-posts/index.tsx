
import BarChart from '@/components/BarChart';
import BarChart2 from '@/components/BarChart2';
import BarChart3 from '@/components/BarChart3';
import Sidebar from '@/components/Sidebar'
import React from 'react'

const GraphPage = () => {
  const chartData = [10, 30, 100, 50, 15];
  const chartLabels = ['京都', '大阪', '東京', '静岡', '名古屋'];


  return (
    <div className='grid grid-cols-5'>
        <div className='col-span-1'> 
          <Sidebar />
        </div>

        <div className='col-span-4 p-5'>
            <h1>Graph Page</h1>
            <p>This is the Graph Page</p>

            <section className="container mx-auto py-16 bg-gray-300 rounded-lg">
                <h2 className="text-3xl font-semibold text-center mb-8">株式会社A : エントリー数の推移</h2>
                <BarChart  />
            </section>

            <section className="container mx-auto py-16 bg-gray-300 rounded-lg">
                <h2 className="text-3xl font-semibold text-center mb-8">各県のインターン求人数の推移</h2>
                <BarChart2 data={chartData} labels={chartLabels} />
            </section>

            <section className="container mx-auto py-16 bg-gray-300 rounded-lg">
                <h2 className="text-3xl font-semibold text-center mb-8">各県のインターン求人数の推移</h2>
                <BarChart3 />
            </section>
        </div>
    </div>
  )
}

export default GraphPage