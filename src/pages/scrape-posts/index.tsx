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
  const [responseData, setResponseData] = useState([]);
 
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

          <div className="p-5 my-5 m-5 border w-2/3  bg-gray-400 rounded-lg">
              <h1>ScrapePage</h1>
              <p>このページでは、URLを入力してリンク先の求人を一括で取得できます。</p>
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

              <div className='p-5 m-5 border bg-gray-400 rounded-lg'>
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
    
                        <div className="overflow-x-auto rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200 ">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left  font-bold text-gray-500 uppercase tracking-wider">
                                  id
                                </th>
                                <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                                  title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                                  company
                                </th>
                                <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                                  place
                                </th>
                                <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                                  company
                                </th>
                                <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                                  company
                                </th>
                                <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                                  company
                                </th>
                                
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {responseData.map((job: Job, index: number) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {index + 1}:
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {job.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {job.company}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {job.place}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {job.company}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {job.company}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {job.company}
                                </td>
                              </tr>
                             ))
                            }
                              
                            </tbody>
                          </table>
                        </div>
 

                        
                    </div>
                  )}
              
                
                
      
              </div>
       

        </div>
    </div>
  )
}

export default ScrapePostsList