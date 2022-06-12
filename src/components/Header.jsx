import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleSignOut = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        ></img>
      </Link>

      <div className="header-search">
        <input className="header-input" type="text"></input>
        <SearchIcon className="header-search-icon"></SearchIcon>
      </div>

      <div className="header-nav">
        <Link className="header-link" to={!user && "/login"}>
          <div onClick={handleSignOut} className="header-element">
            <span className="header-nav-element-one">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header-nav-element-two">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link className="header-link" to={"/orders"}>
          <div className="header-element">
            <span className="header-nav-element-one">Returns</span>
            <span className="header-nav-element-two">& Orders</span>
          </div>
        </Link>

        <Link className="header-link" to="/checkout">
          <div className="header-element-basket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header-nav-element-two header-nav-basket-count">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
