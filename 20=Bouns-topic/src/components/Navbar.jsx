import React from 'react'

const Navbar = (props) => {
  return (
    <div>

    <button onClick={() =>{
        props.settheme('Dark')
    }}>Change theme</button>
    </div>
  )
}

export default Navbar