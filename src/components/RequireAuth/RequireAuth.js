import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (user) {
    return children;
  } else if (loading) {
    toast.success("Please Wait...", {
      toastId: "loading",
      position: "top-center",
      autoClose: 100,
    });
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  <ToastContainer />;
};

export default RequireAuth;
