import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.0,
      staggerChildren: 0.3,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
};

function Home() {
  return (
    <>
      <section id="header">
        {/* 🧭 Professional Nav Bar */}
        <motion.nav
          className="navbar"
          initial={{ y: -50, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1], // Custom bounce effect
            delay: 0.2,
          }}
        >
          <div className="nav-links">
            <a href="#header">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </motion.nav>

        {/* 🦸 Hero Content */}
        <motion.div
          id="hero"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            id="hero_img"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
              delay: 1.0,
            }}
          >
            <img src="me1.jpg" alt="Memoona Tariq" width={100} />
          </motion.div>

          <motion.h1 variants={heroItemVariants}>Memoona Tariq</motion.h1>

          <motion.p variants={heroItemVariants}>
            I’m a MERN Stack Developer specializing in building modern,
            responsive, and user-friendly web applications.
          </motion.p>
        </motion.div>
      </section>
      {/* Sections with matching IDs */}
      <Skills /> {/* Ensure Skills.jsx has id="skills" */}
      <About /> {/* Already has id="about" */}
      <Projects /> {/* Already has id="projects" */}
      <Contact /> {/* Already has id="contact" */}
      <Footer />
    </>
  );
}

export default Home;
