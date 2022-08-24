import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";
import Product from "./components/Product";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Signup from "./pages/Register";
import Dashboard from "./pages/Dashboard";


const stripeTest = loadStripe(process.env.REACT_APP_STRIPE_KEY)



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
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
      </Router>
      </Elements>
    </>
  );
};

export default App;
