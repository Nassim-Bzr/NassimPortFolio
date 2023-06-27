import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <Row md={12} className="home-about-social">
      <h1>Retrouvez moi sur </h1>
      
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/Nassim-Bzr"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/nassim-bouzerara/"
            target="_blank"
            rel="noreferr/*  */er"
            className="icon-colour home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com"
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
