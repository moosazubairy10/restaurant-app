import React from "react";
import "../../styles/home/home-first-section.css";

const HomeFirstSectionCard = ({ image }) => {
  return (
    <div className="sectionOneCard">
      <div
        className="sectionOneCardImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3 className="h3">Lorem Ipsum</h3>
      <p className="p">
        Thank you for being valued customer. We are so grateful to serving for
        the honored be clients pleasure of serving hope we meets your’s
        expectations
      </p>
    </div>
  );
};

export default HomeFirstSectionCard;
