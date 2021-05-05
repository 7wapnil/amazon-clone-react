import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>299.50</strong>
          <div className="product__rating">
            <p>🌟</p>
            <p>🌟</p>
            <p>🌟</p>
          </div>
        </p>
      </div>
      <img src="https://pyxis.nymag.com/v1/imgs/a0d/909/fa01aa2d6acc4d4e25a68130736d2653b5-02-kim-kardashian-magazine-cover.rvertical.w330.jpg" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
