import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Form, Formik } from "formik";
import TextInput from "./input/TextInput";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/authentication";

const SignInForm = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleNav = () => {
    nav("/login");
  };

  const handleSubmit = (value) => {
    dispatch(addUser(value));
    alert("Register successful! proceed to login.");
    nav("/login");
  };

  return (
    <main className=" min-h-screen">
      <section className=" mx-auto w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center  mt-10"
          >
            <div className="text-center lg:text-5xl md:text-3xl text-xl text-gray-600 font-thin  flex  items-end flex-wrap">
              <p className="pe-2">Welcome to</p>
              <p className="block font-bold lg:text-6xl md:text-5xl text-3xl text-purple-700 ">
                KeepOnTrack.
              </p>
            </div>
            <p className="text-xl w-full text-center max-sm:text-starts  pt-4">
              Please sign in to continue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-10 shadow-lg  bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 lg:w-[40%] w-full border-2 border-purple-900/20 mt-10"
          >
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto ">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign in
              </h2>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Enter username"),
                  email: Yup.string()
                    .email("*Invalid email address*")
                    .required("Required"),
                  password: Yup.string()
                    .min(8, "*Password must be at least 8 characters*")
                    .matches(
                      /[0-9]/,
                      "*Password must contain at least one number*"
                    )
                    .required("*Password is required*"),
                  confirmPassword: Yup.string()
                    .oneOf(
                      [Yup.ref("password"), null],
                      "*Passwords must match*"
                    )
                    .required("*Password is required*"),
                })}
                onSubmit={(value) => {
                  handleSubmit(value);
                }}
              >
                <Form action="#" method="POST" className="mt-8 ">
                  <div className="space-y-5">
                    <TextInput
                      type="text"
                      name="name"
                      id="name"
                      label="Username"
                      placeholder="Enter username to get started"
                    />

                    <TextInput
                      type="email"
                      name="email"
                      id="email"
                      label="Email"
                      placeholder="Enter email address"
                    />

                    <TextInput
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      label="Password"
                    />
                    <TextInput
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Enter your password"
                      label="Confirm Password"
                    />
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-md focus:outline-none hover:bg-purple-700 focus:bg-purple-700"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
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
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SignInForm;
