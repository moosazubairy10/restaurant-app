import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/layout/navbar/navbar";
import RestaurantProductHeaderContainer from "../../components/main/restaurant-product/RestaurantProductHeaderContainer";
import RestaurantProductMenuSection from "../../components/main/restaurant-product/RestaurantProductMenuSection";
import RestaurantProductSlider from "../../components/main/restaurant-product/RestaurantProductSlider";
import restaurantProductImage from "../../Images/restaurantProductHeader.png";
const RestaurantProduct = () => {
  return (
    <div>
      <Header bgImage={restaurantProductImage}>
        <Navbar />
        <RestaurantProductHeaderContainer
          restaurantTitle={"Restaurant Title"}
          restaurantLocation="95 avenue Niel, 75017 Paris"
        />
      </Header>

      <RestaurantProductSlider />
      <RestaurantProductMenuSection />
    </div>
  );
};

export default RestaurantProduct;
