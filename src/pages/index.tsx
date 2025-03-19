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

      <Pricing />

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