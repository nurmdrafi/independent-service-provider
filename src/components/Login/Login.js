import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../images/google.svg";
import auth from "../../../src/firebase.init";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [showError, setShowError] = useState(""); // Toast

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, signInError] =
    useSignInWithEmailAndPassword(auth);
    
  const [sendPasswordResetEmail, sending, resetPasswordError] =
    useSendPasswordResetEmail(auth);

  const handleEmail = (e) => {
    const checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!checkEmail.test(e.target.value)) {
      setEmail({ value: "", error: "Please provide valid email." });
    } else {
      setEmail({ value: e.target.value, error: "" });
    }
  };

  const handlePassword = (e) => {
    const checkPassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!checkPassword.test(e.target.value)) {
      setPassword({
        value: "",
        error:
          "Your password should contain at least one uppercase, one lowercase, one numeric, one special character and minimum 8 characters.",
      });
    } else {
      setPassword({ value: e.target.value, error: "" });
    }
  };

  const handleUserLogIn = (e) => {
    e.preventDefault();
    if (email.value !== "" && password.value !== "") {
      signInWithEmailAndPassword(email.value, password.value);
    }
  };

  const resetPassword = async () => {
      await sendPasswordResetEmail(email);
      alert('Sent email');
  };

  useEffect(() => {
    user && navigate(from, { replace: true });  
  }, [user, from, navigate]);

  if(loading || sending){
    return <p style={{fontSize: '50px'}}>Loading...</p>
   }
  

  if (signInError) {
    console.log(signInError);
    const message = signInError.message;
    if (message.includes("user-not-found")) {
      setShowError("User Not Found");
    } else if (message.includes("wrong-password")) {
      setShowError("Wrong Password");
    }
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onClick={handleUserLogIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id="email"
              required
            />
            {
              email.error && <p style={{ color: "red", width: "415px" }}>{email.error}</p>
            }
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              id="password"
              required
            />
            <p className="form-link mt-3" onClick={resetPassword}>
              Forget Password?
            </p>
            {
              password.error && <p style={{ color: "red", width: "415px" }}>{password.error}</p>
              }
            {
              showError && <p style={{ color: "red", width: "415px" }}>{showError}</p>
            }
          </div>

          <input className="form-submit" type="submit" value="Login" />
          <p className="my-3">
            Not a member?{" "}
            <Link className="form-link" to="/signup">
              Sign Up Now
            </Link>
          </p>

          <fieldset>
            <legend>or</legend>
          </fieldset>
        </form>
        <button className="google-btn" type="submit">
          <img src={googleLogo} alt="" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
