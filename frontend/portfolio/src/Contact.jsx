import React from "react";
import { motion } from "framer-motion";


function Contact() {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSdbZK1gRTl4Dle79axaYQCK0LJUHxMume1pKYteMNWKWWR03w/viewform?usp=dialog";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        
        {/* Left Side: Text Content */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>
            Let’s build something <br/> 
            <span style={{ color: 'var(--color-accent-gold)' }}>meaningful.</span>
          </h1>
          <p>
            I’m always open to discussing new projects or creative ideas. 
            Click the button to fill out my inquiry form and let's get started.
          </p>
          <div className="contact-details">
            <span className="detail-item">📩 memoonatariqpathan@gmail.com</span>
            <span className="detail-item">📍 Remote / Worldwide</span>
          </div>
        </motion.div>

        {/* Right Side: Professional Centered Button with Background */}
        <motion.div 
          className="contact-form-container" // Using your CSS container class
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '350px',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <motion.a 
            href={formLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Inquiry
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;