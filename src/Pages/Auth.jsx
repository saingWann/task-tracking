import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TasksShowCasePage from "./TasksShowCasePage";

const Auth = () => {
  const { currentUser } = useSelector((state) => state.allUsers);
  const navigate = useNavigate();

  const loginAuthed = localStorage.getItem("auth");
  useEffect(() => {
    if (!loginAuthed) {
      navigate("/login");
    }
  }, [currentUser, loginAuthed]);

  if (loginAuthed) {
    return <TasksShowCasePage />;
  }
};

export default Auth;
