import React, { useState } from "react";
import "../../../styles/layout/navbar.css";
import "../../../styles/simple-grid.css";
import logo from "../../../Images/logo123.png";
import navlogo from "../../../Images/navlogo.png";
import menu from "../../../Images/menu.png";
import profilePic from "../../../Images/profile.png";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [connexion, setConnexion] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <React.Fragment>
      <div className="navbar">
        <img src={navlogo} alt="" className="navbar_logo" />
        {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
        <img src={menu} className="side_navbar_icon" onClick={ToggleSidebar} />
      </div>
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className="sd-header">
          <img src={navlogo} alt="" className="navbar_logo" />
          <div onClick={ToggleSidebar}>
            <MdIcons.MdCancel className="side_navbar_icon" />
          </div>
        </div>
        {connexion && (
          <div className="sd-body">
            <button className="btn-primary-large-white">Connexion</button>
            <button className="btn-primary-large-black">Inscription</button>
          </div>
        )}
        <div className="side_navbar_profile">
          <div className="side_navbar_profile_data">
            <div className="side_navbar_profile_image">
              <img src={profilePic} alt=" " className="profile_image" />
            </div>
            <div className="side_navbar_profile_details">
              <p className="title">Arthur</p>
              <p className="title">Paris, France</p>
            </div>
          </div>
          <div className="side_navbar_profile_categories">
            <BiIcons.BiShoppingBag
              className="side_navbar_icon"
              style={{ margin: 0 }}
            />
            <p className="title">Commandes</p>
          </div>
          <div className="side_navbar_profile_categories">
            <BiIcons.BiShoppingBag
              className="side_navbar_icon"
              style={{ margin: 0 }}
            />
            <p className="title">Besoin d’aide ?</p>
          </div>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </React.Fragment>
  );
};

export default Navbar;
