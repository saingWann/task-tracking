import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/HomePage";
import { fetchAllUser, setCurrentUser } from "./features/auth/authentication";
import Auth from "./Pages/Auth";
import { fetchCurrentData, renderByType } from "./features/currentTasks";
import useLoginedUser from "./hooks/useLoginedUser";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("refresh");
    dispatch(fetchAllUser());
  }, []);

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
