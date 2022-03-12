import React from "react";
import "../../../styles/auth/login.css";
const LoginFormComponent = () => {
  return (
    <div className="container login_page_container">
      <div>
        <h1 className="home_header_heading">
          Vos restaurants préférés,<br></br> livrés chez vous en un clic
        </h1>
        <p className="home_header_Paragraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br></br>{" "}
          Aenean commodo ligula dolor.
        </p>
      </div>
      <div className="login_form_container">
        <div className="login_form_container_title">Bienvenue sur GROOM</div>
        <div className="login_form">
          <div className="form_control">
            <label htmlFor="email">Email: </label>
            <input
              className="loginFormInput"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="form_control">
            <label htmlFor="password">Mot de passe:</label>
            <input
              className="loginFormInput"
              type="text"
              name="password"
              id="password"
            />
          </div>
          <div className="form_control" style={{ alignItems: "center" }}>
            <button className="login_form_btn btnbgBlack">Se connecter</button>
            Ou
            <button className="login_form_btn btnbgWhite">Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;
