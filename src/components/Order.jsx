import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order-date">Orderd on: {order.data.submitDate}</p>
      <p className="order-id">
        <small>
          <strong>OrderID:</strong> {order.id}
        </small>
      </p>
      {order.data.basket?.map((basketItem) => (
        <CheckoutProduct
          id={basketItem.id}
          image={basketItem.image}
          title={basketItem.title}
          price={basketItem.price}
          rating={basketItem.rating}
          hidden
        ></CheckoutProduct>
      ))}
      <div className="order-total">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h4>Order total: {value}</h4>
            </>
          )}
          decimalScale={2}
          value={order.data.amount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        ></CurrencyFormat>
      </div>
    </div>
  );
}

export default Order;
