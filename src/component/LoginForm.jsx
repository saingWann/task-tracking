import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Form, Formik } from "formik";
import TextInput from "./input/TextInput";
import * as Yup from "yup";

const LoginForm = () => {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/sign-in");
  };
  return (
    <main className=" h-screen bg-no-repeat bg-cover overflow-y-hidden">
      <section className=" mx-auto w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center lg:mt-20 mt-10"
          >
            <div className="text-center lg:text-5xl md:text-3xl text-xl text-gray-600 font-thin  flex  items-end flex-wrap">
              <p className="pe-2">Welcome back to</p>
              <p className="block font-bold lg:text-6xl md:text-5xl text-3xl text-purple-700 ">
                KeepOnTrack.
              </p>
            </div>
            <p className="text-xl w-full text-center max-sm:text-starts pb-10 pt-4">
              Please login to continue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-10 shadow-lg  bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 "
          >
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto ">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Log in
              </h2>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                  password: Yup.string()
                    .min(8, "Password must be at least 8 characters")
                    .matches(
                      /[0-9]/,
                      "Password must contain at least one number"
                    )
                    .required("Password is required"),
                })}
              >
                <Form action="#" method="POST" className="mt-8 ">
                  <div className="space-y-5">
                    <TextInput
                      type="email"
                      name="email"
                      id="email"
                      label="Email"
                      placeholder="Enter email to get started"
                    />

                    <TextInput
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      label="Password"
                    />
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-md focus:outline-none hover:bg-purple-700 focus:bg-purple-700"
                      >
                        Log in
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>

              <p className="mt-10 flex text-base text-gray-600">
                Don’t have an account?
                <button
                  onClick={handleNav}
                  className="font-medium ms-auto text-purple-600 transition-all duration-200 hover:text-purple-700 hover:underline focus:text-purple-700"
                >
                  Create a free account
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LoginForm;
