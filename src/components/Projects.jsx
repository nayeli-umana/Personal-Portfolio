import React from 'react';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Section Title */}
      <h2 className={styles.sectionTitle}>Projects</h2>

      {/* Projects Container */}
      <div className={styles.projectsContainer}>
        {/* Project: Mind Wellness App */}
        <div className={styles.project}>
          <h3>Mind Wellness App</h3>
          <p>
            Mind Wellness is a mobile application designed to support mental health and wellness by providing users with tools to manage their emotional well-being. This app was built using React Native for the frontend and Firebase for backend services such as user authentication and local data management.
          </p>
          <div className={styles.buttonContainer}>
            {/* Button to View Source Code on GitHub */}
            <a href="https://github.com/nayeli-umana/Mind-Wellness" target="_blank" rel="noopener noreferrer" className={styles.button}>View Source Code</a>
          </div>
        </div>

        {/* Project: Play 'n' Win */}
        <div className={styles.project}>
          <h3>Play 'n' Win</h3>
          <p>
            This is a classic tic-tac-toe game featuring a 3x3 grid where two players take turns marking spaces with 'X' or 'O'. The game provides real-time feedback on player turns and announces the winner when a player achieves a winning combination of marks. Developed with React and CSS Modules, this game provides real-time feedback and a responsive gaming experience.
          </p>
          <div className={styles.buttonContainer}>
            {/* Button to View Source Code on GitHub */}
            <a href="https://github.com/nayeli-umana/TicTacToeApp" target="_blank" rel="noopener noreferrer" className={styles.button}>View Source Code</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
