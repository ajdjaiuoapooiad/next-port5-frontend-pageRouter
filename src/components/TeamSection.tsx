import React from 'react'

const TeamSection = () => {
  return (
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
      </section>
  )
}

export default TeamSection