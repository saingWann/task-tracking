import { data } from "autoprefixer";
import { useFormik } from "formik";
import React from "react";

const TextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useFormik(props);

  return (
    <div className="relative mb-4">
      <label htmlFor={props.id} className="font-semibold">
        {label}
      </label>
      <textarea
        {...field}
        {...data}
        name="message"
        className="w-full mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
      <p className="absolute bottom-5 right-5 text-xs text-gray-400">
        Characters( {Characters} /100 )
      </p>
    </div>
  );
};

export default TextAreaInput;
