import React from "react";
import "../../styles/home/home-first-section.css";
import "../../styles/simple-grid.css";
import HomeFirstSectionCard from "./HomeFirstSectionCard";
import sectionFirstBike from "../../Images/sectionFirstBike.png";
import thumbLike from "../../Images/thumbLike.png";
import eco from "../../Images/eco.png";

const HomeFirstSection = () => {
  return (
    <>
      <div className="sectionFirstMain">
        <div className="sectionFirstContainer">
          <HomeFirstSectionCard image={sectionFirstBike} />
          <HomeFirstSectionCard image={thumbLike} />
          <HomeFirstSectionCard image={eco} />
        </div>
      </div>
      <div className="sectionSecondHeading">
        <h3 className="h3 font-swear-display">PROCESSUS SIMPLE</h3>
        <h1 className="h2">Comment ça marche ?</h1>
      </div>
    </>
  );
};

export default HomeFirstSection;
