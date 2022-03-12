import React from "react";

const RestaurantListCard = ({ restaurantData }) => {
  return (
    <div className="restaurant_list_main_card">
      <div
        className="restaurant_list_main_card_image"
        style={{ backgroundImage: `url(${restaurantData?.image})` }}
      ></div>
      <div className="restaurant_list_main_card_info">
        <div className="restaurant_list_main_card_info_container">
          <div className="restaurant_list_main_card_info_title_container">
            <div className="restaurant_list_main_card_info_title">
              {restaurantData?.title}
            </div>
            <div className="restaurant_list_main_card_info_rating">
              {restaurantData?.rating}
            </div>
          </div>
          <div className="restaurant_list_main_card_info_location">
            {restaurantData?.location}
          </div>
          <div className="restaurant_list_main_card_info_desc">
            {restaurantData?.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantListCard;
