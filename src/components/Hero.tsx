// components/Hero.js
const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-32 overflow-hidden">
            {/* 背景画像 */}
            <div className="absolute inset-0 bg-[url('/images/test9.svg')] bg-cover bg-center opacity-20"></div>
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