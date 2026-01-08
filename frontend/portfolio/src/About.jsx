import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Variants for sequential animation within the text
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // ⏱️ INCREASED: Har child element ab 0.25s ke baad shuru hoga (slower stagger)
      staggerChildren: 0.25, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Thoda zyada neeche se aayega
  visible: { opacity: 1, y: 0 },
};


function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 }); 

  return (
    <section id="about" ref={ref}>
      
      {/* 🖼️ Image Animation: Left se slide aur thoda zoom in */}
      <motion.div
        id="about_img"
        initial={{ x: -150, scale: 0.7, opacity: 0 }} // Thoda zyada bahar se
        animate={isInView ? { x: 0, scale: 1, opacity: 1 } : {}}
        transition={{ 
            type: "spring", 
            // 🐌 DECREASED: Stiffness ko kam kiya taaki bounce slow ho
            stiffness: 40, 
            damping: 15, // Damping add kiya for smoother stop
            duration: 1.2, // Total duration badhaya
            delay: 0.3 
        }}
      >
        <img src="/src/assets/me2.png" alt="Memoona Tariq" />
      </motion.div>

      {/* 📝 Text Animation: Right se slide aur staggering */}
      <motion.div
        id="about_text"
        initial="hidden" 
        animate={isInView ? "visible" : "hidden"} 
        variants={containerVariants}
      >
        {/* H1 Animation (Individual item) */}
        <motion.h1 variants={itemVariants} transition={{ duration: 1.0 }}>
            About me
        </motion.h1>

        {/* Paragraph Lines Animation (Staggered) */}
        <motion.p>
          <motion.span variants={itemVariants} transition={{ duration: 1.0 }} style={{ display: 'block' }}>
            I am a results-driven MERN Stack Developer with a completed BSIT degree and strong
            experience in building modern, responsive, and secure web applications.
          </motion.span>
          <motion.span variants={itemVariants} transition={{ duration: 1.0 }} style={{ display: 'block' }}>
            I work with MongoDB, Express.js, React.js, and Node.js, and also have expertise in HTML, CSS, 
            JavaScript, PHP, MySQL, and WordPress.
          </motion.span>
          
          {/* Inner P tag */}
          <motion.p variants={itemVariants} transition={{ duration: 1.0 }}>
            I enjoy creating clean, efficient digital solutions and continuously learning new technologies 
            to deliver high-quality results.
          </motion.p>
        </motion.p>
      </motion.div>
    </section>
  );
}

export default About;