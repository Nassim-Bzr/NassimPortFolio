import React from "react";
import "./About.css";
import { Col, Row } from "react-bootstrap";
import {
  DiAngularSimple,
  DiReact
} from "react-icons/di";


import { SiRedux, SiFlutter, SiTypescript} from "react-icons/si";
export const LearnStack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiAngularSimple title="Angular" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiFlutter title="Flutter" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiReact title="React Native" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript title="Typescript" />
      </Col>

    </Row>
  );
};
