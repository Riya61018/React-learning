import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data,  setdata] = useState([])

  const getdata = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    
    const data = await response.json()

    console.log(data);
  }

  const getUsingAxios =async () =>{
    const response =await axios.get('https://jsonplaceholder.typicode.com/todos')
    
    setdata(response.data)
  }

  return (
    <div>
      <button onClick={() =>{
        getUsingAxios()
      }}>Get Data</button>

      <div>
        {data.map( (elem,idx) =>{

          return <div key={idx}>
            <h1>hello, {elem.id}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App