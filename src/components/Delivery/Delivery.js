import React from "react";
import classes from "./Delivery.module.css";
import pencilIcon from "../../Images/Images/metro-pencil.svg";

import DeliveryOption from "./DeliveryOption";
import Giftcard from "./Giftcard";
import PaymentOptions from "./PaymentOptions";
import Button from "../UI/Button";

const DeliveryOptions = () => {
  return (
    <div className={classes.container}>
      <section className={classes.outerTitle}>
        <h2>Lorem, ipsum.</h2>
        <div className={classes.changePostal}>
          <p>Change Postal Code</p>
          <img src={pencilIcon} alt="" className={classes.icon} />
        </div>
      </section>
      <main className={classes.main}>
        <form className={classes.formWrapper}>
          <DeliveryOption />
          <Giftcard />
          <PaymentOptions />
          <div className={classes.buttonWrapper}>
            <Button label={"COMPLETE ORDER"} />
          </div>
        </form>
      </main>
    </div>
  );
};

export default DeliveryOptions;
