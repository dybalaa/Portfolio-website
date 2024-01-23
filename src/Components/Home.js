import React, { Component } from "react";
import { Nav, Navbar, Image, Button } from "react-bootstrap";
import "../Styles/main.css";
import { Link as ScrollLink } from "react-scroll";

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", // Initial state for the name
    };
  }

  componentDidMount() {
    // Set an interval to update the name at regular intervals
    const nameInterval = setInterval(() => {
      const currentName = this.state.name;
      const fullName = "UBAR KASOZI"; // name to be displayed letter by letter

      // Check if the full name is already displayed
      if (currentName === fullName) {
        clearInterval(nameInterval); // Stop the interval when the full name is displayed
      } else {
        // Update the state with the next letter
        const nextLetter = fullName[currentName.length];
        this.setState({ name: currentName + nextLetter });
      }
    }, 400); // Adjust the interval duration as needed
  }

  render() {
    return (
      <>
        <section id="homes-section">
          <Navbar collapseOnSelect expand="lg" fixed="top">
            <Navbar.Brand href="#home">
              <img src="/Images/UbarKasozi.png" alt="Logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ marginLeft: "auto", fontSize: "20px" }}>
                <Nav.Link activeClass="active" spy={true} smooth={true} as={ScrollLink} to="homes-section"  duration={500}>
                  Home
                </Nav.Link>
                <Nav.Link activeClass="active" spy={true} smooth={true} as={ScrollLink} to="about" duration={500}>
                  About
                </Nav.Link>
                <Nav.Link activeClass="active" spy={true} smooth={true} as={ScrollLink} to="project"  duration={500}>
                  Portfolio
                </Nav.Link>
                <Nav.Link activeClass="active" spy={true} smooth={true} as={ScrollLink} to="contact" duration={500}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="home-main">
            <div className="description">
              <p className="description1">
                Hello, I'm <strong>{this.state.name}</strong>,<br />a software
                developer by profession
              </p>
              <p className="description2">
                "I like crafting scalable and robust products with greater user
                experience"
              </p>
              <Button variant="outline-primary" className="button-hire-me">
                Hire me
              </Button>{" "}
              <span style={{ margin: "0 30px" }}></span>
              <Button variant="outline-primary" className="button-resume">
                Resume
              </Button>{" "}
              <div className="social-media-icons">
                <a
                  href="https://github.com/ubarkaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={33} color="black" />
                </a>

                <a
                  href="https://github.com/ubarkaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={33} color="black" />
                </a>

                <a
                  href="https://github.com/ubarkaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={33} color="black" />
                </a>

              </div>
            </div>

            <div className="image-container">
              <Image src="/Images/middleseximage.jpg" fluid />
            </div>
          </div>
        </section>
      
      </>
    );
  }
}
