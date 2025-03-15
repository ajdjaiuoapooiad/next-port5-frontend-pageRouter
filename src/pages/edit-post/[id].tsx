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
  const [ company,setCompany ] = useState(post.company)
  const [ place,setPlace ] = useState(post.place)
  const [ status,setStatus ] = useState(post.status)
  const router = useRouter();

  const handleCompanyChange = (e: any) => {
    setCompany(e.target.value);
  };

  const handlePlaceChange = (e: any) => {
    setPlace(e.target.value);
  };

  const handleStatusChange = (e: any) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/device/${post.id}/`,
        {
          company: company,
          place: place,
          status: status,
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
        <div className="p-5 m-5 border w-1/2 bg-gray-400 rounded-lg">
          <h1 >ブログ編集</h1>
          <form  onSubmit={handleSubmit}>
            <label >Company:</label>
            <Input
              className="bg-white"
              type="text"
              value={company}
              onChange={handleCompanyChange}
            />
            <label >Place:</label>
            <Input
              className="bg-white"
              type="text"
              value={place}
              onChange={handlePlaceChange}
            />
            <label >Status:</label>
            <Input
              className="bg-white"
              type="text"
              value={status}
              onChange={handleStatusChange}
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
  const res = await fetch(`http://127.0.0.1:8000/api/device/${id}/`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}