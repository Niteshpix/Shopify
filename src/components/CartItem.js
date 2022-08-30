import React from "react";
import { Delete } from "@mui/icons-material";
import { remove } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { Box, Grid, Paper, styled } from "@mui/material";
import {ToastContainer, toast } from "react-toastify";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography,
  padding: theme.spacing,
  color: theme.palette,
}));

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  
  const removeItemFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed", { position: "top-right" });
  
  };

  return (
    <>
    <ToastContainer/>
      <Box sx={{ flexGrow: 1, marginTop: 3, paddingX: "10rem" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={6} md={6}>
            <Item style={{ padding: "10px" }} className="itm">
              <div onClick={removeItemFromCart} className="delete">
                <Delete className="text-gray-800" />
              </div>
              <img
                style={{ width: "150px", height: "160px" }}
                src={item.image}
                alt=""
              />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <h5>₹{item.price}</h5>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CartItem;
