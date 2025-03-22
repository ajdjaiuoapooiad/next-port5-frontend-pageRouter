import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Post } from "@/utils/types";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Layout from "@/components/Layout";

type Props = {
  initialData: Post[];
};

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/device/`;
  try {
    const response = await axios.get(url);
    const sortedPosts = response.data.sort(
      (a: Post, b: Post) => Number(b.id) - Number(a.id)
    );
    return {
      props: {
        initialData: sortedPosts,
      },
      revalidate: 1, // データの更新頻度に合わせて調整
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        initialData: [],
      },
      revalidate: 60,
    };
  }
}

export default function PostsListPage({ initialData }: Props) {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: '削除確認',
      text: '本当に削除しますか？',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '削除',
      cancelButtonText: 'キャンセル',
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        const url = `${process.env.NEXT_PUBLIC_API_URL}/device/${id}/`;
        try {
          await axios.delete(url);
          setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
          Swal.fire('削除完了', '削除が完了しました。', 'success');
        } catch (error) {
          console.error(error);
          Swal.fire('エラー', '削除に失敗しました。', 'error');
        } finally {
          setIsLoading(false);
        }
      }
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>ダッシュボード : 企業一覧ページ</title>
        <meta name="description" content="求人情報一覧ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-4 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{post.company}</h2>
              <p className="text-gray-600 mb-1">勤務地: {post.place}</p>
              <p className="text-gray-600 mb-3">応募状況: {post.status}</p>

              <div className="flex justify-between items-center mt-4">
                <a href={`/edit-post/${post.id}/`} className="flex-grow mr-2">
                  <Button className="w-full">編集</Button>
                </a>
                <Button
                  onClick={() => handleDelete(post.id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                >
                  削除
                </Button>
              </div>
              <div className="mt-2">
                <Button
                  onClick={() => router.push(`/posts/${post.id}`)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  詳細
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
