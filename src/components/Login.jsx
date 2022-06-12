import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Signin from "./Signin";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        ></img>
      </Link>

      <div className="login-container">
        <form>
          {
            <Signin
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            ></Signin>
          }
        </form>
        {
          <span className="register-element">
            <p>Don't have an Amazon account?</p>
            <Link to={"/register"}>
              <p>Register here</p>
            </Link>
          </span>
        }
        <h6>
          NOTE: When testing the sign in function, instead of a generic password
          like "123", use a stronger password like with upper and lower case
          letters, numbers, symbols, etc. Because browsers like Google Chrome
          will check that password with a list of common passwords published
          online and prompt you a warning message.
        </h6>
      </div>
    </div>
  );
}

export default Login;
