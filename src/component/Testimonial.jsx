import React from "react";
import { testimonials } from "../utils/constant";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className=" mx-auto text-center">
            <h2 className="text-xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-3xl">
              Hear What Our Users Have to Say Discover how
              <span className="text-purple-600 px-3">KeepOnTrack</span>
              has helped people just like you take control of their tasks and
              boost their productivity.
            </h2>
          </div>
          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
