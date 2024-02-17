import { useContext, useState } from "react";
import Carditem from "./Carditem";
import DataContext from "../Context/Contextapi";
import { motion } from "framer-motion";
import { CircleSlash2 } from "lucide-react";
import Categories from "./Categories";

const Card = () => {
  const { todoArray, currentPage, setCurrentPage } = useContext(DataContext);

  const cardPerPage = 6;

  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const currentTodoArray = todoArray.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className="w-[85%] flex flex-col ms-auto px-10 text-gray-600 body-font relative my-10">
      <Categories />
      <motion.div className="flex lg:flex-row flex-wrap flex-col lg:order-1 -order-1">
        {todoArray.length === 0 ? (
          <div className="w-full h-64 flex flex-col items-center justify-center ">
            <CircleSlash2 size={100} className="opacity-50" />
            <h1 className="text-center mt-10 text-3xl">
              There is no task in this category!
            </h1>
          </div>
        ) : (
          currentTodoArray.map((task, index) => (
            <Carditem key={task.id} task={task} index={index} />
          ))
        )}
      </motion.div>
    </section>
  );
};

export default Card;
