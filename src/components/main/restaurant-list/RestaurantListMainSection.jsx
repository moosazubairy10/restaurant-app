import React from "react";
import { restaurantData } from "../../../helper/restaurantList";
import "../../../styles/main/retaurant-list/restaurant_list_main_section.css";
import RestaurantListCard from "./RestaurantListCard";
import '../../homeComponents/first-section.css';

const RestaurantListMainSection = (props) => {
  return (
    <div className="topContainer" style={{
      display: 'flex',
      flexWrap: 'wrap', justifyContent: 'space-between'
    }}>
      <div className="columns" style={{ width: '90%', height: 'auto', margin: 'auto' }} >

        {restaurantData.map((data) => (
          <div className="column" style={{ position: 'relative', minWidth: '300px', minHeight: "400px" }} >
            <RestaurantListCard restaurantData={data} />
          </div>
        ))}


      </div>
    </div>
  );
};

export default RestaurantListMainSection;
