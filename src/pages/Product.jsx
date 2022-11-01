import React, { useState, useEffect } from "react";

// ASSETS
import productData from "../assets/fake-data/products";

// COMPONENT
import Helmet from "../components/Helmet";
import Grid from "../components/Grid";

import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);

  return (
    <Helmet title={product.title}>
      <div className="product">
        <div className="container product__container">
          {/* BODY*/}
          <div className="product__body">
            <ProductView product={product}/>
          </div>
          {/* FOOTER */}
          <div className="product__footer">
            <h2 className="product__footer-title">Khám phá thêm</h2>
            <div className="product__footer-body">
              <Grid col={4} mdCol={2} smCol={1} gap={100}>
                {productData.getProducts(8).map((item, index) => {
                  return (
                    <ProductCard
                      title={item.title}
                      price={item.price}
                      image01={item.image01}
                      image02={item.image02}
                      slug={item.slug}
                      key={index}
                    />
                  );
                })}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Product;
