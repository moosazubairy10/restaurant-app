import React from "react";
import classes from "./Input.module.css";

const Input = ({
  label,
  type,
  name,
  onChange,
  value,
  placeholder,
  required,
}) => {
  return (
    <div className={classes.container}>
      {label && <p>{label}</p>}
      <div className={classes.wrapper}>
        <input
          type={type}
          placeholder={placeholder ? placeholder : "Enter Here"}
          name={name}
          value={value}
          onChange={onChange}
          required={required ? true : false}
        />
      </div>
    </div>
  );
};

export default Input;
