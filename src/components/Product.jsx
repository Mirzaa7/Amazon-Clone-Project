import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <div className="product-info-2">
        <img src={image}></img>
        <button
          onMouseOver={(event) => {
            event.target.style.opacity = "0.9";
          }}
          onMouseOut={(event) => {
            event.target.style.opacity = "";
          }}
          onClick={addToBasket}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
