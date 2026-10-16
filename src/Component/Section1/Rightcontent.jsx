import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {

  return (
    <div className='h-full w-3/4 p-6 flex flex-nowrap gap-10 overflow-x-auto'>
    {props.users.map(function (elem,index) {
        return <Rightcard  key = {index} id={index} img = {elem.img} paragraph = {elem.paragraph} tag = {elem.tag} bgcolour = {elem.bgcolour}/>
    })}
    </div>
  )
}

export default Rightcontent
