import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Particle } from "./Particle";
import { Type } from "./Type";
import homeLogo from "../Assets/laptop.png";
import "./Home.css";

export const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Déclencher les animations au chargement
    const timer = setTimeout(() => {
      document.querySelector('.home-content').classList.add('animate');
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Container fluid className={`home-section ${scrolled ? 'scrolled' : ''}`} id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading animate-heading">
                Bonjour, <span className="wave"></span>
              </h1>
              <h1 className="heading-name animate-name">
                Je suis
                <strong className="main-name"> &nbsp;Nassim BOUZERARA</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }} className="animate-type">
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }} className="animate-image">
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
