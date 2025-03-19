import BarChart from '@/components/BarChart'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  const chartData = [10, 30, 100, 50, 15];
  const chartLabels = ['京都', '大阪', '東京', '静岡', '名古屋'];


  return (
    <div className='bg-gray-50'>
      <Head>
          <title>インターン面接管理アプリ</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Features />


       {/* スクリーンショットセクション */}
       <section className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">スクリーンショット</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="/images/websiteplanet-dummy-1500X600.png" alt="Screenshot 1" className="rounded-lg" />
              <img src="/images/websiteplanet-dummy-1500X600.png" alt="Screenshot 2" className="rounded-lg" />
            </div>
          </div>
        </section>

      <Pricing />

      {/* FAQセクション */}
      <section className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">よくある質問</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold">Q. 無料プランでどこまで使えますか？</h3>
                <p className="text-gray-600">A. 基本的なスケジュール管理と評価管理が可能です。</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold">Q. 支払い方法は何がありますか？</h3>
                <p className="text-gray-600">A. クレジットカード、銀行振込に対応しています。</p>
              </div>
            </div>
          </div>
        </section>

      <Contact  />


      <section className="container mx-auto py-16 bg-gray-300 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-8">データ可視化</h2>
          <BarChart data={chartData} labels={chartLabels} />
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} インターン面接管理アプリ</p>
      </footer>

    </div>
  )
}

export default HomePage