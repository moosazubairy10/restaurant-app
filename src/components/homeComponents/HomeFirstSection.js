import React from "react";
import "../../styles/home/home-first-section.css";
// import "../../styles/simple-grid.css";
import HomeFirstSectionCard from "./HomeFirstSectionCard";
import frontcard1 from "../../Images/frontcard1.png";
import frontcard2 from "../../Images/frontcard2.png";
import frontcard3 from "../../Images/frontcard3.png";
import './first-section.css';


const HomeFirstSection = () => {
  return (
    <div className="topContainer" style={{ width: '99%', justifyContent: 'center', alignItems: 'center' }}>
      <div className="columns" style={{ width: '90%', }} >
        <div className="column" >
          <HomeFirstSectionCard image={frontcard1} />
        </div>
        <div className="column">
          <HomeFirstSectionCard image={frontcard2} />
        </div>
        <div className="column">
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
