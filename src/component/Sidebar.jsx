import React, { useContext, useEffect, useState } from "react";
import { sidebarMenu } from "../constant";
import {
  Copyright,
  UserCircle,
  Briefcase,
  BookOpenText,
  Home,
  Trash2,
  MenuSquare,
  CheckCircle2,
} from "lucide-react";
import DataContext from "../Context/Contextapi";
import { api } from "../Api";

const Sidebar = () => {
  const [baseTodo, setBaseTodo] = useState([]);
  const { setActiveTab, activeTab, todoArray, setCurrentPage, setTodoArray } =
    useContext(DataContext);

  const fetchData = async () => {
    const response = await api.get("/todolist");
    setBaseTodo(response.data);
  };

  useEffect(() => {
    fetchData();
    if (Math.ceil(todoArray.length / 6) === 1) {
      setCurrentPage(1);
    }
  }, [todoArray]);

  const countByType = (type) => {
    // console.log(type);
    if (type === "Trash bin") {
      const count = baseTodo.filter((task) => task.moveToTrash === true).length;
      return count;
    } else if (type === "All") {
      const count = baseTodo.filter(
        (task) => task.moveToTrash === false && task.complete === false
      ).length;
      return count;
    } else if (type === "Done") {
      const count = baseTodo.filter((task) => task.complete === true).length;
      return count;
    } else {
      const count = baseTodo.filter(
        (task) =>
          task.type === type &&
          task.moveToTrash === false &&
          task.complete === false
      ).length;
      return count;
    }
  };

  const iconType = (type) => {
    if (type === "Personal") {
      return <UserCircle size={20} />;
    } else if (type === "Home") {
      return <Home size={20} />;
    } else if (type === "Study") {
      return <BookOpenText size={20} />;
    } else if (type === "Business") {
      return <Briefcase size={20} />;
    } else if (type === "All") {
      return <MenuSquare size={20} />;
    } else if (type === "Done") {
      return <CheckCircle2 size={20} />;
    } else {
      return <Trash2 size={20} />;
    }
  };

  // filter by categories
  const renderByType = (type) => {
    if (type === "All") {
      setTodoArray(
        baseTodo.filter(
          (task) => task.moveToTrash !== true && task.complete === false
        )
      );
    } else if (type === "Trash bin") {
      setTodoArray(baseTodo.filter((task) => task.moveToTrash === true));
    } else if (type === "Done") {
      setTodoArray(baseTodo.filter((task) => task.complete === true));
    } else {
      const currentTodoArray = [...baseTodo];
      const filteredArray = currentTodoArray.filter(
        (task) =>
          task.type === type &&
          task.moveToTrash === false &&
          task.complete === false
      );
      setTodoArray(filteredArray);
    }
  };

  return (
    <div className="w-[15%] min-h-screen flex flex-col justify-between fixed top-0 bg-gray-50">
      <div>
        <div className="flex flex-col w-full px-5 py-4">
          <p className="font-bold text-xl">KeepOnTrack.</p>
          <p className="capitalize text-sm text-gray-500">stay progressive</p>
        </div>
        <hr />
        <div className="flex flex-col w-full p-5">
          <span className=" flex flex-col items-start gap-1 ">
            {sidebarMenu.map((menu, index) => (
              <button
                key={index}
                className={`flex gap-2 font-bold text-sm rounded-full uppercase w-fit hover:opacity-70  px-4 py-2 active:scale-95 ${
                  activeTab === menu ? "bg-black text-white" : ""
                }`}
                onClick={() => {
                  renderByType(menu);
                  setActiveTab(menu);
                }}
              >
                {iconType(menu)}
                {menu}
                <span
                  className={` text-gray-400 ${
                    activeTab === menu ? "text-white" : ""
                  }`}
                >
                  {countByType(menu)}
                </span>
              </button>
            ))}
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="font-semibold capitalize text-sm text-gray-500 flex gap-1">
          privacy terms
          <Copyright />
        </p>
        <p className="font-semibold capitalize text-sm text-gray-500">
          all right reserved
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
