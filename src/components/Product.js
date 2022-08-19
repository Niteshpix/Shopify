import { Box, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../redux/Slices/cartSlice";
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
  


  //console.log(products);


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
             
                <Item style={{ padding: "10px" }} className="itm">
                <Link to={`/view/${product.id}`}>
                  <img
                    style={{ width: "200px", height: "250px" }}
                    src={product.image}
                    alt=""
                  />
                  </Link>
                  <h5>{product.title}</h5>
                  <span>₹{product.price}</span>
                  <Button variant="contained" color="secondary" onClick={()=>(dispatch(add(product)))} >
                    Add to cart
                  </Button>
                </Item>
               
             
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Product;
