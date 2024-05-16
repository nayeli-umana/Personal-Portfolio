import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Footer Container */}
      <div className={styles.container}>
        {/* Copyright Information */}
        <p> Copyright &copy; 2024 Nayeli Umana. All Rights Reserved.</p>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          {/* Link to Introduction Section */}
          <a href="#introduction">Introduction</a>

          {/* Link to Skills Section */}
          <a href="#skills">Skills</a>

          {/* Link to Projects Section */}
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
