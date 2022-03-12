import React from "react";
import Footer from "../../components/layout/footer/Footer";
import RestaurantList from "../../pages/main/RestaurantList";

const RestaurantListRoute = () => {
  return (
    <div>
      <RestaurantList />
      <Footer />
    </div>
  );
};

export default RestaurantListRoute;
