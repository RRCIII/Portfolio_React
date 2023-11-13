/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import "../sass/Resume.scss";

const Resume = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="resume-container">
        <div className="my-resume-header">
          <h2 className="display-6">Ricky Carter</h2>
        </div>

        <div className="mt-3" style={{ marginBottom: "4rem" }}>
          <p>Web Developer</p>
        </div>

        <div className="main-projects-container">
          <h3 style={{ marginTop: "3rem" }}>Projects</h3>
          <div className="my-resume-projects">
            <div className="project">
              <ul className="project-links-container">
                <li>
                  <h5 className="mb-3">Blog About Tech</h5>
                  <p className="text-muted">
                    Fullstack web application. Write a blog, and share comments
                    with other users. Two week build.
                  </p>
                  <div className="project-links mb-4">
                    <ul>
                      <li>
                        <a
                          href="https://blogabouttech-bbe78e14d63a.herokuapp."
                          target="_blank"
                          rel="noreferrer"
                        >
                         Tech-Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://drive.google.com/file/d/1Q8Q_cpDge0cVq6bMxlxiKw1TFI1LHq8S/view"
                          target="_blank"
                          rel="noreferrer"
                        >
                          E-commerce backend
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <h5>Timed Trivia Quiz</h5>
                  <p className="text-muted">
                    Test your JavaScript knowledge with a simple, yet complex,
                    timed trivia quiz.
                  </p>
                  <div className="project-links mb-4">
                    <ul>
                      <li>
                        <a href="https://github.com/RRCIII/CodingQuiz" target="_blank" rel="noreferrer">Coding Quiz</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-resume-certifications">
          <h3>Certification</h3>
          <div className="my-resume-certificates">
            <ul>
              <li id="resource-one">
                <h5>Full Stack UNC Coding Bootcamp</h5>
                <div className="certificate">
                  <ul>
                    <li>Front-End/Back-End Engineer</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-resume-education">
          <h3>Education</h3>
          <div className="edu-container d-flex justify-content-between flex-wrap mb-4">
            <div className="edu-top">
              <p style={{ fontSize: "1.1rem" }}>Fullstack Coding Bootcamp</p>
              <p style={{ fontSize: "0.9rem" }}>Chapel Hill, North Carolina</p>
            </div>
            <div className="edu-bottom text-end align-self-start">
              <h6>
                <em style={{ fontSize: "0.9rem" }}>May. 2023 - Nov. 2023</em>
              </h6>
            </div>
          </div>
        </div>

        <div className="my-resume-skills">
          <h3>Skills</h3>
          <div className="skills-container d-flex justify-content-between align-items-start">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>

            <ul>
              <li>Responsive Layout</li>
              <li>Bootstrap</li>
              <li>Git</li>
              <li>Express.js</li>
            </ul>

            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Resume;
