import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaTwitter, 
  FaLinkedin, 
  FaGithub,
  FaFacebook
} from "react-icons/fa";
import "../Styles/main.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center align-items-center flex-column">
            {" "}
            {/* Center the row horizontally */}
            <Col lg="7">
              <form className="contact_form w-100">
                <Row className="mb-3">
                  {" "}
                  {/* spaces the rows */}
                  <Col className="form-group">
                    <input
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="Last name"
                      type="text"
                    />
                  </Col>
                  <Col className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="lastname"
                      name="last name"
                      placeholder="Last name"
                      type="text"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <input
                    className="form-control rounded-0"
                    id="emailaddress"
                    name="emailaddress"
                    placeholder="Email Address"
                    type="text"
                  />
                </Row>
                <Row className="mb-3">
                  <textarea
                    className="form-control rounded-0"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-item">
            <FaPhone size={40} color="black" />
            <span className="info">+447475494000 </span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt size={40} color="black" />
            <span className="info">London, United Kingdom</span>
          </div>
          <div className="contact-item">
            <FaEnvelope size={40} color="black" />
            <span className="info">kasoziubar97@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaWhatsapp size={40} color="green" />
            <span className="info">+256706427289 / +256780447777 </span>
          </div>
        </div>

        <div className="social-media-icons">
        
        <a href="https://twitter.com/ubarkaz" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} color="#1DA1F2" />
        </a>

        <a href="https://linkedin.com/in/UbarKasozi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color="#0A66C2" />
        </a>

        <a href="https://github.com/ubarkaz" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} color="black" />
        </a>

        <a href="https://facebook.com/UbarKunDybala" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={40} color="#1877F2" />
        </a>

      </div>

      <footer className="footer">
          <p>&copy; Ubar Kasozi 2023. All rights reserved.</p>
        </footer>
       
      </>
    );
  }
}
