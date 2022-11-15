import React from 'react'
import CategoriesItem from './CategoriesItem'

const Categories = () => {
  return (
    <div id='categories' className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-2'>
          <span className='text-[#9147FF]'>Categories</span> we think you&apos;ll like
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 py-2 gap-2'>
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg' title='Counter-Strike: Global Offensive' viewers='38K' tag1='FPS' tag2='Shooter' />
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg' title='League of Legends' viewers='152k' tag1='MOBA' tag2='Action' />
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg' title='VALORANT' viewers='120K' tag1='FPS' tag2='Shooter' />
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg' title='Just Chatting' viewers='38K' tag1='IRL' />
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/1469308723-188x250.jpg' title='Software and Game Development' viewers='2.1K' tag1='IRL' tag2='Creative' />
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-285x380.jpg' title='God of War Ragnarök' viewers='232K' tag1='Action' />
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-285x380.jpg' title='Call of Duty: Modern Warfare II' viewers='232K' tag1='Shooter' tag2='Action' />
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/515025_IGDB-285x380.jpg' title='Overwatch 2' viewers='43.8K' tag1='FPS' tag2='Shooter' />
        </div>
    </div>
  )
}

export default Categories