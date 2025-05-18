import React from "react";
import "./About.css";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiReact } from "react-icons/di";

import { 
  FaRobot, 
  FaDatabase, 
  FaCode, 
  FaSearchengin, 
  FaChartBar,
  FaBrain
} from "react-icons/fa";

export const LearnStack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Intelligence Artificielle">
        <FaRobot />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="React Native">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="API IA/NLP">
        <FaBrain />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Web Scraping">
        <FaSearchengin />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Data Analysis">
        <FaChartBar />
      </Col>
    </Row>
  );
};
