import React from "react";
import styles from "./Classify.module.scss";
import ItemClassify from "./ItemClassify";
import classify1 from "../../../../assets/images/classify/classify1.png";
import classify2 from "../../../../assets/images/classify/classify2.png";
import classify3 from "../../../../assets/images/classify/classify3.png";
import classify4 from "../../../../assets/images/classify/classify4.png";
import classify5 from "../../../../assets/images/classify/classify5.png";
import classify6 from "../../../../assets/images/classify/classify6.png";
import classify7 from "../../../../assets/images/classify/classify7.png";
import classify8 from "../../../../assets/images/classify/classify8.png";

function Classify() {
  return (
    <div className={styles.classify}>
      <div className="container">
        <div className={styles.main}>
          <ItemClassify image={classify1} des="Hot trong ngày" />
          <ItemClassify image={classify2} des="Thực phẩm" />
          <ItemClassify image={classify3} des="Vận chuyển" />
          <ItemClassify image={classify4} des="Khoan đục lắp ghép" />
          <ItemClassify image={classify5} des="Giúp việc" />
          <ItemClassify image={classify6} des="Đầu bếp" />
          <ItemClassify image={classify7} des="Điện nước" />
          <ItemClassify image={classify8} des="Điều hòa" />
        </div>
      </div>
    </div>
  );
}

export default Classify;