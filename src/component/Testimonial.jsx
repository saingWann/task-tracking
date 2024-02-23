import React from "react";

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
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEp7-nspfY4U1d4TyNdZI-_xJFoj-za9bpg&usqp=CAU"
                    alt="michale"
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
                  <p className="text-lg text-black">
                    “Managing my tasks has never been easier! KeepOnTrack has
                    helped me stay organized and on top of my to-do list. I love
                    the simplicity and flexibility of the platform. Highly
                    recommended!”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Michael Smith
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Freelancer Designer
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5A5iI4_ZVoZj4WC22iBEDLbLH7kO8TbThQ&usqp=CAU"
                    alt="jenny"
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
                  <p className="text-lg text-black">
                    “I've tried many task management tools before, but
                    KeepOnTrack stands out from the rest. It's user-friendly,
                    intuitive, and packed with useful features. Thanks to this
                    tool, I've become much more productive and efficient in
                    managing my daily tasks.”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">Jenny</p>
                <p className="mt-1 text-base text-gray-600">
                  Marketing Manager at ABC Company
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt="David photo"
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
                  <p className="text-lg text-black">
                    “Since using KeepOnTrack, I've noticed a significant
                    improvement in my productivity. The interface is clean and
                    intuitive, making it easy to navigate and manage tasks
                    efficiently. I appreciate how seamlessly it integrates with
                    my existing workflows. I couldn't imagine my day without
                    it!”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  David Wilson
                </p>
                <p className="mt-1 text-base text-gray-600">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
