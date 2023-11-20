import { useContext, useState } from "react";
import Carditem from "./Carditem";
import DataContext from "../Context/Contextapi";
import Pagination from "./Pagination";

const Card = () => {
  const { todoArray } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(6);

  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const currentTodoArray = todoArray.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className="w-[85%] flex flex-col ms-auto px-10 text-gray-600 body-font relative my-10">
      <div className="flex lg:flex-row flex-wrap flex-col">
        {currentTodoArray.map((task) => (
          <Carditem key={task.id} task={task} />
        ))}
      </div>

      <div className="self-center mt-5 absolute -top-28 left-48">
          <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} cardsPerPage={cardPerPage} totalCards={todoArray.length}/>
      </div>
    </section>
  );
};

export default Card;
