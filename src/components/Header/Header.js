import "./header.css";
import logo from "./../../logo.gif";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const Header = () => {
  const { contexts, selectedCourse } = useAuth();
  const { user, logOut } = contexts;
  const active = {
    color: "#ff136f",
    borderBottom: "2px solid #ff136f",
  };
  const navStyle = {
    textDecoration: "none",
    margin: "0 8px",
    color: "white",
    fontSize: "17px",
    fontWeight: "bold",
    textTransform: "Uppercase",
  };
  return (
    <div className="sticky-top">
      <Navbar className="bg-black"

        expand="lg"
      >
        <NavLink
          className="hoverStyle ms-3 text-decoration-none sm-mb-3"
          to="home"
        >
          <Navbar.Brand className="navBarBrand">
            <img width="64px" src={logo} alt="" />{" "}
            <span className="fw-bold text-white fs-1">Adventura</span>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink
              className="hoverStyle"
              style={navStyle}
              activeStyle={active}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="hoverStyle"
              style={navStyle}
              activeStyle={active}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="hoverStyle"
              style={navStyle}
              activeStyle={active}
              to="/courses"
            >
              Tour Plans
            </NavLink>
            <NavLink
              className="hoverStyle"
              style={navStyle}
              activeStyle={active}
              to="/contact"
            >
              Contact
            </NavLink>

            {user.displayName ? (
              <div>
                <NavDropdown
                  title={
                    <>
                      <img
                        style={{ width: "45px", borderRadius: "50%" }}
                        src={user.photoURL}
                        alt="profile"
                      />
                    </>
                  }
                >
                  <div className="text-center">
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                    <div className="text-center">
                      <button onClick={logOut} className="btn btn-primary">
                        Log Out
                      </button>
                    </div>
                  </div>
                </NavDropdown>
              </div>
            ) : (
              <>
                <NavLink
                  className="hoverStyle"
                  style={navStyle}
                  activeStyle={active}
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="me-4 hoverStyle"
                  style={navStyle}
                  activeStyle={active}
                  to="/signup"
                >
                  Sign up
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
