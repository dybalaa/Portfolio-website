import React, { Component } from "react";
import { Nav, Navbar, Container, NavDropdown, Image } from "react-bootstrap";
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

        <div className="image-container">
          <Image src="/Images/kun2.jpeg" fluid />
        </div>

        <div className="image-caption">
          Hello, I'm <span className="highlight">Ubar Kasozi</span>.
          <br />
          I'm a Front-end Developer.
        </div>
      </>
    );
  }
}
