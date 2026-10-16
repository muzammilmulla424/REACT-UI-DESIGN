import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
      
  return (
    <div className='h-full  w-70 relative overflow-x-auto rounded-3xl shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt=''/>
       <Rightcardcontent id ={props.id} paragraph = {props.paragraph} tag = {props.tag} bgcolour = {props.bgcolour}/>
    </div>
  )
}

export default Rightcard
