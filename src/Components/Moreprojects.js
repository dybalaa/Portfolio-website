import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import "../Styles/main.css";

const MoreProjects = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Team Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          I fully contributed to the mobile application projects belows as a part
          of the development team in some roles as a junior developer or
          freelancer. This outlines my ability to collaborate and work
          effectively in cross functional teams.
        </p>
        <div>
          <div className="project1">
            <Image
              src="/Images/yellowbirdapp.png"
              fluid
              style={{ width: "100%", marginLeft: "0px", height: "300px" }}
            />
          </div>

          <div className="project2">
            <Image
              src="/Images/katale.png"
              fluid
              style={{ width: "100%", marginLeft: "5px", height: "300px" }}
            />
          </div>

          <div className="project3">
            <Image
              src="/Images/nsimbi.png"
              fluid
              style={{ width: "100%", marginLeft: "5px", height: "300px" }}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={handleClose} className="button-hire-me">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoreProjects;
