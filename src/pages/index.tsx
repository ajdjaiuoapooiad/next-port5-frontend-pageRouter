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


interface Screenshot {
  src: string;
  alt: string;
}

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
    { src: '/images/screenshot/image.png', alt: 'Screenshot 1' },
    { src: '/images/screenshot/image3.png', alt: 'Screenshot 2' },
    { src: '/images/screenshot/image4.png', alt: 'Screenshot 3' },
    { src: '/images/screenshot/image5.png', alt: 'Screenshot 4' },
    { src: '/images/screenshot/image2.png', alt: 'Screenshot 5' },
  ];

  const handleImageClick = (image: Screenshot) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='bg-gray-50'>

      <Navbar />
      <Head>
        <title>トップページ</title>
        <meta name="description" content="求人情報一覧ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Button
          onClick={toggleSidebar}
          className="absolute top-3 right-4 md:hidden "
        >
          {isSidebarOpen ? "✕" : "☰"}
        </Button>

        <div className="grid md:grid-cols-5">
          {isSidebarOpen && (
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          )}
        </div>

      <Hero />

      <section id="features">
        <Features />
      </section>


      {/* スクリーンショットセクション（改善後） */}
      <section className="bg-gray-400 py-24 px-10 md:px-56">
          <div className="container mx-auto ">
            <h2 className="text-3xl font-bold text-white text-center mb-8">スクリーンショット</h2>
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
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center">
          <div className="relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="rounded-lg max-w-full max-h-screen"
            />
            <button
              className="absolute top-4 right-4 bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-gray-700 transition-colors duration-300"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <section id="pricing">
        <Pricing />
      </section>


      {/* 導入事例企業 */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">導入事例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <img src="/images/company/maxresdefault.jpg" alt="Company 1 Logo" className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">株式会社リクルートホールディングス</h3>
              <p className="text-gray-600">面接時間の短縮と評価の効率化を実現。</p>
              <a href="" className="text-blue-500 hover:underline">
                詳細を見る
              </a>
            </div>
            <div className="p-6 border rounded-lg">
              <img src="/images/company/d29764-2-816073-0.jpg" alt="Company 2 Logo" className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">株式会社ヤフー</h3>
              <p className="text-gray-600">面接官の負担を軽減し、質の高い評価を実現。</p>
              <a href="" className="text-blue-500 hover:underline">
                詳細を見る
              </a>
            </div>
            <div className="p-6 border rounded-lg">
              <img src="/images/company/ogimage.png" alt="Company 3 Logo" className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">株式会社サイバーエージェント</h3>
              <p className="text-gray-600">面接プロセスの可視化と改善に成功。</p>
              <a href="" className="text-blue-500 hover:underline">
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      </section>;

      {/* チーム紹介 */}
      <section id="team" className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">チーム紹介</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <img
                src="/images/team/社長のアイコン.jpeg"
                alt="Team Member 1"
                className="rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">山田太郎</h3>
              <p className="text-gray-600">代表取締役</p>
            </div>
            <div className="text-center">
              <img
                src="/images/team/技術職の人物アイコン.jpeg"
                alt="Team Member 2"
                className="rounded-full w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">竹内悠人</h3>
              <p className="text-gray-600">開発責任者</p>
            </div>
            <div className="text-center">
              <img
                src="/images/team/リーマンアイコン.jpeg"
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