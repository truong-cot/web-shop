import React from "react";
import styles from "./Feedback.module.scss";
import NavProfile from "./../../components/pages/profile/NavProfile";
import ContentProfile from "./../../components/pages/profile/ContentProfile";

import Button from "./../../components/control/Button";

function Feedback() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <NavProfile />
          <ContentProfile>
            <form className={styles.form}>
              <textarea
                className={styles.text}
                placeholder="Đóng góp ý kiến của bạn"
              ></textarea>
              <Button primary rounded product>
                Gửi
              </Button>
            </form>
          </ContentProfile>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
