import React from "react";
import './Footer.css';  // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-description">
          <p>
            Thank you for visiting the PAN Registration Portal.
          </p>
        </div>
        <div className="footer-links">
          
          <div className="team-section">
            <h3>Our Team</h3>
            <div className="team-row">
              <div className="team-member">
                <h4>Manjila Thapa</h4>
                <p>Email: <a href="thapamanjila09@gmail.com">thapamanjila09@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/manjilaaa" target="_blank" rel="noopener noreferrer">github.com/manjilaaa</a></p>
              </div>
              <div className="team-member">
                <h4>Mandira Shiwakoti</h4>
                <p>Email: <a href="mandeerashiwakoti@gmail.com">mandeerashiwakoti@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/Mandira-Shiwakoti" target="_blank" rel="noopener noreferrer">github.com/mandira-shiwakoti</a></p>
              </div>
              <div className="team-member">
                <h4>Krizan Vaidhya</h4>
                <p>Email: <a href="kzn.brl@gmail.com">kzn.brl@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/kznvaidya" target="_blank" rel="noopener noreferrer">github.com/kznvaidya</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 PAN Registration Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
