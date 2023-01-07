import React from 'react'
import picture1 from '../img/background.webp'
import picture2 from '../img/bg02.jpg'
import picture3 from '../img/bg03.jpg'
import picture4 from '../img/bg04.jpg'
import picture5 from '../img/bg05.jpeg'
import picture6 from '../img/bg06.jpeg'
import picture7 from '../img/bg07.jpeg'
import pro2 from '../img/lmfao.jpg'
import Card from './Card'
const Featured = () => {

    const cards = [
        {
        bg:picture6, 
        profile:pro2, 
        title:"Midjourney", 
        description :"The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        size : <p>471,689명 온라인 &#x2022; 멤버 232,061명</p>
        },
        {
        bg:picture2, 
        profile:pro2, 
        title:"Midjourney", 
        description :"The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        size :<p>471,689명 온라인 &#x2022; 멤버 232,061명</p>
        },{
        bg:picture3, 
        profile:pro2, 
        title:"Midjourney", 
        description :"The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        size :<p>471,689명 온라인 &#x2022; 멤버 232,061명</p>
        },{
        bg:picture4, 
        profile:pro2, 
        title:"Midjourney", 
        description :"The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        size :<p>471,689명 온라인 &#x2022; 멤버 232,061명</p>
        },{
        bg:picture5, 
        profile:pro2, 
        title:"Midjourney", 
        description :"The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        size :<p>471,689명 온라인 &#x2022; 멤버 232,061명</p>
        },{
        bg:picture7, 
        profile:pro2, 
        title:"Midjourney", 
        description :"The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        size :<p>471,689명 온라인 &#x2022; 멤버 232,061명</p>
        },{
         bg:picture6, 
        profile:pro2, 
        title:"Midjourney", 
        description :"The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        size : <p>471,689명 온라인 &#x2022; 멤버 232,061명</p>
        },
        {
        bg:picture2, 
        profile:pro2, 
        title:"Midjourney", 
        description :"The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        size :<p>471,689명 온라인 &#x2022; 멤버 232,061명</p>
        },{
        bg:picture3, 
        profile:pro2, 
        title:"Midjourney", 
        description :"The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        size :<p>471,689명 온라인 &#x2022; 멤버 232,061명</p>
        },
    ]
  return (
    <div className='pt-6'>
        {/*titles*/}
        <div className='mt-16 pb-4'>
            <p className='text-white font-bold text-[21px]'>추천 커뮤니티</p>
            </div>
        {/*Cards*/}
        <div className='gap-y-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4
        md:grid-cols-3 xs:gap-x-2 xl:grid-cols-4'>
            {cards.map((card)=>
            <Card 
            bg={card.bg} 
            profile={card.profile} 
            title={card.title} 
            description={card.description} 
            size={card.size}
            key={card.bg}/>)}
        </div>
        </div>
  )
}

export default Featured