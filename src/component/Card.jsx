import { useContext, useState } from "react";
import Carditem from "./Carditem";
import DataContext from "../Context/Contextapi";
import Pagination from "./Pagination";
import {motion} from 'framer-motion';
import { CircleSlash2 } from "lucide-react";


const Card = () => {
  const { todoArray,currentPage, setCurrentPage } = useContext(DataContext);

  const [cardPerPage] = useState(6);

  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const currentTodoArray = todoArray.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <section className="w-[85%] flex flex-col ms-auto px-10 text-gray-600 body-font relative my-10">
      <motion.div

      className="flex lg:flex-row flex-wrap flex-col">
        {todoArray.length === 0 ? <div className="w-full h-64 flex flex-col items-center justify-center">
        <CircleSlash2 size={100} className="opacity-50"/>
          <h1 className="text-center mt-10 text-3xl">There is no task in this category!</h1> 
        </div>:
        currentTodoArray.map((task,index) => (
          <Carditem key={task.id} task={task} index={index}/>
        ))}
      </motion.div>

      <div className="self-center mt-5 absolute -top-28 left-48">
          <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} cardsPerPage={cardPerPage} totalCards={todoArray.length}/>
      </div>
    </section>
  );
};

export default Card;
