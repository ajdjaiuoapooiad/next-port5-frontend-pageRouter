import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Post } from "@/utils/types";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2';

type Props = {
  data: Post[]
}

export async function getServerSideProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/device/`;
  try {
    const posts = await axios.get(url);
    const sortedPosts = posts.data.sort((a: any, b: any) => parseInt(b.id) - parseInt(a.id));
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // サイドバーの表示状態を管理


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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <title>企業一覧ページ</title>
        <meta name="description" content="求人情報一覧ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        {/* ナビゲーションバー */}
        <nav className="bg-gray-800 text-white p-4">
          {/* ... (ナビゲーションバーのコードは省略) */}
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-5">
        {/* トグルボタン */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 bg-gray-200 rounded-md absolute top-4 left-4 z-10"
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button>

        {/* サイドバー */}
        <aside
          className={`md:col-span-1 bg-gray-800 text-white p-4 md:bg-gray-200 md:text-gray-800 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar />
        </aside>

        {/* メインコンテンツ */}
        <main className="md:col-span-4 p-4 md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-4 md:p-5 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-2">{post.company}</h2>
                <p className="text-gray-600 mb-1">勤務地: {post.place}</p>
                <p className="text-gray-600 mb-3">応募状況: {post.status}</p>

                <div className="flex justify-between items-center mt-4">
                  <a href={`/edit-post/${post.id}/`} className="flex-grow mr-2">
                    <Button className="w-full">編集</Button>
                  </a>
                  <Button onClick={() => handleDelete(post.id)} className="w-full bg-red-500 hover:bg-red-600 text-white">削除</Button>
                </div>
                <div className="mt-2">
                  <Button onClick={() => router.push(`/posts/${post.id}`)} className="w-full bg-blue-500 hover:bg-blue-600 text-white">詳細</Button>
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