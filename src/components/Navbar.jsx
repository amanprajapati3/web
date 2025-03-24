import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Navbar = () => {

   const [IsMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
   }

  return (
   <>
      <header className='bg-black opacity-90 sticky top-0 px-8'>
        <nav className='flex justify-between'>
            <h1 className='text-white hover:text-orange-600 cursor-pointer pl-5 py-2 text-2xl sm:text-3xl'> <a href="/">
            My<span className='hover:text-white text-orange-600'> Blog</span>
            </a></h1>
            <button className='text-white m-3 text-3xl sm:hidden' onClick={toggleMenu}>
                { IsMenuOpen ? (<FaTimes/>)   : (<FaBars/>)}             
            </button>
            <ul className='p-3 hidden sm:flex  
        sm:w-fit text-xl text-white'>
            <li className='text-white hover:bg-yellow-600 hover:text-black py-1 px-5  sm:rounded-lg '>
                <a href="/">Home</a>
            </li>
            <li className='text-white hover:bg-yellow-600 hover:text-black py-1 px-5   sm:rounded-lg'>
                <a href="/about">About</a>
            </li>
            <li className='text-white hover:bg-yellow-600 hover:text-black py-1 px-5  sm:rounded-lg'>
                <a href="/contact">Contact</a>
            </li>
            <li className='text-white hover:bg-yellow-600  hover:text-black py-1 px-5 sm:rounded-lg '>
                <a href="/blog">Blog</a>
            </li>
            <li className='text-white hover:bg-yellow-600 hover:text-black py-1 px-5 sm:rounded-lg hover:duration-100'>
                <a href="/login">Login</a>
            </li>
           </ul>
            <div className='hidden md:flex gap-5 text-2xl  text-white mt-4'>
            <a href="" className="hover:text-blue-400 hover:scale-125">
                {" "}
                <FaTwitter />{" "}
              </a>
              <a href="" className="hover:text-blue-400 hover:scale-125">
                {" "}
                <FaInstagram />{" "}
              </a>
              <a href="" className="hover:text-blue-400 hover:scale-125">
                {" "}
                <FaFacebook />{" "}
              </a>
            </div>
        </nav>
        <ul  className={`${IsMenuOpen ? 'block p-5 text-xl': 'hidden'}`}>
            <li className='text-white hover:bg-yellow-600 hover:text-black p-1 sm:p-2 sm:mb-1 sm:rounded-lg hover:duration-200 px-[40%] hover:ease-linear'>
                <a href="/">Home</a>
            </li>
            <li className='text-white hover:bg-yellow-600 hover:text-black p-1 sm:mb-1 sm:p-2  sm:rounded-lg hover:duration-200 px-[40%] hover:ease-linear'>
                <a href="/about">About</a>
            </li>
            <li className='text-white hover:bg-yellow-600 hover:text-black p-1 sm:mb-1 sm:p-2  sm:rounded-lg hover:duration-200 px-[40%] hover:ease-linear'>
                <a href="/contact">Contact</a>
            </li>
            <li className='text-white hover:bg-yellow-600 hover:text-black p-1 sm:mb-1 sm:p-2  sm:rounded-lg hover:duration-200 hover:ease-linear px-[40%]'>
                <a href="/blog">Blog</a>
            </li>
            <li className='text-white hover:bg-yellow-600 hover:text-black p-1 sm:mb-1 sm:p-2 sm:rounded-lg hover:duration-200 px-[40%] py-2 hover:ease-linear'>
                <a href="/login">Login</a>
            </li>
           </ul>
      </header>
   </>
  )
}

export default Navbar