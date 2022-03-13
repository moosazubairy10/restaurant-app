import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../Images/Images/Logo.svg";
import menu from "../../Images/Images/menu.svg";
import cart from "../../Images/Images/shopping-bag.svg";

const Navbar = () => {
  return (
    <div className={classes.outerContainer}>
      <img src={logo} alt="" className={classes.logo} />
      <div className={classes.menuItems}>
        <div style={{ position: "relative" }}>
          <div className={classes.badge}>4</div>
          <img src={cart} alt="cart" />
        </div>
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
