import React from "react";
import "../../styles/home/home-second-section.css";

export const HomeSecondSectionCard = ({ image, title }) => {
  return (
    <div className="sectionSecondCard">
      <div
        className="sectionSecondCardImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3 className="h5">{title}</h3>
      <p className="p">
        Thank you for being valued customer. We are so grateful to serving for
        the honored be clients pleasure of serving hope we meets your’s
        expectations
      </p>
    </div>
  );
};
