import React, { useEffect, useRef, useState } from "react";

import { motion, useAnimation } from "framer-motion";

const BenifitsCard = ({ title, body, imgUrl, message, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const headerAnimate = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const bottom = ref.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        // console.log(windowHeight, top, bottom);
        if (top > windowHeight || bottom < 100) {
          setIsVisible(false);
        } else {
          //   console.log(bottom);
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
      headerAnimate.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -100 });
      headerAnimate.start({ opacity: 0, y: -100 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12"
    >
      <div
        className={`relative lg:mb-12 ${
          index === 1 ? " lg:order-2" : "order-1"
        }`}
      >
        <img
          className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
          alt="photo"
        />
        <div className="pl-12 pr-6">
          <img className="relative" src={imgUrl} alt="vector" />
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
                    {message}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={headerAnimate}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`2xl:pl-16 order-1`}
      >
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
          {title}
        </h2>
        <p className="text-xl leading-relaxed text-gray-900 lg:mt-9 mt-3">
          {body}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BenifitsCard;
