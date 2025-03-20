import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Post } from "@/utils/types";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2';

type Props = {
  data: Post[];
};

export async function getServerSideProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/device/`;
  try {
    const posts = await axios.get(url);
    const sortedPosts = posts.data.sort(
      (a: any, b: any) => parseInt(b.id) - parseInt(a.id)
    );
    return {
      props: {
        data: sortedPosts,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: [],
      },
    };
  }
}

export default function PostsListPage({ data }: Props) {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>(data);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDelete = async (id: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/device/${id}/`;
    try {
      await axios.delete(url);
      setPosts(posts.filter((post) => post.id !== id));
      Swal.fire('削除完了', '削除が完了しました。', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('エラー', '削除に失敗しました。', 'error');
    }
  };

  return (
    <>
      <Head>
        <title>ダッシュボード : 企業一覧ページ</title>
        <meta name="description" content="求人情報一覧ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <div className="min-h-screen">

      <Button
        onClick={toggleSidebar}
        className="absolute top-3 right-4 md:hidden "
      >
        {isSidebarOpen ? "✕" : "☰"}
      </Button>

      <div className="grid md:grid-cols-5">
          {/* サイドバー */}
          {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} {/* isSidebarOpenがtrueの場合のみレンダリング */}

          {/* メインコンテンツ */}
        <main className="md:col-span-4 p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-300 rounded-lg shadow-md p-4 mx-10 md:mx-0 md:p-5 hover:shadow-lg transition-shadow duration-300"
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
          </main>
        </div>
      </div>
    </>
  );
}