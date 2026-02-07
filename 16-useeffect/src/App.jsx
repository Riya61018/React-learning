import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(() =>{
    console.log('useEffect is runing..');
    
  },[num2])


  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={() =>{
        setnum(num+1)
      }}>click num </button>
      <button onClick={() =>{
        setnum2(num2+1)
      }}>click num 2</button>
    </div>
  )
}

export default App