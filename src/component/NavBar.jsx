import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  const nav = useNavigate();
  const handleNav = (path) => {
    nav(path);
  };
  return (
    <>
      <header className="bg-black inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="pr-10">
              <button
                onClick={() => handleNav("allTasks")}
                href="#"
                className="text-white font-bold text-xl"
              >
                KeepOnTrack.
              </button>
            </div>

            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
              <button
                onClick={() => handleNav("login")}
                className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
              >
                login
              </button>
              <button
                onClick={() => handleNav("sign-in")}
                className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
                role="button"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
