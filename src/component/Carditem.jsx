import React, { useContext, useState } from "react";
import { CheckSquare, Edit2Icon, Trash2Icon } from "lucide-react";
import DataContext from "../Context/Contextapi";

const Carditem = ({task}) => {
    const [showMore,setShowMore] = useState(false);
    const {deleteTodo} = useContext(DataContext);

    const setColor = () => {
      let color = ""
      
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
    }

    const confirmDelete = (id) => {
      console.log(id);
      if(confirm('Are you sure to delete the task from the list.')){
           deleteTodo(id)
      }
      return;
  }


  return (
    <div onMouseLeave={()=>{setShowMore(false)}} className="lg:w-1/3 p-5">
    <span className={`p-3 text-white rounded-t-lg font-bold block w-full ${setColor()} tracking-widest capitalize`}>
      {task.priority} 
    </span>
    <div className="h-fit max-h-[16rem] flex items-start py-8 px-4 bg-white border shadow-lg rounded-b-lg">
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
          <p className="uppercase font-medium w-fit bg-indigo-700 px-4 py-2 text-[10px] rounded-full text-white mb-1">
            {task.type}
          </p>
          <span className="flex gap-4">
            <button>
              <CheckSquare
                className="hover:opacity-50 active:scale-95"
                size={18}
              />
            </button>
            <button>
              <Edit2Icon
                className="hover:opacity-50 active:scale-95"
                size={18}
              />
            </button>
            <button onClick={() => confirmDelete(task.id)}>
              <Trash2Icon
                className="hover:opacity-50 active:scale-95"
                size={18}
              />
            </button>
          </span>
        </span>
        <h1 className="title-font uppercase text-xl font-medium text-gray-900 mb-3">
          {task.title}
        </h1>
        <p onClick={() => setShowMore(!showMore)}  className={`leading-relaxed mb-5 text-sm ${showMore? "line-clamp-4" : "line-clamp-2"}`}>{task.detail}</p>
        <p className="text-slate-400 text-end text-xs">
          {task.createdTime.time}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Carditem