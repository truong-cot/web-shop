import { useState } from "react";
import styles from "./Search.module.scss";
import Button from "../../../../components/control/Button";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchProduct from "./../../../../components/pages/search-product";

function Search() {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = () => {
    setKeyword("");
  };

  return (
    <div className={styles.searchMain}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.item}>
            {keyword !== "" && (
              <div className="overlay" onClick={handleClick}></div>
            )}
            <div className={styles.input}>
              {keyword !== "" && <SearchProduct keyword={keyword} />}
              <input
                type="text"
                placeholder="Tìm kiếm"
                onChange={handleChange}
                value={keyword}
              />
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
