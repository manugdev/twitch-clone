import Image from 'next/image'
import React from 'react'

const IconBarItem = ({src, name}) => {
  return (
    <>
        <div className='w-full h-[50px] bg-[#9147FF] flex justify-between items-center px-4 rounded'>
            <p className='text-2xl font-bold'>{name}</p>
            <Image src={src} alt='remote' />
        </div>
    </>
  )
}

export default IconBarItem