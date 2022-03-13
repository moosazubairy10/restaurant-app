import React from "react";
import Input from "../UI/Input";
import classes from "./MyOrder.module.css";
import OrderItem from "./OrderItem";

const MyOrder = () => {
  return (
    <div className={classes.container}>
      <section className={classes.outerTitle}>
        <h2>My Order</h2>
      </section>
      <main className={classes.main}>
        <OrderItem
          ItemAmount={2}
          title={"Mestres Visol Half 2013"}
          price={1135.6}
        />
        <OrderItem
          ItemAmount={2}
          title={"Bruno Paillard Brut Premiere Cuvee Half NV"}
          price={35.6}
        />
        <div className={classes.checkout}>
          <div className={classes.row}>
            <p>SUB TOTAL</p>
            <p>£35.6</p>
          </div>
          <div className={classes.row}>
            <p>DELIVERY COST</p>
            <p>£0.0</p>
          </div>
          <div className={classes.row}>
            <p>TOTAL</p>
            <p>£35.6</p>
          </div>
        </div>
      </main>
      <form className={classes.formWrapper}>
        <section className={classes.outerTitle}>
          <h2>Comments</h2>
        </section>
        <div className={classes.comments}>
          <Input label={"For Restaurant"} />
          <Input label={"For Rider"} />
        </div>
        <p className={classes.note}>
          If you have any special dietary requirements or any allergies please
          notify us here
        </p>
      </form>
    </div>
  );
};

export default MyOrder;
