import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaUserAlt, FaRegLightbulb } from "react-icons/fa";

export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "25px" }}>
              <FaUserAlt style={{ marginRight: "10px", color: "#4cc9f0" }} />
              Développeur passionné et polyvalent, je construis des projets qui mêlent technologie, utilité et vision produit.
            </p>
            
            <p className="highlight-point">
              <FaLaptopCode style={{ marginRight: "10px", fontSize: "1.2rem" }} />
              Mon parcours m'amène à explorer tout ce qui peut avoir de l'impact : <span className="purple">React</span>, Python, PHP, IA, automatisation, scraping, data, design, ou encore DevOps. Je n'ai pas de stack figée : je choisis les bons outils pour chaque idée.
            </p>
          
            <p style={{ lineHeight: "1.7" }}>
              <FaBriefcase style={{ marginRight: "10px", color: "#4cc9f0" }} />
              Je travaille actuellement sur plusieurs applications concrètes autour de l'intelligence artificielle, de l'automatisation de tâches, de la productivité et de l'expérience utilisateur :
            </p>
            
            <ul style={{ listStyleType: "none", paddingLeft: "25px", marginBottom: "20px", lineHeight: "1.8" }}>
              <li style={{ marginBottom: "8px" }}><span style={{ color: "#4cc9f0", marginRight: "10px" }}>→</span> Simulateur d'entretien IA</li>
              <li style={{ marginBottom: "8px" }}><span style={{ color: "#4cc9f0", marginRight: "10px" }}>→</span> Moteur de recherche intelligent</li>
              <li style={{ marginBottom: "8px" }}><span style={{ color: "#4cc9f0", marginRight: "10px" }}>→</span> Coach de revente</li>
              <li><span style={{ color: "#4cc9f0", marginRight: "10px" }}>→</span> Plateforme de gestion immobilière</li>
            </ul>
            
            <p>
              <FaGraduationCap style={{ marginRight: "10px", color: "#4cc9f0" }} />
              Je prépare un mastère en <span className="purple">Développement IA & Big Data</span> chez IPSSI, avec un objectif clair :
            </p>

            <p className="highlight-point" style={{ fontWeight: "600", textAlign: "center", padding: "20px" }}>
              <FaRegLightbulb style={{ marginRight: "10px", fontSize: "1.2rem" }} />
              Créer des outils intelligents et accessibles qui font vraiment gagner du temps ou de l'argent.
            </p>
          
            <p>
              Autonome, curieux, rapide à apprendre, j'aime résoudre de vrais problèmes avec du code.
            </p>
            
            <p>
              Je suis à la recherche de projets ambitieux où je pourrai mettre cette énergie au service d'une équipe ou d'un produit à impact.
            </p>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
