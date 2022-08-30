import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Spinner from "../components/Spiner";
import { getUser, loginUser } from "../redux/Action";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import ReactFacebookLogin from "react-facebook-login";

const clientId ="841234692619-eodv19gt1gc623779q5ghr2rd2klh2f2.apps.googleusercontent.com";

const SigninSchema = Yup.object().shape({
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function Login() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 600,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginStatus, auth } = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [ profile, setProfile ] = useState([]);
  //console.log(profile)


  const { email, password } = user;
  const handleSubmit = () => {
    dispatch(loginUser(user));
    navigate("/dashboard");
  };

  const HandleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  if (loginStatus === "Submiting") {
    return <Spinner />;
  }

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    //console.log("success:", res.profileObj);
    setProfile(res.profileObj);
    //navigate("/dashboard")
  
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };


  const responseFacebook = (response) => {
    console.log(response);
    // setData(response);
    // setPicture(response.picture.data.url);
    // if (response.accessToken) {
    //   setLogin(true);
    // } else {
    //   setLogin(false);
    // }
  }

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Sign In !!!</h2>
            <Avatar style={avatarStyle}></Avatar>
            <div style={{ marginTop: "12px"}}>
              <ReactFacebookLogin
              appId="921201001964201"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
            </div>
            
            <h3>or</h3>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false}
              />
        
          </Grid>
    
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SigninSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="styleform" onChange={HandleChange}>
                <label className="form-label">Email</label>
                {errors.email && touched.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}
                <Field
                  type="email"
                  placeholder="email"
                  name="email"
                  value={email}
                />

                <label className="form-label">Password</label>
                {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}
                <Field
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                />

                <Button variant="contained" color="success" type="submit">
                  {loginStatus === "pending" ? "Submitting..." : "Login"}
                </Button>

                <Typography>
                  <Link to={"/"}>Forgot password ?</Link>
                </Typography>
                <Typography>
                  Do you have already account ?
                  <Link to={"/signup"}>
                    <Button color="inherit">SignUp</Button>
                  </Link>
                </Typography>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
