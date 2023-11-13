/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ContactLinks = ({ link, title, children }) => {
  return (
    <div
      className="d-flex align-items-center mb-3"
      target="_blank"
      rel="noreferrer"
    >
      <a href={`${link}`}>
        {children}
        {title}
      </a>
    </div>
  );
};

export default ContactLinks;