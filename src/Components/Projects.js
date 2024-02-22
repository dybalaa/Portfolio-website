import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import MoreProjects from "./Moreprojects";
import "../Styles/main.css";

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMoreProjects: false,
            hoveredImageIndex: null // Track which image is currently hovered
        };
    }

    handleShowMoreProjects = () => {
        this.setState({ showMoreProjects: true });
    };

    handleCloseMoreProjects = () => {
        this.setState({ showMoreProjects: false });
    };

    handleImageHover = (index) => {
        this.setState({ hoveredImageIndex: index });
    }

    handleImageLeave = () => {
        this.setState({ hoveredImageIndex: null });
    }

    render() {
        const images = [
            { src: "/Images/ACD.png", link: "https://www.acdarts.com/" },
            { src: "/Images/sebyntege.png", link: "https://sebyntege.co.uk/" },
            { src: "/Images/grf.png", link: "https://girlrescuefoundation.org/" }
        ];

        return (
            <section id="project">
                <h1>Projects</h1>
                <hr/>
                <p style={{ fontSize: '17px', marginTop: '30px', marginBottom: '30px', margin: '20px' }}>
                    Explore My Works and Projects, Where Every Line of Code Tells a Unique Story of Innovation and Critical Thinking
                </p>
                <div className="about-content">
                    {images.map((image, index) => (
                        <div className="item_about" key={index} onMouseEnter={() => this.handleImageHover(index)} onMouseLeave={this.handleImageLeave}>
                            <div className="image-container rounded">
                                <Image src={image.src} fluid style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                                {this.state.hoveredImageIndex === index && (
                                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" className="live-link-button">Live Link</Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <Button variant="secondary" className="more-projects-button" onClick={this.handleShowMoreProjects}>
                    More Projects
                </Button>

                <MoreProjects show={this.state.showMoreProjects} handleClose={this.handleCloseMoreProjects} />

            </section>
        );
    }
}
