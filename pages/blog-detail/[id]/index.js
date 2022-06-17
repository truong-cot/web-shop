import React, { useEffect, useState } from 'react';
import styles from './BlogDetail.module.scss';
import { AiOutlineEye } from 'react-icons/ai';

import { useRouter } from 'next/router';
import blogAPI from '../../../api/blog';

function BlogDetail() {
    const router = useRouter();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const getBlog = async () => {
            const res = await blogAPI.getBlog(router.query.id);
            setBlog(res.payload);
        };
        getBlog();
    }, [router.query.id]);

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={blog.img} alt={blog.title} />
            </div>

            <div className={styles.title}>
                <h4>{blog.title}</h4>
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
                        <span>{blog.__v} </span>đã xem
                    </p>
                </div>
            </div>

            <div className={styles.content}>
                <p>{blog.content}</p>
            </div>
        </div>
    );
}

export default BlogDetail;
