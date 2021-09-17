

// import { TrendingUpIcon} from "@heroicons/react/solid"



// function Header({placeholder}) {


    

//     return (
//         <header className="fix top-0 z-50 grid grid-cols-2 py-5 px-5 md:px-10 bg-transparent" >

//             {/* <div className='relative flex items-center h-10 w-24 cursor-pointer my-auto '> */}
         
//             <ul className='flex items-center cursor-pointer w-3/5 justify-between'>
//                 <li style={{borderBottom:"1px solid deeppink"}}>
//                     <a className="text-white font-light font-normal text-xl p-4" >Home</a>
//                 </li>
//                 <li >
//                     <a className="text-white font-light font-normal text-xl p-1" style={{borderBottom:"1px solid deeppink"}}>About</a>
//                 </li>
//                 <li>
//                     <a className="text-white font-light font-normal text-xl p-1" style={{borderBottom:"1px solid deeppink"}}>Faq</a>
//                 </li>
//                 </ul>
                
         


//             <div className='flex items-center justify-end space-x-4 text-xl text-white'>
//                 <p className='hidden md:inline cursor-pointer '>Trade with us </p>
//                 <TrendingUpIcon className='h-6 cursor-pointer'  />

//                 <div className='flex items-center  ' >
             

//                     <div 
//                         className="px-4 py-2 space-x-2 ml-4 rounded-xl  cursor-pointer hover:scale-105 transition transform duration-200 ease-out" 
//                         style={{backgroundColor:"deeppink"}}>
//                         <h1 className="text-xl text-white" >
//                             Get Started
//                         </h1>
//                     </div>
             
                    
//                 </div>
//             </div>

            
//         </header>
//     )
// }

// export default Header

import React from 'react';
import { useState } from 'react';
import { MenuAlt1Icon, XIcon} from "@heroicons/react/solid"
import { Transition } from "@headlessui/react";
import logo from "../Images/logo.jpg"

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    //     <nav className="bg-gray-800">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex items-center h-16">
    //         <div className="flex items-center">
    //           <div className="flex-shrink-0">
    //             <img
    //               className="h-8 w-8"
    //               src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
    //               alt="Workflow"
    //             />
    //           </div>
    //           <div className="hidden md:block">
    //             <div className="ml-10 flex items-baseline space-x-4">
    //               <p
                   
    //                 className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Dashboard
    //               </p>

    //               <p
                    
    //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Team
    //               </p>

    //               <p
                    
    //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Projects
    //               </p>

    //               <p
                    
    //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Calendar
    //               </p>

    //               <p
                    
    //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    //               >
    //                 Reports
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="-mr-2 flex md:hidden">
    //           <button
    //             onClick={() => setIsOpen(!isOpen)}
    //             type="button"
    //             className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    //             aria-controls="mobile-menu"
    //             aria-expanded="false"
    //           >
    //             <span className="sr-only">Open main menu</span>
    //             {!isOpen ? (
    //               <svg
    //                 className="block h-6 w-6"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             ) : (
    //               <svg
    //                 className="block h-6 w-6"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M6 18L18 6M6 6l12 12"
    //                 />
    //               </svg>
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <Transition
    //       show={isOpen}
    //       enter="transition ease-out duration-100 transform"
    //       enterFrom="opacity-0 scale-95"
    //       enterTo="opacity-100 scale-100"
    //       leave="transition ease-in duration-75 transform"
    //       leaveFrom="opacity-100 scale-100"
    //       leaveTo="opacity-0 scale-95"
    //     >
    //       {(ref) => (
    //         <div className="md:hidden" id="mobile-menu">
    //           <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //             <p
    //               className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Dashboard
    //             </p>

    //             <p
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Team
    //             </p>

    //             <p
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Projects
    //             </p>

    //             <p
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Calendar
    //             </p>

    //             <p
    //               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //             >
    //               Reports
    //             </p>
    //           </div>
    //         </div>
    //       )}
    //     </Transition>
    //   </nav>

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
                <h1
                 
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </h1>

                <h1
                  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About us
                </h1>

                <h1
                  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </h1>

                <h1
                  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </h1>

                <h1
                  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
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
