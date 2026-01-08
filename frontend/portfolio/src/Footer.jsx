import React from "react";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          © {currentYear} — Built by Memoona Tariq Pathan
        </p>
      </div>

      <div className="footer-right">
       
        <a href="https://linkedin.com/in/memoona-tariq-pathan-868878352" target="_blank" rel="noreferrer" className="social-link">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;