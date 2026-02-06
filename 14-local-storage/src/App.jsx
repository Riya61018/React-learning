import React from 'react'

const App = () => {

  { /* local storage
     4 methods 

     1.getItem
     2.setItem
     3.removeItem
     4.clear

    */}

  const task = localStorage.getItem('new')

  console.log(JSON.parse(task));
  

  return (
    <div>App</div>
  )
}

export default App