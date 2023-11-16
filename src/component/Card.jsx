import { CheckSquare, Edit2Icon, Trash2Icon } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <section class="w-[85%] ms-auto px-10 text-gray-600 body-font">
      <div class="flex lg:flex-row flex-col">
        {/* start */}
        <div class=" lg:w-1/3 p-5 ">
          <span className=" p-3 text-white rounded-t-lg font-bold block w-full bg-red-500 tracking-widest capitalize">
            High
          </span>
          <div class="h-fit flex items-start py-8 px-4 bg-white border shadow-lg rounded-b-lg">
            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
              <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                Jul
              </span>
              <span class="font-medium text-lg text-gray-800 title-font leading-none">
                18
              </span>
            </div>
            <div class="flex-grow pl-6">
              <span className="flex justify-between">
                <h2 class="tracking-widest uppercase text-xs title-font font-medium w-fit p-2 rounded-full text-white bg-indigo-500 mb-1">
                  home
                </h2>
                <span className="flex gap-4">
                <button>
                    <CheckSquare className="hover:opacity-50 active:scale-95" size={18} />
                  </button>
                  <button>
                    <Edit2Icon className="hover:opacity-50 active:scale-95" size={18} />
                  </button>
                  <button>
                    <Trash2Icon className="hover:opacity-50 active:scale-95" size={18} />
                  </button>
                </span>
              </span>
              <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                Buy some milk
              </h1>
              <p class="leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae sunt
              </p>
              <p className="text-slate-400 text-end text-xs">11:09 AM</p>
               
            </div>
          </div>
        </div>
        {/* end */}

        {/* start */}
        <div class=" lg:w-1/3 p-5 ">
          <span className=" p-3 text-white rounded-t-lg font-bold block w-full bg-green-500 tracking-widest">
            Mid
          </span>
          <div class="flex items-start py-8 px-4 bg-white border shadow-lg rounded-b-lg">
            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
              <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                Jul
              </span>
              <span class="font-medium text-lg text-gray-800 title-font leading-none">
                18
              </span>
            </div>
            <div class="flex-grow pl-6">
              <span className="flex justify-between">
                <h2 class="tracking-widest uppercase text-xs title-font font-medium w-fit p-2 rounded-full text-white bg-indigo-500 mb-1">
                  home
                </h2>
                <span className="flex gap-4">
                <button>
                    <CheckSquare className="hover:opacity-50 active:scale-95" size={18} />
                  </button>
                  <button>
                    <Edit2Icon className="hover:opacity-50 active:scale-95" size={18} />
                  </button>
                  <button>
                    <Trash2Icon className="hover:opacity-50 active:scale-95" size={18} />
                  </button>
                </span>
              </span>
              <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                Buy some milk
              </h1>
              <p class="leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae sunt
              </p>
              <p className="text-slate-400 text-end text-xs">11:09 AM</p>
            </div>
          </div>
        </div>
        {/* end */}

        {/* start */}
        <div class=" lg:w-1/3 p-5 ">
          <span className=" p-3 text-white rounded-t-lg font-bold block w-full bg-orange-500 tracking-widest">
            Low
          </span>
          <div class="flex items-start py-8 px-4 bg-white border shadow-lg rounded-b-lg">
            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
              <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                Jul
              </span>
              <span class="font-medium text-lg text-gray-800 title-font leading-none">
                18
              </span>
            </div>
            <div class="flex-grow pl-6">
              <span className="flex justify-between">
                <h2 class="tracking-widest uppercase text-xs title-font font-medium w-fit p-2 rounded-full text-white bg-indigo-500 mb-1">
                  home
                </h2>
                <span className="flex gap-4">
                  <button>
                    <CheckSquare className="hover:opacity-50 active:scale-95" size={18} />
                  </button>
                  <button>
                    <Edit2Icon className="hover:opacity-50 active:scale-95" size={18} />
                  </button>
                  <button>
                    <Trash2Icon className="hover:opacity-50 active:scale-95" size={18} />
                  </button>
                </span>
              </span>
              <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                Buy some milk
              </h1>
              <p class="leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae sunt
              </p>
              <p className="text-slate-400 text-end text-xs">11:09 AM</p>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </section>
  );
};

export default Card;
