
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-950 text-white">
        <div className="p-7">
          <div className="flex justify-center items-center sm:gap-16 gap-4 flex-wrap">
            <div className="mb-4 ">
              <h1  className="text-2xl text-center">
                Category
              </h1>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Home</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">World</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Games</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Reference</a>
              </p>
            </div>
            <div className="mb-4">
              <h1  className="text-2xl text-center">
                Apple
              </h1>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Web</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">eCommerce</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Business</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Entertainment</a>
              </p>
            </div>
            <div className="mb-4">
              <h1  className="text-2xl text-center">
                Cherry
              </h1>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Media</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Brochure</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Nonprofit</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Education</a>
              </p>
            </div>
            <div className="mb-4">
              <h1  className="text-2xl text-center">
                Business
              </h1>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Interprenaur</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Personal</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Wiki</a>
              </p>
              <p className="p-1 text-center">
                {" "}
                <a href="#">Forum</a>
              </p>
            </div>
          </div>
          <div>
            
            <label htmlFor="" className="text-2xl sm:text-3xl">
              Subscribe For Updates
            </label>
            <center className=" sm:mt-5 md:gap-10 ">
              <input type="text" className="w-44  m-2 rounded-md h-10 mt-3 sm:p-6 md:w-[400px] " />
              <button className="border-white border-2 py-2 px-2 rounded-xl  sm:px-5">
                Subscribe
              </button>
            </center>
            <p className="sm:p-5 sm:w-5/6 sm:text-center md:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              provident placeat iste dignissimos ratione eius, amet
              reprehenderit
            </p>
            <div className="flex gap-5 m-3 justify-center text-2xl">
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
          </div>
        </div>
        <center className="pb-5">
          @ copyright | All Rights Reserved
        </center>
      </div>
    </>
  );
};

export default Footer;
