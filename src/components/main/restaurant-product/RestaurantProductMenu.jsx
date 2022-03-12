import React from "react";
import { menuItems } from "../../../helper/menuItems";
import "../../../styles/main/restaurant-product/menu-items.css";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
const RestaurantProductMenu = () => {
  return (
    <div className="restaurant_product_menu_items">
      {menuItems.map((menuItem) => (
        <div className="restaurant_product_menu_item">
          <div className="restaurant_product_menu_item_title">
            {menuItem?.title}
          </div>
          <div className="restaurant_product_menu_item_container">
            <div
              className="restaurant_product_menu_item_image"
              style={{ backgroundImage: `url('${menuItem?.image}')` }}
            ></div>
            <div className="restaurant_product_menu_item_container_info">
              <div className="restaurant_product_menu_item_subTitle_container">
                <div className="restaurant_product_menu_item_subTitle">
                  {menuItem?.subTitle}
                </div>
                <div className="restaurant_product_menu_item_price">
                  {menuItem?.price} €
                </div>
              </div>
              <div className="restaurant_product_menu_item_desc">
                {menuItem?.desc}
              </div>
              <div className="restaurant_product_menu_item_icons_section">
                <div className="restaurant_product_menu_item_desc">
                  <div className="restaurant_product_menu_item_icons">
                    <FaIcons.FaInfo className="side_navbar_icon icons" />
                  </div>
                </div>
                <div className="restaurant_product_menu_item_desc">
                  <div className="restaurant_product_menu_item_icons_beg">
                    <BiIcons.BiShoppingBag className="side_navbar_icon icons" />
                  </div>
                </div>
              </div>

              <div className="restaurant_product_menu_item_icon_container"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantProductMenu;
