import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex items-center gap-10 bg-white h-[90vh] py-18 px-10'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content