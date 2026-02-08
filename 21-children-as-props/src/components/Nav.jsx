import React from 'react'
import Nav2 from './Nav2'

const Nav = (props) => {
  return (
    <div className='nav'>
        <h1>Sheriyans</h1>
        {props.children[0]}
        {props.children[1]}
        <Nav2 />
    </div>
  )
}

export default Nav