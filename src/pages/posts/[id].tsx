import { Post } from "@/utils/types";
import { useRouter } from "next/navigation";


type Props = {
  post: Post
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3001/api/v1/posts");
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
    const res = await fetch(`http://localhost:3001/api/v1/posts/${params.id}`);
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

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      <h1>{post.title}</h1>
      <p >{post.content}</p>
    </div>
  );
}

export default DetailPage;