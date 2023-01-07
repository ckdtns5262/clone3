import React from 'react'

const Topic = ({title,icon}) => {
  return (
    <div className='flex text-white/50 items-center
    text-[20px]    semi-bold'>
        
        <button className='flex items-center py-2 w-full hover:bg-[#7289dc]
        hover:text-white/100 duration-200 ease-out rounded-[0.3rem]'>
         <div className='pl-2'>{icon}</div>
        <p className='ml-4 text-[18px]'>{title}</p>
        </button>
    </div>
  )
}

export default Topic