import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./../../../redux/actions/auth";

function GetData({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(login(token));
    }
  }, []);
  return <>{children}</>;
}

export default GetData;
