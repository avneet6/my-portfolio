import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';


function Projects() {
  const projectList = [
    { title: 'Project 1', description: 'AI, which stands for artificial intelligence, is a branch of computer science that develops machine systems capable of demonstrating behaviors linked to human intelligence. AI programs use data collected from different interactions to improve the way they mimic humans in order to perform tasks such as learning, planning, knowledge representation, perception and problem-solving.', img: 'project1.png' },
    { title: 'Project 2', description: 'Machine learning enables computers to learn from data and make decisions or predictions without being explicitly programmed to do so.', img: 'project2.jpg' },
    { title: 'Project 3', description: 'Data science is the study of data to extract insights that can be used to guide decision making and strategic planning. It combines principles and practices from fields like mathematics, statistics, artificial intelligence, and computer engineering.', img: 'project3.jpg' },
    { title: 'Project 4', description: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users through ransomware; or interrupting normal business processes.', img: 'project4.jpg' }
   
  ];

  return (
    <motion.div className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <motion.div className="project-card" key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
