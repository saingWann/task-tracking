import React, { useContext, useEffect, useState } from "react";
import { sidebarMenu } from "../constant";
import { Copyright,UserCircle,Briefcase,BookOpenText,Home,Trash2,MenuSquare, Check, CheckCircle2 } from "lucide-react";
import DataContext from "../Context/Contextapi";
import { api } from "../Api";

const Sidebar = () => {
  const [baseTodo, setBaseTodo] = useState([]);
  const { renderByType, setActiveTab, activeTab,todoArray } = useContext(DataContext);

  const fetchData = async () => {
    const data = await api.get("/todolist");
   
    setBaseTodo(data.data);
  };


  useEffect(() => {
    fetchData();
  }, [todoArray]);

  const countByType = (type) => {
    if (type === "Personal") {
      const personal = baseTodo.filter(
        (task) => task.type === "Personal" && task.moveToTrash === false && task.complete === false
      ).length;
      return personal;
    } else if (type === "Home") {
      const home = baseTodo.filter((task) => task.type === "Home" && task.moveToTrash === false && task.complete === false ).length;
      return home;
    } else if (type === "Study") {
      const study = baseTodo.filter((task) => task.type === "Study" && task.moveToTrash === false && task.complete === false).length;
      return study;
    } else if (type === "Business") {
      const bussiness = baseTodo.filter(
        (task) => task.type === "Business" && task.moveToTrash === false && task.complete === false
      ).length;
      return bussiness;
    } else if (type === "All") {
      const all = baseTodo.filter((task) => task.moveToTrash === false && task.complete === false).length;
      return all;
    }else if (type === "Done") {
      const all = baseTodo.filter((task) => task.complete === true).length;
      return all;
    }else{
      const trash = baseTodo.filter((task) => task.moveToTrash == true).length;
      return trash;
    }
  };

  const iconType = (type) => {
    if (type === "Personal") {
     return < UserCircle size={20}/>
    } else if (type === "Home") {
      return <Home size={20}/>
    } else if (type === "Study") {
     return <BookOpenText size={20}/>
    } else if (type === "Business") {
    return <Briefcase size={20}/>
    } else if (type === "All") {
     return <MenuSquare size={20}/>
    }else if (type === "Done") {
     return <CheckCircle2 size={20}/>
    }else{
     return <Trash2 size={20}/>
    }
  };


  return (
    <div className="w-[15%] min-h-screen flex flex-col justify-between fixed bg-gray-100 top-0">
      <div>
        <div className="flex flex-col shadow-lg w-full px-5 py-4">
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
                onClickCapture={() => {
                  renderByType(menu);
                  setActiveTab(menu);
                }}>
                {iconType(menu)}
                {menu}
                <span
                  className={` text-gray-400 ${
                    activeTab === menu ? "text-white" : ""
                  }`}>
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
