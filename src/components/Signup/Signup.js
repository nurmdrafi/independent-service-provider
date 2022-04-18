import "./Signup.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../images/google.svg";

import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  const navigate = useNavigate();

  
  const [ createUserWithEmailAndPassword, user, loading, createUserError] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [signInWithGoogle, googleSignInUser, googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth);

  const handleName = (e) => {
    setName({ value: e.target.value, error: "" });
  };

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
        value: e.target.value,
        error:
          "Your password should contain at least one uppercase, one lowercase, one numeric, one special character and minimum 8 characters.",
      });
    } else {
      setPassword({ value: e.target.value, error: "" });
    }
  };

  const handleConfirmPassword = (e) => {
    if (password.value === e.target.value) {
      setConfirmPassword({ value: e.target.value, error: "" });
    } else {
      setConfirmPassword({ value: "", error: "Your password did not match." });
    }
  };

  const handleUserSignUp = async (e) => {
    e.preventDefault();
    if (
      name.value !== "" &&
      email.value !== "" &&
      password.value !== "" &&
      password.value === confirmPassword.value
    ) {
      await createUserWithEmailAndPassword(email.value, password.value);
      await updateProfile({ displayName: name.value });
    } 
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  if (loading || updating || googleSignInLoading) {
    toast.success("Please Wait...", {
      toastId: "loading or updating",
    });
  }

  if (createUserError) {
    const message = createUserError.message;
    toast.error(message, {
      toastId: "createUserError",
    });
  }
  if (updateError) {
    const message = updateError.message;
    toast.error(message, {
      toastId: "updateError",
    });
  }

  if (googleSignInError){
    const message = googleSignInError.message;
    toast.error(message, {
      toastId: "googleSignInError"
    })
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleUserSignUp}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleName} type="text" name="name" id="name" required />
            {name.error && <p style={{ color: "red", width: "415px" }}>{name.error}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmail} type="email" name="email" id="email" />
            {email.error && <p style={{ color: "red", width: "415px" }}>{email.error}</p>}
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
            {password.error && <p style={{ color: "red", width: "415px" }}>{password.error}</p>}

          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPassword}
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
            />
            {confirmPassword.error && (
              <p style={{ color: "red", width: "415px" }}>
                {confirmPassword.error}
              </p>
            )}
          </div>
          <input className="form-submit mt-3 fs-5 fw-bold" type="submit" value="Sign Up" />
          <p className="text-center my-3">
            Already have an account?{" "}
            <Link className="form-link" to="/login">
              Log In
            </Link>
          </p>
          <div className="d-flex align-items-center">
            <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
            <p className="mt-2 px-2">Or</p>
            <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
          </div>
          <ToastContainer />
        </form>
        <button className="google-btn" type="submit" onClick={() => signInWithGoogle()}>
          <img src={googleLogo} alt="" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
