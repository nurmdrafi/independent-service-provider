import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../images/google.svg";
import auth from "../../../src/firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, signInError] =
    useSignInWithEmailAndPassword(auth, {sendEmailVerification: true});

  const [sendPasswordResetEmail, sending, resetPasswordError] =
    useSendPasswordResetEmail(auth);

  const [
    signInWithGoogle,
    googleSignInUser,
    googleSignInLoading,
    googleSignInError,
  ] = useSignInWithGoogle(auth);

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
    if(email.value === ""){
      toast.warning("Please Insert Email", {
        toastId: "emptyEmail",
      });
    } else if(email.value){
      await sendPasswordResetEmail(email.value);
      toast.info("Check Your Email Box", {
        toastId: "checkEmailBox",
      });
    }
    
  };
  const handleGoogleSignIn = () =>{
    signInWithGoogle();
    navigate('/home')
  }

  useEffect(() => {
    if(user || googleSignInUser){
      navigate(from, { replace: true });
    }
  }, [user, googleSignInUser, from, navigate]);

  if (loading || sending || googleSignInLoading) {
    toast.success("Please Wait...", {
      toastId: "loading or sending",
    });
  }

  if (signInError) {
    const message = signInError.message;
    toast.error(message, {
      toastId: "signInError",
    });
  }
  if (resetPasswordError) {
    const message = resetPasswordError.message;
    toast.error(message, {
      toastId: "resetPasswordError",
    });
  }
  if (googleSignInError) {
    const message = googleSignInError.message;
    toast.error(message, {
      toastId: "googleSignInError",
    });
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Log In</h2>
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
            {email.error && (
              <p style={{ color: "red", width: "415px" }}>{email.error}</p>
            )}
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
            <p className="form-link mt-3 mb-0" onClick={resetPassword}>
              Forget Password?
            </p>
            {password.error && (
              <p style={{ color: "red", width: "415px" }}>{password.error}</p>
            )}
          </div>

          <input className="form-submit fs-5 fw-bold" type="submit" value="Log In" />
          <p className="mt-3 text-center">
            Not a member?{" "}
            <Link className="form-link" to="/signup">
              Sign Up Now
            </Link>
          </p>

          <div className="d-flex align-items-center">
            <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
            <p className="mt-2 px-2">Or</p>
            <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
          </div>
          <ToastContainer />
        </form>
        <button
          className="google-btn"
          type="submit"
          onClick={handleGoogleSignIn}
        >
          <img src={googleLogo} alt="" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
