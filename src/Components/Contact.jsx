import '../App.css'; // Import the CSS file for Contact component

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-info">
          <p>Email: <a href="lil_bitty80@yahoo.com">example@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Cscrivens" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;