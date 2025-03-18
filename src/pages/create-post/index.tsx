import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function CreatePost() {
  const [ company,setCompany ] = useState('')
  const [ place,setPlace ] = useState('')
  const [selectedValue, setSelectedValue] = useState('');
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(company, place, selectedValue);
    const url = `${process.env.NEXT_PUBLIC_API_URL}/device/`;

    try{
      await axios.post(url, {
        company: company,
        place: place,
        status: selectedValue
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

          <div className="my-5">
            <label>Company:</label>
            <Input
              className="bg-white"
              type="text"
              name="company"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label >Place:</label>
            <Input
              className="bg-white"
              type="text"
              name="place"
              onChange={(e) => setPlace(e.target.value)}
            />

          </div>

          <div className="my-3">
            <label >Status:</label>
            <select className="mx-5 my-5 p-2 rounded-lg" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
              <option value="">選択してください</option>
              <option value="応募中">応募中</option>
              <option value="面接中">面接中</option>
              <option value="不採用">不採用</option>
            </select>
          </div>

          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
      </div>
    </div>
  );
}