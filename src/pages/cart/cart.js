import React from "react";
import "./cart.scss";
export const Cart = () => {
  return (
    <div className="container">
      <h1>Giỏ hàng của bạn</h1>
      <div className="shopping-cart">
        <div className="column-labels">
          <label className="product-image">Hình ảnh</label>
          <label className="product-details">Sản phẩm</label>
          <label className="product-price">Giá</label>
          <label className="product-quantity">Số lượng</label>
          <label className="product-removal">Xóa</label>
          <label className="product-line-price">Tổng</label>
        </div>
        <div className="product">
          <div className="product-image">
            <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg" />
          </div>
          <div className="product-details">
            <div className="product-title">Dingo Dog Bones</div>
            <p className="product-description">
              The best dog bones of all time. Holy crap. Your dog will be
              begging for these things! I got curious once and ate one myself.
              I'm a fan.
            </p>
          </div>
          <div className="product-price">12.99</div>
          <div className="product-quantity">
            <input type="number" defaultValue={2} min={1} />
          </div>
          <div className="product-removal">
            <button className="remove-product">Xóa</button>
          </div>
          <div className="product-line-price">25.98</div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png" />
          </div>
          <div className="product-details">
            <div className="product-title">
              Nutro™ Adult Lamb and Rice Dog Food
            </div>
            <p className="product-description">
              Who doesn't like lamb and rice? We've all hit the halal cart at
              3am while quasi-blackout after a night of binge drinking in
              Manhattan. Now it's your dog's turn!
            </p>
          </div>
          <div className="product-price">45.99</div>
          <div className="product-quantity">
            <input type="number" defaultValue={1} min={1} />
          </div>
          <div className="product-removal">
            <button className="remove-product">Xóa</button>
          </div>
          <div className="product-line-price">45.99</div>
        </div>
        <div className="totals">
          <div className="totals-item">
            <label>Tổng phụ</label>
            <div className="totals-value" id="cart-subtotal">
              71.97
            </div>
          </div>
          <div className="totals-item">
            <label>Phí giao hàng</label>
            <div className="totals-value" id="cart-shipping">
              15.00
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Tổng cộng</label>
            <div className="totals-value" id="cart-total">
              90.57
            </div>
          </div>
        </div>
        <button className="checkout">Tiến hành thanh toán</button>
      </div>
    </div>
  );
};
