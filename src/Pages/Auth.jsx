import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TasksShowCasePage from "./TasksShowCasePage";

const Auth = () => {
  const { currentUser } = useSelector((state) => state.allUsers);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser.token) {
      navigate("/login");
    }
  }, [currentUser]);

  if (currentUser) {
    return <TasksShowCasePage />;
  }
};

export default Auth;
