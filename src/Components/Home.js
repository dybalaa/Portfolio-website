import React, { Component } from "react";
import { Nav, Navbar, Container, NavDropdown, Carousel } from "react-bootstrap";
import "../Styles/main.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img src="/Images/UbarKasozi.png" alt="Logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{ marginLeft: "auto", fontSize: "20px" }}>
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="About" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Skills</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features">Portfolio</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Carousel fade interval={3000} indicators={false} >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/Images/mgr.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              Hello, I'm <span className="highlight">Ubar Kasozi</span>.
              <br />
              I'm a Front-end Developer.
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../public/Images/UbarKasozi.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../public/Images/UbarKasozi.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
