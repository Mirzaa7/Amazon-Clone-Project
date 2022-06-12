import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Register from "./Register";

function Signup() {
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
            <Register
              firstName={firstName}
              lastName={lastName}
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              setFirstName={setFirstName}
              setLastName={setLastName}
            ></Register>
          }
        </form>
      </div>
    </div>
  );
}

export default Signup;
