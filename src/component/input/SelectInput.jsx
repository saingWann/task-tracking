import { useField } from "formik";
import React from "react";

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1 items-start mb-4">
      <label className="font-bold" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select
        className="mt-2 p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SelectInput;
