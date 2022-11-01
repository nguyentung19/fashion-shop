import React, { useState, useEffect } from "react";

// REDUX
import { useDispatch } from "react-redux";
import { addItem } from "../redux/shopping-cart/shoppingCart";

// COMPONENT
import Button from "../components/Button";

const ProductView = (props) => {
  const dispatch = useDispatch();
  let { product } = props;
  
  if (product === undefined)
    product = {
      image01: "",
      colors: [],
      size: [],
    };

  const [previewImg, setPreviewImg] = useState(product.image01);
  const [expandDetail, setExpandDetail] = useState(false);

  // CART
  const [colorSelect, setColor] = useState(undefined);
  const [sizeSelect, setSize] = useState(undefined);
  const [productQuantity, setProductQuantity] = useState(1);

  const check = () => {
    if (colorSelect === undefined) {
      alert("Select Color");
      return false;
    }
    if (sizeSelect === undefined) {
      alert("Select size");
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          color: colorSelect,
          size: sizeSelect,
          quantity: productQuantity,
          slug : product.slug,
          product : product
        })
      );
      alert("success")
    }
  };

  const updateQuantity = (boolean) => {
    if (boolean) {
      setProductQuantity((prev) => prev + 1);
    } else {
      setProductQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    window.scrollTo(0, 0);
    setColor(undefined);
    setSize(undefined);
    setProductQuantity(1);
  }, [product]);

  return (
    <>
      {/* BODY LEFT */}
      <div className="product__preview">
        <div className="product__preview-images">
          <div className="product__preview-images-select">
            <img
              src={product.image01}
              alt=""
              onClick={() => {
                setPreviewImg(product.image01);
              }}
            />
            <img
              src={product.image02}
              alt=""
              onClick={() => {
                setPreviewImg(product.image02);
              }}
            />
          </div>
          <div className="product__preview-images-main">
            <img src={previewImg} alt="" />
          </div>
        </div>
        <div className="product__preview-detail">
          <h2 className="product__preview-detail-header">Chi tiết sản phẩm</h2>
          <div
            className={`product__preview-detail-body ${
              expandDetail ? "expand" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div
            className="product__preview-detail-btn"
            onClick={() => {
              setExpandDetail(!expandDetail);
            }}
          >
            <button>{expandDetail ? "Thu Gọn" : "Xem thêm"}</button>
          </div>
        </div>
      </div>
      {/* BODY RIGHT */}
      <div className="product__info">
        <h2 className="product__info-title">{product.title}</h2>
        {/* BODY RIGHT PRICE */}
        <p className="product__info-price">
          {Number(product.price).toLocaleString()}
        </p>
        {/* BODY RIGHT COLORS */}
        <div className="product__info_color">
          <h3 className="product__info_color-title">Màu sắc</h3>
          <div className="product__info_color-list">
            {product.colors.map((color, index) => {
              return (
                <p
                  className={`product__info-circle ${
                    color === colorSelect ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setColor(color)}
                >
                  <span
                    className={`bg-${color} product__info_color-item`}
                  ></span>
                </p>
              );
            })}
          </div>
        </div>
        {/* BODY RIGHT SIZE */}
        <div className="product__info_size">
          <h3 className="product__info_color-title">Size</h3>
          <div className="product__info_size-list">
            {product.size.map((item, index) => {
              return (
                <p
                  className={`product__info-circle ${
                    item === sizeSelect ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setSize(item)}
                >
                  <span className="product__info_size-item">{item}</span>
                </p>
              );
            })}
          </div>
        </div>
        {/* BODY RIGHT QUANTITY */}
        <div className="product__info_quantity">
          {/* MINUS */}
          <div
            className="product__info_quantity-minus"
            onClick={() => updateQuantity(false)}
          >
            <i className="fa fa-minus"></i>
          </div>
          {/* QUANTITY */}
          <div className="product__info_quantity-number">{productQuantity}</div>
          {/* PLUS */}
          <div
            className="product__info_quantity-plus"
            onClick={() => updateQuantity(true)}
          >
            <i className="fa fa-plus"></i>
          </div>
        </div>
        {/* BODY RIGHT ADD/BUY */}
        <div className="product__info_buy">
          <Button backgroundColor="main" onClick={addToCart}>
            Thêm vào giỏ
          </Button>
          <Button backgroundColor="main">Mua ngay</Button>
        </div>
      </div>
    </>
  );
};

export default ProductView;
