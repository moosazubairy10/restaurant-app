import React from "react";

import Paiement from "../../Images/Paiement.png";
import votre from "../../Images/votre.png";
import { HomeSecondSectionCard } from "./HomeSecondSectionCard";
const HomeSecondSection = () => {
  return (
    <div className="sectionSecond">
      <div className="sectionSecondContainer">
        <HomeSecondSectionCard image={Paiement} title={`Votre commande`} />
        <HomeSecondSectionCard image={votre} title={`Paiement en ligne`} />
        <HomeSecondSectionCard image={votre} title={`Recevoir la commande`} />
      </div>
    </div>
  );
};

export default HomeSecondSection;
