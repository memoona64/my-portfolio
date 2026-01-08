import React from "react";
import { motion } from "framer-motion";
import stackImg from "./assets/stack.png";
// Variants for sequential animation within the text
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      // ⏱️ INCREASED: Stagger time ko 0.1s se 0.2s kiya
      staggerChildren: 0.2, 
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -50 }, // Thoda zyada bahar se aayega
  visible: { 
    opacity: 1, 
    x: 0,
    // Animation duration ko 1.0s kiya
    transition: { duration: 1.0 } 
  },
};

function Skills() {
  return (
    <section id="skills">
      
      {/* 📝 Text Animation: Left se slide and stagger (Slow) */}
      <motion.div 
        id="skill_text"
        initial="hidden"
        whileInView="visible" 
        variants={textContainerVariants}
        viewport={{ once: true, amount: 0.4 }} 
      >
        <motion.h1 variants={textItemVariants}>
            My Technical Skills
        </motion.h1>

        <motion.p variants={textItemVariants}>
          I am a results-driven MERN Stack Developer with a strong command
          over building scalable, high-performance web applications. My core
          expertise lies in the full-stack development lifecycle, leveraging
          ReactJS for dynamic and modern user interfaces, supported by NodeJS
          and ExpressJS for robust backend architecture and MongoDB for
          flexible data management. Complementing my MERN proficiency, I
          possess essential foundational skills in HTML, CSS, and responsive
          frameworks like Bootstrap. I am adept at designing data models using
          relational databases like MySQL and non-relational solutions like
          Firebase. Furthermore, I bring value through versatile skills,
          including intermediate knowledge of PHP for legacy or hybrid
          projects, and practical experience with Figma for seamless
          design-to-development workflow execution. I am committed to
          delivering clean code and end-to-end digital solutions.
        </motion.p>
      </motion.div>

      {/* 🖼️ Image Animation (Tag Cloud): Zoom/Pop-up from Right (Slower Spring) */}
      <motion.div
        id="skill_img"
        initial={{ scale: 0.5, opacity: 0, x: 100 }} // Thoda zyada bahar se
        whileInView={{ scale: 1, opacity: 1, x: 0 }} 
        transition={{ 
            type: "spring", 
            // 🐌 DECREASED: Stiffness ko kam kiya taaki slow aur smooth ho
            stiffness: 40, 
            // 🧱 INCREASED: Damping badhaya taaki woh jaldi ruk jaye aur bounce na kare
            damping: 15, 
            delay: 0.5 
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={stackImg}
          alt="Technical Skills Tag Cloud"
        />
      </motion.div>
    </section>
  );
}

export default Skills;