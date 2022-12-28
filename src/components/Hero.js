import React from 'react'
import hero2 from '../img/hero2.webp'
import {FiSearch} from 'react-icons/fi'

const Hero = () => {
  return (
    <div className='relative h-[10rem]  sm:h-[12rem] mt-3 rounded-[0.4rem] z-10 md:h-[14rem]'>
        {/* Background Image */}
        <div className='absolute flex w-full'>
            <img src={hero2} className='object-cover
            w-full rounded-[0.4rem] h-[13rem] sm:h-[15rem] md:h-[16rem]'/>
        </div>
        {/* Overlay */}
        <div className='absolute flex w-full h-full bg-black/10 z-10'>

        </div>

        {/* Search */}
        <div className='relative z-20 flex flex-col 
        items-center justify-end h-full  text-white pb-0 '>
            <p className='text-[20px] font-bold pb-2 md:text-[26px]'>Discord에서 커뮤니티 찾기
            </p>
            <p className='text-[14px] pb-2 mb-2 md:text-[20px]'>게임,음악,학습까지.원하는 걸 찾아보세요.
            </p>
            <div className='relative flex items-center justify-center mb-1'>
            <input type="search" 
            placeholder='커뮤니티 살펴보기' 
            className='rounded-[0.2rem] pl-3 placeholder:text-[14px]
             outline-0 max-w-[70vw] py-2 w-[25rem]
             md:placeholder:text-[17px]'/>
            <FiSearch className='absolute  text-gray-600 right-2'/>
            </div>
        </div>
    </div>
  )
}

export default Hero