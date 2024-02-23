import { useEffect, useState } from "react";
import { Headbar, Card, Sidebar, FormGroup } from "./component/index";
import { useDispatch } from "react-redux";
import { fetchCurrentData } from "./features/currentTasks";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import TasksShowCasePage from "./Pages/TasksShowCasePage";
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  // const [taskToEdit, setTaskToEdit] = useState({});

  const dispatch = useDispatch();

  // const allTask = useSelector(allTasks);
  useEffect(() => {
    dispatch(fetchCurrentData());
    // dispatch(renderByType(activeTab));
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/allTasks" element={<TasksShowCasePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
};

export default App;
