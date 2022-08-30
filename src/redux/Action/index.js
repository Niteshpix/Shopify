import { ActionTypes } from "@mui/base";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post("register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post("login", {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", JSON.stringify(token.data));
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const setHeaders = () => {
  const headers = {
    headers: {
      token: localStorage.getItem("token", JSON.stringify("token")),
    },
  };
  console.log(headers);

  return headers;
};

export const getUser = createAsyncThunk(
  "auth/getUser",
  async ({ rejectWithValue }) => {
    try {
      const token = await axios.get("user-profile", setHeaders());

      localStorage.setItem("token", JSON.stringify(token));
      console.log(token);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);


// const googleSignInStart = () => ({
//   type:ActionTypes.GOOGLE_LOGIN_START,
// })
export const googleSignInStart = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post("login", {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", JSON.stringify(token.data));
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);




const googleSignInSuccess = () => ({
  type:ActionTypes.GOOGLE_LOGIN_SUCCESS,
  payload:user,
})
const googleSignInFail = () => ({
  type:ActionTypes.GOOGLE_LOGIN_FAIL,
  payload:error,
})


export const googleSignInInitiator = () => {
  return function(dispatch){
    dispatch(googleSignInStart());
    auth.signInwithPopup(GoogleAuthProvider).then(({user})=>{
      dispatch(googleSignInSuccess(user))
    }).catch((error) => dispatch(googleSignInFail(error.message)))
  }

}