import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")

  const fromHandler = (e) => {
    e.preventDefault()
    console.log("from submitted by", name)

    setName('')
  }

  return (
    <div>
      <form onSubmit={(e) =>{
        fromHandler(e)
      }}>
        <input
        type="text" 
        placeholder='enter name'
        value={name}
        onChange={(e) =>{
          setName(e.target.value)          
        }}
        />
        <button>Submit </button>
      </form>
    </div>
  )
}

export default App