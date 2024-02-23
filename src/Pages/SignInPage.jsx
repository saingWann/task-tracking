import React from "react";
import { useNavigate } from "react-router-dom";
const SignInPage = () => {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/sign-in");
  };
  return (
    <main className=" h-screen bg-no-repeat bg-cover ">
      <section className=" mx-auto w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center  mt-10">
            <div className="text-center lg:text-5xl md:text-3xl text-xl text-gray-600 font-thin  flex  items-end flex-wrap">
              <p className="pe-2">Welcome to</p>
              <p className="block font-bold lg:text-6xl md:text-5xl text-3xl text-purple-700 ">
                KeepOnTrack.
              </p>
            </div>
            <p className="text-xl w-full text-center max-sm:text-starts  pt-4">
              Please sign in to continue.
            </p>
          </div>

          <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-10 shadow-lg  bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 ">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto ">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign in
              </h2>

              <form action="#" method="POST" className="mt-8 ">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email to get started"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-purple-600 focus:bg-white caret-purple-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>

                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-purple-600 focus:bg-white caret-purple-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="text-base font-medium text-gray-900"
                    >
                      Confirm Password
                    </label>

                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Enter your password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-purple-600 focus:bg-white caret-purple-600"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-md focus:outline-none hover:bg-purple-700 focus:bg-purple-700"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </form>

              <p className="mt-10 flex text-base text-gray-600">
                Already have an account?
                <button
                  onClick={handleNav}
                  className="font-medium ms-auto text-purple-600 transition-all duration-200 hover:text-purple-700 hover:underline focus:text-purple-700"
                >
                  Go to log in page
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
