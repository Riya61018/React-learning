import React , {useState} from 'react'

const App = () => {
  
  const [num, setnum] = useState(10);

  function increaseNum(){
    setnum(num + 1)    
  }

  function decreaseNum(){
    setnum(num - 1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  )
}

export default App