import React, { useReducer } from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        ></img>
        <div>
          <h2 className="checkout-title">Your shopping Basket</h2>
        </div>
        {basket.map((basketItem) => {
          return (
            <CheckoutProduct
              id={basketItem.id}
              image={basketItem.image}
              title={basketItem.title}
              price={basketItem.price}
              rating={basketItem.rating}
            ></CheckoutProduct>
          );
        })}
      </div>
      <div className="checkout-right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
