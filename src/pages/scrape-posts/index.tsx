import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Job } from '@/utils/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'


type Props = {
  posts: Job[]
}

const ScrapePostsList = () => {
  const [ url,setUrl ] = useState('')
  const router = useRouter()
  const [responseData, setResponseData] = useState(null);
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(url);
    const formData = new FormData();
    formData.append('url', url);

    // fetch APIを使ってサーバーにリクエストを送信
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/jobs/ ', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // FormDataを送信する場合に必要
        },
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }
      
  


  return (
    
    <div className='grid grid-cols-5'>
        <div className='col-span-1'> 
          <Sidebar />
        </div>

        <div className='col-span-4 p-5'>

          <div className="p-5 m-5 border w-1/2">
              <h1>ScrapeCreatePage</h1>
              <form  onSubmit={handleSubmit}>
                <label>URL:</label>
                <Input
                  type="text"
                  name="url"
                  onChange={(e) => setUrl(e.target.value)}
                />
              
                <Button type="submit">
                  Submit
                </Button>
              </form>


              <div>
                <h1>出力結果</h1>
                {/* {posts.length > 0 ? (
                  {posts.map((post: any, index: any) => (
                    <div key={index}>
                      <h3>{post.title}</h3>
                      <p>{post.company}</p>
                    </div>
                  ))}
                ): void { 
                }} */}
                 {responseData && (
                    <div>
                      <h2>レスポンスデータ:</h2>
                      <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    </div>
                  )}
              
                
                
      
              </div>
          </div>

        </div>
    </div>
  )
}

export default ScrapePostsList