import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setindex] = useState(1)

  const getData =async () => {
    const responses =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(responses.data)
  }

  useEffect(() =>{
    getData();    
  },[index])

  let printUserData = <h3 className='text-gray-300 p-20'>loading...</h3>

  if(userData.length>0){
    printUserData = userData.map((elem,idx) =>{
      return <div>
        <a href={elem.url}>
          <div className='h-40 w-44 rounded-xl overflow-hidden '>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
        </a>
              <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
    })
    
  }

  return (
    <div className='bg-black p-4 h-screen text-white overflow-auto'>
      
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-6 p-4'>
        <button 
        style={{opacity: index == 1? 0.5 : 1}}
        onClick={() =>{
          if(index>1){
            setUserData([])
            setindex(index-1)
          }
        }}
        className='bg-red-600 active:scale-95 text-black px-4 py-2 rounded'>
        Prev
        </button>
        <h4>Page {index}</h4>
        <button 
        onClick={() =>{
          setUserData([])
          setindex(index+1)
          
        }}
        className='bg-red-600 active:scale-95 text-black px-4 py-2 rounded'>
        Next
        </button>
      </div>
    </div>
  )
}

export default App