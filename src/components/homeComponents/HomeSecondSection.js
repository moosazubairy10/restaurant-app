import React from "react";
import recevoir from "../../Images/recevoir.png";

import Paiement from "../../Images/Paiement.png";
import votre from "../../Images/votre.png";
import { HomeSecondSectionCard } from "./HomeSecondSectionCard";
import './first-section.css';
import "../../styles/home/home-second-section.css";
const HomeSecondSection = () => {
  return (
    <div className="topContainer" style={{ width: '99%', justifyContent: 'center', alignItems: 'center' }}>
      <div className="columns" style={{ width: '91%', }} >
        <div className="column" >
          <HomeSecondSectionCard image={votre} title={`Votre commande`} />
        </div>
        <div className="column">
          <HomeSecondSectionCard image={Paiement} title={`Paiement en ligne`} />
        </div>
        <div className="column">
          <HomeSecondSectionCard image={recevoir} title={`Recevoir la commande`} />
        </div>
      </div>
    </div>
  );
};

export default HomeSecondSection;
