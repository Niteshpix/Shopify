import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";
import Product from "./components/Product";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripeTest = loadStripe('pk_test_51LZSJNSIxmhuOHarMsP4u9etP8oEcN7a1wz2vamCD8SeZW1cDz6QxOj2vsgo7bpViXnzm2Yd0bedYFQEYJRAGG1T00h5Q6jyE7')



const App = () => {
  return (
    <>
    <Elements stripe={stripeTest}>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Product />} />
           
            <Route exact path="/cart" element={<Cart />} />
         
            <Route path="/view/:productId" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </Router>
      </Elements>
    </>
  );
};

export default App;
