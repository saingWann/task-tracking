import React, { useContext } from "react";
import {
  UserCircle,
  Briefcase,
  BookOpenText,
  Home,
  Trash2,
  MenuSquare,
  CheckCircle,
} from "lucide-react";
import DataContext from "../Context/Contextapi";
import Pagination from "./Pagination";

const Categories = () => {
  const { activeTab, currentPage, setCurrentPage, todoArray } =
    useContext(DataContext);

  const iconType = (type) => {
    if (type === "Personal") {
      return <UserCircle />;
    } else if (type === "Home") {
      return <Home />;
    } else if (type === "Study") {
      return <BookOpenText />;
    } else if (type === "Business") {
      return <Briefcase />;
    } else if (type === "All") {
      return <MenuSquare />;
    } else if (type === "Done") {
      return <CheckCircle />;
    } else {
      return <Trash2 />;
    }
  };

  return (
    <div className="w-full ms-auto  ">
      <div className="flex justify-between items-center gap-5 border-b-2 pb-5">
        <div className="flex gap-3 mt-auto">
          <p className="font-bold flex gap-2 pointer-events-none">
            {iconType(activeTab)}
            {activeTab}
          </p>
        </div>
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          cardsPerPage={6}
          totalCards={todoArray.length}
        />
      </div>
    </div>
  );
};

export default Categories;
