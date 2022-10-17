import React from "react";
import PropTypes from "prop-types";

// ROUTER-DOM
import { Link } from "react-router-dom";

// REDUX
import { useDispatch } from "react-redux";
import { set } from "../redux/product-modal/productModalSlice";


// COMPONENT
import Button from "./Button";

// ASSETS
import productData from "../assets/fake-data/products";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card__item">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__images">
          <img src={props.image01} className="product-card__images-01" alt="" />
          <img src={props.image02} className="product-card__images-02" alt="" />
        </div>
        <div className="product-card__info">
          <h3 className="product-card__title">{props.title}</h3>
          <div className="product-card__price">
            <span className="product-card__price-discount">
              {Number(props.price).toLocaleString()}
            </span>
            <del className="product-card__price-undiscount">399,000</del>
          </div>
        </div>
      </Link>
      <div className="product-card__button">
        <Button
          icon="fa fa-shopping-bag"
          size="sm"
          backgroundColor="main"
          animation={true}
          onClick={() => dispatch(set(props.slug))}
        >
          Chọn mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
