import React from 'react';
import { useState } from 'react';
import { MenuAlt1Icon, XIcon} from "@heroicons/react/solid"
import { Transition } from "@headlessui/react";
import logo from "../Images/logo.jpg"

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <img
                            className="h-20 w-20"
                            src={logo}
                            alt="Workflow"
                        />
                    </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <h1 className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </h1>

                        <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            About us
                        </h1>

                        <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Features
                        </h1>

                        <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Pricing
                        </h1>

                        <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Discord
                        </h1>

                        <div className='bg-indigo-700 px-5 py-2 rounded-md cursor-pointer hover:bg-indigo-600 '>
                            <h1 className='text-white text-sm font-medium  '>Login</h1>
                        </div>
                    
                    </div>
                    </div>
                        <div className='block md:hidden' onClick={()=>setIsOpen(!isOpen)}>
                            {isOpen ? <XIcon className="h-7 w-7 text-white transition ease-in duration-75 transform" /> : <MenuAlt1Icon className="h-7 w-7 text-white transition ease-in duration-75 transform"  />}
                        </div>
                </div>
                    
            </div>

    <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
  </nav>
    )
}

export default Header
