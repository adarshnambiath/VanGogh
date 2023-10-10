import React from 'react'
import Image from 'next/image'
function Card({title,content,image,x}) {
  if(x==true){
  return (
    <>
    <div className='flex w-full h-[42.5vw] gap-10 mb-[4.5vw] bg-[#4c89b5] font-inherit'>
      <Image className="w-1/2 rounded-sm object-cover" src={image}></Image>
      <div className='adarsh h-full pr-[3vw] font-inherit'>
      <p className='adarsh text-[6vw] text-white font-inherit'>{title}</p>
      <p className='adarsh text-[1vw] mb-[2vw] text-gray-800 font-extralight'>{content}</p>
      </div>
    </div>
    </>
  )}
  else{
    return(
      <>
      <div className='flex w-full h-[42.5vw] gap-10 mb-[4.5vw] bg-[#2d5a7a]'>
      <div className='adarsh h-full pl-[3vw]'>
      <p className='adarsh text-[6vw] text-white font-extralight'>{title}</p>
      <p className='adarsh text-[1vw] mb-[2vw] text-gray-900 font-extralight'>{content}</p>
      </div>
      <Image className="w-1/2 rounded-sm object-cover" src={image}></Image>
    </div>
    </>
    )
  }
}

export default Card