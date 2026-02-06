import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aru' age={11} img='https://images.unsplash.com/photo-1768595408288-22f8215ba8e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Riya' age={21} img='https://images.unsplash.com/photo-1766593635664-cd747d359fcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTF8fHxlbnwwfHx8fHw%3D'/>
      <Card user='Vaibhavi' age={25} img='https://plus.unsplash.com/premium_photo-1673105030799-3883d4c6e7a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjJ8fHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App