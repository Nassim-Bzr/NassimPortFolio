import React, { useState, useEffect } from "react";
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
import { FaLink, FaCss3, FaServer, FaMedkit, FaCalendarAlt, FaRobot, FaCode, FaDatabase, FaUsers, FaSearch, FaHome, FaUtensils, FaBriefcase, FaShoppingCart, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Données des projets
  const projects = [
    {
      id: 1,
      image: StopAddict,
      title: "Stop Addict - Application d'aide au sevrage",
      description: "Stop Addict est une application qui permet aux utilisateurs de vaincre leurs addictions grâce à un suivi personnalisé et un soutien communautaire.",
      features: [
        "Suivi des économies réalisées",
        "Compteur de substances évitées (cigarettes, etc.)",
        "Calcul de la vie gagnée en jours",
        "Forum d'entraide entre utilisateurs",
        "Système de demande d'aide et de soutien en groupe",
        "Statistiques personnalisées sur les progrès"
      ],
      techStack: "React Native, Node.js, MongoDB, Redux",
      techIcons: [DiReact, DiNodejs, SiRedux, FaUsers],
      githubLink: "#",
      liveLink: "#",
      liveLinkText: "Télécharger",
      status: "completed"
    },
    {
      id: 2,
      image: LeBonCoinAi,
      title: "LeBonCoinAi - Recherche d'annonces automatisée",
      description: "LeBoncoin AI est une application intelligente qui automatise la recherche de petites annonces selon des critères avancés (ex : Renault Clio noire, diesel, <150 000 km, rayon 50 km).",
      features: [
        "Scraping intelligent des nouvelles annonces",
        "Analyse et filtrage des contenus selon critères précis",
        "Détection des bonnes opportunités",
        "Envoi automatisé de messages aux vendeurs",
        "Alertes par email ou SMS avec photos et liens"
      ],
      techStack: "Python, Node.js, React, API IA",
      techIcons: [DiReact, DiNodejs, FaSearch, FaRobot],
      githubLink: "#",
      liveLink: "#",
      liveLinkText: "En développement",
      status: "development"
    },
    {
      id: 3,
      image: SmoobuV2,
      title: "Smoobu V2 - Gestion immobilière courte durée",
      description: "Smoobu V2 est un outil de gestion immobilière courte durée, inspiré de Smoobu mais repensé pour les propriétaires ou gestionnaires d'appartements.",
      features: [
        "Gestion des réservations multicanaux (Airbnb, Booking, etc.)",
        "Synchronisation des calendriers",
        "Gestion des femmes de ménage",
        "Suivi des statistiques et performances",
        "Attribution de rôles aux utilisateurs (admin, collaborateur, cleaner)",
        "Modules IA pour automatiser messages et suggestions"
      ],
      techStack: "React, Node.js, SQL, API IA",
      techIcons: [DiReact, DiNodejs, FaHome, FaDatabase],
      githubLink: "https://github.com/Nassim-Bzr?tab=repositories",
      liveLink: "#",
      liveLinkText: "En développement",
      status: "development"
    },
    {
      id: 4,
      image: Laptop,
      title: "CheckCalories - Suivi alimentaire par IA",
      description: "CheckCalories est une application IA qui permet de suivre son alimentation grâce à la reconnaissance visuelle et à l'analyse textuelle.",
      features: [
        "Reconnaissance visuelle des aliments par photo",
        "Analyse textuelle des repas décrits",
        "Estimation des calories et apports nutritionnels (protéines, sucre, gras)",
        "Rapports nutritionnels journaliers",
        "Conseils personnalisés et suivi de l'évolution"
      ],
      techStack: "React Native, Node.js, Computer Vision, NLP",
      techIcons: [DiReact, DiNodejs, FaUtensils, FaRobot],
      githubLink: "#",
      liveLink: "#",
      liveLinkText: "En développement",
      status: "development"
    },
    {
      id: 5,
      image: Laptop,
      title: "AutoJobAI - Assistant recherche d'emploi intelligent",
      description: "AutoJobAI est une application qui analyse un CV, détecte les compétences clés, et cherche automatiquement des offres d'alternance ou d'emploi correspondant au profil.",
      features: [
        "Analyse intelligente de CV et détection des compétences",
        "Recherche automatisée via scraping ou APIs (Welcome to the Jungle, LinkedIn)",
        "Candidature automatique avec mail généré par IA",
        "Récapitulatif quotidien des candidatures",
        "Suivi des statuts des candidatures"
      ],
      techStack: "React, Node.js, API IA, NLP",
      techIcons: [DiReact, DiNodejs, FaBriefcase, FaRobot],
      githubLink: "#",
      liveLink: "#",
      liveLinkText: "En développement",
      status: "development"
    },
    {
      id: 6,
      image: Laptop,
      title: "IA Coach Revente - Assistant de vente d'occasion",
      description: "IA Coach Revente est une app qui aide les particuliers à estimer la valeur d'un objet qu'ils souhaitent revendre (voiture, objet tech, vêtement, etc.).",
      features: [
        "Estimation du prix de revente via analyse de marché",
        "Rédaction automatique d'annonces optimisées",
        "Suggestion de mots-clés pertinents",
        "Recommandation des plateformes idéales (Leboncoin, Vinted, eBay...)",
        "Conseils pour vendre rapidement au bon prix"
      ],
      techStack: "React, Node.js, API IA, NLP",
      techIcons: [DiReact, DiNodejs, FaShoppingCart, FaRobot],
      githubLink: "#",
      liveLink: "#",
      liveLinkText: "En développement",
      status: "development"
    },
    {
      id: 7,
      image: AiCoach,
      title: "AI Recruteur Coach - Simulateur d'entretien IA",
      description: "AI Recruteur Coach est un outil innovant qui permet aux candidats de simuler des entretiens d'embauche avec une intelligence artificielle conçue pour reproduire le comportement d'un recruteur.",
      features: [
        "Simulation d'entretien en temps réel avec IA",
        "Feedback instantané sur vos réponses",
        "Suivi de votre progression et historique d'entretiens",
        "Interface intuitive et responsive",
        "Authentification et espace personnel"
      ],
      techStack: "React, TypeScript, Tailwind CSS, API IA, Backend Node.js",
      techIcons: [DiReact, SiTypescript, SiTailwindcss, FaRobot, DiNodejs],
      githubLink: "https://github.com/Nassim-Bzr/AiCoachRecrut",
      backendLink: "https://github.com/Nassim-Bzr/Back-AiCoachJob",
      liveLink: "#",
      liveLinkText: "En développement",
      status: "development"
    },
    {
      id: 8,
      image: SajMeta,
      title: "Saj Meta Deal - Plateforme de formations médicales",
      description: "Saj Meta Deal est une plateforme spécialisée dans les formations DPC (Développement Professionnel Continu) pour les professionnels de santé.",
      features: [
        "Catalogue de formations par spécialité (Médecine Générale, Chirurgien-dentiste, Infirmier, etc.)",
        "Système de réservation de sessions avec calendrier intégré",
        "Formations disponibles en plusieurs formats (présentiel, e-learning, hybride)",
        "Information détaillée sur les prix, durées et indemnisations",
        "Système de newsletter et de contact"
      ],
      techStack: "React, TypeScript, CSS, Vercel",
      techIcons: [DiReact, SiTypescript, FaCss3, FaMedkit],
      githubLink: "https://github.com/Nassim-Bzr/Saj-Web",
      liveLink: "https://saj-web-8596.vercel.app/formations",
      liveLinkText: "Voir le site",
      status: "completed"
    },
    {
      id: 9,
      image: LivenceHome,
      title: "Livence - Plateforme de réservation",
      description: "Livence est une application de réservation en ligne qui permet aux utilisateurs de réserver facilement des services. La plateforme offre une interface intuitive pour la recherche et la réservation.",
      features: [
        "Interface intuitive pour la recherche et la réservation",
        "Système de paiements et confirmations",
        "Système d'authentification sécurisé",
        "Tableau de bord utilisateur pour gérer les réservations",
        "Interface d'administration pour les prestataires de services"
      ],
      techStack: "React JS, Tailwind CSS, Node JS, PostgreSQL",
      techIcons: [DiReact, SiTailwindcss, DiNodejs, SiPostgresql],
      githubLink: "https://github.com/Nassim-Bzr/LivenceProjectBooking",
      liveLink: "https://www.livence.fr/",
      liveLinkText: "Voir le site",
      status: "completed"
    },
    {
      id: 10,
      image: Obonnesaffaires,
      title: "Obonnesaffaires - Site E-commerce",
      description: "Obonnesaffaires est une plateforme e-commerce développée en collaboration via Git. Le site propose une expérience d'achat en ligne simple et efficace.",
      features: [
        "Catalogue de produits avec filtres et recherche",
        "Système de panier et de commande",
        "Paiement sécurisé",
        "Espace client pour suivre les commandes",
        "Interface administrateur pour la gestion des produits et des commandes"
      ],
      techStack: "React JS, CSS, Node.js, MongoDB",
      techIcons: [DiReact, FaCss3, DiNodejs, DiJavascript],
      githubLink: null,
      liveLink: "https://obonnesaffaires.fr/",
      liveLinkText: "Voir le site",
      status: "completed"
    },
    {
      id: 11,
      image: TiLabel,
      title: "Application de quiz",
      description: "Application de quiz qui permet aux utilisateurs de tester leurs connaissances dans différents domaines avec un mode joueur contre joueur en temps réel.",
      features: [
        "Large gamme de quiz dans diverses catégories",
        "Mode 'joueur contre joueur' en temps réel",
        "Salles privées et compétitions",
        "Système de classement intégré",
        "Compte à rebours pour chaque question",
        "Mode tournoi pour des compétitions à plus grande échelle"
      ],
      techStack: "React JS, Redux, Node JS, PostgreSQL",
      techIcons: [DiReact, SiRedux, DiNodejs, SiPostgresql],
      githubLink: "https://github.com/Nassim-Bzr/Apo-Quiz",
      liveLink: null,
      liveLinkText: null,
      status: "completed"
    },
    {
      id: 12,
      image: MegaBonPlan,
      title: "MegaBonPlan - Partage de bons plans",
      description: "Inspiré de Dealabs, MegaBonPlan est une plateforme communautaire où les utilisateurs peuvent partager et découvrir des bons plans, codes promo et offres spéciales.",
      features: [
        "Système de vote permettant à la communauté de faire remonter les meilleurs deals",
        "Alertes personnalisées pour les offres correspondant aux centres d'intérêt",
        "Commentaires et discussions sur chaque bon plan",
        "Section 'Deals à ne pas manquer' mise en avant",
        "Possibilité d'ajouter des liens d'affiliation pour les utilisateurs contributeurs"
      ],
      techStack: "React JS, HTML, CSS, JavaScript",
      techIcons: [DiReact, DiHtml5, FaCss3, DiJavascript],
      githubLink: "https://github.com/Nassim-Bzr/Megabonplan",
      liveLink: null,
      liveLinkText: null,
      status: "completed"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const renderProject = (project) => {
    const TechIcon = ({ IconComponent, index }) => <IconComponent key={index} className="tech-icon" />;
    
    return (
      <div className="project-slide" key={project.id}>
        <Card className="project-slide-card">
          <div className="project-slide-content">
            <div className="project-slide-left">
              <div className="project-image-container">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  alt={project.title}
                  className="project-slide-image"
                />
                {project.status === "development" && (
                  <div className="dev-badge-slide">
                    En développement
                  </div>
                )}
              </div>
            </div>
            
            <div className="project-slide-right">
              <Card.Body className="project-slide-body">
                <Card.Title className="project-slide-title">
                  {project.title}
                </Card.Title>
                
                <Card.Text className="project-slide-description">
                  {project.description}
                </Card.Text>
                
                <div className="project-features">
                  <h6>Fonctionnalités principales :</h6>
                  <ul>
                    {project.features.slice(0, 4).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                    {project.features.length > 4 && <li>Et bien plus...</li>}
                  </ul>
                </div>
                
                <div className="tech-stack-section">
                  <p className="tech-stack-text">
                    <strong>Stack technique :</strong> {project.techStack}
                  </p>
                  <div className="tech-icons-container">
                    {project.techIcons.map((IconComponent, index) => (
                      <TechIcon key={index} IconComponent={IconComponent} index={index} />
                    ))}
                  </div>
                </div>
                
                <div className="project-buttons">
                  {project.githubLink && (
                    <Button
                      variant="primary"
                      href={project.githubLink}
                      target="_blank"
                      className="project-btn"
                    >
                      <DiGithubBadge /> {project.backendLink ? "Frontend" : "Github"}
                    </Button>
                  )}
                  
                  {project.backendLink && (
                    <Button
                      variant="primary"
                      href={project.backendLink}
                      target="_blank"
                      className="project-btn"
                    >
                      <FaDatabase /> Backend
                    </Button>
                  )}
                  
                  {project.liveLink && project.liveLinkText && (
                    <Button
                      variant={project.status === "development" ? "secondary" : "success"}
                      href={project.status === "development" ? "#" : project.liveLink}
                      target={project.status === "development" ? "_self" : "_blank"}
                      className="project-btn"
                      onClick={project.status === "development" ? (e) => e.preventDefault() : undefined}
                      style={project.status === "development" ? { opacity: "0.7", cursor: "not-allowed" } : {}}
                    >
                      {project.status === "development" ? <FaCode /> : <FaLink />} {project.liveLinkText}
                    </Button>
                  )}
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">projets</strong>
        </h1>

        <div className="projects-slider-container">
          {/* Controls */}
          <div className="slider-controls">
            <button 
              className="slider-control-btn autoplay-btn"
              onClick={toggleAutoPlay}
              title={isAutoPlay ? "Mettre en pause" : "Lecture automatique"}
            >
              {isAutoPlay ? <FaPause /> : <FaPlay />}
            </button>
            
            <div className="slide-counter">
              {currentSlide + 1} / {projects.length}
            </div>
          </div>

          {/* Slider */}
          <div className="projects-slider">
            <button 
              className="slider-nav-btn slider-nav-prev" 
              onClick={prevSlide}
              aria-label="Projet précédent"
            >
              <FaChevronLeft />
            </button>

            <div className="slider-content">
              <div 
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project) => renderProject(project))}
              </div>
            </div>

            <button 
              className="slider-nav-btn slider-nav-next" 
              onClick={nextSlide}
              aria-label="Projet suivant"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Indicators */}
          <div className="slider-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`slider-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>

          {/* Project navigation thumbnails */}
          <div className="project-thumbnails">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-thumbnail ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <img src={project.image} alt={project.title} />
                <div className="thumbnail-overlay">
                  <span className="thumbnail-title">{project.title.split(' - ')[0]}</span>
                  {project.status === "development" && (
                    <span className="thumbnail-status">Dev</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
};

