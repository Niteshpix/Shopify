import React, { useState } from "react";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "../components/index.css";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/Action";

function Register() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 600,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  //const btnstyle = { margin: "8px 0" };

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.token);
 //console.log(auth)

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(user);
    if(user){
      dispatch(registerUser(user));
      alert('sucess')
    }else{
      alert('error')
    }
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>SignUp</h2>
          </Grid>
          <form className="styleform" onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="name"
              required
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
           
            <Button variant="contained" color="success" type="submit">
              {auth.rigisterStatus === "pending" ? "Submitting..." : "Register"}
            </Button>
            {auth.registerStatus === "rejected" ? (
              <p>{auth.registerError}</p>
            ) : null}

            <Typography>
              Forgot password ?
              <Link to={"/"}>
                <Button color="secondary">click</Button>
              </Link>
            </Typography>
           
            <Typography>
              Do you have an account ?
              <Link to={"/login"} >
                <Button color="secondary">SignIn</Button>
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default Register;
