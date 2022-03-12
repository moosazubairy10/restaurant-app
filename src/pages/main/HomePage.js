import React from "react";
import Header from "../../components/header/Header";
import HeaderContainer from "../../components/homeComponents/HeaderContainer";
import HomeFirstSection from "../../components/homeComponents/HomeFirstSection";
import HomeSecondSection from "../../components/homeComponents/HomeSecondSection";
import Navbar from "../../components/layout/navbar/navbar";
import bgImage from "../../Images/header.png";
const HomePage = () => {
  return (
    <div>
      <Header bgImage={bgImage}>
        <Navbar />
        <HeaderContainer />
      </Header>
      <HomeFirstSection />
      <HomeSecondSection />
    </div>
  );
};

export default HomePage;
