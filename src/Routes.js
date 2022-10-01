import React from "react";
import Cart from "pages/Cart";
import PDP from "pages/PDP";
import CurrencySwitcher from "pages/CurrencySwitcher";
import CartOverlay from "pages/CartOverlay";
import Category from "pages/Category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cartoverlay" element={<CartOverlay />} />
        <Route path="/currencyswitcher" element={<CurrencySwitcher />} />
        <Route path="/pdp" element={<PDP />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
