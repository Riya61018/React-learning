import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 py-5 px-8'>
        <h2 className='text-xl font-bold'>Website</h2>
    <div className='flex justify-between items-center gap-10 font-medium text-lg'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/product'>Product</Link>
    </div>
    </div>
  )
}

export default Navbar