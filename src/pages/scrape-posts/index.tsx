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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(url);

    try{
      fetch('http://127.0.0.1:8000/api/jobs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 送信するデータの種類
          // 必要に応じて他のヘッダーを追加
        },
        body: JSON.stringify(url), // 送信するデータ
      })
      // window.alert('送信が完了しました。');
      router.push('/scrape-posts')
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

          <div className="p-5 m-5 border w-1/2">
              <h1>ScrapeCreatePage</h1>
              <form  onSubmit={handleSubmit}>
                <label>URL:</label>
                <Input
                  type="text"
                  name="title"
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

export default ScrapePostsList