
import {FaBars, FaTimes} from 'react-icons/fa'
import { NavLink} from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { useState } from 'react';

const Navbar = () => {

   const [IsMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
   }

  return (
   <>
      <header className='bg-black opacity-90 z-10 sticky top-0 px-8'>
        <nav className='flex justify-between'>
            <h1 className='text-white hover:text-orange-600 cursor-pointer pl-5 py-2 text-2xl sm:text-3xl'> <a href="/">
            My<span className='hover:text-white text-orange-600'> Blog</span>
            </a></h1>
            <button className='text-white m-3 text-3xl sm:hidden' onClick={toggleMenu}>
                { IsMenuOpen ? (<FaTimes/>)   : (<FaBars/>)}             
            </button>
            <ul className=' hidden sm:flex  
        sm:w-fit text-xl text-white'>
            <li className='text-white transition-all duration-300 hover:bg-yellow-600 hover:text-black py-3 px-5  '>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className='text-white transition-all duration-300 hover:bg-yellow-600 hover:text-black py-3 px-5  '>
                <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className='text-white transition-all duration-300 hover:bg-yellow-600 hover:text-black py-3 px-5 '>
                <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li className='text-white transition-all duration-300 hover:bg-yellow-600  hover:text-black py-3 px-5 '>
               <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li className='text-white transition-all duration-300 hover:bg-yellow-600 hover:text-black py-3 px-5 '>
                <NavLink to={"/login"}>Login</NavLink>
            </li>
           </ul>
            <div className='hidden md:flex gap-5 text-2xl  text-white mt-4'>
            <a href="" className="hover:text-blue-400 transition-all duration-200 hover:scale-125">
                {" "}
                <FaTwitter />{" "}
              </a>
              <a href="" className="hover:text-purple-700 transition-all duration-200 hover:scale-125">
                {" "}
                <FaInstagram />{" "}
              </a>
              <a href="" className="hover:text-blue-900 transition-all duration-200 hover:scale-125">
                {" "}
                <FaFacebook />{" "}
              </a>
            </div>
        </nav>
        <ul className={`sm:hidden flex flex-col items-center text-xl transition-all duration-300 overflow-hidden ${
  IsMenuOpen ? 'h-fit py-1' : 'h-0'
}`}>
  {[
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
    { path: "/login", label: "Login" },
  ].map((item, index) => (
    <li
      key={item.label}
      className={`text-white hover:text-yellow-600 p-1 sm:mb-1 rounded-lg transition-all ease-linear
      ${IsMenuOpen ? `animate-slideIn delay-[${index * 500}ms]` : ''}`}
    >
      <NavLink to={item.path}>{item.label}</NavLink>
    </li>
  ))}
</ul>

      </header>
   </>
  )
}

export default Navbar