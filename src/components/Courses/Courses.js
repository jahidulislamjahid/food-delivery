import React from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../course/Course.js";
import bgImage from "./../../assets/images/sectionBg.png";
import Zoom from "react-reveal/Zoom";
import useCourses from "../../hooks/useCourses.js";

const Courses = () => {
  const [courses] = useCourses();
  return (
    <div
      style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <Container className="py-5">
        <Zoom right cascade>
          <h2 className="text-center text-white mb-0">All Our Tour PLans Made Especially for You.</h2>
        </Zoom>
        <Zoom left cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            Lets Roam Around The World Selecting Our Hand Picked Packages. Pick A packages Click The Book Button And Get Bonuses.
          </p>
        </Zoom>
        <Row>
          {courses?.map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;