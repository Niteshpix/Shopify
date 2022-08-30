import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getUser } from "../redux/Action";

function Dashboard() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  useEffect(() => {
    dispatch(getUser());
  }, [getUser]);

  return (
    <div>
      <h1>welcome to shopify</h1>
      <h3>{""}</h3>
    </div>
  );
}

export default Dashboard;
