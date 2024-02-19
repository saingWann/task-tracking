import { useContext } from "react";
import DataContext from "../Context/Contextapi";
import Pagination from "./Pagination";
import IconType from "./IconType";
import { useSelector } from "react-redux";

const Categories = () => {
  const { todoArray } = useContext(DataContext);

  const activeTab = useSelector((state) => state.activeTab);
  return (
    <div className="w-full ms-auto  max-sm:px-10">
      <div className="flex justify-between items-center gap-5 border-b-2 pb-5 max-sm:border-t-2 border-black max-sm:pt-5">
        <div className="flex gap-3 mt-auto ">
          <p className="font-bold flex gap-2 pointer-events-none">
            <IconType type={activeTab} />
            {activeTab}
          </p>
        </div>
        <Pagination cardsPerPage={6} totalCards={todoArray.length} />
      </div>
    </div>
  );
};

export default Categories;
