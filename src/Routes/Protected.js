import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("token");
    //console.log(login)
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component />;
};

export default Protected;
