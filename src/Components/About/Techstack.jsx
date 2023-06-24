import React from "react";
import "./About.css";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiPostgresql,
  DiWordpress
} from "react-icons/di";


import { SiRedux, } from "react-icons/si";
export const TechStack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 title="HTML 5" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 title="CSS 3" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="Javascript" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux title="Redux" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.JS"  />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql title="PostgreSQL" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git/GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress title="Wordpress" />
      </Col>

    </Row>
  );
};
