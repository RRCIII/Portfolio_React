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
                  src=""
                  alt="project-one-image"
                />
                <img
                  className={`gif ${hover ? "" : "gif-image"}`}
                  src=""
                  alt="project-one-gif"
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
                  src="https://images.unsplash.com/photo-1518548183878-5e1fcea68bb9?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="project-two-image"
                />
                <img
                  className={`gif ${hover ? "" : "gif-image"}`}
                  src="https://user-images.githubusercontent.com/88423414/277140769-6ec20297-6bd3-46aa-87e3-594377d1518b.gif"
                  alt="project-two-gif"
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
                  src=""
                  alt="project-three-image"
                />
                <img
                  className={`gif ${hover ? "" : "gif-image"}`}
                  src=""
                  alt="project-three-gif"
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