import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Shailshahvt', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/shailshahvt', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:shails@vt.edu', label: 'Email' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Shail Shah</h3>
          <p>Full Stack Developer passionate about building scalable applications and innovative solutions.</p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4>Connect</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="footer-bottom-content">
          <p>
            © {currentYear} Shail Shah. Crafted with <FaHeart className="heart-icon" /> by Shail Shah
          </p>
          <p>
            Designed and developed with passion for innovation
          </p>
        </div>
      </motion.div>

      <motion.div
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        ↑
      </motion.div>
    </footer>
  );
};

export default Footer; 