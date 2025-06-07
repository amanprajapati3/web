import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  return (
    <>
      <header className="bg-black opacity-90 z-10 sticky top-0 px-8">
        <nav className="flex justify-between">
          <h1 className="text-white hover:text-orange-600 cursor-pointer pl-5 py-2 text-2xl sm:text-3xl">
            {" "}
            <a href="/">
              My<span className="hover:text-white text-orange-600"> Blog</span>
            </a>
          </h1>
          <button
            className="text-white m-3 text-3xl sm:hidden"
            onClick={toggleMenu}
          >
            {IsMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul
            className=" hidden sm:flex  
        sm:w-fit text-xl text-white"
          >
            <li className="text-white transition-all duration-300 hover:bg-yellow-600 hover:text-black py-3 px-5  ">
              <NavLink to={"/"}>
                <p>Home</p>
              </NavLink>
            </li>
            <li className="text-white transition-all duration-300 hover:bg-yellow-600 hover:text-black py-3 px-5  ">
              <NavLink to={"/about"}>
                <p>About</p>
              </NavLink>
            </li>
            <li className="text-white transition-all duration-300 hover:bg-yellow-600 hover:text-black py-3 px-5 ">
              <NavLink to={"/contact"}>
                <p>Contact</p>
              </NavLink>
            </li>
            <li className="text-white transition-all duration-300 hover:bg-yellow-600  hover:text-black py-3 px-5 ">
              <NavLink to={"/blog"}>
                <p>Blog</p>
              </NavLink>
            </li>
            <li className="text-white transition-all duration-300 hover:bg-yellow-600 hover:text-black py-3 px-5 ">
              <NavLink to={"/login"}>
                <p>Login</p>
              </NavLink>
            </li>
          </ul>
          <div className="hidden md:flex gap-5 text-2xl  text-white mt-4">
            <a
              href=""
              className="hover:text-blue-400 transition-all duration-200 hover:scale-125"
            >
              {" "}
              <FaTwitter />{" "}
            </a>
            <a
              href=""
              className="hover:text-purple-700 transition-all duration-200 hover:scale-125"
            >
              {" "}
              <FaInstagram />{" "}
            </a>
            <a
              href=""
              className="hover:text-blue-900 transition-all duration-200 hover:scale-125"
            >
              {" "}
              <FaFacebook />{" "}
            </a>
          </div>
        </nav>
        <div className="md:hidden">
          <ul
            className={`fixed top-[55px] right-0 h-screen bg-white z-40 w-[100%]  transform transition-transform duration-500 ease-in-out
          ${
            IsMenuOpen
              ? "translate-x-0 shadow-2xl shadow-black"
              : "translate-x-full "
          }`}
          >
            {["/", "/blog", "/contact", "/about", "/login"].map(
              (path, index) => (
                <li
                  key={index}
                  className="py-2 px-4 text-center border-b border-gray-600 hover:text-red-600 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <NavLink to={path}>
                    <p className=" text-gray-900 hover:text-blue-600">
                      {
                        ["Home", "My Blog", "Contact us", "About us", "Login"][
                          index
                        ]
                      }
                    </p>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
