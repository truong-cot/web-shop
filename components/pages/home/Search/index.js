import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';

// import searchApi from '../../../../api/searchProduct';
import useDebounce from '../../../../hooks/useDebounce';
import SearchProduct from './../../../../components/pages/search-product';
import styles from './Search.module.scss';

function Search() {
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const debounced = useDebounce(keyword, 500);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleClick = () => {
        setKeyword('');
    };

    useEffect(() => {
        if (!keyword.trim()) {
            return;
        }

        fetch(`http://localhost:5000/api/products/search?value=${encodeURIComponent(debounced)}`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.response.menus);
            });
    }, [debounced, keyword]);

    return (
        <div className={styles.searchMain}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.item}>
                        {keyword !== '' && <div className="overlay" onClick={handleClick}></div>}

                        <div className={styles.input}>
                            {keyword !== '' && (
                                <div className={styles.searchMain}>
                                    <SearchProduct keyword={keyword} data={searchResult} />
                                </div>
                            )}
                            <input type="text" placeholder="Tìm kiếm" onChange={handleChange} value={keyword} />
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
