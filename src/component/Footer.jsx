import React from "react";
import { Twitter, Instagram, Github, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="py-10 bg-gray-900 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
              <ul className="flex items-center justify-start space-x-8">
                <li>
                  <a
                    href="#"
                    className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <Github />
                  </a>
                </li>
              </ul>
              <ul className="flex flex-wrap items-center justify-start mt-5 gap-x-8 sm:mt-0 gap-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-purple-200 transition-all duration-200 hover:text-white focus:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-purple-200 transition-all duration-200 hover:text-white focus:text-white"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-purple-200 transition-all duration-200 hover:text-white focus:text-white"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-sm text-purple-200 lg:mt-0">
              © Copyright 2024, All Rights Reserved by Day.dev
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
