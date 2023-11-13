import { useState } from "react";
import ProjectImage from "../components/Portfolio/ProjectImage";
import { Container, Row } from "react-bootstrap";
import "../sass/Portfolio.scss";

const Portfolio = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Container
      fluid
      className="vw-vh d-flex justify-content-center align-items-center"
      id="portfolio"
    >
      <Container className="d-flex flex-column justify-content-center align-items-center project-container">
        <Container className="d-flex justify-content-center align-items-center">
          <Row className="gx-5 justify-content-center text-center flex-wrap project-row">
            <ProjectImage
              {...handleMouseEnter}
              {...handleMouseLeave}
              title="React Portfolio"
            >
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={hover ? "static-image" : ""}
                  src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVhY3R8ZW58MHx8MHx8fDA%3D"
                  alt="project-one-image"
                />
              </a>
            </ProjectImage>

            <ProjectImage
              {...handleMouseEnter}
              {...handleMouseLeave}
              title="Weather App-JS"
            >
              <a
                href="https://rrciii.github.io/And-the-Weather-is/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={hover ? "static-image" : ""}
                  src="https://images.unsplash.com/photo-1590552515252-3a5a1bce7bed?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="project-two-image"
                />
              </a>
            </ProjectImage>

            <ProjectImage
              {...handleMouseEnter}
              {...handleMouseLeave}
              title="Take My Notes-express.js"
            >
              <a
                href="https://takemynotes-79540f9bd0ca.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={hover ? "static-image" : ""}
                  src="https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="project-three-image"
                />
              </a>
            </ProjectImage>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Portfolio;