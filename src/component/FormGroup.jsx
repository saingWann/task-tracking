import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import AddTaskFormik from "./AddTaskFormik";
import EditFormik from "./EditFormik";

const FormGroup = () => {
  const { isShown, isEdit } = useSelector((state) => state.formState);
  // only in the state where the edit and showform both true
  if (isEdit && isShown) {
    return (
      <AnimatePresence>
        <EditFormik />
      </AnimatePresence>
    );
  } else if (isShown) {
    // only in the state of showForm is true
    return (
      <AnimatePresence>
        <AddTaskFormik />
      </AnimatePresence>
    );
  }
};

export default FormGroup;
