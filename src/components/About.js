import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const experiences = [
    {
      year: '07/2024 - Present',
      title: 'Frontend Engineer',
      company: 'Virginia Tech',
      description: 'Led development of the University Service Operations Portal using React, TypeScript, and TailwindCSS, decreasing form completion time by 35%. Collaborated with UX designers and product managers using Agile methodologies.'
    },
    {
      year: '05/2024 - 07/2024',
      title: 'Software Developer Intern',
      company: 'ClinicSpectrum',
      description: 'Built and deployed the ClinicFlow Claims Automation Platform, an end-to-end React + Node.js web application for processing patient claims across 50+ clinics, reducing processing latency by 30%.'
    },
    {
      year: '07/2022 - 05/2023',
      title: 'Software Engineer',
      company: 'Heat Technologies Ltd.',
      description: 'Developed and maintained the Talent Insights AI Dashboard, a hybrid frontend stack (React + Streamlit) to interface with GPT-4 powered HR analytics, enabling salary benchmarking for 100K+ records.'
    }
  ];

  const education = [
    {
      year: '08/2023 - 05/2025',
      degree: 'Master\'s in Computer Science',
      school: 'Virginia Tech',
      description: 'GPA: 3.96/4.0. Relevant coursework: Database Management Systems, Machine Learning, Software Engineering, Information Visualization, Usability Engineering, User Interface and Design, Natural Language Processing, Software Design Quality.'
    },
    {
      year: '07/2018 - 05/2022',
      degree: 'B.S. in Computer Engineering',
      school: 'Svkm\'s Nmims',
      description: 'Relevant coursework: Databases, Software Project Management, Software Engineering, Data Structures and Algorithms, Object-Oriented Programming, Business Modeling and Analytics, Data Algorithm Analysis.'
    }
  ];

  const interests = [
    { icon: FaCode, title: 'Frontend Development', description: 'Passionate about React, TypeScript, and modern web technologies' },
    { icon: FaHeart, title: 'User Experience', description: 'Focused on creating intuitive and accessible user interfaces' },
    { icon: FaGraduationCap, title: 'Continuous Learning', description: 'Always exploring new technologies and best practices' },
    { icon: FaBriefcase, title: 'Problem Solving', description: 'Love tackling complex technical challenges and optimization' }
  ];

  return (
    <div className="about">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Me</h1>
        <p>Get to know me better</p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Who I Am</h2>
          <p>
            I'm a Master's student in Computer Science at Virginia Tech with a strong passion for 
            frontend development and user experience design. With experience at Virginia Tech, ClinicSpectrum, 
            and Heat Technologies, I've developed expertise in React, TypeScript, and modern web technologies.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating user experiences that are both 
            beautiful and functional. My work focuses on building scalable web applications that solve 
            real-world problems and improve user productivity.
          </p>
        </motion.div>

        <motion.div
          className="interests-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>What I Love</h2>
          <div className="interests-container">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="interest-card"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="interest-icon">
                  <interest.icon />
                </div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="experience-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{exp.year}</div>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2>Education</h2>
          <div className="education-container">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              >
                <div className="education-year">{edu.year}</div>
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p>{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 