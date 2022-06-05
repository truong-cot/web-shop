import React from "react";
import styles from "./BlogContent.module.scss";
import { AiOutlineEye } from "react-icons/ai";

function BlogContent() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.image}>
          <img
            src="https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="anh blog"
          />
        </div>

        <div className={styles.title}>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
        </div>

        <div className={styles.description}>
          <div className={styles.time}>
            <p>
              <span>4</span>h trước
            </p>
          </div>

          <div className={styles.watch}>
            <div className={styles.icon}>
              <AiOutlineEye></AiOutlineEye>
            </div>
            <p>
              <span>16.576 </span>đã xem
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>Why do we use it? </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Where does it come from? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry
            is standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
