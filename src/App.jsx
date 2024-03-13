import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Contact from './Components/Contact.jsx';
import Resume from './Components/Resume.jsx';
import HomeCarousel from './Components/HomeCarousel.jsx'; 


function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Navbar />

          <div className="content">
            <Routes>
            <Route path="/" element={<HomeCarousel />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
