import React, { Component } from "react";
import { Nav, Navbar, Image, Button } from "react-bootstrap";
import "../Styles/main.css";
import { Link as ScrollLink } from "react-scroll";



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", // Initial state for the name
      isNavbarCollapsed: true,
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

  handleNavLinkClick = () => {
    // Close the navbar when a link is clicked
    this.setState({ isNavbarCollapsed: true });
  };

  render() {
    return (
      <>
        <section id="homes-section">
          <Navbar
            collapseOnSelect
            expand="lg"
            fixed="top"
            variant="dark"

            expanded={!this.state.isNavbarCollapsed}
          >
            <Navbar.Brand href="#home">
              <h1>UBAR KASOZI</h1>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="ml-auto" 
              onClick={() =>
                this.setState({
                  isNavbarCollapsed: !this.state.isNavbarCollapsed, // to collapse the navbar in mobile
                })
              }
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{ marginLeft: "auto" }}>
                <Nav.Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  as={ScrollLink}
                  to="homes-section"
                  duration={500}
                  onClick={this.handleNavLinkClick} // event added to monitor actions of the toggler and close it
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  as={ScrollLink}
                  to="about"
                  duration={500}
                  onClick={this.handleNavLinkClick}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  as={ScrollLink}
                  to="project"
                  duration={500}
                  onClick={this.handleNavLinkClick}
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  as={ScrollLink}
                  to="contact"
                  duration={500}
                  onClick={this.handleNavLinkClick}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="home-main">
            <div className="description">
              <p className="description1">
                Hello and welcome{" "}
                <Image
                  src="/Images/hello.png"
                  style={{ width: "30px", height: "30px" }}
                />{" "}
                <br /> I'm <strong>{this.state.name}</strong>, a software
                developer by profession
              </p>
              <p className="description2">
                I'm a First Class Graduate of Information Technology and a
                technology ethusiast with expertise web development where I
                create scalable, robust and user-friendly websites and
                applications
              </p>
              <Button
                variant="outline-primary"
                className="button-hire-me"
                as={ScrollLink}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Hire me
              </Button>{" "}
              <span style={{ margin: "0 30px" }}></span>
              <Button variant="outline-primary" className="button-resume">
                Resume
              </Button>{" "}
              <div className="social-media-icons">
                <a
                  href="https://linkedin.com/in/kasozi-ubar-315b65253/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Images/linkedin2.png"
                    className="icon2-image"
                    alt="linkedin"
                  />
                </a>

                <a
                  href="https://github.com/ubarkaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Images/github.png"
                    className="icon2-image"
                    alt="github"
                  />
                </a>

                <a
                  href="https://www.facebook.com/lubega.ubar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Images/facebook.png"
                    className="icon2-image"
                    alt="facebook"
                  />
                </a>
              </div>
            </div>

            <div className="image-container">
              <Image src="/Images/middleseximage-removebg-preview.png" fluid />
            </div>
          </div>
        </section>
      </>
    );
  }
}
