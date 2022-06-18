import React from 'react';
import { BsSearch } from 'react-icons/bs';

// import SearchPost from './search-post';
import Product from './product';
import styles from './Search.module.scss';

function Search({ keyword, data }) {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>
                    <div className={styles.icon}>
                        <BsSearch></BsSearch>
                    </div>
                    <p>
                        Tất cả tìm kiếm cho <span>{keyword}</span>
                    </p>
                </div>
                <h4 className={styles.des}>Sản phẩm</h4>

                <div className={styles.searchProduct}>
                    {data?.map((item) => (
                        <Product key={item._id} data={item}></Product>
                    ))}
                </div>

                {/* <h4 className={styles.postTitle}>Bài viết</h4>

                <div className={styles.searchPosts}>
                    <SearchPost></SearchPost>
                    <SearchPost></SearchPost>
                    <SearchPost></SearchPost>
                </div> */}
            </div>
        </div>
    );
}

export default Search;
