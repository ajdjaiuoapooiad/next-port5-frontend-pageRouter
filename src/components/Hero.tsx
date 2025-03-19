import { useEffect, useState } from "react";
import Image from 'next/image';

interface HeroProps {
  gradients?: string[];
}

const Hero: React.FC<HeroProps> = ({ gradients = ['bg-gradient-to-r from-blue-600 to-indigo-800', 'bg-gradient-to-r from-indigo-600 to-purple-800'] }) => {
  const [currentGradientIndex, setCurrentGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradientIndex(prevIndex => (prevIndex + 1) % gradients.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [gradients]);

  return (
    <section className={`relative text-white py-32 overflow-hidden ${gradients[currentGradientIndex]}`}>
      <div className="absolute inset-0 opacity-20">
      <Image
          src="/images/test9.svg"
          alt="背景画像"
          fill
          style={{ objectFit: 'cover' }} // objectFit を style で指定
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          面接管理を効率化し、<br className="hidden md:block" />
          採用力を強化
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-200">
          候補者管理、面接日程調整、評価管理などを一元化し、採用担当者の負担を軽減します。
        </p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          無料トライアルを開始
        </button>
      </div>
    </section>
  );
};

export default Hero;