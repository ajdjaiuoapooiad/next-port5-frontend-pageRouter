import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function CreatePost() {
  const [company, setCompany] = useState("");
  const [place, setPlace] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(company, place, selectedValue);
    const url = `${process.env.NEXT_PUBLIC_API_URL}/device/`;

    try {
      await axios.post(url, {
        company: company,
        place: place,
        status: selectedValue,
      });
      router.push("/posts");
    } catch (error) {
      alert("投稿に失敗しました");
    }
  };

  return (
    <Layout>
      <Head>
        <title>ダッシュボード : 企業登録ページ</title>
        <meta name="description" content="企業登録ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <div className="p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-8 w-full md:w-1/2 mx-auto">
          <h1>企業新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label>Company:</label>
              <Input
                className="bg-white"
                type="text"
                name="company"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="my-5">
              <label>Place:</label>
              <Input
                className="bg-white"
                type="text"
                name="place"
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>

            <div className="my-3">
              <label>Status:</label>
              <select
                className="mx-5 my-5 p-2 rounded-lg"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option value="">選択してください</option>
                <option value="応募中">応募中</option>
                <option value="面接中">面接中</option>
                <option value="不採用">不採用</option>
              </select>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}