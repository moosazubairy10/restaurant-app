import React from "react";
import classes from "./Button.module.css";

const Button = ({ label }) => {
  return (
    <div className={classes.wrapper}>
      <button>
        <p className={classes.text}>{label}</p>
      </button>
    </div>
  );
};

export default Button;
