import React from "react";
import classes from "./DeliveryOption.module.css";
import check1 from "../../Images/Images/check-1.svg";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

const DeliveryOption = () => {
  return (
    <>
      <div className={classes.formWrapper}>
        <Card title="Delivery Options">
          <div className={classes.option}>
            <img src={check1} alt="" />
            <p>Delivery</p>
          </div>
          <div className={classes.formElements}>
            <Input
              label={"Address Line 1"}
              placeholder={"House number and street no."}
            />
            <Input
              label={"Address Line 2 (optional)"}
              placeholder={"House number and street no."}
            />
            <Input label={"Post Code"} />
            <Input label={"What3words address (optional)"} />
            <Input label={"Address nickname (optional)"} />
            <label className={classes.checkbox}>
              <input type="checkbox" />
              <span className={classes.checkLabel}>
                Address nickname (optional)
              </span>
            </label>
          </div>
        </Card>
        <Card title="Delivery Options">
          <div>
            <p className={classes.selectLabel}>Select Delivery Time</p>
            <div className={classes.deliveryTime}>
              <select
                name=""
                id=""
                /* value="---" */
                placeholder="---"
                className={classes.select}
              >
                <option value="---">---</option>
              </select>
              <select
                name=""
                id=""
                /* value="---" */
                placeholder="---"
                className={classes.select}
              >
                <option value="---">---</option>
              </select>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DeliveryOption;
