import { CopyX } from "lucide-react";
import { motion as m } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleFormState } from "../features/formSlice";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./input/TextInput";
import SelectInput from "./input/SelectInput";
import TextAreaInput from "./input/TextAreaInput";
import { addData } from "../features/currentTasks";
import { setIsChange } from "../features/isChange";

const AddTaskFormik = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = (value) => {
    dispatch(toggleFormState());
    const createdDate = new Date().getDate();
    const createdMonth = new Date().toLocaleString("default", {
      month: "short",
    });
    const createdHour = new Date().getHours();
    const createdMinutes = new Date().getMinutes();
    const createdTime = {
      day: createdDate,
      time: `${createdHour}:${
        createdMinutes < 10 ? "0" + createdMinutes : createdMinutes
      }`,
      month: createdMonth,
    };
    const newData = {
      ...value,
      // id: new Date().getTime(),
      createdTime,
      complete: false,
      moveToTrash: false,
    };
    const currentUserId = JSON.parse(localStorage.getItem("currentUserId"));
    dispatch(addData([newData, currentUserId]));
    dispatch(setIsChange());
    // console.log(newData);
  };

  // animation stuff
  const formAnimation = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        type: "tween",
      },
    },
  };

  return (
    <div className="z-10 w-full h-screen top-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-50 ">
      <Formik
        initialValues={{
          title: "",
          priority: "",
          type: "",
          detail: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("* Title cannot be empty!"),
          priority: Yup.string()
            .oneOf(["low", "mid", "high"])
            .required("* Please include the priority of the task"),
          type: Yup.string()
            .oneOf(["Personal", "Study", "Business", "Home"])
            .required("* Please select the type to continue"),
          detail: Yup.string().max(
            100,
            "* Task detail can not be more that 100 chracters"
          ),
        })}
        onSubmit={(value) => {
          handleSubmitForm(value);
        }}
      >
        <Form className="lg:w-1/3 md:w-1/2 rounded-lg bg-white flex flex-col  w-full md:py-8 mt-8 md:mt-0 p-10 relative">
          <span
            className="absolute top-10 right-10 hover:scale-105 cursor-pointer active:scale-100"
            onClick={() => dispatch(toggleFormState())}
          >
            <CopyX className="text-indigo-500" />
          </span>

          <h2 className="text-gray-900 text-xl mb-1 font-medium">
            Add new todo
          </h2>

          <p className="leading-relaxed text-sm border-b-2 pb-2 mb-5 text-gray-600">
            Let me walk through the day with you{" "}
          </p>

          <TextInput name="title" id="title" label="Title" />

          <SelectInput label="Priority" name="priority" id="priority">
            <option disabled={true} value="">
              -- Set the priority --
            </option>
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </SelectInput>

          <SelectInput label="Type" name="type" id="type">
            <option disabled={true} value="">
              -- Choose the type --
            </option>
            <option>Home</option>
            <option>Personal</option>
            <option>Business</option>
            <option>Study</option>
          </SelectInput>

          <TextAreaInput label="Detail" name="detail" id="detail" />

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg focus:bg-indigo-600"
          >
            Add Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTaskFormik;
