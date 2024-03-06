import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/HomePage";
import { fetchAllUser } from "./features/auth/authentication";
import Auth from "./Pages/Auth";
import { fetchCurrentData } from "./features/currentTasks";

const App = () => {
  // const [taskToEdit, setTaskToEdit] = useState({});

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.allUsers);

  useEffect(() => {
    if (currentUser.id) {
      dispatch(fetchCurrentData(currentUser.id));
    }
  }, [currentUser]);

  return (
    <main>
      <Routes>
        <Route path="/allTasks" element={<Auth />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
};

export default App;
