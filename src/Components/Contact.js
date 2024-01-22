import { Row, Col, Button } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/main.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

     //Validates the field to ensure all fields have values before message is sent
    const formFields = ["firstname", "lastname", "email", "Message"];
    const isFormValid = formFields.every((field) => {
      const value = form.current[field].value;
      return value && value.trim() !== ""; // It will check if the field is not empty
    });
  
    if (!isFormValid) {
      alert("Please fill in all fields before sending the message.");
      return;
    }
  
    alert("Message sent successfully");
  

    emailjs
      .sendForm(
        "service_d6er6dm",
        "template_hz26l6c",
        form.current,
        "rplRzZy8Ap2NB_loZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          console.log("Message not  sent");
        }
      );

    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <h1>Lets Connect</h1>
        <div className="contact-container">
          <div className="contact-form">
            <h2>Message me</h2>
            <Row className="justify-content-center align-items-center flex-column">
              {" "}
              {/* Center the row horizontally */}
              <Col lg="7">
                <form
                  className="contact_form w-100"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <Row className="mb-3">
                    {" "}
                    {/* spaces the rows */}
                    <Col className="form-group">
                      <input
                        className="form-control rounded-0 borderstyle" 
                        id="firstname"
                        name="firstname"
                        placeholder="First name"
                        type="text"
                        required
                      />
                    </Col>
                    <Col className="form-group">
                      <input
                        className="form-control rounded-0 borderstyle"
                        id="lastname"
                        name="lastname"
                        placeholder="Last name"
                        type="text"
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <input
                      className="form-control rounded-0 borderstyle"
                      id="senderEmail"
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      required
                    />
                  </Row>
                  <Row className="mb-3">
                    <textarea
                      className="form-control rounded-0 borderstyle"
                      id="message"
                      name="Message"
                      placeholder="Message"
                      rows="5"
                      required
                    ></textarea>
                  </Row>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className="button-hire-me" 
                  >
                    Send
                    <FaArrowRight className="submit-arrow" />
                  </Button>{" "}
                </form>
              </Col>
            </Row>
          </div>
          <div className="contact-info">
            <h2 className="connect">Connect with me</h2>
            <div className="contact-item">
              <FaPhone size={33} color="black" />
              <span className="info">+447475494000 </span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt size={33} color="black" />
              <span className="info">London, United Kingdom</span>
            </div>
            <div className="contact-item">
              <FaEnvelope size={33} color="black" />
              <span className="info">kasoziubar97@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaWhatsapp size={33} color="black" />
              <span className="info">+256706427289 </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
