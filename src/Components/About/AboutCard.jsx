import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }}>
            Véritable adepte de  <span className="purple">nouvelles technologies</span>, je cherche constamment à monter en compétence. 
            
            <p>Je suis passionné par le développement web ( front avec React, back avec Node.Js ), le webdesign et le montage vidéo.</p>
          
            <p>Je suis constamment à l'affût des dernières tendances et des meilleures pratiques en matière de développement web. J'aime explorer de nouvelles bibliothèques et frameworks pour améliorer mes compétences et rester à jour dans un domaine en constante évolution.</p>
            
            <p>En plus de mes compétences techniques, je suis également un communicateur efficace et un bon collaborateur. J'apprécie travailler en équipe, échanger des idées et trouver des solutions créatives aux défis auxquels nous sommes confrontés.</p>


            <p>Enfin, je suis passionné par l'apprentissage continu et je suis toujours prêt à relever de nouveaux défis. Je suis ouvert aux nouvelles opportunités qui me permettront de développer mes compétences et de contribuer à des projets innovants et passionnants.</p>
          
            
            <br />
            Mon objectif professionnel est de devenir développeur Fullstack JS, avec une préférence pour le front end.
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
