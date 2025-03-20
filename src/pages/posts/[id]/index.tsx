import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Post } from "@/utils/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Head from "next/head";

type Props = {
  post: Post;
};

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/device/${params.id}/`;
  try {
    const post = await axios.get(url);
    return {
      props: {
        post: post.data,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { post: null } };
  }
}

const DetailPage = ({ post }: Props) => {
  const router = useRouter();

  const handleUpdate = async (post: Post) => {
    router.push(`/edit-post/${post.id}`);
  };

  const handleDelete = async (id: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/device/${id}/`;
    try {
      const response = await axios.delete(url);
      window.alert("削除が完了しました。");
      router.push("/posts");
    } catch (error) {
      console.error(error);
      alert("Error deleting post");
    }
  };

  return (
    <Layout>
      <Head>
        <title>ダッシュボード : 企業詳細ページ</title>
        <meta name="description" content="企業詳細ページ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/test.svg" />
      </Head>

      <div className="p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-8 w-full md:w-1/2 mx-auto">
          <p className="mb-2">会社名: {post?.company}</p>
          <p className="mb-2">勤務地: {post?.place}</p>
          <p className="mb-4">応募状況: {post?.status}</p>

          <div className="flex justify-between">
            <Button onClick={() => handleUpdate(post)}>Edit</Button>
            <Button onClick={() => handleDelete(post.id)} className="bg-red-500 hover:bg-red-600 text-white">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;