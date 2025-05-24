import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import "./Contact.css";
import { 
  FaHeadphonesAlt, 
  FaUser, 
  FaTag,
  FaEnvelope, 
  FaCommentDots,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCheck,
  FaTimes,
  FaSpinner
} from "react-icons/fa";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const formdata = {
  to_name: "Nassim Bouzerara",
  from_name: "",
  from_email: "",
  message: "",
  subject: "",
};

export const Contact = () => {
  const [inputdata, setinputdata] = useState(formdata);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState({});
  const [focusedField, setFocusedField] = useState("");

  // Validation en temps réel
  const validateField = (name, value) => {
    switch (name) {
      case "from_name":
        if (!value.trim()) return "Le nom est requis";
        if (value.trim().length < 2) return "Le nom doit contenir au moins 2 caractères";
        return "";
      case "from_email":
        if (!value.trim()) return "L'email est requis";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Veuillez entrer un email valide";
        return "";
      case "subject":
        if (!value.trim()) return "Le sujet est requis";
        if (value.trim().length < 3) return "Le sujet doit contenir au moins 3 caractères";
        return "";
      case "message":
        if (!value.trim()) return "Le message est requis";
        if (value.trim().length < 10) return "Le message doit contenir au moins 10 caractères";
        return "";
      default:
        return "";
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setinputdata({
      ...inputdata,
      [name]: value,
    });

    // Validation en temps réel
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    setFocusedField("");
  };

  const handleFocus = (e) => {
    setFocusedField(e.target.name);
  };

  const validateAllFields = () => {
    const newErrors = {};
    Object.keys(inputdata).forEach(key => {
      if (key !== "to_name") {
        const error = validateField(key, inputdata[key]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Marquer tous les champs comme touchés
    setTouched({
      from_name: true,
      from_email: true,
      subject: true,
      message: true
    });

    if (!validateAllFields()) {
      Swal.fire({
        icon: "error",
        title: "Erreur de validation",
        text: "Veuillez corriger les erreurs avant de soumettre le formulaire.",
        background: '#1a1a2e',
        color: '#ffffff',
        confirmButtonColor: '#4f46e5'
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_yfe7lsh",
        "template_yr0uonj",
        e.target,
        "R2PkxWVMmSHoyhnCr"
      );

      Swal.fire({
        icon: "success",
        title: "Message envoyé avec succès! 🎉",
        text: "Merci pour votre message ! Je vous contacterai très bientôt.",
        background: '#1a1a2e',
        color: '#ffffff',
        confirmButtonColor: '#10b981',
        showConfetti: true
      });

      setinputdata(formdata);
      setErrors({});
      setTouched({});
      e.target.reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Erreur lors de l'envoi",
        text: "Une erreur s'est produite. Veuillez réessayer ou me contacter directement.",
        background: '#1a1a2e',
        color: '#ffffff',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getFieldStatus = (fieldName) => {
    if (errors[fieldName] && touched[fieldName]) return "error";
    if (!errors[fieldName] && touched[fieldName] && inputdata[fieldName]) return "success";
    return "default";
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Nassim-Bzr",
      color: "#333"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/nassim-bouzerara",
      color: "#0077b5"
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/nassim_bzr",
      color: "#1da1f2"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/nassim.bzr",
      color: "#e4405f"
    }
  ];

  return (
    <div className="contact-section">
      <Container>
        <div className="contact-header">
          <div className="contact-icon-wrapper">
            <FaHeadphonesAlt className="contact-main-icon" />
          </div>
          <h1 className="contact-title">
            Prenons <span className="gradient-text">Contact</span>
          </h1>
          <p className="contact-subtitle">
            Une idée de projet ? Une question ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaEnvelope />
              </div>
              <div className="contact-card-content">
                <h3>Email</h3>
                <p>nassim.bouzerara@email.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">
                <FaHeadphonesAlt />
              </div>
              <div className="contact-card-content">
                <h3>Disponibilité</h3>
                <p>Lun - Ven : 9h - 18h</p>
              </div>
            </div>

            <div className="social-section">
              <h3>Retrouvez-moi sur</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <social.icon />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    <FaUser className="label-icon" />
                    Nom complet
                  </label>
                  <div className={`input-wrapper ${getFieldStatus('from_name')} ${focusedField === 'from_name' ? 'focused' : ''}`}>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Votre nom complet"
                      value={inputdata.from_name}
                      onChange={handlechange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      className="form-input"
                    />
                    <div className="input-status">
                      {getFieldStatus('from_name') === 'success' && <FaCheck />}
                      {getFieldStatus('from_name') === 'error' && <FaTimes />}
                    </div>
                  </div>
                  {errors.from_name && touched.from_name && (
                    <div className="error-message">{errors.from_name}</div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaEnvelope className="label-icon" />
                    Email
                  </label>
                  <div className={`input-wrapper ${getFieldStatus('from_email')} ${focusedField === 'from_email' ? 'focused' : ''}`}>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="votre.email@exemple.com"
                      value={inputdata.from_email}
                      onChange={handlechange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      className="form-input"
                    />
                    <div className="input-status">
                      {getFieldStatus('from_email') === 'success' && <FaCheck />}
                      {getFieldStatus('from_email') === 'error' && <FaTimes />}
                    </div>
                  </div>
                  {errors.from_email && touched.from_email && (
                    <div className="error-message">{errors.from_email}</div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FaTag className="label-icon" />
                  Sujet
                </label>
                <div className={`input-wrapper ${getFieldStatus('subject')} ${focusedField === 'subject' ? 'focused' : ''}`}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Le sujet de votre message"
                    value={inputdata.subject}
                    onChange={handlechange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className="form-input"
                  />
                  <div className="input-status">
                    {getFieldStatus('subject') === 'success' && <FaCheck />}
                    {getFieldStatus('subject') === 'error' && <FaTimes />}
                  </div>
                </div>
                {errors.subject && touched.subject && (
                  <div className="error-message">{errors.subject}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FaCommentDots className="label-icon" />
                  Message
                </label>
                <div className={`input-wrapper textarea-wrapper ${getFieldStatus('message')} ${focusedField === 'message' ? 'focused' : ''}`}>
                  <textarea
                    name="message"
                    placeholder="Décrivez votre projet ou posez votre question..."
                    value={inputdata.message}
                    onChange={handlechange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className="form-textarea"
                    rows="5"
                  />
                  <div className="input-status">
                    {getFieldStatus('message') === 'success' && <FaCheck />}
                    {getFieldStatus('message') === 'error' && <FaTimes />}
                  </div>
                </div>
                {errors.message && touched.message && (
                  <div className="error-message">{errors.message}</div>
                )}
                <div className="character-count">
                  {inputdata.message.length} / 500 caractères
                </div>
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                <span className="button-content">
                  {isLoading ? (
                    <>
                      <FaSpinner className="spinner" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Envoyer le message
                    </>
                  )}
                </span>
                <div className="button-background"></div>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
