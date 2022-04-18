import React from "react";
import "./Contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="heading text-white pt-5">Contact</h1>
      <div className="form-container">
        <div>
          <form className="">
            <div className="input-group mt-5">
              <label htmlFor="name" className="text-white">Name</label>
              <input type="text" name="name" id="name"  />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="text-white">Email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="input-group">
              <label htmlFor="number" className="text-white">Phone Number</label>
              <input type="number" name="number" id="number" />
            </div>
            <div className="input-group">
            <label htmlFor="message" className="text-white">Message</label>
            <textarea className="form-control w-100" rows="5"></textarea>
            </div>
            <input
              className="form-submit mt-3 fs-5 fw-bold"
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
