import React, { useState } from "react";
import "./SignupWithPassword.css";
import logo from "../../components/Images/cal.png";
import { useHistory } from "react-router";
// import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function SignupWithPassword(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const registered = {
      name: name,
      email: email,
      password: password,
    };

    if (password.length < 8) {
      alert("Password is less than 8 characters");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            sessionStorage.setItem("userEmail", JSON.stringify(user.email));
            sessionStorage.setItem("userName", JSON.stringify(user.email));
            history.push(`/user`);
          }
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    }
  };
  return (
    <div className="signupwithpwd">
      <img className="logo" src={logo} alt="logo" />
      <p id="p-signupwithpwd">Sign up with Calendly for free</p>

      <form
        className="inner-signupwithpwd"
        method="POST"
        onSubmit={submitHandler}
      >
        <h3 id="h3">Enter your email to get started.</h3>
        <input
          type="email"
          value={email}
          className="input-signupwithpwd"
          placeholder="email address"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <h3 id="h3">Enter your full name.</h3>
        <input
          type="text"
          value={name}
          className="input-signupwithpwd"
          placeholder="Name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <h3 id="h3">Choose a password with at least 8 characters.</h3>
        <input
          type="password"
          value={password}
          className="input-signupwithpwd"
          placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" value="Submit" id="button-signupwithpwd">
          Continue
        </button>
      </form>
      <p id="last-p-signupwithpwd">
        By creating a Calendly account, you agree to Calendly's Terms and
        Privacy Policy
      </p>
    </div>
  );
}

export default SignupWithPassword;
