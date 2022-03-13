import React from "react";
import DeliveryOptions from "../../components/Delivery/Delivery";
import MyOrder from "../../components/Order/MyOrder";
import Navbar from "../../components/UI/Navbar";
import classes from "./Checkout.module.css";

const CheckoutRoute = () => {
    return (
        <div className={classes.container}>
            <Navbar />
            <main className={classes.main}>
                <DeliveryOptions />
                <MyOrder />
            </main>
        </div>
    );
};

export default CheckoutRoute;
