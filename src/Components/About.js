import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTachometerAlt,
  faMobileAlt,
  faShieldAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import "../Styles/main.css";
import Skills from "./Skill";

export default class About extends Component {
  render() {
    return (
      <>
        <div>
          <h2>Who I am</h2>
          <div className="profile">
            <p>
              I'm a First Class Graduate of Information Technology and Business
              Information Systems, and a skilled Web Developer with over 2 years
              of experience.
            </p>
            <h2>My Services</h2>

            <ul className="services-list">
              <li>
                <FontAwesomeIcon icon={faShieldAlt} size="2x" />
                <span>Web Security</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <span>Mail Integration</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
                <span>Speed Optimization</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faWordpress} size="2x"  />
                <span>WordPress CMS Expert</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} size="2x"  />
                <span>Responsive Web designs</span>
              </li>
              
              <li>
                <FontAwesomeIcon icon={faSearch} size="2x" />
                <span>Search Engine Optimization</span>
              </li>
            </ul>
          </div>
          
          <div className="skills">
            <Skills />
          </div>
        </div>
      </>
    );
  }
}
