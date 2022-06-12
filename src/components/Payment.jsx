import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { db } from "../firebase";
import moment from "moment";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  if (!user) navigate("/");

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to={"/checkout"}>{basket?.length} items</Link>)
        </h1>

        <h5>
          NOTE: The delivery address and the card details have no real function
          because this is a Amazon clone.
        </h5>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <h5>Email</h5>
            <p>{user?.email}</p>
            <h5>Address</h5>
            <input placeholder="Enter your address"></input>
          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
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
        </div>

        <div className="payment-section payment-section-last-element">
          <div className="payment-title">
            <h3>Payment method</h3>
          </div>
          <form
            onChange={(event) => {
              if (event.target.value === "") {
                setDisabled(true);
              } else {
                setDisabled(false);
              }
            }}
            onSubmit={(e) => {
              e.preventDefault();

              const submitDate = moment().format("MMMM Do YYYY, h:mma");

              const orderID =
                Math.floor(Math.random() * 1000000000000) + 1000000000000;

              db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .doc(orderID.toString())
                .set({
                  basket: basket,
                  submitDate: submitDate,
                  amount: getBasketTotal(basket),
                });

              dispatch({
                type: "EMPTY_BASKET",
              });
              navigate("/orders");
            }}
          >
            <div className="payment-info">
              <h5>Card details</h5>
              <div className="card-info-input">
                <CreditCardIcon></CreditCardIcon>

                <input
                  className="card-element-one"
                  placeholder="Card number"
                  maxLength={16}
                ></input>
                <input
                  className="card-element-two"
                  placeholder="MM /"
                  maxLength={2}
                ></input>
                <input
                  className="card-element-two"
                  placeholder="YY"
                  maxLength={2}
                ></input>
                <input
                  className="card-element-two"
                  placeholder="CVC"
                  maxLength={3}
                ></input>
                <input
                  className="card-element-two"
                  placeholder="ZIP"
                  maxLength={5}
                ></input>
              </div>

              <div className="payment-price-section">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h4>Order total: {value}</h4>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                ></CurrencyFormat>
                {!disabled && (
                  <button
                    type="submit"
                    onMouseOver={(event) => {
                      event.target.style.opacity = "0.9";
                    }}
                    onMouseOut={(event) => {
                      event.target.style.opacity = "";
                    }}
                  >
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
