import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import ProductDetails from "./components/ProductDetails";
import Product from "./components/Product";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <>
      <Router>
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/view/:productId" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />


          </Routes>
        </SnackbarProvider>
      </Router>
    </>
  );
};

export default App;
