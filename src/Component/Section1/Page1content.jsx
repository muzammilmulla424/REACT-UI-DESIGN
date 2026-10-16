import React from 'react'
import Rightcontent from './Rightcontent'
import Leftcontent from './Leftcontent'

const Page1content = (props) => {
  return (
    <div className='flex items-center justify-between py-6 px-18 h-[90vh] bg-purple-100 gap-2.5' >
      <Leftcontent/>
      <Rightcontent users={props.users}/>
 
    </div>
  )
}

export default Page1content
