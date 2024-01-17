import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";
import Skills from "./Skill";
import "../Styles/main.css";

export default class About extends Component {
  render() {
    return (
      <>
        <section id="about">
          <h1>Who I am</h1>
          <div className="about-content">
            <div className="profile">
              <p>
                I'm a First Class Graduate of Information Technology and a
                skilled Software Developer with over 3 years of professional
                experience.
              </p>
              <h2>My Services</h2>

              <Carousel indicators={true} prevLabel="" nextLabel="">
                <Carousel.Item>
                  <div className="carousel-content">
                    <FontAwesomeIcon icon={faDesktop} size="2x" />
                    <h2
                      style={{
                        fontSize: "20px",
                        marginTop: "17px",
                      }}
                    >
                      Web Development
                    </h2>
                    <p style={{ marginTop: "10px", fontSize: "18px" }}>
                      Specializing in full-stack development of dynamic and
                      responsive websites and applications. I create interactive visually
                      appealing user interfaces,
                    </p>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="carousel-content">
                    <FontAwesomeIcon icon={faMobile} size="2x" />
                    <h2
                      style={{
                        fontSize: "20px",
                        marginTop: "17px",
                      }}
                    >
                      Mobile Development
                    </h2>
                    <p style={{ marginTop: "10px", fontSize: "18px" }}>
                      As a React Native developer, I specialize in creating
                      dynamic, visually appealing and cross-platform mob
                      applications
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="skills">
              <Skills />
            </div>
          </div>
        </section>
      </>
    );
  }
}
