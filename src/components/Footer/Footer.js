import React from "react";
import "./Footer.css";
import {  BsTwitter, BsFacebook } from "react-icons/bs";
import { SiTiktok, SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container footer d-flex flex-column justify-content-center mt-auto">
      <div className="social-links d-flex justify-content-center">
        <a target="blank" href="https://www.tiktok.com/@therock">
          <SiTiktok></SiTiktok>
        </a>
        <a target="blank" href="https://www.instagram.com/therock/">
          <SiInstagram></SiInstagram>
        </a>
        <a target="blank" href="https://twitter.com/therock/?lang=en">
          <BsTwitter></BsTwitter>
        </a>
        <a target="blank" href="https://www.facebook.com/DwayneJohnson">
          <BsFacebook></BsFacebook>
        </a>
        <a target="blank" href="https://www.youtube.com/c/therock/videos">
          <IoLogoYoutube></IoLogoYoutube>
        </a>
      </div>
      <div className="text-center text-muted fw-bold">
        <p>
          All Rights Reserved By &copy;{" "}
          <span className="brand" style={{ fontSize: "18px" }}>
            ROCK FITNESS
          </span>{" "}
          | {new Date().getFullYear()}
        </p>
        <p>
          Developed by{" "}
          <a
            target="blank"
            href="https://www.linkedin.com/in/nurmdrafi/"
            className="brand"
            style={{ fontSize: "18px" }}
          >
            Rafé
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
