import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  console.log(field);
  console.log(meta);
  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="w-full bg-white rounded border border-gray-300 mt-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
