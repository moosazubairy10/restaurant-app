import React from "react";
import "../../../styles/main/restaurant-product/restaurant_product_menu_section.css";
import RestaurantProductMenu from "./RestaurantProductMenu";
import RestaurantProductOrder from "./RestaurantProductOrder";
const RestaurantProductMenuSection = () => {
  return (
    <div className="restaurant_product_menu_section">
      <div className="container-fluid restaurant_product_menu_section_container">
        <div className="restaurant_product_menu_section_container_menuList">
          <RestaurantProductMenu />
        </div>
        <div className="restaurant_product_menu_section_container_order">
          <RestaurantProductOrder />
        </div>
      </div>
    </div>
  );
};

export default RestaurantProductMenuSection;
