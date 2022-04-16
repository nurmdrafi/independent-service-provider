import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Rock Fitness</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/checkout">Checkout</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            {user ? (
              <button className="btn btn-dark">Log Out</button>
            ) : (
              <Link to="/login">
                <button className="btn btn-dark">Log In</button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
