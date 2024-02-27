import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  console.log(field);
  console.log(meta);
  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor={props.id}>{label}</label>
      <input className="border" type="text" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
