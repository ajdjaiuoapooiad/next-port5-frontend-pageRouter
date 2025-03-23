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
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Sidebar from '@/components/Sidebar'
import CompanySection from '@/components/CompanySection'
import TeamSection from '@/components/TeamSection'
import ImageModal from '@/components/ImageModal'
import { Screenshot } from '@/utils/types'



const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const screenshots: Screenshot[] = [
    {
      src: '/images/screenshot/image.png',
      alt: 'Screenshot 1',
      description: '東京 : インターン求人数の推移（1日単位）グラフ',
    },
    {
      src: '/images/screenshot/image3.png',
      alt: 'Screenshot 2',
      description: '都道府県 : インターン求人数のグラフ',
    },
    {
      src: '/images/screenshot/image4.png',
      alt: 'Screenshot 3',
      description: 'ダッシュボード : 企業一覧ページ',
    },
    {
      src: '/images/screenshot/image5.png',
      alt: 'Screenshot 4',
      description: 'ダッシュボード : スクレイピングページ',
    },
    {
      src: '/images/screenshot/image2.png',
      alt: 'Screenshot 5',
      description: '株式会社Aの求人 : エントリー数の推移（1日単位）グラフ',
    },
    {
      src: '/images/GIF/_-GoogleChrome2025-03-2019-23-08-ezgif.com-video-to-gif-converter (1).gif',
      alt: 'Screenshot 6',
      description: 'デモ動画です。',
    },
  ];

  const handleImageClick = (image: Screenshot) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <Head>
        <title>トップページ</title>
        <meta name="description" content="求人情報一覧ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Button onClick={toggleSidebar} className="absolute top-3 right-4 md:hidden ">
          {isSidebarOpen ? '✕' : '☰'}
        </Button>

        <div className="grid md:grid-cols-5">
          {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        </div>

        {/* Hero */}
        <Hero />

        {/* Features  */}
        <section id="features">
          <Features />
        </section>

        {/* スクリーンショットセクション（改善後） */}
        <section className="bg-gray-400 py-24 px-0  md:px-56">
          <div className="container mx-auto ">
            <h2 className="text-3xl font-bold text-white text-center mb-8">スクリーンショット</h2>
            <Slider {...settings}>
              {screenshots.map((screenshot, index) => (
                <div key={index} className="px-4">
                  <div className="mb-4">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="rounded-lg cursor-pointer mx-auto"
                      onClick={() => handleImageClick(screenshot)}
                    />
                  </div>
                  <p className="text-center text-white">{screenshot.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* 画像拡大モーダル */}
        <ImageModal selectedImage={selectedImage} onClose={handleCloseModal} />

      <section id="pricing">
        <Pricing />
      </section>


      {/* 導入事例企業 */}
      <CompanySection />

      {/* チーム紹介 */}
      <TeamSection />

      {/* FAQセクション */}
      <section id="faq" className="bg-gray-100 py-16">
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

    </div>
  )
}

export default HomePage