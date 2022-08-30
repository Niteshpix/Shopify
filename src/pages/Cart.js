import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import "../components/index.css";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button } from "@mui/material";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);

  const stripe = useStripe(false);
  const elements = useElements();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const cardElement = elements.getElement("cardNumber");
    stripe
      .createToken(cardElement)
      .then((payload) => console.log("[token]", payload));
    
  };

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="row">
            <div className="col-6">
              {cart.map((item, id) => {
                return <CartItem key={id} item={item} />;
              })}
            </div>
            <div>
              <div className="summry">
                <h1 className="font-semibold text-lg text-purple-800">
                  YOUR CART SUMMARY
                </h1>
                <p>
                  <span className="text-gray-700 font-semibold">
                    Total Items
                  </span>{" "}
                  : {cart.length}
                </p>
                <p>
                  {" "}
                  <span className="text-gray-700 font-semibold">
                    Total Amount
                  </span>{" "}
                  : ${totalAmount}
                </p>

                <form onSubmit={handleSubmit}>
                  <h4>Card No</h4>
                  <CardNumberElement />
                  <h4>card Expiry</h4>
                  <CardExpiryElement />
                  <h4>Cvv</h4>
                  <CardCvcElement />
                  <Button
                    disabled={!stripe}
                    variant="contained"
                    style={{ marginTop: "10px" }}
                  >
                    Pay !!
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="cart">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              Your cart is empty!
            </h1>
            <Link to={"/"}>
              <Button variant="contained" color="success">
                SHOP NOW
              </Button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
