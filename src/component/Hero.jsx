import { heroImg1 } from "../assets/constant";
import { useNavigate } from "react-router-dom";
import TextInput from "./input/TextInput";
import { Formik } from "formik";

const Hero = () => {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/sign-in");
  };

  return (
    <>
      <section className="pt-10  sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold leading-tight text-black md:text-3xl text-xl lg:text-5xl lg:leading-tight">
              Empower Your Productivity with{" "}
              <span className="text-purple-700 ">KeepOnTrack</span> Effortlessly
              Manage Your Tasks, Seamlessly Organize Your Life.
            </h2>
            <p className="mt-6 lg:text-lg text-base text-gray-900">
              Ready to take control of your tasks? Sign up now and start
              managing with ease!
            </p>
            <button
              onClick={handleNav}
              className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:bg-purple-700"
              role="button"
            >
              Sign up now for free
            </button>
            {/* <Formik>
              <TextInput name="firstName" id="firstName" label="first Name" />
            </Formik> */}
          </div>
        </div>
        <div className="container mx-auto 2xl:px-12 shadow-lg">
          <img
            className="w-full mt-6"
            src={heroImg1}
            alt="page preview photo"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
