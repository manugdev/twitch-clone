import Image from 'next/image'
import React from 'react'

const Channels = ({img, profile_img, title, user, game}) => {
  return (
    <div className='p-2'>
        <Image src={img} alt={user} width='350' height='250' />
        <div className='flex pt-2'>
            <div className='pr-2'>
                <Image src={profile_img} alt={user} width='60' height='60' className='rounded-full' />
            </div>
            <div className='text-sm'>
                <p className='font-bold'>{title}</p>
                <p className='text-gray-500'>{user}</p>
                <p className='text-gray-500'>{game}</p>
            </div>
        </div>
    </div>
  )
}

export default Channels