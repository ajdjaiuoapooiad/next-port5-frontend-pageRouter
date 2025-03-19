// components/Features.js
import Image from 'next/image';

const Features = () => {
    const features = [
        {
            icon: '/icons/candidate-management.svg',
            title: '候補者管理',
            description: '応募者の情報を一元管理し、選考状況を可視化します。',
        },
        {
            icon: '/icons/schedule-management.svg',
            title: 'スケジュール管理',
            description: '面接官と候補者のスケジュールを自動調整します。',
        },
        {
            icon: '/icons/evaluation-management.svg',
            title: '評価管理',
            description: '面接官の評価を共有し、客観的な評価を実現します。',
        },
        {
            icon: '/icons/data-analysis.svg',
            title: 'データ分析',
            description: '応募者のデータを分析し、採用の改善点を可視化します。',
        },
        {
            icon: '/icons/collaboration.svg',
            title: 'チームコラボレーション',
            description: 'チームメンバーと情報を共有し、効率的な採用を実現します。',
        },
        {
            icon: '/icons/report.svg',
            title: 'レポート作成',
            description: '採用に関するレポートを自動生成し、分析を効率化します。',
        },
    ];

    return (
        <section id="features" className="container mx-auto py-16 bg-gray-50">
            <h2 className="text-3xl font-semibold text-center mb-8">サービス紹介</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                        <Image src={feature.icon} alt={`${feature.title}のアイコン`} width={96} height={96} className="mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-500">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;