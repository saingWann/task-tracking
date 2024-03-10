import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/HomePage";
import { fetchAllUser } from "./features/auth/authentication";
import Auth from "./Pages/Auth";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("refresh");
    dispatch(fetchAllUser());
  }, []);

  return (
    <main>
      <AnimatePresence exitBeforeEner>
        <Routes>
          <Route path="/allTasks" element={<Auth />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

export default App;
