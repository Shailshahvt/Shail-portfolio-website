import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'University Service Operations Portal',
      description: 'Led development of a modular, customer-facing web interface using React, TypeScript, and TailwindCSS. Decreased form completion time for service requests by 35% through optimized state management and reusable components.',
      image: `${process.env.PUBLIC_URL}/images/vt-portal.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Jest', 'AWS S3'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'ClinicFlow Claims Automation Platform',
      description: 'Built and deployed an end-to-end React + Node.js web application for processing patient claims across 50+ clinics. Reduced average processing latency by 30% via streamlined form and validation logic.',
      image: `${process.env.PUBLIC_URL}/images/clinicflow.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL', 'Chart.js'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Talent Insights AI Dashboard',
      description: 'Developed a hybrid frontend stack (React + Streamlit) to interface with GPT-4 powered HR analytics, enabling salary benchmarking and policy summary generation for 100K+ records.',
      image: `${process.env.PUBLIC_URL}/images/ai-dashboard.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
      technologies: ['React', 'Streamlit', 'GPT-4', 'Python', 'AWS'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Car Medic Platform',
      description: 'Designed and developed a web application to help users locate nearby car mechanics based on region and service type. Built responsive UI with HTML, CSS, and JavaScript, and implemented backend APIs using Node.js and Express.',
      image: `${process.env.PUBLIC_URL}/images/car-medic.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop&crop=center',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Google Maps API'],
      category: 'fullstack',
      github: 'https://github.com/Car-Medic/CarMedic',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Multi-Agent Search Simulation Platform',
      description: 'Developed a distributed agent-based framework for simulating learning behavior over complex landscapes. Integrated Bayesian optimization and RL strategies in a reproducible Python stack, supporting research in adaptive learning systems.',
      image: `${process.env.PUBLIC_URL}/images/multi-agent.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop&crop=center',
      technologies: ['Python', 'Bayesian Optimization', 'Reinforcement Learning', 'Research'],
      category: 'backend',
      github: 'https://github.com/Shailshahvt/multi-agent-search',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'HR Data Visualization Engine',
      description: 'Significantly boosted interface responsiveness by 50% through implementing skeleton UIs, route-based code splitting, and strategic caching strategies for handling large structured HR datasets.',
      image: `${process.env.PUBLIC_URL}/images/hr-viz.jpg`,
      fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
      technologies: ['React', 'D3.js', 'Code Splitting', 'Caching', 'AWS'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getTechnologyIcon = (tech) => {
    const iconMap = {
      'React': FaReact,
      'Node.js': FaNodeJs,
      'PostgreSQL': FaDatabase,
      'Python': FaPython
    };
    return iconMap[tech] || null;
  };

  return (
    <div className="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on</p>
      </motion.div>

      <motion.div
        className="filter-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {filters.map((filterOption) => (
          <motion.button
            key={filterOption.key}
            className={`filter-btn ${filter === filterOption.key ? 'active' : ''}`}
            onClick={() => setFilter(filterOption.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filterOption.label}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="projects-grid"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    if (project.fallbackImage) {
                      e.target.src = project.fallbackImage;
                    }
                  }}
                />
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => {
                    const Icon = getTechnologyIcon(tech);
                    return (
                      <span key={techIndex} className="tech-tag">
                        {Icon && <Icon />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
                
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2>Interested in working together?</h2>
        <p>Let's discuss your project and see how I can help bring your ideas to life.</p>
        <motion.button
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/contact'}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Projects; 