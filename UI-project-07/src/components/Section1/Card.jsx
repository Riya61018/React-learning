import React from 'react'
import CardContent from './CardContent'

const Card = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <CardContent tag={props.tag} intro={props.intro} id={props.id} color={props.color} />
    </div>
  )
}

export default Card