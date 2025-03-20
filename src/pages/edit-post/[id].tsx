import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Post } from "@/utils/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";
import Layout from "@/components/Layout";
import Head from "next/head";

type Props = {
  post: Post;
};

export default function EditPost({ post }: Props) {
  const [company, setCompany] = useState(post.company);
  const [place, setPlace] = useState(post.place);
  const [selectedValue, setSelectedValue] = useState(post.status);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const handlePlaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_API_URL}/device/${post.id}/`;

    try {
      await axios.put(url, {
        company: company,
        place: place,
        status: selectedValue,
      });
      Swal.fire("更新完了", "投稿を更新しました。", "success");
      router.push("/posts");
    } catch (error) {
      console.error(error);
      Swal.fire("エラー", "投稿の更新に失敗しました。", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>ダッシュボード : 企業編集ページ</title>
        <meta name="description" content="企業編集ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <div className="p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-8 w-full md:w-1/2 mx-auto">
          <h1>企業編集</h1>
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label>Company:</label>
              <Input
                className="bg-white"
                type="text"
                value={company}
                onChange={handleCompanyChange}
              />
            </div>

            <div className="my-5">
              <label>Place:</label>
              <Input
                className="bg-white"
                type="text"
                value={place}
                onChange={handlePlaceChange}
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

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "更新中..." : "Update"}
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/device/${id}/`;
  const post = await axios.get(url);

  return {
    props: {
      post: post.data,
    },
  };
}