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
     );
}
 
export default NavigationBar;