import {
    faMailBulk,
    faMapMarkerAlt,
    faPhone
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  import { Col, Container, Row } from "react-bootstrap";
  import { NavLink } from "react-router-dom";
  import payment from "./../../assets/images/payment.png";
  import "./footer.css";
  
  const Footer = () => {
    return (
      <div className="text-black fw-bold">
        <div className="py-4 gradient">
          <Container>
            <Row>
              <Col md={6}>
                <div className=" my-2">
                <h2>AHAAR</h2>
                </div>
  
                <ul className="list-unstyled">
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span className="ms-1 fs-5"> Kadamtali, Jatrabari, Dhaka-1236</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMailBulk} />
                    <span className="ms-1 fs-5">Official: support@ahaar.com</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="ms-1 fs-5">
                      HotLine: +88015111222(Available:10:00AM to 10.00PM)
                    </span>
                  </li>
                </ul>
              </Col>
              <Col md={2}>
                <ul className="list-unstyled footer-link text-black">
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/policy">Policy</NavLink>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <div className="">
                  <img
                    className="img-fluid"
                    src={payment}
                    alt="payment methods"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="m-0 p-0" />
        <p className="text-center m-0 py-3 copyright">
          Copyright © All Reserved by AhaarBd
        </p>
      </div>
    );
  };
  
  export default Footer;
  