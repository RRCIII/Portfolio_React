/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../sass/About.scss";

const About = () => {
  return (
    <Container
      fluid
      className="vw-vh d-flex justify-content-center align-items-center"
    >
      <Container
        className="d-flex justify-content-center align-items-center"
        id="about"
      >
        <Row className="w-100 gx-5 fg-2">
          <Col lg={4} className="d-flex justify-content-center">
            <div className="img-container">
              <a
                href="https://github.com/RRCIII/Portfolio_React"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/132403132?v=4"
                  alt="portfolio-image"
                />
              </a>
            </div>
          </Col>
          <Col
            lg={5}
            className="d-flex flex-column justify-content-center text-center text-lg-start"
          >
            <h3 className="mb-3">👋 Hello.</h3>

            <p className="mb-3">
            "I'm Ricky Carter, a dedicated Physical Therapist Assistant with a strong passion for web development. While my background lies in healthcare, 
            I have successfully transitioned into the dynamic world of programming. I am thrilled to inform you that I recently earned my web development 
            certification from the prestigious UNC Chapel Hill in North Carolina. This unique blend of healthcare expertise and cutting-edge technical skills 
            makes me a versatile candidate ready to bring fresh perspectives and a strong work ethic to your team."
            </p>

            <p className="mb-4">
            "My journey to transition into a new career has been an exciting challenge that's pushed me to grow in my technical skills. I've thoroughly 
            enjoyed solving complex problems and optimizing front-end applications, all while maintaining a deep commitment to delivering a top-notch user experience 
            through diverse technologies. When I'm not passionately typing away at my keyboard, you'll find me on the basketball court, honing my teamwork skills while
            extending my attributes in a team-oriented atmosphere. I'm also an avid reader of novels, which fuels my creative thinking and enriches my perspective on problem-solving."
            </p>
            <h5
              className="fw-bold text-center text-lg-end me-5"
              style={{ fontFamily: "Over the Rainbow, cursive" }}
            >
              Thank you for taking the time to get to know me better. I'm genuinely thrilled about the next exciting challenge.
            </h5>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};


export default About;