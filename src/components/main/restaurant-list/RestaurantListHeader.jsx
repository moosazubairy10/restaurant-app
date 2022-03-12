import React from "react";
import "../../../styles/main/retaurant-list/restaurant-list-header.css";
import Navbar from "../../layout/navbar/navbar";
const RestaurantListHeader = () => {
  return (
    <div>
      {" "}
      <div className="restaurant_list_header">
        <Navbar />
        <div className="restaurant_list_header_section">
          <div className="restaurant_list_header_container">
            <div>Adresse de livraison : 16 Avenue Foch, Paris 75016</div>
            <span className="restaurant_list_header_container_link">
              Modifier
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantListHeader;
