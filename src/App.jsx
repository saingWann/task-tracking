import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/HomePage";
import { fetchAllUser } from "./features/auth/authentication";
import Auth from "./Pages/Auth";
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
