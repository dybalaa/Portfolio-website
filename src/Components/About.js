import React, { Component } from "react";
import "../Styles/main.css";
import { Card } from "react-bootstrap";

const programmingLanguages = [
  { name: 'HTML', icon: '/Images/Htmlicon.png' },
  { name: 'JavaScript', icon: '/Images/js.png'  },
  { name: 'TypeScript', icon: '/Images/typescript.png'},
  { name: 'Python', icon: '/Images/python.png' },
  
];

const frameworks = [
  { name: 'React', icon: '/Images/react.png' },
  { name: 'Angular', icon: '/Images/angular.png'  },
  { name: 'Node js', icon: '/Images/node.png' },
  { name: 'Bootstrap', icon: '/Images/bootstrap.png'},
  { name: 'Tailwind CSS', icon: '/Images/tailwind.png' },
  
];

const tools = [
  { name: 'Git', icon: '/Images/git.png' },
  { name: 'AWS', icon: '/Images/aws.png'  },
  { name: 'Figma', icon: '/Images/figma.png'},
  { name: 'Firebase', icon: '/Images/firebase.png' },
  
];


export default class About extends Component {
  
  render() {
    return (
      <>
        <section id="about" >
          <h1>Who I am</h1>

          <h2>My <span className="blue-text">skills</span></h2>

          <div className="about-content">
            <div className="item">
              <h3>Programming Language</h3>

              <ul>
                {programmingLanguages.map((language, index) => (
                  <li key={index}>
                    <img src={language.icon} alt={language.name} className="icon-image" />
                    {language.name}
                  </li>
                ))}
              </ul>

              </div>

            <div className="item">
              
              <h3>Frameworks & Libraries</h3>

              <ul>
                {frameworks.map((language, index) => (
                  <li key={index}>
                    <img src={language.icon} alt={language.name} className="icon-image" />
                    {language.name}
                  </li>
                ))}
              </ul>

            </div>

            <div className="item">

              <h3>Tools & Platforms</h3>

              <ul>
                {tools.map((language, index) => (
                  <li key={index}>
                    <img src={language.icon} alt={language.name} className="icon-image" />
                    {language.name}
                  </li>
                ))}
              </ul>

            </div>
          </div>

                  <h2>My <span className="blue-text">Services</span></h2>

          <div className="about-content">

                  <div className="item">
                  <Card className="contact-card">
            <Card.Body>
                  <img src="/Images/webdev.png" className="icon-image" alt="web dev"/>
                    <h2
                      style={{
                        fontSize: "18px",
                        marginTop: "17px",
                      }}
                    >
                      Web Development
                    </h2>
                    <p style={{ marginTop: "10px", fontSize: "18px" }}>

                    specialising in full-stack development for web applications and 
                    dynamic, responsive websites. 
                    I design user interfaces that are visually
                     appealing, interactive, and ensure a smooth user experience.

                   </p>

                   </Card.Body>
                  </Card>

                  </div>

                 

                  <div className="item">
                   <Card className="contact-card">
                      <Card.Body>

                      <img src="/Images/mobiledev.png" className="icon-image" alt="mobile dev" />
                    <h2
                      style={{
                        fontSize: "18px",
                        marginTop: "17px",
                      }}
                    >
                      Mobile Development
                    </h2>
                    <p style={{ marginTop: "10px", fontSize: "18px" }}>
                    I specialise in developing dynamic, responsive mobile applications 
                    as a React Native developer. I create interactive interfaces that
                     guarantee a visually appealing and user experience.
                    </p>

                      </Card.Body>
                    </Card> 
                  

                    </div>

                    <div className="item">

                      <Card className="contact-card">

                      <Card.Body>

                      <img src="/Images/collaboration.png" className="icon-image" alt="collaboration" />
                    <h2
                      style={{
                        fontSize: "18px",
                        marginTop: "17px",
                      }}
                    >
                      Consultation & collaboration
                    </h2>
                    <p style={{ marginTop: "10px", fontSize: "18px" }}>
                    
                    Get advice on technology stacks or work with your group. With my consulting services,
                     you may be sure that your projects follow industry standards and best practices.
                    </p>

                      </Card.Body>

                      </Card>
                   
                    
                    </div>


          </div>

        </section>
      </>
    );
  }
}
