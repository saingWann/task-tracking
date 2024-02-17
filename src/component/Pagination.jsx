import React from "react";

const Pagination = ({
  cardsPerPage,
  totalCards,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumber.push(i);
  }

  // if(pageNumber.length ===1) setCurrentPage(1)

  return (
    <div className="flex gap-5 w-fit">
      {pageNumber.map((number) => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
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
