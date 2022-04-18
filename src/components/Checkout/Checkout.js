import { useState } from "react";
import './Checkout.css'
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate()

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === "" || email === "" || phone === ""){
        toast.error("Empty Field Is Not Allow");
    } else if
    (name && email && phone) {
        toast.success("Thank You For The Booking");
        toast.info("Please Wait");
        setTimeout(() => {
            navigate("/home")
        }, 3000);
    }
  };

  return (
    <div className="form-container">
      <div className="checkout">
        <h2 className="form-title">Book Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"         
              onChange={handleName}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleEmail}
            />
          </div>

          <div className="input-group">
            <label htmlFor="number">Phone Number</label>
            <input
              type="number"
              name="number"
              id="number"
              onChange={handlePhoneNumber}
            />
          </div>
          <input
            className="form-submit mt-3 fs-5 fw-bold"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
