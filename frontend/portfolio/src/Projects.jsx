import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Cyber Aware Platform",
    desc: "An educational hub about cyber threats. Designed with interactive modules to increase user engagement.",
    tech: ["MERN Stack", "UI/UX", "Security"],
  },
  {
    title: "Faculty Voting System",
    desc: "A secure MERN platform featuring robust authentication and real-time result broadcasting. Focused on data integrity and high-concurrency usability for professional university faculty.",
    tech: ["React", "Express.js", "Node.js", "MongoDB", "JWT"],
  },
  {
    title: "Recipe Sharing Blog",
    desc: "A blog platform where users write recipes and check FAQs. Built with a focus on smooth database management.",
    tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
  },
  {
    title: "Recipe Sharing (v2.0)",
    desc: "Rebuilt the recipe platform using MERN & EJS. Improved scalability and real-time interactivity for users.",
    tech: ["MongoDB", "Express", "Node.js", "EJS"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="bg-blob"
        animate={{ scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="projects-container">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Showcasing my journey from PHP to modern MERN stack development.
        </motion.p>

        <div className="projects-grid">
          {projectData.map((item, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{
                scale: 1.03, // Thoda kam scale taaki professional lage
                y: -5,
                boxShadow: "0px 10px 25px rgba(212, 175, 55, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="tech-stack">
                {item.tech.map((t, i) => (
                  <span key={i} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
