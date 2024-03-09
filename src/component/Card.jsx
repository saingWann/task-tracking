import { Carditem, Categories } from "./index";
import { CircleSlash2 } from "lucide-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentData, renderByType } from "../features/currentTasks";
import "../styles/loading.css";
import "ldrs/spiral";

// Default values shown

const Card = () => {
  const { renderByCategory, loading, currentTasks } = useSelector(
    (state) => state.currentTasks
  );
  const { currentUser, allUsers } = useSelector((state) => state.allUsers);

  const currentPage = useSelector((state) => state.currentPage);

  const activeTab = useSelector((state) => state.activeTab);

  const dispatch = useDispatch();

  const isChange = useSelector((state) => state.isChange);

  useEffect(() => {
    // console.log(allUsers);
    if (currentUser) {
      dispatch(renderByType(activeTab));
    }
  }, [isChange, currentTasks]);

  useEffect(() => {
    // dispatch(setCurrentUser(currentUser));
    if (localStorage.getItem("currentUserId")) {
      // console.log("fetch all task");
      dispatch(fetchCurrentData(localStorage.getItem("currentUserId")));
    }
  }, [isChange]);

  const cardPerPage = 6;
  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const currentTodoArray = renderByCategory.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  // console.log(currentTodoArray);

  if (loading) {
    return (
      <div className="lg:w-[85%] md:w-[75%] w-full flex flex-col items-center justify-center ms-auto h-[70svh] text-gray-600 lg:mt-10 my-5">
        <l-spiral size="40" speed="0.9" color="black"></l-spiral>
        <p className="text-gray-400 text-xl mt-3">Loading your data...</p>
      </div>
    );
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
