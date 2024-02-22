import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/currentPage";

const Pagination = ({ cardsPerPage, totalCards }) => {
  const currentPage = useSelector((state) => state.currentPage);
  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumber.push(i);
  }
  useEffect(() => {
    if (pageNumber.length === 1) dispatch(setCurrentPage(1));
  }, [activeTab]);

  return (
    <div className="flex gap-5 w-fit">
      {pageNumber.map((number) => (
        <button
          key={number}
          onClick={() => dispatch(setCurrentPage(number))}
          className={`rounded-md text-sm border border-black px-4 py-2 active:scale-95 hover:bg-black hover:text-white 
          ${currentPage == number ? "bg-black text-white" : ""}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
