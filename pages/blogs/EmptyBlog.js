import styles from './Blogs.module.scss';
import Image from 'next/image';

function EmptyBlog() {
    return (
        <div className={styles.containerEmpty}>
            <img
                className={styles.imgEmpty}
                src="https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="anh blog trong"
            />
            <div className={styles.title}>
                <h2>Bạn chưa có bài viết nào !!!</h2>
            </div>
        </div>
    );
}

export default EmptyBlog;
