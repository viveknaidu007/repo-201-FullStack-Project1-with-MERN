import React from 'react'
import logo from '../assets/logo.png'
import Search from './Search'
import {Link} from "react-router-dom"
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className='h-20 shadow-md sticky top-0 bg-red-500'>

      <div className='container mx-auto flex items-center h-full px-2 justify-between'>

        {/** logo */}
        <div className='h-full'>         
          <Link to={"/"} className='h-full flex justify-center items-center'>

          <img
            src={logo}
            width={170}
            height={60}
            alt="logo"
            //className='hidden lg:block' 
          />

          </Link>
        </div>


        {/** Search */}
        <div>
          <Search/>
        </div>


        {/**Login and my cart */}
        <div className=''>
          <button className='text-neutral-500 lg:hidden'>
          <FaRegUser size={25}/>
          </button>
            
          
          <div className='hidden lg:block'>
          login and my cart
          <div/>
        </div>

      </div>

      </div>

      <div className='container mx-auto px-2'>
        <Search/>
      </div>

    </header>

    )
}

export default Header