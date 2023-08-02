import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Builderbook from "../../pages/builderBook/Builderbook";
import SaasBiolerPlate from "../../pages/saasBoilerPlate/SaasBiolerPlate";
import Reviews from "../../pages/reviews/Reviews";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/">
        <img className="navbar-brand" src={logo} alt="logo" width={40} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav ">
        <Nav className="navMargin">
          <Nav.Link as={NavLink} to="/" exact className="nav-link  ">
            <div className="navLinkDiv ">
              <a href="#" className="navlink mb-2">
                Book 1: Builder Book
              </a>
            </div>
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/saasboilerplate"
            activeClassName="active"
            className="nav-link  "
          >
            <div className="navLinkDiv ">
              <a href="#" className="navlink mb-2">
                Book 2: SaaS Boilerplate
              </a>
            </div>
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/reviews"
            activeClassName="active"
            className="nav-link  "
          >
            <div className="navLinkDiv ">
              <a href="#" className="navlink mb-2">
                Reviews
              </a>
            </div>
          </Nav.Link>
          <Nav.Link as={Link} to="/reviews" className="ml-4">
            <button type="button" className="navlink   btn shadow-none  navbtn">
              <span>Log in</span>
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
