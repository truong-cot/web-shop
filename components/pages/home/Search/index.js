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
              {keyword !== "" && (
                <div className={styles.searchMain}>
                  <SearchProduct keyword={keyword} />
                </div>
              )}
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
        </div>
      </div>
    </div>
  );
}

export default Search;
