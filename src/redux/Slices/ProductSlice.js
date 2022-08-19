import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../Constraints/Constraint";


export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data:[],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    Productdetails: (id) => {
      return id;
    },
    SetProductdetails: (state, action) => {
      state.Productdetails = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {
  setProducts,
  setStatus,  
  Productdetails,
  SetProductdetails,
} = ProductSlice.actions;

export default ProductSlice.reducer;

//thunks
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
