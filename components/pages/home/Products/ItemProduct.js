import React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { BsFillStarFill, BsFillCartCheckFill } from 'react-icons/bs';

import Button from '../../../control/Button';
import { addToCart } from '../../../../redux/actions/cart';
import { convertCoin } from '../../../../common/func/convertCoin';
import imgBtnAddCart from '../../../../assets/images/products/btnAddCart.png';
import styles from './Products.module.scss';

function ItemProduct({ data }) {
    const newCount = data?.price - (data?.discount * data?.price) / 100;

    const dispatch = useDispatch();
    // const { cart } = useSelector((state) => state.cart);
    // Add to cart
    const handleAddToCart = () => {
        dispatch(addToCart({ ...data, quantily: 1 }));
        toast.success('Sản phẩm đã được thêm vào giỏ hàng');
    };

    return (
        <div className={styles.itemMain}>
            <div className={styles.img}>
                <Link href={`/product-detail/${data?._id}`}>
                    <a>
                        <img src={data?.img} alt="anh san pham" />
                    </a>
                </Link>
            </div>

            <div className={styles.title}>
                <Link href={`/product-detail/${data?._id}`}>
                    <a>{data?.title}</a>
                </Link>
            </div>

            <div className={styles.description}>
                <div className={styles.star}>
                    <div className={styles.icon}>
                        <BsFillStarFill />
                    </div>
                    <span>{data?.rate}</span>
                </div>

                <div className={styles.cart}>
                    <div className={styles.icon}>
                        <BsFillCartCheckFill />
                    </div>
                    <span>Đã bán {data?.sold}</span>
                </div>
            </div>

            <div className={styles.sale}>
                <del>{convertCoin(data?.price)}đ</del>
                <span>-{data?.discount}%</span>
            </div>

            <div className={styles.price}>
<<<<<<< HEAD
                <h5>{newCount} vnđ</h5>
=======
                <h5>{convertCoin(newCount)}đ</h5>
>>>>>>> 99bb64d3f007f14bf5c4d1b9b3bde131be8d9798
                <div className={styles.btnProduct} onClick={handleAddToCart}>
                    <Button>
                        <img src={imgBtnAddCart.src} alt="anh btn" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;
