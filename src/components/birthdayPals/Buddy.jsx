import React from 'react'

const Buddy = ({image,name, age}) => {
  return (
    <article className='bg-slate-700 rounded-lg p-4 mb-4 shadow-md flex items-center gap-4 text-slate-50'>
      <img src={image} alt={name} className='w-20 h-20 rounded-full block object-cover'/>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  )
}

export default Buddy
