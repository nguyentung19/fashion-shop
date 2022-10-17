import React, { useState, useEffect, useCallback } from "react";

// COMPONENT
import Helmet from "../components/Helmet";

// ASSETS
import category from "../assets/fake-data/category";
import colors from "../assets/fake-data/product-color";
import size from "../assets/fake-data/product-size";
import Checkbox from "../components/Checkbox";
import productData from "../assets/fake-data/products";
import InfinityList from "../components/InfinityList";

const Catalog = () => {
  const initFilter = {
    category: [],
    colors: [],
    sizes: [],
  };

  const [filter, setFilter] = useState(initFilter);
  const [products, setProducts] = useState(productData.products);

  const updateProducts = useCallback(() => {
    let temp = productData.products;

    if (filter.category.length > 0) {
      temp = temp.filter((item) => filter.category.includes(item.categorySlug));
    }

    if (filter.colors.length > 0) {
      temp = temp.filter((item) => {
        const check = item.colors.find((color) =>
          filter.colors.includes(color)
        );
        return check !== undefined;
      });
    }

    if (filter.sizes.length > 0) {
      temp = temp.filter((element) => {
        const check = element.size.find((sizeItem) =>
          filter.sizes.includes(sizeItem)
        );
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [filter]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLORS":
          setFilter({ ...filter, colors: [...filter.colors, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.sizes, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (element) => element !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLORS":
          const newColors = filter.colors.filter(
            (color) => color !== item.color
          );
          setFilter({ ...filter, colors: newColors });
          break;
        case "SIZE":
          const newSize = filter.sizes.filter((size) => size !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  return (
    <Helmet title="Sản phẩm">
      {/* {
        console.log(filter)
      } */}
      <div className="catalog">
        <div className="container catalog__container">
          <div className="catalog__filter">
            {/* CATEGORY*/}
            <div className="catalog__widget">
              <p className="catalog__widget-title">Danh mục sản phẩm</p>
              <div className="catalog__widget-content">
                {category.map((item, index) => (
                  <Checkbox
                    key={index}
                    item={item}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                  />
                ))}
              </div>
            </div>
            {/* COLORS */}
            <div className="catalog__widget">
              <p className="catalog__widget-title">Màu sắc</p>
              <div className="catalog__widget-content">
                {colors.map((item, index) => (
                  <Checkbox
                    key={index}
                    item={item}
                    onChange={(input) => {
                      filterSelect("COLORS", input.checked, item);
                    }}
                  />
                ))}
              </div>
            </div>
            {/* SIZE */}
            <div className="catalog__widget">
              <p className="catalog__widget-title">Size</p>
              <div className="catalog__widget-content">
                {size.map((item, index) => (
                  <Checkbox key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="catalog__content">
            <InfinityList products={products} />
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
