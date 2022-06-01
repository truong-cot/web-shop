import React from "react";
import QuestionItem from "./../../components/pages/profile/QuestionItem";
import styles from "./Question.module.scss";
import NavProfile from "./../../components/pages/profile/NavProfile";
import ContentProfile from "./../../components/pages/profile/ContentProfile";

function Question() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <NavProfile />
          <ContentProfile>
            <div>
              <QuestionItem></QuestionItem>
              <QuestionItem></QuestionItem>
              <QuestionItem></QuestionItem>
              <QuestionItem></QuestionItem>
              <QuestionItem></QuestionItem>
            </div>
          </ContentProfile>
        </div>
      </div>
    </div>
  );
}

export default Question;
