import React, { useState } from "react";
import "./GoogleAccount.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function GoogleAccount({ children }) {
  const history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const googleSuccess = (res) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
          setIsSignedIn(true);
          sessionStorage.setItem("userEmail", JSON.stringify(user.email));
          sessionStorage.setItem("userName", JSON.stringify(user.displayName));
          history.push(`/user`);
        }
      })
      .catch((error) => {
        console.log(error); // Keeping this to log errors if needed
      });
  };

  return (
    <>
      <button onClick={googleSuccess} id="login-with-google-btn">
        Sign in with Google
      </button>
    </>
  );
}

export default GoogleAccount;
