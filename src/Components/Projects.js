import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import MoreProjects from "./Moreprojects";
import "../Styles/main.css";

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showMoreProjects: false,
        };
      }
    
      handleShowMoreProjects = () => {
        this.setState({ showMoreProjects: true });
      };
    
      handleCloseMoreProjects = () => {
        this.setState({ showMoreProjects: false });
      };

  render() {
    return (
      <section id="project">
        <h1>Projects</h1>
        <p style={{fontSize:'18px', marginTop:'50px',marginBottom:'50px'}}>
        Explore My Works and Projects, Where Every Line of Code Tells a Unique Story of <br/>Innovation.
        </p>
        <div>
          <div className="project project1">
            <Image src="/Images/ACD.png" fluid style={{ width: '100%', height: '320px' }} />
            <a href="https://www.acdarts.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="live-preview-button">
                Live Preview
              </Button>
            </a>
          </div>

          <div className="project project2">
            <Image src="/Images/sebyntege.png" fluid style={{ width: '100%', height: '320px' }} />
            <a href="https://sebyntege.co.uk/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="live-preview-button">
                Live Preview
              </Button>
            </a>
          </div>

          <div className="project project3">
            <Image src="/Images/grf.png" fluid style={{ width: '100%', height: '320px' }} />
            <a href="https://girlrescuefoundation.org/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="live-preview-button">
                Live Preview
              </Button>
            </a>
          </div>
        </div>

        <Button variant="secondary"  onClick={this.handleShowMoreProjects}>
            More Projects
          </Button>

          <MoreProjects show={this.state.showMoreProjects} handleClose={this.handleCloseMoreProjects} />

      </section>
    );
  }
}
