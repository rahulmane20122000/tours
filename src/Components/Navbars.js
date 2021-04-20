import React from "react";
import { NavLink } from "react-router-dom";
// import {GiHamburgerMenu} from 'react-icons/gi';
import "../App.css";
import { Navbar, Nav } from "react-bootstrap";

const logo_style={
  "textDecoration":"none",
  "color":"white",
  "fontSize":"2rem",
}

const list_style={
  "textDecoration":"none",
  "fontSize":"1.5rem",
  "color":"white",
  "marginLeft":"1rem",
  "fontWeight":"500"
}

const main_nav={
  "backgroundColor":"#228c22",
  
}

const Navbars = () => {
  return (
    <>
      <Navbar style={main_nav} collapseOnSelect expand="lg"  variant="dark">
        <Navbar.Brand ><NavLink style={logo_style} to="/">Tours</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink activeClassName="menu_active" style={list_style}  exact to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName="menu_active" style={list_style} exact to="/tours">Tours</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName="menu_active" style={list_style} exact to="/login">Login</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName="menu_active" style={list_style} exact to="/register">Register</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
