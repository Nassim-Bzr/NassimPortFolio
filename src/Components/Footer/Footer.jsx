import React from "react";
import { Row, Button } from "react-bootstrap";
import "./Footer.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
export const Footer = () => {
  return (
    <Row md={12} className="home-about-social">
      <h1>Retrouvez moi sur </h1>

      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/Vincent-PERON"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/vincent-prn/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/VincentPERON4"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiOutlineTwitter />
          </a>
        </li>
      </ul>
    </Row>
  );
};
