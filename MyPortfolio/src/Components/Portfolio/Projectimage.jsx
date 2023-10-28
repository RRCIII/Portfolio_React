/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Col } from "react-bootstrap";

const ProjectImage = ({
  handleMouseEnter,
  handleMouseLeave,
  title,
  children,
}) => {
  return (
    <Col
      md={4}
      className="d-flex justify-content-center"
      style={{ margin: "1.1rem", width: "360px" }}
    >
      <div
        className="img-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="img-contain position-relative">{children}</div>

        <h5 className="mt-2 text-secondary-emphasis">{title}</h5>
      </div>
    </Col>
  );
};

export default ProjectImage;