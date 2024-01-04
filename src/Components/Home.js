import React, { Component } from "react";
import { Nav, Navbar,Image,Button } from "react-bootstrap";

import "../Styles/main.css";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";


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
      const fullName = "Ubar Kasozi"; // name to be displayed letter by letter

      // Check if the full name is already displayed
      if (currentName === fullName) {
        clearInterval(nameInterval); // Stop the interval when the full name is displayed
      } else {
        // Update the state with the next letter
        const nextLetter = fullName[currentName.length];
        this.setState({ name: currentName + nextLetter });
      }
    }, 800); // Adjust the interval duration as needed
    
  }


  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand href="#home">
              <img src="/Images/UbarKasozi.png" alt="Logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{ marginLeft: "auto", fontSize: "20px" }}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#features">Portfolio</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>


        <div>

        <div className="description">
          <p className="description1">Hello, I'm <strong>{this.state.name}</strong>,<br/>
           a full stack web developer and designer</p>
          <p className="description2">"I like crafting scalable and robust products with great user experience"</p>

          <Button variant="outline-primary">Preview CV</Button>{' '}
      <Button variant="outline-primary">Download CV</Button>{' '}

          <div className="social-media-icons">
          <a
            href="https://twitter.com/ubarkaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={40} color="black" />
          </a>

          <a
            href="https://linkedin.com/in/UbarKasozi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} color="black" />
          </a>

          <a
            href="https://github.com/ubarkaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} color="black" />
          </a>

          <a
            href="https://facebook.com/UbarKunDybala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={40} color="black" />
          </a>
        </div>


        </div>

        <div className="image-container">
          <Image src="/Images/middleseximage.jpg" fluid />
        </div>

        </div>
       
      </>
    );
  }
}
