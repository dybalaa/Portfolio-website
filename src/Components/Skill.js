import "../Styles/main.css";
import React, { useEffect, useState } from 'react'; 


const Skills = () => {
    const [animate, setAnimate] = useState(true);
  
    useEffect(() => {
    console.log('useEffect triggered');
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 2000); // Adjust the delay time as needed
  
      // Clear the timer when the component is unmounted
      return () => clearTimeout(timer);
    }, []);

  const skillsData = [
    { name: 'HTML, CSS3, JavaScript(ES6+)', percentage: 75 },
    { name: 'React & Angular', percentage: 65 },
    { name: 'MongoDB, MSSQL', percentage: 65 },
    { name: 'UI/UX', percentage: 55 },
    { name: 'TypeScript', percentage: 60 },
    { name: 'Node, Django', percentage: 65 },
    { name: 'WordPress', percentage: 70 },
    { name: 'Git & GitHub', percentage: 70 },
  ];

  return (
    <div className={`skills-container ${animate ? 'animate' : ''}`}>
        <h2>My Technical Skils</h2>
    <ul className='skills-list'>
      {skillsData.map((skill, index) => (
        <li key={index} className='skill-item'>
          <div className='skill-bar'>
            <div
              className='skill-progress'
              style={{ width: `${skill.percentage}%` }}
            >
              <span className='skill-name'>{skill.name}</span>
            </div>
          </div>
          <span className='skill-percentage'>{skill.percentage}%</span>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Skills;
