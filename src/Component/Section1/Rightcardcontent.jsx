import React from 'react'

const Rightcardcontent = (props) => {

  return (
    
   <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h1 className='text-2xl rounded-full bg-white justify-center h-10 w-10 flex items-center font-semibold'>{props.id+1}</h1>
        <div>
           <p className='text-lg leading-normal text-gray-200'>
            {props.paragraph}
           </p>
         <div className='flex justify-between mt-3'>  
        <button style={{backgroundColor:props.bgcolour}} className='py-2 px-7 text-lg font-semibold rounded-full text-white'>{props.tag}</button>
        <button style={{backgroundColor:props.bgcolour}} className ='px-4 py-2 font-semibold rounded-full text-white'><i className ="ri-arrow-right-line"></i></button>
        </div>
      </div>
      </div>
     
  )
}

export default Rightcardcontent
