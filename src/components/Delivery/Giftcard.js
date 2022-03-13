import React from "react";
import classes from "./Giftcard.module.css";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Giftcard = () => {
  return (
    <>
      <Card title="Gift Cards">
        <p className={classes.selectLabel1}>You have no gift cards available</p>
      </Card>
      <Card>
        <p className={classes.selectLabel2}>Add a Gift Card</p>
        <div className={classes.addgift}>
          <div className={classes.inputwrapper}>
            <Input />
          </div>
          <Button label={"Confirm"} />
        </div>
      </Card>
    </>
  );
};

export default Giftcard;
