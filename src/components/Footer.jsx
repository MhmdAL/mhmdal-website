import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>I'm always open to discussing new opportunities and interesting projects.</p>
            <div className="contact-links">
              <a href="tel:+97466533930" className="contact-link">
                📞 +974 66533930
              </a>
              <a href="mailto:mohammadalnoss@outlook.com" className="contact-link">
                📧 mohammadalnoss@outlook.com
              </a>
              <a href="https://www.linkedin.com/in/mohamad-al-nass-16552b172" className="contact-link" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
              <a href="https://github.com/MhmdAL/" className="contact-link" target="_blank" rel="noopener noreferrer">
                🔗 GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
