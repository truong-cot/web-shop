import React from "react";
import styles from "./GroupNewPost.module.scss";
import NewPostItem from "./../NewPostItem";

function GroupNewPost() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <NewPostItem></NewPostItem>
        <NewPostItem></NewPostItem>
        <NewPostItem></NewPostItem>
      </div>
    </div>
  );
}

export default GroupNewPost;
