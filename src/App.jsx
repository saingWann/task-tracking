import { useEffect, useState } from "react";
import { Headbar, Card, Sidebar, FormGroup } from "./component/index";
import { useDispatch } from "react-redux";
import { fetchCurrentData } from "./features/currentTasks";
import { Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import TasksShowCasePage from "./Pages/TasksShowCasePage";
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/HomePage";
import NavBar from "./component/NavBar";

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
      {/* <NavBar /> */}
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
