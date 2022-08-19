import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../Constraints/Constraint";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  status: STATUSES.IDLE,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;


