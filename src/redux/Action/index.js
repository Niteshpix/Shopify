import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ActionTypes } from "../Constraints/Constraint";

export const addToCart = (productId) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: productId,
  };
};

export const removeFromCart = () => {
  enqueueSnackbar(`Item removed from your cart!`, {
    variant: "warning",
    autoHideDuration: 3000,
  });
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(
        process.env.REACT_APP_SIGNUP_API,
        {
          name: values.name,
          email: values.email,
          password: values.password,
        }
      );

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);


