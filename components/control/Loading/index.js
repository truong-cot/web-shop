import React from "react";
// import Lottie from "react-lottie";
import iconLoader from "../../../assets/gif/loading.json";

import styles from "./Loading.module.scss";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: iconLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="overlay">

    </div>
  );
}

export default Loading;
