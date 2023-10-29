/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ContactLinks from "../Components/Contact/ContactLink";
import ContactForm from "../Components/Contact/ContactForm";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

import { faCommentDots, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

import "../sass/Contact.scss";

const Contact = () => {
  return (
    <Container
      className="vw-vh d-flex justify-content-center align-items-center"
      id="contact"
    >
      <Row className="w-100 row-gap">
        <Col
          lg={5}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h1 className="text-center mb-5">
            Let's Connect!
          </h1>
          <div className="contact-link-container">
            <ContactLinks
              link="https://github.com/RRCIII"
              title="https://github.com/RRCIII"
            >
              <AiOutlineGithub size={40} style={{ marginRight: "0.5rem" }} />
            </ContactLinks>
            <ContactLinks
              link="https://www.linkedin.com/in/ricky-carter-4465581a4"
              title="https://www.linkedin.com/in/ricky-carter-4465581a4"
            >
              <AiOutlineLinkedin size={40} style={{ marginRight: "0.5rem" }} />
            </ContactLinks>
            <ContactLinks
              link="mailto:randolphcarter5@gmail.com"
              title="randoplhcarter5@gmail.com"
            >
              <MdOutlineAlternateEmail
                size={35}
                style={{ marginLeft: "0.1rem", marginRight: "0.7rem" }}
              />
            </ContactLinks>
          </div>
        </Col>
        <Col lg={7} className="d-flex justify-content-center">
          <Form
            className="email-form"
            data-netlify="true"
            method="post"
            name="contact-form"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <ContactForm
              icon={faEnvelope}
              id="basic-addon1"
              type="email"
              name="email"
              placeholder="Your Email Address"
            />
            <ContactForm
              className="mt-4"
              icon={faCommentDots}
              id="basic-addon2"
              type="text"
              name="title"
              placeholder="Title"
            />
            <FloatingLabel
              className="mt-4"
              controlId="floatingTextarea2"
              label="Send Me A Message!"
              style={{ color: "grey" }}
            >
              <Form.Control
                required
                as="textarea"
                name="message"
                placeholder="Leave a comment here"
                style={{ height: "180px", resize: "none", color: "#000" }}
              />
            </FloatingLabel>
            <div className="mt-4 d-flex justify-content-center align-items-center">
              <Button className="w-25" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;