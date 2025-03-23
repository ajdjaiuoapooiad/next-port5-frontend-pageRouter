import React from 'react'

const CompanySection = () => {
  return (
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
      </section>
  )
}

export default CompanySection