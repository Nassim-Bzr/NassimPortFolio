import React from "react";
import { Button } from "react-bootstrap";
import "./Contact.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import laptoplogo from "../Assets/laptop.png";
import emailjs from "emailjs-com";

const formdata = {
  to_name: "Pooran Suthar",
  from_name: "",
  from_email: "",
  message: "",
  subject: "",
};
export const Contact = () => {
  const [inputdata, setinputdata] = React.useState(formdata);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setinputdata({
      ...inputdata,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification si tous les champs nécessaires sont remplis
    if (
      !inputdata.from_name ||
      !inputdata.from_email ||
      !inputdata.message ||
      !inputdata.subject
    ) {
      Swal.fire({
        icon: "error",
        title: "Erreur...",
        text: "Veuillez remplir tous les champs avant de soumettre le formulaire.",
      });
      return; // Arrêter la fonction ici si tous les champs ne sont pas remplis
    }

    // Continuer avec l'envoi des données si tous les champs sont remplis
    emailjs
      .sendForm(
        "service_yfe7lsh", // Remplacez par votre service ID
        "template_yr0uonj", // Remplacez par votre template ID
        e.target,
        "R2PkxWVMmSHoyhnCr" // Remplacez par votre user ID (API Key)
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message envoyé avec succès!",
            text: "Nous vous contacterons bientôt.",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Erreur lors de l'envoi du message.",
            text: error.text,
          });
        }
      );

    setinputdata(formdata); // Réinitialiser les données du formulaire
    e.target.reset(); // Réinitialiser le formulaire
  };

  return (
    <div className="contact-form">
      <h1>
        <FaHeadphonesAlt className="contactlogo" /> &nbsp;Contact{" "}
        <strong className="blue"></strong>
      </h1>
      <div className="FormDiv">
       
        <form className="FormDiv-inputdiv" onSubmit={handleSubmit}>
          <div>
            <label className="label-form" htmlFor="name">Nom</label>
            <br />
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Nom Prenom"
              value={inputdata.from_name}
              onChange={handlechange}
            />
          </div>
          <div>
            <label className="label-form" htmlFor="subject">Sujet</label>
            <br />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Sujet"
              value={inputdata.subject}
              onChange={handlechange}
            />
          </div>
          <div>
            <label className="label-form" htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Veuillez entrer votre email"
              value={inputdata.from_email}
              onChange={handlechange}
            />
          </div>
          <div>
            <label className="label-form" htmlFor="message">Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="Veuillez entrer votre message ici"
              value={inputdata.message}
              onChange={handlechange}
            />
          </div>
          <div>
            <input
              className="inputdivButton"
              type="submit"
              style={{
                color: "#fff",
                backgroundColor: "#623686",
                border: "#623686",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
