import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";

const ScrapeCreatePage = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(url);
    const formData = new FormData();
    formData.append("url", url);
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/jobs-create/`;

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const jobs = response.data.jobs;
      setResponseData(jobs);
      console.log(jobs);
      router.push("/posts");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <Head>
        <title>ダッシュボード : スクレイピング登録ページ</title>
        <meta name="description" content="スクレイピング登録ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <div className="p-4 md:p-8">
        <div className="bg-gray-300 rounded-lg shadow-md p-4 md:p-8 my-8">
          <h1>ScrapeCreatePage</h1>
          <p>このページでは、URLを入力してリンク先の求人を一括で登録できます。</p>
          <form onSubmit={handleSubmit}>
            <label>URL:</label>
            <Input
              className="bg-white"
              type="text"
              name="url"
              placeholder="https://example.com/jobs"
              onChange={(e) => setUrl(e.target.value)}
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ScrapeCreatePage;