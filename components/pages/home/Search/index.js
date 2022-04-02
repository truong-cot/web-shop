import React from "react";
import styles from "./Search.module.scss";
import Button from "../../../../components/control/Button";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

function Search() {
  return (
    <div className={styles.searchMain}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.input}>
              <input type="text" placeholder="Tìm kiếm" />
              <div className={styles.icon}>
                <BsSearch />
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.top}>
              <p>Vị trí của bạn</p>
              <div className={styles.address}>
                <div className={styles.icon}>
                  <FaMapMarkerAlt />
                </div>
                <h5>C14 Bắc Hà - Chung cư Bộ Công An</h5>
              </div>
            </div>
            <div className={styles.icon}>
              <BsChevronDown />
            </div>
          </div>

          <div className={styles.item}>
            <Button search rounded>
              Thực đơn của bạn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
