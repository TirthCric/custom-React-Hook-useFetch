import React from 'react'

function Card(props) {
  return (
    <div className='p-5 border-2 border-white flex flex-col gap-4 items-center text-center'>
        <img src={props.url} alt="Image" className='block w-44' />
        <h2 className='text-xl text-white'>{props.title}</h2>
    </div>
  )
}

export default Card