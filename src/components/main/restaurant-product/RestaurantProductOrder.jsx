import React from "react";
import "../../../styles/main/restaurant-product/order-card.css";
const RestaurantProductOrder = () => {
  return (
    <div className="restaurant_product_order_card">
      <div className="restaurant_product_order_card_title">My Order</div>
      <div className="restaurant_product_order_card_container">
        <div className="restaurant_product_order_card_container_item_selected_container">
          <div className="restaurant_product_order_card_container_item_selected">
            <div className="restaurant_product_order_card_container_item_times">
              2X
            </div>
            <div className="restaurant_product_order_card_container_item_name">
              Mestres Visol Half 2013
            </div>
            <div className="restaurant_product_order_card_container_item_price_container">
              <div className="restaurant_product_order_card_container_item_price">
                £35.6
              </div>
              <div className="restaurant_product_order_card_container_item_price_increment">
                <span>-</span>
                <span>+</span>
              </div>
            </div>
          </div>
          <div className="restaurant_product_order_card_container_item_selected">
            <div className="restaurant_product_order_card_container_item_times">
              2X
            </div>
            <div className="restaurant_product_order_card_container_item_name">
              Mestres Visol Half 2013
            </div>
            <div className="restaurant_product_order_card_container_item_price_container">
              <div className="restaurant_product_order_card_container_item_price">
                £35.6
              </div>
              <div className="restaurant_product_order_card_container_item_price_increment">
                <span>-</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="restaurant_product_order_card_container_item_total_price_container">
          <div className="restaurant_product_order_card_container_item_total_price">
            <div className="restaurant_product_order_card_container_item_sub_price">
              <div>Subtotal</div>
              <div>£35</div>
            </div>
          </div>
          <div className="restaurant_product_order_card_container_item_total_price">
            <div className="restaurant_product_order_card_container_item_sub_price">
              <div>Subtotal</div>
              <div>£35</div>
            </div>
          </div>
          <div className="restaurant_product_order_card_container_item_total_price">
            <div className="restaurant_product_order_card_container_item_sub_price">
              <div>Subtotal</div>
              <div>£35</div>
            </div>
          </div>
        </div>
        <div className="restaurant_product_order_card_checkoutBtn_container">
          <button className="restaurant_product_order_card_checkoutBtn">
            Go To Checkout!
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProductOrder;
