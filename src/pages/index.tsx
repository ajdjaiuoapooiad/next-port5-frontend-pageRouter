import BarChart from '@/components/BarChart'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Screenshot {
  src: string;
  alt: string;
}

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const screenshots: Screenshot[] = [
    { src: '/images/websiteplanet-dummy-1500X600.png', alt: 'Screenshot 1' },
    { src: '/images/websiteplanet-dummy-1500X600.png', alt: 'Screenshot 2' },
    { src: '/images/websiteplanet-dummy-1500X600.png', alt: 'Screenshot 3' },
  ];

  const handleImageClick = (image: Screenshot) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='bg-gray-50'>
      <Head>
        <title>トップページ</title>
        <meta name="description" content="求人情報一覧ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <Hero />

      <Features />
    
      {/* スクリーンショットセクション（改善後） */}
      <section className="bg-gray-100 py-24 px-10 md:px-48">
          <div className="container mx-auto ">
            <h2 className="text-3xl font-bold text-center mb-8">スクリーンショット</h2>
            <Slider {...settings}>
              {screenshots.map((screenshot, index) => (
                <div key={index} className="px-4">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="rounded-lg cursor-pointer mx-auto"
                    onClick={() => handleImageClick(screenshot)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>

      {/* 画像拡大モーダル */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="rounded-lg max-w-full max-h-screen"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Pricing />

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">導入事例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <img src="/images/websiteplanet-dummy-1500X600.png" alt="Company 1 Logo" className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">株式会社A</h3>
              <p className="text-gray-600">面接時間の短縮と評価の効率化を実現。</p>
              <a href="/case-studies/company1" className="text-blue-500 hover:underline">
                詳細を見る
              </a>
            </div>
            <div className="p-6 border rounded-lg">
              <img src="/images/websiteplanet-dummy-1500X600.png" alt="Company 2 Logo" className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">株式会社B</h3>
              <p className="text-gray-600">面接官の負担を軽減し、質の高い評価を実現。</p>
              <a href="/case-studies/company2" className="text-blue-500 hover:underline">
                詳細を見る
              </a>
            </div>
            <div className="p-6 border rounded-lg">
              <img src="/images/websiteplanet-dummy-1500X600.png" alt="Company 3 Logo" className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">株式会社C</h3>
              <p className="text-gray-600">面接プロセスの可視化と改善に成功。</p>
              <a href="/case-studies/company3" className="text-blue-500 hover:underline">
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      </section>;

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">チーム紹介</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <img
                src="/images/websiteplanet-dummy-1500X600.png"
                alt="Team Member 1"
                className="rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">山田太郎</h3>
              <p className="text-gray-600">代表取締役</p>
            </div>
            <div className="text-center">
              <img
                src="/images/websiteplanet-dummy-1500X600.png"
                alt="Team Member 2"
                className="rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">佐藤花子</h3>
              <p className="text-gray-600">開発責任者</p>
            </div>
            <div className="text-center">
              <img
                src="/images/websiteplanet-dummy-1500X600.png"
                alt="Team Member 3"
                className="rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">鈴木健太</h3>
              <p className="text-gray-600">マーケティング担当</p>
            </div>
          </div>
        </div>
      </section>;

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


      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} インターン面接管理アプリ</p>
      </footer>

    </div>
  )
}

export default HomePage