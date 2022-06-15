import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login,toggleLoading } from "./../../../redux/actions/auth";

function GetData({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(login(token));
    }

    dispatch(toggleLoading());
  }, []);
  return <>{children}</>;
}

export default GetData;
