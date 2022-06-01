import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "./Information.module.scss";

import { BsFillStarFill, BsCartCheck } from "react-icons/bs";
import Button from "../../../control/Button";

import imageProduct from "./../../../../assets/images/productDetail/imageProduct.png";
import image1 from "./../../../../assets/images/productDetail/image1.png";
import image2 from "./../../../../assets/images/productDetail/image2.png";
import image3 from "./../../../../assets/images/productDetail/image3.png";
import image4 from "./../../../../assets/images/productDetail/image4.png";

function Information({data}) {

  // Get value size
  const sizes = ["S", "M", "L", "XL"];
  const [getValueSize, setGetValueSize] = useState(imageProduct);
  const [size, setSize] = useState(data.size)

  // Change image product
  const listImage = [image1, image2, image3, image4];
  const [changeImage, setChangeImage] = useState(imageProduct);

  // Change quantity
  const [quantity, setQuantity] = useState(1);

  const handleReduce = () => {
    setQuantity(quantity - 1);
    if (quantity <= 0) {
      setQuantity(0);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };


  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.image}>
            <div className={styles.imageInfo}>
              <img src={data?.img} alt="anh chi tiet san pham" />
            </div>

            {listImage.map((imageItem, index) => {
              return (
                <div
                  key={index}
                  className={styles.item}
                  onClick={() => setChangeImage(imageItem)}
                >
                  <img src={imageItem.src} alt="anh chi tiet san pham" />
                </div>
              );
            })}
          </div>

          <div className={styles.informaiton}>
            <div className={styles.title}>
              <h4>{data?.title}</h4>
            </div>
            <div className={styles.description}>
              <div className={styles.star}>
                <div className={styles.icon}>
                  <BsFillStarFill></BsFillStarFill>
                </div>
                <div className={styles.text}>
                  <span>{data?.rate}</span>
                </div>
              </div>

              <div className={styles.soldOut}>
                <div className={styles.icon}>
                  <BsCartCheck></BsCartCheck>
                </div>
                <div className={styles.text}>
                  <span>Đã bán {data?.sold}</span>
                </div>
              </div>
            </div>

            <div className={styles.price}>
              <del className={styles.prevPrice}>{data?.price}$</del>
              <h4 className={styles.beforePrice}>{data.price - data.discount*data.price/100}$</h4>
              <p className={styles.sale}>
                -<span>{data.discount}%</span>
              </p>
            </div>

            <div className={styles.sizes}>
              <div className={styles.title}>
                <p>Size</p>
              </div>
              <div className={styles.groupSize}>
                {size?.map((ele, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => {
                        setGetValueSize(ele);
                      }}
                    >
                      {ele}
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className={styles.quantity}>
              <p className={styles.title}>Số lượng</p>
              <div className={styles.groupBtn}>
                <button onClick={handleReduce}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
              </div>
            </div>

            <div className={styles.control}>
              <Button rounded productDetail search>
                Thêm vào giỏ hàng
              </Button>
              <Link href="/payment">
                <Button primary rounded productDetail>
                  Mua ngay
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
