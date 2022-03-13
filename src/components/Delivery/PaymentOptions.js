import React from "react";
import Card from "../UI/Card";
import classes from "./PaymentOption.module.css";
import check2 from "../../Images/Images/check-2.svg";
import card from "../../Images/Images/credit-card.svg";
import info from "../../Images/Images/info.svg";
const PaymentOptions = () => {
  return (
    <>
      <Card title={"Payment Option"}>
        <div className={classes.carddetails}>
          <img src={check2} alt="" />
          <p>Enter Your Payment Card Details</p>
          <img src={info} alt="" />
        </div>
        <div className={classes.detailsWrapper}>
          <p>Credit Card</p>
          <div className={classes.inputGroup}>
            <div className={classes.cardInput1}>
              <img src={card} alt="" className={classes.cardicon} />
              <input
                type="text"
                placeholder="Card Number"
                className={classes.input}
              />
            </div>
            <div className={classes.cardInput2}>
              <input
                type="text"
                placeholder="MM /YY /CVC"
                className={classes.input}
              />
            </div>
          </div>
          <label className={classes.checkbox}>
            <input type="checkbox" />
            <span className={classes.checkLabel}>
              Save to "My cards" for future orders
            </span>
          </label>
        </div>
        <div className={classes.carddetails}>
          <input style={{ borderRadius: "50%" }} type="checkbox" />
          <span style={{ marginLeft: "4px" }} className={classes.checkLabel}>
            Or use one of your previously saved payment cards.
          </span>
        </div>
      </Card>
    </>
  );
};

export default PaymentOptions;
