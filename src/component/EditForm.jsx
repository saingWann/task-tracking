import { CopyX } from "lucide-react";
import { motion as m } from "framer-motion";

import React, { useContext, useState } from "react";
import DataContext from "../Context/Contextapi";

import { useDispatch } from "react-redux";
import { toggleEditState } from "../redux/formSlice";

const EditForm = () => {
  const [Characters, setCharacters] = useState(0);
  const { editCardItem, taskToEdit, setTaskToEdit } = useContext(DataContext);
  const dispatch = useDispatch();

  const checkCharacters = (e) => {
    const length = e.target.value.length;
    setCharacters(length);
  };

  const handleEditSubmitForm = (e) => {
    e.preventDefault();
    editCardItem(taskToEdit.id);
    dispatch(toggleEditState());
  };

  // animation stuff
  const formAnimation = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        type: "tween",
      },
    },
  };

  return (
    <m.div className="z-10 w-full h-screen top-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-50 ">
      <m.form
        variants={formAnimation}
        initial="hidden"
        animate="show"
        onSubmit={(e) => handleEditSubmitForm(e)}
        className="lg:w-1/3 md:w-1/2 rounded-lg bg-white flex flex-col  w-full md:py-8 mt-8 md:mt-0 p-10 relative"
      >
        <span
          className="absolute top-10 right-10 hover:scale-105 cursor-pointer active:scale-100"
          onClick={() => {
            dispatch(toggleEditState());
          }}
        >
          <CopyX className="text-orange-500" />
        </span>

        <h2 className="text-gray-900 text-xl mb-1 font-medium">
          Update task info
        </h2>

        <p className="leading-relaxed text-sm border-b-2 pb-2 mb-5 text-gray-600">
          Let me walk through the day with you
        </p>

        <div className="relative mb-4">
          <label htmlFor="name" className="font-semibold">
            Title
          </label>
          <input
            required
            value={taskToEdit.title}
            onChange={(e) =>
              setTaskToEdit({ ...taskToEdit, title: e.target.value })
            }
            type="text"
            id="name"
            placeholder="Enter title..."
            name="name"
            className="w-full bg-white rounded border border-gray-300 mt-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="font-semibold">
            Priority
          </label>
          <select
            required
            value={taskToEdit.priority}
            onChange={(e) =>
              setTaskToEdit({ ...taskToEdit, priority: e.target.value })
            }
            id="select-1"
            className="mt-2 p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          >
            <option disabled={true} value="">
              -- Set the priority --
            </option>
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="font-semibold">
            Priority
          </label>
          <select
            required
            value={taskToEdit.type}
            onChange={(e) =>
              setTaskToEdit({ ...taskToEdit, type: e.target.value })
            }
            id="select-1"
            className="mt-2 p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          >
            <option disabled={true} value="">
              -- Choose the type --
            </option>
            <option>Home</option>
            <option>Personal</option>
            <option>Business</option>
            <option>Study</option>
          </select>
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="font-semibold">
            Detail
          </label>
          <textarea
            value={taskToEdit.detail}
            onChange={(e) => {
              setTaskToEdit({ ...taskToEdit, detail: e.target.value });
              checkCharacters(e);
            }}
            maxLength={100}
            placeholder="Add more detail..."
            id="message"
            name="message"
            className="w-full mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
          <p className="absolute bottom-5 right-5 text-xs text-gray-400">
            Characters( {Characters} /100 )
          </p>
        </div>
        <p className="text-xs text-center text-gray-500 mb-3">
          By clicking the "Update" button the task info will be updated.
        </p>
        <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Update
        </button>
      </m.form>
    </m.div>
  );
};

export default EditForm;
