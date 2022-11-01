import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routers/Routes";

import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="wrapper">
            <Header />
            <Routes />
            <Footer />
            <ProductViewModal />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
