import React from "react";
import "../../styles/main/header.css";
const Header = ({ children, bgImage }) => {
  return (
    <div className="header" style={{ backgroundImage: `url(${bgImage})` }}>
      {console.log(bgImage)}
      {children}
    </div>
  );
};

export default Header;
