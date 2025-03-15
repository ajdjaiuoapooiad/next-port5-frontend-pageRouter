import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreatePost() {
  const [ company,setCompany ] = useState('')
  const [ place,setPlace ] = useState('')
  const [ status,setStatus ] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(company, place, status);

    try{
      await axios.post('http://127.0.0.1:8000/api/device/', {
        company: company,
        place: place,
        status: status
      })
      // window.alert('送信が完了しました。');
      router.push('/posts')
    }catch(error){
      alert('投稿に失敗しました')
    }
    
  }
  

  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-1'> 
        <Sidebar />
      </div>

      <div className='col-span-4 p-5'>

      <div className="p-5 m-5 border w-1/2 bg-gray-400 rounded-lg">
        <h1 >ブログ新規登録</h1>
        <form  onSubmit={handleSubmit}>
          <label>Company:</label>
          <Input
            className="bg-white"
            type="text"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
          />
          <label >Place:</label>
          <Input
            className="bg-white"
            type="text"
            name="place"
            onChange={(e) => setPlace(e.target.value)}
          />
          <label >Status:</label>
          <Input
            className="bg-white"
            type="text"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
          />
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
      </div>
    </div>
  );
}