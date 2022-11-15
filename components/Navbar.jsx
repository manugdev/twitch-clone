import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsPerson, BsSearch } from 'react-icons/bs'
import logo from '../public/assets/logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import NavbarMenu from './NavbarMenu'
import LogedMenu from './LogedMenu'
import { useSession } from 'next-auth/react'

function classNames(...classes){
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const { data: session } = useSession()

  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0E0E10] mb-[2px] z-10'>
        {/* Left Side */}
        <div className='flex grow items-center justify-start'>
          <Link href='/' className='flex'>
              <Image src={logo} alt='Logo' width='35' height='35' className='cursor-pointer z-10' />
          </Link>
          <p className='p-4'>Browse</p>
          <div className='p-4'>
            <NavbarMenu menuItems={['Settings', 'License', 'Support']} />
          </div>
        </div>
        {/* Middle Side */}
        <div className='hidden md:flex grow-[2] items-center justify-center'>
          <div className='bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl'>
            <div>
              <input type='text' className='bg-transparent border-none text-white focus:outline-none' placeholder='Search' />
            </div>
            <div>
              <BsSearch />
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className='hidden md:flex grow items-center justify-end'>
          {session ? (
            <LogedMenu user={session.user} menuItems={['Account', 'Logout']} />
            ) : (
            <div className='flex items-center'>
              <Link href='/account'>
                <button className='px-4 py-[6px] rounded-lg bg-[#9147FF] mr-2'>Account</button>
              </Link>
              <BsPerson size={30} />
            </div>)}
        </div>
        {/* Hamburguer menu */}
        <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        {/* Mobile menu */}
        <div className={nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300' : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'}>
          <ul className='text-center text-3xl font-bold'>
            <li onClick={() => setNav(false)} className='p-4'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={() => setNav(false)} className='p-4'>
              <Link href='/#live'>Live Channels</Link>
            </li>
            <li onClick={() => setNav(false)} className='p-4'>
              <Link href='/#categories'>Top Categories</Link>
            </li>
            <li onClick={() => setNav(false)} className='p-4'>
              <Link href='/account'>Account</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar