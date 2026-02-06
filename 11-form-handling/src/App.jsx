import React from 'react'

const App = () => {

  const fromHandler = (e) => {
    e.preventDefault()
    console.log("from submitted")
  }

  return (
    <div>
      <form onSubmit={(e) =>{
        fromHandler(e)
      }}>
        <input type="text" placeholder='enter name'/>
        <button>Submit </button>
      </form>
    </div>
  )
}

export default App