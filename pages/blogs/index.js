import React, { useEffect, useState } from 'react';
import styles from './Blogs.module.scss';
import BlogGroup from './../../components/pages/blogs/BlogGroup';
import SearchHearer from './../../components/pages/blogs/SearchHeader';
import blogAPI from '../../api/blog';

import EmptyBlog from './EmptyBlog.js';

function Blogs() {
    const [data, setData] = useState([]);

    const getBlogs = async () => {
        try {
            const res = await blogAPI.getBlogs();
            setData(res.payload);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    console.log('Blog', data);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.searchHeader}>
                    <SearchHearer></SearchHearer>
                </div>
                <div className={styles.blogGroup}>
                    {data.length === 0 ? <EmptyBlog /> : <BlogGroup data={data}></BlogGroup>}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
