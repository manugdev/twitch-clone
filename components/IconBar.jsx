import React from 'react'
import Remote from '../public/assets/remote.png';
import Mic from '../public/assets/mic.png';
import Headphones from '../public/assets/headphones.png';
import Trophy from '../public/assets/trophy.png';
import Paint from '../public/assets/paint.png';
import IconBarItem from './IconBarItem';

const IconBar = ({src, name}) => {
  return (
    <div className='p-2 md:p-8'>
        <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t py-8 border-gray-700'>
            <IconBarItem src={Remote} name='Games' />
            <IconBarItem src={Mic} name='IRL' />
            <IconBarItem src={Headphones} name='Music' />
            <IconBarItem src={Trophy} name='Esports' />
            <IconBarItem src={Paint} name='Creative' />
        </div>
    </div>
  )
}

export default IconBar