import React from "react";
import classes from "./Card.module.css";
const Card = ({ title, children }) => {
  return (
    <div>
      {title && (
        <header className={classes.header}>
          <h4 className={classes.title}>{title}</h4>
        </header>
      )}
      <div className={classes.main}>{children}</div>
    </div>
  );
};

export default Card;
