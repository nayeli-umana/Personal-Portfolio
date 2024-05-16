import React from 'react';
import { Link } from 'react-scroll';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Navigation Menu */}
      <nav className={styles.nav}>
         {/* Unordered List for Navigation Links */}
        <ul className={styles.navList}>
           {/* Introduction Link */}
          <li className={styles.navItem}>
            <Link
              to="introduction"
              spy={true}
              smooth={true} //Enables smooth scrolling behavior
              offset={-70} // Adjust offset based on your layout
              duration={500}
              className={styles.navLink}
            >
              Introduction
            </Link>
          </li>
          {/* Skills Link */}
          <li className={styles.navItem}>
            <Link
              to="skills"
              spy={true}
              smooth={true} //Enables smooth scrolling behavior
              offset={-70} // Ensures proper scrolling
              duration={500}
              className={styles.navLink}
            >
              Skills
            </Link>
          </li>
          {/* Projects Link */}
          <li className={styles.navItem}>
            <Link
              to="projects"
              spy={true}
              smooth={true} //Enables smooth scrolling behavior
              offset={-70} // Ensures proper scrolling
              duration={500}
              className={styles.navLink}
            >
              Projects
            </Link>
          </li>
           {/* Contact Link */}
          <li className={styles.navItem}>
            <Link
              to="contact"
              spy={true}
              smooth={true} //Enables smooth scrolling behavior
              offset={-70} // Ensures proper scrolling
              duration={500}
              className={styles.navLink}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

