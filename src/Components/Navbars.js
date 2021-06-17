import React from "react";
import Logo from '../img/a.png';
import { NavLink } from "react-router-dom";

import "../App.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";

import {main_nav,logo_style,list_style,Nl,logo_img,dropdown_style} from '../Styles/Navbarstyles/Main_Nav';


const Navbars = () => {
  
  return (
    <>
    
      <Navbar className="nav_bar" style={main_nav} collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>
          <NavLink style={logo_style} to="/">
            <img style={logo_img}src={Logo} alt="tours" className="logo_img" id="logo_img"/>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink
                activeClassName="menu_active"
                style={list_style}
                exact
                to="/"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName="menu_active"
                style={list_style}
                exact
                to="/tours"
              >
                Tours
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName="menu_active"
                style={list_style}
                exact
                to="/aboutUs"
              >
                About Us
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink
                activeClassName="menu_active"
                style={list_style}
                exact
                to="/login"
              >
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName="menu_active"
                style={list_style}
                exact
                to="/register"
              >
                Register
              </NavLink>
            </Nav.Link>
            <Dropdown style={{ marginRight: "80px" }}>
              <Dropdown.Toggle
                
                id="dropdown-basic"
                style={list_style}
              >
                <i style={{"width":"2rem","border":"none"}} className="far fa-user"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item >
                  <NavLink 
                    to="/myaccount"
                    variant="success"
                    style={Nl}
                    exact
                  >
                    My Account
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink
                    to="/mytours"
                    
                    style={Nl}
                    exact
                  >
                    My Tours
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item id="logout_dropdown" className="logout_dropdown" style={dropdown_style}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
