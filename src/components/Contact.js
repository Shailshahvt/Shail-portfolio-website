import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'shails@vt.edu',
      link: 'mailto:shails@vt.edu'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '540-557-8741',
      link: 'tel:+15405578741'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'San Jose, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Shailshahvt', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/shailshahvt', label: 'LinkedIn' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Get In Touch</h1>
        <p>Let's work together on your next project</p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Let's Connect</h2>
          <p>
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question about my work or want to discuss a potential collaboration, 
            feel free to reach out!
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="contact-item"
                whileHover={{ scale: 1.05, x: 10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="contact-icon">
                  <info.icon />
                </div>
                <div className="contact-text">
                  <h3>{info.title}</h3>
                  <p>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What's this about?"
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      <motion.div
        className="availability"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>Availability</h2>
        <div className="availability-content">
          <div className="availability-item">
            <h3>🟢 Available for Projects</h3>
            <p>I'm currently accepting new projects and opportunities while pursuing my Master's degree.</p>
          </div>
          <div className="availability-item">
            <h3>⏰ Response Time</h3>
            <p>I typically respond within 24 hours during business days.</p>
          </div>
          <div className="availability-item">
            <h3>🌍 Timezone</h3>
            <p>Pacific Time (PT) - I'm flexible with scheduling calls and meetings.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 