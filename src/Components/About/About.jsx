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
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}}>
            A propos <strong className="purple"> de moi</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={avatar} alt="about" className="iimg-fluid myImage" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Compétences <strong className="purple">techniques</strong>
        </h1>
        <TechStack/>
        <h1 className="project-heading">
          En cours <strong className="purple">d'apprentissage</strong>
        </h1>
        <LearnStack />
      </Container>
    </Container>
  );
};
