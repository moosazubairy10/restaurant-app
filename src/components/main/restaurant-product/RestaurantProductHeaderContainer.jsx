import React from "react";
import "../../../styles/main/restaurant-product/restaurant-product-header.css";
const RestaurantProductHeaderContainer = (props) => {
  const { restaurantTitle, restaurantLocation } = props;
  return (
    <div className="container restaurant_product_container">
      <div className="restaurant_product_container_restaurant_title">
        {restaurantTitle}
      </div>
      <div className="restaurant_product_container_restaurant_location">
        {restaurantLocation}
      </div>
    </div>
  );
};

export default RestaurantProductHeaderContainer;
