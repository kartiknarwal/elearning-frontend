import React from 'react';
import './contact.css'; // Make sure this CSS file exists

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We'd love to hear from you. Reach out to us at 
          <a href="mailto:nextzenlearn@gmail.com"> nextzenlearn@gmail.com</a>.
        </p>

        <p>Follow us on social media for updates, tips, and community news:</p>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/nextzenlearn" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/nextzenlearn" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/nextzenlearn" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>

        <p>We look forward to hearing from you!</p>

        <p>
          For support, email us at 
          <a href="mailto:support@nextzenlearn.com"> support@nextzenlearn.com</a>.
        </p>
        <p>
          For partnerships, reach out to 
          <a href="mailto:partnerships@nextzenlearn.com"> partnerships@nextzenlearn.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Contact;
