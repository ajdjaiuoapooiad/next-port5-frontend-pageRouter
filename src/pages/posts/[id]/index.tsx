import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Post } from "@/utils/types";
import axios from "axios";
import { useRouter } from "next/navigation";




type Props = {
  post: Post
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:8000/api/device");
    const posts: Post[] = await res.json();
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));
  
    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if not generated at build time.
    return { paths, fallback: true };
  }


export async function getStaticProps({params}: {params: {id: string}}) {
    const res = await fetch(`http://localhost:8000/api/device/${params.id}`);
    const post = await res.json();
    console.log(post);
    
  
    return {
      props: {
        post,
      },
      revalidate: 60, // 24 hours
    };
  }

const DetailPage = ({post}: Props) => {
  const router = useRouter();


  const handleUpdate = async (post: Post) => {
    router.push(`/edit-post/${post.id}`);
  };

  // Delete function
  const handleDelete = async (id: any) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/device/${id}`
      );
      window.alert('削除が完了しました。');
      router.push('/posts')
    } catch (error) {
      console.error(error);
      alert("Error deleting post");
    }
  };

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>

      <div className='col-span-4 p-5'>
        <div className="border p-4 my-4 mx-3 col-span-1 hover:shadow-xl  bg-gray-100 hover:bg-gray-300 rounded-lg">
          <p className="hover:text-blue-500">会社名: {post.company}</p>
          <p className="hover:text-blue-500">勤務地: {post.place}</p>
          <p className="hover:text-blue-500">応募状況: {post.status}</p>

          <Button
            onClick={() => handleUpdate(post)}
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;