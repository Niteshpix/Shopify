import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, registerUser } from "../Action";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  isAdmin: false,
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;
      if (token) {
        const user = token;
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },

    logoutUser(state) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        isAdmin: false,
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload;
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          registerStatus: action.payload,
        };
      } else return state;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: action.payload,
        registerError: action.payload,
      };
    });

    // login extra reducers
    builder.addCase(loginUser.pending,  (state, action) => {
      return { ...state, loginStatus: "pending" };
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload;
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          loginStatus: "success",
        };
      } else return state;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });

    //
    builder.addCase(getUser.pending, (state, action) => {
      return {
        ...state,
        getUserStatus: "pending",
      };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload;
        
        console.log(user);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          getUserStatus: "success",
        };
      } else return state;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      return {
        ...state,
        getUserStatus: "rejected",
        getUserError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
