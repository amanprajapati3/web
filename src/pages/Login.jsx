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
      <div className="">
        <form className=" p-4 md:grid md:grid-cols-2  ">
          <fieldset className="">
            <legend>
              <h1 id="contact" className="text-white sm:text-7xl text-5xl m-6">
                Contact Me
              </h1>
            </legend>
            <div className="signin mb-20 ">
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
                  <div className="links">
                    <a href="#">Forgot Password</a>
                    <a href="#">Signup</a>
                  </div>
                  <div className="inputBox">
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Footer section */}

      <Footer />
    </>
  );
};

export default Login;
