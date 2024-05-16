import React from 'react';
import styles from './introduction.module.css';
import waveBackgroundImage from '../assets/background.jpeg'; 

const Introduction = () => {
  // Define styles for the wave background image
  const waveBackgroundStyle = {
    backgroundImage: `url(${waveBackgroundImage})`, // Set the background image using imported URL
    backgroundSize: 'cover', // Ensure the background image covers the entire container
    backgroundPosition: 'center', // Position the background image at the center
    backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
    position: 'relative', // Set the position of the container relative to its normal position
    paddingBottom: '360px', 
  };

  return (
    <section id="introduction" className={styles.intro} style={waveBackgroundStyle}>
      <div className={styles.container}>
        {/* Introduction Content */}
        <p className={styles.greeting}>Hello, I'm</p> {/* Greeting text */}
        <p className={styles.name}>Nayeli Umana</p> {/* Name text with custom styling */}
        <p className={styles.details}>Computer Science Student</p> {/* Details about the profession */}
        <p className={styles.details}>From Santa Ana, California</p> {/* Details about the location */}
        <p className={styles.description}>Feel free to explore my projects below and get in touch!</p> {/* Description */}
      </div>
    </section>
  );
};

export default Introduction;
