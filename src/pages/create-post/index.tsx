import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Swal from 'sweetalert2';

export default function CreatePost() {
  const [company, setCompany] = useState("");
  const [place, setPlace] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!company || !place || !selectedValue) {
      Swal.fire('エラー', 'すべてのフィールドを入力してください。', 'error');
      setIsLoading(false);
      return;
    }

    const url = `${process.env.NEXT_PUBLIC_API_URL}/device/`;

    try {
      await axios.post(url, {
        company: company,
        place: place,
        status: selectedValue,
      });
      router.push("/posts");
      router.prefetch("/posts");
    } catch (error) {
      console.error(error);
      setError("投稿に失敗しました。");
      Swal.fire('エラー', '投稿に失敗しました。', 'error');
    } finally {
      setIsLoading(false);
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
        <div className="bg-gray-300 rounded-lg shadow-md p-4 md:p-8 w-full md:w-1/2 mx-auto">
          <h1>企業新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label className="block mb-2 text-sm font-medium text-gray-700">Company:</label>
              <Input
                className="bg-white"
                type="text"
                name="company"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="my-5">
              <label className="block mb-2 text-sm font-medium text-gray-700">Place:</label>
              <Input
                className="bg-white"
                type="text"
                name="place"
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>

            <div className="my-3">
              <label className="block mb-2 text-sm font-medium text-gray-700">Status:</label>
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

            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </Layout>
  );
}