import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import "../Styles/main.css";

export default class Contact extends Component {
  render() {
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
                  <form className="contact_form w-100">
                    <Row className="mb-3">
                      {" "}
                      {/* spaces the rows */}
                      <Col className="form-group">
                        <input
                          className="form-control rounded-0"
                          id="firstname"
                          name="firstname"
                          placeholder="First name"
                          type="text"
                        />
                      </Col>
                      <Col className="form-group">
                        <input
                          className="form-control rounded-0"
                          id="lastname"
                          name="Last name"
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
              <Button variant="outline-primary" className="button-hire-me">
                Send
                <FaArrowRight className="submit-arrow" />
              </Button>{" "}
            </div>
            <div className="contact-info">
              <h2 className="connect">Connect with me</h2>
              <div className="contact-item">
                <FaPhone size={35} color="black" />
                <span className="info">+447475494000 </span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt size={35} color="black" />
                <span className="info">London, United Kingdom</span>
              </div>
              <div className="contact-item">
                <FaEnvelope size={35} color="black" />
                <span className="info">kasoziubar97@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaWhatsapp size={35} color="black" />
                <span className="info">+256706427289 </span>
              </div>
            </div>
          </div>

        </section>

      </>
    );
  }
}
