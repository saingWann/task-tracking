import React from "react";

const Benifits = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col lg:gap-20 gap-10">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt="photo"
            />
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                alt="vector"
              />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div
                className="max-w-xs bg-purple-700/30 rounded-lg sm:max-w-md xl:max-w-md
              bg-clip-padding backdrop-filter backdrop-blur-lg"
              >
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-white sm:text-lg">
                        “You can make it simple with KeepOnTrack.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Streamlined Organization
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 lg:mt-9 mt-3">
              Take control of your busy life and stay organized with ease. Our
              task management tool provides a structured system to categorize
              tasks, set deadlines, and manage important projects. Say goodbye
              to chaos and hello to a clutter-free, organized lifestyle.
            </p>
          </div>
        </div>

        {/* 2nd benifit */}
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-6 md:mt-10">
          <div className="2xl:pl-16 lg:order-1 order-2">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Stress Reduction
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 lg:mt-9 mt-3">
              Experience peace of mind knowing that your tasks and priorities
              are organized and under control. Our tool eliminates the overwhelm
              of managing multiple responsibilities, allowing you to approach
              each day with clarity and confidence.
            </p>
          </div>
          <div className="relative lg:mb-12 lg:order-2 order-1 ">
            <img
              className="absolute -left-0 -bottom-8 xl:-bottom-12 xl:-left-4"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt="photo"
            />
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                alt="vector"
              />
            </div>
            <div className="absolute right-0 pl-12 bottom-8 xl:bottom-20">
              <div
                className="max-w-xs bg-purple-700/30 rounded-lg sm:max-w-md xl:max-w-md
              bg-clip-padding backdrop-filter backdrop-blur-lg"
              >
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-white sm:text-lg">
                        “You made it so simple. My new site is so much faster
                        and easier to work with than my old site.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd benifit */}
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-6">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt="photo"
            />
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                alt="vector"
              />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div
                className="max-w-xs bg-purple-700/30 rounded-lg sm:max-w-md xl:max-w-md
              bg-clip-padding backdrop-filter backdrop-blur-lg"
              >
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-white sm:text-lg">
                        “You made it so simple. My new site is so much faster
                        and easier to work with than my old site.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Enhanced Personal Productivity
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 mt-9">
              Maximize your personal productivity with our intuitive task
              management tool. Effortlessly organize your tasks, set priorities,
              and track progress, all within one convenient platform. Spend less
              time managing your to-do list and more time accomplishing your
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
