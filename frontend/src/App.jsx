import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import { Cart } from "react-ionicons";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer";

// Import banner images directly (assuming they're in the public directory)
import men_banner from "/Assets/banner_mens.png";
import women_banner from "/Assets/banner_women.png";
import kid_banner from "/Assets/banner_kids.png";

function App() {
  return (
    <di v>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </di>
  );
}

export default App;
