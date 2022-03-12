import React from "react";
import recevoir from "../../Images/recevoir.png";

import Paiement from "../../Images/Paiement.png";
import votre from "../../Images/votre.png";
import { HomeSecondSectionCard } from "./HomeSecondSectionCard";
const HomeSecondSection = () => {
  return (
    <div className="sectionSecond">
      <div className="sectionSecondContainer">
        <HomeSecondSectionCard image={votre} title={`Votre commande`} />
        <HomeSecondSectionCard image={Paiement} title={`Paiement en ligne`} />
        <HomeSecondSectionCard image={recevoir} title={`Recevoir la commande`} />
      </div>
    </div>
  );
};

export default HomeSecondSection;
