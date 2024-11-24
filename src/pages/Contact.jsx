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
        <form className=" p-4 md:grid md:grid-cols-2">
        <fieldset className="">
            <legend>
              <h1 id="contact" className="text-white sm:text-7xl text-5xl m-6">
                Contact Me
              </h1>
            </legend>
            <div className="signin mb-10 ">
              <div className="content">
                <div className="form">
                  <div className="sm:flex gap-12">
                    <div>
                      <div className="inputBox mb-5">
                        <input type="text" required />
                        <i>Enter your Name</i>
                      </div>
                      <div className="inputBox mb-5">
                        <input type="number" required />
                        <i>Phone Number</i>
                      </div>
                    </div>
                    <div>
                      <div className="inputBox mb-5">
                        <input type="email" required />
                        <i>E-mail address</i>
                      </div>
                      <div className="inputBox mb-5">
                        <input type="password" required />
                        <i>Password</i>
                      </div>
                    </div>
                  </div>
                  <div className="links text-black">
                    <a href="#">Forgot Password</a>
                    <a href="#">Signup</a>
                  </div>
                  <textarea name="" placeholder="Write your query here" className="p-2" id=""></textarea>
                  <div className="inputBox">
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
        </div>
        <div className="m-9 sm:text-2xl">
        <h1 className="text-3xl pb-4 sm:text-4xl">Company Information</h1>
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
