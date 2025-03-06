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
    <div>
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
          value={content}
          onChange={handleContentChange}
        />
        <Button  type="submit">
          Update
        </Button>
      </form>
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