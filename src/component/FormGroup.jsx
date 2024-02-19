import React, { useContext, useEffect, useState } from "react";
import DataContext from "../Context/Contextapi";
import EditForm from "./EditForm";
import AddTaskForm from "./AddTaskForm";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const FormGroup = () => {
  const { isShown, isEdit } = useSelector((state) => state.formState);
  // only in the state where the edit and showform both true
  if (isEdit && isShown) {
    return (
      <AnimatePresence>
        <EditForm />
      </AnimatePresence>
    );
  } else if (isShown) {
    // only in the state of showForm is true
    return (
      <AnimatePresence>
        <AddTaskForm />
      </AnimatePresence>
    );
  }
};

export default FormGroup;
