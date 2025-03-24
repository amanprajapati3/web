import React from "react";
import "./Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="bg-black p-7 sm:p-20 ">
        <h1 className="text-white text-center text-4xl mb-4 sm:text-7xl"> Contact Page</h1>
      </div>

      <h1 className="text-3xl m-3 sm:text-5xl sm:p-7">Contact Us</h1>
      <hr />
      <div>
        <div className="flex justify-center ">
        <form action={"/registered"} className="ml-5 lg:text-xl" >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-300 pl-2 my-3 w-[300px] sm:w-[500px]"
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Your E-mail"
              name="email"
              required
             className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-300 pl-2 my-3 w-[100%]"
            />{" "}
            <br />
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              required
              className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-300 pl-2 my-3 w-[100%]"
            />{" "}
            <br />  
            <button type="submit" className="rounded-md bg-blue-800 active:bg-blue-500 text-white mt-1 mb-4 w-[100%] py-1">
                Submit
            </button>
          </form>
        </div>
        <div className="m-9 sm:text-2xl">
        <h1 className="text-3xl pb-4 ">Company Information</h1>
          <p className="mb-2"><a href="#" className="text-pink-900 font-semibold border-b-2 hover:border-gray-600 hover:text-red-900 line-clamp-6"> The Creative80 Room Ltd</a></p>
          <p className="mb-2"><a href="#" className="text-pink-900 font-semibold border-b-2 hover:border-gray-600 line-clamp-6 over:text-red-900">Registered in England #38630361</a></p>
          <p className="mb-2"><a href="#" className="text-pink-900 font-semibold border-b-2 hover:border-gray-600 line-clamp-6 over:text-red-900">75 Copthorne Way, Calow, S44 2LZ, UK</a></p>
        </div>
      </div>

      {/* Footer section */}

      <Footer />
    </>
  );
};

export default Contact;
