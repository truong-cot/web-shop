import React from "react";
import styles from "./Feedback.module.scss";
import NavProfile from "./../../components/pages/profile/NavProfile";
import ContentProfile from "./../../components/pages/profile/ContentProfile";

function Feedback() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <NavProfile />
          <ContentProfile>day la trang gop ý</ContentProfile>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
