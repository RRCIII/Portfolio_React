/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react';
import { NavbarLink } from "./Navbar/NavbarLink";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
    const [ expand, setExpanded] = useState(false);

    const closeNarbar = () => {
        setExpanded(false);
    };
    
    return ( 
        <>
        <Navbar
          expand="md"
          className="bg-primary"
          fixed="top"
          expanded={expanded}
        >
          <Container fluid className="px-5">
            <Navbar.Brand
              className="fs-1 text-light"
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              <FontAwesomeIcon icon={faCameraRetro} />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Collapse id="basic-navbar-nav text-light">
              <Nav className="ms-auto fs-6 nav-fg">
                <NavbarLink closeNavbar={closeNavbar} path="/about">
                  About Me
                </NavbarLink>
                <NavbarLink closeNavbar={closeNavbar} path="/portfolio">
                  Portfolio
                </NavbarLink>
                <NavbarLink closeNavbar={closeNavbar} path="/contact">
                  Contact Me
                </NavbarLink>
                <NavbarLink closeNavbar={closeNavbar} path="/resume">
                  Resume
                </NavbarLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};
 
export default NavigationBar;