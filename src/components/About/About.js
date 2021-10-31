import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../../assets/images/sectionBg.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div
      style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      className="py-5"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-white mb-4">
            WELCOME TO ADVENTURA TRAVEL AGENCY
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">About Us</h5>
              <p className="text-muted">
                There are countless Traveling agencies on the
                internet. And there’s us. We are not the biggest. We are not the
                cheapest. But we are the fastest growing. We have the highest
                rated tour packages that are reknowned and rewarded in the industry.
              </p>
              <p className="text-muted">
                And the reason is, we don’t give up. When a traveller commits to a
                tour, we commit to the customer. We are not going to sugar coat
                it - we will make you happy, come what may. You may not have
                given much thought to what you are signing up for, but we
                believe you are signing up for your heart desire. We are ridiculously committed to our clients. Be it
                constant reminders, relentless masters or 24 x 7 online support
                - we will absolutely make sure that you run out of excuses to
                not fulfill your hearts desire.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
                To become the largest online travel ecosystem for fullfilling peoples desire and dreams, in partnership with corporates.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
                To create an alternate platform for adventure lovers who wish to
                continue and visit throught the world,
                using a team of ridiculously committed serve clients who will stop
                at nothing to impart peoples happiness, helped by a 24 x 7 support
                system. By deploying our world class team of industry experts,
                we aim to show our clients with the skills they need to
                advance their adventurous life to the next level.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
