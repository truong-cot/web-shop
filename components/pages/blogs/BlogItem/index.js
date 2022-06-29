import Link from 'next/link';
import { AiOutlineEye } from 'react-icons/ai';

import styles from './BlogItem.module.scss';

function BlogItem({ data }) {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.image}>
                    <Link href={`/blog-detail/${data?._id}`}>
                        <a>
                            <img src={data?.img} alt={data?.title} />
                        </a>
                    </Link>
                </div>

                <div className={styles.title}>
                    <Link href={`/blog-detail/${data?._id}`}>
                        <a>
                            <h4>{data?.title}</h4>
                        </a>
                    </Link>
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
                            <span>{data?.__v} </span>đã xem
                        </p>
                    </div>
                </div>

                <div className={styles.content}>
                    <p>{data?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
