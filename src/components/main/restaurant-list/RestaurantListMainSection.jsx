import React from "react";
import { restaurantData } from "../../../helper/restaurantList";
import "../../../styles/main/retaurant-list/restaurant_list_main_section.css";
import RestaurantListCard from "./RestaurantListCard";
const RestaurantListMainSection = (props) => {
  return (
    <section className="restaurant_list_main_section">
      <div className="container restaurant_list_main_container">
        <div className="restaurant_list_main_cards_container">
          {restaurantData.map((data) => (
            <RestaurantListCard restaurantData={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantListMainSection;
