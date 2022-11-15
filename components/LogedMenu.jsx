import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

function classNames(...classes){
    return classes.filter(Boolean).join(' ')
}

const LogedMenu = ({user}) => {
  return (
    <>
        <div className='flex items-center'>
              <Link href='/account'>
                <div>
                  <p className='pr-4 cursor-pointer'>
                    Welcome, {user.name}
                  </p>
                </div>
              </Link>
              <Menu as='div' className='relative text-left'>
              <div className='flex'>
                <Menu.Button>
                  <Image className='rounded-full' src={user.image} width='45' height='45' alt='User image' />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/account'
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Account
                        </Link>
                      )}
                    </Menu.Item>                    
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => signOut()}
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            </div>
    </>
  )
}

export default LogedMenu