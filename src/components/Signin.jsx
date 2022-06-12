import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Signin(props) {
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(props.email, props.password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register-signin">
      <h1>Sign in</h1>
      <h5>Email</h5>
      <input
        type="email"
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      ></input>
      <h5>Password</h5>
      <input
        type="password"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      ></input>
      <button type="submit" onClick={signIn}>
        Sign in
      </button>
    </div>
  );
}

export default Signin;
