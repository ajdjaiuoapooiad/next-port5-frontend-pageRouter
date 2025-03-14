import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const ScrapeCreatePage = () => {
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
        const jobs = response.data.jobs
        setResponseData(jobs);
        console.log(jobs);
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
            <div className="p-5 my-5 m-5 border w-2/3  bg-gray-400">
                <h1>ScrapeCreatePage</h1>
                <form  onSubmit={handleSubmit}>
                  <label>URL:</label>
                  <Input
                    className='bg-white'
                    type="text"
                    name="url"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                
                  <Button type="submit">
                    Submit
                  </Button>
                </form>

          </div>
        </div>
    </div>
        

  )
}

export default ScrapeCreatePage