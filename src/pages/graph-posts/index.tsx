import BarChart from "@/components/BarChart";
import BarChart2 from "@/components/BarChart2";
import BarChart3 from "@/components/BarChart3";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Head from "next/head";
import { FormEvent, useState, useEffect } from "react";

interface ChartData {
  prefectureJobCounts: { [key: string]: number };
}

const GraphPage = () => {
  const [url, setUrl] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    setIsClient(true);
    const fetchData = async () => {
      try {
        const response = await fetch('/api/chart-data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: ChartData = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(url);
  };

  if (!chartData) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  const labels = Object.keys(chartData.prefectureJobCounts);
  const data = Object.values(chartData.prefectureJobCounts);

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
          {isClient && <BarChart />}
        </section>

        <section className="bg-white rounded-lg shadow-md p-4 md:p-8 my-8">
          <h2 className="text-3xl font-semibold text-center mb-8">
            都道府県 : インターン求人数
          </h2>
          {isClient && <BarChart2 />}
        </section>

        <section className="bg-white rounded-lg shadow-md p-4 md:p-8 my-8">
          <h2 className="text-3xl font-semibold text-center mb-8">
            東京 : インターン求人数の推移（1日単位）
          </h2>
          {isClient && <BarChart3 />}
        </section>
      </div>
    </Layout>
  );
};

export default GraphPage;