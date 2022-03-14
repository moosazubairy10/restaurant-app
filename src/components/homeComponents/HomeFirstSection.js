import React from "react";
import "../../styles/home/home-first-section.css";
import "../../styles/simple-grid.css";
import HomeFirstSectionCard from "./HomeFirstSectionCard";
import frontcard1 from "../../Images/frontcard1.png";
import frontcard2 from "../../Images/frontcard2.png";
import frontcard3 from "../../Images/frontcard3.png";

const HomeFirstSection = () => {
  return (
    <div className="topContainer">
      <div className="sectionFirstMain">
        <div className="sectionFirstContainer">
          <HomeFirstSectionCard image={frontcard1} />
          <HomeFirstSectionCard image={frontcard2} />
          <HomeFirstSectionCard image={frontcard3} />
        </div>
      </div>
      <div className="HeadingBeforeSecond" style={{ position: 'inherit', marginTop: '10%' }}>
        <h3 className="h3 font-swear-display" >PROCESSUS SIMPLE</h3>
        <h1 className="h2" >Comment ça marche ?</h1>
      </div>
    </div>
  );
};

export default HomeFirstSection;
