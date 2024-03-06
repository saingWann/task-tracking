import { Carditem, Categories } from "./index";
import { motion, AnimatePresence } from "framer-motion";
import { CircleSlash2 } from "lucide-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentData, renderByType } from "../features/currentTasks";

const Card = () => {
  const { renderByCategory, loading, currentTasks } = useSelector(
    (state) => state.currentTasks
  );

  const isChange = useSelector((state) => state.isChange);

  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.currentPage);
  const { currentUser, allUsers } = useSelector((state) => state.allUsers);

  const cardPerPage = 6;
  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const currentTodoArray = renderByCategory.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  useEffect(() => {
    dispatch(fetchCurrentData(currentUser.id));
    dispatch(renderByType(activeTab));
  }, [isChange, currentPage]);

  if (loading) {
    return <h1>laoding .... loading</h1>;
  }
  if (renderByCategory) {
    return (
      <section className="lg:w-[85%] md:w-[75%] w-full flex flex-col ms-auto lg:px-10 md:px-10 text-gray-600 body-font relative lg:mt-10 my-5">
        <Categories />

        {renderByCategory.length === 0 ? (
          <div className="w-full h-96 flex flex-col items-center justify-center ">
            <CircleSlash2 size={100} className="opacity-50" />

            <h1 className="text-center mt-10 lg:text-3xl">
              There is no task in this category!
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1  lg:grid-cols-3 lg:order-1 -order-1 items-center">
            {currentTodoArray.map((task, index) => (
              <Carditem key={task.id} task={task} index={index} />
            ))}
          </div>
        )}
      </section>
    );
  }
};

export default Card;
