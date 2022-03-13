import React from "react";
import classes from "./OrderItem.module.css";
import add from "../../Images/Images/add.svg";
import subtract from "../../Images/Images/subtract.svg";
const OrderItem = ({ ItemAmount, title, price, onAdd, onSubtract }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.items}>
        <p>{ItemAmount}x</p>
        <p style={{ color: "#ffcc00" }}>{title}</p>
      </div>
      <div className={classes.counter}>
        <p>£{price}</p>
        <div className={classes.counterIcons}>
          <img src={subtract} alt="" onClick={onAdd} />
          <img src={add} alt="" onClick={onSubtract} />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
