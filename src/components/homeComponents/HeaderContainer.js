import React from "react";
import "../../styles/home/home-header.css";
import "../../styles/simple-grid.css";
import Icon from "../common/Icon";
import marker from "../../Images/icons/marker.svg";
const HeaderContainer = () => {
  const [locationData, setLocationData] = React.useState("");
  return (
    <div className="container headerContainer">
      <h1 className="home_header_heading">
        Vos restaurants préférés,<br></br> livrés chez vous en un clic
      </h1>
      <p className="home_header_Paragraph">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br></br>{" "}
        Aenean commodo ligula dolor.
      </p>
      <div className="homeLocation">
        <Icon iconImage={marker} mt={10} />
        <input
          className="headerLocationSearch"
          type="text"
          name="location"
          value={locationData}
          onChange={(e) => setLocationData(e.target.value)}
        />
        <button className="btn btnbgBlack">Continuer</button>
      </div>
    </div>
  );
};

export default HeaderContainer;
