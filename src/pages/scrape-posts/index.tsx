import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Job } from "@/utils/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import { cn } from "@/lib/utils";
import { saveAs } from 'file-saver';

const ScrapePostsList = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]: any = useState(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    console.log(url);
    const formData = new FormData();
    formData.append("url", url);
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/jobs/`;

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const jobs = response.data.jobs;
      setResponseData(jobs);
      console.log(jobs);
    } catch (err) {
      console.error(err);
      setError("データの取得に失敗しました。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadCSV = () => {
    if (!responseData || responseData.length === 0) {
      return;
    }

    const csvRows = [];
    const headers = Object.keys(responseData[0]);
    csvRows.push(headers.join(','));

    responseData.forEach((job: Job) => {
      const values = headers.map(header => {
        let value = job[header as keyof Job];
        if (typeof value === 'string') {
          value = value.replace(/"/g, '""');
          return `"${value}"`;
        }
        return value;
      });
      csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'jobs.csv');
  };

  return (
    <Layout>
      <Head>
        <title>ダッシュボード : スクレイピングページ</title>
        <meta name="description" content="スクレイピングページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="p-4 md:p-8">
        <div className="bg-gray-300 rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h1 className="text-2xl font-bold mb-4">ScrapePage</h1>
          <p className="text-gray-600 mb-6">
            このページでは、URLを入力してリンク先の求人を一括で取得できます。
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">URL:</label>
              <Input
                className="mt-1 w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="url"
                placeholder="https://example.com/jobs"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md py-2.5 px-5 transition-colors duration-200"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>

        <div className="bg-gray-300 rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-4">出力結果</h1>
          {isLoading && (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}
          {responseData && !isLoading && !error && (
            <div>
              <div className="flex justify-end">
                <Button onClick={handleDownloadCSV} className="mt-4">
                  CSVダウンロード
                </Button>
              </div>
              <h2 className="text-lg font-semibold mb-4">レスポンスデータ:</h2>
              <div className="overflow-x-auto rounded-md">
                <table className="min-w-full table-auto divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">id</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">title</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">company</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">place</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">都道府県</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">company</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">company</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {responseData.map((job: Job, index: number) => {
                      const isOsakaOrTokyo = job.place === "大阪府" || job.place === "東京都";
                      return (
                        <tr key={index} className={cn("hover:bg-gray-50 transition-colors duration-200", isOsakaOrTokyo && "bg-red-100")}>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}:</td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 text-truncate">{job.title}</td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-truncate">{job.company}</td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{job.place}</td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{job.place}</td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-truncate">{job.company}</td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-truncate">{job.company}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ScrapePostsList;