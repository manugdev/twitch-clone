import Image from 'next/image'
import React from 'react'

const CategoriesItem = ({img, title, viewers, tag1, tag2}) => {
  return (
    <div className='p-2'>
        <Image src={img} alt={title} width='261' height='350' />
        <div>
            <p className='font-bold'>{title}</p>
            <p className='text-sm text-gray-500 py-[2px]'>{viewers}</p>
            <div className='flex gap-1'>
                <div>
                    <p className='text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3'>{tag1}</p>
                </div>
                {tag2 ? <div>
                    <p className='text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3'>{tag2}</p>
                </div> : null}
            </div>
        </div>
    </div>
  )
}

export default CategoriesItem