import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Register(props) {
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(props.email, props.password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register-signin">
      <h1>Register</h1>
      <h5>First name</h5>
      <input
        type="text"
        value={props.firstName}
        onChange={(e) => props.setFirstName(e.target.value)}
      ></input>
      <h5>Last name</h5>
      <input
        type="text"
        value={props.lastName}
        onChange={(e) => props.setLastName(e.target.value)}
      ></input>
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
      <button type="submit" onClick={register}>
        Create your Account
      </button>
    </div>
  );
}

export default Register;
