import React from "react";

const ProfileInformationModify = () => {
  return (
    <div className="profile_modify_form">
      <div className="profile_modify_form_title">Moyen de paiement</div>
      <div className="profile_modify_form_container">
        <div className="form_control">
          <label htmlFor="nameOnCard">Nom du titulaire de la carte</label>
          <input
            type="text"
            name="nameOnCard"
            id="nameOnCard"
            className="profile_modify_form_input"
          />
        </div>
        <div className="form_control">
          <label htmlFor="numberOnCard">Numéro de la carte</label>
          <input
            type="password"
            name="numberOnCard"
            id="numberOnCard"
            className="profile_modify_form_input"
          />
        </div>
        <div className="inline_inputs">
          <div className="form_control">
            <label htmlFor="expirationDate">Date d’expiration</label>
            <input
              type="text"
              name="expirationDate"
              id="expirationDate"
              className="profile_modify_form_input"
            />
          </div>
          <div className="form_control">
            <label htmlFor="cvv">CVV / CVC *</label>
            <input
              type="number"
              name="cvv"
              id="cvv"
              className="profile_modify_form_input"
            />
          </div>
        </div>
        <div className="profile_modify_form_warning">
          *CVV et CVC est le code de sécurité de la carte, un numéro unique de
          trois chiffres au dos de votre carte, distinct de son numéro.
        </div>
      </div>
    </div>
  );
};

export default ProfileInformationModify;
