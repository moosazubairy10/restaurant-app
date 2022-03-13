import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/simple-grid.css";
const HomeRoute = React.lazy(() => import("./routes/main/HomeRoute"));
const RestaurantListRoute = React.lazy(() =>
  import("./routes/main/RestaurantListRoute")
);
const RestaurantProductRoute = React.lazy(() =>
  import("./routes/main/RestaurantProductRoute")
);
const LoginRoute = React.lazy(() => import("./routes/auth/LoginRoute"));
const ProfileRoute = React.lazy(() => import("./routes/profile/ProfileRoute"));
const CheckoutRoute = React.lazy(() => import("./routes/checkout/CheckoutRoute"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomeRoute />} />
          <Route
            exact
            path="/restaurant-list"
            element={<RestaurantListRoute />}
          />
          <Route
            exact
            path="/restaurant-product"
            element={<RestaurantProductRoute />}
          />
          <Route exact path="/login" element={<LoginRoute />} />
          <Route exact path="/profile" element={<ProfileRoute />} />
          <Route exact path="/Checkout" element={<CheckoutRoute />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
