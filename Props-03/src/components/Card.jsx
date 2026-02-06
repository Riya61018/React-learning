import React from 'react'

const Card= (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user} , {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quibusdam, iusto corporis pariatur tempore, expedita nam illo architecto dicta alias at quo et tempora, qui natus adipisci laboriosam esse. Ut.</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card;