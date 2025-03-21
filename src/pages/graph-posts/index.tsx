import BarChart from "@/components/BarChart";
import BarChart2 from "@/components/BarChart2";
import BarChart3 from "@/components/BarChart3";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Head from "next/head";
import { FormEvent, useState, useEffect } from "react";

const prefectureJobCounts = {
  "北海道": 150,
  "青森県": 80,
  "岩手県": 90,
  "宮城県": 120,
  "秋田県": 70,
  "山形県": 85,
  "福島県": 100,
  "茨城県": 110,
  "栃木県": 105,
  "群馬県": 95,
  "埼玉県": 130,
  "千葉県": 125,
  "東京都": 200,
  "神奈川県": 140,
  "新潟県": 90,
  "富山県": 85,
  "石川県": 95,
  "福井県": 80,
  "山梨県": 75,
  "長野県": 100,
  "岐阜県": 105,
  "静岡県": 115,
  "愛知県": 150,
  "三重県": 110,
  "滋賀県": 95,
  "京都府": 120,
  "大阪府": 160,
  "兵庫県": 135,
  "奈良県": 85,
  "和歌山県": 70,
  "鳥取県": 65,
  "島根県": 70,
  "岡山県": 110,
  "広島県": 125,
  "山口県": 90,
  "徳島県": 75,
  "香川県": 80,
  "愛媛県": 85,
  "高知県": 70,
  "福岡県": 140,
  "佐賀県": 75,
  "長崎県": 80,
  "熊本県": 95,
  "大分県": 85,
  "宮崎県": 75,
  "鹿児島県": 80,
  "沖縄県": 90,
};

const GraphPage = () => {
  const labels = Object.keys(prefectureJobCounts);
  const data = Object.values(prefectureJobCounts);

  const [url, setUrl] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [isClient, setIsClient] = useState(false); // クライアントサイドでのみ実行されるように状態を追加

  useEffect(() => {
    setIsClient(true); // クライアントサイドでのみ実行されるように状態を更新
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(url);
  };

  return (
    <Layout>
      <Head>
        <title>ダッシュボード : グラフページ</title>
        <meta name="description" content="グラフページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <div className="p-4 md:p-8">
        <h1>Graph Page</h1>
        <p>This is the Graph Page</p>

        <div className="bg-gray-300 rounded-lg shadow-md p-4 md:p-8 my-8">
          <h1 className="font-bold">特定の企業の求人のエントリー数を取得（1日ごとに取得）</h1>
          <p>
            このフォームにURLを入力してリンク先の企業の求人のエントリー数を定期的にスクレイピングして記録します。
          </p>
          <form onSubmit={handleSubmit}>
            <label>URL:</label>
            <Input
              className="bg-white"
              type="text"
              name="url"
              onChange={(e) => setUrl(e.target.value)}
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>

        <div className="bg-gray-300 rounded-lg shadow-md p-4 md:p-8 my-8">
          <h1 className="font-bold">特定の都道府県のインターンの求人数を取得（1日ごとに取得）</h1>
          <p>
            このフォームにURLを入力してリンク先の都道府県のインターンの求人数を定期的にスクレイピングして記録します。
          </p>
          <form onSubmit={handleSubmit}>
            <label>URL:</label>
            <Input
              className="bg-white"
              type="text"
              name="url"
              onChange={(e) => setUrl(e.target.value)}
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>

        <p className="text-2xl font-bold">参考例</p>

        <section className="bg-white rounded-lg shadow-md p-4 md:p-8 my-8">
          <h2 className="text-3xl font-semibold text-center mb-8">
            株式会社Aの求人 : エントリー数の推移（1日単位）
          </h2>
          {isClient && <BarChart />} {/* クライアントサイドでのみ描画 */}
        </section>

        <section className="bg-white rounded-lg shadow-md p-4 md:p-8 my-8">
          <h2 className="text-3xl font-semibold text-center mb-8">
            都道府県 : インターン求人数
          </h2>
          {isClient && <BarChart2 data={data} labels={labels} />} {/* クライアントサイドでのみ描画 */}
        </section>

        <section className="bg-white rounded-lg shadow-md p-4 md:p-8 my-8">
          <h2 className="text-3xl font-semibold text-center mb-8">
            東京 : インターン求人数の推移（1日単位）
          </h2>
          {isClient && <BarChart3 />} {/* クライアントサイドでのみ描画 */}
        </section>
        
      </div>
    </Layout>
  );
};

export default GraphPage;