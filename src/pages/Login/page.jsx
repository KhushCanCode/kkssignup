// src/components/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";
import plants from "../assets/plants.png";

function Login() {
 
  return (
    <>
      <div className="signupPage h-screen p-10 flex flex-col items-center justify-center bg-honeydew overflow-hidden z-0 ">
        <div className="circle-tr absolute h-96 w-96 bg-jungle_green -right-20 -top-24 rounded-full z-10 "></div>
        <div className="circle-bl absolute h-96 w-96 bg-jungle_green -left-20 -bottom-24 rounded-full z-10 "></div>

        <div className=" white-box  px-1 max-h-screen py-2 w90 md:w-4/5 md:py-6  lg:h-3/4 lg:w-3/4 bg-white rounded-xl z-20 shadow-xl lg:px-5 flex items-center justify-center">
          

          <div className="left-box bg-white h90 w-full lg:w-1/2 ">
          
              <div className="max-w-md mx-auto ">
                <div className="text-center ">
                  <h1 className="my-3 text-3xl font-semibold text-jet">
                    Log In
                  </h1>
                  <p className="text-sm text-center text-gray-400">Don't have an account? <Link to="/" className="text-jungle_green font-semibold hover:underline focus:underline focus:text-red-400">Sign Up</Link>.</p>
                </div>
                <div className="m-3 my-14">
                  <form action="">
                   
                    <div className="mb-3">
                      <label
                        for="email"
                        class="block mb-1 text-sm text-gray-500 "
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        class="w-full px-3 py-2 placeholder-gray-500 text-gray-800  border-b-2 border-b-ash_gray-400 focus:outline-none  "
                      />
                    </div>

                    <div className="mb-14">
                      <label
                        for="password"
                        class="block mb-1 text-sm text-gray-500 "
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="email"
                        placeholder="Strong password"
                        class="w-full px-3 py-2 placeholder-gray-500 text-gray-800  border-b-2 border-b-ash_gray-400 focus:outline-none  "
                      />
                    </div>

                    <div className="mb-3 flex justify-center">
                      <button
                        type="button"
                        class="w-3/4 px-3 py-4 font-semibold text-white bg-jungle_green rounded-md hover:bg-jungle_green-200 focus:outline-none"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
          </div>

          <div className="right-box hidden bg-honeydew w-1/2 h90 rounded-l-xl overflow-hidden relative lg:p-8 lg:flex flex-col items-center justify-center">
            <div className=" absolute h-60 w-60 right-0 top-0 rounded-bl-full z-10 bg-gradient-to-tr from-jungle_green to-yellow-100 transition hover:from-yellow-100 hover:to-jungle_green"></div>
            <h1 className="text-3xl text-jet font-bold text-center z-20 mb-4">
              Welcome back to <span className="text-5xl text-yellow-400">KabadiKorner!</span>
            </h1>
            <p className="text-center text-gray-500 mb-8 z-20">
              We are a community, together helping thousands of people connect
              with the local ragpickers.
            </p>
            <img src={plants} alt="..." className="absolute bottom-0" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
