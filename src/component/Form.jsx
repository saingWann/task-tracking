import { CopyX } from "lucide-react";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DataContext from "../Context/Contextapi";

const Form = ({ setShowForm, showForm }) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    id: 0,
    detail: "",
    type: "",
    priority: "",
    complete: false,
    moveToTrash : false
  });

  const [Characters,setCharacters] = useState(0);

  const {addNewTodoToServer} = useContext(DataContext)

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
    const createdDate = new Date().getDate();
    const createdMonth = new Date().toLocaleString("default", {
      month: "short",
    });
    const createdHour = new Date().getHours();
    const createdMinutes = new Date().getMinutes();
    const createdTime = {
      day: createdDate,
      time: `${createdHour}:${
        createdMinutes < 10 ? "0" + createdMinutes : createdMinutes
      }`,
      month: createdMonth,
    };
    const newData = { ...newTodo, id: new Date().getTime(), createdTime };
    setNewTodo(newData);
    addNewTodoToServer(newData);
  };


  const checkCharacters = (e) => {
    const length = e.target.value.length;
    setCharacters(length);
  }


  return (
    <div className="z-10 w-full h-screen top-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-50 ">
      <form
        onSubmit={(e) => handleSubmitForm(e)}
        className="lg:w-1/3 md:w-1/2 rounded-lg bg-white flex flex-col  w-full md:py-8 mt-8 md:mt-0 p-10 relative">
        <span
          className="absolute top-10 right-10 hover:scale-105 cursor-pointer active:scale-100"
          onClick={() => setShowForm(false)}>
          <CopyX />
        </span>

        <h2 className="text-gray-900 text-xl mb-1 font-medium">Add new todo</h2>

        <p className="leading-relaxed text-sm border-b-2 pb-2 mb-5 text-gray-600">
          Let me walk through the day with you{" "}
        </p>

        <div className="relative mb-4">
          <label htmlFor="name" className="font-semibold">
            Title
          </label>
          <input
            required
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
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
            value={newTodo.priority}
            onChange={(e) =>
              setNewTodo({ ...newTodo, priority: e.target.value })
            }
            id="select-1"
            className="mt-2 p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
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
            value={newTodo.type}
            onChange={(e) => setNewTodo({ ...newTodo, type: e.target.value })}
            id="select-1"
            className="mt-2 p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
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
            value={newTodo.detail}
            onChange={(e) => {
              setNewTodo({ ...newTodo, detail: e.target.value });
              checkCharacters(e);
            }}
            maxLength={100}
            placeholder="Add more detail..."
            id="message"
            name="message"
            className="w-full mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          <p className="absolute bottom-5 right-5 text-xs text-gray-400">
            Characters( {Characters} /100 )
          </p>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Add Now
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </form>
    </div>
  );
};

export default Form;
