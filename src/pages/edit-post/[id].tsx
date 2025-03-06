import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Post } from "@/utils/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";



type Props = {
  post: Post;
};

export default function EditPost({ post }: Props) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const router = useRouter();

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3001/api/v1/posts/${post.id}`,
        {
          title: title,
          content: content,
        }
      );
      router.push("/posts");

    } catch (error) {
      alert("Error updating post");
      console.error(error);
    }
  };

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>

      <div className='col-span-4 p-5'>
        <div className="p-5 m-5 border w-1/2">
          <h1 >ブログ編集</h1>
          <form  onSubmit={handleSubmit}>
            <label >Title:</label>
            <Input
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
            <label >Content:</label>
            <Input
              type="text"
              value={content}
              onChange={handleContentChange}
            />
            <Button  type="submit">
              Update
            </Button>
          </form>
        </div>
      </div>
    </div>

  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3001/api/v1/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}