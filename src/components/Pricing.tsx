// components/Pricing.js
const Pricing = () => {
    const plans = [
        {
            name: 'ベーシック',
            price: '無料',
            features: ['候補者管理', 'スケジュール管理', '5ユーザーまで'],
            cta: '無料で始める',
        },
        {
            name: 'スタンダード',
            price: '月額 1,980円',
            features: ['ベーシックプランのすべて', '評価管理', '20ユーザーまで', 'レポート機能'],
            cta: 'スタンダードプランを開始',
        },
        {
            name: 'プレミアム',
            price: '月額 4,980円',
            features: ['スタンダードプランのすべて', 'データ分析', '無制限ユーザー', '優先サポート'],
            cta: 'プレミアムプランを開始',
        },
    ];

    return (
        <section id="pricing" className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">料金プラン</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                            <p className="text-4xl font-bold mb-4">{plan.price}</p>
                            <ul className="mb-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="text-gray-600">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;