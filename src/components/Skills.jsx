import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faCode, faLaptopCode, faDatabase } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import styles from './skills.module.css'; // Import styles from CSS module

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Section Title */}
      <h2 className={styles.sectionTitle}>Skills</h2>

      {/* Skills Container */}
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <FontAwesomeIcon icon={faCode} className={styles.icon} /> {/* FontAwesome icon for languages */}
          <div>
            <h3>Languages</h3> {/* Skill category title */}
            <p>C++, Python</p> {/* Skills list */}
          </div>
        </div>

        <div className={styles.skill}>
          <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} /> {/* FontAwesome icon for frontend development */}
          <div>
            <h3>Frontend Development</h3> {/* Skill category title */}
            <p>HTML, CSS, JavaScript, ReactJS, React Native</p> {/* Skills list */}
          </div>
        </div>

        <div className={styles.skill}>
          <FontAwesomeIcon icon={faDatabase} className={styles.icon} /> {/* FontAwesome icon for backend */}
          <div>
            <h3>Backend</h3> {/* Skill category title */}
            <p>Firebase, Node.js</p> {/* Skills list */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
