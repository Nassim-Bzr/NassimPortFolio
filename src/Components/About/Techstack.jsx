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

import { 
  SiRedux, 
  SiTailwindcss, 
  SiTypescript 
} from "react-icons/si";

import {
  FaDatabase,
  FaServer,
  FaCode,
  FaGithub,
  FaCloudUploadAlt
} from "react-icons/fa";

export const TechStack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML 5">
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="CSS 3">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Redux">
        <SiRedux />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Node.JS">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <DiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="TailwindCSS">
        <SiTailwindcss />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Vercel/Déploiement">
        <FaCloudUploadAlt />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Git/GitHub">
        <FaGithub />
      </Col>
    </Row>
  );
};
