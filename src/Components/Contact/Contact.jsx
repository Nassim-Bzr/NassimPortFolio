import React from "react";
import { Button } from "react-bootstrap";
import "./Contact.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import laptoplogo from "../Assets/laptop.png";
import emailjs from "emailjs-com";

const formdata = {
  to_name: "Pooran Suthar",
  from_name: "",
  from_email: "",
  message: "",
  subject: ""
};
export const Contact = () => {
  const [inputdata, setinputdata] = React.useState(formdata);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setinputdata({
      ...inputdata,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xmobghn",
        "template_x44rk4n",
        e.target,
        "user_3a3PGrlCPt7hS6KBC3xOa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setinputdata(formdata);
    e.target.reset();
  };

  return (
    <div className="contact-form">
      <h1>
        <FaHeadphonesAlt className="contactlogo" /> &nbsp;Get in{" "}
        <strong className="blue">Touch</strong>
      </h1>
      <div className="FormDiv">
        <div className="FormDiv-imagediv">
          <img src={laptoplogo} alt="Laptop Logo" />
        </div>
        <form className="FormDiv-inputdiv" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="First last"
              value={inputdata.from_name}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <br />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Reason"
              value={inputdata.subject}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Please enter Your Email"
              value={inputdata.from_email}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="Please Enter Message Here"
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
                border: "#623686"
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
