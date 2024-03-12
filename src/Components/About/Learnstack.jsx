import React from "react";
import "./About.css";
import { Col, Row } from "react-bootstrap";
import { DiAngularSimple, DiReact } from "react-icons/di";

import { SiRedux, SiFlutter, SiTypescript } from "react-icons/si";

export const LearnStack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Angular">
        <DiAngularSimple />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Flutter">
        <SiFlutter />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="React Native">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Typescript">
        <SiTypescript />
      </Col>
    </Row>
  );
};
