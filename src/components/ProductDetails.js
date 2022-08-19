import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product";
import { Box, Button, Paper, Radio, styled } from "@mui/material";
import { green } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@mui/styles";
import { SetProductdetails } from "../redux/Slices/ProductSlice";
import { add } from "../redux/Slices/cartSlice";


//import { setStatus } from './ProductSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography,
  padding: theme.spacing,
  color: theme.palette,
}));

const GreenRadio = withStyles({
  root: {
    color: green,
    "&$checked": {
      color: green,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

function ProductDetails() {
  const { productId } = useParams();
  //const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.Productdetails);
  //const {cart} = useSelector((state) => state);
    //  let x = cart.some((p) => p.id === products.id)
    //  console.log(x)



  const fetchProductDetails = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    dispatch(SetProductdetails(data));
    //dispatch(setStatus(STATUSES.IDLE))
    //console.log(data)
  };

  React.useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetails(productId);
    }
  }, [productId]);

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop:3, paddingX: "10rem" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={6} md={4}>
            <img
              style={{ width: "200px", height: "250px" }}
              src={products?.image}
              alt=""
            />

            <img
              style={{ width: "200px", height: "250px" }}
              src={products?.image}
              alt=""
            />

            <img
              style={{ width: "200px", height: "250px" }}
              src={products?.image}
              alt=""
            />
          </Grid>

          <Grid item xs={2} sm={6} md={8}>
            <Item style={{ padding: "10px" }} className="itm">
              <h4>{products?.title}</h4>
              <p>{products?.description}</p>
              <h4>₹{products?.price}</h4>
              <h4>Qty:1</h4>

              <div>
              <span>Select Size</span>
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "A" }}
                />
                28
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "B" }}
                />
                30
                <GreenRadio
                  checked={selectedValue === "c"}
                  onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "C" }}
                />
                32
                <Radio
                  checked={selectedValue === "d"}
                  onChange={handleChange}
                  value="d"
                  color="default"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "D" }}
                />
                36
                <Radio
                  checked={selectedValue === "e"}
                  onChange={handleChange}
                  value="e"
                  color="default"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "E" }}
                  size="small"
                />
              </div>
             
              <Button variant="contained" color="secondary" onClick={()=>(dispatch(add(products)))} >
                Add to cart
              </Button>
              <Button variant="contained" color="success" sx={{marginLeft:"4px"}}>
                Checkout
            </Button>
            </Item>
          </Grid>
        </Grid>
        <h1>Related Products</h1>
        <Product/>
      </Box>
    </div>
  );
}

export default ProductDetails;
