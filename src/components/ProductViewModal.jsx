import React, { useEffect, useState } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/product-modal/productModalSlice";

// ASSETS
import productData from "../assets/fake-data/products";

// COMPONENT
import ProductView from "./ProductView";
import Button from "./Button";

const ProductViewModal = (props) => {
  const dispatch = useDispatch();
  const productSlug = useSelector((state) => state.productModal.value);

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div className={`product-modal ${product !== undefined ? "active" : ""}`}>
      <div className="product-modal__container">
        <div className="product-modal__btn-close">
          <Button sm="sm" backgroundColor="main" onClick={() => {dispatch(remove())}}>
            Đóng
          </Button>
        </div>
        <ProductView product={product} />
      </div>
    </div>
  );
};

export default ProductViewModal;
