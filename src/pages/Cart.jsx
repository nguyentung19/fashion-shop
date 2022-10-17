import React, { useState, useEffect } from "react";


// REDUX
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "../redux/shopping-cart/shoppingCart";

// COMPONENT
import Helmet from "../components/Helmet";
import Button from "../components/Button";

// REACT ROUTER DOM 
import { Link } from "react-router-dom";

const Cart = (props) => {
  const dispath = useDispatch()
  const cartItems = useSelector((state) => state.cartItems.productsArray);

  const [totalProducts, setTotalProducts] = useState(0)
  const [totalBill, setTotalBill] = useState(0)
  
  
  useEffect(() => {

    setTotalBill(cartItems.reduce((total, item) => {
      return total += item.quantity * item.product.price
    }, 0))

    setTotalProducts(cartItems.length)

  }, [cartItems])

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <p className="cart__info-totalProducts">
            Bạn đang có <span>{totalProducts}</span> sản phẩm trong giỏ hàng
          </p>
          <div className="cart__total">
            <p className="cart__total-title">Thành tiền</p>
            <p className="cart__total-number">{totalBill.toLocaleString()}</p>
          </div>
          <div className="cart__btn">
            <Button backgroundColor="main">Đặt hàng</Button>
            <Link to="/catalog">
              <Button backgroundColor="main">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <table className="cart__list">
          <thead className="cart__list_head">
            <tr className="cart__list_head-row">
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Size</th>
              <th>Color</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody className="cart__list-body">
            {
             cartItems.map((item, index) => {
               return (
                <tr className="cart__list-item" key={index}>
                <td>{item.id}</td>
                <td className="cart__list-item-img">
                  <img src={item.product.image01} alt="" />
                </td>
                <td>{item.product.title}</td>
                <td>{Number(item.product.price).toLocaleString()}</td>
                <td>{item.size}</td>
                <td>{item.color}</td>
                <td className="cart__list-item-quantity">
                  <div className="product__info_quantity">
                    {/* MINUS */}
                    <div
                      className="product__info_quantity-minus"
                      onClick={() => dispath(updateQuantity({id : item.id, boolean : false}))}
                    >
                      <i className="fa fa-minus"></i>
                    </div>
                    {/* QUANTITY */}
                    <div className="product__info_quantity-number">{item.quantity}</div>
                    {/* PLUS */}
                    <div
                      className="product__info_quantity-plus"
                      onClick={() => dispath(updateQuantity({id : item.id, boolean : true}))}
                    >
                      <i className="fa fa-plus"></i>
                    </div>
                  </div>
                </td>
                <td>
                  <i className="fa fa-trash-alt" onClick={() => dispath(removeItem(item.id))}></i>
                </td>
              </tr>
               )
             })
            }
          </tbody>
        </table>
      </div>
    </Helmet>
  );
};

export default Cart;
