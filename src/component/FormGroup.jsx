import React, { useContext, useEffect, useState } from "react";
import DataContext from "../Context/Contextapi";
import EditForm from "./EditForm";
import AddTaskForm from "./AddTaskForm";
import { AnimatePresence } from "framer-motion";

const FormGroup = () => {
  const { edit, showForm } = useContext(DataContext);

  // only in the state where the edit and showform both true
  if (edit && showForm) {
    return (
      <AnimatePresence>
        <EditForm />
      </AnimatePresence>
    );
  } else if (showForm) {
    // only in the state of showForm is true
    return (
      <AnimatePresence>
        <AddTaskForm />
      </AnimatePresence>
    );
  }
};

export default FormGroup;
