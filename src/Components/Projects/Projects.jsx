import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";

// import OlivierRoue from "../Assets/OlivierRoue.png";
// import FranckJezequel from "../Assets/FranckJezequel.png";
import AtelierCombine from "../Assets/AtelierCombine.png";
import MegaBonPlan from "../Assets/megabonplan.png";
import TiLabel from "../Assets/GoQuiz.png";
import LivenceHome from "../Assets/LivenceHome.png";
import Obonnesaffaires from "../Assets/Obackti.jpg";
import SajMeta from "../Assets/sajmeta.jpg";
import AiCoach from "../Assets/Aicoach.png";
import StopAddict from "../Assets/StopAddict.png";
import Laptop from "../Assets/laptop.png";
import LeBonCoinAi from "../Assets/LeBonCoinAi.png";
import SmoobuV2 from "../Assets/SmoobuV2.png";


import { DiReact, DiJavascript, DiGithubBadge, DiHtml5, DiPhotoshop, DiWordpress, DiNodejs } from "react-icons/di";
import { SiRedux, SiMaterialUi, SiTailwindcss, SiPostgresql, SiTypescript } from "react-icons/si";
import { FaLink, FaCss3, FaServer, FaMedkit, FaCalendarAlt, FaRobot, FaCode, FaDatabase, FaUsers, FaSearch, FaHome, FaUtensils, FaBriefcase, FaShoppingCart } from "react-icons/fa";
export const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">projets</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img 
              variant="top" 
              src={StopAddict} 
              alt="Stop Addict" 
              className="card-img-top"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                Stop Addict - Application d'aide au sevrage
              </Card.Title>
              <Card.Text className="card-text">
                Stop Addict est une application qui permet aux utilisateurs de vaincre leurs addictions grâce à un suivi 
                personnalisé et un soutien communautaire.
                
                <p><strong>Fonctionnalités principales :</strong></p>
                <ul className="feature-list">
                  <li>Suivi des économies réalisées</li>
                  <li>Compteur de substances évitées (cigarettes, etc.)</li>
                  <li>Calcul de la vie gagnée en jours</li>
                  <li>Forum d'entraide entre utilisateurs</li>
                  <li>Système de demande d'aide et de soutien en groupe</li>
                  <li>Statistiques personnalisées sur les progrès</li>
                </ul>
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React Native, Node.js, MongoDB, Redux
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <SiRedux className="Techstacks-icons" />
                  <FaUsers className="Techstacks-icons" />
                </div>
              </div>
              
              <div className="btn-container">
                <Button
                  variant="primary"
                  href="#"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  href="#"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Télécharger
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img 
              variant="top" 
              src={LeBonCoinAi} 
              alt="LeBonCoinAi" 
              className="card-img-top"
            />
            <div className="dev-badge">
              En développement
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                LeBonCoinAi - Recherche d'annonces automatisée
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                LeBoncoin AI est une application intelligente qui automatise la recherche de petites annonces selon des critères avancés 
                (ex : Renault Clio noire, diesel, &lt;150 000 km, rayon 50 km).
                <br/>
                <br/>
                Fonctionnalités principales :
                <br/>
                • Scraping intelligent des nouvelles annonces
                <br/>
                • Analyse et filtrage des contenus selon critères précis
                <br/>
                • Détection des bonnes opportunités
                <br/>
                • Envoi automatisé de messages aux vendeurs
                <br/>
                • Alertes par email ou SMS avec photos et liens
              </Card.Text>
              <div className="Techstacks">
                Stack technique : Python, Node.js, React, API IA
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <FaSearch className="Techstacks-icons" />
                  <FaRobot className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="#"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ opacity: "0.7", cursor: "not-allowed" }}
                >
                  {" "}
                  <FaCode /> En développement
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img 
              variant="top" 
              src={SmoobuV2} 
              alt="Smoobu V2"   
              className="card-img-top"
            />
            <div className="dev-badge">
              En développement
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                Smoobu V2 - Gestion immobilière courte durée
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                Smoobu V2 est un outil de gestion immobilière courte durée, inspiré de Smoobu mais repensé pour les 
                propriétaires ou gestionnaires d'appartements.
                <br/>
                <br/>
                Fonctionnalités principales :
                <br/>
                • Gestion des réservations multicanaux (Airbnb, Booking, etc.)
                <br/>
                • Synchronisation des calendriers
                <br/>
                • Gestion des femmes de ménage
                <br/>
                • Suivi des statistiques et performances
                <br/>
                • Attribution de rôles aux utilisateurs (admin, collaborateur, cleaner)
                <br/>
                • Modules IA pour automatiser messages et suggestions
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React, Node.js, SQL, API IA
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <FaHome className="Techstacks-icons" />
                  <FaDatabase className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="https://github.com/Nassim-Bzr?tab=repositories"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ opacity: "0.7", cursor: "not-allowed" }}
                >
                  {" "}
                  <FaCode /> En développement
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img 
              variant="top" 
              src={Laptop} 
              alt="CheckCalories" 
              className="card-img-top"
            />
            <div className="dev-badge">
              En développement
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                CheckCalories - Suivi alimentaire par IA
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                CheckCalories est une application IA qui permet de suivre son alimentation grâce à la reconnaissance 
                visuelle et à l'analyse textuelle.
                <br/>
                <br/>
                Fonctionnalités principales :
                <br/>
                • Reconnaissance visuelle des aliments par photo
                <br/>
                • Analyse textuelle des repas décrits
                <br/>
                • Estimation des calories et apports nutritionnels (protéines, sucre, gras)
                <br/>
                • Rapports nutritionnels journaliers
                <br/>
                • Conseils personnalisés et suivi de l'évolution
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React Native, Node.js, Computer Vision, NLP
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <FaUtensils className="Techstacks-icons" />
                  <FaRobot className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="#"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ opacity: "0.7", cursor: "not-allowed" }}
                >
                  {" "}
                  <FaCode /> En développement
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img 
              variant="top" 
              src={Laptop} 
              alt="AutoJobAI" 
              className="card-img-top"
            />
            <div className="dev-badge">
              En développement
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                AutoJobAI - Assistant recherche d'emploi intelligent
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                AutoJobAI est une application qui analyse un CV, détecte les compétences clés, et cherche automatiquement 
                des offres d'alternance ou d'emploi correspondant au profil.
                <br/>
                <br/>
                Fonctionnalités principales :
                <br/>
                • Analyse intelligente de CV et détection des compétences
                <br/>
                • Recherche automatisée via scraping ou APIs (Welcome to the Jungle, LinkedIn)
                <br/>
                • Candidature automatique avec mail généré par IA
                <br/>
                • Récapitulatif quotidien des candidatures
                <br/>
                • Suivi des statuts des candidatures
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React, Node.js, API IA, NLP
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <FaBriefcase className="Techstacks-icons" />
                  <FaRobot className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="#"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ opacity: "0.7", cursor: "not-allowed" }}
                >
                  {" "}
                  <FaCode /> En développement
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img 
              variant="top" 
              src={Laptop} 
              alt="IA Coach Revente" 
              className="card-img-top"
            />
            <div className="dev-badge">
              En développement
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                IA Coach Revente - Assistant de vente d'occasion
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                IA Coach Revente est une app qui aide les particuliers à estimer la valeur d'un objet qu'ils souhaitent 
                revendre (voiture, objet tech, vêtement, etc.).
                <br/>
                <br/>
                Fonctionnalités principales :
                <br/>
                • Estimation du prix de revente via analyse de marché
                <br/>
                • Rédaction automatique d'annonces optimisées
                <br/>
                • Suggestion de mots-clés pertinents
                <br/>
                • Recommandation des plateformes idéales (Leboncoin, Vinted, eBay...)
                <br/>
                • Conseils pour vendre rapidement au bon prix
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React, Node.js, API IA, NLP
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <FaShoppingCart className="Techstacks-icons" />
                  <FaRobot className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="#"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ opacity: "0.7", cursor: "not-allowed" }}
                >
                  {" "}
                  <FaCode /> En développement
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={AiCoach} alt="AI Recruteur Coach" className="card-img-top" />
            <div className="dev-badge">
              En développement
            </div>
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                AI Recruteur Coach - Simulateur d'entretien IA
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                AI Recruteur Coach est un outil innovant qui permet aux candidats de simuler des entretiens d'embauche
                avec une intelligence artificielle conçue pour reproduire le comportement d'un recruteur.
                <br/>
                <br/>
                Fonctionnalités principales :
                <br/>
                • Simulation d'entretien en temps réel avec IA
                <br/>
                • Feedback instantané sur vos réponses
                <br/>
                • Suivi de votre progression et historique d'entretiens
                <br/>
                • Interface intuitive et responsive
                <br/>
                • Authentification et espace personnel
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React, TypeScript, Tailwind CSS, API IA, Backend Node.js
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <SiTypescript className="Techstacks-icons" />
                  <SiTailwindcss className="Techstacks-icons" />
                  <FaRobot className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="https://github.com/Nassim-Bzr/AiCoachRecrut"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Frontend
                </Button>
                <Button
                  variant="primary"
                  href="https://github.com/Nassim-Bzr/Back-AiCoachJob"
                  target="_blank"
                >
                  {" "}
                  <FaDatabase /> Backend
                </Button>
                <Button
                  variant="primary"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ opacity: "0.7", cursor: "not-allowed" }}
                >
                  {" "}
                  <FaCode /> En développement
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={SajMeta} alt="Saj Meta Deal" className="card-img-top" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                Saj Meta Deal - Plateforme de formations médicales
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                Saj Meta Deal est une plateforme spécialisée dans les formations DPC (Développement Professionnel Continu) 
                pour les professionnels de santé. Le site propose un catalogue complet de formations adaptées à différentes 
                spécialités médicales.
                <br/>
                <br/>
                Fonctionnalités principales :
                <br/>
                • Catalogue de formations par spécialité (Médecine Générale, Chirurgien-dentiste, Infirmier, etc.)
                <br/>
                • Système de réservation de sessions avec calendrier intégré
                <br/>
                • Formations disponibles en plusieurs formats (présentiel, e-learning, hybride)
                <br/>
                • Information détaillée sur les prix, durées et indemnisations
                <br/>
                • Système de newsletter et de contact
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React, TypeScript, CSS, Vercel
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <SiTypescript className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <FaMedkit className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="https://github.com/Nassim-Bzr/Saj-Web"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  href="https://saj-web-8596.vercel.app/formations"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Voir le site
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={LivenceHome} alt="Livence Project Booking" className="card-img-top" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                Livence - Plateforme de réservation
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                Livence est une application de réservation en ligne qui permet aux utilisateurs de réserver 
                facilement des services. La plateforme offre une interface intuitive pour la recherche et 
                la réservation.
                <br/>
                <br/>
                Les utilisateurs peuvent parcourir les services disponibles, consulter les détails et effectuer 
                des réservations en quelques clics. Le système gère également les paiements et les confirmations.
                <br/>
                <br/>
                Le projet inclut un système d'authentification sécurisé, un tableau de bord utilisateur 
                pour gérer les réservations, et une interface d'administration pour les prestataires de services.
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React JS, Tailwind CSS côté front,
                <br/> Node JS, PostgreSQL côté back.
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <SiTailwindcss className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <SiPostgresql className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="https://github.com/Nassim-Bzr/LivenceProjectBooking"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  href="https://www.livence.fr/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Voir le site
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={Obonnesaffaires} alt="Obonnesaffaires E-commerce" className="card-img-top" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                Obonnesaffaires - Site E-commerce
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                Obonnesaffaires est une plateforme e-commerce développée en collaboration via Git. Le site 
                propose une expérience d'achat en ligne simple et efficace pour les consommateurs.
                <br/>
                <br/>
                Fonctionnalités principales :
                <br/>
                • Catalogue de produits avec filtres et recherche
                <br/>
                • Système de panier et de commande
                <br/>
                • Paiement sécurisé
                <br/>
                • Espace client pour suivre les commandes
                <br/>
                • Interface administrateur pour la gestion des produits et des commandes
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React JS, CSS, Node.js, MongoDB
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="https://obonnesaffaires.fr/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Voir le site
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={TiLabel} alt="Application de quiz" className="card-img-top" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                Application de quiz
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                J'ai réalisé seul une application de quiz qui permet aux utilisateurs de tester leurs connaissances dans différents domaines.
                <br/>
                <br/>
                L'application propose une large gamme de quiz dans diverses catégories. Les utilisateurs peuvent sélectionner un quiz de leur choix et répondre à une série de questions.
                <br/>
                <br/>
                Une fonctionnalité phare est le mode "joueur contre joueur" qui permet aux utilisateurs de défier leurs amis en temps réel. Les joueurs peuvent créer des salles privées et participer à des compétitions avec un système de classement intégré.
                <br/>
                <br/>
                L'application offre également une expérience interactive avec des fonctionnalités telles qu'un compte à rebours pour chaque question, un affichage des scores en temps réel, et un mode tournoi pour des compétitions à plus grande échelle.
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React JS & Redux côté front ,
                <br/> Node JS PostgreSQL côté back.
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <SiRedux className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <SiPostgresql className="Techstacks-icons" />
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="https://github.com/Nassim-Bzr/Apo-Quiz"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={MegaBonPlan} alt="MegaBonPlan" className="card-img-top" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "800" }}>
                MegaBonPlan - Partage de bons plans
              </Card.Title>
              <Card.Text className="card-text" style={{ textAlign: "justify" }}>
                <br/>
                Inspiré de Dealabs, MegaBonPlan est une plateforme communautaire où les utilisateurs peuvent partager et découvrir des bons plans, codes promo et offres spéciales.
                <br/>
                <br/>
                Fonctionnalités principales :
                <br/>
                • Système de vote permettant à la communauté de faire remonter les meilleurs deals
                <br/>
                • Alertes personnalisées pour les offres correspondant aux centres d'intérêt des utilisateurs
                <br/>
                • Commentaires et discussions sur chaque bon plan
                <br/>
                • Section "Deals à ne pas manquer" mise en avant sur la page d'accueil
                <br/>
                • Possibilité d'ajouter des liens d'affiliation pour les utilisateurs contributeurs
              </Card.Text>
              <div className="Techstacks">
                Stack technique : React JS, HTML, CSS, JavaScript
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
                  <DiReact className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "5%" }}>
                <Button
                  variant="primary"
                  href="https://github.com/Nassim-Bzr/Megabonplan"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}></Col>
        </Row>
      </Container>
    </Container>
  );
};

