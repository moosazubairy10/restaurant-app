import React from "react";
import RestaurantListHeader from "../../components/main/restaurant-list/RestaurantListHeader";
import RestaurantListMainSection from "../../components/main/restaurant-list/RestaurantListMainSection";
const RestaurantList = () => {
  return (
    <div>
      <RestaurantListHeader />
      {/* Card Container */}
      <RestaurantListMainSection />
    </div>
  );
};

export default RestaurantList;
