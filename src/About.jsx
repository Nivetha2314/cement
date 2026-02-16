import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route, Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "./images/logo.png";
import heroImage from "./images/heroImage.jpg"; 
import './About.css';
function About() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
            <div className="container">
             <a className="navbar-brand d-flex" href="#">
        <div className="logo-image">
          <img src={logo} alt="Cement Logo" className="img-fluid" />
        </div>  
    </a>
    
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
    
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav gap-3">
                 <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                  <li className="nav-item"><a className="nav-link" href="#">Plants</a></li> 
                  <li className="nav-item"><a className="nav-link" href="#">Plants</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                  <li className="nav-item">
                   <button className="get-btn">GET IN TOUCH</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section className="about-hero">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* LEFT TEXT */}
          <div className="col-lg-5 hero-left d-flex align-items-center">
            <div className="ps-5">
              <h1 className="hero-title">About</h1>
              <p className="breadcrumb-text">
                CHETTINAD CEMENT <span>&gt;</span> ABOUT
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-7 hero-right">
            <img
              src={heroImage}
              alt="Banner"
              className="hero-img"
            />
          </div>
        </div>
      </div>

      {/* TRIANGLE SHAPES */}
      <div className="triangle triangle-blue"></div>
      <div className="triangle triangle-green"></div>
      <div className="triangle triangle-light"></div>
    </section>

    <section className="excellence-section py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-7 pe-lg-5">
            <h2 className="ex-title">
              63 years of <span>Excellence</span>
            </h2>

            <p className="ex-text">
              Founded in 1962, Chettinad Cement has emerged as a leader in the
              cement industry, known for its unwavering commitment to quality
              and innovation. Over the decades, we have cemented our reputation
              as a reliable partner in the construction sector, delivering
              products that meet the highest standards of durability and
              performance.
            </p>

            <p className="ex-text">
              Our extensive portfolio includes a comprehensive range of cement
              products tailored to meet diverse construction needs. From
              high-strength Portland cement to eco-friendly blended varieties
              and specialized formulations, each product is meticulously crafted
              using advanced technology and stringent quality control processes.
              We are dedicated to sustainable practices, ensuring that our
              operations prioritize environmental conservation and community
              welfare.
            </p>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="col-lg-1 d-none d-lg-flex justify-content-center">
            <div className="vertical-divider"></div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=700&q=80"
              alt="Chairman"
              className="img-fluid portrait-img"
            />
            <h6 className="portrait-name mt-3">
              Dr. Priya Nair
            </h6>
          </div>
        </div>
      </div>
    </section>

      <section className="core-values-section text-white">
      <div className="container text-center">
        <h2 className="core-title">Core Values of Chettinad Group</h2>

        <p className="core-text mt-4">
          The House of Chettinad was founded in 1912 by Dr. Raja Sir Annamalai Chettiar, 
          a visionary, idealist, entrepreneur, educationist, and philanthropist of the 19th century. 
          Dr. Chettiar saw his group's future in fostering industrial and business development in order 
          to improve society economically. The House of Chettinad's dynamic vision changes with the times, 
          but its core values—strive, save, and serve—haven't changed since 1912. The organization carried 
          on the legacy of its beloved founder, Dr. Raja Sir Muthiah Chettiar, and achieved greater success 
          by realizing the dreams of this visionary, idealist, entrepreneur, educationist, and philanthropist. 
          Sir Dr. Muthiah Ramaswamy, the founder's grandson, is a multifaceted individual who has worked tirelessly 
          to advance the growth of Chettinad Group. He is an entrepreneur, educationist, philanthropist, sportsman, 
          and guardian of Tamil arts, culture, and values.
        </p>

        <p className="core-text mt-4">
          In order to meet the nation's expanding need for cement, Chettinad Cement Corporation Private Limited 
          (formerly Chettinad Cement Corporation Limited) was established in 1962. Production at the company's 
          first manufacturing facility, in Tamil Nadu's Puliyur, Karur District, began in April 1968. Today, 
          Chettinad Cement Corporation Private Limited stands as the flagship company of the liveliest and most 
          dynamic group in South India, led by its Managing Director, Sir Dr. Muthiah Ramaswamy, who is adaptable, 
          dynamic, and practical. In addition to cement, the Group currently works in a wide range of industries, 
          including granite, engineering, silica, building, plantations, education, health care, electricity, 
          transportation, stevedoring, clearing & forwarding and logistics.
        </p>
      </div>
    </section>

    <footer>
    
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row">
    
            {/* Column 1 - Logo & Address */}
            <div className="col-md-4 footer-col">
              <img 
                src={logo}
                alt="Chettinad Cement"
                className="footer-logo"
              />
    
              <p>
                <FaMapMarkerAlt className="footer-icon" />
                Meyyammai Building, 16/33, Gandhi Nagar, 2nd Main Road,
                Adyar, Chennai, Tamil Nadu, India - 600020
              </p>
    
              <p>
                <FaPhoneAlt className="footer-icon" />
                +91 96599 11155
              </p>
    
              <p>
                <FaEnvelope className="footer-icon" />
                info@chettinadcement.com
              </p>
            </div>
    
    
            {/* Column 2 - Products */}
            <div className="col-md-3 footer-col">
              <h5>Products</h5>
              <ul>
                <li>MAXCRETE PREMIUM PPC</li>
                <li>SUPER GRADE PPC</li>
                <li>HOLLOW BLOCK CEMENT</li>
                <li>COMPOSITE</li>
                <li>OPC 53 GRADE</li>
                <li>OPC 43 GRADE</li>
                <li>CLASSIC SLAG CEMENT</li>
              </ul>
            </div>
    
    
            {/* Column 3 - Manufacturing Plants */}
            <div className="col-md-3 footer-col">
              <h5>Manufacturing Plants</h5>
              <ul>
                <li>Tamil Nadu</li>
                <li>Andhra Pradesh</li>
                <li>Karnataka</li>
                <li>Maharashtra</li>
                <li>Telangana</li>
              </ul>
            </div>
    
    
            {/* Column 4 - Important Links */}
            <div className="col-md-2 footer-col">
              <h5>Important Links</h5>
              <ul>
                <li>Environment</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Cookies</li>
                <li>Caution Note</li>
                <li>Contact Us</li>
              </ul>
            </div>
    
          </div>
        </div>
      </div>
    
    
      {/* Bottom Green Bar */}
      <div className="footer-bottom">
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
    
        <p>
          © 2026 Chettinad Cement Corporation Private Limited,
          a Chettinad Group Company. All rights reserved.
        </p>
      </div>
    
    </footer>

    </>
    );
}

export default About;