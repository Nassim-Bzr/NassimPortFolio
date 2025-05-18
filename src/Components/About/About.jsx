import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import { TechStack } from "./Techstack";
import { LearnStack } from "./Learnstack";
import { AboutCard } from "./AboutCard";
import { Particle } from "../Home/Particle";
import avatar from "../Assets/avatar.jpg";

export const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "50px" }}>
          A propos <strong className="purple">de moi</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col lg={4} style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }} className="about-img">
            <img src={avatar} alt="about" className="img-fluid" />
          </Col>
          
          <Col lg={8} style={{ paddingTop: "20px", paddingBottom: "50px" }}>
            <AboutCard />
          </Col>
        </Row>
        
        <h1 className="project-heading" style={{ textAlign: "center", marginTop: "10px" }}>
          Compétences <strong className="purple">techniques</strong>
        </h1>
        <TechStack/>
        
        <h1 className="project-heading" style={{ textAlign: "center", marginTop: "10px" }}>
          En cours <strong className="purple">d'apprentissage</strong>
        </h1>
        <LearnStack />
      </Container>
    </Container>
  );
};
