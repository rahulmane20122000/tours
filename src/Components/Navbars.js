import React from "react";
import Logo from '../img/a.png';
import { NavLink } from "react-router-dom";
// import {GiHamburgerMenu} from 'react-icons/gi';
import "../App.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
// import AppContext from '../otherComponents/Myaccount'

const logo_style = {
  textDecoration: "none",
  color: "white",
  fontSize: "2rem",
};

const list_style = {
  textDecoration: "none",
  fontSize: "20px",
  color: "white",
  marginLeft: "1rem",
  fontWeight: "500",
  backgroundColor:"#228c22",
  border:"none"
  
};

const Nl={
  textDecoration:"none",
  color:"#228c22"
}

const main_nav = {
  backgroundColor: "#228c22",
  position:"fixed",
  zIndex:"20",
  width:"100vw",
  height:"fit-content",
  padding:"0",
  
  
};

const Navbars = () => {
  
  return (
    <>
    
      <Navbar className="nav_bar" style={main_nav} collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>
          <NavLink style={logo_style} to="/">
            <img style={{"mixBlendMode" :"multiply","height":"5rem"}}src={Logo} alt="tours" />
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
                <Dropdown.Item style={{ backgroundColor: "red" ,"color":"white"}}>
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
