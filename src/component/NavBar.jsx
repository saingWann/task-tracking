import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../features/auth/authentication";
const NavBar = () => {
  const { currentUser } = useSelector((state) => state.allUsers);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleNav = (path) => {
    nav(path);
  };

  const handleLogOut = () => {
    dispatch(setCurrentUser({}));
    localStorage.removeItem("auth");
    nav("/");
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
                className="text-white font-bold text-xl hover:text-purple-200"
              >
                KeepOnTrack.
              </button>
            </div>

            {currentUser.token ? (
              <div className="lg:flex lg:items-center lg:justify-end  sm:ml-auto">
                <button
                  onClick={() => handleNav("login")}
                  className="hidden lg:inline-block items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white hover:bg-white/40 focus:bg-white/40 rounded-lg"
                >
                  {currentUser.name}
                </button>
                <button
                  onClick={handleLogOut}
                  className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white hover:bg-white/40 focus:bg-white/40 rounded-lg"
                  role="button"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="lg:flex lg:items-center lg:justify-end gap-4 sm:ml-auto">
                <button
                  onClick={() => handleNav("login")}
                  className="hidden lg:inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
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
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
