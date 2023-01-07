import React from 'react'
import pi1 from '../img/img1.png'
import pi2 from '../img/img2.png'
import pi3 from '../img/img3.png'
import pi4 from '../img/img4.png'
import dc from '../img/dc.png'
import {FiPlus} from 'react-icons/fi'
import {AiFillCompass} from 'react-icons/ai'


const Groups = () => {
  const groups = [pi1, pi2, pi3, pi4]
  return (
    <div className='hidden sm:flex h-screen bg-[#212226] w-[5rem] shrink-0  text-white pt-4 sticky top-0'>
      <div className='flex flex-col items-center w-full space-y-4 '>
       <div className='bg-[#36393f] p-1 rounded-full text-green-700'>
            <img src={dc} className='w-14 h-14 object-cover rounded-full hover:bg-blue-600 text-white brightness-120' />
          </div>
          {/* Groups */}
          <div className='space-y-2 pt-4'>
          {groups.map((group) =>
          <div className='' key={group}>
            <img src={group} className='w-14 h-14 object-cover rounded-full' />
          </div>)}
          </div>
          {/* 플러스 */}
          <div className='bg-[#36393f] p-4 rounded-full text-green-700 hover:bg-green-600 hover:text-white'>
            <FiPlus className='w-6 h-6 object-cover rounded-full' />
          </div>
          {/* 나침반 */}
          <div className='bg-[#36393f] p-4 rounded-full text-green-700 hover:bg-green-600 hover:text-white'>
            <AiFillCompass className='w-7 h-7 object-cover rounded-full' />
          </div>
      </div> 
    </div>
  )
}

export default Groups