import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/Slices/ProductSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography,
  padding: theme.spacing,
  color: theme.palette,
}));

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  console.log(products);


  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "0.5px", padding: "30px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products?.map((product) => (
            <Grid item xs={2} sm={3} md={3} key={product.id}>
              <Link to={`/view/${product.id}`}>
                <Item style={{ padding: "10px" }} className="itm">
                  <img
                    style={{ width: "200px", height: "250px" }}
                    src={product.image}
                    alt=""
                  />
                  <h5>{product.title}</h5>
                  <span>₹{product.price}</span>
                </Item>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Product;
