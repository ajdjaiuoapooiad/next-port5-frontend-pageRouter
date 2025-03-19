import BarChart from '@/components/BarChart'
import Features from '@/components/Features'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  const chartData = [10, 30, 100, 50, 15];
  const chartLabels = ['京都', '大阪', '東京', '静岡', '名古屋'];


  return (
    <div>
      <Head>
          <title>インターン面接管理アプリ</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">面接管理を効率化し、採用力を強化</h1>
        <p className="text-lg mb-8">候補者管理、面接日程調整、評価管理などを一元化し、採用担当者の負担を軽減します。</p>
        <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full">
          無料トライアルを開始
        </button>
      </div>
    </div>

    <Features />

    


    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-500 mb-4">「面接管理アプリ導入後、面接日程調整の時間が大幅に削減されました。」</p>
            <p className="font-semibold">- 株式会社〇〇 採用担当者様</p>
          </div>
          {/* 他のお客様の声 */}

          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-500 mb-4">「面接管理アプリ導入後、面接日程調整の時間が大幅に削減されました。」</p>
            <p className="font-semibold">- 株式会社〇〇 採用担当者様</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-500 mb-4">「面接管理アプリ導入後、面接日程調整の時間が大幅に削減されました。」</p>
            <p className="font-semibold">- 株式会社〇〇 採用担当者様</p>
          </div>
          
        </div>
      </div>
    </div>

        <section className="container mx-auto py-16 bg-gray-50">
            <h2 className="text-3xl font-semibold text-center mb-8">データ可視化</h2>
            <BarChart data={chartData} labels={chartLabels} />
        </section>

        <section id="pricing" className="py-8">
          <h2 className="text-3xl font-bold mb-4">料金プラン</h2>
          {/* 料金プランの表示 */}
        </section>

        <section id="contact" className="py-8">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          {/* お問い合わせフォーム */}
        </section>


        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; {new Date().getFullYear()} インターン面接管理アプリ</p>
        </footer>

    </div>
  )
}

export default HomePage