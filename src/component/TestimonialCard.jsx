import React from "react";

const TestimonialCard = ({ imgUrl, name, job, feedback }) => {
  return (
    <div className="overflow-hidden bg-white rounded-md shadow">
      <div className="lg:px-8 lg:py-12 px-4 py-6">
        <div className="relative w-24 h-24 mx-auto">
          <img
            className="relative object-cover w-24 h-24 mx-auto rounded-full"
            src={imgUrl}
            alt={name}
          />
          <div className="absolute top-0 right-0 flex items-center justify-center bg-purple-600 rounded-full w-7 h-7">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z" />
            </svg>
          </div>
        </div>
        <blockquote className="mt-7">
          <p className="lg:text-base text-xs text-black">{feedback}</p>
        </blockquote>
        <p className="text-base font-semibold tex-tblack mt-9">{name}</p>
        <p className="mt-1 text-base text-gray-600">{job}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
