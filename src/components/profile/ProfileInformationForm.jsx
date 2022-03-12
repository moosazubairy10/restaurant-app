import React from "react";

const ProfileInformationForm = () => {
  return (
    <div className="profile_information_form">
      <div className="form_control_inline">
        <label htmlFor="name">Nom & Prénom</label>
        <div className="profile_information_form_input_container">
          <input
            className="profile_information_form_input"
            type="text"
            name="name"
            id="name"
          />
        </div>
      </div>
      <div className="form_control_inline">
        <label htmlFor="address">Adresse de livraison</label>
        <div className="profile_information_form_input_container">
          <input
            className="profile_information_form_input"
            type="text"
            name="address"
            id="address"
          />
        </div>
      </div>
      <div className="form_control_inline">
        <label htmlFor="rueAndCp">Rue & CP</label>
        <div className="profile_information_form_input_container">
          <input
            className="profile_information_form_input"
            type="text"
            name="rueAndCp"
            id="rueAndCp"
          />
          <input
            className="profile_information_form_input"
            type="text"
            name="rueAndCp"
            id="rueAndCp"
          />
        </div>
      </div>
      <div className="form_control_inline">
        <label htmlFor="telephone">Télephone</label>
        <div className="profile_information_form_input_container">
          <input
            className="profile_information_form_input"
            type="text"
            name="telephone"
            id="telephone"
          />
        </div>
      </div>
      <div className="form_control_inline">
        <label htmlFor="email">E-mail</label>
        <div className="profile_information_form_input_container">
          <input
            className="profile_information_form_input"
            type="email"
            name="email"
            id="email"
          />
        </div>
      </div>
      <div
        className="form_control_inline"
        style={{ justifyContent: "flex-end" }}
      >
        <button className="profile_information_form_registerBtn">
          {" "}
          Enregistrer
        </button>
      </div>
    </div>
  );
};

export default ProfileInformationForm;
