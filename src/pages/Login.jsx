import React from "react";
import "./Login.css";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <div className="bg-black p-7 sm:p-20">
        <h1 className="text-white text-center text-4xl mb-4 sm:text-7xl">
          {" "}
          Login Page
        </h1>
      </div>
      <h1 className="text-3xl m-3 sm:text-5xl sm:p-6">Log In</h1>
      <hr />
      <div className="flex justify-center">
      <form action={"/registered"} className="ml-5 lg:text-xl" >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="rounded-md outline-none border-2 border-gray-500 py-2 focus:bg-gray-300 pl-2 my-3 sm:w-[500px]"
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
              type="password"
              placeholder="Password"
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
            <button type="submit" className="rounded-md bg-blue-800 active:bg-blue-500 text-white mt-1 mb-4  w-[100%] py-1">
                Submit
            </button>
          </form>
      </div>

      {/* Footer section */}

      <Footer />
    </>
  );
};

export default Login;
