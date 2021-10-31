import React from "react";
import bgImage from "./../../assets/images/background.jpg";
import Bg from "./../../assets/images/bg.gif";
import { Container, Button, Row, Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Course from "./../course/Course.js";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import useCourses from "../../hooks/useCourses.js";

const Home = () => {
  const history = useHistory();
  const [courses] = useCourses();
  const featureCourses = courses.slice(0, 6);
  function GoServices() {
    history.push("/courses");
  }

  return (
    <div>
      <div>
        <Carousel className="bg-info">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vaekstovervand.dk/wp-content/uploads/2017/05/7wonders.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="text-black fw-bold">Travel Throught The World</h3>
              <p className="text-dark fw-bold">Start Your Journey From Here This Point Of The World And Journey To The Other Edge Of The World.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikivoyage/en/thumb/d/da/RomanEmpireBanner1.jpg/1200px-RomanEmpireBanner1.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Roam Throught The Rome!</h3>
              <p>Ever Thought To Visit The Infamous Rome Italy? You've Come To The Right Place.</p>
              <h5>Book A Ticket Right Now.</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/36500/1200x400px-Travel-lp.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="fw-bold text-black">Crazed About Wonderfull Sea Shores?</h3>
              <p className="fw-bold text-dark">We Have A Perfect Plan For Your Visit To The Worlds Sublime Sea Beaches.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="text-center my-5 py-5">
          <Bounce left cascade>
            <h1 className="text-white">Turn Your Dreams To Reality</h1>
          </Bounce>

          <Bounce right cascade>
            <p className="my-4 text-white fs-5">
              Want To Visit To The OTher Edge Of The World? We Have Perfect Tour Plans Waiting  For You!
            </p>
          </Bounce>

          <Bounce>
            <Button
              onClick={GoServices}
              className="rounded-pill fs-5 py-2 px-4 fw-bold"
              variant="warning"
            >
              Book Tickets
            </Button>
          </Bounce>
        </div>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed", backgroundSize: "cover" }}
      >
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2">Popular Places!</h2>
          </Slide>
          <Slide right>
            <p className="text-white text-center fw-bold">
              Some Popular Places People Throughout World Die To Visit.
            </p>
          </Slide>
          <Row>
            {featureCourses?.map((course) => (
              <Course course={course} key={course.key}></Course>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
