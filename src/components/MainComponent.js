import React from 'react'
import Hero from './Hero'
import Featured from './Featured'

const MainComponent = () => {
  return <div className='bg-[#393943] mx-2  w-full px-1'>
    {/*  Hero */}
    <Hero/>
    {/* 추천 커뮤니티 */}
    <Featured/>
  </div>
  
}

export default MainComponent