import React, { useContext, useState } from "react";
import { CheckSquare, Edit2Icon, Trash2Icon } from "lucide-react";
import DataContext from "../Context/Contextapi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleEditState } from "../redux/formSlice";
import { deleteData, moveToBin } from "../redux/currentTasks";

const Carditem = ({ task, index }) => {
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();

  const setColor = () => {
    let color = "";

    switch (task.priority) {
      case "low":
        color = "bg-green-400";
        break;
      case "mid":
        color = "bg-orange-400";
        break;
      case "high":
        color = "bg-red-500";
        break;
    }
    return color;
  };

  const formAnimation = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        delay: index * 0.1,
        ease: "backInOut",
      },
    },
  };

  return (
    <motion.div
      variants={formAnimation}
      initial="hidden"
      animate="show"
      layout
      onMouseLeave={() => {
        setShowMore(false);
      }}
      className={`lg:w-1/2 xl:w-1/3 w-full p-5 `}
    >
      <span
        className={`p-3 text-white rounded-t-lg font-bold block w-full ${
          task.complete ? "bg-gray-300 text-black" : ""
        } ${setColor()} tracking-widest capitalize`}
      >
        {task.complete ? "Done" : task.priority}
      </span>
      <div
        className={`h-fit max-h-[16rem] flex items-start py-8 px-4 bg-white border shadow-lg rounded-b-lg `}
      >
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
            {task.createdTime.month}
          </span>
          <span className="font-medium text-lg text-gray-800 title-font leading-none">
            {task.createdTime.day}
          </span>
        </div>
        <div className="flex-grow pl-6">
          <span className="flex justify-between">
            <p
              className={`uppercase font-medium w-fit ${
                task.complete
                  ? "bg-gray-300 text-gray-600"
                  : "text-white bg-indigo-700"
              } px-4 py-2 text-[10px] rounded-full  mb-1`}
            >
              {task.type}
            </p>
            <span className="flex gap-4">
              <button
                className={` ${task.moveToTrash ? "pointer-events-none" : ""}`}
                onClick={() => HandleComplete(task.id, task.complete)}
              >
                <CheckSquare
                  className={`hover:opacity-50 active:scale-95  ${
                    !task.moveToTrash ? "text-green-600 font-bold" : ""
                  } `}
                  size={18}
                />
              </button>
              <button
                className={`${
                  task.complete || task.moveToTrash
                    ? "pointer-events-none cursor-none"
                    : ""
                }`}
              >
                <Edit2Icon
                  onClick={() => {
                    dispatch(toggleEditState());
                    setTaskToEdit(task);
                  }}
                  className={`hover:opacity-50 active:scale-95 ${
                    !task.complete && !task.moveToTrash
                      ? "text-orange-400 font-bold"
                      : ""
                  } `}
                  size={18}
                />
              </button>

              <button
                onClick={() => {
                  if (task.moveToTrash === true) {
                    dispatch(deleteData(task.id));
                  } else {
                    dispatch(moveToBin(task.id, task.moveToTrash));
                  }
                }}
              >
                <Trash2Icon
                  className={`hover:opacity-50 active:scale-95 text-red-600`}
                  size={18}
                />
              </button>
            </span>
          </span>
          <h1 className="title-font uppercase lg:text-xl text-base font-medium text-gray-900 mb-3">
            {task.title}
          </h1>
          <p
            onClick={() => setShowMore(!showMore)}
            className={`leading-relaxed mb-5 lg:text-sm text-xs ${
              showMore ? "line-clamp-4" : "line-clamp-2"
            }`}
          >
            {task.detail}
          </p>
          <p className="text-slate-400 text-end text-xs">
            {task.createdTime.time}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Carditem;
