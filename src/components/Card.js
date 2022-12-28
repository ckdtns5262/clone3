import React from 'react'

const Card = ({size, description, title, profile, bg}) => {
  return (
    
    <div className='w-full'>
        {/* Banner */}
        <div className='h-40 flex w-full'>
            <img src={bg} className="rounded-t-[1rem] object-cover w-full"/>
        </div>
        <div className='bg-[#292b2f] relative h-[10rem] pl-[1rem] rounded-b-[1rem]'>
        {/* Profile */}
        <div className='absolute left-3 -top-12 w-14 h-14 flex rounded-[0.5rem] p-1 bg-[#292b2f]'>
        <img src={profile} className="object-cover rounded-[0.5rem]"/>
        </div>
         {/* Title */}
        <p className='pt-4 text-white font-bold '>{title}</p>
        {/* Description */}
        <p className='text-white/70 font-medium'>{description}</p>
        {/* Size */}
        <p className=' pt-1 text-white/70 text-[12px]'>{size}</p>
        </div>
    </div>
  );
};

export default Card