import { useField } from "formik";
import React, { useEffect, useState } from "react";

const TextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [Characters, setCharacters] = useState(0);

  useEffect(() => {
    setCharacters(field.value.length);
  }, [field.value]);

  return (
    <div className="flex flex-col relative gap-1 items-start mb-4">
      <label htmlFor={props.id} className="font-bold">
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className="w-full mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
      <p className="absolute bottom-5 right-5 text-xs text-gray-400">
        Characters( {Characters} /100 )
      </p>

      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextAreaInput;
