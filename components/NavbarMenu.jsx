import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

function classNames(...classes){
    return classes.filter(Boolean).join(' ')
}

const NavbarMenu = ({menuItems}) => {
  return (
    
    <>
        <Menu as='div' className='relative text-left'>
            <div className='flex'>
                <Menu.Button>
                  <BsThreeDotsVertical size={20} />
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
                <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                        {menuItems.map((name) => (
                            <Menu.Item key={name}>
                            {({ active }) => (
                            <a
                                href='#'
                                className={classNames(
                                active
                                    ? 'bg-gray-500 text-gray-100'
                                    : 'text-gray-200',
                                'block px-4 py-2 text-sm'
                                )}
                            >
                                {name}
                            </a>
                            )}
                        </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    </>
  )
}

export default NavbarMenu