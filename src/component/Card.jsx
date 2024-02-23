import { Carditem, Categories } from "./index";
import { motion } from "framer-motion";
import { CircleSlash2 } from "lucide-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { renderByType } from "../features/currentTasks";

const Card = () => {
  const { renderByCategory, loading, currentTasks } = useSelector(
    (state) => state.currentTasks
  );
  const isChange = useSelector((state) => state.isChange);
  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.currentPage);

  const cardPerPage = 6;
  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const currentTodoArray = renderByCategory.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  useEffect(() => {
    dispatch(renderByType(activeTab));
  }, [currentTasks, isChange, currentPage]);

  if (loading) {
    return <h1>laoding .... loading</h1>;
  }
  if (renderByCategory) {
    return (
      <section className="lg:w-[85%] md:w-[75%] w-full flex flex-col ms-auto lg:px-10 md:px-10 text-gray-600 body-font relative lg:mt-10 ">
        <Categories />
        <motion.div className="flex lg:flex-row flex-wrap flex-col lg:order-1 -order-1">
          {renderByCategory.length === 0 ? (
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
  }
};

export default Card;
