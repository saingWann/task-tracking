import React from 'react'

const Pagination = ({cardsPerPage, totalCards,setCurrentPage,currentPage}) => {

    const pageNumber = [];
    
    for(let i = 1 ; i <= Math.ceil(totalCards / cardsPerPage); i++ ){
        pageNumber.push(i);
    }


  return (
    <div className='flex gap-10 '>
        {pageNumber.map(number => (

          <button key={number} onClick={() => setCurrentPage(number)} className={`rounded-lg border border-black px-4 py-2 active:scale-95 hover:bg-black hover:text-white 
          ${currentPage == number ? "bg-black text-white" : ""}`}>   {number}
          </button>

        ))}
    </div>
  )
}

export default Pagination