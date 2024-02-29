import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1 items-start mb-4">
      <label className="font-bold" htmlFor={props.id}>
        {label}
      </label>
      <input
        className="w-full bg-white rounded border border-gray-300 mt-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
