import React from 'react';
import styles from './BlogDetail.module.scss';
import Link from 'next/link';

import BlogContent from './../../components/pages/blog-detail/BlogContent';
import GroupNewPost from './../../components/pages/blog-detail/GroupNewPost';
import InvolvePost from './../../components/pages/blog-detail/InvolvePost';

function BlogDetail() {
    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div className={styles.control}>
                            <Link href="./blogs">
                                <a>Blog</a>
                            </Link>
                            <p>{`>`}</p>
                            <p>Áo phông</p>
                        </div>

                        <div className={styles.title}>
                            <p>BÀI VIẾT MỚI NHẤT</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.blogContent}>
                            <BlogContent></BlogContent>
                        </div>

                        <div className={styles.newPost}>
                            <GroupNewPost></GroupNewPost>
                        </div>
                    </div>
                    <div className={styles.involvePost}>
                        <InvolvePost></InvolvePost>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
