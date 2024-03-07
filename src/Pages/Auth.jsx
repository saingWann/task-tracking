import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TasksShowCasePage from "./TasksShowCasePage";

const Auth = () => {
  const navigate = useNavigate();

  const loginAuthed = JSON.parse(localStorage.getItem("auth"));
  useEffect(() => {
    if (!loginAuthed) {
      navigate("/login");
      console.log("hello");
    }
  }, []);

  if (loginAuthed) {
    return <TasksShowCasePage />;
  }
};

export default Auth;
