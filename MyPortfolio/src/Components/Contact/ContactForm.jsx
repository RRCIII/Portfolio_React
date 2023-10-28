/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = (props) => {
  return (
    <InputGroup className={props.className}>
      <InputGroup.Text id={props.id}>
        <FontAwesomeIcon icon={props.icon} />
      </InputGroup.Text>
      <Form.Control type={props.type} name={props.name} placeholder={props.placeholder} required />
    </InputGroup>
  );
};

export default ContactForm;