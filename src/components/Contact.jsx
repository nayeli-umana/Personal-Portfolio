import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      {/* Section Title */}
      <h2 className={styles.sectionTitle}>Contact</h2>

      {/* Contact Information Container */}
      <div className={styles.contactInfo}>
        {/* Contact Item: Email */}
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <p>Email: nayeliumana65@gmail.com</p>
        </div>

        {/* Contact Item: Phone */}
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <p>Phone: (657)-262-9165</p>
        </div>

        {/* Contact Item: Location */}
        <div className={styles.contactItem}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          <p>Location: Santa Ana, California</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
