import React from "react";
import LoginFormComponent from "../../components/auth/login/LoginFormComponent";
import Header from "../../components/header/Header";
import Navbar from "../../components/layout/navbar/navbar";
import bgImage from "../../Images/headerimg.png";

const Login = () => {
  return (
    <div>
      <Header bgImage={bgImage}>
        <Navbar />
        <LoginFormComponent />
      </Header>
    </div>
  );
};

export default Login;
