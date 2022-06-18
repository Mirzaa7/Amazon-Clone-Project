import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";
import { motion } from "framer-motion";

function CheckoutProduct({ id, image, title, price, rating, hidden }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} />

      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        {!hidden && (
          <button
            onClick={removeFromBasket}
            onMouseOver={(event) => {
              event.target.style.opacity = "0.9";
            }}
            onMouseOut={(event) => {
              event.target.style.opacity = "";
            }}
          >
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
