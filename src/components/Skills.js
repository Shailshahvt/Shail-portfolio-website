import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaDatabase, FaCloud, FaMobile } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    { key: 'frontend', label: 'Frontend', icon: FaCode },
    { key: 'backend', label: 'Backend', icon: FaServer },
    { key: 'database', label: 'Database', icon: FaDatabase },
    { key: 'tools', label: 'Tools & DevOps', icon: FaTools },
    { key: 'cloud', label: 'Cloud & APIs', icon: FaCloud },
    { key: 'ai', label: 'AI/ML & LLM', icon: FaMobile }
  ];

  const skills = {
    frontend: [
      { name: 'React.js', level: 95, color: '#61dafb' },
      { name: 'TypeScript', level: 90, color: '#3178c6' },
      { name: 'JavaScript (ES6+)', level: 95, color: '#f7df1e' },
      { name: 'HTML5 & CSS3', level: 90, color: '#e34f26' },
      { name: 'Tailwind CSS', level: 85, color: '#06b6d4' },
      { name: 'Angular', level: 80, color: '#dd0031' },
      { name: 'Chart.js', level: 85, color: '#ff6384' },
      { name: 'D3.js', level: 75, color: '#f9a825' }
    ],
    backend: [
      { name: 'Node.js', level: 90, color: '#339933' },
      { name: 'Python', level: 85, color: '#3776ab' },
      { name: 'FastAPI', level: 80, color: '#009688' },
      { name: 'Flask', level: 75, color: '#000000' },
      { name: 'REST APIs', level: 90, color: '#ff6b6b' },
      { name: 'GraphQL', level: 80, color: '#e535ab' },
      { name: 'C++', level: 70, color: '#00599c' }
    ],
    database: [
      { name: 'PostgreSQL', level: 85, color: '#336791' },
      { name: 'MySQL', level: 80, color: '#00758f' },
      { name: 'MongoDB', level: 75, color: '#47a248' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 95, color: '#f05032' },
      { name: 'Docker', level: 80, color: '#2496ed' },
      { name: 'Kubernetes', level: 75, color: '#326ce5' },
      { name: 'CI/CD', level: 85, color: '#4a90e2' },
      { name: 'Jest', level: 85, color: '#c21325' },
      { name: 'React Testing Library', level: 80, color: '#e535ab' }
    ],
    cloud: [
      { name: 'AWS (EC2, Lambda, S3)', level: 85, color: '#ff9900' },
      { name: 'Heroku', level: 80, color: '#430098' },
      { name: 'Linux CLI', level: 85, color: '#fcc624' },
      { name: 'GitHub Actions', level: 85, color: '#2088ff' }
    ],
    ai: [
      { name: 'GPT-3.5/4', level: 85, color: '#10a37f' },
      { name: 'LangChain', level: 80, color: '#00ff00' },
      { name: 'OpenAI API', level: 85, color: '#412991' },
      { name: 'Machine Learning', level: 75, color: '#ff6b6b' },
      { name: 'Bayesian Optimization', level: 70, color: '#4ecdc4' }
    ]
  };

  return (
    <div className="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Skills & Technologies</h1>
        <p>Here's what I work with</p>
      </motion.div>

      <motion.div
        className="category-tabs"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {skillCategories.map((category) => (
          <motion.button
            key={category.key}
            className={`category-tab ${activeCategory === category.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <category.icon />
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="skills-content"
        key={activeCategory}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="skills-grid">
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}%</span>
              </div>
              
              <div className="skill-progress">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="skills-summary"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>What I Bring to the Table</h2>
        <div className="summary-grid">
          <motion.div
            className="summary-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3>🎯 Performance Optimization</h3>
            <p>I optimize applications for speed and scalability, achieving 35-50% performance improvements through strategic caching and code splitting.</p>
          </motion.div>
          
          <motion.div
            className="summary-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3>🚀 Modern Technologies</h3>
            <p>I stay current with the latest frontend technologies including React, TypeScript, and modern CSS frameworks.</p>
          </motion.div>
          
          <motion.div
            className="summary-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3>🔧 Testing & Quality</h3>
            <p>I implement comprehensive testing strategies achieving 90% test coverage and ensuring robust, reliable applications.</p>
          </motion.div>
          
          <motion.div
            className="summary-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3>📚 AI/ML Integration</h3>
            <p>I integrate AI/ML technologies including GPT-4 and LangChain to create intelligent, data-driven applications.</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="certifications"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>Certifications & Achievements</h2>
        <div className="certifications-grid">
          <motion.div
            className="certification-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3>DevOps Essentials</h3>
            <p>IBM</p>
            <span className="cert-date">Oct 2022</span>
          </motion.div>
          
          <motion.div
            className="certification-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3>Operation Analytics</h3>
            <p>Coursera</p>
            <span className="cert-date">Oct 2022</span>
          </motion.div>
          
          <motion.div
            className="certification-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3>Customer Analytics</h3>
            <p>Coursera</p>
            <span className="cert-date">Sep 2022</span>
          </motion.div>
          
          <motion.div
            className="certification-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <h3>Databases for Back-End Development by Meta</h3>
            <p>Coursera</p>
            <span className="cert-date">Sep 2022</span>
          </motion.div>
          
          <motion.div
            className="certification-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h3>People Analytics</h3>
            <p>Coursera</p>
            <span className="cert-date">Sep 2022</span>
          </motion.div>
          
          <motion.div
            className="certification-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <h3>Version Control by Meta</h3>
            <p>Coursera</p>
            <span className="cert-date">Sep 2022</span>
          </motion.div>
          
          <motion.div
            className="certification-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <h3>SAS Visual Analytics and Base Badge</h3>
            <p>SAS</p>
            <span className="cert-date">Dec 2021</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; 