import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>

      <button
        onClick={() => {
          if (user) {
            setIsLoggedIn(true);
            if (basket.length === 0) {
              setIsEmpty(true);
            } else {
              setIsEmpty(false);
              navigate("/payment");
            }
          } else {
            setIsLoggedIn(false);
          }
        }}
        onMouseOver={(event) => {
          event.target.style.opacity = "0.9";
        }}
        onMouseOut={(event) => {
          event.target.style.opacity = "";
        }}
      >
        Proceed to Checkout
      </button>

      {!isLoggedIn && (
        <h5 className="login-error">Please sign in to continue!</h5>
      )}

      {isEmpty && <h5 className="login-error">The basket can not be empty!</h5>}
    </div>
  );
}

export default Subtotal;
