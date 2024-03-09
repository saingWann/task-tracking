import React from "react";
import { useNavigate } from "react-router-dom";

const Cta = () => {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/sign-in");
  };
  return (
    <section className="py-0 max-w-7xl mx-auto lg:py-24 ">
      <div className="px-4 lg:h-[20rem] h-[15rem] lg:rounded-[2rem] shadow-xl mx-auto  sm:px-6 lg:px-8 flex flex-col items-center justify-center lg:gap-10 gap-5 bg-[url('./assets/ctabg.png')] bg-cover">
        <p className="text-white lg:text-3xl font-bold text-base text-center">
          Join us now,find the most Simple and Easiest way to manage your tasks.{" "}
        </p>
        <p className="text-gray-200 text-xs lg:text-sm text-center lg:px-52 px-10">
          Experience a seamless solution that simplify your task management and
          boost your productvity.Say goodbye to complexity and embrace a new era
          of efficient task manage with our supportive KeepOnTrack by your side
        </p>

        <button
          onClick={handleNav}
          className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:bg-purple-700"
          role="button"
        >
          Start for Free now
        </button>
      </div>
    </section>
  );
};

export default Cta;
