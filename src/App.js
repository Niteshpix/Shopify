import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Signup from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import axios from "axios";
import Protected from "./Routes/Protected";

const stripeTest = loadStripe(process.env.REACT_APP_STRIPE_KEY);
axios.defaults.baseURL = process.env.REACT_APP_BASE_API;

const App = () => {
  return (
    <>
      <Elements stripe={stripeTest}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/view/:productId" element={<ProductDetails/>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </Router>
      </Elements>
    </>
  );
};

export default App;
