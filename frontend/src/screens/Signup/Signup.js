import React, { useState } from "react";
import "./Signup.css";
import logo from "../../components/Images/cal.png";
import { useHistory } from "react-router";

function Signup({ firstEmail }) {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    if (email !== "") {
      let path = `/signup/${email}`;
      history.push(path);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <img className="logo" src={logo} alt="Bookly logo" />
        <p id="p-signup">Sign up with Bookly for free</p>

        <form className="inner-signup" method="POST" onSubmit={submitHandler}>
          <h3 id="h3">Enter your email to get started</h3>
          <input
            type="email"
            value={email}
            id="input"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" value="Submit" id="button-signup">
            Get Started
          </button>
          <p className="existing-account">
            Already have an account?{" "}
            <a id="a-signup" href="./signin/email">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
