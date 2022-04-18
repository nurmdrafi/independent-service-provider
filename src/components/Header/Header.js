import React from "react";
import './Header.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home" className="brand">Rock Fitness</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/checkout">Checkout</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            {user ? (
              <button onClick={() => signOut(auth)} className="access-btn fs-5 fw-bold">Log Out</button>
            ) : (
              <Link to="/login">
                <button className="access-btn btn fs-5 fw-bold">Log In</button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
