import React from 'react'
import { AiFillCompass, AiFillGithub } from 'react-icons/ai'
import { GiConsoleController } from 'react-icons/gi'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { TbAtom } from 'react-icons/tb'
import { RiMovieFill } from 'react-icons/ri'
import {MdKeyboardVoice} from 'react-icons/md'
import {FaHeadphones} from 'react-icons/fa'
import {IoMdSettings} from 'react-icons/io'
import Topic from './Topic'
import profile from '../img/img1.png'


const Discover = () => {
  const topics = [
    { icon: <AiFillCompass />, title: '홈' },
    { icon: <GiConsoleController />, title: '게임' },
    { icon: <BsMusicNoteBeamed />, title: '음악' },
    { icon: <FaGraduationCap />, title: '교육' },
    { icon: <TbAtom />, title: '과학, 기술' },
    { icon: <RiMovieFill />, title: '엔터테인먼트' },
    { icon: <AiFillGithub />, title: '학생 허브' }
  ]
  return (
    <div className='hidden  bg-[#303136] 
    lg:flex flex-col justify-between w-[16rem] shrink-0  max-h-screen sticky top-0'>
      <div className='p-3'>
        {/* 찾기 */}
        <p className='text-white font-bold text-[26px]'>찾기</p>
        {/* Topics */}
        <div className='mt-4 space-y-1'>
          {
            topics.map((topic) =>
              <Topic title={topic.title} icon={topic.icon} />
            )
          }
        </div>
      </div>

      {/* Profile Settings */}
      <div className='bg-[#292b2f] h-[3rem] flex items-center justify-between text-white text-[14px]
      pl-2'>
        <div className='flex items-center px-2'>
        <img src={profile} alt='프로필사진' className='rounded-full w-8 h-8'/>
          <div className='pl-2'>
          <p className='font-bold'>창현</p>
          <p className='text-white/70 text-[12px] -m-1 ml-0.3'>#5762</p>
          </div>
        </div>
        
          <div className='flex space-x-3 mr-2 text-[20px]'>
            <MdKeyboardVoice/>
            <FaHeadphones/>
            <IoMdSettings className=''/>
          </div>
      </div>
    </div>
  )
}

export default Discover