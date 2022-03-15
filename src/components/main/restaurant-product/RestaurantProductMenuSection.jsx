import React from "react";
import "../../../styles/main/restaurant-product/restaurant_product_menu_section.css";
import RestaurantProductMenu from "./RestaurantProductMenu";
import RestaurantProductOrder from "./RestaurantProductOrder";
import "../../homeComponents/first-section.css";
const RestaurantProductMenuSection = () => {
  return (
    <div className="topContainer" style={{
      display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%'
    }}>
      <div className="columns" style={{ width: '96%' }}>
        <div className="column" style={{ width: '67%' }}>
          <RestaurantProductMenu />
        </div>
        <div className="column" style={{ width: '33%' }} >
          <RestaurantProductOrder />
        </div>
      </div>
    </div>
  );
};

export default RestaurantProductMenuSection;
