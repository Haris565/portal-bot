import { useState } from "react"

import {SearchIcon, MenuIcon, UserCircleIcon, UserIcon, GlobeAltIcon, TrendingUpIcon} from "@heroicons/react/solid"



function Header({placeholder}) {


    

    return (
        <header className="fix top-0 z-50 grid grid-cols-2 py-5 px-5 md:px-10 bg-transparent" >

            {/* <div className='relative flex items-center h-10 w-24 cursor-pointer my-auto '> */}
         
            <ul className='flex items-center cursor-pointer w-3/5 justify-between'>
                <li style={{borderBottom:"1px solid deeppink"}}>
                    <a className="text-white font-light font-normal text-xl p-4" >Home</a>
                </li>
                <li >
                    <a className="text-white font-light font-normal text-xl p-1" style={{borderBottom:"1px solid deeppink"}}>About</a>
                </li>
                <li>
                    <a className="text-white font-light font-normal text-xl p-1" style={{borderBottom:"1px solid deeppink"}}>Faq</a>
                </li>
                </ul>
                
         


            <div className='flex items-center justify-end space-x-4 text-xl text-white'>
                <p className='hidden md:inline cursor-pointer '>Trade with us </p>
                <TrendingUpIcon className='h-6 cursor-pointer'  />

                <div className='flex items-center  ' >
             

                    <div 
                        className="px-4 py-2 space-x-2 ml-4 rounded-xl  cursor-pointer hover:scale-105 transition transform duration-200 ease-out" 
                        style={{backgroundColor:"deeppink"}}>
                        <h1 className="text-xl text-white" >
                            Get Started
                        </h1>
                    </div>
             
                    
                </div>
            </div>

            
        </header>
    )
}

export default Header

