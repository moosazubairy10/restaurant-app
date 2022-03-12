import React from "react";
import Navbar from "../../components/layout/navbar/navbar";
import ProfileContainer from "../../components/profile/ProfileContainer";
import "../../styles/profile/profile.css";
const Profile = () => {
  return (
    <div className="profile_page">
      <Navbar />
      <ProfileContainer />
    </div>
  );
};

export default Profile;
