import React from "react";
import ProfileInformationForm from "./ProfileInformationForm";
import ProfileInformationModify from "./ProfileInformationModify";

const ProfileContainer = () => {
  return (
    <div className="container profile_container">
      <div className="profile_container_title_container">
        <div className="profile_container_leftHeading">Mes informations</div>
        <div className="profile_container_rightHeading">
          Modifier mes informations
        </div>
      </div>
      <div className="profile_innerContainer">
        <div className="profile_innerContainer_leftCol">
          <ProfileInformationForm />
        </div>
        <div className="profile_innerContainer_rightCol">
          <ProfileInformationModify />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
