import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "../Assets/Pslogo.png";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { downloadCV } from "../utils"; // Importer la fonction de téléchargement

import {
  CgFileDocument,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts
} from "react-icons/all";

export const Navbarjsx = () => {
  const [expand, setexpand] = React.useState(false);
  const [navColour, setnavColour] = React.useState(false);
  const [pathstate, setpathstate] = React.useState("#home");

  const history = useHistory();

  const handleCVDownload = () => {
    downloadCV(); // Appeler la fonction de téléchargement du CV
    setexpand(false);
  };

  function Scrollhandler() {
    if (window.scrollY >= 20) {
      setnavColour(true);
    } else {
      setnavColour(false);
    }
  }

  React.useEffect(() => {
    if (pathstate === "#resume") {
      const element = document.getElementById("resumelink");
      if (element) {
        element.click();
      }
    } else {
      const element = document.getElementById(pathstate);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathstate]);

  const handleNavLinkClick = (path) => {
    setexpand(false);
    setpathstate(path);
    if (path === "#resume") {
      handleCVDownload(); // Appeler la fonction de téléchargement du CV
    }
  };
  

  window.addEventListener("scroll", Scrollhandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={logo} className="img-fluid logo" alt="Ps." /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setexpand(prevExpand => !prevExpand)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => handleNavLinkClick("#home")}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Accueil
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => handleNavLinkClick("#about")}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> A propos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => handleNavLinkClick("#projects")}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projets
              </Nav.Link>

            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => handleNavLinkClick("#contact")}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleCVDownload(); }}
                style={{ color: "#623686", display: "flex", alignItems: "center" }}
              >
                <CgFileDocument style={{ marginBottom: "2px", marginRight: "5px" }} /> 
                CV
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
